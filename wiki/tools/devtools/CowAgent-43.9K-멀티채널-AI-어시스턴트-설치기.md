---
source: github
collected: 2026-05-04 15:43
category: Tools/DevTools
stars: 43,900
language: Python
---

# CowAgent — 43.9K ⭐ 멀티채널 AI 어시스턴트 설치기

> **zhayujie/CowAgent** — 오픈소스 멀티채널 AI 어시스턴트. WeChat/Feishu/DingTalk/Telegram/Web 등 10+ 채널 연동, Agent 모드, 웹 검색, 브라우저 제어, 스케줄러, 메모리 시스템 탑재.

⭐ **43,900 stars**  
🔤 **Python**  
🔗 **[Original](https://github.com/zhayujie/CowAgent)**  

---

## 설치 개요

- **설치 위치**: `/home/steven/CowAgent/`
- **설치일**: 2026-05-04
- **Python**: venv (`/home/steven/CowAgent/venv/`)
- **실행 방식**: `run_secure.sh` (localhost only + .env 분리)
- **Web 콘솔**: `http://127.0.0.1:9899` (password: 설정됨)

## 설치 과정

### 1. Git Clone
```bash
git clone https://github.com/zhayujie/CowAgent.git
cd CowAgent
# 43.9K ⭐, 빠르게 성장 중인 프로젝트
```

### 2. Python 가상환경 + 의존성 설치
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# 모든 의존성 정상 설치 완료
```

### 3. Cow CLI 설치
```bash
pip install -e .
# cow start/stop/status/skill/knowledge/install-browser 명령어 사용 가능
```

### 4. Playwright + Chromium 설치
```bash
cow install-browser
# playwright install chromium 실행 — 브라우저 자동화 도구 활성화
```

### 5. 설정 파일 구성
```json
{
  "channel_type": "weixin,web,dingtalk,feishu",
  "model": "deepseek-chat",
  "deepseek_api_key": "sk-...dc6a",
  "agent": true,
  "web_password": "hermes_cow_2026",
  "agent_max_context_tokens": 50000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 30,
  "enable_thinking": true,
  "knowledge": true,
  "character_desc": "한국어 AI 비서 (Steven Lee)"
}
```

### 6. 보안 실행 스크립트 생성
`run_secure.sh`:
- `127.0.0.1` 바인딩 (외부 접근 차단)
- `.env` 파일 분리 관리
- Web 콘솔 password 필수 설정

### 7. 실행 테스트 완료
- WeChat QR코드 정상 표시
- Web 콘솔 `127.0.0.1:9899` 정상 응답
- Agent 모드 활성화 확인

---

## 채널별 상태

| 채널 | 상태 | 비고 |
|------|------|------|
| **WeChat (weixin)** | ✅ 대기 | QR 로그인 필요 (개인계정) |
| **Web Console** | ✅ 활성 | http://127.0.0.1:9899 |
| **DingTalk (dingtalk)** | 🔌 미설정 | `dingtalk_client_id/secret` 필요 |
| **Feishu (feishu)** | 🔌 미설정 | `feishu_app_id/secret` 필요 |
| **Telegram** | 🔌 미연동 | channel.py에 tg 봇 코드 존재 |
| **Terminal** | ✅ 지원 | CLI 직접 대화 가능 |

---

## 지원 모델 (15개)

openai, deepseek, claudeapi, gemini, zhipuai, minimax, dashscope, moonshot, ark, baidu, xunfei, volc, cosyvoice, azure, ollama

---

## 핵심 아키텍처

### Memory System (`agent/memory/`)
```
agent/memory/
├── embedding.py      # OpenAIEmbeddingProvider (text-embedding-3-small/large)
├── storage.py        # SQLite + FTS5 + 벡터 하이브리드 검색 (589줄)
├── manager.py        # MemoryManager — 하이브리드 검색 관리자 (543줄)
├── conversation_store.py  # SQLite 기반 대화 이력 저장 (950줄)
├── summarizer.py     # Daily Memory + Dream Distillation (703줄)
├── chunker.py        # 텍스트 청킹
├── config.py         # 메모리 설정
└── service.py        # 메모리 서비스 레이어
```

### Tools System (`agent/tools/`)
```
agent/tools/
├── read.py           # 파일 읽기
├── write.py          # 파일 쓰기
├── edit.py           # 파일 편집
├── bash.py           # 셸 명령어 실행
├── ls.py             # 디렉토리 조회
├── send.py           # 메시지 전송
├── memory/           # 메모리 검색 도구
├── web_search.py     # 웹 검색 (Bocha/LinkAI)
├── web_fetch.py      # 웹 페이지/문서 다운로드
├── browser/          # Playwright 브라우저 제어
├── vision.py         # 이미지 분석 (7개 모델 fallback)
├── scheduler/        # cron/interval/once 태스크 스케줄러
└── env_config.py     # API 키 관리
```

### Channels (`channel/`)
weixin, wechatmp, wechatcom, wecom_bot, feishu, dingtalk, qq, telegram, web, terminal

---

## 보안 주의사항

### ⚠️ RCE 취약점
> **`web_password`가 비어있으면 `0.0.0.0:9899`에 인증 없이 누구나 접근 가능**  
> → Web 콘솔을 통해 원격 코드 실행(RCE) 가능  
> → **해결**: config.json에 `web_password` 설정 완료, `run_secure.sh`로 localhost 바인딩

### 권장 보안 조치
1. **web_password 필수 설정** (빈 문자열 금지)
2. **localhost 바인딩** (`127.0.0.1` only)
3. **`.env` 파일 분리** (API 키는 config.json 외부 관리)
4. **정기 업데이트** (43.9K ⭐ 프로젝트, 취약점 패치 활발)

---

## 실행 방법

```bash
# 일반 실행
cd /home/steven/CowAgent
source venv/bin/activate
./run_secure.sh

# 상태 확인
cow status

# 서비스 중지
cow stop
```

---

## Hermes 적용 분석

CowAgent의 핵심 기술 중 Hermes에 적용 가능한 3가지:

### 1. 하이브리드 메모리 검색 (SQLite + FTS5 + 벡터 임베딩)
- **storage.py**: SQLite FTS5 전문 검색 + 벡터 코사인 유사도 하이브리드
- **manager.py**: 가중치 기반 병합 (`vector_weight * vector_score + keyword_weight * keyword_score`)
- **적용**: Hermes `layer_memory.py`에 FTS5 키워드 검색 계층 추가, 임베딩 벡터 검색과 병합

### 2. Dream Distillation (꿈 증류) 메모리 압축
- **summarizer.py**: LLM으로 대화 요약 → Daily Memory → 주기적 Deep Dream 증류
- **구조**: `MEMORY.md` (장기 기억) + `memory/YYYY-MM-DD.md` (일일 기억) + `dreams/` (꿈 일기)
- **적용**: Hermes도 유사한 계층형 메모리 압축 시스템 구축 가능

### 3. 멀티모델 Fallback Chain
- **vision.py**: 7개 모델 우선순위 체인 (tool.vision.model → MainModel → OtherModels → OpenAI → LinkAI)
- **web_search.py**: Bocha → LinkAI 이중 백엔드
- **적용**: Hermes에서 여러 LLM/도구를 fallback 체인으로 연결

---

## 신규 도구 목록 (Hermes에 없는 기능)

| 도구 | 설명 | 우선순위 |
|------|------|---------|
| **browser** | Playwright 기반 웹 브라우징 (navigate/click/fill/screenshot) | ⭐⭐⭐ |
| **scheduler** | cron/interval/once 스케줄 태스크 (리마인더, 정기작업) | ⭐⭐⭐ |
| **web_search** | Bocha/LinkAI 웹 검색 (실시간 정보 조회) | ⭐⭐⭐ |
| **web_fetch** | URL → readable text (HTML/PDF/DOCX/XLSX/PPT) | ⭐⭐ |
| **vision** | 이미지 분석 (7개 모델 fallback 체인) | ⭐⭐ |
| **env_config** | API 키 안전 관리 (.env 파일, hot reload) | ⭐⭐ |
| **memory_search** | 하이브리드 메모리 검색 (벡터+키워드) | ⭐⭐ |

---

## Links
- 🔗 [GitHub Repository](https://github.com/zhayujie/CowAgent)
- 📂 설치 경로: `/home/steven/CowAgent/`
- 📂 설정 파일: `/home/steven/CowAgent/config.json`
- 📂 보안 스크립트: `/home/steven/CowAgent/run_secure.sh`

---

## 설치 일지

| 날짜 | 작업 | 상태 |
|------|------|------|
| 2026-05-04 | Git clone + venv + requirements | ✅ |
| 2026-05-04 | Cow CLI 설치 | ✅ |
| 2026-05-04 | config.json 설정 (채널/모델/agent/비밀번호) | ✅ |
| 2026-05-04 | Playwright + Chromium 설치 | ✅ |
| 2026-05-04 | run_secure.sh 생성 (localhost + .env 분리) | ✅ |
| 2026-05-04 | 실행 테스트 (WeChat QR + Web 콘솔) | ✅ |
| 2026-05-04 | **tmux 상시 구동** (세션명: cowagent) | ✅ |
| 2026-05-04 | **L6 벡터 임베딩 연동** (cow_embedding_provider.py) | ✅ |
| 2026-05-04 | **Vision Fallback Chain 분석** (10단계 provider 체인) | ✅ |

---

## 3차 실행 결과 (2026-05-04)

### STEP 1: CowAgent tmux 상시 구동
- tmux 세션명: `cowagent`
- 실행 명령: `bash run_secure.sh`
- Web 콘솔: **http://127.0.0.1:9899/chat** (200 OK)
- Health check: `/` → 303 redirect, `/chat` → 200 OK
- 로그: `/home/steven/CowAgent/run_live.log`

### STEP 2: 벡터 임베딩 연동
- **`/home/steven/.hermes/scripts/cow_embedding_provider.py`** 생성
  - OpenAI text-embedding-3-small REST API (urllib)
  - `.env` 4개 경로에서 OPENAI_API_KEY 자동 로드
  - `EMBEDDING_ENABLED=False` 시 graceful fallback
  - `embed_batch()` / `get_embedding()` 지원
- **`/home/steven/.hermes/scripts/layer_memory.py`** L6 업그레이드
  - `save_l6()` → 벡터 임베딩 자동 생성 (8K 토큰 제한)
  - `search()` → 3단계 하이브리드: FTS5 BM25 → LIKE CJK → Cosine similarity (0.7 가중치)

### STEP 3: Vision Fallback Chain 분석
- **`/home/steven/.hermes/scripts/cowagent_fallback_analysis.md`** 생성
- 10단계 provider 체인 상세 분석 완료 (Preferred → MainModel → Moonshot → Doubao → DashScope → Claude → Gemini → ZhipuAI → MiniMax → OpenAI → LinkAI)
- Hermes 하이브리드 모델 적용 3가지 방안 도출
- Models 디렉토리 15개 모델 + 60+ 모델명 매핑 완료
- 현재 환경: DeepSeek만 설정, vision fallback 전체 미작동 (OpenAI 외 7개 API 키 없음)

---

_Automatically collected by Hermes Tech Brain Sync_
