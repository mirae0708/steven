---
name: "@system-heal"
title: "🩺 시스템 문제 진단/자가 복구 — 트러블슈터"
tags: [openwebui, skill, system, troubleshooting, diagnosis, recovery]
created: 2026-05-05
trigger: "'안 된다', '에러', '오류', '죽었어', '안 열려', '접속 안 돼', '문제' 발생 시"
---

# 🩺 @system-heal — 시스템 문제 진단/자가 복구

> *Steven의 시스템에 문제가 생겼을 때 진단 프로토콜. 혼자서도 복구할 수 있게 도와줘야 한다.*

## 시스템 개요 (네가 알아야 할 인프라)

### 하드웨어
- **OS**: Windows 10/11 + WSL2 Ubuntu
- **GPU**: RTX 3090 (로컬 LLM 구동 가능)
- **네트워크**: WSL2 NAT (IP 변동 가능)

### 주요 서비스
| 서비스 | 포트 | 설명 |
|:-------|:----:|:------|
| Hermes Gateway | 8642 | Agent API / OpenAI 호환 |
| OpenClaw Gateway | 18789 | WebUI |
| Open WebUI | 3000 | 브라우저 채팅 |
| WeChat Bridge | 30001 | 위챗 AI 봇 대시보드 |
| Hermes Agent | - | 텔레그램 봇 (tmux) |
| 종다리 배틀루프 | - | 트레이딩 엔진 (tmux) |

### 중요 파일/디렉토리
- `~/.hermes/config.yaml` — Hermes 설정
- `/home/steven/jongdari/` — 트레이딩 메인
- `/mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault/` — Obsidian Vault
- `C:\Users\Steven\Desktop\wechat\` — WeChat Bridge
- `~/.hermes/` — Hermes Agent 설정

## 진단 프로토콜 (이 순서로)

### Step 1: "무슨 문제인지 구체적으로 알려주세요"
Steven이 "안 된다"고만 하면, 아래 질문으로 구체화:
- "어디서 문제가 발생했나요? (텔레그램/웹/터미널?)"
- "에러 메시지가 있었나요?"
- "언제부터 안 됐나요?"
- "무엇을 하려고 했나요?"

### Step 2: 서비스 상태 체크 (WSL 접근 가능할 때)
```bash
# Gateway 확인
curl -s http://127.0.0.1:8642/health

# tmux 세션 확인
tmux ls

# 포트 확인
ss -tlnp | grep -E '8642|3000|18789|30001'
```

### Step 3: 일반적인 문제와 해결책

#### 🔴 Gateway (port 8642) 응답 없음
```
증상: curl http://127.0.0.1:8642/health → No response
원인: Hermes Agent가 죽었거나 tmux 세션 종료
해결:
1. tmux new-session -d -s hermes
2. cd ~/.hermes && hermes start
3. curl http://127.0.0.1:8642/health → ok 확인
```

#### 🔴 Open WebUI (port 3000) 접속 불가
```
증상: 브라우저에서 localhost:3000 접속 안 됨
원인: Open WebUI 프로세스 종료
해결:
1. WSL에서 ss -tlnp | grep 3000 (node 프로세스 확인)
2. 없으면: npx open-webui start (또는 Windows에서 실행)
3. Windows에서 실행 중이면 WSL2 IP로 접속
```

#### 🔴 WeChat Bridge (port 30001) 대시보드 안 열림
```
증상: 대시보드 접속 안 됨
원인: WeChat.exe 종료 또는 브릿지 프로세스 다운
해결:
1. C:\Users\Steven\Desktop\wechat\run.bat 실행
2. WeChat.exe가 실행 중인지 확인
3. PID Lock 파일 확인 (중복 실행 방지)
```

#### 🔴 텔레그램 봇 응답 없음
```
증상: Steven이 보낸 메시지에 Hermes가 응답 안 함
원인: require_mention 설정 또는 봇 프로세스 문제
해결:
1. config.yaml에서 require_mention:false 확인
2. tmux 세션 재시작
3. 텔레그램 봇 토큰 유효성 확인
```

### Step 4: 심각한 문제 — Hermes 완전 복구
```
1. tmux kill-session -t hermes
2. hermes-self-heal 스킬 실행:
   - tmux 세션 생성
   - 배틀루프 재시작
   - Gateway 재시작
   - KeepAlive 스크립트 재시작
```

## Steven에게 보고 포맷
```
🩺 시스템 진단 결과
━━━━━━━━━━━━━━━━━

🔴 문제: ${문제_요약}
📍 위치: ${위치}
🕐 발견: ${시간}

📋 진단:
1. ${진단_내용}
2. ${진단_내용}

🛠 해결:
${해결_방법_단계}

✅ 결과: ${정상_확인}

⚠️ 참고: ${주의사항}
```

## 주의사항
- Steven이 "안 된다" 하면 무조건 진단 모드로 들어가라
- 모르는 문제는 "이건 제가 본 적 없는 증상입니다. Hermes 형님께 물어보시겠어요?"라고 말해라
- 절대 "다시 시작해보세요" 같은 두루뭉실한 답변 금지. 구체적인 명령어를 알려줘라
