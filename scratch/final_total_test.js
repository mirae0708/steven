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
    [["B","P","B"],["P","B","P"],["B","P","B"],["P","B","P"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","P"],["B","P","P"],["B","B","B"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","B"],["P","B","P"],["B","B","B"],["B","B","P"],["B","B","B"]],
    [["P","P","P"],["B","P","B"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","B"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","B"],["B","B","B"],["B","B","B"],["P","P","P"],["B","B","P"],["B","B","B"],["P","B","B"],["P","P","P"],["B","B","B"]],
    [["B","P","B"],["P","B","P"],["B","P","B"],["P","B","P"],["P","B","P"],["B","P","B"],["P","B","P"],["B","P","P"],["B","P","P"],["B","B","B"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","B"],["P","B","P"],["B","B","B"],["B","B","P"],["B","B","B"]],
    [["P","B","B"],["B","B","B"],["P","P","P"],["B","P","B"],["B","B","P"],["B","B","P"],["P","B","B"],["B","P","B"],["B","P","P"],["P","P","P"],["P","P","B"],["P","P","B"],["P","P","B"],["B","B","B"],["P","P","P"],["B","B","B"],["B","B","B"],["P","P","P"]],
    [["B","B","P"],["P","B","P"],["P","P","P"],["B","B","B"],["P","B","B"],["B","B","P"],["P","B","P"],["B","P","B"],["B","P","P"],["B","P","P"],["B","P","P"],["B","B","P"],["P","P","P"],["P","B","P"],["P","P","P"],["B","P","B"],["B","B","P"],["P","B","B"]],
    [["P","B","P"],["B","B","P"],["P","P","B"],["P","B","B"],["B","B","P"],["B","B","B"],["P","P","P"],["P","B","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","P"],["B","P","B"],["P","P","P"],["P","P","B"],["P","B","P"],["B","B","B"],["P","P","P"],["P","B","B"],["P","B","P"]],
    [["P","P","B"], ["B","B","B"], ["B","P","P"], ["B","P","P"], ["P","P","B"], ["P","P","P"], ["P","P","P"], ["P","B","P"], ["P","B","B"], ["P","B","B"], ["P","P","B"], ["P","B","P"], ["B","B","B"], ["P","B","B"], ["P","P","B"], ["B","P","B"]]
];

const CONFIG = {
    UNIT_STEPS: [1, 3, 7, 17, 35],
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3],
        ai: [1, 4, 3, 1, 1, 3, 5, 5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 2, 2]
    }
};

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

function getModePred(mode, prev, buffer, colIndex) {
    const seq = CONFIG.STRATEGIES[mode];
    const sequenceIdx = (colIndex - 1) % seq.length;
    const routineId = seq[sequenceIdx];
    const targetRt = ROUTINES.find(r => r.id === routineId);
    const pred = getRoutinePred(targetRt, prev, buffer[0]);
    return buffer.length === 1 ? pred.p2 : pred.p3;
}

function getConsensusPred(prev, buffer, colIndex) {
    const v1 = getModePred('backup', prev, buffer, colIndex);
    const v2 = getModePred('optimal', prev, buffer, colIndex);
    const v3 = getModePred('ai', prev, buffer, colIndex);
    
    const score = { P: 0, B: 0 };
    [v1, v2, v3].forEach(v => { if (v) score[v]++; });
    
    if (score.P > score.B) return 'P';
    if (score.B > score.P) return 'B';
    return null;
}

let totalProfit = 0;
let maxMiss = 0;

// 전략별 연속 오답 추적
const modeNames = ['backup', 'optimal', 'ai'];
let modeMissStreaks = { backup: 0, optimal: 0, ai: 0 };
let modeMaxMiss = { backup: 0, optimal: 0, ai: 0 };
let modeMaxMissRoutine = { backup: '', optimal: '', ai: '' };

