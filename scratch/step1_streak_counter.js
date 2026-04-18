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
    let currentStreak1 = 0;
    let streakCount1_2 = 0; // Consecutive fails of Step 1 (2 in a row)
    let streakCount1_3 = 0; // Consecutive fails of Step 1 (3 in a row)
    let totalFails1 = 0;
    
    let gCurr = [];
    const others = GAMES.filter((_, i) => i !== gameIdx);

    for(let i=0; i<game.length; i++) {
        if(i < 4) { gCurr.push(game[i]); continue; }
        
        const actual = game[i];
        const p2 = predictCell(others, gCurr, 1, [actual[0]]);
        
        if (p2 === actual[1]) {
            // Step 1 Success
            if (currentStreak1 === 2) streakCount1_2++;
            if (currentStreak1 === 3) streakCount1_3++;
            currentStreak1 = 0;
        } else {
            // Step 1 Fail
            currentStreak1++;
            totalFails1++;
        }
        gCurr.push(actual);
    }
    if (currentStreak1 === 2) streakCount1_2++;
    if (currentStreak1 === 3) streakCount1_3++;
    
    console.log(`Game ${gameIdx + 1}: Step1 총 실패 ${totalFails1}회, 연속 실패(2회) ${streakCount1_2}회, 연속 실패(3회) ${streakCount1_3}회`);
});
