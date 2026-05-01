# Open WebUI ↔ Hermes Agent 연동 가이드

> **최종 업데이트:** 2026-04-29
> **적용 환경:** WSL2 Ubuntu + Windows 11
> **연동 상태:** ✅ 정상 작동 중

---

## 개요

**Open WebUI** (SvelteKit 기반, port 3000)를 **Hermes Gateway API Server** (port 8642, OpenAI 호환)에 연결하여 웹 브라우저에서 Hermes Agent와 채팅할 수 있도록 구성합니다.

```
[사용자 - 브라우저]
       ↓ (localhost:3000)
[Open WebUI]
       ↓ (OpenAI API 호출)
[Hermes Gateway API Server] ← port 8642, /v1/chat/completions
       ↓
[Hermes Agent (deepseek-chat)]
```

---

## 사전 준비 사항

### 1. Hermes Gateway API Server 동작 확인

Hermes Agent가 실행 중이면 Gateway API Server도 자동으로 함께 뜹니다. 아래 커맨드로 확인하세요:

```bash
# 헬스 체크
curl http://127.0.0.1:8642/health
# → {"status": "ok", "platform": "hermes-agent"}

# 모델 목록
curl http://127.0.0.1:8642/v1/models
# → {"object": "list", "data": [{"id": "hermes-agent", ...}]}

# 실제 채팅 API 테스트
curl -s http://127.0.0.1:8642/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"안녕"}]}'
```

### 2. Gateway 설정 확인

`~/.hermes/config.yaml`에서 `api_server` 섹션이 아래와 같이 설정되어 있어야 합니다:

```yaml
api_server:
  enabled: true
  key: ''                    # 비워두면 인증 없이 접근 가능
  cors_origins: '*'          # CORS 허용 (브라우저 접근 시 필수)
  extra:
    port: 8642
    host: 127.0.0.1
```

### 3. Open WebUI 설치 및 실행

Open WebUI는 Windows 또는 WSL 어디에 설치해도 무방합니다. 다만 아래 **⚠️ 중요: 실행 위치 확인** 항목을 꼭 읽어주세요.

**설치 방법 (Windows):**
```bash
# npm으로 설치
npm install -g open-webui

# 실행
open-webui start
# 또는
npx open-webui start
```

**설치 방법 (WSL 내부):**
```bash
npm install -g open-webui
open-webui start
```

---

## 연동 절차 (5단계)

### Step 1. Open WebUI 로그인

브라우저에서 `http://localhost:3000/auth/login` 접속 → 관리자 계정으로 로그인

> 기본 계정 정보는 Open WebUI 최초 실행 시 설정한 이메일/비밀번호를 사용합니다.

### Step 2. 관리자 설정 → Connections 이동

1. 우측 하단 사용자 프로필 아이콘 클릭 → **Admin Panel**
2. 좌측 네비게이션에서 **Settings** 클릭
3. 서브 네비게이션에서 **Connections** 클릭

### Step 3. Hermes Gateway External Connection 추가

**OpenAI API** 섹션에서:

1. **Manage OpenAI API Connections** 버튼 클릭 → 대화상자 오픈
2. **Add Connection** 다이얼로그에서 아래 입력:

| 필드 | 값 | 설명 |
|:-----|:---|:------|
| **URL** | `http://127.0.0.1:8642/v1` | Gateway API 주소 |
| **Auth** | `None` | Gateway는 기본 인증 불필요 |
| **API Key** | (빈칸) | |
| **Connection Type** | External (기본값) | |
| 기타 필드 | 기본값 유지 | |

3. **Verify Connection** 버튼 클릭 → ✅ 성공 메시지 확인
4. **Save** 버튼 클릭

> ⚠️ **Verify가 "Network Problem"으로 실패하면?** → 아래 **트러블슈팅** 참고

### Step 4. 모델 활성화

1. 좌측 네비게이션에서 **Models** 클릭
2. 모델 목록에서 `hermes-agent` 확인
3. 우측 토글 스위치가 ON(파란색)인지 확인 (OFF면 클릭하여 활성화)

> 함께 보이는 `gemma4:e2b` 등은 Ollama 로컬 모델입니다. 신경 쓰지 않아도 됩니다.

