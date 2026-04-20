
const fs = require('fs');

// Import Backup Data
const GAMES_FILE = fs.readFileSync('c:/Users/Steven/Desktop/Jongdari/OX_Predictor_v2/backups/GAMES_backup_20260417.js', 'utf8');
const GAMES = eval(GAMES_FILE + '; GAMES');

const PROGRESSION = [1, 3, 7, 3, 9, 21];

function runVariedSim(game, type) {
    let profit = 0;
    let maxMiss = 0;
    let currentMiss = 0;
    let completedRows = [];
    
    game.forEach((row, ri) => {
        const prev = completedRows[completedRows.length - 1];
        let prediction = null;

        if (type === 'curr_same') prediction = row[0];
        else if (type === 'curr_opp') prediction = (row[0] === 'P' ? 'B' : 'P');
        else if (type === 'prev_same' && prev) prediction = prev[0];
        else if (type === 'prev_opp' && prev) prediction = (prev[0] === 'P' ? 'B' : 'P');

        if (prediction) {
            // Step 2 Analysis
            let bet = PROGRESSION[currentMiss] || 0;
            if (row[1] === prediction) {
                if (bet > 0) profit += bet;
                currentMiss = 0;
            } else {
                if (bet > 0) profit -= bet;
                currentMiss++;
                maxMiss = Math.max(maxMiss, currentMiss);
                
                // Step 3 Analysis
                let bet3 = PROGRESSION[currentMiss] || 0;
                if (row[2] === prediction) {
                    if (bet3 > 0) profit += bet3;
                    currentMiss = 0;
                } else {
                    if (bet3 > 0) profit -= bet3;
                    currentMiss++;
                    maxMiss = Math.max(maxMiss, currentMiss);
                    if (currentMiss >= 6) currentMiss = 0; // Reset
                }
            }
        }
        completedRows.push(row);
    });
    
    return { profit, maxMiss };
}

const types = ['curr_same', 'curr_opp', 'prev_same', 'prev_opp'];
let summary = {};

types.forEach(type => {
    let total = 0;
    GAMES.forEach(game => {
        total += runVariedSim(game, type).profit;
    });
    summary[type] = total;
});

console.log("=== MULTI-LOGIC SIMULATION RESULTS ===");
console.log(JSON.stringify(summary, null, 2));
