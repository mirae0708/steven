function handleInput(val) {
    try {
        console.log('handleInput:', val);
        if (!isMark(val) || currentGame.length >= CONFIG.TOTAL_ROWS || (inputBuffer && inputBuffer.length >= 3)) return;

        const prevWins = stats.wins;
        inputBuffer.push(val);

        if (inputBuffer.length === 3) {
            currentGame.push([...inputBuffer]);
            inputBuffer = [];
        }

        recomputeDerivedState();
        save();
        render();
        updateUI();

        if (strategyMissStreaks.lastHit === true) triggerCelebration();
        if (currentGame.length >= CONFIG.TOTAL_ROWS && inputBuffer.length === 0) archive();
    } catch (e) {
        console.error('Input Error:', e);
    }
}

function undo() {
    if (inputBuffer.length > 0) {
        inputBuffer.pop();
    } else if (currentGame.length > 0) {
        inputBuffer = [...currentGame.pop()];
        inputBuffer.pop();
    }

    recomputeDerivedState();
    save();
    render();
    updateUI();
}

function resetGame() {
    // 리셋 시 현재까지의 데이터도 히스토리에 저장 (학습용)
    if (currentGame.length > 0) {
        archive();
    }
    currentGame = [];
    inputBuffer = [];
    recomputeDerivedState();
    save();
    render();
    updateUI();
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    if (location.protocol === 'file:') {
        console.info('Service worker skipped: file:// does not support registration.');
        return;
    }

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(CONFIG.SERVICE_WORKER_PATH).catch(error => {
            console.error('Service worker registration failed.', error);
        });
    });
}
function exportData() {
    const data = {
        storage: JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || '{}'),
        history: JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]'),
        timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PB_Master_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!confirm('현재 모든 데이터가 백업 파일로 교체됩니다. 계속하시겠습니까?')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.storage) localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data.storage));
            if (data.history) localStorage.setItem(CONFIG.HISTORY_KEY, JSON.stringify(data.history));
            alert('가져오기 성공! 앱을 재시작합니다.');
            window.location.reload();
        } catch (err) {
            alert('유효하지 않은 파일 형식입니다.');
        }
    };
    reader.readAsText(file);
}

function setup() {
    const setClick = (id, fn) => {
        const el = document.getElementById(id);
        if (el) el.onclick = fn;
    };

    document.querySelectorAll('.btn-input').forEach(button => {
        button.onclick = () => handleInput(button.dataset.val);
    });

    setClick('btn-undo', () => undo());
    setClick('btn-reset', () => confirm('리셋?') && resetGame());
    setClick('btn-reload', () => window.location.reload());
    setClick('btn-zen', (e) => {
        document.body.classList.toggle('zen-active');
        e.currentTarget.classList.toggle('active');
        render();
    });
    
    if (dom.historyBtn) dom.historyBtn.onclick = () => showAnalysis();
    if (dom.modalClose) dom.modalClose.onclick = () => dom.analysisModal.classList.add('hidden');

    setClick('btn-export', () => exportData());
    
    const importInput = document.getElementById('import-file');
    if (importInput) {
        setClick('btn-import-trigger', () => importInput.click());
        importInput.onchange = (e) => importData(e);
    }

    if (dom.stratBtns) {
        dom.stratBtns.forEach(btn => {
            btn.onclick = () => {
                currentStrategyMode = btn.dataset.mode;
                localStorage.setItem('pb_strategy_mode', currentStrategyMode);
                dom.stratBtns.forEach(b => b.classList.toggle('active', b === btn));
                recomputeDerivedState();
                updateUI();
            };
            btn.classList.toggle('active', btn.dataset.mode === currentStrategyMode);
        });
    }
}
function init() {
    try {
        console.log('Initializing PB Master v4.11.0...');
        initDom();
        applyTranslations(); // 번역 주입
        load();
        recomputeDerivedState();
        setup();
        render();
        updateUI();
        registerServiceWorker();
        registerInstallPrompt();
    } catch (e) {
        console.error('Initialization Error:', e);
        alert('\uc571 \ucd08\uae30\ud654 \uc624\ub958: ' + e.message);
    }
}

window.onerror = function(msg, url, line) {
    console.error('Window Error:', msg, 'at', url, ':', line);
    return false;
};

init();
