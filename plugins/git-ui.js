// git-ui.js - Git 연동 및 버전 관리 플러그인 (UI)
registerWikiPlugin({
    name: 'GitUI',
    init() {
        // 간단한 Git UI 버튼 영역 추가
        const bar = document.createElement('div');
        bar.className = 'git-ui-bar';
        bar.innerHTML = `
            <button id="git-status-btn">Git 상태</button>
            <button id="git-commit-btn">커밋</button>
            <button id="git-push-btn">푸시</button>
            <button id="git-pull-btn">풀</button>
            <span id="git-ui-msg" style="margin-left:10px;color:#0af"></span>
        `;
        document.body.prepend(bar);
        // 버튼 이벤트 (실제 git 명령은 서버/로컬 연동 필요, 데모 메시지)
        document.getElementById('git-status-btn').onclick = () => {
            document.getElementById('git-ui-msg').textContent = 'Git 상태: (데모)';
        };
        document.getElementById('git-commit-btn').onclick = () => {
            document.getElementById('git-ui-msg').textContent = '커밋 완료 (데모)';
        };
        document.getElementById('git-push-btn').onclick = () => {
            document.getElementById('git-ui-msg').textContent = '푸시 완료 (데모)';
        };
        document.getElementById('git-pull-btn').onclick = () => {
            document.getElementById('git-ui-msg').textContent = '풀 완료 (데모)';
        };
    }
});
