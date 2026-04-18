
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
    // New Image Data
    [["B","B","P"],["P","B","P"],["P","P","P"],["B","B","B"],["P","B","B"],["B","B","P"],["P","B","P"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","P"],["B","B","P"],["P","P","P"],["P","B","P"],["P","P","P"],["B","P","B"],["B","B","P"],["P","B","B"],["P","B","P"]],
    [["P","B","P"],["B","B","P"],["P","P","B"],["P","B","B"],["B","B","P"],["B","B","B"],["P","P","P"],["P","B","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","P"],["B","P","B"],["P","P","P"],["P","P","B"],["P","B","P"],["B","B","B"],["P","P","P"],["P","B","B"],["P","B","P"]],
    [["P","P","B"],["P","B","P"],["P","P","B"],["B","P","B"],["P","B","P"],["P","B","P"],["P","P","P"],["B","P","P"],["B","B","P"],["B","P","B"],["P","B","P"],["B","P","B"],["B","B","P"],["B","P","P"],["B","B","B"],["P","B","P"],["P","P","P"],["P","B","B"]]
];

const CONFIG = {
    UNIT_STEPS: [1, 3, 7, 17, 35],
    DANGER_RULES: [
        { id: 'bpb-b', prevPattern: 'BPB', firstMark: 'B', minMissStreak: 0 },
        { id: 'bbp-b-after-miss', prevPattern: 'BBP', firstMark: 'B', minMissStreak: 1 }
    ]
};

const ROUTINES = [
    { id: 1, name: 'Star', crit: 2, p2: 1, p3: 0 },
    { id: 3, name: 'Cross', crit: 1, p2: 0, p3: 2 }
];

function isMark(v) { return v === 'P' || v === 'B'; }

function getRoutinePred(rt, prev, c1) {
    if (!prev || !isMark(c1)) return null;
    const match = prev[rt.crit] === c1;
    const resolve = symbol => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

function getMasterPrediction(prev, buffer) {
    if (!prev || buffer.length === 0) return null;
    if (buffer.length === 1) {
        const star = ROUTINES.find(r => r.id === 1);
        const pStar = getRoutinePred(star, prev, buffer[0]);
        return pStar.p2;
    }
    if (buffer.length === 2) {
        const cross = ROUTINES.find(r => r.id === 3);
        const pCross = getRoutinePred(cross, prev, buffer[0]);
        return pCross.p3;
    }
    return null;
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

const analysisReport = GAMES.map((game, gIdx) => {
    let missStreak = 0;
    let maxMiss = 0;
    let profit = 0;
    let completedRows = [];

    game.forEach((row, rIdx) => {
        const buffer = [];
        const skipRule = getDangerRule(completedRows[completedRows.length - 1], row[0], missStreak);
        
        row.forEach((val, stepIdx) => {
            if (stepIdx > 0) {
                const pred = skipRule ? null : getMasterPrediction(completedRows[completedRows.length - 1], buffer);
                if (!skipRule && pred) {
                    const unit = missStreak > 0 ? CONFIG.UNIT_STEPS[Math.min(missStreak, 5) - 1] : 0;
                    if (val === pred) {
                        if (unit > 0) profit += unit;
                        missStreak = 0;
                    } else {
                        if (unit > 0) profit -= unit;
                        missStreak++;
                        if (missStreak > maxMiss) maxMiss = missStreak;
                    }
                }
            }
            buffer.push(val);
        });
        completedRows.push([...row]);
    });

    return { id: gIdx + 1, maxMiss, profit };
});

console.log("| Game # | Max Miss | Profit (U) |");
console.log("|--------|----------|------------|");
analysisReport.forEach(r => {
    console.log(`| ${r.id.toString().padEnd(6)} | ${r.maxMiss.toString().padEnd(8)} | ${r.profit.toString().padStart(10)} |`);
});

const totalProfit = analysisReport.reduce((sum, r) => sum + r.profit, 0);
const avgMaxMiss = (analysisReport.reduce((sum, r) => sum + r.maxMiss, 0) / analysisReport.length).toFixed(1);
console.log(`\nSummary:`);
console.log(`Total Games: ${analysisReport.length}`);
console.log(`Total Profit: ${totalProfit}U`);
console.log(`Avg Max Miss: ${avgMaxMiss}`);
