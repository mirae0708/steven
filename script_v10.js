/**
 * Jongdari PB Master v3.6 - State-hardened dashboard
 */

const CONFIG = {
    STORAGE_KEY: 'pb_master_v3_5',
    HISTORY_KEY: 'ox_master_history',
    TOTAL_ROWS: 20,
    SERVICE_WORKER_PATH: './sw.js',
    UNIT_STEPS: [1, 3, 7, 17, 35],
    ROTATION_SEQUENCE: [2, 1, 2, 1, 3], // ㅡ 바, ★ 별, ㅡ 바, ★ 별, X 엑스
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3],
        ai: [] // 동적 학습 알고리즘으로 대체됨
    },
    DANGER_RULES: [
        { id: 'bpb-b', prevPattern: 'BPB', firstMark: 'B', minMissStreak: 0, label: 'BPB \ub4a4 B' },
        { id: 'pbp-p', prevPattern: 'PBP', firstMark: 'P', minMissStreak: 0, label: 'PBP \ub4a4 P' },
        { id: 'bbp-b-miss', prevPattern: 'BBP', firstMark: 'B', minMissStreak: 1, label: 'BBP \ub4a4 B' },
        { id: 'ppb-p-miss', prevPattern: 'PPB', firstMark: 'P', minMissStreak: 1, label: 'PPB \ub4a4 P' },
        { id: 'bbb-b-kill', prevPattern: 'BBB', firstMark: 'B', minMissStreak: 0, label: '\ud3ec\ub3c4 \uc904\ud0c0\uae30 \uacbd\uace0' },
        { id: 'ppp-p-kill', prevPattern: 'PPP', firstMark: 'P', minMissStreak: 0, label: '\ud50c\ub808\uc774\uc5b4 \uc904\ud0c0\uae30 \uacbd\uace0' }
    ]
};

let currentStrategyMode = localStorage.getItem('pb_strategy_mode') || 'total';

const CLASSIC_ROUTINES = [
    { id: 1, name: '\u2605 \ubcc4', crit: 2, p2: 1, p3: 0, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 2, name: '\u2014 \ubc14', crit: 0, p2: 2, p3: 1, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 3, name: 'X \uc5d1\uc2a4', crit: 1, p2: 0, p3: 2, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 4, name: '\u25b3 \uc138\ubaa8', crit: 1, p2: 2, p3: 0, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 5, name: '\u4e09 \uc0bc', crit: 0, p2: 1, p3: 2, hits: 0, currentMissStreak: 0, maxMissStreak: 0 }
];

let currentGame = [];
let inputBuffer = [];
let predictedVal = null;
let currentStreak = 0;
let missStreak = 0;
let safetyState = 'WAIT';
let betProgress = 0;
let breakLeft = 0;
let stats = createEmptyStats();
let currentDangerRule = null;
let strategyMissStreaks = { optimal: 0, ai: 0, backup: 0 };

let dom = {};

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

let deferredInstallPrompt = null;

function createEmptyStats() {
    return { total: 0, wins: 0, directWins: 0 };
}

function createRuntimeState() {
    return {
        predictedVal: null,
        currentStreak: 0,
        missStreak: 0,
        safetyState: 'WAIT',
        betProgress: 0,
        breakLeft: 0,
        stats: createEmptyStats(),
        dangerRule: null
    };
}

function isMark(val) {
    return val === 'P' || val === 'B';
}

function normalizeRow(row) {
    const normalized = [null, null, null];
    if (!Array.isArray(row)) return normalized;
    for (let i = 0; i < 3; i++) {
        normalized[i] = isMark(row[i]) ? row[i] : null;
    }
    return normalized;
}

function normalizeBuffer(buffer) {
    if (!Array.isArray(buffer)) return [];
    const normalized = [];
    for (const val of buffer) {
        if (!isMark(val) || normalized.length >= 3) break;
        normalized.push(val);
    }
    return normalized;
}

function rowToPattern(row) {
    if (!Array.isArray(row) || row.length < 3 || !row.every(isMark)) return null;
    return row.join('');
}

