const CONFIG = {
    STORAGE_KEY: 'pb_master_v3_5',
    HISTORY_KEY: 'ox_master_history',
    TOTAL_ROWS: 20,
    SERVICE_WORKER_PATH: './sw.js',
    UNIT_STEPS: [1, 3, 7, 3, 9, 21],
    ROTATION_SEQUENCE: [2, 1, 2, 1, 3],
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3],
        vertical: [0], // \ub0b4\ub824\uc624\uae30 \ubaa8\ub4dc (\ud2b9\uc218 \ub85c\uc9c1)
        ai: [] 
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

const VOCAB = {
    status_wait: '\uad00\ub9dd \uc911',
    rt_icon_1: '\u2605',
    rt_icon_2: '\u2014',
    rt_icon_3: 'X',
    rt_icon_4: '\u25b3',
    rt_icon_5: '\u4e09',
    btn_hist: 'HIST',
    analysis_title: '\ud788\uc2a4\ud1a0\ub9ac \ubd84\uc11d \ub808\ud3ec\ud2b8',
    th_miss: '\ucd5c\ub300 \ubbf8\uc2a4',
    th_profit: '\uc190\uc775 (Unit)',
    th_rate: '\uc2b9\ub960',
    btn_export: '\ubc31\uc5c5 \uc800\uc7a5',
    btn_import: '\ubc31\uc5c5 \ubd88\ub7ec\uc624\uae30',
    install_title: '\uc548\ub4dc\ub85c\uc774\ub4dc \uc124\uce58 \uac00\ub2a5',
    install_desc: '\ud648 \ud654\uba74\uc5d0 \ucd94\uac00\ud574\uc11c \uc571\ucc18\ub7fc \uc2e4\ud589\ud558\uc138\uc694.',
    btn_install: '\uc124\uce58',
    guide_wait: '\uc544\uc774 \ub9c8\uc2a4\ud130 \ub300\uae30 \uc911',
    badge_wait: '\ubd84\uc11d \ub300\uae30',
    hit_overlay: '\ud83c\udfaf HIT!',
    ic_zen: '\ud83d\udd0d',
    ic_reload: '\ud83d\udd04',
    ic_undo: '\u21a9',
    ic_reset: '\u2716',
    strat_vertical: '\ub0b4\ub824\uc624\uae30(VERT)'
};

