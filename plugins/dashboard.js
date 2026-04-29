// dashboard.js v2.0 — Hermes 통합 라이브 대시보드
// 실시간 포트폴리오 · KOSPI · 배틀루프 · 인보이스 현황
registerWikiPlugin({
    name: 'Dashboard',
    init() {
        // ── 스타일 ──────────────────────────────────
        const style = document.createElement('style');
        style.textContent = `
            @keyframes dashPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
            @keyframes dashGlow { 0%,100%{box-shadow:0 0 4px #4ade80} 50%{box-shadow:0 0 12px #4ade80} }
            @keyframes dashSlideIn { from{transform:translateX(320px);opacity:0} to{transform:translateX(0);opacity:1} }
            #hermes-dash {
                position:fixed; top:10px; right:10px; z-index:99999;
                width:340px; max-height:85vh; overflow-y:auto;
                background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);
                color:#e0e0e0; padding:0; border-radius:12px;
                font-family:'Segoe UI','Apple SD Gothic Neo',sans-serif; font-size:13px;
                box-shadow:0 8px 32px rgba(0,0,0,0.5); border:1px solid #2a2a4a;
                animation:dashSlideIn 0.3s ease-out;
            }
            #hermes-dash::-webkit-scrollbar { width:4px; }
            #hermes-dash::-webkit-scrollbar-track { background:transparent; }
            #hermes-dash::-webkit-scrollbar-thumb { background:#4a4a6a; border-radius:2px; }
            .dash-header {
                background:linear-gradient(90deg,#0f3460,#533483);
                padding:12px 16px; border-radius:12px 12px 0 0;
                display:flex; justify-content:space-between; align-items:center;
                cursor:move; user-select:none;
            }
            .dash-header h3 { margin:0; font-size:15px; color:#fff; display:flex; align-items:center; gap:8px; }
            .dash-header h3::before { content:"⚡"; font-size:16px; }
            .dash-badge {
                font-size:10px; background:rgba(255,255,255,0.15); padding:2px 8px;
                border-radius:10px; color:#aaa;
            }
            .dash-body { padding:8px 12px 12px; }
            .dash-section { margin-bottom:8px; }
            .dash-section-title {
                font-size:11px; text-transform:uppercase; letter-spacing:1px;
                color:#6b7280; margin:8px 0 4px; padding-bottom:2px;
                border-bottom:1px solid #2a2a4a; display:flex; justify-content:space-between;
            }
            .dash-row {
                display:flex; justify-content:space-between; align-items:center;
                padding:3px 4px; border-radius:4px; transition:background 0.2s;
            }
            .dash-row:hover { background:rgba(255,255,255,0.05); }
            .dash-label { color:#9ca3af; }
            .dash-value { font-weight:600; font-family:'JetBrains Mono','Consolas',monospace; }
            .dash-up { color:#4ade80; }
            .dash-down { color:#f87171; }
            .dash-neutral { color:#fbbf24; }
            .dash-ok { color:#4ade80; animation:dashGlow 2s infinite; }
            .dash-warn { color:#fbbf24; }
            .dash-bad { color:#f87171; animation:dashPulse 1.5s infinite; }
            .dash-pos-item {
                padding:3px 4px; margin:2px 0; border-radius:4px;
                background:rgba(255,255,255,0.03); font-size:12px;
            }
            .dash-pos-ticker { font-weight:700; color:#93c5fd; }
            .dash-progress {
                height:4px; background:#2a2a4a; border-radius:2px; margin:2px 0 4px; overflow:hidden;
            }
            .dash-progress-bar { height:100%; border-radius:2px; transition:width 1s ease; }
            .dash-footer {
                display:flex; justify-content:space-between; align-items:center;
                padding:6px 12px; border-top:1px solid #2a2a4a; font-size:10px; color:#6b7280;
            }
            .dash-btn {
                background:rgba(255,255,255,0.1); border:1px solid #3a3a5a;
                color:#ccc; padding:3px 10px; border-radius:6px; cursor:pointer;
                font-size:11px; transition:all 0.2s;
            }
            .dash-btn:hover { background:#3a3a5a; color:#fff; }
            .dash-btn-close {
                background:transparent; border:none; color:#6b7280;
                cursor:pointer; font-size:18px; padding:0 4px; line-height:1;
            }
            .dash-btn-close:hover { color:#f87171; }
            .dash-status-dot {
                display:inline-block; width:8px; height:8px; border-radius:50%;
                margin-right:4px;
            }
            .dash-timestamp { text-align:right; font-size:10px; color:#4b5563; margin-top:4px; }
        `;
        document.head.appendChild(style);

        // ── UI 생성 ──────────────────────────────────
        const dash = document.createElement('div');
        dash.id = 'hermes-dash';
        dash.innerHTML = `
            <div class="dash-header">
                <h3>Hermes Dashboard</h3>
                <span class="dash-badge" id="dash-clock">--:--</span>
                <button class="dash-btn-close" id="dash-close">✕</button>
            </div>
            <div class="dash-body" id="dash-body">
                <div style="text-align:center;padding:20px;color:#6b7280">🔄 데이터 로딩 중...</div>
            </div>
            <div class="dash-footer">
                <button class="dash-btn" id="dash-refresh">⟳ 새로고침</button>
                <span id="dash-ts"></span>
            </div>
        `;
        document.body.appendChild(dash);

        // ── 드래그 가능 ──────────────────────────────
        (() => {
            let pos = {x:0,y:0}, dragging = false;
            const header = dash.querySelector('.dash-header');
            header.addEventListener('mousedown', e => {
                dragging = true;
                pos.x = e.clientX - dash.offsetLeft;
                pos.y = e.clientY - dash.offsetTop;
                dash.style.cursor = 'grabbing';
            });
            document.addEventListener('mousemove', e => {
                if (!dragging) return;
                dash.style.left = (e.clientX - pos.x) + 'px';
                dash.style.right = 'auto';
                dash.style.top = (e.clientY - pos.y) + 'px';
            });
            document.addEventListener('mouseup', () => {
                dragging = false; dash.style.cursor = '';
            });
        })();

        // ── 시계 ─────────────────────────────────────
        function updateClock() {
            const now = new Date();
            document.getElementById('dash-clock').textContent =
                now.toLocaleTimeString('ko-KR', {hour:'2-digit',minute:'2-digit'});
        }
        setInterval(updateClock, 30000);
        updateClock();

        // ── 데이터 로드 ──────────────────────────────
        async function loadDashboard() {
            const body = document.getElementById('dash-body');
            try {
                const resp = await fetch('/hermes_dashboard.json?_=' + Date.now());
                const d = await resp.json();
                body.innerHTML = renderDashboard(d);
                document.getElementById('dash-ts').textContent = d.timestamp || '';
            } catch(e) {
                body.innerHTML = `
                    <div style="text-align:center;padding:16px;color:#f87171">
                        ❌ 데이터 연결 실패<br>
                        <span style="font-size:11px;color:#6b7280">${e.message}</span>
                    </div>
                    <div style="text-align:center;padding:8px;font-size:11px;color:#6b7280">
                        hermes_dashboard.json을 찾을 수 없습니다.<br>
                        WSL에서 데이터 수집기가 실행 중인지 확인하세요.
                    </div>
                `;
            }
        }

        function renderDashboard(d) {
            const p = d.portfolio || {};
            const k = d.kospi || {};
            const m = d.macro || {};
            const s = d.system || {};
            const h = d.hermes || {};
            const b = d.battleloop || {};
            const cb = d.cb_score || '';

            const kospiDir = k.change > 0 ? 'dash-up' : k.change < 0 ? 'dash-down' : 'dash-neutral';
            const pnlDir = p.total_pnl > 0 ? 'dash-up' : p.total_pnl < 0 ? 'dash-down' : 'dash-neutral';
            const gwStatus = h.gateway === 'ok' ? '<span class="dash-status-dot dash-ok"></span>online' : '<span class="dash-status-dot dash-bad"></span>offline';
            const blStatus = b.status === 'running' ? '<span class="dash-status-dot dash-ok"></span>운영중' : '<span class="dash-status-dot dash-bad"></span>중단';

            // 포트폴리오 진행바 (초기 500만원 대비)
            const pnlRatio = Math.min(Math.max((p.total_pnl + 10) / 20, 0), 1);
            const pnlBarColor = p.total_pnl > 0 ? '#4ade80' : p.total_pnl < 0 ? '#f87171' : '#fbbf24';

            let posHtml = '';
            if (p.positions && p.positions.length > 0) {
                p.positions.forEach(pos => {
                    const dir = pos.pnl_pct > 0 ? 'dash-up' : pos.pnl_pct < 0 ? 'dash-down' : 'dash-neutral';
                    posHtml += `<div class="dash-pos-item">
                        <div class="dash-row">
                            <span class="dash-pos-ticker">${pos.ticker}</span>
                            <span class="${dir}">${pos.qty}주 ${pos.pnl_pct > 0 ? '+' : ''}${pos.pnl_pct}%</span>
                        </div>
                        <div style="font-size:11px;color:#9ca3af;padding-left:4px">
                            매입 ${pos.buy_price.toLocaleString()} → 현재 ${pos.current_price.toLocaleString()}
                        </div>
                    </div>`;
                });
            } else {
                posHtml = '<div style="padding:4px;color:#6b7280;font-size:11px">📭 보유 종목 없음</div>';
            }

            return `
                <div class="dash-section">
                    <div class="dash-section-title">
                        <span>📊 시장</span>
                        <span>KOSPI ${k.value.toLocaleString()}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">KOSPI 변동</span>
                        <span class="dash-value ${kospiDir}">${k.change > 0 ? '+' : ''}${k.change}%</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">WTI 유가</span>
                        <span class="dash-value">$${m.wti}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">USD/KRW</span>
                        <span class="dash-value ${m.usdkrw > 1450 ? 'dash-warn' : ''}">₩${m.usdkrw.toLocaleString()}</span>
                    </div>
                </div>

                <div class="dash-section">
                    <div class="dash-section-title">
                        <span>💰 포트폴리오</span>
                        <span>${p.total_value.toLocaleString()}원</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">초기 자본</span>
                        <span class="dash-value">5,000,000원</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">현금</span>
                        <span class="dash-value">${p.cash.toLocaleString()}원</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">수익률</span>
                        <span class="dash-value ${pnlDir}">${p.total_pnl > 0 ? '+' : ''}${p.total_pnl}%</span>
                    </div>
                    <div class="dash-progress">
                        <div class="dash-progress-bar" style="width:${pnlRatio*100}%;background:${pnlBarColor}"></div>
                    </div>
                    ${posHtml}
                </div>

                <div class="dash-section">
                    <div class="dash-section-title">
                        <span>⚙️ 시스템</span>
                        <span>${cb}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">Gateway</span>
                        <span class="dash-value">${gwStatus}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">WebUI</span>
                        <span class="dash-value ${h.webui === '200' ? 'dash-ok' : 'dash-bad'}">${h.webui === '200' ? '✅' : '❌'} port 3000</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">배틀루프</span>
                        <span class="dash-value">${blStatus}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">디스크</span>
                        <span class="dash-value ${s.disk && parseInt(s.disk) > 80 ? 'dash-warn' : ''}">${s.disk || '?'}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">메모리</span>
                        <span class="dash-value">${s.memory || '?'}</span>
                    </div>
                    <div class="dash-row">
                        <span class="dash-label">가동시간</span>
                        <span class="dash-value" style="font-size:11px;color:#9ca3af">${s.uptime || '?'}</span>
                    </div>
                </div>

                ${d.watcher ? `
                <div class="dash-section">
                    <div class="dash-section-title">
                        <span>📋 인보이스</span>
                        <span style="color:#6b7280;font-weight:400">Watcher</span>
                    </div>
                    <div style="font-size:11px;color:#9ca3af;padding:2px 4px;white-space:pre-line;line-height:1.6">${d.watcher}</div>
                </div>` : ''}
            `;
        }

        // ── 이벤트 ────────────────────────────────────
        document.getElementById('dash-refresh').onclick = loadDashboard;
        document.getElementById('dash-close').onclick = () => dash.remove();

        // ── 자동 갱신 (60초) ──────────────────────────
        loadDashboard();
        setInterval(loadDashboard, 60000);
    }
});