function getDangerRule(prevRow, firstMark, missCount) {
    const prevPattern = rowToPattern(prevRow);
    if (!prevPattern || !isMark(firstMark)) return null;

    return CONFIG.DANGER_RULES.find(rule =>
        rule.prevPattern === prevPattern &&
        rule.firstMark === firstMark &&
        missCount >= rule.minMissStreak
    ) || null;
}

function getBoardRows() {
    const rows = currentGame.map(row => [...row]);
    if (inputBuffer.length > 0 && rows.length < CONFIG.TOTAL_ROWS) {
        rows.push(normalizeRow(inputBuffer));
    }
    return rows;
}

function commitBoard(boardRows) {
    const normalizedRows = Array.isArray(boardRows)
        ? boardRows.slice(0, CONFIG.TOTAL_ROWS).map(normalizeRow)
        : [];

    const nextGame = [];
    let nextBuffer = [];

    for (const row of normalizedRows) {
        const contiguous = [];
        for (const val of row) {
            if (!isMark(val)) break;
            contiguous.push(val);
        }

        if (contiguous.length === 3) {
            if (nextBuffer.length > 0) break;
            nextGame.push([...contiguous]);
            continue;
        }

        nextBuffer = contiguous;
        break;
    }

    currentGame = nextGame;
    inputBuffer = nextBuffer;
}

function readSnapshot() {
    try {
        const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        console.error('Saved state could not be loaded.', error);
        return null;
    }
}

function load() {
    const snapshot = readSnapshot();
    if (!snapshot) return;

    currentGame = Array.isArray(snapshot.game)
        ? snapshot.game.map(normalizeRow).filter(row => row.every(isMark))
        : [];
    inputBuffer = normalizeBuffer(snapshot.inputBuffer);
}

function save() {
    const snapshot = {
        version: 2,
        game: currentGame,
        inputBuffer,
        runtime: {
            predictedVal,
            currentStreak,
            missStreak,
            safetyState,
            betProgress,
            breakLeft,
            dangerRuleId: currentDangerRule ? currentDangerRule.id : null
        },
        stats,
        routineHits: CLASSIC_ROUTINES.map(rt => ({ id: rt.id, hits: rt.hits }))
    };

    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(snapshot));
}

function getRoutinePred(rt, prev, c1) {
    if (!rt || !prev || !isMark(c1)) return null;
    try {
        const match = prev[rt.crit] === c1;
        const resolve = symbol => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
        return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
    } catch (e) {
        console.error('Routine Prediction Error:', e, rt);
        return null;
    }
}

function getPredictionByMode(mode, prev, buffer, colIndex) {
    if (!prev || buffer.length === 0) return { val: null, rt: null };

    let routineId;
    if (mode === 'ai') {
        // AI SMART: 히스토리 및 현재 게임 기반 최적 루틴 시뮬레이션
        const bestRt = findBestRoutineFromData();
        routineId = bestRt ? bestRt.id : 1;
    } else {
        const seq = CONFIG.STRATEGIES[mode];
        if (!seq || seq.length === 0) return { val: null, rt: null };
        const sequenceIdx = Math.max(0, colIndex - 1) % seq.length;
        routineId = seq[sequenceIdx];
    }

    const targetRt = CLASSIC_ROUTINES.find(r => r.id === routineId);
    if (!targetRt) return { val: null, rt: null };
    
    const pred = getRoutinePred(targetRt, prev, buffer[0]);
    if (!pred) return { val: null, rt: null };
    
    return { 
        val: (buffer.length === 1 ? pred.p2 : pred.p3),
        rt: targetRt
    };
}

/**
 * 학습지(히스토리) 데이터를 분석하여 현재 가장 적합한 루틴을 추출합니다.
 */
