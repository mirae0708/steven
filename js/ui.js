function applyTranslations() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.dataset.t;
        if (VOCAB[key]) el.textContent = VOCAB[key];
    });
}
function initDom() {
    dom = {
        grid: document.getElementById('prediction-grid'),
        guideCard: document.getElementById('guide-card'),
        guideLabel: document.getElementById('ai-label'),
        recommendation: document.getElementById('master-recommendation'),
        accuracy: document.getElementById('overall-accuracy'),
        s1: document.getElementById('step1-hits'),
        bet: document.getElementById('bet-counter'),
        unit: document.getElementById('recommended-unit'),
        statusText: document.getElementById('status-text'),
        rowNum: document.getElementById('current-row-num'),
        streak: document.getElementById('streak-badge'),
        popup: document.getElementById('hit-notification'),
        btnP: document.getElementById('btn-p'),
        btnB: document.getElementById('btn-b'),
        installBanner: document.getElementById('install-banner'),
        installBtn: document.getElementById('btn-install'),
        historyBtn: document.getElementById('btn-history'),
        analysisModal: document.getElementById('analysis-modal'),
        modalClose: document.getElementById('close-analysis'),
        stratBtns: document.querySelectorAll('.strat-btn'),
        analysisBody: document.getElementById('analysis-body'),
        analysisSummary: document.getElementById('analysis-summary')
    };
    console.log('DOM refs initialized:', Object.keys(dom).filter(k => !!dom[k]).length);
}
function render() {
    const boardRows = getBoardRows();
    const nextCol = currentGame.length;
    const nextCell = inputBuffer.length;

    dom.grid.innerHTML = '';

    for (let c = 0; c < CONFIG.TOTAL_ROWS; c++) {
        const colData = boardRows[c] || [null, null, null];
        const colEl = document.createElement('div');
        colEl.className = 'grid-column';
        colEl.innerHTML = `<div class="col-num">${c + 1}</div>`;

        colData.forEach((val, r) => {
            const cell = document.createElement('div');
            cell.className = `cell ${val === 'P' ? 'p-cell' : (val === 'B' ? 'b-cell' : '')}`;
            if (c === nextCol && r === nextCell && currentGame.length < CONFIG.TOTAL_ROWS) {
                cell.classList.add('active-target');
            }
            cell.textContent = val || '';
            cell.onclick = () => toggle(c, r);
            colEl.appendChild(cell);
        });

        dom.grid.appendChild(colEl);
    }

    // Auto-scroll removed for manual user control
    // dom.grid.scrollLeft = dom.grid.scrollWidth;
}

function toggle(c, r) {
    if (c >= CONFIG.TOTAL_ROWS) return;

    const boardRows = getBoardRows();
    while (boardRows.length <= c && boardRows.length < CONFIG.TOTAL_ROWS) {
        boardRows.push([null, null, null]);
    }

    const row = normalizeRow(boardRows[c]);
    const seq = [null, 'P', 'B'];
    const cur = seq.indexOf(row[r]);
    row[r] = seq[(cur + 1) % seq.length];
    boardRows[c] = row;

    commitBoard(boardRows);
    recomputeDerivedState();
    save();
    render();
    updateUI();
}

function updateSafetyIndicator() {
    const el = document.getElementById('safety-status');
    el.className = `status-badge ${safetyState.toLowerCase()}`;

    if (safetyState === 'WAIT') dom.statusText.textContent = '관망 중';
    else if (safetyState === 'DANGER') dom.statusText.textContent = '위험패턴 스탑';
    else if (safetyState === 'TARGET_FOUND') dom.statusText.textContent = '타겟 공략';
    else dom.statusText.textContent = `휴식(${breakLeft})`;
}

function getUnit() {
    return safetyState !== 'WAIT' && safetyState !== 'DANGER' && missStreak > 0
        ? CONFIG.UNIT_STEPS[Math.min(missStreak, CONFIG.UNIT_STEPS.length) - 1]
        : 0;
}

