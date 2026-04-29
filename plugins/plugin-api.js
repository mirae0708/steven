// plugin-api.js - 플러그인 시스템의 핵심 인터페이스
// 플러그인은 아래 구조를 따라 plugins/ 폴더에 JS 파일로 추가

window.WikiPlugins = window.WikiPlugins || [];

// 플러그인 등록 함수
function registerWikiPlugin(plugin) {
    if (plugin && plugin.name && typeof plugin.init === 'function') {
        window.WikiPlugins.push(plugin);
        try { plugin.init(); } catch (e) { console.error('플러그인 오류:', plugin.name, e); }
    }
}
window.registerWikiPlugin = registerWikiPlugin;

// 플러그인 실행 예시 (모든 플러그인에 대해)
document.addEventListener('DOMContentLoaded', () => {
    window.WikiPlugins.forEach(plugin => {
        if (typeof plugin.onLoad === 'function') {
            try { plugin.onLoad(); } catch (e) { console.error('플러그인 onLoad 오류:', plugin.name, e); }
        }
    });
});