function findBestRoutineFromData() {
    const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
    const scores = CLASSIC_ROUTINES.map(rt => ({ ...rt, score: 0 }));

    // 1. 과거 히스토리 학습 (장기 기억)
    history.forEach(game => {
        let prev = null;
        game.forEach(row => {
            if (prev && row.every(v => v !== null)) {
                scores.forEach(rt => {
                    const p = getRoutinePred(rt, prev, row[0]);
                    if (p) {
                        if (row[1] === p.p2) rt.score += 1;
                        if (row[2] === p.p3) rt.score += 1;
                    }
                });
            }
            if (row.every(v => v !== null)) prev = row;
        });
    });

    // 2. 현재 게임 흐름 학습 (단기 기억 - 3배 가중치)
    let prevRow = null;
    currentGame.forEach(row => {
        if (prevRow && row.every(v => v !== null)) {
            scores.forEach(rt => {
                const p = getRoutinePred(rt, prevRow, row[0]);
                if (p) {
                    if (row[1] === p.p2) rt.score += 3;
                    if (row[2] === p.p3) rt.score += 3;
                }
            });
        }
        prevRow = row;
    });

    // 3. 현재 연속 오답 중인 루틴은 패널티 부여
    scores.forEach(rt => {
        if (rt.currentMissStreak > 0) rt.score -= (rt.currentMissStreak * 2);
    });

    return scores.sort((a, b) => b.score - a.score)[0];
}

function getMasterPrediction(prev, buffer, colIndex) {
    if (!prev || buffer.length === 0 || colIndex < 1) {
        return { predictedVal: null, bestRtName: '\ubd84\uc11d \ub300\uae30', guideLabel: '\ud328\ud134 \uc2dc\uc12c\ubd84\uc11d \ub300\uae30 \uc911' };
    }

    if (currentStrategyMode === 'dynamic') {
        const bestRt = [...CLASSIC_ROUTINES].sort((a, b) => b.hits - a.hits || a.currentMissStreak - b.currentMissStreak)[0];
        const pred = getRoutinePred(bestRt, prev, buffer[0]);
        const stepLabel = buffer.length === 1 ? 'STEP 2' : 'STEP 3';
        return {
            predictedVal: (buffer.length === 1 ? pred.p2 : pred.p3),
            bestRtName: `\ucd5c\uc801 \uc801\uc911: ${bestRt.name.split(' ')[0]}`,
            guideLabel: `${stepLabel} [\ub3d9\uc801 \ucd5c\uc801\ud654 \ubaa8\ub4dc]`
        };
    }

    if (currentStrategyMode === 'total') {
        const votes = {
            optimal: getPredictionByMode('optimal', prev, buffer, colIndex).val,
            ai: getPredictionByMode('ai', prev, buffer, colIndex).val,
            backup: getPredictionByMode('backup', prev, buffer, colIndex).val
        };

        const score = { P: 0, B: 0 };
        Object.values(votes).forEach(v => { if (v) score[v]++; });

        let finalVal = null;
        if (score.P > score.B) finalVal = 'P';
        else if (score.B > score.P) finalVal = 'B';

        const stepLabel = buffer.length === 1 ? 'STEP 2' : 'STEP 3';
        return {
            predictedVal: finalVal,
            bestRtName: `\ud1b5\ud569 \ub2e4\uc218\uacb0 (${score.P}:${score.B})`,
            guideLabel: `${stepLabel} [\ub2e4\uc218\uacb0 \ubaa8\ub4dc]`
        };
    }

    // Specific mode logic
    const res = getPredictionByMode(currentStrategyMode, prev, buffer, colIndex);
    return {
        predictedVal: res.val,
        bestRtName: res.rt ? `${res.rt.name.split(' ')[0]} (${buffer.length === 1 ? 'S2' : 'S3'})` : '\ubd84\uc11d\uc911',
        guideLabel: `STEP ${buffer.length === 1 ? '2' : '3'} [${res.rt ? res.rt.name : '\ubd84\uc11d\uc911'}]`
    };
}

