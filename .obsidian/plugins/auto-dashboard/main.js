// main.js - Obsidian 공식 플러그인: 자동화 대시보드 & Hermes 연동
// v0.2 - Windows/WSL Hermes 연동 개선
const { Plugin, Modal, Notice, Platform } = require('obsidian');

const SHARE_DIR = 'C:/Users/Steven/hermes-share/';
const VAULT_DIR = 'C:/Users/Steven/Desktop/wiki/team-wiki-vault/';

module.exports = class AutoDashboardPlugin extends Plugin {
  async onload() {
    this.addRibbonIcon('bot', '🤖 자동화 대시보드', () => this.openDashboard());
    this.addCommand({
      id: 'open-auto-dashboard',
      name: '자동화 대시보드 열기',
      callback: () => this.openDashboard()
    });
    this.addCommand({
      id: 'send-ping-to-hermes',
      name: 'Hermes 연결 테스트 (ping)',
      callback: () => {
        const fname = `hermes_cmd_ping_${Date.now()}.txt`;
        try {
          require('fs').writeFileSync(SHARE_DIR + fname, 'ping', 'utf8');
          new Notice('🏓 ping 전송 완료');
        } catch (e) {
          new Notice('❌ 전송 오류: ' + e);
        }
      }
    });
    this.addCommand({
      id: 'send-custom-hermes-command',
      name: 'Hermes 명령 보내기',
      callback: () => {
        const cmd = prompt('Hermes로 보낼 명령:');
        if (!cmd) return;
        const fname = `hermes_cmd_cmd_${Date.now()}.txt`;
        try {
          require('fs').writeFileSync(SHARE_DIR + fname, cmd, 'utf8');
          new Notice('✅ 명령 전송 완료');
        } catch (e) {
          new Notice('❌ 오류: ' + e);
        }
      }
    });
  }

  openDashboard() {
    new DashboardModal(this.app).open();
  }
};

class DashboardModal extends Modal {
  constructor(app) {
    super(app);
    this.shareDir = SHARE_DIR;
    this.vaultDir = VAULT_DIR;
  }

  async onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass('dashboard-container');

    // === 제목 ===
    contentEl.createEl('h2', { text: '🤖 Hermes 자동화 대시보드' });

    // === 상태 섹션 ===
    const statusSection = contentEl.createDiv({ cls: 'dashboard-section' });
    statusSection.createEl('h3', { text: '📡 Hermes 상태' });
    this.renderStatus(statusSection);

    // === 명령 전송 섹션 ===
    const cmdSection = contentEl.createDiv({ cls: 'dashboard-section' });
    cmdSection.createEl('h3', { text: '📤 Hermes 명령 전송' });

    const row = cmdSection.createDiv({ cls: 'flex-row' });
    const input = row.createEl('input', {
      type: 'text',
      placeholder: '명령 입력 (ping / read 00-Home / list / write)'
    });
    const sendBtn = row.createEl('button', { text: '전송' });
    const resDiv = cmdSection.createEl('div', { cls: 'hermes-res', text: '→ 명령을 입력하고 전송 버튼을 누르세요' });

