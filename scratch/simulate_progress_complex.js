
const fs = require('fs');

// Mock browser environment for logic consistency
global.localStorage = { getItem: () => "[]", setItem: () => {} };
global.console = console;

// Import Backup Data
const GAMES_FILE = fs.readFileSync('c:/Users/Steven/Desktop/Jongdari/OX_Predictor_v2/backups/GAMES_backup_20260417.js', 'utf8');
const GAMES = eval(GAMES_FILE + '; GAMES');

// Configuration
// Progression: [1, 3, 7] -> [3, 9, 21] (Total 6 steps)
const PROGRESSION = [1, 3, 7, 3, 9, 21];

const CLASSIC_ROUTINES = [
    { id: 1, name: 'Star', crit: 2, p2: 1, p3: 0 },
    { id: 2, name: 'Bar', crit: 0, p2: 2, p3: 1 },
    { id: 3, name: 'X', crit: 1, p2: 0, p3: 2 },
    { id: 4, name: 'Triangle', crit: 1, p2: 2, p3: 0 },
    { id: 5, name: 'Sam', crit: 0, p2: 1, p3: 2 }
];

const STRATEGIES = {
    backup: [1, 4, 2, 3, 5],
    optimal: [2, 1, 2, 1, 3]
};

function getRoutinePred(rt, prev, c1) {
    const match = prev[rt.crit] === c1;
    const resolve = symbol => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

// AI Smart 2.0 Core Simulation
function runGameSim(mode, game, historyTillNow) {
    let profit = 0;
    let maxMiss = 0;
    let currentMiss = 0;
    let completedRows = [];
    
    // Per-routine stats (Internal track like script_v10.js)
    let localRTs = CLASSIC_ROUTINES.map(rt => ({ ...rt, currentMissStreak: 0, maxMissStreak: 0 }));

    game.forEach((row, ri) => {
        const prev = completedRows[completedRows.length - 1];
        if (prev) {
            let targetRtId;
            if (mode === 'ai') {
                let scores = localRTs.map(rt => {
                    let s = 0;
                    historyTillNow.slice(-5).forEach((hG, hIdx) => {
                        const w = (hIdx + 1) * 2;
                        let hP = null;
                        hG.forEach(hR => {
                            if (hP) {
                                const p = getRoutinePred(rt, hP, hR[0]);
                                if (hR[1] === p.p2) s += w;
                                if (hR[2] === p.p3) s += w;
                            }
                            hP = hR;
                        });
                    });
                    if (rt.currentMissStreak > 0) s -= (rt.currentMissStreak * 50);
                    if (rt.maxMissStreak >= 4) s -= 30;
                    return { ...rt, score: s };
                });
                targetRtId = scores.sort((a,b) => b.score - a.score || a.maxMissStreak - b.maxMissStreak)[0].id;
            } else {
                targetRtId = STRATEGIES[mode][ri % STRATEGIES[mode].length];
            }
            
            const rt = CLASSIC_ROUTINES.find(r => r.id === targetRtId);
            const p = getRoutinePred(rt, prev, row[0]);
            
            // Step 2 Analysis
            let bet = PROGRESSION[currentMiss] || 0;
            if (row[1] === p.p2) {
                if (bet > 0) profit += bet;
                currentMiss = 0;
            } else {
                if (bet > 0) profit -= bet;
                currentMiss++;
                maxMiss = Math.max(maxMiss, currentMiss);
                
                // Step 3 Analysis
                let bet3 = PROGRESSION[currentMiss] || 0;
                if (row[2] === p.p3) {
                    if (bet3 > 0) profit += bet3;
                    currentMiss = 0;
                } else {
                    if (bet3 > 0) profit -= bet3;
                    currentMiss++;
                    maxMiss = Math.max(maxMiss, currentMiss);
                    if (currentMiss >= 6) currentMiss = 0; // User reset ceiling
                }
            }

            // Update Routine states for AI
            localRTs.forEach(lrt => {
                const lp = getRoutinePred(lrt, prev, row[0]);
                if (row[1] === lp.p2) { lrt.currentMissStreak = 0; }
                else {
                    lrt.currentMissStreak++;
                    if (row[2] === lp.p3) { lrt.currentMissStreak = 0; }
                    else { lrt.currentMissStreak++; }
                }
                lrt.maxMissStreak = Math.max(lrt.maxMissStreak, lrt.currentMissStreak);
            });
        }
        completedRows.push(row);
    });
    
    return { profit, maxMiss };
}

const modes = ['optimal', 'ai', 'backup'];
let finalReport = { optimal: [], ai: [], backup: [] };
let aggregates = { optimal: 0, ai: 0, backup: 0 };

modes.forEach(mode => {
    let history = [];
    GAMES.forEach((game, idx) => {
        const res = runGameSim(mode, game, history);
        finalReport[mode].push({ game: idx+1, ...res });
        aggregates[mode] += res.profit;
        history.push(game);
    });
});

console.log("=== ANALYSIS REPORT START ===");
console.log(JSON.stringify({ finalReport, aggregates }, null, 2));
console.log("=== ANALYSIS REPORT END ===");