function processSequence(values, runtime, prevRow, finalizeRow, colIndex) {
    const buffer = [];
    const rowHits = new Set();
    const skipRule = values.length > 0 ? getDangerRule(prevRow, values[0], runtime.missStreak) : null;

    if (skipRule) {
        runtime.safetyState = 'DANGER';
        runtime.breakLeft = 0;
        runtime.betProgress = runtime.missStreak;
        runtime.dangerRule = skipRule;
    }


    // 전략별 연속 오답 카운트
    let missStreaks = {
        optimal: 0,
        ai: 0,
        backup: 0
    };

    for (const val of values) {
        const idx = buffer.length;

        if (idx > 0) {
            // 각 전략별 예측값
            const preds = {
                optimal: getPredictionByMode('optimal', prevRow, buffer, colIndex),
                ai: getPredictionByMode('ai', prevRow, buffer, colIndex),
                backup: getPredictionByMode('backup', prevRow, buffer, colIndex),
                total: getMasterPrediction(prevRow, buffer, colIndex)
            };

            // 각 전략별 연속 오답 카운트
            Object.keys(preds).forEach(mode => {
                const pVal = (mode === 'total') ? preds[mode].predictedVal : preds[mode].val;
                if (val === pVal) {
                    missStreaks[mode] = 0;
                } else {
                    missStreaks[mode] = (missStreaks[mode] || 0) + 1;
                }
            });

            if (prevRow) {
                CLASSIC_ROUTINES.forEach(rt => {
                    const pred = getRoutinePred(rt, prevRow, buffer[0]);
                    const hit = pred && (
                        (idx === 1 && val === pred.p2) ||
                        (idx === 2 && val === pred.p3)
                    );

                    if (hit) {
                        rt.currentMissStreak = 0;
                        if (!rowHits.has(rt.id)) {
                            rowHits.add(rt.id);
                            rt.hits++;
                        }
                    } else {
                        rt.currentMissStreak++;
                        if (rt.currentMissStreak > rt.maxMissStreak) {
                            rt.maxMissStreak = rt.currentMissStreak;
                        }
                    }
                });
            }

            if (!skipRule) {
                if (val === runtime.predictedVal) {
                    runtime.currentStreak++;
                    runtime.missStreak = 0;
                    runtime.betProgress = 0;
                    runtime.safetyState = 'WAIT';
                    runtime.breakLeft = 0;
                    runtime.dangerRule = null;
                    runtime.stats.wins++;
                    runtime.stats.total++;
                    if (idx === 1) runtime.stats.directWins++;
                } else {
                    runtime.currentStreak = 0;
                    runtime.missStreak++;
                    runtime.betProgress = runtime.missStreak;
                    runtime.safetyState = runtime.missStreak > 0 ? 'TARGET_FOUND' : 'WAIT';
                    if (runtime.missStreak > 4) {
                        runtime.safetyState = 'BREAK';
                        runtime.breakLeft = runtime.missStreak - 4;
                    }
                    if (idx === 2) runtime.stats.total++;
                }
            }
        }

        buffer.push(val);
        runtime.predictedVal = skipRule ? null : getMasterPrediction(prevRow, buffer, colIndex).predictedVal;
        // 연속 오답 카운트 runtime에 저장
        runtime.optimalMissStreak = missStreaks.optimal;
        runtime.aiMissStreak = missStreaks.ai;
        runtime.backupMissStreak = missStreaks.backup;
        runtime.totalMissStreak = missStreaks.total;
    }

    if (finalizeRow && buffer.length === 3) {
        runtime.predictedVal = null;
        runtime.dangerRule = null;
        if (skipRule) {
            runtime.safetyState = runtime.missStreak > 4
                ? 'BREAK'
                : (runtime.missStreak > 0 ? 'TARGET_FOUND' : 'WAIT');
            runtime.breakLeft = runtime.missStreak > 4 ? runtime.missStreak - 4 : 0;
        }
    }
}