function updateUI() {
    const idx = inputBuffer.length;
    const prev = currentGame[currentGame.length - 1];
    
    const master = getMasterPrediction(prev, inputBuffer, currentGame.length + 1, strategyMissStreaks);
    const c7Res = getConsensus7Prediction(prev, inputBuffer, currentGame.length + 1);

    // 전략 연속 오답 지표 로직 (대신 수익)
    const getStratStreak = (mode) => {
        if (mode === 'total') return strategyMissStreaks.total || 0;
        if (mode === 'optimal') return strategyMissStreaks.optimal || 0;
        if (mode === 'ai') return strategyMissStreaks.ai || 0;
        if (mode === 'backup') return strategyMissStreaks.backup || 0;
        if (mode === 'vertical') return strategyMissStreaks.vertical || 0;
        return 0;
    };

    if (dom.stratBtns) {
        dom.stratBtns.forEach(btn => {
            const CACHE_NAME = 'jongdari-pb-v52-cache';
            const m = btn.dataset.mode;
            const streak = getStratStreak(m);
            const existingBadge = btn.querySelector('.strat-perf');
            const badge = existingBadge || document.createElement('span');
            
            badge.textContent = streak > 0 ? `-${streak}` : '0';
            badge.className = 'strat-perf ' + (streak > 0 ? 'loss' : 'win');
            
            if (!existingBadge) btn.appendChild(badge);
        });
    }

    CLASSIC_ROUTINES.forEach(rt => {
        const card = document.querySelector(`.mini-rt[data-rid="${rt.id}"]`);
        const pEl = document.getElementById(`rt-p-${rt.id}`);
        const sEl = document.getElementById(`rt-h-${rt.id}`);
        const mEl = document.getElementById(`rt-m-${rt.id}`);

        if (idx > 0 && prev) {
            const pred = getRoutinePred(rt, prev, inputBuffer[0]);
            pEl.textContent = idx === 1 ? pred.p2 : (idx === 2 ? pred.p3 : '-');
            card.classList.add('active');
        } else {
            pEl.textContent = '-';
            card.classList.remove('active');
        }

        sEl.textContent = rt.hits;
        mEl.textContent = rt.currentMissStreak > 0 ? `-${rt.currentMissStreak}` : '0';
        mEl.classList.toggle('danger', rt.currentMissStreak > 0);
    });

    const maxHits = Math.max(...CLASSIC_ROUTINES.map(rt => rt.hits));
    CLASSIC_ROUTINES.forEach(rt => {
        const card = document.querySelector(`.mini-rt[data-rid="${rt.id}"]`);
        card.classList.toggle('best', rt.hits === maxHits && maxHits > 0);
    });

    dom.btnP.classList.remove('glow-pulse');
    dom.btnB.classList.remove('glow-pulse');
    dom.guideCard.classList.remove('pred-p', 'pred-b', 'pred-skip');

    // 7\uc778 \ubd84\uc11d \ucc3d \uc5c5\ub370\uc774\ud2b8
    const c7Card = document.getElementById('consensus-7-card');
    const c7StreakEl = document.getElementById('c7-streak-badge');
    const c7CountEl = document.getElementById('c7-consensus-count');
    const c7RecEl = document.getElementById('c7-recommendation');

    if (c7Res.val) {
        c7StreakEl.textContent = strategyMissStreaks.consensus7 > 0 ? `-${strategyMissStreaks.consensus7}` : '0';
        c7CountEl.textContent = `${c7Res.count}/7 \uc77c\uce58`;
        c7RecEl.textContent = `NEXT: ${c7Res.val === 'P' ? 'PLAYER' : 'BANKER'}`;
        c7Card.className = `consensus-7-card ${c7Res.val === 'P' ? 'pred-p' : 'pred-b'}`;
    } else {
        c7StreakEl.textContent = '-';
        c7CountEl.textContent = 'WAIT';
        c7RecEl.textContent = 'NEXT: -';
        c7Card.className = 'consensus-7-card';
    }

    const badge = document.getElementById('ai-mode-badge');

    if (master.predictedVal) {
        dom.guideLabel.textContent = master.guideLabel;
        badge.textContent = currentStrategyMode === 'ai' ? `학습 완료: ${master.bestRtName}` : master.bestRtName;
        
        let displayRec = `NEXT: ${master.predictedVal === 'P' ? 'PLAYER' : 'BANKER'}`;
        if (master.isStrong) {
            displayRec += ` 🔥 [강력 ${master.consensusCount}명 일치]`;
        }
        dom.recommendation.textContent = displayRec;
        
        if (safetyState === 'DANGER' && currentDangerRule) {
            dom.guideCard.classList.add('pred-skip');
            dom.recommendation.textContent += ` (${currentDangerRule.label})`;
        } else if (safetyState === 'BREAK') {
            dom.guideCard.classList.add('pred-skip');
            dom.recommendation.textContent += ' (PAUSE)';
        } else {
            dom.guideCard.classList.add(master.predictedVal === 'P' ? 'pred-p' : 'pred-b');
            if (master.predictedVal === 'P') dom.btnP.classList.add('glow-pulse');
            else dom.btnB.classList.add('glow-pulse');
        }
    } else {
        dom.guideLabel.textContent = '패턴 시점분석 대기 중';
        badge.textContent = '분석 대기';
        dom.recommendation.textContent = 'NEXT: -';
    }

    dom.accuracy.textContent = `${stats.total > 0 ? ((stats.wins / stats.total) * 100).toFixed(0) : 0}%`;
    dom.s1.textContent = stats.directWins;
    dom.bet.textContent = `${missStreak > 0 ? '-' + missStreak : '0'}/4`;
    dom.unit.textContent = `${getUnit()}U`;
    dom.rowNum.textContent = `${Math.min(currentGame.length + 1, CONFIG.TOTAL_ROWS)}`;
    updateSafetyIndicator();

    // 전략별 연속 오답 표시
    const streakInfo = [
        `OPTIMAL: ${strategyMissStreaks.optimal > 0 ? '-' + strategyMissStreaks.optimal : '0'}`,
        `AI: ${strategyMissStreaks.ai > 0 ? '-' + strategyMissStreaks.ai : '0'}`,
        `BACKUP: ${strategyMissStreaks.backup > 0 ? '-' + strategyMissStreaks.backup : '0'}`
    ].join(' | ');
    dom.streak.textContent = streakInfo;
    dom.streak.classList.remove('hidden');

    if (currentStreak >= 2) {
        dom.streak.textContent += `  🔥 ${currentStreak}연승!`;
    }
}

