let currentStrategyMode = localStorage.getItem('pb_strategy_mode') || 'total';
let currentGame = [];
let inputBuffer = [];
let predictedVal = null;
let currentStreak = 0;
let missStreak = 0;
let safetyState = 'WAIT';
let betProgress = 0;
let breakLeft = 0;
let stats = createEmptyStats();
let currentDangerRule = null;
let strategyMissStreaks = { optimal: 0, ai: 0, backup: 0, vertical: 0 };

let dom = {};
let deferredInstallPrompt = null;
function createEmptyStats() {
    return { total: 0, wins: 0, directWins: 0 };
}

function createRuntimeState() {
    return {
        predictedVal: null,
        currentStreak: 0,
        missStreak: 0,
        safetyState: 'WAIT',
        betProgress: 0,
        breakLeft: 0,
        stats: createEmptyStats(),
        dangerRule: null,
        totalMissStreak: 0,
        consensus7MissStreak: 0,
        lastHit: false
    };
}

function isMark(val) {
    return val === 'P' || val === 'B';
}

function normalizeRow(row) {
    const normalized = [null, null, null];
    if (!Array.isArray(row)) return normalized;
    for (let i = 0; i < 3; i++) {
        normalized[i] = isMark(row[i]) ? row[i] : null;
    }
    return normalized;
}

function normalizeBuffer(buffer) {
    if (!Array.isArray(buffer)) return [];
    const normalized = [];
    for (const val of buffer) {
        if (!isMark(val) || normalized.length >= 3) break;
        normalized.push(val);
    }
    return normalized;
}

function rowToPattern(row) {
    if (!Array.isArray(row) || row.length < 3 || !row.every(isMark)) return null;
    return row.join('');
}

function getDangerRule(prevRow, firstMark, missCount) {
    const prevPattern = rowToPattern(prevRow);
    if (!prevPattern || !isMark(firstMark)) return null;

    return CONFIG.DANGER_RULES.find(rule =>
        rule.prevPattern === prevPattern &&
        rule.firstMark === firstMark &&
        missCount >= rule.minMissStreak
    ) || null;
}
function readSnapshot() {
    try {
        const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        console.error('Saved state could not be loaded.', error);
        return null;
    }
}

function load() {
    const snapshot = readSnapshot();
    if (!snapshot) return;

    currentGame = Array.isArray(snapshot.game)
        ? snapshot.game.map(normalizeRow).filter(row => row.every(isMark))
        : [];
    inputBuffer = normalizeBuffer(snapshot.inputBuffer);
}

function save() {
    const snapshot = {
        version: 2,
        game: currentGame,
        inputBuffer,
        runtime: {
            predictedVal,
            currentStreak,
            missStreak,
            safetyState,
            betProgress,
            breakLeft,
            dangerRuleId: currentDangerRule ? currentDangerRule.id : null
        },
        stats,
        routineHits: CLASSIC_ROUTINES.map(rt => ({ id: rt.id, hits: rt.hits }))
    };

    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(snapshot));
}
function archive() {
    if (currentGame.length === 0) return;
    const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
    history.push(currentGame.map(row => [...row]));
    localStorage.setItem(CONFIG.HISTORY_KEY, JSON.stringify(history));
    console.log('Game archived to history. Total games:', history.length);
}