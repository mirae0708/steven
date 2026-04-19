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
function getRoutinePred(rt, prev, c1) {
    if (!rt || !prev || !isMark(c1)) return null;
    try {
        const match = prev[rt.crit] === c1;
        const resolve = symbol => {
            const flipped = symbol === 'P' ? 'B' : 'P';
            if (rt.inverse) {
                // Reverse Logic: Match -> Flip, NoMatch -> Same
                return match ? flipped : symbol;
            } else {
                // Classic Logic: Match -> Same, NoMatch -> Flip
                return match ? symbol : flipped;
            }
        };
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
            if (prev && Array.isArray(row) && row.every(v => v !== null)) {
                scores.forEach(rt => {
                    const p = getRoutinePred(rt, prev, row[0]);
                    if (p) {
                        if (row[1] === p.p2) rt.score += (1 * weight);
                        if (row[2] === p.p3) rt.score += (1 * weight);
                    }
                });
            }
            if (Array.isArray(row) && row.every(v => v !== null)) prev = row;
        });
    });

    // 2. \ud604\uc7ac \uac8c\uc784 \ud760\ub984 \ud559\uc2b5 (\ub2e8\uae30 \uae30\uc5b5 - \ucd5c\uc0c1\uc704 \uac00\uc911\uce58)
    let prevRow = null;
    currentGame.forEach(row => {
        if (prevRow && Array.isArray(row) && row.every(v => v !== null)) {
            scores.forEach(rt => {
                const p = getRoutinePred(rt, prevRow, row[0]);
                if (p) {
                    if (row[1] === p.p2) rt.score += 20; // \ud604\uc7ac \uac8c\uc784 \uc801\uc911 \uc2dc \ud3ed\ubaa8\uc801 \uc810\uc218
                    if (row[2] === p.p3) rt.score += 20;
                }
            });
        }
        if (Array.isArray(row)) prevRow = row;
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

function getMasterPrediction(prev, buffer, colIndex, streaks = {}) {
    if (!prev || buffer.length === 0 || colIndex < 1) {
        return { predictedVal: null, bestRtName: '\ubd84\uc11d \ub300\uae30', guideLabel: '\ud328\ud134 \uc2dc\uc810\ubd84\uc11d \ub300\uae30 \uc911' };
    }

    if (currentStrategyMode === 'total') {
        const voteResults = {
            optimal: getPredictionByMode('optimal', prev, buffer, colIndex).val,
            ai: getPredictionByMode('ai', prev, buffer, colIndex).val,
            backup: getPredictionByMode('backup', prev, buffer, colIndex).val,
            vertical: getPredictionByMode('vertical', prev, buffer, colIndex).val
        };

        const weightedScores = { P: 0, B: 0 };
        Object.keys(voteResults).forEach(mode => {
            const val = voteResults[mode];
            if (val) {
                const miss = streaks[mode] || 0;
                // \uac01 \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5(streak)\uc774 \ub9ce\uc744\uc218\ub85d \ud22c\ud45c\uad8c \uac10\uc18c
                const weight = 1 / (1 + miss);
                weightedScores[val] += weight;
            }
        });

        let finalVal = null;
        if (weightedScores.P > weightedScores.B) finalVal = 'P';
        else if (weightedScores.B > weightedScores.P) finalVal = 'B';

        const consensusCount = Math.max(weightedScores.P, weightedScores.B);
        const actualAgreementCount = Object.values(voteResults).filter(v => v === finalVal).length;
        const isStrong = actualAgreementCount >= 4;

        const stepLabel = buffer.length === 1 ? 'STEP 2' : 'STEP 3';
        return {
            predictedVal: finalVal,
            bestRtName: `\uc9c0\ub2a5\ud615 \ud1b5\ud569 (${weightedScores.P.toFixed(1)}:${weightedScores.B.toFixed(1)})`,
            guideLabel: `${stepLabel} [\uac00\uc911\uce58 \ub2e4\uc218\uacb0]`,
            consensusCount: actualAgreementCount,
            isStrong: isStrong
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

/**
 * v4.12.0: 7\uc778 \ud1b5\ud569 \ubd84\uc11d \uc804\uc6a9 \uc5d4\uc9c4
 * 7\uac00\uc9c0 \ub8e8\ud2b9\uc744 \ud569\ucc28\uc11c 4\ud45c \uc774\uc0c1 \uc77c\uce58 \uc2dc \uc608\ucc21\uac12 \ubc18\ud658
 */
function getConsensus7Prediction(prev, buffer, colIndex) {
    if (!prev || buffer.length === 0 || colIndex < 1) return { val: null, count: 0 };

    const votes = { P: 0, B: 0 };
    CLASSIC_ROUTINES.forEach(rt => {
        const pred = getRoutinePred(rt, prev, buffer[0]);
        if (pred) {
            const pVal = buffer.length === 1 ? pred.p2 : pred.p3;
            if (isMark(pVal)) votes[pVal]++;
        }
    });

    if (votes.P >= 4) return { val: 'P', count: votes.P };
    if (votes.B >= 4) return { val: 'B', count: votes.B };
    return { val: null, count: Math.max(votes.P, votes.B) };
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

    if (colIndex === 1) {
        runtime.safetyState = 'WAIT';
    }


    // \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5 \ub204\uc801 \ub85c\uc9c1

    for (const val of values) {
        runtime.lastHit = false; // \ub9e4 \uce78 \ucc98\ub9ac \uc2dc\uc791 \uc2dc \uc801\uc911 \uae30\ub85d \ucd08\uae30\ud654 (\ub204\uc218 \ubc29\uc9c0)
        const idx = buffer.length;

        if (idx > 0) {
            // \uac01 \uc804\ub7b5\ubcc4 \uc57d\uc18d \ud604\ud669 (가중치 계산용)
            const currentStreaks = {
                optimal: runtime.optimalMissStreak,
                ai: runtime.aiMissStreak,
                backup: runtime.backupMissStreak,
                vertical: runtime.verticalMissStreak
            };

            // 각 전략별 예측값
            const preds = {
                optimal: getPredictionByMode('optimal', prevRow, buffer, colIndex),
                ai: getPredictionByMode('ai', prevRow, buffer, colIndex),
                backup: getPredictionByMode('backup', prevRow, buffer, colIndex),
                vertical: { predictedVal: getPredictionByMode('vertical', prevRow, buffer, colIndex).val },
                total: getMasterPrediction(prevRow, buffer, colIndex, currentStreaks)
            };

            // \uac01 \uc804\ub7b5\ubcc4 \uc5f0\uc18d \uc624\ub2f5 \uce74\uc6b4\ud2b8 (\ub204\uc801) - \ucd08\ud310(1\uc5f4)\uc5d0\uc11c\ub294 \uacc4\uc0b0 \uc81c\uc678
            if (colIndex > 1) {
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
                            if (mode === 'optimal') runtime.optimalMissStreak++;
                            else if (mode === 'ai') runtime.aiMissStreak++;
                            else if (mode === 'backup') runtime.backupMissStreak++;
                            else if (mode === 'vertical') runtime.verticalMissStreak++;
                            else if (mode === 'total') runtime.totalMissStreak++;
                        }
                    }
                });

                // v4.12.0: 7\uc778 \ud1b5\ud569 \uc5d4\uc9c4 \ub3c5\ub9bd \uc2a4\ud2b8\ub9ad \ud2b8\ub798\ud0b9
                const c7Pred = getConsensus7Prediction(prevRow, buffer, colIndex);
                if (c7Pred.val) {
                    if (val === c7Pred.val) {
                        runtime.consensus7MissStreak = 0;
                    } else {
                        runtime.consensus7MissStreak++;
                    }
                }
            }

            if (prevRow && colIndex > 1) {
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

            if (!skipRule && colIndex > 1) {
                if (val === runtime.predictedVal) {
                    runtime.currentStreak++;
                    runtime.breakLeft = 0;
                    runtime.dangerRule = null;
                    runtime.lastHit = true; 
                    runtime.stats.wins++;
                    runtime.stats.total++;
                    if (idx === 1) runtime.stats.directWins++;
                } else {
                    runtime.lastHit = false;
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
        const nextPred = getMasterPrediction(prevRow, buffer, colIndex);
        runtime.predictedVal = (skipRule || colIndex === 1) ? null : nextPred.predictedVal;
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
        total: runtime.totalMissStreak,
        consensus7: runtime.consensus7MissStreak,
        lastHit: runtime.lastHit
    };
}