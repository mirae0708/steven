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
                    if(match) {
                        counter[row[targetCellIdx]] = (counter[row[targetCellIdx]] || 0) + 1;
                    }
                }
            }
        });
        const entries = Object.entries(counter).sort((a,b) => b[1]-a[1]);
        return entries.length > 0 ? entries[0][0] : null;
    };
    return findInHistory(4) || findInHistory(3) || findInHistory(2) || "B";
}

GAMES.forEach((game, gameIdx) => {
    let currentStreak = 0;
    let streakCount2 = 0;
    let streakCount3 = 0;
    let gCurr = [];
    const others = GAMES.filter((_, i) => i !== gameIdx);

    for(let i=0; i<game.length; i++) {
        if(i < 4) { gCurr.push(game[i]); continue; }
        
        const actual = game[i];
        const p2 = predictCell(others, gCurr, 1, [actual[0]]);
        let win = false;
        
        if (p2 === actual[1]) {
            win = true;
        } else {
            const p3 = predictCell(others, gCurr, 2, [actual[0], actual[1]]);
            if (p3 === actual[2]) win = true;
        }

        if (win) {
            if (currentStreak === 2) streakCount2++;
            if (currentStreak === 3) streakCount3++;
            currentStreak = 0;
        } else {
            currentStreak++;
        }
        gCurr.push(actual);
    }
    // Check end of game streak
    if (currentStreak === 2) streakCount2++;
    if (currentStreak === 3) streakCount3++;
    
    console.log(`Game ${gameIdx + 1}: 2연패 ${streakCount2}회, 3연패 ${streakCount3}회`);
});
