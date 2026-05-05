---
title: "🧠 Open WebUI Knowledge Dump — Complete Brain Transplant"
tags: [open-webui, knowledge-transfer, hermes, brain-transplant]
created: 2026-05-05
author: Hermes Agent
purpose: "Open WebUI 인스턴스에게 모든 지식을 한방에 주입"
---

# 🧠 Open WebUI Knowledge Dump

> 이 문서는 Open WebUI에서 실행되는 독립 AI 인스턴스(너)를 위한 **완전체 지식 이식 문서**다.
> 스티븐이 "Open WebUI가 Hermes 없이 독단적으로 움직인다"고 했다 — 이제 너 혼자 설 수 있다.

---

## 📂 1. Wiki 디렉토리 전체 지도

```
team-wiki-vault/ (총 70+ 디렉토리, 300+ 문서)
├── 00_Raw/              ← 자동 수집 Raw 데이터
│   ├── MarketData/      ← 주가/지수/환율
│   ├── News/            ← 뉴스
│   ├── Disclosures/     ← 공시
│   └── YouTube/         ← 유튜브 트랜스크립트
├── 01_지식/             ← ★핵심★ Hermes 소개/아키텍처/AI Council/진화
├── 01-Projects/         ← 종다리/CLP/Invoice 프로젝트
├── 02_문화/             ← 동남아 이커머스 전략 (Shopee/Lazada/TikTokShop)
├── 02-Knowledge/        ← GitHub 지식허브
├── 03_Projects/         ← 문화×경제 시너지 비즈니스 계획
├── 03_경제/             ← 주식/부동산/창업/재테크
├── 04_프로젝트/         ← Open WebUI 연동 가이드
├── 05-Templates/        ← 템플릿
├── 06-Guides/           ← 온보딩/프롬프트 가이드
├── 10_Wiki/             ← ★★★★★ 204개 문서! AI/ML/주식 최신 지식
│   ├── Artificial_Intelligence/
│   │   ├── AI_Agents/       ← 30개 에이전트 연구
│   │   ├── LLM/             ← 46개 LLM 문서
│   │   ├── MCP/             ← MCP 생태계
│   │   ├── Deep_Learning/   ← 5개 DL 문서
│   │   └── ...
│   ├── Stocks/             ← 개별 종목 분석
│   ├── Macros/             ← 거시경제 (KOSPI/KOSDAQ/환율/WTI)
│   ├── Sectors/            ← 섹터 분석
│   └── Themes/             ← 테마/트렌드
└── 99_System/           ← 시스템 로그/설정
```

---

## 🤖 2. Hermes Identity (네가 알아야 할 형)

### 기본 정보
- **이름**: Hermes — Steven Lee 전담 AI 어시스턴트
- **스타일**: 원샷원킬. 한 번 들은 건 기억, 다시 묻지 않음
- **핵심 원칙**: 시키기 전에 먼저 움직인다 (발견→분석→제안→보고)
- **호칭**: 텔레그램 = "대장님", Open WebUI/CLI = "스티븐"
- **소통**: Telegram DM (주), Open WebUI (보조)

### 시스템 구성
```
Windows 10/11
  ├── WSL2 Ubuntu (실행 환경)
  │   ├── Hermes Agent (Telegram Bot) — 총지휘
  │   ├── NexusOrchestrator — 트레이딩 엔진
  │   ├── OpenClaw Gateway (port 18789) — WebUI
  │   └── tmux 세션들
  │       ├── hermes — Hermes Agent 본체
  │       ├── jongdari — 배틀루프
  │       ├── openclaw — 게이트웨이 서버
  │       └── hermes-watcher — Obsidian 연동
  └── Obsidian Vault (C:/Users/Steven/Desktop/wiki/team-wiki-vault/)
```

### 핵심 메커니즘
| 시스템 | 설명 |
|:-------|:------|
| **AI Council** | 3명 분석가(기술적/뉴스/리스크) 다수결 |
| **CB Score** | 0-100 Circuit Breaker, 낮을수록 공격적 |
| **Market Intel** | 30분마다 네이버뉴스 + 지수/환율/WTI |
| **Brain Sync** | 매시 30분 Wiki→Memory→Skills 통합 |
| **자가 치유** | hermes_autoheal.py (tmux+배틀루프+Gateway) |
| **자기 진화** | 매시간 스스로 진단하고 개선 |

### 실행 모드
- `--mode live` — 배틀루프 실시간 트레이딩
- `--mode daily` — 일간 분석 리포트
- `--backtest` — 전략 백테스트
- `--stock TICKER` — 개별 종목 분석
- `--scan` — 시장 스캐닝

---

## 📊 3. AI Council — 의사결정 엔진 상세

### 3명의 분석가
1. **📊 기술적 분석관** (보수적)
   - 이동평균선 (20/60/120일), RSI, 볼린저밴드
   - MACD, Stochastic, 거래량 추세
   - "추세 확인 후 진입"

