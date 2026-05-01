# Wiki Update Log

| Date | Time | Action | Details |
|:-----|:-----|:-------|:--------|
| 2026-04-29 | 04:00 KST | 🚨 Data Script Fail | `wiki_auto_expander.sh` not found at `/home/steven/.hermes/scripts/` — yfinance data collection ran inline instead |
| 2026-04-29 | 04:00 KST | ✅ 데이터 수집 | yfinance inline — 모든 ticker 정상 갱신 |
| 2026-04-29 | 04:00 KST | 🔴 국제유가WTI.md 업데이트 | WTI $100.06 — **$100 돌파, CRISIS MODE 활성** |
| 2026-04-29 | 04:00 KST | 🟡 환율.md 업데이트 | USD/KRW 1,471.69원, 3일 변동 재계산 |
| 2026-04-29 | 04:00 KST | 🟡 KOSPI.md 업데이트 | 기술적 지표 추가 (RSI 87.9 과매수) |
| 2026-04-29 | 04:00 KST | 🟡 KOSDAQ.md 업데이트 | 기술적 지표 추가 (RSI 91.0 극단적 과매수) |
| 2026-04-29 | 04:00 KST | 🟡 삼성부광.md 업데이트 | RSI, 볼린저밴드, 거래량 등 기술적 지표 보강 |
| 2026-04-29 | 04:00 KST | 🟡 에이치엘사이언스.md 업데이트 | RSI, 볼린저밴드, 거래량 등 기술적 지표 보강 |
| 2026-04-29 | 05:01 KST | 🔄 재확인 | 변경 없음 — 04:00 업데이트 이후 신규 데이터 없음. 스크립트 누적 문제: `wiki_auto_expander.sh` 미존재 |
| 2026-04-29 | 06:00 KST | ✅ 스크립트 복구 | `wiki_auto_expander.sh` 신규 생성 → 정상 작동 확인 (8/8 ticker 갱신) |
| 2026-04-29 | 06:00 KST | 🔄 재확인 | 변경 없음 — KOSPI/KOSDAQ 4/27 마감, 종목/FX/WTI 4/28 마감. 신규 거래일 데이터 없음. Wiki 최신 상태 유지 |
| 2026-04-29 | 07:00 KST | 🚨 Data Script Fail | `wiki_auto_expander.sh`가 bash 대신 python으로 실행됨 → NameError. 수동 bash 실행으로 데이터 수집 완료 (8/8 성공) |
| 2026-04-29 | 07:00 KST | ✅ 스크립트 실행 경로 수정 | cron script 경로를 `bash /home/steven/.hermes/scripts/wiki_auto_expander.sh`로 변경하여 동일 오류 방지 |
| 2026-04-29 | 07:00 KST | 🔴 국제유가WTI.md 업데이트 | WTI 실제 종가 $99.62 (기존 $100.06 → 오류 수정). CRISIS MODE 해제, 3d 변동 +3.93% |
| 2026-04-29 | 07:00 KST | 🟡 환율.md 업데이트 | USD/KRW 1,472.88원 (기존 1,471.69 갱신). 3d 변동 -0.34%, 볼린저밴드 위치 30.2%로 수정 |
| 2026-04-29 | 07:00 KST | 🟡 삼성부광.md 업데이트 | SMA60(10,759원) 추가, 3일 변동(-3.07%) 추가, ROE/D/E 정보 보강 |
| 2026-04-29 | 07:00 KST | 🟡 에이치엘사이언스.md 업데이트 | SMA60(17,895원) 추가, 섹터/시총 정보 보강 |
| 2026-04-29 | 08:00 KST | 📋 Hermes-Daily-Log 업데이트 | 08:00 스냅샷: Jongdari 배틀루프 재시작 완료(05:06, PID 87594), WTI $99.62 오류 수정 확인, 포트폴리오 현황 기록 |
| 2026-04-29 | 08:00 KST | 📋 AI-Council 업데이트 | 포트폴리오 날짜 4/29 갱신, 473980.KQ 매매 이력 추가, 현금 잔고 정정(4,658,070원) |
| 2026-04-29 | 08:01 KST | 🚨 Data Script Fail | `script: "bash /home/steven/.hermes/scripts/wiki_auto_expander.sh"` — script 필드는 경로만 받고 shell 명령어 파싱 안 함. 'Script not found' 오류 발생 |
| 2026-04-29 | 08:01 KST | ✅ 스크립트 복구 | `script: "wiki_auto_expander.sh"`로 수정 (상대경로). 수동 실행 8/8 성공 확인 |
| 2026-04-29 | 08:01 KST | 🔄 재확인 | 변경 없음 — KOSPI/KOSDAQ 4/27 마감, 종목/FX/WTI 4/28 마감. 신규 거래일 데이터 없음. Wiki 최신 상태 유지 |
| 2026-05-02 | 12:00 KST | 🟡 모든 Wiki 문서 업데이트 | 주말 정기 리프레시. Stocks/삼성부광, 에이치엘사이언스 + Macros/KOSPI, KOSDAQ, 환율, 국제유가WTI. 분석일자 5/2 갱신, WTI $101.98/환율 1,471.85원 수치 정정. 신규 거래일 데이터 없음 (토요일). |
