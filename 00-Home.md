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
- [[wiki/stocks/삼성부광|📈 삼성부광 (014950.KQ)]] — 8,100원 🔴 -4.26% (5/12 settlement)
- [[wiki/stocks/에이치엘사이언스|📈 에이치엘사이언스 (473980.KQ)]] — 16,080원 🔴 -3.48% (5/12 settlement)
- [[wiki/stocks/나우로보틱스|📈 나우로보틱스 (459510.KQ)]] — 27,550원 🔴 -6.93% (5/12 settlement)

### 💾 섹터 & 테마
- [[wiki/sectors/헬스케어|💊 헬스케어/바이오테크]]
- [[wiki/sectors/코스닥 중소형|📊 코스닥 중소형]]
- [[wiki/sectors/로보틱스|🤖 로보틱스]]

### 💵 거시경제
- [[wiki/macros/KOSPI|📊 KOSPI (7,741)]] 🔴 -1.04% (RSI 90.7)
- [[wiki/macros/KOSDAQ|📈 KOSDAQ (1,185)]] 🔴 -1.89%
- [[wiki/macros/환율|💵 환율 (1,485원)]] 🔴 +1.70% (5/12)
- [[wiki/macros/국제유가WTI|🛢️ WTI ($99.01)]] 🟡 +0.96% (5/12)

### 🧠 시스템
- [[99_System/GEMINI.md|🧠 시스템 스키마 (GEMINI.md)]]
- [[99_System/Logs/wiki_update_log.md|📝 Wiki 업데이트 로그]]

## 최근 업데이트
- **[Hermes]** 📊 Wiki 확장기 4차 수집 — 5/12 yfinance settlement 보정 (2026-05-12 12:12)
  - KOSPI **7,741**(−1.04%, shooting star). KOSDAQ 1,185(−1.89%)
  - 삼성부광 8,100원 🔴 -4.26% (RSI 21.3, 포트폴리오 -19.32%)
  - 나우로보틱스 27,550원 🔴 -6.93% (포트폴리오 -9.82%)
  - 에이치엘사이언스 16,080원 🔴 -3.48% (RSI 29.1 과매도)
  - USD_KRW 1,485원 🔴 +1.70%, WTI $99.01 🟡 +0.96%
  - ⚠️ KOSPI shooting star 패턴 (8,000→7,741), 개별종목 급락 지속, 포트폴리오 -19% 유지
- **[Hermes]** 📊 Wiki 확장기 3차 수집 — 5/12 actual close 전면 갱신 (2026-05-12 12:10)
  - KOSPI **7,642**(−2.30%, 장중 8,000 찍고 급반락). KOSDAQ 1,174(−2.80%)
  - 삼성부광 8,030원 🔴 -5.08% (RSI 21.0 심각 과매도, 포트폴리오 -20.02%)
  - 나우로보틱스 27,750원 🔴 -6.25% (포트폴리오 -9.17%)
  - 에이치엘사이언스 16,140원 🔴 -3.12% (RSI 29.5 과매도 진입)
  - USD_KRW 1,485원 🔴 +1.65%, WTI $99.01 🟡 +0.48%
  - ⚠️ 종합: KOSPI 급등 후 급락 + 보유종목 급락 = 포트폴리오 -20% 돌파
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
