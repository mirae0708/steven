const CONFIG = {
    STORAGE_KEY: 'pb_master_v3_5',
    HISTORY_KEY: 'ox_master_history',
    TOTAL_ROWS: 20,
    SERVICE_WORKER_PATH: './sw.js',
    UNIT_STEPS: [1, 3, 7, 3, 9, 21],
    ROTATION_SEQUENCE: [2, 1, 2, 1, 3],
    STRATEGIES: {
        backup: [1, 4, 2, 3, 5],
        optimal: [2, 1, 2, 1, 3],
        vertical: [0], // \ub0b4\ub824\uc624\uae30 \ubaa8\ub4dc (\ud2b9\uc218 \ub85c\uc9c1)
        ai: [] 
    },
    DANGER_RULES: [
        { id: 'bpb-b', prevPattern: 'BPB', firstMark: 'B', minMissStreak: 0, label: 'BPB \ub4a4 B' },
        { id: 'pbp-p', prevPattern: 'PBP', firstMark: 'P', minMissStreak: 0, label: 'PBP \ub4a4 P' },
        { id: 'bbp-b-miss', prevPattern: 'BBP', firstMark: 'B', minMissStreak: 1, label: 'BBP \ub4a4 B' },
        { id: 'ppb-p-miss', prevPattern: 'PPB', firstMark: 'P', minMissStreak: 1, label: 'PPB \ub4a4 P' },
        { id: 'bbb-b-kill', prevPattern: 'BBB', firstMark: 'B', minMissStreak: 0, label: '\ud3ec\ub3c4 \uc904\ud0c0\uae30 \uacbd\uace0' },
        { id: 'ppp-p-kill', prevPattern: 'PPP', firstMark: 'P', minMissStreak: 0, label: '\ud50c\ub808\uc774\uc5b4 \uc904\ud0c0\uae30 \uacbd\uace0' }
    ]
};

const VOCAB = {
    status_wait: '\uad00\ub9dd \uc911',
    rt_icon_1: '\u2605',
    rt_icon_2: '\u2014',
    rt_icon_3: 'X',
    rt_icon_4: '\u25b3',
    rt_icon_5: '\u4e09',
    rt_icon_6: '\u2014R',
    rt_icon_7: 'XR',
    btn_hist: 'HIST',
    analysis_title: '\ud788\uc2a4\ud1a0\ub9ac \ubd84\uc11d \ub808\ud3ec\ud2b8',
    th_miss: '\ucd5c\ub300 \ubbf8\uc2a4',
    th_profit: '\uc190\uc775 (Unit)',
    th_rate: '\uc2b9\ub960',
    btn_export: '\ubc31\uc5c5 \uc800\uc7a5',
    btn_import: '\ubc31\uc5c5 \ubd88\ub7ec\uc624\uae30',
    install_title: '\uc548\ub4dc\ub85c\uc774\ub4dc \uc124\uce58 \uac00\ub2a5',
    install_desc: '\ud648 \ud654\uba74\uc5d0 \ucd94\uac00\ud574\uc11c \uc571\ucc18\ub7fc \uc2e4\ud589\ud558\uc138\uc694.',
    btn_install: '\uc124\uce58',
    guide_wait: '\uc544\uc774 \ub9c8\uc2a4\ud130 \ub300\uae30 \uc911',
    badge_wait: '\ubd84\uc11d \ub300\uae30',
    hit_overlay: '\ud83c\udfaf HIT!',
    ic_zen: '\ud83d\udd0d',
    ic_reload: '\ud83d\udd04',
    ic_undo: '\u21a9',
    ic_reset: '\u2716',
    strat_vertical: '\ub0b4\ub824\uc624\uae30(VERT)'
};

const CLASSIC_ROUTINES = [
    { id: 1, name: '\u2605 \ubcc4', crit: 2, p2: 1, p3: 0, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 2, name: '\u2014 \ubc14', crit: 0, p2: 2, p3: 1, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 3, name: 'X \uc5d1\uc2a4', crit: 1, p2: 0, p3: 2, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 4, name: '\u25b3 \uc138\ubaa8', crit: 1, p2: 2, p3: 0, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 5, name: '\u4e09 \uc0bc', crit: 0, p2: 1, p3: 2, hits: 0, currentMissStreak: 0, maxMissStreak: 0 },
    { id: 6, name: '\u2014R \ubc14R', crit: 0, p2: 2, p3: 1, hits: 0, currentMissStreak: 0, maxMissStreak: 0, inverse: true },
    { id: 7, name: 'XR \uc5d1\uc2a4R', crit: 1, p2: 0, p3: 2, hits: 0, currentMissStreak: 0, maxMissStreak: 0, inverse: true }
];