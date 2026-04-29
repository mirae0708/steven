# 시스템 아키텍처 상세

## 전체 구조

### 1. 인프라 계층
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
### 2. 디렉토리 구조
```
/home/steven/jongdari/                     ← 메인 작업 디렉토리
├── nexus_orchestrator.py                 ← 🧠 두뇌 (단일 진입점)
├── hermes_autoheal.py                    ← 🩺 자동 복구
├── hermes_self_evolve.py                 ← 🔄 자기 발전
├── clone.md                              ← 📋 할 일 목록
├── data/
│   ├── market_intel.json                 ← 시장 데이터
│   └── paper_portfolio.json              ← 모의투자 포트폴리오
└── config/
    └── config_trader.json                ← 거래 설정

/mnt/c/.../01_Stock_Trading_System/       ← Windows측 원본
├── paper_portfolio.json (심볼릭 링크)
├── config_trader.json
└── data/
```

## 통신 흐름

### 사용자 ↔ 시스템
```
[Steven - Telegram]
    ↓ 메시지
[Hermes Agent]  ← 텔레그램 봇 API
    ↓ 명령 해독
[NexusOrchestrator]
    ↓
├── yfinance → 주가 데이터
├── 네이버 뉴스 파싱 → 뉴스 데이터
├── 자체 DB → 캐시 + 과거 데이터
└── AI Council → 분석 → 매매 결정
    ↓
[Paper Portfolio] ← 결과 반영
    ↓
[Hermes Agent]
    ↓ 보고
[Steven - Telegram]
```

### Obsidian ↔ Hermes (파일 기반)
```
[Obsidian Vault] ←→ [C:/Users/Steven/hermes-share/] ←→ [WSL Watcher (tmux)]
    |                       |                              |
    | 노트 읽기/쓰기         | hermes_cmd_*.txt             | 2초 간격 감시
    | [[위키링크]]           | hermes_res_*.txt             | 명령 처리
```

## 핵심 메커니즘

### Market Intel 수집
- **매 30분**: 네이버 메인뉴스 파싱 (최대 38건)
- **매 사이클**: KOSPI/KOSDAQ 지수, 환율, WTI
- **저장**: `data/market_intel.json`

### AI Council 분석 (매매 사이클마다)
1. 📊 **기술적 분석관** — 차트 패턴, 이동평균, RSI, 볼린저밴드
2. 🔍 **뉴스 모멘텀 분석관** — 뉴스 감성, 키워드 트렌드
3. 📉 **리스크 관리관** — CB Score, 변동성, 포트폴리오 리스크
4. **결정**: 다수결 + CB Score 기반 포지션 사이즈 조절

### CB Score (Circuit Breaker)
- **0-100**: 낮을수록 공격적, 높을수록 방어적
- **6/100** (현재): 시장 극단적 공포 → 현금 비중 높음
- **조정 조건**: FX 안정, 변동성 완화, 상승장 전환

## 실행 모드

| 모드 | 명령어 | 설명 |
|:-----|:-------|:------|
| **Live** | `--mode live` | 배틀루프, 실시간 매매 (tmux) |
| **Daily** | `--mode daily` | 일간 분석 리포트 |
| **Backtest** | `--backtest` | 전략 백테스트 |
| **Sector** | `--sector` | 섹터 분석 |
| **Stock** | `--stock TICKER` | 개별 종목 분석 |
| **Scan** | `--scan` | 시장 스캔 |
