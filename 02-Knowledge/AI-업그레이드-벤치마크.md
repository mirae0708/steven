---
tags:
  - ai
  - github-resource
  - agent
  - llm
created: 2026-04-29
---

# 🤖 AI 기술 업그레이드 — GitHub 오픈소스 벤치마크

> 다른 사람들이 만들어놓은 AI 기능들을 분석해서 우리 Hermes/Jongdari 시스템에 적용/업그레이드 하기 위한 자료

---

## 🏆 TOP PICK — 우리에 직접 적용 가능

### 1. Mem0 (25k⭐) — AI 메모리 레이어
**링크:** https://github.com/mem0ai/mem0
**핵심:** LLM이 사용자 정보를 영구 기억하게 해주는 메모리 레이어
- **새로운 알고리즘 (2026.4)**: LoCoMo 71.4→**91.6**, LongMemEval 67.8→**93.4**
- 토큰 효율적 메모리 압축 (7K 토큰만으로 장기기억)
- **→ 우리 Hermes 메모리 시스템 업그레이드!** 현재 단순 문자열 저장 방식에서 Mem0 알고리즘 적용하면 10배 더 효율적

### 2. crewAI (30k+⭐) — 멀티에이전트 프레임워크
**링크:** https://github.com/crewAIInc/crewAI
**핵심:** LangChain 독립적인 초경량 멀티에이전트 프레임워크
- Crews: 자율 협업 에이전트 팀
- Flows: 이벤트 기반 엔터프라이즈 멀티에이전트 아키텍처
- **→ 우리 AI Council 3명 체계에 Flows 개념 도입!** 현재는 단순 다수결, Flows로 업그레이드하면 이벤트 기반 의사결정 가능

### 3. Dify (140k⭐) — LLM 앱 플랫폼
**링크:** https://github.com/langgenius/dify
**핵심:** AI 워크플로우 + RAG + 에이전트 + 모델 관리 올인원
- 비주얼 AI 워크플로우 디자이너
- RAG 파이프라인 (지식 검색)
- 10,434 커밋, 매우 활발한 개발
- **→ Hermes Gateway에 Dify RAG 연동 검토!** 우리 Wiki/지식을 RAG로 활용

### 4. AutoGen → MS Agent Framework (57.6k⭐)
**링크:** https://github.com/microsoft/autogen
**핵심:** MS의 멀티에이전트 AI 프레임워크
- **AutoGen은 유지보수 모드 전환** → MS Agent Framework 1.0이 후속
- A2A (Agent-to-Agent) + MCP 지원
- **→ MS Agent Framework 벤치마킹!** 엔터프라이즈 멀티에이전트 설계 참고

### 5. ElizaOS (20k+⭐) — 멀티에이전트 AI 프레임워크
**링크:** https://github.com/elizaos/eliza (구 ai16z/eliza)
**핵심:** 모든 LLM 지원하는 확장형 멀티에이전트 플랫폼
- Discord/Telegram/Farcaster 등 다양한 커넥터
- RAG 문서 수집 + 플러그인 시스템
- **→ 우리 Hermes와 구조가 비슷!** 플러그인 시스템 아키텍처 참고

---

## 🔧 인프라/로컬 LLM

### 6. Ollama (130k⭐) — 로컬 LLM 실행
**링크:** https://github.com/ollama/ollama
**핵심:** 로컬에서 LLM 한 줄 설치/실행
- `ollama run llama3` 이런 식
- **→ 이미 설치!** Hermes WebUI와 연동 중

### 7. llama.cpp (75k⭐) — C/C++ LLM 추론
**링크:** https://github.com/ggerganov/llama.cpp
**핵심:** 로컬 LLM 초고속 추론 엔진
- GGUF 포맷, 양자화 지원
- WebUI 내장, VS Code 연동
- **→ 로컬 모델 최적화에 사용 가능**

### 8. Open Interpreter (60k⭐) — 코드 실행 LLM
**링크:** https://github.com/OpenInterpreter/open-interpreter
**핵심:** LLM이 로컬 코드를 실행
- Python/JavaScript/Shell 실행
- **→ Hermes execute_code와 유사!** 아키텍처 참고

---

## 🧪 프롬프트/AI 최적화

### 9. Prompt Engineering Guide (50k+⭐)
**링크:** https://github.com/dair-ai/Prompt-Engineering-Guide
**핵심:** 프롬프트 엔지니어링의 모든 것
- Few-shot, Chain-of-Thought, ReAct 등 모든 기법
- **→ AI Council 프롬프트 개선에 직접 사용!** 각 분석관의 프롬프트를 최적화

---

## 🔄 워크플로우 자동화

### 10. n8n (55k+⭐) — 워크플로우 자동화
**링크:** https://github.com/n8n-io/n8n
**핵심:** AI 네이티브 워크플로우 자동화
- 400+ 통합, AI 에이전트 워크플로우
- **→ 우리 cron/워크플로우를 n8n으로 시각화 가능!**

### 11. Lobe Chat (55k+⭐) — LLM 채팅 UI
**링크:** https://github.com/lobehub/lobe-chat
**핵심:** 최신 LLM 채팅 인터페이스
- 에이전트 마켓플레이스, 플러그인
- **→ Hermes WebUI UI 디자인 참고**

---

## 📋 적용 우선순위

| 우선순위 | 기술 | 적용 대상 | 예상 효과 |
|:--------:|:-----|:----------|:----------|
| ⭐⭐⭐ | **Mem0 메모리 알고리즘** | Hermes Memory 시스템 | 기억력 10배 향상 |
| ⭐⭐⭐ | **crewAI Flows** | AI Council v4.0 | 이벤트 기반 의사결정 |
| ⭐⭐⭐ | **Prompt Engineering** | AI Council 프롬프트 | 분석 정확도 향상 |
| ⭐⭐ | **n8n 워크플로우** | 배틀루프/cron 시각화 | 운영 효율성 |
| ⭐⭐ | **Lobe Chat UI** | Hermes WebUI | 사용자 경험 개선 |
| ⭐ | **ElizaOS 플러그인** | Hermes 확장 | 모듈화 |

---

## 🔍 더 탐색할 리포

- **LangChain** (100k⭐) — RAG, Agent 체인 — 이미 사용 중이니 코드 레벨 분석
- **AutoGPT** (170k⭐) — 자율 AI 에이전트 — 아키텍처 분석
- **phidata** — AI 어시스턴트 프레임워크
- **TaskWeaver** (MS) — 코드 생성 에이전트
- **OpenAgents** — 다양한 AI 에이전트 플랫폼

---

> 마지막 업데이트: 2026-04-29
> 수집 기준: GitHub Stars 20k+