### Step 5. 채팅 테스트

1. 좌측 사이드바 상단 **New Chat** 버튼 클릭
2. 모델 선택기가 `hermes-agent`로 되어 있는지 확인
3. 메시지 입력 후 Enter 전송
4. Hermes Agent가 응답하는지 확인

---

## ⚠️ 중요: 실행 위치 확인

**이 부분이 연동의 핵심입니다.**

Open WebUI는 **브라우저(클라이언트 사이드 JavaScript)**에서 직접 API를 호출합니다. 즉, Open WebUI 서버가 API를 호출하는 게 아니라 **사용자의 브라우저**가 `http://127.0.0.1:8642`를 직접 호출합니다.

| Open WebUI 실행 위치 | API 접근 가능 여부 | 사용할 URL |
|:--------------------|:-----------------|:----------|
| **WSL 내부** (`ps aux`에 node 프로세스 보임) | ✅ 가능 | `http://127.0.0.1:8642/v1` |
| **Windows 호스트** (프로세스 목록에 없음) | ❌ 불가능 | WSL2 IP 필요 |
| **Docker 컨테이너** | ❌ 불가능 | `host.docker.internal` 필요 |

**판별 방법:**
```bash
# WSL에서 Open WebUI 프로세스 확인
ss -tlnp | grep 3000
# → users:(("node",pid=XXXX,...))  ← WSL에서 실행 중
# → 아무것도 안 나옴                ← Windows에서 실행 중
```

### Windows에서 Open WebUI 실행 시 대처법

WSL2의 IP를 확인하여 URL에 사용합니다:

```bash
# WSL2 IP 확인
ip addr show eth0 | grep inet
# → inet 172.31.80.137/20 ...
```

그리고 Open WebUI Connection의 URL을 `http://172.31.80.137:8642/v1`로 설정합니다.

> 단, WSL2 재부팅 시 IP가 변경될 수 있으므로 `.bashrc`에 IP 고정 설정을 권장합니다.

---

## 트러블슈팅

### 🔴 "Network Problem" — Verify Connection 실패

**원인:** 브라우저가 Gateway API에 네트워크 접근 불가

**점검 순서:**

1. **Gateway API가 살아있는지 확인**
   ```bash
   curl http://127.0.0.1:8642/health
   ```

2. **Open WebUI 실행 위치 확인**
   ```bash
   ss -tlnp | grep 3000
   ```

3. **CORS 설정 확인**
   ```yaml
   # ~/.hermes/config.yaml
   api_server:
     cors_origins: '*'   # ← 이 부분 확인
   ```

4. **Auth를 None으로 설정했는지 확인** — Bearer로 되어 있으면 실패할 수 있음

### 🔴 모델이 "PRIVATE"으로 표시됨

Admin → Settings → Models → `hermes-agent` 우측 토글 ON

### 🔴 404 Page — 채팅방 링크 접속 불가

해당 UUID의 채팅방이 존재하지 않습니다. 새 채팅을 만들면 새로운 UUID가 생성됩니다:
```
http://localhost:3000/c/새로운-uuid
```

### 🔴 응답이 안 오거나 다른 모델이 응답함

채팅 입력창 위 모델 선택기가 `hermes-agent`로 되어 있는지 확인하세요.

---

## 현재 연동 상태 (2026-04-29 기준)

| 항목 | 상태 | 비고 |
|:-----|:----:|:-----|
| Hermes Gateway (port 8642) | ✅ | PID 64547, Apr26~ 실행 중 |
| Open WebUI (port 3000) | ✅ | 로그인 계정: mirae0708@gmail.com |
| External Connection | ✅ | `http://127.0.0.1:8642/v1` |
| `hermes-agent` 모델 | ✅ | 활성화 완료 |
| 채팅 전송/수신 | ✅ | 정상 응답 확인 |
| 기존 채팅방 복원 | ✅ | URL 직접 접근 가능 |

---

## 참고 자료

- **Hermes Gateway API Server 문서:** `~/.hermes/config.yaml`의 `api_server` 섹션
- **Open WebUI 공식 문서:** https://docs.openwebui.com
- **연동 자동화 스킬:** `open-webui-hermes-integration` (Hermes Agent 내장)
