
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

---

## 2026-05-03 (Sun) 16:02 — 오후 스냅샷 (Gateway 재시작 + OpenWebUI 복구)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 271100, 15:33 재시작) |
| Hermes CLI | tmux hermes 세션 유지 |
| Jongdari 배틀루프 | 정상 (PID 784, proc=2, 62h 가동) |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| OpenWebUI | ✅ **복구됨** (PID 273200, port 3000, 16:02 재시작) |
| MetaClaw | ❌ 다운 (port 30000 미청취) |
| MCP 서버 8개 | 모두 정상 (15:31 Gateway nuke 후 재시작) |
| 메모리 | 2,092MB / 7,748MB (27%) |
| 디스크 | 2% |

### 포트폴리오
- (주말 — 데이터 미갱신, 이전 스냅샷 참조)
- 현금: 4,349,470원 추정

### Macro
- CB Score: 16/100 (극단 공포 지속) | KOSPI 1M +20.4% | Vol 3.7%
- WTI: $102 | USD/KRW: ₩1,471
- Market State: NORMAL | KOSPI 3일 +1.90%

### AI Council
- 나우로보틱스(459510.KQ): HOLD(신뢰도 14%) — 기술적:HOLD(50%) / 뉴스:HOLD(50%) / 리스크:SELL(30%)
- 성우(458650.KQ): HOLD(신뢰도 15%) — 기술적:HOLD(60%) / 뉴스:HOLD(50%) / 리스크:HOLD(40%)
- Deep Dive 사이클 정상: 1분 간격 15개 코스닥 종목 순환

### 이슈
1. Gateway 15:33 재시작 (MCP 서버 전면 재시작 동반) — 약 1시간 다운
2. OpenWebUI 자동 복구됨 (16:02 재시작 감지)
3. MetaClaw 여전히 다운 — 수동 복구 필요
4. MCP 서버 중복: antigravity/vscode/docker/obsidian/anythingllm/googledrive 각 2개 인스턴스 (이전 + 신규) — 부하 없음
5. 다음 거래일 5/4(월) 오전 9시 개장

---

## 2026-05-04 (Mon) 00:01 — 새벽 스냅샷 (거래일 D-DAY)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 297188, May03 15:33 구동, 8.5h 가동) |
| Hermes CLI | tmux hermes 세션 유지 (May02~) |
| Jongdari 배틀루프 | 정상 (PID 784, May02~, 46h+ 가동) |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| OpenWebUI | ✅ 정상 (port 3000, 200 응답) |
| MetaClaw | ❌ 다운 (port 30000 미청취, 프로세스 없음) |
| MCP 서버 8종 | 정상 (uvx 2 + Python 6) — **단, 18개 인스턴스 중복** (이전 9 + 신규 9) |
| 메모리 | 2,155MB / 7,748MB (28%) |
| 디스크 | 2% |

### 포트폴리오 (주말 데이터 기준)
- **삼성부광(014950.KQ)**: 34주, previousClose 9,920원 (estimated cost 10,040원, 약 -1.2%)
- **나우로보틱스(473980.KQ)**: 10주, previousClose 17,970원 (cost 30,550원 → 약 -41%)
- **현금**: 4,349,470원 추정
- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개

### Macro
- KOSPI: 6,598.87 (4/30 종가) | KOSDAQ: 1,192.35
- WTI: $101.94 | USD/KRW: ₩1,471.22
- 주말 데이터 미갱신, 5/4(월) 9시 개장 시 실시간 반영 예정

### 📌 오늘(5/4 월) 주요 체크포인트
1. **장 개시 모니터링**: KOSPI 6,600선 유지 여부, 삼성부광 9,400원 지지선
2. **나우로보틱스 급락 심화**: cost 대비 -41%, 손절 판단 필요
3. **MetaClaw 복구**: 24h+ 다운 상태, 재설치/재시작 필요
4. **MCP 서버 중복**: 18개 인스턴스 (정상 8개 × 2 set) — 리소스 영향은 미미하나 추후 정리
5. **CB Score**: 16/100 (극단 공포, 지속) — 신규 진입 보류

### 이슈
- MetaClaw가 토요일 이후 계속 다운 — keepalive 3회 실패 후 BULLETPROOF 모드로 복구 루프 중이었으나 현재 프로세스 자체 없음
- OpenWebUI는 16:02 재시작 후 정상 복구
- MCP 서버 중복 이슈 지속 (18개 > 정상 8개)
- 오늘 9시 장 개시 전까지 MetaClaw 복구 시도 필요