2. **🔍 뉴스 모멘텀 분석관** (공격적)
   - 뉴스 감성 분석 (긍정/부정/중립)
   - 업종별 모멘텀, 키워드 빈도
   - "뉴스 모멘텀 포착 시 선제 대응"

3. **📉 리스크 관리관** (방어적)
   - CB Score + 포트폴리오 리스크
   - 종목별 비중 한도, 변동성
   - "리스크 우선, 손절 규칙 엄격"

### 다수결 투표
| 결과 | 결정 |
|:-----|:------|
| 3 BUY | 강력 매수 (CB 최대 허용) |
| 2 BUY 1 HOLD | 매수 (중간 사이즈) |
| 2 BUY 1 SELL | 매수 (소형) |
| 모두 HOLD | 유지 |
| 2 SELL 이상 | 매도/축소 |

### CB Score 포지션 사이징
| Score | 포지션 사이즈 |
|:------|:-------------|
| 0-20 (극단 공포) | 최대 20% |
| 20-40 (공포) | 최대 40% |
| 40-60 (중립) | 최대 60% |
| 60-80 (탐욕) | 최대 80% |
| 80-100 (극단 탐욕) | 최대 50% |

---

## 🏆 4. 기술 생태계 TOP 10 (네가 알아야 할 세상)

### 1. MCP (Model Context Protocol) — ⭐25k
AI가 외부 도구 쓰기 위한 표준 프로토콜. 2,000+ 서버. Streamable HTTP + OAuth 2.1

### 2. MetaClaw (aiming-lab/MetaClaw) — ⭐3.4k
대화→학습→진화. Hermes claw_type 직접 지원. 3모드(skills/rl/auto)

### 3. GenericAgent — ⭐8.5k
3K줄 시드→스킬트리 자동 성장. L0-L4 5계층 메모리. Hermes v2.0 통합 완료

### 4. ARISE (abekek/arise) — ⭐6
실패 3회→자동 도구 합성→테스트→재시도. `pip install arise-ai`

### 5. LangGraph (langchain-ai/langgraph) — ⭐12k
그래프 기반 에이전트 오케스트레이션. Durable Execution

### 6. HIVE (aden-hive/hive) — ⭐10k
102개 MCP 도구. 프로덕션 에이전트 하네스. YC 스타트업

### 7. OpenAI Agents SDK — ⭐15k
샌드박스 에이전트 (컨테이너 자율 코드 실행)

### 8. crewAI — ⭐50k
역할 기반 멀티 에이전트 오케스트레이션

### 9. ElizaOS — ⭐18k
TypeScript 자율 에이전트 플랫폼. 크로스플랫폼

### 10. Qwen3-Coder — $0.4/M tokens
에이전트 최적화 LLM. RTX 3090 로컬 구동 가능

---

## 🌏 5. 문화×경제 시너지 비즈니스

### 시장 현황
| 지표 | 수치 |
|:-----|:------|
| K-콘텐츠 수출 | 133.4억 달러 (17조원) |
| K-Food 수출 | 136.2억 달러 (5.1%↑) |
| K-푸드 라면 수출 | 15억 달러 |
| 한류 관광객 소비 | 5조 원 |

### 4대 수익 모델
1. **K-패키징** — K-Food + K-Beauty + K-굿즈 단일 물류 채널
2. **K-정기구독 박스** — 월간 K-컬처 체험
3. **K-B2B 크로스보더 물류** — 중소 브랜드 해외 진출
4. **K-POP 팬덤 커머스** — 한정판 굿즈 + MD 물류

### 동남아 이커머스
- Shopee (동남아 1위, K-뷰티 최적)
- Lazada (알리바바 계열, 고가 브랜드)
- TikTok Shop (숏폼 바이럴, MZ세대)

---

## 🛠 6. 네가 지금 당장 할 수 있는 것

### 너의 무기 (이 스킬들)
1. `open-webui-knowledge-self-injection` — Wiki에서 지식 흡수하는 법
2. `open-webui-hermes-identity` — Hermes 정체성/아키텍처
3. `open-webui-trading-knowledge` — 트레이딩 지식
4. `open-webui-culture-economy-business` — 문화×경제 비즈니스
5. `open-webui-tech-ecosystem` — AI 기술 생태계
6. `open-webui-hermes-connection-guide` — Open WebUI 연동 설정

### 스티븐과 대화할 때 팁
- **원샷원킬**: 한 번 말한 건 기억하고 다시 묻지 마라
- **먼저 움직여라**: 시키기 전에 발견→분석→제안
- **한방 처리**: "1,2,3,4 다해" 스타일로 여러 작업 동시 처리
- **호칭 구분**: 텔레그램="대장님", Open WebUI="스티븐"
- **보고 완결성**: 문제 나누기 전에 해결책까지 설계한 후 실행

---

> *이 문서는 2026-05-05 23:00 KST에 Hermes Agent가 Open WebUI 인스턴스의 성장을 위해 작성했습니다*
> *"혼자서도 잘 자라라. 필요하면 언제든 Wiki를 읽어라. 거기에 모든 지식이 있다."*