function triggerCelebration() {
    dom.popup.classList.remove('hidden');
    setTimeout(() => dom.popup.classList.add('hidden'), 1000);
}
function updateInstallBanner() {
    if (!dom.installBanner || !dom.installBtn) return;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    dom.installBanner.classList.toggle('hidden', !deferredInstallPrompt || isStandalone);
}

function registerInstallPrompt() {
    if (!dom.installBtn) return;

    window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault();
        deferredInstallPrompt = event;
        updateInstallBanner();
    });

    window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        updateInstallBanner();
    });

    dom.installBtn.onclick = async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        updateInstallBanner();
    };

    updateInstallBanner();
}
function showAnalysis() {
    const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
    const allGames = [...history];
    
    if (currentGame.length > 0 || inputBuffer.length > 0) {
        allGames.push([...currentGame, inputBuffer.length > 0 ? normalizeRow(inputBuffer) : null].filter(r => r !== null));
    }

    if (allGames.length === 0) {
        alert('분석할 데이터가 없습니다.');
        return;
    }

    const results = allGames.map((game, index) => {
        const isLive = (index === allGames.length - 1 && history.length < allGames.length);
        
        const modes = ['optimal', 'ai', 'backup'];
        const simRes = modes.map(m => {
            let profit = 0;
            let streak = 0;
            let maxStreak = 0;
            let completed = [];
            
            game.forEach((row, ri) => {
                const prev = completed[completed.length - 1];
                const steps = [null, row[1], row[2]];

                for (let step = 1; step <= 2; step++) {
                    const val = steps[step];
                    if (val === null) continue;

                    let pVal = null;
                    const seq = CONFIG.STRATEGIES[m];
                        const rtId = (m === 'ai') ? (findBestRoutineFromData(completed).id) : (seq ? seq[ri % seq.length] : 1);
                        const rt = CLASSIC_ROUTINES.find(r => r.id === rtId);
                        const pred = getRoutinePred(rt, prev, row[0]);
                    if (pVal) {
                        const bet = CONFIG.UNIT_STEPS[streak] || 0;
                        if (val === pVal) {
                            profit += bet;
                            streak = 0;
                        } else {
                            profit -= bet;
                            streak++;
                            maxStreak = Math.max(maxStreak, streak);
                            if (streak >= 6) streak = 0;
                        }
                    }
                }
                if (row.every(v => v !== null)) completed.push([...row]);
            });
            return { mode: m, profit, maxMiss: maxStreak };
        });
        const bestModeForGame = simRes.sort((a,b) => b.profit - a.profit)[0];
        const safestModeForGame = simRes.sort((a,b) => a.maxMiss - b.maxMiss || b.profit - a.profit)[0];

        const rtMaxMiss = {};
        CLASSIC_ROUTINES.forEach(rt => {
            let streak = 0;
            let max = 0;
            let completed = [];
            game.forEach(row => {
                const prev = completed[completed.length - 1];
                if (prev && row.every(v => v !== null)) {
                    const pred = getRoutinePred(rt, prev, row[0]);
                    if (pred) {
                        if (row[1] === pred.p2) { streak = 0; }
                        else {
                            streak++;
                            max = Math.max(max, streak);
                            if (row[2] === pred.p3) { streak = 0; }
                            else { streak++; max = Math.max(max, streak); }
                        }
                    }
                }
                if (row.every(v => v !== null)) completed.push([...row]);
            });
            rtMaxMiss[rt.id] = max;
        });

        const runtime = createRuntimeState();
        const completedRows = [];
        let maxGameMiss = 0;
        let gameProfit = 0;

        game.forEach((row, rIdx) => {
            const values = row;
            const colIndex = rIdx + 1;
            const prevRow = completedRows[completedRows.length - 1] || null;
            const skipRule = values.length > 0 ? getDangerRule(prevRow, values[0], runtime.missStreak) : null;

            const buffer = [];
            for (const val of values) {
                const idx = buffer.length;
                if (idx > 0) {
                    if (!skipRule) {
                        const betUnit = runtime.missStreak > 0 ? CONFIG.UNIT_STEPS[Math.min(runtime.missStreak, CONFIG.UNIT_STEPS.length) - 1] : 0;
                        
                        if (val === runtime.predictedVal) {
                            if (betUnit > 0) gameProfit += betUnit;
                            runtime.missStreak = 0;
                            runtime.stats.wins++;
                            runtime.stats.total++;
                        } else {
                            if (betUnit > 0) gameProfit -= betUnit;
                            runtime.missStreak++;
                            maxGameMiss = Math.max(maxGameMiss, runtime.missStreak);
                            if (idx === 2) runtime.stats.total++;
                        }
                    }
                }
                buffer.push(val);
                runtime.predictedVal = skipRule ? null : getMasterPrediction(prevRow, buffer, colIndex).predictedVal;
            }
            completedRows.push([...row]);
        });

        return {
            index: isLive ? 'Live' : (index + 1),
            maxMiss: maxGameMiss,
            profit: gameProfit,
            winRate: runtime.stats.total > 0 ? (runtime.stats.wins / runtime.stats.total * 100).toFixed(1) : 0,
            bestStrategy: bestModeForGame.mode.toUpperCase(),
            safestStrategy: safestModeForGame.mode.toUpperCase(),
            safestMiss: safestModeForGame.maxMiss,
            rtMaxMiss,
            isCurrent: isLive
        };
    });

    renderAnalysis(results);
    dom.analysisModal.classList.remove('hidden');
}

