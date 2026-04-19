const fs = require('fs');
const path = require('path');

const src = fs.readFileSync('script_v10.js', 'utf8');
const lines = src.split('\n');

function getLines(start, end) {
    return lines.slice(start - 1, end).join('\n');
}

const config = getLines(1, 51) + '\n\n' + getLines(62, 70);

const state = getLines(60, 60) + '\n' +
    getLines(72, 84) + '\n' +
    getLines(114, 114) + '\n' +
    getLines(116, 173) + '\n' +
    getLines(212, 251) + '\n' +
    getLines(820, 826); // archive()

const predictor = getLines(175, 210) + '\n' +
    getLines(253, 615);

const ui = getLines(53, 58) + '\n' +
    getLines(86, 112) + '\n' +
    getLines(617, 818) + '\n' + // render, toggle, updateSafety, getUnit, updateUI, triggerCelebration
    getLines(894, 923) + '\n' + // install prompts
    getLines(1005, 1194); // analysis modals

const app = getLines(828, 892) + '\n' + // handleInput, undo, resetGame, registerSW
    getLines(925, 1003) + '\n' + // exportData, importData, setup
    getLines(1196, 1220); // init, window.onerror

if (!fs.existsSync('js')) {
    fs.mkdirSync('js');
}

fs.writeFileSync('js/config.js', config);
fs.writeFileSync('js/state.js', state);
fs.writeFileSync('js/predictor.js', predictor);
fs.writeFileSync('js/ui.js', ui);
fs.writeFileSync('js/app.js', app);

console.log("Successfully split script_v10.js into js/ directory.");
