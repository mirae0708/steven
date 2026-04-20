
const GAMES = [
    [["P","P","P"], ["B","B","B"], ["P","P","B"], ["B","B","P"], ["B","P","B"], ["B","B","P"], ["P","P","P"], ["B","B","P"], ["P","B","P"], ["P","B","B"], ["B","P","B"], ["B","B","B"], ["B","P","B"], ["B","P","B"], ["B","P","P"], ["P","P","P"], ["P","P","P"], ["P","P","P"]],
     [["B","B","P"], ["B","P","P"], ["B","P","P"], ["B","B","B"], ["B","B","B"], ["P","B","B"], ["B","B","B"], ["B","B","B"], ["P","B","P"], ["B","B","P"], ["B","P","P"], ["P","P","P"], ["P","P","B"], ["B","P","P"], ["P","B","P"], ["P","B","B"], ["P","B","B"], ["P","B","B"]],
     [["P","P","P"], ["B","P","P"], ["P","B","B"], ["B","B","B"], ["P","B","B"], ["P","P","P"], ["P","P","P"], ["B","B","B"], ["B","B","B"], ["B","B","B"], ["P","P","P"], ["P","P","P"], ["B","B","B"], ["B","B","B"], ["B","B","B"], ["P","B","B"], ["B","P","P"], ["P","P","P"]],
     [["B","B","P"], ["B","P","P"], ["B","B","P"], ["B","B","P"], ["B","P","B"], ["P","P","P"], ["B","P","B"], ["B","P","B"], ["P","B","B"], ["B","P","B"], ["B","P","P"], ["P","P","P"], ["B","P","P"], ["B","P","P"], ["P","P","P"], ["B","P","P"], ["P","P","B"], ["B","P","P"]],
     [["B","P","B"], ["B","P","B"], ["B","P","B"], ["B","B","B"], ["B","P","B"], ["B","B","P"], ["B","P","P"], ["P","P","P"], ["B","B","P"], ["P","P","P"], ["P","P","P"], ["B","B","P"], ["B","P","P"], ["B","P","P"], ["P","P","P"], ["P","B","B"], ["B","B","B"], ["P","P","P"]],
     [["P","P","B"],["B","B","B"],["B","B","P"],["B","P","B"],["P","B","B"],["P","P","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","B"],["B","P","P"],["P","P","B"],["P","P","B"],["P","P","B"],["B","P","B"],["B","P","P"],["B","P","P"],["B","B","B"]],
     [["B","P","P"],["P","P","B"],["B","P","P"],["P","B","B"],["B","P","B"],["B","P","P"],["B","P","B"],["P","P","P"],["B","B","P"],["P","P","B"],["B","P","B"],["B","P","P"],["B","B","B"],["B","P","B"],["B","P","B"],["P","P","B"],["P","B","B"],["P","P","P"]],
     [["P","P","P"],["B","P","B"],["B","B","P"],["B","P","B"],["B","P","P"],["B","B","P"],["B","P","P"],["B","P","B"],["P","P","P"],["B","B","B"],["B","P","B"],["B","P","P"],["P","P","B"],["B","P","B"],["B","P","P"],["B","P","B"],["B","P","B"],["B","B","B"]],
     [["B","P","P"],["B","B","B"],["B","B","P"],["B","B","B"],["B","B","B"],["P","P","P"],["B","B","P"],["B","B","P"],["P","P","B"],["P","B","P"],["B","B","B"],["P","P","P"],["P","P","B"],["P","P","B"],["P","P","P"],["B","B","B"],["B","B","P"],["B","B","B"]],
     [["B","B","P"],["P","B","P"],["B","B","B"],["B","B","B"],["B","B","B"],["P","P","P"],["P","P","B"],["B","B","P"],["P","P","P"],["P","P","P"],["B","B","B"],["P","P","P"],["P","P","P"],["B","B","P"],["P","P","P"],["B","B","B"],["B","B","P"],["B","B","B"]],
     [["B","P","B"],["P","P","P"],["P","B","B"],["B","B","B"],["P","B","P"],["B","P","B"],["B","B","B"],["B","B","B"],["B","B","B"],["P","P","P"],["B","B","B"],["P","P","P"],["B","P","B"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","B"],["P","P","P"]],
     [["P","B","B"],["P","P","P"],["P","P","B"],["B","B","B"],["P","B","P"],["B","B","P"],["B","B","P"],["P","P","P"],["P","B","P"],["P","B","B"],["P","P","B"],["P","P","P"],["B","P","B"],["P","B","P"],["B","B","B"],["P","B","P"],["B","B","B"],["P","P","P"]],
     [["P","P","P"],["P","B","B"],["P","B","P"],["P","B","P"],["B","B","B"],["P","P","P"],["P","B","P"],["B","B","B"],["P","B","B"],["P","B","P"],["B","B","B"],["P","P","P"],["B","B","B"],["P","B","P"],["B","P","B"],["P","B","P"],["B","B","B"],["P","P","P"]],
     [["P","B","B"],["P","P","P"],["P","B","B"],["B","B","B"],["P","B","B"],["P","B","P"],["P","B","B"],["B","B","B"],["B","B","B"],["P","B","B"],["P","B","B"],["P","B","P"],["P","B","B"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","B"],["P","B","P"]],
     [["B","P","B"],["P","P","P"],["B","B","B"],["B","B","B"],["B","B","B"],["B","P","B"],["B","B","B"],["P","B","B"],["B","P","P"],["B","B","B"],["P","B","B"],["P","P","P"],["P","B","B"],["B","B","B"],["B","P","B"],["P","B","P"],["B","B","B"],["P","P","P"]],
     [["B","P","P"],["P","B","B"],["P","B","P"],["B","B","P"],["B","B","B"],["B","P","B"],["B","P","P"],["P","B","P"],["B","P","B"],["B","B","B"],["P","B","P"],["B","P","B"],["B","P","B"],["B","B","B"],["B","B","B"],["P","B","P"],["B","P","B"],["B","B","B"]],
     [["B","B","P"],["P","B","P"],["B","B","P"],["B","B","P"],["B","B","P"],["B","B","P"],["P","P","B"],["P","B","P"],["B","B","P"],["P","B","P"],["P","P","B"],["P","P","B"],["P","P","P"],["B","B","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","P","P"]],
     [["B","P","B"],["P","B","P"],["B","P","P"],["B","P","P"],["B","B","B"],["B","P","P"],["B","P","B"],["B","B","P"],["P","P","B"],["P","P","B"],["P","P","P"],["B","B","B"],["P","B","P"],["P","B","P"],["B","B","B"],["B","P","B"],["B","P","P"],["B","B","P"]],
     [["B","B","P"],["P","B","B"],["P","P","P"],["P","B","P"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","P"],["B","B","B"],["B","B","P"],["B","B","B"],["P","B","B"],["P","P","P"],["P","P","P"],["B","B","B"],["P","B","B"],["P","P","P"],["P","B","B"]],
     [["B","B","B"],["P","B","B"],["P","B","P"],["P","P","P"],["P","B","B"],["B","B","P"],["P","B","P"],["P","P","P"],["B","B","B"],["B","B","B"],["B","B","P"],["P","B","P"],["B","P","B"],["B","B","B"],["P","B","B"],["B","B","P"],["B","B","B"],["B","P","P"]],
     [["P","B","B"],["B","P","P"],["P","B","B"],["P","P","P"],["B","B","P"],["B","B","B"],["P","P","P"],["B","B","P"],["P","P","P"],["P","P","P"],["B","B","B"],["B","P","P"],["P","B","B"],["P","P","P"],["P","B","P"],["B","B","B"],["B","B","P"],["P","B","B"]],
     [["B","P","B"],["P","B","P"],["B","B","P"],["P","P","P"],["P","P","B"],["B","B","P"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","P"],["P","B","B"],["B","P","B"],["B","B","B"],["B","B","B"],["B","B","P"],["P","B","P"],["B","B","B"],["B","P","B"]],
     [["P","P","P"],["B","P","B"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","B"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","B"],["B","B","B"],["B","B","B"],["P","P","P"],["B","B","P"],["B","B","B"],["P","B","B"],["P","P","P"],["B","B","B"]],
     [["B","P","B"],["P","B","P"],["B","P","B"],["P","B","P"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","P"],["B","P","P"],["B","B","B"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","B"],["P","B","P"],["B","B","B"],["B","B","P"],["B","B","B"]],
     [["P","B","B"],["B","B","B"],["P","P","P"],["B","P","B"],["B","B","P"],["B","B","P"],["P","B","B"],["B","P","B"],["B","P","P"],["P","P","P"],["P","P","B"],["P","P","B"],["P","P","B"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","B"],["P","P","P"]],
     [["B","B","P"],["P","B","P"],["P","P","P"],["B","B","B"],["P","B","B"],["B","B","P"],["P","B","P"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","P"],["B","B","P"],["P","P","P"],["P","B","P"],["P","P","P"],["B","P","B"],["B","B","P"],["P","B","B"],["P","B","P"]],
     [["P","B","P"],["B","B","P"],["P","P","B"],["P","B","B"],["B","B","P"],["B","B","B"],["P","P","P"],["P","B","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","P"],["B","P","B"],["P","P","P"],["P","P","B"],["P","B","P"],["B","B","B"],["P","P","P"],["P","B","B"],["P","B","P"]],
     [["P","P","B"],["P","B","P"],["P","P","B"],["B","P","B"],["P","B","P"],["P","B","P"],["P","P","P"],["B","P","P"],["B","B","P"],["B","P","B"],["P","B","P"],["B","P","B"],["B","B","P"],["B","P","P"],["B","B","B"],["P","B","P"],["P","P","P"],["P","B","B"]]
];

const CONFIG = {
    UNIT_STEPS: [1, 3, 7, 17, 35],
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3],
        ai: [1, 4, 3, 1, 1, 3, 5, 5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 2, 2]
    },
    DANGER_RULES: [
        { id: 'bpb-b', prevPattern: 'BPB', firstMark: 'B', minMissStreak: 0, label: 'BPB 뒤 B' },
        { id: 'pbp-p', prevPattern: 'PBP', firstMark: 'P', minMissStreak: 0, label: 'PBP 뒤 P' },
        { id: 'bbp-b-miss', prevPattern: 'BBP', firstMark: 'B', minMissStreak: 1, label: 'BBP 뒤 B' },
        { id: 'ppb-p-miss', prevPattern: 'PPB', firstMark: 'P', minMissStreak: 1, label: 'PPB 뒤 P' },
        { id: 'bbb-b-kill', prevPattern: 'BBB', firstMark: 'B', minMissStreak: 0, label: '포도 줄타기' },
        { id: 'ppp-p-kill', prevPattern: 'PPP', firstMark: 'P', minMissStreak: 0, label: '플레이어 줄타기' }
    ]
};

const ROUTINES = [
    { id: 1, name: '★ 별', crit: 2, p2: 1, p3: 0 },
    { id: 2, name: 'ㅡ 바', crit: 0, p2: 2, p3: 1 },
    { id: 3, name: 'X 엑스', crit: 1, p2: 0, p3: 2 },
    { id: 4, name: '△ 세모', crit: 1, p2: 2, p3: 0 },
    { id: 5, name: '三 삼', crit: 0, p2: 1, p3: 2 }
];

function isMark(v) { return v === 'P' || v === 'B'; }

function getRoutinePred(rt, prev, c1) {
    if (!prev || !isMark(c1)) return null;
    const match = prev[rt.crit] === c1;
    const resolve = symbol => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

function getDangerRule(prevRow, firstMark, missCount) {
    if (!prevRow || !isMark(firstMark)) return null;
    const prevPattern = prevRow.join('');
    return CONFIG.DANGER_RULES.find(rule => 
        rule.prevPattern === prevPattern && 
        rule.firstMark === firstMark && 
        missCount >= rule.minMissStreak
    ) || null;
}

function simulateStrategy(mode, games) {
    let overallProfit = 0;
    let globalMaxMiss = 0;
    let totalBets = 0;
    let totalWins = 0;
    let routineHits = ROUTINES.map(r => ({ ...r, hits: 0 }));

    games.forEach((game, gIdx) => {
        let missStreak = 0;
        let completedRows = [];
        
        game.forEach((row, ri) => {
            const buffer = [];
            const prevRow = completedRows[completedRows.length - 1] || null;
            const skipRule = getDangerRule(prevRow, row[0], missStreak);

            row.forEach((val, idx) => {
                if (idx > 0 && prevRow) {
                    let predictedVal = null;
                    if (!skipRule) {
                        const seq = CONFIG.STRATEGIES[mode];
                        // If it's dynamic mode, we use the routine with highest hits so far
                        let rtId;
                        if (mode === 'dynamic') {
                            const bestRt = [...routineHits].sort((a, b) => b.hits - a.hits)[0];
                            rtId = bestRt.id;
                        } else if (mode === 'total') {
                            // Consensus logic
                            const modes = ['optimal', 'ai', 'backup'];
                            const votes = modes.map(m => {
                                const s = CONFIG.STRATEGIES[m];
                                const rId = s[ri % s.length];
                                const rt = ROUTINES.find(r => r.id === rId);
                                const p = getRoutinePred(rt, prevRow, buffer[0]);
                                return idx === 1 ? p.p2 : p.p3;
                            });
                            const score = votes.reduce((acc, v) => { acc[v] = (acc[v] || 0) + 1; return acc; }, {});
                            if (score.P > score.B) predictedVal = 'P';
                            else if (score.B > score.P) predictedVal = 'B';
                        } else {
                            rtId = seq[ri % seq.length];
                        }

                        if (!predictedVal && (mode !== 'total')) {
                            const rt = ROUTINES.find(r => r.id === rtId);
                            const pred = getRoutinePred(rt, prevRow, buffer[0]);
                            predictedVal = idx === 1 ? pred.p2 : pred.p3;
                        }

                        if (predictedVal) {
                            const unit = missStreak > 0 ? CONFIG.UNIT_STEPS[Math.min(missStreak, 5) - 1] : 0;
                            if (val === predictedVal) {
                                if (unit > 0) overallProfit += unit;
                                missStreak = 0;
                                totalWins++;
                                totalBets++;
                            } else {
                                if (unit > 0) overallProfit -= unit;
                                missStreak++;
                                globalMaxMiss = Math.max(globalMaxMiss, missStreak);
                                if (idx === 2) totalBets++; // Each row is one "attempt" cycle
                            }
                        }
                    }
                }
                
                // Track routine hits regardless of strategy
                if (idx > 0 && prevRow) {
                    routineHits.forEach(rt => {
                        const pred = getRoutinePred(rt, prevRow, buffer[0]);
                        if ((idx === 1 && val === pred.p2) || (idx === 2 && val === pred.p3)) {
                            rt.hits++;
                        }
                    });
                }
                buffer.push(val);
            });
            if (row.every(isMark)) completedRows.push([...row]);
        });
    });

    return { profit: overallProfit, maxMiss: globalMaxMiss, winRate: (totalWins/totalBets*100).toFixed(1) };
}

console.log("=== PB Master v3.6 Simulation Report ===");
console.log("Testing on 28 games from training sheets...");
console.log("");

const modes = ['optimal', 'ai', 'backup', 'total', 'dynamic'];
const results = modes.map(m => ({ mode: m, ...simulateStrategy(m, GAMES) }));

console.log("| Strategy | Max Miss | Profit (U) | Win Rate |");
console.log("|----------|----------|------------|----------|");
results.forEach(r => {
    console.log(`| ${r.mode.toUpperCase().padEnd(8)} | ${r.maxMiss.toString().padEnd(8)} | ${r.profit.toString().padStart(10)} | ${r.winRate.padStart(8)}% |`);
});

const bestProfit = results.sort((a,b) => b.profit - a.profit)[0];
const safest = results.sort((a,b) => a.maxMiss - b.maxMiss)[0];

console.log("\n--- Conclusion ---");
console.log(`- Best Profit Strategy: ${bestProfit.mode.toUpperCase()} (${bestProfit.profit}U)`);
console.log(`- Safest Strategy (Min Max Miss): ${safest.mode.toUpperCase()} (${safest.maxMiss} 단)`);
