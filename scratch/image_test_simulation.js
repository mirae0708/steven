/**
 * NEW TEST DATA FROM IMAGES
 */
const TEST_GAMES = [
    // Image 1
    [["X","X","O"],["O","X","O"],["O","O","O"],["X","X","X"],["O","X","X"],["X","X","O"],["O","X","O"],["X","O","X"],["X","O","O"],["X","O","O"],["X","O","O"],["X","X","O"],["O","O","O"],["O","X","O"],["O","O","O"],["X","O","X"],["X","X","O"],["O","X","X"],["O","X","O"]],
    // Image 2
    [["O","X","O"],["X","X","O"],["O","O","X"],["O","X","X"],["X","X","O"],["X","X","X"],["O","O","O"],["O","X","O"],["O","X","O"],["X","X","X"],["X","X","X"],["O","X","O"],["X","O","X"],["O","O","O"],["O","O","X"],["O","X","O"],["X","X","X"],["O","O","O"],["O","X","X"],["O","X","O"]],
    // Image 3
    [["O","O","X"],["O","X","O"],["O","O","X"],["X","O","X"],["O","X","O"],["O","X","O"],["O","O","O"],["X","O","O"],["X","X","O"],["X","O","X"],["O","X","O"],["X","O","X"],["X","X","O"],["X","O","O"],["X","X","X"],["O","X","O"],["O","O","O"],["O","X","X"]]
];

const HISTORY = [
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
    [["P","B","B"],["B","B","B"],["P","P","P"],["B","P","B"],["B","B","P"],["B","B","P"],["P","B","B"],["B","P","B"],["B","P","P"],["P","P","P"],["P","P","B"],["P","P","B"],["P","P","B"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","B"],["P","P","P"]]
];

function predictCell(history, currentGrid, targetCellIdx, inputBuf) {
    const n = currentGrid.length;
    const findInHistory = (depth) => {
        const counter = {};
        const key = JSON.stringify(currentGrid.slice(n-depth, n));
        history.forEach(game => {
            for(let i=depth; i<game.length; i++) {
                if(JSON.stringify(game.slice(i-depth, i)) === key) {
                    const row = game[i];
                    let match = true;
                    for(let c=0; c<targetCellIdx; c++) if(row[c] !== inputBuf[c]) { match = false; break; }
                    if(match) { counter[row[targetCellIdx]] = (counter[row[targetCellIdx]] || 0) + 1; }
                }
            }
        });
        const res = Object.entries(counter).sort((a,b) => b[1]-a[1]);
        return res.length > 0 ? res[0][0] : null;
    };
    return findInHistory(4) || findInHistory(3) || findInHistory(2) || "B";
}

// Convert O -> P, X -> B
const convert = grid => grid.map(row => row.map(cell => cell === "O" ? "P" : "B"));
const realData = TEST_GAMES.map(convert);

const units = [
    { s2: 1, s3: 3 },
    { s2: 2, s3: 5 },
    { s2: 6, s3: 15 },
    { s2: 15, s3: 35 }
];

realData.forEach((game, gameIdx) => {
    console.log(`\n=== Image ${gameIdx + 1} Simulation ===`);
    let gCurr = [];
    let streak = 0;
    let totalPL = 0;
    let deaths = 0;
    let deathStreak = 0;
    let maxDeathStreak = 0;

    for (let i = 0; i < game.length; i++) {
        const actual = game[i];
        if (i < 4) { gCurr.push(actual); continue; }

        const u = units[Math.min(streak, units.length - 1)];
        const p2 = predictCell(HISTORY, gCurr, 1, [actual[0]]);
        let win = false;
        let colPL = 0;

        if (p2 === actual[1]) {
            win = true;
            colPL = u.s2;
        } else {
            const p3 = predictCell(HISTORY, gCurr, 2, [actual[0], actual[1]]);
            if (p3 === actual[2]) {
                win = true;
                colPL = u.s3 - u.s2;
            } else {
                win = false;
                colPL = -(u.s2 + u.s3);
            }
        }

        if (win) {
            streak = 0;
            deathStreak = 0;
        } else {
            streak++;
            deaths++;
            deathStreak++;
            if (deathStreak > maxDeathStreak) maxDeathStreak = deathStreak;
        }
        totalPL += colPL;
        gCurr.push(actual);
    }
    console.log(`Total Columns: ${game.length}`);
    console.log(`Deaths: ${deaths}`);
    console.log(`Max Death Streak: ${maxDeathStreak}`);
    console.log(`Cumulative P/L: ${totalPL.toFixed(1)} Units`);
});
