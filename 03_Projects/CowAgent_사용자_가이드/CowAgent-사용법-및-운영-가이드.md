# CowAgent 사용법 및 운영 가이드

> **버전**: v2.0.7  
> **실행 환경**: WSL2 (Ubuntu 22.04) + Python 3.11  
> **모델**: DeepSeek Chat (deepseek-chat)  
> **최종 업데이트**: 2026-05-04

---

## 목차

1. [개요](#1-개요)
2. [시스템 아키텍처](#2-시스템-아키텍처)
3. [Web 콘솔 접속 및 사용법](#3-web-콘솔-접속-및-사용법)
4. [Cow CLI 명령어](#4-cow-cli-명령어)
5. [채팅 명령어 목록](#5-채팅-명령어-목록)
6. [에이전트 모드 사용법](#6-에이전트-모드-사용법)
7. [WeChat 연결법](#7-wechat-연결법)
8. [Skill Hub 사용법](#8-skill-hub-사용법)
9. [지식베이스 사용법](#9-지식베이스-사용법)
10. [설정 가이드](#10-설정-가이드)
11. [문제해결](#11-문제해결)
12. [부록: config.json 전체 옵션](#12-부록-configjson-전체-옵션)

---

## 1. 개요

**CowAgent**는 Steven Lee의 AI 비서 시스템입니다. 한국어로 대화하며, 친근하고 전문적인 어조로 응답합니다. 복잡한 작업은 계획을 세워 단계적으로 실행합니다.

### 주요 기능

- **Web 콘솔**: 브라우저 기반 채팅 인터페이스 (http://localhost:9899)
- **WeChat 연동**: 위챗 QR 코드 로그인을 통한 모바일 채팅
- **Agent 모드**: 복잡한 작업을 계획하고 단계적으로 실행
- **Skill 시스템**: 기능 확장을 위한 스킬 설치 및 관리
- **지식베이스**: 문서/링크를 통한 지식 축적 및 검색
- **Thinking 모드**: 내부 사고 과정 표시
- **파일 조작**: 파일 읽기, 쓰기, 편집, bash 명령어 실행
- **스케줄러**: 예약 작업 및 알림 설정

---

## 2. 시스템 아키텍처

```
┌─────────────────────────────────────────────────┐
│                 CowAgent v2.0.7                 │
├─────────────────────────────────────────────────┤
│  ┌───────────┐  ┌──────────┐  ┌──────────────┐ │
│  │ Web       │  │ WeChat   │  │ Terminal     │ │
│  │ Channel   │  │ Channel  │  │ Channel      │ │
│  └─────┬─────┘  └────┬─────┘  └──────┬───────┘ │
│        │              │               │          │
│  ┌─────┴──────────────┴───────────────┴───────┐ │
│  │           Bridge Layer (Router)            │ │
│  └─────────────────┬─────────────────────────┘ │
│                    │                             │
│  ┌─────────────────┴─────────────────────────┐ │
│  │           DeepSeek Chat Model              │ │
│  │           (deepseek-chat)                  │ │
│  └─────────────────┬─────────────────────────┘ │
│                    │                             │
│  ┌─────────────────┴─────────────────────────┐ │
│  │     Agent Engine (agent=true)              │ │
│  │     - Thinking Mode (enable_thinking=true) │ │
│  │     - Skill Execution                      │ │
│  │     - Knowledge Base (knowledge=true)      │ │
│  │     - Workspace: ~/cow_workspace           │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### 현재 실행 상태 (2026-05-04 기준)

| 항목 | 상태 |
|------|------|
| **프로세스** | tmux 세션 `cowagent`에서 실행 중 |
| **Web 콘솔** | http://127.0.0.1:9899 (200 OK) |
| **WeChat** | QR 코드 로그인 대기 중 (미연결) |
| **모델** | DeepSeek Chat (deepseek-chat) |
| **모드** | Agent 모드 (에이전트) |
| **Thinking** | 활성화 |
| **지식베이스** | 활성화 (현재 문서 없음) |
| **스킬** | 8개 내장 스킬 활성화 |

---

## 3. Web 콘솔 접속 및 사용법

### 접속 방법

1. 브라우저에서 `http://127.0.0.1:9899/chat` 또는 `http://localhost:9899/chat` 접속
2. 비밀번호 입력: `hermes_cow_2026`
3. 로그인 버튼 클릭

> ⚠️ **주의**: WSL 외부에서 접속하려면 포트 포워딩 또는 방화벽 설정이 필요합니다.

### Web 콘솔 UI 구성

#### 왼쪽 사이드바 메뉴

| 메뉴 | 기능 | 설명 |
|------|------|------|
| **对话 (대화)** | 채팅 | 메인 채팅 인터페이스 |
| **配置 (설정)** | 설정 | 모델, API 키, Agent, 보안 설정 |
| **技能 (스킬)** | 스킬 | 내장/설치된 스킬 관리 |
| **记忆 (기억)** | 메모리 | 대화 맥락 및 세션 관리 |
| **知识 (지식)** | 지식 | 지식베이스 문서 관리 |
| **通道 (채널)** | 채널 | WeChat 등 채널 연결 관리 |
| **定时 (예약)** | 스케줄 | 예약 작업 관리 |
| **监控 (모니터링)** | 모니터링 | 시스템 상태 모니터링 |
| **日志 (로그)** | 로그 | 시스템 로그 확인 |

#### 메인 채팅 영역

- **상단**: CowAgent 로고 + 설명 (`질문 답변, 컴퓨터 관리, 기술 창조/실행 등`)
- **기능 카드 (6개)**:
  - 🗂️ **系统管理**: 워크스페이스 파일 확인
  - ⏰ **定时任务**: 1분 후 서버 점검 알림 등
  - 💡 **编程助手**: AI 정보 검색 및 시각화 웹 보고서 생성
  - 📖 **知识库**: 지식베이스 문서 확인
  - 🎮 **技能系统**: 모든 지원 도구 및 스킬 조회
  - 💻 **指令中心**: 전체 명령어 조회
- **하단 입력창**: 메시지 입력, `/` 로 명령어 시작
- **버튼**: `+ 新建对话`, `清除上下文`, `上传附件`

#### 상단 바

- **언어 선택**: 中文 (중국어) / 기타 언어 지원
- **테마 전환**: 다크모드/라이트모드
- **기타 링크**: 문서, 홈, GitHub

### 상세 페이지 설명

#### 설정 페이지 (管理 > 配置)

- **模型配置**: 모델 공급자(Dropdown), 모델 선택(Dropdown), API Key, API Base URL
- **Agent 配置**: Max Context Tokens, Max Context Turns, Max Steps
- **安全设置**: 웹 비밀번호 설정
- 각 섹션별 `保存` 버튼으로 설정 저장

#### 스킬 페이지 (管理 > 技能)

현재 8개 내장 스킬이 활성화되어 있습니다:

| 스킬 | 설명 |
|------|------|
| **read** | 파일 내용 읽기 (텍스트/PDF, 최대 2000줄/50KB) |
| **write** | 파일 내용 쓰기 (새 파일 생성 또는 덮어쓰기) |
| **edit** | 파일 내용 편집 (특정 텍스트 찾아 바꾸기) |
| **bash** | bash 명령어 실행 (stdout/stderr, 2000줄 제한) |
| **ls** | 디렉토리 내용 목록 조회 |
| **send** | 로컬 파일을 사용자에게 전송 |
| **env_config** | API 키 및 스킬 설정 관리 |
| **scheduler** | 예약 작업 생성 및 관리 |

- 각 스킬은 토글 스위치로 활성/비활성 전환 가능
- `探索技能广场` 링크를 통해 Skill Hub 탐색 가능

#### 지식 페이지 (管理 > 知识)

- 현재 지식베이스는 비어 있음 (`暂无知识页面`)
- **추가 방법**: 대화 중 문서, 링크, 주제를 Agent에 전송하면 자동 정리
- `文档` (문서) 및 `图谱` (그래프) 보기 지원
- `开始对话` 버튼으로 대화 시작

#### 채널 페이지 (管理 > 通道)

- **WeChat**: QR 코드 로그인 대기 중 (미연결)
- `接入通道` 버튼으로 새 채널 추가 가능
- `断开` 버튼으로 연결 해제

---

## 4. Cow CLI 명령어

CowAgent는 `cow` CLI 명령어로 관리할 수 있습니다.

### 기본 사용법

```bash
cow [COMMAND] [OPTIONS]
```

### 명령어 목록

| 명령어 | 설명 | 사용 예시 |
|--------|------|-----------|
| `cow help` | 도움말 표시 | `cow help` |
| `cow version` | 버전 확인 | `cow version` → `cow 2.0.7` |
| `cow start` | CowAgent 시작 | `cow start` (데몬 모드) |
| `cow start --foreground` | 포그라운드로 시작 | `cow start -f` |
| `cow stop` | CowAgent 중지 | `cow stop` |
| `cow restart` | CowAgent 재시작 | `cow restart` |
| `cow status` | 실행 상태 확인 | `cow status` |
| `cow logs` | 로그 확인 (최근 50줄) | `cow logs` |
| `cow logs --follow` | 로그 실시간 모니터링 | `cow logs -f` |
| `cow logs --lines 200` | 로그 200줄 출력 | `cow logs -n 200` |
| `cow update` | 업데이트 후 재시작 | `cow update` |
| `cow skill list` | 설치된 스킬 목록 | `cow skill list` |
| `cow skill install <name>` | 스킬 설치 | `cow skill install web-search` |
| `cow knowledge` | 지식베이스 상태 확인 | `cow knowledge` |
| `cow knowledge list` | 지식베이스 파일 트리 출력 | `cow knowledge list` |
| `cow install-browser` | Playwright + Chromium 설치 | `cow install-browser` |

### status 명령어 출력 예시

```
● CowAgent is running (PID: 12345)
  版本: v2.0.7
  通道: web, weixin
  模型: deepseek-chat
  模式: Agent
```

### logs 명령어 옵션

- `-f, --follow`: 실시간 로그 팔로우 (Ctrl+C로 종료)
- `-n, --lines`: 출력할 라인 수 (기본값: 50)

---

## 5. 채팅 명령어 목록

채팅창에서 `#` 접두어로 명령어를 실행할 수 있습니다.

### 일반 명령어

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `#help` | `#帮助` | 도움말 표시 |
| `#help <플러그인명>` | `#帮助 <플러그인명>` | 특정 플러그인 상세 도움말 |
| `#auth <口令>` | `#认证 <口令>` | 관리자 인증 |
| `#model` | `#模型` | 현재 모델 확인 |
| `#model <모델명>` | `#模型 <모델명>` | 모델 변경 |
| `#id` | `#用户` | 사용자 ID 확인 |
| `#reset` | `#重置会话` | 현재 세션 초기화 |

### 관리자 명령어 (인증 필요)

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `#resume` | `#恢复服务` | 서비스 재개 |
| `#stop` | `#暂停服务` | 서비스 일시 중지 |
| `#reconf` | `#重载配置` | 설정 다시 로드 |
| `#resetall` | `#重置所有会话` | 모든 세션 초기화 |
| `#scanp` | `#扫描插件` | 새 플러그인 검색 |
| `#plist` | `#插件` | 플러그인 목록 출력 |
| `#setpri <플러그인> <우선순위>` | `#设置插件优先级` | 플러그인 우선순위 설정 |
| `#reloadp <플러그인>` | `#重载插件` | 특정 플러그인 리로드 |
| `#enablep <플러그인>` | `#启用插件` | 플러그인 활성화 |
| `#disablep <플러그인>` | `#禁用插件` | 플러그인 비활성화 |
| `#installp <주소/이름>` | `#安装插件` | 플러그인 설치 |
| `#uninstallp <플러그인>` | `#卸载插件` | 플러그인 제거 |
| `#updatep <플러그인>` | `#更新插件` | 플러그인 업데이트 |
| `#debug` | `#调试模式` | 디버그 모드 전환 |

### 관리자 인증 방법

1. `#auth <비밀번호>` 명령어로 인증
2. 초기 임시 비밀번호는 서버 로그에서 확인 가능 (`[Godcmd] 因未设置口令，本次的临时口令为XXXX。`)
3. `plugins/godcmd/config.json`에서 영구 비밀번호 설정 가능

---

## 6. 에이전트 모드 사용법

CowAgent는 `agent: true`로 설정되어 에이전트 모드로 동작합니다.

### 주요 특징

- **자동 계획 수립**: 복잡한 요청을 단계별로 계획하여 실행
- **도구 사용**: 파일 읽기/쓰기/편집, bash 실행, 스킬 활용
- **Thinking 표시**: 내부 사고 과정을 투명하게 표시 (`enable_thinking: true`)
- **최대 30단계 실행**: 복잡한 작업도 체계적으로 처리
- **컨텍스트 관리**: 최대 50,000 토큰, 30턴까지 맥락 유지

### 워크스페이스

에이전트 작업 공간: `~/cow_workspace`

파일 작업은 기본적으로 이 디렉토리 내에서 수행됩니다. `系统管理` 카드를 클릭하면 워크스페이스 파일을 확인할 수 있습니다.

### 사용 예시

```
# 일반 질문
"오늘 날씨 어때?"

# 복잡한 작업
"GitHub에서 프로젝트 클론해서 분석하고 요약 리포트 만들어줘"

# 파일 작업
"workspace에 있는 log 파일 분석해줘"

# 스케줄링
"1시간 후에 서버 상태 확인해줘"

# 스킬 활용
"web-search 스킬로 최신 AI 뉴스 검색해줘"
```

---

## 7. WeChat 연결법

### 연결 방법

1. Web 콘솔에서 **通道 (채널)** 메뉴로 이동
2. **微信扫码登录** 버튼 클릭
3. WeChat 앱으로 QR 코드 스캔
4. 로그인 완료

### QR 코드 로그인 과정

- tmux 세션 로그에서 QR 코드 URL 확인 가능
- QR 코드는 약 2분 후 만료
- 로그인 성공 후 Web + WeChat 양방향 통신 가능

### 주의사항

- WeChat 채널 연결 전까지는 Web 콘솔로만 사용 가능
- QR 코드가 만료되면 다시 생성됨
- WeChat 개인 계정으로 로그인 필요

---

## 8. Skill Hub 사용법

### 기본 제공 스킬 (Built-in)

CowAgent는 8개의 내장 스킬을 제공합니다 (상세 목록은 [Web 콘솔 UI 구성](#web-콘솔-ui-구성)의 스킬 페이지 참조).

### 스킬 설치 (CLI)

```bash
cow skill install <name>
```

스킬 설치 소스:
- **CowHub**: `cow skill install web-search`
- **GitHub 저장소**: `cow skill install https://github.com/user/repo`
- **로컬 디렉토리**: `cow skill install /path/to/skill`
- **직접 URL**: SKILL.md 파일의 직접 URL

### 스킬 관리 (CLI)

```bash
# 설치된 스킬 목록
cow skill list

# 스킬 설치
cow skill install <name 또는 URL 또는 경로>
```

### 스킬 관리 (Web 콘솔)

- **技能 (스킬)** 페이지에서 각 스킬 활성/비활성화
- `探索技能广场` 링크로 Skill Hub 탐색

### 스킬 구조

설치된 스킬은 다음 구조를 따릅니다:
```
skills/
└── <skill-name>/
    ├── SKILL.md          # 스킬 정의 파일 (필수)
    ├── requirements.txt  # Python 의존성 (선택)
    └── ...               # 기타 파일
```

---

## 9. 지식베이스 사용법

### 현재 상태

- 지식베이스: **활성화** (`knowledge: true`)
- 현재 문서: **없음** (비어 있음)

### 문서 추가 방법

1. **대화를 통한 추가**: Agent와 대화 중 문서, 링크, 주제 전송
   - 예: "이 링크를 지식베이스에 저장해줘: https://..."
   - 예: "이 PDF 문서를 기억해줘"
2. Agent가 자동으로 문서를 정리하여 지식베이스에 저장

### 지식베이스 확인

- Web 콘솔: **知识 (지식)** 메뉴에서 문서/그래프 보기
- CLI: `cow knowledge` (통계) / `cow knowledge list` (파일 트리)

### 저장 위치

`~/cow_workspace/knowledge/` 디렉토리에 카테고리별로 저장됩니다.

---

## 10. 설정 가이드

### config.json 주요 설정

```json
{
  "channel_type": "web,weixin",
  "model": "deepseek-chat",
  "deepseek_api_key": "sk-...",
  "deepseek_api_base": "https://api.deepseek.com/v1",
  "web_password": "hermes_cow_2026",
  "agent": true,
  "agent_workspace": "~/cow_workspace",
  "agent_max_context_tokens": 50000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 30,
  "enable_thinking": true,
  "knowledge": true,
  "character_desc": "..."
}
```

### 변경 방법

1. Web 콘솔 **配置 (설정)** 페이지에서 UI로 변경
2. `config.json` 직접 편집 후 `cow restart` 또는 채팅 `#reconf`

### Character Description (캐릭터 설명)

현재 설정된 캐릭터 설명:
> "당신은 Steven Lee의 AI 비서 'CowAgent'입니다. 한국어로 대화하며, 친근하고 전문적인 어조로 응답합니다. 복잡한 작업은 계획을 세워 단계적으로 실행합니다."

---

## 11. 문제해결

### 웹 콘솔 접속 문제

| 문제 | 해결 방법 |
|------|-----------|
| 비밀번호 오류 | `config.json`의 `web_password` 확인 |
| 404 에러 | 올바른 URL 확인: `http://localhost:9899/chat` |
| 연결 거부 | CowAgent 실행 상태 확인: `cow status` |
| 포트 충돌 | `9899` 포트 사용 중인지 확인: `lsof -i :9899` |

### 서비스 문제

| 문제 | 해결 방법 |
|------|-----------|
| 서비스 중지 | `cow start`로 재시작 |
| 설정 변경 안됨 | `cow restart` 또는 채팅 `#reconf` |
| 세션 오류 | 채팅 `#reset` 또는 관리자 `#resetall` |
| 디스크 부족 | 로그 파일(port: nohup.out) 정리 |

### WeChat 연결 문제

| 문제 | 해결 방법 |
|------|-----------|
| QR 코드 안 보임 | tmux 세션 로그 확인 |
| QR 코드 만료 | 새 QR 코드 자동 생성 대기 |
| 로그인 실패 | WeChat 계정 확인 후 재시도 |

### API/모델 문제

| 문제 | 해결 방법 |
|------|-----------|
| API Key 오류 | `config.json` DeepSeek API 키 확인 |
| 모델 응답 없음 | `#model`로 현재 모델 확인, DeepSeek 상태 확인 |
| Rate Limit | API 사용량 확인, 잠시 후 재시도 |

### tmux 세션 관련

```bash
# 세션 목록 확인
tmux list-sessions

# 세션 접속
tmux attach -t cowagent

# 세션 분리 (detach)
Ctrl+B, D

# 세션 종료
tmux kill-session -t cowagent
```

### 로그 확인

```bash
# CLI 로그
cow logs -n 200

# 실시간 로그
cow logs --follow

# tmux 로그 캡처
tmux capture-pane -t cowagent -p -S -200

# 로그 파일 직접 보기
tail -f ~/CowAgent/nohup.out
```

### 기타 문제

- **Playwright/브라우저 오류**: `cow install-browser` 실행
- **ffmpeg 경고**: 시스템에 ffmpeg 설치 (`sudo apt install ffmpeg`)
- **agentmesh 모듈 오류**: 선택적 종속성, 무시 가능

---

## 12. 부록: config.json 전체 옵션

```json
{
  "channel_type": "web,weixin",               // 활성 채널 (쉼표로 구분)
  "model": "deepseek-chat",                   // 사용 모델
  "deepseek_api_key": "sk-...",               // DeepSeek API 키
  "deepseek_api_base": "https://api.deepseek.com/v1",  // API 베이스 URL
  "open_ai_api_key": "",                      // OpenAI API 키 (선택)
  "open_ai_api_base": "https://api.openai.com/v1",
  "gemini_api_key": "",                       // Gemini API 키 (선택)
  "gemini_api_base": "https://generativelanguage.googleapis.com",
  "claude_api_key": "",                       // Claude API 키 (선택)
  "claude_api_base": "https://api.anthropic.com/v1",
  "zhipu_ai_api_key": "",                     // 智谱AI API 키
  "minimax_api_key": "",                      // MiniMax API 키
  "moonshot_api_key": "",                     // Moonshot API 키
  "ark_api_key": "",                          // Ark API 키
  "dashscope_api_key": "",                    // DashScope API 키
  "voice_to_text": "openai",                  // 음성→텍스트 엔진
  "text_to_voice": "openai",                  // 텍스트→음성 엔진
  "voice_reply_voice": false,                 // 음성 응답 사용
  "speech_recognition": true,                 // 음성 인식 활성화
  "group_speech_recognition": false,          // 그룹 음성 인식
  "use_linkai": false,                        // LinkAI 사용
  "linkai_api_key": "",
  "linkai_app_code": "",
  "wecom_bot_id": "",                         // 企微 봇 ID
  "wecom_bot_secret": "",
  "web_password": "hermes_cow_2026",          // 웹 콘솔 비밀번호
  "agent": true,                              // Agent 모드
  "agent_workspace": "~/cow_workspace",       // 작업 디렉토리
  "agent_max_context_tokens": 50000,          // 최대 컨텍스트 토큰
  "agent_max_context_turns": 30,              // 최대 컨텍스트 턴
  "agent_max_steps": 30,                      // 최대 실행 단계
  "enable_thinking": true,                    // Thinking 표시
  "knowledge": true,                          // 지식베이스
  "proxy": "",                                // 프록시 설정
  "character_desc": "..."                     // 캐릭터 설명
}
```

> 💡 **팁**: 민감한 정보(API 키, 비밀번호)는 안전하게 보관하세요. config.json이 노출되지 않도록 주의하십시오.

---

*이 문서는 CowAgent v2.0.7 기준으로 작성되었습니다.*
