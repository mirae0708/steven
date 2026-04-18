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
                const rt = ROUTINES.find(r => r.id === strategySequence[seqIdx]);
                const p2 = getRoutinePred(rt, prevRow, row[0]).p2;
                const p3 = getRoutinePred(rt, prevRow, row[0]).p3;
                
                let win = false;
                const bet1 = missStreak > 0 ? CONFIG.UNIT_STEPS[Math.min(missStreak, 4)] : 0;
                if (row[1] === p2) { win = true; totalProfit += bet1; missStreak = 0; }
                else {
                    missStreak++;
                    const bet2 = CONFIG.UNIT_STEPS[Math.min(missStreak, 4)];
                    if (row[2] === p3) { win = true; totalProfit += bet2; missStreak = 0; }
                    else { missStreak++; totalProfit -= (bet1 + bet2); }
                }
                if (missStreak > maxMiss) maxMiss = missStreak;
            }
            if (row.every(isMark)) completedRows.push([...row]);
        });
    });
    return { profit: totalProfit, maxMiss: maxMiss };
}

const before = simulate([1, 4, 2, 3, 5]); // Star, Triangle, Bar, Cross, Three
const after = simulate([1, 3, 2, 3, 5]);  // Replacing Triangle(4) with Cross(3)

console.log("=== Strategy Comparison ===");
console.log("Before (★, △, ㅡ, X, 三): Profit = " + before.profit + "U, Max Miss = " + before.maxMiss);
console.log("After  (★, X, ㅡ, X, 三): Profit = " + after.profit + "U, Max Miss = " + after.maxMiss);
