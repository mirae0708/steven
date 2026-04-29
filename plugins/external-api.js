// external-api.js - 외부 API/문서 연동 플러그인 (Stack Overflow, GitHub 등)
registerWikiPlugin({
    name: 'ExternalAPI',
    init() {
        // 간단한 검색 UI
        const bar = document.createElement('div');
        bar.className = 'external-api-bar';
        bar.innerHTML = `
            <input id="ext-api-query" placeholder="Stack Overflow/GitHub 검색" style="width:200px;">
            <button id="ext-api-search-btn">검색</button>
            <div id="ext-api-results" style="background:#222;padding:10px;margin-top:5px;max-height:200px;overflow:auto;"></div>
        `;
        document.body.prepend(bar);
        document.getElementById('ext-api-search-btn').onclick = async () => {
            const q = document.getElementById('ext-api-query').value.trim();
            if (!q) return;
            const resultsDiv = document.getElementById('ext-api-results');
            resultsDiv.textContent = '검색 중...';
            // Stack Overflow API 예시
            try {
                const res = await fetch(`https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=${encodeURIComponent(q)}&site=stackoverflow`);
                const data = await res.json();
                resultsDiv.innerHTML = data.items.slice(0, 5).map(item => `<div><a href="${item.link}" target="_blank">${item.title}</a></div>`).join('');
            } catch (e) {
                resultsDiv.textContent = 'API 오류';
            }
        };
    }
});