    sendBtn.onclick = () => this.sendCommand(input.value, resDiv);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.sendCommand(input.value, resDiv);
    });

    // 빠른 명령 버튼들
    const quickBtns = cmdSection.createDiv({ cls: 'flex-row', attr: { style: 'margin-top: 8px; flex-wrap: wrap;' } });
    const quickCmds = ['ping', 'list', 'read 00-Home', 'read Hermes-Test-Note', 'time'];
    quickCmds.forEach(cmd => {
      const btn = quickBtns.createEl('button', { text: cmd, cls: 'success' });
      btn.onclick = () => {
        input.value = cmd;
        this.sendCommand(cmd, resDiv);
      };
    });

    // === Watcher 로그 섹션 ===
    const logSection = contentEl.createDiv({ cls: 'dashboard-section' });
    logSection.createEl('h3', { text: '📋 Hermes Watcher 로그' });
    const logPre = logSection.createEl('pre', { text: '(로딩 중...)' });
    const refreshLogBtn = logSection.createEl('button', { text: '🔄 로그 새로고침', cls: 'success' });
    refreshLogBtn.onclick = () => this.loadLogs(logPre);
    this.loadLogs(logPre);

    // === 빠른 링크 ===
    const linkSection = contentEl.createDiv({ cls: 'dashboard-section' });
    linkSection.createEl('h3', { text: '🔗 빠른 링크' });
    const links = [
      { label: '📈 종다리 시스템', path: '01-Projects/Jongdari-Trading-System' },
      { label: '🤖 Hermes 소개', path: '02-Knowledge/Hermes' },
      { label: '🏗️ 시스템 아키텍처', path: '02-Knowledge/System-Architecture' },
      { label: '🧠 AI Council', path: '02-Knowledge/AI-Council' },
      { label: '⚙️ 운영 가이드', path: '02-Knowledge/Operations-Guide' },
      { label: '🔄 자기 발전 로그', path: '02-Knowledge/Hermes-Daily-Log' },
    ];
    links.forEach(l => {
      const btn = linkSection.createEl('button', {
        text: l.label,
        attr: { style: 'margin: 3px; font-size: 12px;' }
      });
      btn.onclick = () => {
        const existing = this.app.workspace.getLeavesOfType('markdown');
        const leaf = this.app.workspace.getLeaf(true);
        leaf.openFile(
          this.app.vault.getAbstractFileByPath(l.path + '.md') ||
          this.app.vault.getAbstractFileByPath(l.path)
        );
      };
    });

    // === 응답 새로고침 버튼 ===
    const refreshSection = contentEl.createDiv({ cls: 'dashboard-section' });
    refreshSection.createEl('h3', { text: '📥 마지막 Hermes 응답' });
    const lastResDiv = refreshSection.createEl('div', { cls: 'hermes-res', text: '(새로고침 필요)' });
    const refreshBtn = refreshSection.createEl('button', { text: '🔄 응답 새로고침', cls: 'success' });
    refreshBtn.onclick = () => this.loadLastResponse(lastResDiv);
    this.loadLastResponse(lastResDiv);
  }

  renderStatus(container) {
    const online = this.checkHermesOnline();
    const statusDiv = container.createDiv();
    const dot = statusDiv.createSpan({ cls: `status-dot ${online ? 'online' : 'offline'}` });
    statusDiv.createSpan({ text: online ? 'Hermes Online' : 'Hermes Offline' });
    const badge = statusDiv.createSpan({
      cls: `badge ${online ? 'green' : 'red'}`,
      text: online ? '연결됨' : '끊김'
    });
  }

  checkHermesOnline() {
    try {
      const fs = require('fs');
      const files = fs.readdirSync(this.shareDir);
      // watcher가 살아있으면 최근 2분 내 응답 파일들이 있을 것
      const recentRes = files.filter(f => f.startsWith('hermes_res_'));
      return recentRes.length > 0;
    } catch (e) {
      return false;
    }
  }

  sendCommand(cmd, resDiv) {
    if (!cmd.trim()) {
      resDiv.setText('⚠️ 명령을 입력해주세요');
      return;
    }
    const id = Date.now();
    const fname = `hermes_cmd_${id}.txt`;
    try {
      const fs = require('fs');
      fs.writeFileSync(this.shareDir + fname, cmd.trim(), 'utf8');
      resDiv.setText(`✅ 전송 완료: ${cmd.trim()}\n🕐 대기 중...`);
      // 3초 후 응답 확인
      setTimeout(() => {
        const resFile = `hermes_res_${id}.txt`;
        const resPath = this.shareDir + resFile;
        try {
          if (fs.existsSync(resPath)) {
            const content = fs.readFileSync(resPath, 'utf8');
            resDiv.setText(content);
          } else {
            resDiv.setText(`✅ 전송 완료\n⏳ 아직 응답 없음 (Watcher 확인 중...)`);
          }
        } catch (e) {
          resDiv.setText('❌ 응답 읽기 오류: ' + e);
        }
      }, 4000);
    } catch (e) {
      resDiv.setText('❌ 전송 오류: ' + e);
    }
  }

  loadLogs(pre) {
    try {
      const fs = require('fs');
      const logFile = this.shareDir + 'watcher.log';
      if (fs.existsSync(logFile)) {
        const content = fs.readFileSync(logFile, 'utf8');
        const lines = content.split('\n').filter(l => l.trim());
        const last30 = lines.slice(-30).join('\n');
        pre.setText(last30 || '(로그 없음)');
      } else {
        pre.setText('(watcher.log 파일 없음)');
      }
    } catch (e) {
      pre.setText('❌ 로그 읽기 오류: ' + e);
    }
  }

  loadLastResponse(resDiv) {
    try {
      const fs = require('fs');
      const files = fs.readdirSync(this.shareDir);
      const resFiles = files.filter(f => f.startsWith('hermes_res_') && f.endsWith('.txt'));
      if (resFiles.length === 0) {
        resDiv.setText('(응답 파일 없음)');
        return;
      }
      const last = resFiles.sort().reverse()[0];
      const content = fs.readFileSync(this.shareDir + last, 'utf8');
      resDiv.setText(`[${last}]\n${content}`);
    } catch (e) {
      resDiv.setText('❌ 오류: ' + e);
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}
