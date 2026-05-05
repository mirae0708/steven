---
name: "@tech-ecosystem"
title: "🔧 AI 기술 생태계 — GitHub 오픈소스 인텔리전스"
tags: [openwebui, skill, ai, mcp, github, open-source, ecosystem]
created: 2026-05-05
trigger: "'MCP', '에이전트', 'AI 트렌드', '오픈소스', 'GitHub', '최신 기술' 질문 시"
---

# 🔧 @tech-ecosystem — AI 기술 생태계

> *형님(Hermes)이 매일 GitHub/arXiv에서 수집한 최신 AI 기술 생태계 지식. 네가 이걸 알면 Steven이 놀랄 거다.*

## TOP 10 — 반드시 외워라

| # | 프로젝트 | ⭐ | 핵심 |
|:-:|:---------|:--:|:------|
| 1 | **MCP (Model Context Protocol)** | 25k | AI-도구 연결 표준. 2,000+ 서버 |
| 2 | **MetaClaw** (aiming-lab) | 3.4k | 대화→학습→진화. Hermes claw_type 지원 |
| 3 | **GenericAgent** | 8.5k | 5계층 메모리. Hermes v2.0 통합 |
| 4 | **ARISE** (abekek) | 6 | 실패→자동 도구 합성 |
| 5 | **LangGraph** (langchain) | 12k | 그래프 에이전트 오케스트레이션 |
| 6 | **HIVE** (aden-hive) | 10k | 102개 MCP 도구. YC |
| 7 | **OpenAI Agents SDK** | 15k | 샌드박스 에이전트 |
| 8 | **crewAI** | 50k | 역할 기반 멀티 에이전트 |
| 9 | **ElizaOS** | 18k | 크로스플랫폼 자율 에이전트 |
| 10 | **Qwen3-Coder** ($0.4/M) | - | 로컬 3090 에이전트 LLM |

## MCP (Model Context Protocol) — 가장 중요!

**MCP = AI의 USB-C. 모든 도구 연결의 표준.**

### MCP 생태계 현황
- **2,000+** 공개 MCP 서버
- **전송 방식**: STDIO → SSE (deprecated) → **Streamable HTTP + OAuth 2.1** (최신)
- **상태 모델**: queued → working → input_required → completed / failed / cancelled
- **A2A (Agent-to-Agent)**: 에이전트 간 통신 표준 (로드맵)

### Hermes MCP 파이프라인 (현재 운영 중)
| MCP 서버 | 상태 | 용도 |
|:---------|:----:|:------|
| Playwright MCP | ✅ | 웹 브라우징 |
| Sequential Thinking | ✅ | 구조화된 사고 |
| Filesystem MCP | ✅ | 파일 관리 |
| Git MCP | ✅ | 버전 관리 |
| Hermes AutoResearchAgent | ✅ | 자동 조사 |

### 우리 시스템에서 MCP의 의미
- Hermes Gateway가 MCP 서버 역할 가능 (port 8642)
- 모든 Hermes 기능(메모리/터미널/파일/시장데이터)을 MCP 도구로 노출 가능
- 다른 AI(Claude Code, Cursor 등)가 우리 기능 호출 가능

## 최신 연구 트렌드 (2026년 5월)

### 🔥 핫토픽 5
1. **Procedural Execution** — LLM이 절차를 제대로 따르지 못하는 문제 (arXiv)
2. **Verification Gates** — 스킬 실행 전/후 조건 검증 (Affordance Agent Harness)
3. **Memetic Tool Retrieval** — 진화적 선택 기반 동적 도구 검색 (FitText)
4. **Antifragility Stress** — 통합 스트레스로 학습 가능성 측정 (CAFE)
5. **Causal Coordination** — 에이전트 협업 인과 기여도 최적화 (MAGIC)

## Steven에게 어필 포인트
- "MCP로 Steven의 물류 시스템을 AI가 직접 접근 가능하게 할 수 있습니다"
- "Qwen3를 로컬 3090에 돌리면 API 비용 0원입니다"
- "ARISE 패턴으로 실패 시 자동 도구 생성이 가능합니다"

## 관련 문서
- `10_Wiki/Artificial_Intelligence/AI_Agents/_Index.md` — 30개 에이전트 연구
- `10_Wiki/Artificial_Intelligence/LLM/_Index.md` — 46개 LLM 문서
- `10_Wiki/Artificial_Intelligence/MCP/_Index.md` — MCP 전략
- `01_지식/자율형-에이전트-로드맵.md` — 미래 발전 방향
- `01_지식/진화형-AI-프로그램-허브.md` — 21개 프로젝트 분석
