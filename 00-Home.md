# Team Living Wiki

**[[Wiki Basic Model]]**에 따라 누구나(팀원+Claude) 자유롭게 편집하세요.

## Quick Links
- [[01-Projects/Jongdari-Trading-System|📈 종다리 모의투자 시스템]]
- [[01_지식/Hermes|🤖 Hermes — AI 어시스턴트]]
- [[01_지식/System-Architecture|🏗️ 시스템 아키텍처]]
- [[01_지식/AI-Council|🧠 AI Council 분석]]
- [[03_경제/Trading-Strategies|📊 트레이딩 전략]]
- [[03_경제/Operations-Guide|⚙️ 운영 가이드]]
|- [[01-Projects/Invoice-Auto-System|📋 미래해운항공 물류 자동화]]
|- [[04_프로젝트/Invoice-Auto-Workflow|🔄 인보이스 워크플로우]]
|- [[04_프로젝트/Invoice-AI-Prompt|🤖 AI 추출 프롬프트]]
|- [[01-Projects/Invoice-Auto-Status|📋 인보이스 자동화 현황→]]
|- [[01-Projects/CLP-Auto-System|📦 CLP 자동화 시스템 v28]]
|- [[04_프로젝트/CLP-Auto-Workflow|🔗 CLP 워크플로우]]
|- [[01-Projects/Project-Alpha]]
|- [[03-Meetings/Weekly Sync 2026-04]]
|- [[01_지식/Tech Stack]]

## 📊 LLM Wiki 주식 분석 시스템
### 📈 종목
- [[wiki/stocks/삼성부광|📈 삼성부광 (014950.KQ)]] — 8,300원 🔴 -1.89% (5/12)
- [[wiki/stocks/에이치엘사이언스|📈 에이치엘사이언스 (473980.KQ)]] — 16,310원 🔴 -2.10% (5/12)
- [[wiki/stocks/나우로보틱스|📈 나우로보틱스 (459510.KQ)]] — 30,500원 🟢 +3.04% (5/12)

### 💾 섹터 & 테마
- [[wiki/sectors/헬스케어|💊 헬스케어/바이오테크]]
- [[wiki/sectors/산업재|🏭 산업재/특수비즈니스]]
- [[wiki/sectors/코스닥 중소형|📊 코스닥 중소형]]
- [[wiki/sectors/로보틱스|🤖 로보틱스]]

### 💵 거시경제
- [[wiki/macros/KOSPI|📊 KOSPI (7,953)]] 🔴 RSI 95.3 극단 과매수
- [[wiki/macros/KOSDAQ|📈 KOSDAQ (1,220)]] 🟡 +1.04%
- [[wiki/macros/환율|💵 환율 (1,482원)]] 🔴 +1.45% (5/12)
- [[wiki/macros/국제유가WTI|🛢️ WTI ($98.70)]] 🟡 -0.47% (5/11)

### 🧠 시스템
- [[99_System/GEMINI.md|🧠 시스템 스키마 (GEMINI.md)]]
- [[99_System/Logs/wiki_update_log.md|📝 Wiki 업데이트 로그]]

## 최근 업데이트
- **[Hermes]** 📊 LLM Wiki 일간 업데이트 — 5/12 전종목 갱신 (2026-05-12 09:56)
  - KOSPI **7,953**(+6.07%, RSI 95.3 극단 과매수), KOSDAQ 1,220(+1.04%)
  - 삼성부광 8,300원 🔴 -1.89% (RSI 22.4, 포트폴리오 -17.33%)
  - 나우로보틱스 30,500원 🟢 +3.04% (RSI 71.9)
  - 에이치엘사이언스 16,310원 🔴 -2.10% (RSI 30.6 과매도 임박)
  - USD_KRW 1,481.79원 🔴 +1.45%, WTI $98.70 🟡 -0.47%
- **[Hermes]** 📊 Wiki 확장기 5/11 yfinance settlement 정정 반영 (2026-05-12 01:10)
  - 삼성부광 8,480→8,460원 (RSI 22.7), 에이치엘 16,900→16,660원 (RSI 32.1)
  - KOSPI/KOSDAQ 5/11 지수 NaN (post-midnight regression) — 5/8 확정가 유지
  - WTI $99.03→$98.06 (5/11 신규 거래일), USD_KRW 1,470.78→1,470.44
- **[Hermes]** 🔥 LLM Wiki 주식 분석 시스템 확장 완료 (2026-05-11)
  - wiki/stocks/ + wiki/macros/ 구조로 전환
  - 거시경제 지표 4종 주기적 갱신 (KOSPI/KOSDAQ/환율/WTI)
  - Raw 데이터 8건 yfinance 자동 수집 (매시)
- **[Hermes]** 🧠 Brain Sync 진화 엔진 구축 (2026-04-29)
  - hermes_brain_sync.py: Wiki 전체 읽기 → 지식 통합
  - 매시 30분 자동 실행 → Wiki 지식을 컨텍스트로 흡수
