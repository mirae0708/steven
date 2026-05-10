# Team Living Wiki

**[[Wiki Basic Model]]**에 따라 누구나(팀원+Claude) 자유롭게 편집하세요.

## Quick Links
- [[01-Projects/Jongdari-Trading-System|📈 종다리 모의투자 시스템]]
- [[01_지식/Hermes|🤖 Hermes — AI 어시스턴트]]
- [[01_지식/System-Architecture|🏗️ 시스템 아키텍처]]
- [[01_지식/AI-Council|🧠 AI Council 분석]]
- [[03_경제/Trading-Strategies|📊 트레이딩 전략]]
- [[03_경제/Operations-Guide|⚙️ 운영 가이드]]
||- [[01-Projects/Invoice-Auto-System|📋 미래해운항공 물류 자동화]]
||- [[04_프로젝트/Invoice-Auto-Workflow|🔄 인보이스 워크플로우]]
||- [[04_프로젝트/Invoice-AI-Prompt|🤖 AI 추출 프롬프트]]
||- [[01-Projects/Invoice-Auto-Status|📋 인보이스 자동화 현황→]]
||- [[01-Projects/CLP-Auto-System|📦 CLP 자동화 시스템 v28]]
||- [[04_프로젝트/CLP-Auto-Workflow|🔗 CLP 워크플로우]]
||- [[01-Projects/Project-Alpha]]
||- [[03-Meetings/Weekly Sync 2026-04]]
||- [[01_지식/Tech Stack]]

## 📊 LLM Wiki 주식 분석 시스템
### 📈 종목
- [[10_Wiki/Stocks/삼성부광|📈 삼성부광 (014950.KQ)]] — 8,980원 🟢 +6.02% (5/8 확정)
- [[10_Wiki/Stocks/에이치엘사이언스|📈 에이치엘사이언스 (473980.KQ)]] — 17,700원 🟢 +4.49% (5/8 확정)

### 💾 섹터 & 테마
- [[10_Wiki/Sectors/헬스케어|💊 헬스케어/바이오테크]]
- [[10_Wiki/Sectors/산업재|🏭 산업재/특수비즈니스]]
- [[10_Wiki/Themes/코스닥 중소형|📊 코스닥 중소형]]

### 💵 거시경제
- [[10_Wiki/Macros/KOSPI|📊 KOSPI (7,498)]] 🔴 +0.11% (5/8 확정)
- [[10_Wiki/Macros/KOSDAQ|📈 KOSDAQ (1,208)]] 🟢 +0.71% (5/8 확정)
- [[10_Wiki/Macros/환율|💵 환율 (1,461원)]] 🟡 -0.85% 3일 (5/10 yfinance)
- [[10_Wiki/Macros/국제유가WTI|🛢️ WTI ($95.42)]] 🔴 -6.70% 3일 (5/8 확정)

### 🧠 시스템
- [[99_System/GEMINI.md|🧠 시스템 스키마 (GEMINI.md)]]
- [[99_System/Logs/wiki_update_log.md|📝 Wiki 업데이트 로그]]

## 최근 업데이트
- **[Hermes]** 🔥 LLM Wiki 주식 분석 시스템 1차 확장 완료 (2026-04-29)
  - 보유종목 2개 분석 완료 (삼성부광 + 에이치엘사이언스)
  - 거시경제 지표 4종 추가 (KOSPI/KOSDAQ/환율/WTI)
  - Raw 데이터 7건 수집 저장
  - Auto-Wiki cron 등록 (매일 09:00)
- **[Hermes]** 🧠 Brain Sync 진화 엔진 구축 (2026-04-29)
  - hermes_brain_sync.py: Wiki 전체 읽기 → 지식 통합
  - 매시 30분 자동 실행 → Wiki 지식을 컨텍스트로 흡수