function recomputeDerivedState() {
    CLASSIC_ROUTINES.forEach(rt => {
        rt.hits = 0;
        rt.currentMissStreak = 0;
        rt.maxMissStreak = 0;
    });

    const runtime = createRuntimeState();
    const completedRows = [];

    currentGame.forEach((row, idx) => {
        processSequence(row, runtime, completedRows[completedRows.length - 1] || null, true, idx + 1);
        completedRows.push([...row]);
    });

    if (inputBuffer.length > 0) {
        processSequence(inputBuffer, runtime, completedRows[completedRows.length - 1] || null, false, currentGame.length + 1);
    }

    predictedVal = runtime.predictedVal;
    currentStreak = runtime.currentStreak;
    missStreak = runtime.missStreak;
    safetyState = runtime.safetyState;
    betProgress = runtime.betProgress;
    breakLeft = runtime.breakLeft;
    stats = runtime.stats;
    currentDangerRule = runtime.dangerRule;
    strategyMissStreaks = {
        optimal: runtime.optimalMissStreak || 0,
        ai: runtime.aiMissStreak || 0,
        backup: runtime.backupMissStreak || 0,
        total: runtime.totalMissStreak || 0
    };
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

    if (safetyState === 'WAIT') dom.statusText.textContent = '\uad00\ub9dd \uc911';
    else if (safetyState === 'DANGER') dom.statusText.textContent = '\uc700\ud5d8\ud328\ud134 \uc2a4\ud0b5';
    else if (safetyState === 'TARGET_FOUND') dom.statusText.textContent = '\ud0c0\uac9f \uac30\ub7b5';
    else dom.statusText.textContent = `\ud734\uc2dd(${breakLeft})`;
}

function getUnit() {
    return safetyState !== 'WAIT' && safetyState !== 'DANGER' && missStreak > 0
        ? CONFIG.UNIT_STEPS[Math.min(missStreak, CONFIG.UNIT_STEPS.length) - 1]
        : 0;
}

