
const fs = require('fs');

// Import Backup Data
const GAMES_FILE = fs.readFileSync('c:/Users/Steven/Desktop/Jongdari/OX_Predictor_v2/backups/GAMES_backup_20260417.js', 'utf8');
const GAMES = eval(GAMES_FILE + '; GAMES');

const PROGRESSION = [1, 3, 7, 3, 9, 21];

/**
 * Image Logic Simulation (Sticky Logic)
 * Prediction: Current Row 2 & 3 will match Previous Column Row 1.
 */
function runImageSim(game) {
    let profit = 0;
    let maxMiss = 0;
    let currentMiss = 0;
    let completedRows = [];
    
    game.forEach((row, ri) => {
        const prev = completedRows[completedRows.length - 1];
        if (prev) {
            // "Image Logic": Predict Step 2 & 3 based on Prev Column Step 1
            const prediction = prev[0]; // 이전 열의 첫 번째 기호 (O/X)
            
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
                    if (currentMiss >= 6) currentMiss = 0; // Reset after 6 misses
                }
            }
        }
        completedRows.push(row);
    });
    
    return { profit, maxMiss };
}

console.log("=== IMAGE LOGIC SIMULATION [1-3-7 / 3-9-21] ===");
let totalProfit = 0;
let results = [];

GAMES.forEach((game, idx) => {
    const res = runImageSim(game);
    totalProfit += res.profit;
    results.push({ game: idx + 1, ...res });
});

console.log(JSON.stringify({ results, totalProfit }, null, 2));
