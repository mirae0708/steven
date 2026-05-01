---
tags:
  - knowledge-base
  - architecture
  - onboarding
created: 2026-04-29
---

# 🏗️ Obsidian Vault — 지식 구조 설계도

> 이 문서는 team-wiki-vault의 디렉토리 구조와 각 폴더의 용도를 정의합니다.
> 새로운 지식을 추가할 때 이 구조를 참고하여 적절한 위치에 배치하세요.

---

## 📂 디렉토리 구조

```
team-wiki-vault/
├── 00-Home.md                    ← 🏠 메인 대시보드/랜딩 페이지
├── README.md                     ← 리포 소개
│
├── 00_Raw/                       ← 📥 수집된 Raw 데이터 (자동 생성)
│   ├── MarketData/               ← 주식/지수/환율 가격 데이터 (JSON)
│   ├── News/                     ← 수집된 뉴스 데이터
│   ├── Disclosures/              ← 공시 데이터
│   └── YouTube/                  ← 유튜브 트랜스크립트
│
├── 01-Projects/                  ← 📋 현재 진행 중인 프로젝트
│   ├── Jongdari-Trading-System.md
│   ├── Invoice-Auto-System.md
│   ├── CLP-Auto-System.md
│   └── Invoice-Auto-Status.md
│
├── 02-Knowledge/                 ← 📚 축적된 지식 (핵심!)
│   ├── Hermes.md                 ← Hermes Agent 소개
│   ├── System-Architecture.md    ← 시스템 아키텍처
│   ├── Trading-Strategies.md     ← 트레이딩 전략
│   ├── Operations-Guide.md       ← 운영 가이드
│   ├── AI-Council.md             ← AI Council 분석 시스템
│   ├── GitHub-지식허브.md         ← ←🌟 NEW: GitHub 고품질 리소스
│   ├── Hermes-Daily-Log.md       ← 데일리 로그
│   ├── CLP-Auto-Workflow.md      ← CLP 자동화 워크플로우
│   ├── Invoice-Auto-Workflow.md  ← 인보이스 자동화
│   ├── 직원용-코딩-아키텍처-가이드.md
│   └── (앞으로 계속 추가)
│
├── 03-Meetings/                  ← 🗓️ 회의록
│
├── 04-Code/                      ← 💻 코드 스니펫/레퍼런스
│
├── 05-Templates/                 ← 📝 템플릿
│   └── Project-Template.md
│
├── 06-Guides/                    ← 📖 가이드/튜토리얼
│   ├── Claude-System-Prompt.md
│   ├── Obsidian-Plugin-Setup.md
│   ├── Kanban-Tasks-Example.md
│   └── Onboarding.md
│
├── 10_Wiki/                      ← 🤖 LLM Wiki 자동 생성 (AI 전용)
│   ├── Macros/                   ← 거시경제 (KOSPI, KOSDAQ, 환율, 유가)
│   ├── Sectors/                  ← 섹터 분석
│   ├── Stocks/                   ← 종목 분석
│   └── Themes/                   ← 테마/트렌드
│
├── 99_System/                    ← ⚙️ 시스템 로그/설정
│   ├── Logs/                     ← 시스템 로그
│   └── Templates/                ← 시스템 템플릿
│
├── .github/workflows/            ← GitHub Actions
├── plugins/                       ← Obsidian 플러그인
├── scripts/                       ← 유틸리티 스크립트
├── public/                        ← 정적 파일
└── src/                           ← 소스 코드
```

---

## 📋 지식 분류 체계

각 문서는 다음 태그를 하나 이상 가져야 합니다:

| 태그 | 의미 |
|------|------|
| `#trading` | 트레이딩/투자 관련 |
| `#system` | 시스템/인프라 관련 |
| `#dev` | 개발/코딩 관련 |
| `#knowledge-base` | 지식 베이스 문서 |
| `#project` | 프로젝트 문서 |
| `#guide` | 가이드/튜토리얼 |
| `#log` | 로그/기록 |
| `#github-resource` | GitHub에서 수집한 외부 리소스 |

---

## 🧠 앞으로 채울 지식 문서 (제안)

| 우선순위 | 문서명 | 내용 | 출처 |
|:--------:|--------|------|------|
| ⭐⭐⭐ | **행동경제학-투자-심리.md** | 카너먼의 전망이론, 편향, FOMO 심리 | Thinking Fast and Slow |
| ⭐⭐⭐ | **시장-불확실성-이론.md** | 블랙스완, 안티프래질, 테일브 리스크 | Taleb 저서 |
| ⭐⭐⭐ | **퀀트-투자-기초.md** | 팩터 모델, 리스크 패리티, 포트폴리오 이론 | Qlib 참고 |
| ⭐⭐ | **재무제표-분석-가이드.md** | PER/PBR/ROE/ROIC 이해와 해석 | FinanceToolkit |
| ⭐⭐ | **매크로-경제-지표-가이드.md** | GDP/CPI/실업률/금리의 영향 | 경제학 기초 |
| ⭐⭐ | **기술적-분석-패턴.md** | 차트 패턴, 캔들스틱, 지표 조합 | TradingView 지식 |
| ⭐⭐ | **산업-사이클-분석.md** | 업종별 경기 순환, 계절성 | 경제 데이터 |
| ⭐ | **Python-금융-분석-레시피.md** | yfinance, pandas, backtrader 활용법 | AKShare 등 |
| ⭐ | **LLM-에이전트-트레이딩.md** | 멀티에이전트 트레이딩 시스템 설계 | TradingAgents 참고 |

---

## 🔄 자동 동기화 루틴

1. **매일 05:00** — Hermes가 Wiki 스캔 + 새 지식 Obsidian에 반영
2. **매시간 30분** — Brain Sync가 Wiki 읽고 메모리 통합
3. **매일 16:00** — Daily Log 자동 생성
4. **변경 감지 시** — Git 자동 커밋 + 푸시 (설정 필요)

---

> 마지막 업데이트: 2026-04-29
