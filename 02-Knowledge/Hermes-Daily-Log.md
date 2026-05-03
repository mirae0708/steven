
## 2026-05-03 (Sun) 04:01 — 자동 주말 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 186539, 03:33 재시작) |
| Hermes CLI | tmux hermes 세션 유지 |
| Jongdari 배틀루프 | 정상 (PID 784, 1개 세션) |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| MCP 서버 8개 | 모두 정상 |
| 메모리 | 1,926MB / 7,748MB (24.9%) |

### 포트폴리오
- 삼성부광(014950.KQ): 34주 @10,040원 -> 9,710원 (-3.29%)
- 나우로보틱스(459510.KQ): 10주 @30,550원 -> 미갱신
- 현금: 4,349,470원 | 총 평가: 약 4,985,110원 (-0.30%)

### Macro
- KOSPI: 6,598.87 (3d +1.9%) | KOSDAQ: 1,192.35
- WTI: $101.94 ($100+ 지속) | USD/KRW: 1,471.22 (안정)

### 이슈
- 삼성부광 -3.29% 임박, 9,400원 지지선 관찰
- 나우로보틱스 current_price 미갱신
- Gateway 03:33 재시작 (정기 재시작)
- Jongdari 단일 세션 유지, 중복 해소
- MCP 서버 전원 정상

### 2026-05-03 (Sun) 05:31 — Brain Sync 스냅샷 (일요일)
- **변경 감지**: 0개 파일 (주말 변동 없음)
- **시장**: KOSPI 6,598.87 / KOSDAQ 1,192.35 (장 마감)
- WTI $101.94 (↓$3.13, $100 하향 임박) | USD/KRW 1,471.22 (원화 강세)
- **포트폴리오**: 삼성부광 -3.59% / 나우로보틱스 flat
- **결론**: 새로운 정보 없음. 다음 거래일: 5/4(월)

## 2026-05-03 (Sun) 08:00 — 일요일 아침 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 201039, 06:33 nuke 후 재시작) |
| Hermes CLI | tmux hermes 세션 유지 |
| Jongdari 배틀루프 | 정상 (proc=2, CB Score 16/100) |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| OpenWebUI | 정상 (port 3000) |
| MetaClaw | 정상 (port 30000) |
| 메모리  | 2,060MB / 7,748MB (27%) |
| 디스크 | 2% |

### 포트폴리오 (paper_portfolio)
- 자본: 5,000,000원 | 현금: 0 | 포지션: 2개
- KOSPI: 6,599 | KOSPI 1M 모멘텀: +20.4%

### 🚨 복구 기록: 06:30~06:33 KeepAlive v7
- 06:30 **SLEEP_DETECTED** (gap ~2.4h) → **MetaClaw 3회 재시작 실패** → **Hermes-WebUI 3회 재시작 실패**
- 06:33 **Nuke & Restart**: Gateway 재시작 → 08:01 keepalive v7("BULLETPROOF") 전환
- **Windows 전원 설정 → NEVER SLEEP** (재발 방지)
- 현재 08:00 모든 서비스 정상 복구 완료

### 배틀루프 동향
- KBI메탈(024840.KQ), 나우로보틱스(459510.KQ) 분석 중
- 시장 Intel: 뉴스 8건, 모멘텀 5개, Market State: NORMAL
- CB Score 16/100 (낮음, 리스크 회피 모드) — 단기 추세 +20.4%에도 불구하고 변동성 3.7%, 오일/환율 리스크 반영

### 이슈
- 삼성부광 9,400원 지지선 관찰 지속 (일요일 미갱신)
- 나우로보틱스 현재가 미갱신 상태
- CB Score 16/100 — 낮은 신호로 당분간 진입 없음
- 다음 거래일: 5/4(월) 장 개시

## 2026-05-03 (Sun) 12:01 — 점심 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 216671, 09:33 재시작) |
| Hermes CLI | tmux hermes 세션 유지 |
| Jongdari 배틀루프 | 정상 (proc=2, CB Score 16/100) |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| OpenWebUI | ❌ 다운 (keepalive 3회 실패 후 복구 안 됨) |
| MetaClaw | ❌ 다운 (keepalive 3회 실패 후 복구 안 됨) |
| MCP 서버 9개 | 정상 (time/fetch/filesystem + 6 Python-based) |
| 메모리 | 2,137MB / 7,748MB (28%) |
| 디스크 | 2% |
| KeepAlive v7 | BULLETPROOF 모드, 12:02 재시작됨 |

### 🔴 지속적 이슈: MetaClaw & OpenWebUI 다운
- 09:30 keepalive v7 재시작 후 MetaClaw 3회 재시작 실패 → CRITICAL
- OpenWebUI도 동일 패턴으로 3회 실패 → CRITICAL
- BULLETPROOF 모드로 keepalive 재시작 루프 중 (12:02 최신 기동)
- Windows NEVER SLEEP 설정 이후에도 재발 — 근본 원인은 WSL 환경 내 서비스 자체 기동 실패로 추정

### 🔴 MCP Python 서버 CancelledError 지속 (1,658회)
- antigravity/vscode/docker/obsidian/anythingllm/googledrive — 6개 Python 기반 MCP 서버
- Gateway 재시작 시 `python3` subprocess가 CancelledError로 연결 실패
- `uvx` 기반 MCP(time/fetch)와 Node 기반(filesystem)은 정상
- **원인 추정**: Gateway의 MCP 서버 기동 타이밍 이슈 — Python 서버가 준비되기 전에 타임아웃

### 배틀루프 동향
- 30분 간격으로 KOSDAQ 종목 Deep Dive 진행 중 (주말 모드)
- 11:30 이후 분석: 진바이오텍, 엔젤로보틱스, 덴티스, 케이씨티, 참좋은여행
- Market State: NORMAL | KOSPI: 6,599
- CB Score: 16/100 (지속) — 리스크 회피 모드 유지

### 포트폴리오
- paper_portfolio: 자본 5,000,000 / 현금 0 / 포지션 2개
- root portfolio: 자본 0 / 현금 0 / 포지션 1개 (삼성부광 추정)
- 신규 진입 없음 (일요일, CB Score 낮음)

### 결론
- 주말 유지보수 모드 — 시스템 정상 작동 중이나 MetaClaw/WebUI 다운 상태
- 다음 거래일(5/4 월) 전까지 MetaClaw/WebUI 복구 필요
- Python MCP 서버 CancelledError — 근본 원인 분석 필요
- 정보 변동 없음: 기록 완료
