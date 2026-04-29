// template-ui.js - 프로젝트별 템플릿/워크플로우 자동화 플러그인
registerWikiPlugin({
    name: 'TemplateUI',
    init() {
        // 템플릿 선택/생성 UI
        const bar = document.createElement('div');
        bar.className = 'template-ui-bar';
        bar.innerHTML = `
            <select id="template-select">
                <option value="">템플릿 선택</option>
                <option value="project">프로젝트 템플릿</option>
                <option value="daily">데일리 노트 템플릿</option>
            </select>
            <button id="template-apply-btn">적용</button>
            <span id="template-ui-msg" style="margin-left:10px;color:#0af"></span>
        `;
        document.body.prepend(bar);
        document.getElementById('template-apply-btn').onclick = () => {
            const val = document.getElementById('template-select').value;
            let content = '';
            if (val === 'project') content = '# 프로젝트 템플릿\n- 목표\n- 일정\n- 담당자';
            else if (val === 'daily') content = '# 데일리 노트\n- 오늘 할 일\n- 회고';
            if (content) {
                // 실제로는 마크다운 에디터에 삽입해야 함
                alert('템플릿 적용!\n' + content);
                document.getElementById('template-ui-msg').textContent = '템플릿 적용됨 (데모)';
            }
        };
    }
});
