# Team Living Wiki

**[[Wiki Basic Model]]**에 따라 누구나(팀원+Claude) 자유롭게 편집하세요.

## Quick Links
- [[01-Projects/Jongdari-Trading-System|📈 종다리 모의투자 시스템]]
- [[02-Knowledge/Hermes|🤖 Hermes — AI 어시스턴트]]
- [[02-Knowledge/System-Architecture|🏗️ 시스템 아키텍처]]
- [[02-Knowledge/AI-Council|🧠 AI Council 분석]]
- [[02-Knowledge/Trading-Strategies|📊 트레이딩 전략]]
- [[02-Knowledge/Operations-Guide|⚙️ 운영 가이드]]
|- [[01-Projects/Invoice-Auto-System|📋 미래해운항공 물류 자동화]]
|- [[02-Knowledge/Invoice-Auto-Workflow|🔄 인보이스 워크플로우]]
|- [[02-Knowledge/Invoice-AI-Prompt|🤖 AI 추출 프롬프트]]
|- [[01-Projects/Invoice-Auto-Status|📋 인보이스 자동화 현황→]]
|- [[01-Projects/CLP-Auto-System|📦 CLP 자동화 시스템 v28]]
|- [[02-Knowledge/CLP-Auto-Workflow|🔗 CLP 워크플로우]]
|- [[01-Projects/Project-Alpha]]
|- [[03-Meetings/Weekly Sync 2026-04]]
|- [[02-Knowledge/Tech Stack]]

## 📊 LLM Wiki 주식 분석 시스템
### 📈 종목
- [[10_Wiki/Stocks/삼성부광|📈 삼성부광 (014950.KQ)]] — 보유중
- [[10_Wiki/Stocks/에이치엘사이언스|📉 에이치엘사이언스 (473980.KQ)]] — 이전매매

### 💾 섹터 & 테마
- [[10_Wiki/Sectors/반도체|💾 반도체 섹터]]
- [[10_Wiki/Themes/코스닥 중소형|📊 코스닥 중소형]]
- [[10_Wiki/Themes/장비부품|🔧 장비부품]]

### 💵 거시경제
- [[10_Wiki/Macros/KOSPI|📊 KOSPI (6,615)]]
- [[10_Wiki/Macros/KOSDAQ|📈 KOSDAQ (1,226)]]
- [[10_Wiki/Macros/환율|💵 환율 (1,473원)]]
- [[10_Wiki/Macros/국제유가WTI|🛢️ WTI ($99.86)]]

### 🧠 시스템
- [[99_System/GEMINI.md|🧠 시스템 스키마 (GEMINI.md)]]
- [[99_System/Analysis-Log|📝 분석 로그]]

## 최근 업데이트
- **[Hermes]** 🔥 LLM Wiki 주식 분석 시스템 1차 확장 완료 (2026-04-29)
  - 보유종목 2개 분석 완료 (삼성부광 + 에이치엘사이언스)
  - 거시경제 지표 4종 추가 (KOSPI/KOSDAQ/환율/WTI)
  - Raw 데이터 7건 수집 저장
  - Auto-Wiki cron 등록 (매일 09:00)
- **[Hermes]** 🧠 Brain Sync 진화 엔진 구축 (2026-04-29)
  - hermes_brain_sync.py: Wiki 전체 읽기 → 지식 통합
  - 매시 30분 자동 실행 → Wiki 지식을 컨텍스트로 흡수
  - Wiki → 메모리/스킬 통합 자동화
  - 진화 사이클 완성: 수집→분석→기록→흡수→진화
- Claude가 자동으로 [[Daily Note]] 생성 중

**[[MOC-Projects]]** | **[[MOC-Knowledge]]** | **[[MOC-Code]]**
