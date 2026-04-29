// sample-runner.js - 샘플 플러그인: 코드 실행기
registerWikiPlugin({
    name: 'SampleRunner',
    init() {
        // "실행 가능한 코드블록" 버튼 추가 (markdown-body 내)
        document.querySelectorAll('pre code.language-javascript').forEach(block => {
            if (block.parentElement.querySelector('.plugin-run-btn')) return;
            const btn = document.createElement('button');
            btn.textContent = '[플러그인 실행]';
            btn.className = 'plugin-run-btn';
            btn.onclick = () => {
                try {
                    // eslint-disable-next-line no-eval
                    const result = eval(block.textContent);
                    alert('[플러그인] 실행 결과: ' + result);
                } catch (e) {
                    alert('[플러그인] 오류: ' + e);
                }
            };
            block.parentElement.style.position = 'relative';
            block.parentElement.appendChild(btn);
        });
    },
    onLoad() {
        // 페이지 로드 시 추가 동작 가능
    }
});
