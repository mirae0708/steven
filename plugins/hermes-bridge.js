// hermes-bridge.js - 옵시디안과 Hermes(WSL2) 파일 기반 연동 플러그인
registerWikiPlugin({
    name: 'HermesBridge',
    init() {
        // 공유 폴더 경로 (Windows 기준)
        const shareDir = 'C:/Users/Steven/hermes-share/';
        // 메시지 전송 UI
        const bar = document.createElement('div');
        bar.className = 'hermes-bridge-bar';
        bar.innerHTML = `
            <input id="hermes-msg" placeholder="Hermes로 보낼 메시지" style="width:200px;">
            <button id="hermes-send-btn">전송</button>
            <button id="hermes-refresh-btn">응답 확인</button>
            <div id="hermes-response" style="background:#222;padding:10px;margin-top:5px;max-height:100px;overflow:auto;"></div>
        `;
        document.body.prepend(bar);
        // 메시지 전송 (명령/지식)
        document.getElementById('hermes-send-btn').onclick = async () => {
            const msg = document.getElementById('hermes-msg').value.trim();
            if (!msg) return;
            const fname = `hermes_cmd_${Date.now()}.txt`;
            try {
                await window.saveAsFile(shareDir + fname, msg);
                document.getElementById('hermes-response').textContent = '전송 완료: ' + fname;
            } catch (e) {
                document.getElementById('hermes-response').textContent = '전송 오류: ' + e;
            }
        };
        // 응답 확인
        document.getElementById('hermes-refresh-btn').onclick = async () => {
            try {
                const files = await window.listFiles(shareDir);
                const resFiles = files.filter(f => f.startsWith('hermes_res_'));
                if (resFiles.length === 0) {
                    document.getElementById('hermes-response').textContent = '응답 없음';
                    return;
                }
                const last = resFiles.sort().reverse()[0];
                const content = await window.readFileAsText(shareDir + last);
                document.getElementById('hermes-response').textContent = content;
            } catch (e) {
                document.getElementById('hermes-response').textContent = '읽기 오류: ' + e;
            }
        };
    }
});

// 파일 저장/읽기/목록화 유틸 (Electron/브라우저 환경에 따라 구현 필요)
window.saveAsFile = async function(path, content) {
    // Electron/Node.js 환경에서만 동작 (브라우저는 File System Access API 필요)
    if (window.require) {
        const fs = window.require('fs');
        fs.writeFileSync(path, content, 'utf8');
    } else {
        throw '로컬 파일 저장은 Electron/Node.js 환경에서 지원됩니다.';
    }
};
window.listFiles = async function(dir) {
    if (window.require) {
        const fs = window.require('fs');
        return fs.readdirSync(dir);
    } else {
        throw '로컬 파일 목록은 Electron/Node.js 환경에서 지원됩니다.';
    }
};
window.readFileAsText = async function(path) {
    if (window.require) {
        const fs = window.require('fs');
        return fs.readFileSync(path, 'utf8');
    } else {
        throw '로컬 파일 읽기는 Electron/Node.js 환경에서 지원됩니다.';
    }
};