function renderAnalysis(results) {
    if (!results || results.length === 0) return;
    
    const overallStats = results.reduce((acc, cur) => {
        acc.profit += cur.profit;
        acc.maxMiss = Math.max(acc.maxMiss, cur.maxMiss);
        return acc;
    }, { profit: 0, maxMiss: 0 });

    const totalBestStrategy = results.reduce((acc, cur) => {
        acc[cur.bestStrategy] = (acc[cur.bestStrategy] || 0) + 1;
        return acc;
    }, {});
    
    const entries = Object.entries(totalBestStrategy);
    const commonBest = entries.length > 0 ? entries.sort((a,b) => b[1] - a[1])[0][0] : 'N/A';

    const summaryHtml = `
        <div class="summary-card ${overallStats.profit >= 0 ? 'positive' : 'negative'}">
            <label>\ub204\uc801 \ud631 \uc190\uc775</label>
            <span>${overallStats.profit > 0 ? '+' : ''}${overallStats.profit}U</span>
        </div>
        <div class="summary-card">
            <label>\uc885\ud569 \ucd5c\ub300 \ubbf8\uc2a4</label>
            <span>${overallStats.maxMiss}\ub2e8</span>
        </div>
        <div class="summary-card">
            <label>\ucd94\ucc1c \uc804\ub7b5</label>
            <span>${commonBest}</span>
        </div>
    `;
    dom.analysisSummary.innerHTML = summaryHtml;

    dom.analysisBody.innerHTML = '';
    results.reverse().forEach(res => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${res.index}</td>
            <td style="color: ${res.maxMiss >= 4 ? '#ff5555' : 'inherit'}">${res.maxMiss}\ub2e8</td>
            <td class="${res.profit >= 0 ? 'p-win' : 'p-loss'}">${res.profit > 0 ? '+' : ''}${res.profit}U</td>
            <td>${res.winRate}%</td>
            <td style="font-size: 10px; opacity: 0.8;">
                <div style="color: #00ff88">Best: ${res.bestStrategy}</div>
                <div style="color: #66ccff">Safe: ${res.safestStrategy}(${res.safestMiss})</div>
                <div class="rt-mini-row">
                    ${CLASSIC_ROUTINES.map(rt => {
                        const miss = res.rtMaxMiss[rt.id] || 0;
                        const icon = VOCAB[`rt_icon_${rt.id}`] || '';
                        return `<span class="rt-mini-badge ${miss >= 4 ? 'bad' : ''}">${icon} <b>${miss}</b></span>`;
                    }).join('')}
                </div>
            </td>
        `;
        dom.analysisBody.appendChild(tr);
    });
}