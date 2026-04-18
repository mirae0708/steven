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
    [["P","P","B"],["P","B","P"],["P","P","B"],["B","P","B"],["P","B","P"],["P","B","P"],["P","P","P"],["B","P","P"],["B","B","P"],["B","P","B"],["P","B","P"],["B","P","B"],["B","B","P"],["B","P","P"],["B","B","B"],["P","B","P"],["P","P","P"],["P","B","B"]],
    [["P","P","B"], ["B","B","B"], ["B","P","P"], ["B","P","P"], ["P","P","B"], ["P","P","P"], ["P","P","P"], ["P","B","P"], ["P","B","B"], ["P","B","B"], ["P","P","B"], ["P","B","P"], ["B","B","B"], ["P","B","B"], ["P","P","B"], ["B","P","B"]]
];

const CONFIG = { UNIT_STEPS: [1, 3, 7, 17, 35] };
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

function simulate(strategySequence) {
    let totalProfit = 0;
    let maxMiss = 0;
    GAMES.forEach(game => {
        let missStreak = 0;
        let completedRows = [];
        game.forEach((row, rIdx) => {
            const colIndex = rIdx + 1;
            const prevRow = completedRows[completedRows.length - 1] || null;
            if (prevRow && colIndex > 1) {
                const seqIdx = (colIndex - 1) % strategySequence.length;
                const rtId = strategySequence[seqIdx];
                const rt = ROUTINES.find(r => r.id === rtId);
                const preds = getRoutinePred(rt, prevRow, row[0]);
                
                let win = false;
                const bet1 = missStreak > 0 ? (missStreak >= 5 ? 0 : CONFIG.UNIT_STEPS[missStreak]) : 0;
                
                if (row[1] === preds.p2) {
                    if (bet1 > 0) totalProfit += bet1;
                    missStreak = 0;
                } else {
                    missStreak++;
                    const bet2 = (missStreak >= 5) ? 0 : CONFIG.UNIT_STEPS[missStreak];
                    if (row[2] === preds.p3) {
                        if (bet2 > 0) totalProfit += bet2;
                        missStreak = 0;
                    } else {
                        missStreak++;
                        totalProfit -= (bet1 + bet2);
                    }
                }
                if (missStreak > maxMiss) maxMiss = missStreak;
            }
            if (row.every(v => v !== null)) completedRows.push([...row]);
        });
    });
    return { profit: totalProfit, maxMiss: maxMiss };
}

console.log("Searching for optimal 5-routine sequence...");

let bestStrategy = { profit: -Infinity, maxMiss: 99, sequence: [] };

for (let i1 of [1,2,3,4,5]) {
    for (let i2 of [1,2,3,4,5]) {
        for (let i3 of [1,2,3,4,5]) {
            for (let i4 of [1,2,3,4,5]) {
                for (let i5 of [1,2,3,4,5]) {
                    const seq = [i1, i2, i3, i4, i5];
                    const res = simulate(seq);
                    // Priority: Lowest Max Miss, then Highest Profit
                    if (res.maxMiss < bestStrategy.maxMiss) {
                        bestStrategy = { profit: res.profit, maxMiss: res.maxMiss, sequence: seq };
                    } else if (res.maxMiss === bestStrategy.maxMiss && res.profit > bestStrategy.profit) {
                        bestStrategy = { profit: res.profit, maxMiss: res.maxMiss, sequence: seq };
                    }
                }
            }
        }
    }
}

console.log("OPTIMAL Strategy FOUND:");
console.log("Sequence IDs: " + bestStrategy.sequence);
console.log("Names: " + bestStrategy.sequence.map(id => ROUTINES.find(r => r.id === id).name).join(", "));
console.log("Total Profit: " + bestStrategy.profit + "U");
console.log("Max Miss Streak: " + bestStrategy.maxMiss);
