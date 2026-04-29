// auto-evolve.js - 옵시디안 자동 진화 플러그인 (지식/지혜 수집 및 자동 문서화)
registerWikiPlugin({
    name: 'AutoEvolve',
    init() {
        // 1. 주기적으로 외부 지식 소스(예: Stack Overflow, GitHub)에서 정보 수집
        setInterval(async () => {
            const now = new Date();
            const log = document.getElementById('auto-evolve-log') || (() => {
                const d = document.createElement('div');
                d.id = 'auto-evolve-log';
                d.style = 'position:fixed;bottom:10px;right:10px;background:#111;color:#0f0;padding:8px;z-index:9999;max-width:400px;max-height:200px;overflow:auto;font-size:12px;';
                document.body.appendChild(d);
                return d;
            })();
            log.innerHTML = `[${now.toLocaleTimeString()}] 외부 지식 수집 중...`;
            // Stack Overflow에서 최신 인기 질문 수집
            let summary = '';
            try {
                const res = await fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&site=stackoverflow');
                const data = await res.json();
                const items = data.items.slice(0, 3);
                summary = items.map(q => `- [${q.title}](${q.link})`).join('\n');
            } catch (e) {
                summary = 'API 오류';
            }
            // 2. 내부 위키(마크다운)에 자동 반영 (데모: 콘솔/로그)
            log.innerHTML += `<br>최신 인기 Q&A:<br>${summary.replace(/\n/g,'<br>')}`;
            // 3. (실제 적용 시) 마크다운 파일 자동 생성/업데이트, 요약/링크 자동화 등
            // 4. (확장) 사용자의 피드백/행동 분석 및 진화 방향 결정
        }, 60000); // 1분마다 자동 실행
    }
});
