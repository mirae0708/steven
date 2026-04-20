
const fs = require('fs');

// Mock browser environment
global.localStorage = {
    getItem: (key) => key === 'pb_strategy_history' ? "[]" : "[]",
    setItem: () => {}
};
global.document = {
    querySelectorAll: () => [],
    getElementById: () => ({ innerHTML: '', textContent: '', classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} } })
};
global.window = { addEventListener: () => {} };
global.navigator = { serviceWorker: { register: () => Promise.resolve() } };

// Import Backup Data
const GAMES_FILE = fs.readFileSync('c:/Users/Steven/Desktop/Jongdari/OX_Predictor_v2/backups/GAMES_backup_20260417.js', 'utf8');
const GAMES = eval(GAMES_FILE + '; GAMES');

// Configuration
const CONFIG = {
    UNIT_STEPS: [1, 3, 7, 17, 35],
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3]
    }
};

const CLASSIC_ROUTINES = [
    { id: 1, name: 'Star', crit: 2, p2: 1, p3: 0 },
    { id: 2, name: 'Bar', crit: 0, p2: 2, p3: 1 },
    { id: 3, name: 'X', crit: 1, p2: 0, p3: 2 },
    { id: 4, name: 'Triangle', crit: 1, p2: 2, p3: 0 },
    { id: 5, name: 'Sam', crit: 0, p2: 1, p3: 2 }
];

function getRoutinePred(rt, prev, c1) {
    const match = prev[rt.crit] === c1;
    const resolve = symbol => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

// AI Smart 2.0 Simulation Logic
function simulateAI(game, historyTillNow) {
    let wins = 0;
    let total = 0;
    let currentStreak = 0;
    let missStreak = 0;
    let maxMiss = 0;
    
    // Per-routine stats for the algorithm
    let localRoutines = CLASSIC_ROUTINES.map(rt => ({ ...rt, hits: 0, currentMissStreak: 0, maxMissStreak: 0 }));
    
    let completedRows = [];
    
    game.forEach((row, ri) => {
        const prev = completedRows[completedRows.length - 1];
        if (prev) {
            // Pick Best Routine based on AI Smart 2.0 (Simulated)
            let scores = localRoutines.map(rt => {
                let s = 0;
                // 1. History Weight (recent 5 games)
                historyTillNow.slice(-5).forEach((hGame, hIdx) => {
                    const weight = (hIdx + 1) * 2;
                    let hPrev = null;
                    hGame.forEach(hRow => {
                        if (hPrev) {
                            const p = getRoutinePred(rt, hPrev, hRow[0]);
                            if (hRow[1] === p.p2) s += weight;
                            if (hRow[2] === p.p3) s += weight;
                        }
                        hPrev = hRow;
                    });
                });
                // 2. Slump Avoidance
                if (rt.currentMissStreak > 0) s -= (rt.currentMissStreak * 50);
                if (rt.maxMissStreak >= 4) s -= 30;
                return { ...rt, score: s };
            });
            
            const bestRt = scores.sort((a,b) => b.score - a.score || a.maxMissStreak - b.maxMissStreak)[0];
            
            // Prediction
            const p = getRoutinePred(bestRt, prev, row[0]);
            total++;
            if (row[1] === p.p2) {
                wins++;
                missStreak = 0;
            } else {
                missStreak++;
                if (row[2] === p.p3) {
                    wins++;
                    missStreak = 0;
                } else {
                    missStreak++;
                }
            }
            if (missStreak > maxMiss) maxMiss = missStreak;
            
            // Update Routine Streaks
            localRoutines.forEach(rt => {
                const rp = getRoutinePred(rt, prev, row[0]);
                if (row[1] === rp.p2) { rt.currentMissStreak = 0; rt.hits++; }
                else {
                    rt.currentMissStreak++;
                    if (row[2] === rp.p3) { rt.currentMissStreak = 0; rt.hits++; }
                    else { rt.currentMissStreak++; }
                }
                if (rt.currentMissStreak > rt.maxMissStreak) rt.maxMissStreak = rt.currentMissStreak;
            });
        }
        completedRows.push(row);
    });
    
    return { wins, total, maxMiss };
}

console.log("=== AI Smart 2.0 Deep Simulation ===");
let history = [];
let totalWins = 0;
let totalSteps = 0;
let finalResults = [];

GAMES.forEach((game, i) => {
    const res = simulateAI(game, history);
    totalWins += res.wins;
    totalSteps += res.total;
    history.push(game);
    finalResults.push({ game: i+1, ...res });
});

console.log(`\nOverall AI Win Rate: ${(totalWins / totalSteps * 100).toFixed(2)}%`);
finalResults.forEach(r => {
    console.log(`Game ${r.game}: MaxMiss ${r.maxMiss} | WinRate ${(r.wins/r.total*100).toFixed(1)}%`);
});