function applyTranslations() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.dataset.t;
        if (VOCAB[key]) el.textContent = VOCAB[key];
    });
}

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
let strategyMissStreaks = { optimal: 0, ai: 0, backup: 0, vertical: 0 };

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
        dangerRule: null,
        // \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5 \ub204\uc801 \ud544\ub4dc
        optimalMissStreak: 0,
        aiMissStreak: 0,
        backupMissStreak: 0,
        verticalMissStreak: 0,
        totalMissStreak: 0
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
    if (mode === 'vertical') {
        // \ub0b4\ub824\uc624\uae30 \ud2b9\uc218 \ub85c\uc9c1: \ud604\uc7ac \uc5f4 1\ud589 \uae30\ud638\ub97c \uadf8\ub300\ub85c \ubcf5\uc0ac
        // NOTE: \uc774 \ubaa8\ub4dc\ub294 1\ud589\uc5d0\uc11c\ub294 \uc608\ucc21\uac12\uc774 null\uc774\uba70, 2\ud589 \uc785\ub825 \uc2dc\uc810\ubd80\ud130 \ud65c\uc131\ud654\ub428
        return { val: buffer[0], rt: { id: 0, name: '\ub0b4\ub824\uc624\uae30' } };
    }

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
function findBestRoutineFromData(customHistory = null) {
    const history = customHistory || (function() {
        try {
            const raw = localStorage.getItem(CONFIG.HISTORY_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) { return []; }
    })();
    const scores = CLASSIC_ROUTINES.map(rt => ({ ...rt, score: 0 }));

    // 1. \uacfc\uac70 \ud788\uc2a4\ud1a0\ub9ac \ud559\uc2b5 (\ucd5c\uadfc 5\uac8c\uc784\uc5d0 \uac15\ub825\ud55c \uac00\uc911\uce58)
    const recentHistory = history.slice(-5);
    recentHistory.forEach((game, hIdx) => {
        const weight = (hIdx + 1) * 2; // \ucd5c\uadfc \uac8c\uc784\uc77c\uc218\ub85d \uac00\uc911\uce58 \ub450 \ubc30 \uc99d\uac00
        let prev = null;
        game.forEach(row => {
            if (prev && row.every(v => v !== null)) {
                scores.forEach(rt => {
                    const p = getRoutinePred(rt, prev, row[0]);
                    if (p) {
                        if (row[1] === p.p2) rt.score += (1 * weight);
                        if (row[2] === p.p3) rt.score += (1 * weight);
                    }
                });
            }
            if (row.every(v => v !== null)) prev = row;
        });
    });

    // 2. \ud604\uc7ac \uac8c\uc784 \ud760\ub984 \ud559\uc2b5 (\ub2e8\uae30 \uae30\uc5b5 - \ucd5c\uc0c1\uc704 \uac00\uc911\uce58)
    let prevRow = null;
    currentGame.forEach(row => {
        if (prevRow && row.every(v => v !== null)) {
            scores.forEach(rt => {
                const p = getRoutinePred(rt, prevRow, row[0]);
                if (p) {
                    if (row[1] === p.p2) rt.score += 20; // \ud604\uc7ac \uac8c\uc784 \uc801\uc911 \uc2dc \ud3ed\ubaa8\uc801 \uc810\uc218
                    if (row[2] === p.p3) rt.score += 20;
                }
            });
        }
        prevRow = row;
    });

    // 3. \uc2ac\ub7fc\ud504 \ubc29\uc9c0 \ubc0f \ud544\ud130\ub9c1 (\ucd5c\uc2e0 \uc5f0\uc18d \uc624\ub2f5 \ub8e8\ud23n \uc81c\uc678)
    scores.forEach(rt => {
        // \ud604\uc7ac \uc5f0\uc18d \uc624\ub2f5 \uc911\uc774\uba74 \uc810\uc218\ub97c \ub9c8\uc774\ub108\uc2a4\ub85c \ub5a4\uad74
        if (rt.currentMissStreak > 0) {
            rt.score -= (rt.currentMissStreak * 50); 
        }
        // \ucd5c\ub300 \ubbf8\uc2a4 \uae30\ub85d\uc5d0 \ub530\ub978 \uc548\uc804 \ub4f1\uae09 \ucc28\ub4f1
        if (rt.maxMissStreak >= 4) rt.score -= 30;
    });

    // \uc810\uc218\uac00 \ub3d9\uc77c\ud560 \uacbd\uc6b0 ID \uc21c\uc73c\ub85c \uc120\ud0dd\ud558\uc9c0 \uc54a\uace0 \ucd5c\ub300 \ubbf8\uc2a4\uac00 \uc801\uc740 \uac83 \uc6b0\uc120
    return scores.sort((a, b) => b.score - a.score || a.maxMissStreak - b.maxMissStreak)[0];
}

function getMasterPrediction(prev, buffer, colIndex) {
    if (!prev || buffer.length === 0 || colIndex < 1) {
        return { predictedVal: null, bestRtName: '\ubd84\uc11d \ub300\uae30', guideLabel: '\ud328\ud134 \uc2dc\uc810\ubd84\uc11d \ub300\uae30 \uc911' };
    }

    if (currentStrategyMode === 'total') {
        const votes = {
            optimal: getPredictionByMode('optimal', prev, buffer, colIndex).val,
            ai: getPredictionByMode('ai', prev, buffer, colIndex).val,
            backup: getPredictionByMode('backup', prev, buffer, colIndex).val,
            vertical: getPredictionByMode('vertical', prev, buffer, colIndex).val
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


    // \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5 \ub204\uc801 \ub85c\uc9c1

    for (const val of values) {
        const idx = buffer.length;

        if (idx > 0) {
            // 각 전략별 예측값
            const preds = {
                optimal: getPredictionByMode('optimal', prevRow, buffer, colIndex),
                ai: getPredictionByMode('ai', prevRow, buffer, colIndex),
                backup: getPredictionByMode('backup', prevRow, buffer, colIndex),
                vertical: { predictedVal: getPredictionByMode('vertical', prevRow, buffer, colIndex).val },
                total: getMasterPrediction(prevRow, buffer, colIndex)
            };

            // \uac01 \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5 \uce74\uc6b4\ud2b8 (\ub204\uc801)
            Object.keys(preds).forEach(mode => {
                const res = preds[mode];
                const pVal = (mode === 'total' || mode === 'vertical') ? res.predictedVal : res.val;
                if (pVal !== null) { 
                    if (val === pVal) {
                        if (mode === 'optimal') runtime.optimalMissStreak = 0;
                        else if (mode === 'ai') runtime.aiMissStreak = 0;
                        else if (mode === 'backup') runtime.backupMissStreak = 0;
                        else if (mode === 'vertical') runtime.verticalMissStreak = 0;
                        else if (mode === 'total') runtime.totalMissStreak = 0;
                    } else {
                        // \uc704\ud5d8 \uad6c\uac04(skipRule)\uc5d0\uc11c\ub294 \ubbf8\uc2a4\ub97c \uc313\uc9c0 \uc54a\uc74c (\uc0ac\uc6a9\uc790 \uc694\uccad: \uc274 \ub9ac\ud06c\ud2b8 \ubcf4\ud638)
                        if (!skipRule) {
                            if (mode === 'optimal') runtime.optimalMissStreak++;
                            else if (mode === 'ai') runtime.aiMissStreak++;
                            else if (mode === 'backup') runtime.backupMissStreak++;
                            else if (mode === 'vertical') runtime.verticalMissStreak++;
                            else if (mode === 'total') runtime.totalMissStreak++;
                        }
                    }
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
        optimal: runtime.optimalMissStreak,
        ai: runtime.aiMissStreak,
        backup: runtime.backupMissStreak,
        vertical: runtime.verticalMissStreak,
        total: runtime.totalMissStreak
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
    const master = getMasterPrediction(prev, inputBuffer, currentGame.length + 1);

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
        dom.guideLabel.textContent = '위험 패턴 감지';
        badge.textContent = currentDangerRule.label;
        dom.recommendation.textContent = 'NEXT: SKIP';
        dom.guideCard.classList.add('pred-skip');
    } else if (master.predictedVal) {
        dom.guideLabel.textContent = master.guideLabel;
        badge.textContent = currentStrategyMode === 'ai' ? `학습 완료: ${master.bestRtName}` : master.bestRtName;
        dom.recommendation.textContent = `NEXT: ${master.predictedVal === 'P' ? 'PLAYER' : 'BANKER'}`;
        dom.guideCard.classList.add(master.predictedVal === 'P' ? 'pred-p' : 'pred-b');

        if (master.predictedVal === 'P') dom.btnP.classList.add('glow-pulse');
        else dom.btnB.classList.add('glow-pulse');
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
        
        const modes = ['optimal', 'ai', 'backup', 'vertical'];
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
                    if (m === 'vertical') {
                        if (prev) pVal = row[0];
                    } else {
                        const seq = CONFIG.STRATEGIES[m];
                        const rtId = (m === 'ai') ? (findBestRoutineFromData(completed).id) : (seq ? seq[ri % seq.length] : 1);
                        const rt = CLASSIC_ROUTINES.find(r => r.id === rtId);
                        const pred = getRoutinePred(rt, prev, row[0]);
                        if (pred) pVal = (step === 1) ? pred.p2 : pred.p3;
                    }

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

function init() {
    try {
        console.log('Initializing PB Master v4.8.0...');
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
