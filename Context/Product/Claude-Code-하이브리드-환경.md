---
title: "Claude Code 하이브리드 환경 구축 가이드"
created: 2026-05-23
status: approved
reviewed_by: Steven
last_reviewed: 2026-05-23
tags: [context/product, claude-code, hybrid, development]
---

# Claude Code 하이브리드 환경 구축 가이드

> Claude Code(Anthropic) + 로컬 Hermes 모델을 조합한 하이브리드 개발 환경
> Hermes(총지휘관) → Claude Code(코딩 실행) 구조

## 개요
비싼 클라우드 토큰(Claude API)과 로컬 LLM(Hermes 계열)을 상황에 따라 전환하여 사용.
복잡한 작업은 클라우드, 단순/보안 작업은 로컬에서 처리.

## 핵심 전략

| 모드 | 대상 모델 | 사용처 | 비용 |
|:----|:---------|:-------|:----:|
| **🌐 Cloud** | Claude 3.7 Sonnet/Opus | 전체 리팩토링, 복잡한 로직 설계, 다중 툴 체이닝 | 유료 (토큰 과금) |
| **💻 Local** | Hermes-3 8B/70B, Nous-Hermes-2 | 단순 버그 수정, 단위 테스트, 보안 코드, 오프라인 개발 | 무료 (GPU 전기세) |

## 전제 조건

### 1. Claude Code 설치
```bash
npm install -g @anthropic-ai/claude-code
# 최초 인증: claude auth login --console (API key 방식)
```

### 2. 로컬 LLM 서버
- **LM Studio** (권장): OpenAI/Anthropic 호환 엔드포인트, Tool Calling 안정적
- **Ollama**: `http://localhost:11434` (간단, 가벼움)
- Hermes 모델 다운로드: `ollama pull hermes3:8b` 또는 LM Studio에서 Nous-Hermes-2 로드

### 3. Claude Code의 로컬 LLM 지원
Claude Code v2.x는 `ANTHROPIC_BASE_URL` 환경변수로 엔드포인트 변경 가능.
로컬 서버가 Anthropic 호환 API를 제공하면 `claude --model <모델명>`으로 직접 연결됨.

## 하이브리드 시스템 아키텍처

```
┌──────────────────────────────────────────────┐
│              Hermes Agent (총지휘관)          │
│  - 작업 분석 → Cloud or Local 판단           │
│  - delegate_task()로 Claude Code 호출        │
│  - 결과 검증 및 피드백                        │
└──────────┬───────────────────────┬───────────┘
           │                       │
     ┌─────▼─────┐          ┌─────▼─────┐
     │ 🌐 Cloud  │          │ 💻 Local  │
     │ Claude 3.7│          │ Hermes 8B │
     │ (API)     │          │ (로컬 GPU)│
     └───────────┘          └───────────┘
```

## 환경 구축 3단계 (Windows WSL 기준)

### 1단계: 로컬 LLM 서버 준비
#### Ollama (심플)
```bash
# WSL Ubuntu
curl -fsSL https://ollama.com/install.sh | sh
ollama pull hermes3:8b
ollama serve  # http://localhost:11434
```

#### LM Studio (권장 — Tool Calling 안정적)
- Windows에서 LM Studio 설치: https://lmstudio.ai
- Hermes-3 8B 또는 Nous-Hermes-2 GGUF 다운로드
- 로컬 서버 실행: `http://localhost:1234` (OpenAI 호환 엔드포인트)
- **Anthropic 호환 모드** 지원 확인 (설정 > API 서버 > Anthropic API 호환)

### 2단계: PowerShell 프로필 등록
Windows PowerShell에서 `notepad $PROFILE` 후 아래 내용 추가:

```powershell
# --- Claude Code 하이브리드 스위처 ---

function Start-ClaudeCloud {
    Remove-Item Env:\ANTHROPIC_BASE_URL -ErrorAction SilentlyContinue
    Remove-Item Env:\ANTHROPIC_AUTH_TOKEN -ErrorAction SilentlyContinue
    Write-Host "🌐 Cloud mode: Claude API" -ForegroundColor Cyan
    claude
}

function Start-ClaudeLocal {
    $env:ANTHROPIC_BASE_URL = "http://localhost:11434"
    $env:ANTHROPIC_AUTH_TOKEN = "local-hermes-token"
    Write-Host "💻 Local mode: Hermes LLM" -ForegroundColor Green
    claude --model hermes3:8b
}

Set-Alias -Name cc-cloud -Value Start-ClaudeCloud
Set-Alias -Name cc-local -Value Start-ClaudeLocal
```

프로필 새로고침: `. $PROFILE`

### 3단계: WSL bash 별칭
`~/.bashrc`에 추가:

```bash
# Claude Code Hybrid Switcher (WSL)
alias cc-cloud='unset ANTHROPIC_BASE_URL; unset ANTHROPIC_AUTH_TOKEN; echo "🌐 Cloud mode"; claude'
alias cc-local='export ANTHROPIC_BASE_URL="http://host.docker.internal:11434"; export ANTHROPIC_AUTH_TOKEN="local-token"; echo "💻 Local mode"; claude --model hermes3:8b'
```

**WSL→Windows 주의:** WSL에서 Windows의 LM Studio/Ollama 접속 시 `localhost`가 아닌 `host.docker.internal` 또는 Windows IP 사용.

## Hermes → Claude Code 위임 패턴

Hermes가 Claude Code를 호출하는 방식 (Hermes가 총지휘관):

### 패턴 1: Print Mode (단순 작업) — 권장
```bash
# Hermes가 작업 분석 후 Claude Code에 위임
claude -p 'src/api/ 디렉토리의 모든 API 호출에 에러 핸들링을 추가해줘' \
  --allowedTools 'Read,Edit,Write' \
  --max-turns 10
```

### 패턴 2: Interactive via tmux (복잡/반복 작업)
```bash
tmux new-session -d -s cc-work -x 140 -y 40
tmux send-keys -t cc-work 'cd /project && claude' Enter
sleep 5 && tmux send-keys -t cc-work Enter  # trust dialog
sleep 2 && tmux send-keys -t cc-work '전체 인증 모듈을 JWT로 마이그레이션해줘' Enter
# 모니터링
sleep 15 && tmux capture-pane -t cc-work -p -S -50
```

### 패턴 3: Hermes의 delegate_task()로 Claude Code ACP 실행
```python
# Hermes execute_code() 내부
from hermes_tools import terminal
# Claude Code를 ACP(Agent Communication Protocol)로 호출
result = terminal(
    command="claude --acp --stdio -p 'Fix the bug in auth.py'",
    workdir="/project",
    timeout=120
)
```

## 상황별 사용 가이드

### 시나리오 A: 복잡한 아키텍처 변경 (→ Cloud)
```
작업: "전체 프로젝트에서 인증 로직을 JWT 방식으로 마이그레이션"
명령: cc-cloud
모델: Claude 3.7 Sonnet
이유: 큰 컨텍스트 + 정교한 추론 + 다중 파일 수정
```

### 시나리오 B: 단순 버그 수정 (→ Local)
```
작업: "index.html에서 버튼 클릭 이벤트가 안 먹혀. 수정해줘"
명령: cc-local
모델: Hermes-3 8B
이유: 단순 수정, 외부 유출 방지, 토큰 비용 없음
```

### 시나리오 C: 단위 테스트 작성 (→ Local)
```
작업: "새로 만든 calculateShipping() 함수 테스트 코드 작성"
명령: cc-local
모델: Hermes-3 8B
이유: 반복적 패턴 작업, 로컬로 충분
```

### 시나리오 D: NDA 코드 / 보안敏感 코드 (→ Local)
```
작업: "config에 API 키 암호화 로직 추가"
명령: cc-local --dangerously-skip-permissions
모델: Hermes-3 8B
이유: 코드가 외부 서버로 전송되지 않음
```

### 시나리오 E: 오프라인 / 인터넷 불안정 (→ Local)
```
작업: "비행기 안에서 코드 리팩토링"
명령: cc-local
모델: Hermes-3 8B
이유: 인터넷 불필요, 무제한 사용
```

## 주의사항 및 팁

### 로컬 모델 컨텍스트 길이
- Claude Code가 전송하는 프롬프트+파일 정보가 큼
- **로컬 LLM 서버의 Context Length를 최소 32K, 권장 64K로 설정**
- LM Studio: 설정 > Context Length 65536
- Ollama: `ollama run hermes3:8b --num-ctx 65536`

### Tool Calling 성능
- Hermes 계열은 Tool Calling에 강함
- 그래도 Claude 3.7 Sonnet 대비 Tool Calling 정확도는 낮음
- 로컬 모드에서는 `--allowedTools Read,Edit`로 제한하는 것이 안정적

### ACP (Agent Communication Protocol)
- Claude Code v2.x는 ACP 지원
- Hermes가 Claude Code를 `--acp --stdio`로 서브프로세스 실행 가능
- `delegate_task(acp_command='claude', ...)`로 Hermes 내에서 직접 호출

## 관련 문서
- [[../Agents/Hermes/역할과-책임]] — Hermes 총지휘관 역할
- [[../TechStack/WSL-문제해결-가이드]] — WSL 환경 이슈
- [[../Company/직원용-코딩-아키텍처-가이드]] — 코딩 규칙
