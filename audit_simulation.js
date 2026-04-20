
const CLASSIC_ROUTINES = [
    { id: 1, name: 'Star', crit: 2, p2: 1, p3: 0, inverse: false },
    { id: 2, name: 'Bar', crit: 0, p2: 2, p3: 1, inverse: false },
    { id: 3, name: 'X', crit: 1, p2: 0, p3: 2, inverse: false },
    { id: 4, name: 'Semo', crit: 1, p2: 2, p3: 0, inverse: false },
    { id: 5, name: 'Sam', crit: 0, p2: 1, p3: 2, inverse: false },
    { id: 6, name: 'BarR', crit: 0, p2: 2, p3: 1, inverse: true },
    { id: 7, name: 'XR', crit: 1, p2: 0, p3: 2, inverse: true }
];

function isMark(val) { return val === 'P' || val === 'B'; }

function getRoutinePred(rt, prev, c1) {
    if (!rt || !prev || !isMark(c1)) return null;
    const match = prev[rt.crit] === c1;
    const resolve = symbol => {
        const flipped = symbol === 'P' ? 'B' : 'P';
        if (rt.inverse) return match ? flipped : symbol;
        return match ? symbol : flipped;
    };
    return { p2: resolve(prev[rt.p2]), p3: resolve(prev[rt.p3]) };
}

const shoeData = [
  ['B', 'P', 'B'], ['B', 'P', 'P'], ['B', 'B', 'B'], ['P', 'B', 'B'],
  ['P', 'P', 'P'], ['P', 'B', 'B'], ['P', 'B', 'P'], ['P', 'B', 'B'],
  ['P', 'P', 'B'], ['B', 'P', 'B'], ['B', 'P', 'P'], ['B', 'P', 'B'],
  ['B', 'P', 'B'], ['P', 'B', 'P'], ['B', 'B', 'B'], ['B', 'B', 'P']
];

console.log('| Col | Step | Result | 1 | 2 | 3 | 4 | 5 | 6 | 7 | Consensus (P:B) | 4+? | Result | Streaks (1-7) |');
console.log('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');

let streaks = [0, 0, 0, 0, 0, 0, 0];

for (let i = 1; i < shoeData.length; i++) {
    const prev = shoeData[i-1];
    const curr = shoeData[i];
    
    for (let step = 1; step <= 2; step++) { // Step 2 and Step 3
        const stepName = step === 1 ? 'S2' : 'S3'; 
        const c1 = curr[0];
        const actual = curr[step];
        const votes = { P: 0, B: 0 };
        const rowData = [];
        
        for (let rIdx = 0; rIdx < CLASSIC_ROUTINES.length; rIdx++) {
            const rt = CLASSIC_ROUTINES[rIdx];
            const pred = getRoutinePred(rt, prev, c1);
            const pVal = step === 1 ? pred.p2 : pred.p3;
            votes[pVal]++;
            rowData.push(pVal);
            
            if (pVal === actual) {
                streaks[rIdx] = 0;
            } else {
                streaks[rIdx]--;
            }
        }
        
        const consensusSide = votes.P >= votes.B ? 'P' : 'B';
        const consensusCount = Math.max(votes.P, votes.B);
        const isStrong = consensusCount >= 4;
        const success = (consensusSide === actual) ? '**HIT**' : 'MISS';
        
        console.log(`| ${i+1} | ${stepName} | ${actual} | ${rowData.join(' | ')} | ${votes.P}:${votes.B} | ${isStrong ? '✅' : '-'} | ${success} | [${streaks.join(',')}] |`);
    }
}
