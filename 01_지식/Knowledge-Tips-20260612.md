|---
|tags: [knowledge-tip, gateway, api-server-key, config, wcferry]
|created: 2026-06-12 00:45
|updated: 2026-06-12 00:45
|---
|
|# 🧠 Knowledge Tips — 2026-06-12 수집
|
|## 1. 🟡 Gateway API Server Key 누락 — port 8642 바인딩 실패
|
|**발견 시점**: 2026-06-12 00:45 KST (Brain Sync)
|**증상**:
|- `platforms.api_server.enabled: True` 설정되어 있으나 port 8642 청취 안 함
|- Gateway 로그: `[Api_Server] Refusing to start: API_SERVER_KEY is required for the API server, including loopback-only binds on 127.0.0.1.`
|- `key: ''` (빈 문자열) — `.env`나 환경변수에 `API_SERVER_KEY` 미설정
|- Gateway 프로세스 자체(PID 136956, 279MB RSS)는 정상 — Telegram 봇 기능은 유지
|
|**원인**:
|- Hermes 최신 버전에서 loopback-only(127.0.0.1) 바인드에도 API_SERVER_KEY 필수
|- 이전에는 key 없이도 localhost에서 동작했으나, 보안 정책 강화됨
|
|**해결 방법**:
|1. `~/.hermes/.env`에 `API_SERVER_KEY=<any-string>` 추가
|2. Gateway 재시작: `hermes gateway restart`
|3. 또는 config.yaml에서 `enabled: false`로 되돌려 Telegram-only 모드 유지
|
|## 2. Wcferry WeChat 브릿지 불통 상태 지속
|
|**발견 시점**: 2026-06-12 00:45 KST
|**증상**:
|- Gateway 로그: 5분마다 `[Wcferry] wcferry bridge at http://127.0.0.1:30002 is not reachable` 출력
|- WeChat(위챗) 클라이언트가 Windows에서 실행되지 않아 wcferry HTTP 서버(30002) 응답 없음
|
|**영향**:
|- WeChat 메시지 발송/수신 불가
|- Telegram 봇과 Open WebUI(3000)는 정상
|
|**해결 방법**:
|- Windows에서 WeChat 클라이언트 실행 → wcferry 자동 연결
|
|## 3. 6/11(목) 10_Wiki 저조한 수집률 (+26, ~+1.1/h)
|
|**관찰**: 6/11 목요일 하루 10_Wiki가 906→932로 +26건 증가
|**비교**: 6/10 수요일 +43건, 6/9 화요일 ~+68/h(피크) 대비 현저히 낮음
|**원인 추정**: 자동 수집 파이프라인(Auto-Evolution)이 6/11에 실행되지 않았거나, cron 스케줄 문제로 수집 빈도 감소
|
|---
|