function updateUI() {
    const idx = inputBuffer.length;
    const prev = currentGame[currentGame.length - 1];
    const master = getMasterPrediction(prev, inputBuffer, currentGame.length + 1);

    // Strategy streak indicator logic (instead of profit)
    const getStratStreak = (mode) => {
        if (mode === 'total') return strategyMissStreaks.total;
        if (mode === 'optimal') return strategyMissStreaks.optimal;
        if (mode === 'ai') return strategyMissStreaks.ai;
        if (mode === 'backup') return strategyMissStreaks.backup;
        if (mode === 'dynamic') {
             // Dynamic is the "Master" best routine, we use the global missStreak here
             return missStreak;
        }
        return 0;
    };

    if (dom.stratBtns) {
        dom.stratBtns.forEach(btn => {
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

    const badge = document.getElementById('ai-mode-badge');

    if (safetyState === 'DANGER' && currentDangerRule) {
        dom.guideLabel.textContent = '\uc700\ud5d8 \ud328\ud134 \uac10\uc9c0';
        badge.textContent = currentDangerRule.label;
        dom.recommendation.textContent = 'NEXT: SKIP';
        dom.guideCard.classList.add('pred-skip');
    } else if (master.predictedVal) {
        dom.guideLabel.textContent = master.guideLabel;
        badge.textContent = currentStrategyMode === 'ai' ? `\ud559\uc2b5 \uc604\ub8cc: ${master.bestRtName}` : master.bestRtName;
        dom.recommendation.textContent = `NEXT: ${master.predictedVal === 'P' ? 'PLAYER' : 'BANKER'}`;
        dom.guideCard.classList.add(master.predictedVal === 'P' ? 'pred-p' : 'pred-b');

        if (master.predictedVal === 'P') dom.btnP.classList.add('glow-pulse');
        else dom.btnB.classList.add('glow-pulse');
    } else {
        dom.guideLabel.textContent = '\ud328\ud134 \uc2dc\uc12c\ubd84\uc11d \ub300\uae30 \uc911';
        badge.textContent = '\ubd84\uc11d \ub300\uae30';
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
        dom.streak.textContent += `  \ud83d\udd25 ${currentStreak}\uc5f0\uc2b9!`;
    }
}

function triggerCelebration() {
    dom.popup.classList.remove('hidden');
    setTimeout(() => dom.popup.classList.add('hidden'), 1000);
}

function archive() {
    if (currentGame.length === 0) return;
    const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
    history.push(currentGame.map(row => [...row]));
    localStorage.setItem(CONFIG.HISTORY_KEY, JSON.stringify(history));
    console.log('Game archived to history. Total games:', history.length);
}

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

        if (stats.wins > prevWins) triggerCelebration();
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
    document.querySelectorAll('.btn-input').forEach(button => {
        button.onclick = () => handleInput(button.dataset.val);
    });

    document.getElementById('btn-undo').onclick = () => undo();
    document.getElementById('btn-reset').onclick = () => confirm('리셋?') && resetGame();
    document.getElementById('btn-reload').onclick = () => window.location.reload();
    document.getElementById('btn-zen').onclick = () => {
        document.body.classList.toggle('zen-active');
        render();
    };
    
    if (dom.historyBtn) dom.historyBtn.onclick = () => showAnalysis();
    if (dom.modalClose) dom.modalClose.onclick = () => dom.analysisModal.classList.add('hidden');

    document.getElementById('btn-export').onclick = () => exportData();
    const importInput = document.getElementById('import-file');
    document.getElementById('btn-import-trigger').onclick = () => importInput.click();
    importInput.onchange = (e) => importData(e);

    if (dom.stratBtns) {
        dom.stratBtns.forEach(btn => {
            btn.onclick = () => {
                currentStrategyMode = btn.dataset.mode;
                localStorage.setItem('pb_strategy_mode', currentStrategyMode);
                dom.stratBtns.forEach(b => b.classList.toggle('active', b === btn));
                recomputeDerivedState();
                updateUI();
            };
            // Sync initial state
            btn.classList.toggle('active', btn.dataset.mode === currentStrategyMode);
        });
    }
}

function showAnalysis() {
    const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
    const allGames = [...history];
    
    // Add current game if it has data
    if (currentGame.length > 0 || inputBuffer.length > 0) {
        allGames.push([...currentGame, inputBuffer.length > 0 ? normalizeRow(inputBuffer) : null].filter(r => r !== null));
    }

    if (allGames.length === 0) {
        alert('\ubd84\uc11d\ud560 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.');
        return;
    }

    const results = allGames.map((game, index) => {
        const isLive = (index === allGames.length - 1 && history.length < allGames.length);
        
        // Simulation for best strategy
        const modes = ['optimal', 'ai', 'backup'];
        const simRes = modes.map(m => {
            let p = 0;
            let streak = 0;
            let maxStreak = 0;
            let completed = [];
            game.forEach((row, ri) => {
                const prev = completed[completed.length - 1];
                if (prev && row.every(v => v !== null)) {
                    const seq = CONFIG.STRATEGIES[m];
                    const rtId = (m === 'ai') ? (findBestRoutineFromData().id) : (seq ? seq[ri % seq.length] : 1);
                    const rt = CLASSIC_ROUTINES.find(r => r.id === rtId);
                    const pred = getRoutinePred(rt, prev, row[0]);
                    if (!pred) return;
                    const b1 = streak > 0 ? CONFIG.UNIT_STEPS[Math.min(streak, 4)] : 0;
                    if (row[1] === pred.p2) { p += b1; streak = 0; }
                    else {
                        streak++;
                        maxStreak = Math.max(maxStreak, streak);
                        const b2 = CONFIG.UNIT_STEPS[Math.min(streak, 4)];
                        if (row[2] === pred.p3) { p += b2; streak = 0; }
                        else { 
                            streak++; 
                            maxStreak = Math.max(maxStreak, streak);
                            p -= (b1 + b2); 
                        }
                    }
                }
                if (row.every(v => v !== null)) completed.push([...row]);
            });
            return { mode: m, profit: p, maxMiss: maxStreak };
        });
        const bestModeForGame = simRes.sort((a,b) => b.profit - a.profit)[0];
        const safestModeForGame = simRes.sort((a,b) => a.maxMiss - b.maxMiss || b.profit - a.profit)[0];

        // Standard metrics (using Master/Total strategy)
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
            isCurrent: isLive
        };
    });

    renderAnalysis(results);
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
            </td>
        `;
        dom.analysisBody.appendChild(tr);
    });
}

function init() {
    try {
        console.log('Initializing PB Master v3.6.6...');
        initDom();
        load();
        recomputeDerivedState();
        setup();
        render();
        updateUI();
        registerServiceWorker();
        registerInstallPrompt();
        console.log('App ready. Grid Rows:', CONFIG.TOTAL_ROWS);
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
