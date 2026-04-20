
const GAME = [
    ["P", "P", "B"], ["B", "B", "B"], ["B", "P", "P"], ["B", "P", "P"],
    ["P", "P", "B"], ["P", "P", "P"], ["P", "P", "P"], ["P", "B", "P"],
    ["P", "B", "B"], ["P", "B", "B"], ["P", "P", "B"], ["P", "B", "P"],
    ["B", "B", "B"], ["P", "B", "B"], ["P", "P", "B"], ["B", null, null]
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

let missStreak = 0;
let maxMiss = 0;
let profit = 0;
let completedRows = [];

console.log("Col | Pred | Actual | Result | Miss | Status | Profit");
console.log("----|------|--------|--------|------|--------|-------");

GAME.forEach((row, rIdx) => {
    const buffer = [];
    const prevRow = completedRows[completedRows.length - 1] || null;
    const skipRule = getDangerRule(prevRow, row[0], missStreak);
    
    row.forEach((val, stepIdx) => {
        if (stepIdx > 0 && val !== null) {
            const pred = skipRule ? null : getMasterPrediction(prevRow, buffer);
            let result = "-";
            let bet = 0;

            if (!skipRule && pred) {
                bet = missStreak > 0 ? CONFIG.UNIT_STEPS[Math.min(missStreak, 5) - 1] : 0;
                if (val === pred) {
                    if (bet > 0) profit += bet;
                    result = "WIN";
                    missStreak = 0;
                } else {
                    if (bet > 0) profit -= bet;
                    result = "LOSS";
                    missStreak++;
                    if (missStreak > maxMiss) maxMiss = missStreak;
                }
            } else if (skipRule) {
                result = "SKIP (DANGER)";
            }
            
            console.log(`${(rIdx + 1).toString().padEnd(3)} | ${pred || "-"}    | ${val}      | ${result.padEnd(6)} | ${missStreak}    | ${skipRule ? "DANGER" : "SAFE"}   | ${profit}`);
        }
        buffer.push(val);
    });
    if (row.every(isMark)) completedRows.push([...row]);
});

console.log(`\nSummary:`);
console.log(`Max Miss: ${maxMiss}`);
console.log(`Current Profit: ${profit}U`);
