
const INITIAL_TRAINING_DATA = [
     [["P","P","P"], ["B","B","B"], ["P","P","B"], ["B","B","P"], ["B","P","B"], ["B","B","P"], ["P","P","P"], ["B","B","P"], ["P","B","P"], ["P","B","B"], ["B","P","B"], ["B","B","B"], ["B","P","B"], ["B","P","B"], ["B","P","P"], ["P","P","P"], ["P","P","P"], ["P","P","P"]],
    [["B","B","P"], ["B","P","P"], ["B","P","P"], ["B","B","B"], ["B","B","B"], ["P","B","B"], ["B","B","B"], ["B","B","B"], ["P","B","P"], ["B","B","P"], ["B","P","P"], ["P","P","P"], ["P","P","B"], ["B","P","P"], ["P","B","P"], ["P","B","B"], ["P","B","B"], ["P","B","B"]],
    [["P","P","P"], ["B","P","P"], ["P","B","B"], ["B","B","B"], ["P","B","B"], ["P","P","P"], ["P","P","P"], ["B","B","B"], ["B","B","B"], ["B","B","B"], ["P","P","P"], ["P","P","P"], ["B","B","B"], ["B","B","B"], ["B","B","B"], ["P","B","B"], ["B","P","P"], ["P","P","P"]],
    [["B","B","P"], ["B","P","P"], ["B","B","P"], ["B","B","P"], ["B","P","B"], ["P","P","P"], ["B","P","B"], ["B","P","B"], ["P","B","B"], ["B","P","B"], ["B","P","P"], ["P","P","P"], ["B","P","P"], ["B","P","P"], ["P","P","P"], ["B","P","P"], ["P","P","B"], ["B","P","P"]],
    [["B","P","B"], ["B","P","B"], ["B","P","B"], ["B","B","B"], ["B","P","B"], ["B","B","P"], ["B","P","P"], ["P","P","P"], ["B","B","P"], ["P","P","P"], ["P","P","P"], ["B","B","P"], ["B","P","P"], ["B","P","P"], ["P","P","P"], ["P","B","B"], ["B","B","B"], ["P","P","P"]],
    [["P","P","B"],["B","B","B"],["B","B","P"],["B","P","B"],["P","B","B"],["P","P","P"],["P","B","P"],["B","B","B"],["B","B","B"],["P","B","B"],["B","P","P"],["P","P","B"],["P","P","B"],["P","P","B"],["B","P","B"],["B","P","P"],["B","P","P"],["B","B","B"]],
    [["B","P","P"],["P","P","B"],["B","P","P"],["P","B","B"],["B","P","B"],["B","P","P"],["B","P","B"],["P","P","P"],["B","B","P"],["P","P","B"],["B","P","B"],["B","P","P"],["B","B","B"],["B","P","B"],["B","P","B"],["P","P","B"],["P","B","B"],["P","P","P"]]
];

const CLASSIC_ROUTINES = [
    { id: 1, name: "★ 별", crit: 2, p2: 1, p3: 0 },
    { id: 2, name: "ㅡ 바", crit: 0, p2: 2, p3: 1 },
    { id: 3, name: "X 엑스", crit: 1, p2: 0, p3: 2 },
    { id: 4, name: "△ 세모", crit: 1, p2: 2, p3: 0 }, 
    { id: 5, name: "三 삼", crit: 0, p2: 1, p3: 2 }
];

function getRoutinePred(rt, prev, c1) {
    if (!prev) return null;
    const match = (prev[rt.crit] === c1);
    const resolve = (symbol) => (!match ? (symbol === 'P' ? 'B' : 'P') : symbol);
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

function analyze() {
    const results = CLASSIC_ROUTINES.map(rt => ({
        ...rt,
        totalTries: 0,
        hits: 0,
        maxMissStreak: 0,
        currentMissStreak: 0,
        missStreaksByGame: [],
        stepStatistics: { step1: { hits: 0, tries: 0 }, step2: { hits: 0, tries: 0 } }
    }));

    INITIAL_TRAINING_DATA.forEach((game, gIdx) => {
        results.forEach(r => r.currentMissStreak = 0); // Reset streak for new game

        for (let i = 1; i < game.length; i++) {
            const prev = game[i-1];
            const curr = game[i];

            results.forEach(rt => {
                const pred = getRoutinePred(rt, prev, curr[0]);
                rt.totalTries++;
                rt.stepStatistics.step1.tries++;
                
                let isHit = false;
                if (curr[1] === pred.p2) {
                    rt.hits++;
                    rt.stepStatistics.step1.hits++;
                    isHit = true;
                } else {
                    // Try Step 2 (R3)
                    rt.stepStatistics.step2.tries++;
                    if (curr[2] === pred.p3) {
                        rt.hits++;
                        rt.stepStatistics.step2.hits++;
                        isHit = true;
                    }
                }

                if (isHit) {
                    rt.currentMissStreak = 0;
                } else {
                    rt.currentMissStreak++;
                    if (rt.currentMissStreak > rt.maxMissStreak) rt.maxMissStreak = rt.currentMissStreak;
                }
            });
        }
    });

    console.log(JSON.stringify(results, null, 2));
}

analyze();