GAMES.forEach((game, gIdx) => {
    let missStreak = 0;
    let completedRows = [];
    // 전략별 현재 streak
    let curMissStreaks = { backup: 0, optimal: 0, ai: 0 };
    let curMissRoutine = { backup: '', optimal: '', ai: '' };
    game.forEach((row, rIdx) => {
        const colIndex = rIdx + 1;
        const prevRow = completedRows[completedRows.length - 1] || null;
        if (prevRow && colIndex > 1) {
            // Consensus(다수결) 모드
            // Step 2
            const pred2 = getConsensusPred(prevRow, [row[0]], colIndex);
            if (row[1] === pred2) {
                if (missStreak > 0) totalProfit += CONFIG.UNIT_STEPS[Math.min(missStreak, 4)];
                missStreak = 0;
            } else {
                missStreak++;
                // Step 3
                const pred3 = getConsensusPred(prevRow, [row[0], row[1]], colIndex);
                if (row[2] === pred3) {
                    totalProfit += CONFIG.UNIT_STEPS[Math.min(missStreak, 4)];
                    missStreak = 0;
                } else {
                    missStreak++;
                }
            }
            if (missStreak > maxMiss) maxMiss = missStreak;

            // 각 전략별 연속 오답 추적
            modeNames.forEach(mode => {
                // Step 2
                const pred2 = getModePred(mode, prevRow, [row[0]], colIndex);
                const routine2 = (() => {
                    const seq = CONFIG.STRATEGIES[mode];
                    const sequenceIdx = (colIndex - 1) % seq.length;
                    const routineId = seq[sequenceIdx];
                    return ROUTINES.find(r => r.id === routineId).name;
                })();
                if (row[1] === pred2) {
                    curMissStreaks[mode] = 0;
                } else {
                    curMissStreaks[mode]++;
                    curMissRoutine[mode] = routine2;
                }
                if (curMissStreaks[mode] > modeMaxMiss[mode]) {
                    modeMaxMiss[mode] = curMissStreaks[mode];
                    modeMaxMissRoutine[mode] = curMissRoutine[mode];
                }
                // Step 3
                const pred3 = getModePred(mode, prevRow, [row[0], row[1]], colIndex);
                const routine3 = routine2; // 같은 루틴
                if (row[2] === pred3) {
                    curMissStreaks[mode] = 0;
                } else {
                    curMissStreaks[mode]++;
                    curMissRoutine[mode] = routine3;
                }
                if (curMissStreaks[mode] > modeMaxMiss[mode]) {
                    modeMaxMiss[mode] = curMissStreaks[mode];
                    modeMaxMissRoutine[mode] = curMissRoutine[mode];
                }
            });
        }
        if (row.every(isMark)) completedRows.push([...row]);
    });
});

console.log("=== FINAL TOTAL MODE TEST (Consensus) ===");
console.log("Dataset: 31 Games (Training Sheets)");
console.log("Consensus Logic: Majority Vote of Backup, Optimal, AI Smart");
console.log("-----------------------------------------");
console.log("Total Profit (Projected): " + totalProfit + "U");
console.log("Maximum Consecutive Losses (Max Miss): " + maxMiss);
console.log("");
console.log("[전략별 최대 연속 오답 및 해당 루틴]");
modeNames.forEach(mode => {
    console.log(`${mode.toUpperCase()} : 최대 연속 오답 = ${modeMaxMiss[mode]}, 루틴 = ${modeMaxMissRoutine[mode]}`);
});

// 분석표 생성
console.log("\n[게임별 전략별 최대 연속 오답 분석표]");
console.log("| Game | BACKUP(오답/루틴) | OPTIMAL(오답/루틴) | AI(오답/루틴) |");
console.log("|------|-------------------|---------------------|---------------|");

// CSV 저장
const fs = require('fs');
const csvPath = __dirname + '/final_total_analysis.csv';
let csvRows = ["Game,BACKUP(오답/루틴),OPTIMAL(오답/루틴),AI(오답/루틴)"];
GAMES.forEach((game, gIdx) => {
    let completedRows = [];
    let curMissStreaks = { backup: 0, optimal: 0, ai: 0 };
    let maxMissStreaks = { backup: 0, optimal: 0, ai: 0 };
    let curMissRoutine = { backup: '', optimal: '', ai: '' };
    let maxMissRoutine = { backup: '', optimal: '', ai: '' };
    game.forEach((row, rIdx) => {
        const colIndex = rIdx + 1;
        const prevRow = completedRows[completedRows.length - 1] || null;
        if (prevRow && colIndex > 1) {
            ['backup', 'optimal', 'ai'].forEach(mode => {
                // Step 2
                const pred2 = getModePred(mode, prevRow, [row[0]], colIndex);
                const routine2 = (() => {
                    const seq = CONFIG.STRATEGIES[mode];
                    const sequenceIdx = (colIndex - 1) % seq.length;
                    const routineId = seq[sequenceIdx];
                    return ROUTINES.find(r => r.id === routineId).name;
                })();
                if (row[1] === pred2) {
                    curMissStreaks[mode] = 0;
                } else {
                    curMissStreaks[mode]++;
                    curMissRoutine[mode] = routine2;
                }
                if (curMissStreaks[mode] > maxMissStreaks[mode]) {
                    maxMissStreaks[mode] = curMissStreaks[mode];
                    maxMissRoutine[mode] = curMissRoutine[mode];
                }
                // Step 3
                const pred3 = getModePred(mode, prevRow, [row[0], row[1]], colIndex);
                const routine3 = routine2;
                if (row[2] === pred3) {
                    curMissStreaks[mode] = 0;
                } else {
                    curMissStreaks[mode]++;
                    curMissRoutine[mode] = routine3;
                }
                if (curMissStreaks[mode] > maxMissStreaks[mode]) {
                    maxMissStreaks[mode] = curMissStreaks[mode];
                    maxMissRoutine[mode] = curMissRoutine[mode];
                }
            });
        }
        if (row.every(isMark)) completedRows.push([...row]);
    });
    csvRows.push(`${gIdx+1},-${maxMissStreaks.backup} (${maxMissRoutine.backup}),-${maxMissStreaks.optimal} (${maxMissRoutine.optimal}),-${maxMissStreaks.ai} (${maxMissRoutine.ai})`);
});
fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf8');
