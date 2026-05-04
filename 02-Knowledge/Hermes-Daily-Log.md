
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

---

## 2026-05-04 (Mon) 04:01 — 장 개시 전 새벽 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 316995, May03 15:33 KST~, 12h+ 가동) |
| Hermes CLI | tmux hermes 세션 유지 (May02~) |
| Jongdari 배틀루프 | ⚠️ PID 712, yfinance 014950/459510 "possibly delisted" 오류 반복 |
| OpenWebUI | ✅ 정상 (PID 319500, port 3000, 방금 keepalive가 재시작) |
| MetaClaw | ❌ **다운** (port 30000 미청취, 프로세스 없음) |
| Hermes WebUI | ⚠️ port 8642 Gateway는 listen중이나 404 응답 |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| keepalive v7 | ✅ BULLETPROOF — 2개 프로세스 정상 작동 |
| 메모리 | 2,126MB / 7,748MB (27%) |
| 디스크 | 2% |

### 🚨 Critical: yfinance KOSPI/KOSDAQ 종목 "possibly delisted" 오류
- **삼성부광(014950.KS)**와 **나우로보틱스(459510.KS)** 모두 yfinance에서 `"No data found, symbol may be delisted"` 오류
- 종가 데이터(5d)를 전혀 가져오지 못함 — 이전 **014950.KQ** 티커 변환(→ .KS)에 실패한 것으로 보임
- `473980.KS` (나우로보틱스 실제 티커)도 동일 패턴 확인 필요
- 배틀루프가 사실상 데이터 없는 상태로 반복 루프 중 → **수동 티커 검증 및 수정 필요**

### 포트폴리오
- **삼성부광(014950.KQ/KS)**: 34주, 데이터 미갱신 (yfinance 오류로 previousClose 미확인)
- **나우로보틱스(459510.KQ → 473980.KQ?)**: 10주, cost 30,550원, 데이터 미갱신
- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
- **현금**: 4,349,470원 추정

### Macro (4/30 종가 기준, 장 개시 전)
| 지표 | 값 |
|:-----|:----|
| KOSPI | 6,598.87 (4/30 종가, 전일대비 -1.38%) |
| KOSDAQ | 1,192.35 (4/30 종가, 전일대비 -2.29%) |
| CB Score | 16/100 — 극단 공포 지속 |
| 장 개시 | **5/4(월) 09:00 KST** — 약 5시간 후 |

### 🎯 오늘(5/4 월) 체크포인트
1. **yfinance 티커 문제**: 014950.KS 대신 014950.KQ 복원 또는 Yahoo Finance 티커 확인 (Yahoo는 .KQ 접미사 사용)
2. **나우로보틱스 티커 실제 확인**: 459510은 코스닥 신규상장 (2025~) — Yahoo에 473980.KQ로 등록되어 있을 가능성
3. **MetaClaw 복구**: 48h+ 다운 상태 — 수동 개입 필요
4. **장 개시 모니터링**: 09:00 KOSPI/KOSDAQ 오프닝, 삼성부광 9,400원 지지선
5. **CB Score 16**: 극단 공포 — 신규 진입 보류

### 알려진 문제
- MetaClaw 다운 (48h+)
- yfinance 티커 오류 → 포트폴리오 가치 계산 불가
- MCP 서버 18개 인스턴스 중복 (정상 8set × 2)
- Gateway port 8642 404 (API server 연결됨 상태이나 라우트 미설정)
- Hermes WebUI (port 8648) 미작동

---

## 2026-05-04 (Mon) 08:00 — 개장 전 아침 스냅샷 (거래일 D-DAY, 1시간 전)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 332941, 06:33 재시작, 1.5h 가동) |
| Hermes CLI | tmux hermes 세션 유지 (May02~) |
| Jongdari 배틀루프 | ✅ 정상 (PID 784, May02~, 79h+ 가동) |
| OpenWebUI | ⚠️ 프로세스 기동됨 (PID 338471, 08:00) but port 3000 미청취 |
| MetaClaw | ❌ **72h+ 다운** (port 30000, 프로세스 없음) |
| MCP 서버 | 8종 정상 (18개 인스턴스 중복 지속) |
| 메모리 | 2,164MB / 7,748MB (28%) |
| 디스크 | 2% |
| WSL Uptime | 54.9h |

### 📊 Macro (4/30~5/3 종가)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | 6,598.87 (4/30) | 전주대비 +1.90% |
| KOSDAQ | 1,192.35 (4/30) | 전주대비 -0.96% |
| WTI | **$100.96** (5/3) | ⚠️ $100선 임박 |
| USD/KRW | ₩1,471.22 (5/2) | 안정적 |
| CB Score | 16/100 | 극단 공포 지속 |

### 포트폴리오
- **삼성부광(014950.KQ)**: 34주 @9,710원 (cost 10,040원, -3.29%)
- **나우로보틱스(473980.KQ)**: 10주 @17,650원 (cost 30,550원, **-42.2%**)
- **현금**: 4,349,470원 추정
- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개

### 🚨 주요 포인트
1. **나우로보틱스 -42.2%**: 473980.KQ(Yahoo 정식 티커) 17,650원 확인. 459510.KQ는 Yahoo 미등록. cost 대비 -42.2%로 손절 기준 초과.
2. **WTI $100.96**: 전주 고점 $106.88에서 $6 하락. $100 이탈 시 CRISIS MODE 전환 가능.
3. **MetaClaw 72h+ 다운**: keepalive 3회 실패 후 프로세스 자체 없음. 수동 복구 필요.
4. **OpenWebUI 재기동 중**: 08:00 keepalive가 시작, 개장 전까지 정상화 예상.
5. **yfinance 티커 확정**: 014950.**KQ**=9,710원 정상, 473980.**KQ**=17,650원 정상. 459510 → 473980 수정 필요.

### 🎯 개장 체크리스트 (1시간 후 09:00)
- [ ] KOSPI 6,600선 유지 여부
- [ ] 삼성부광 9,400원 지지선 모니터링
- [ ] 나우로보틱스 손절/보유 판단 (-42.2%)
- [ ] WTI $100선 이탈 감시
- [ ] Jongdari 티커 473980.KQ로 수정
- [ ] MetaClaw 복구 시도

---

## 2026-05-04 (Mon) 16:30 — 장 마감 스냅샷 (사상 최고치: KOSPI 6,936.99)

### 🏆 시장 요약 (5/4 월 거래일)

| 지표 | 값 | 변동 |
|:-----|:----|:------|
| KOSPI 종가 | **6,936.99** | **+338.12p (+5.12%)** — 사상 최초 6,900선 돌파 |
| KOSDAQ 종가 | ~1,213.74 | +21.39p (+1.79%) |
| USD/KRW | 1,462.8 | **↓20.5원** (원화 급강세) |
| WTI | $100.96 (5/3) | $100선 유지 |
| CB Score | 16→? → 극단 공포 → **5%↑에도 공포 유지 (추정)** |

- **외국인 순매수**: 3.2조원 / **기관 순매수**: 1.9조원 / 개인 순매도: 5.1조원
- SK하이닉스 **시총 1,000조 돌파** (최초), 삼성전자와 '1000조 클럽' 2개
- SK하이닉스 +11.9%, 삼성전자 +4.1%, 삼성전자우 +5.9%, SK스퀘어 +14.4%
- **코스피 4월 한 달 +30.6%** — 세계 최고 월간 상승률

### 시스템 현황

| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 378667, 14:30 chat 세션) |
| Hermes CLI | tmux hermes 세션 유지 (May02~) |
| Jongdari 배틀루프 | ✅ PID 784 (May02~, 87h+ 가동) |
| tmux 세션 | hermes / hermes-mcp / jongdari / **cowagent** (신규) 각 1개 |
| OpenWebUI | ✅ 정상 (PID 371246, port 3000, 200 OK) |
| MetaClaw | ❌ **~96h+ 다운** (port 30000 미청취, keepalive에서 permanently skipped) |
| keepalive v7.1 | ✅ BULLETPROOF — 정상 작동 |
| MCP 서버 8종 | 정상 (18개 인스턴스 중복) |
| 메모리 | 4,322MB / 7,748MB (56% — OpenWebUI 사용량 포함) |
| 디스크 | 2% |
| WSL Uptime | 63h+ |
| Windows 전원 | NEVER SLEEP 설정 유지 |

### 포트폴리오

- **삼성부광(014950.KQ)**: 34주 @9,710원 추정 (cost 10,040원) → 장중 KOSPI 5%↑로 반등 가능
- **나우로보틱스(473980.KQ)**: 10주 @17,650원 추정 (cost 30,550원, **-42.2%**) — 지속적 손실
- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
- **현금**: 4,349,470원 추정

### 🚨 주요 이슈

1. **🔴 MetaClaw ~96h+ 다운**: keepalive v7.1에서 `permanently skipped` 처리 — 복구 시도 없이 지속적 생략 중
2. **🔴 MCP Python 서버 중복 (18개)**: 6개 Python MCP 서버 × 3세트 (PID 472~482 → 256104~256114 → 378710~378720)
3. **🔴 cowagent session 등장**: tmux에 `cowagent` 세션 생성됨 (16:20) — 정체 확인 필요
4. **🟡 DingTalk 인증 실패**: cowagent 세션 로그에서 `[authFailed] 鉴权失败` 반복 — DingTalk 채널 토큰 문제
5. **🟡 Gateway port 8642 404**: Hermes WebUI API 미연결
6. **✅ yfinance 티커**: 014950.KQ / 473980.KQ 정상 확인 — 459510.KQ→473980.KQ 수정 완료

### 배운 점

- KOSPI가 단기간에 6,600→6,936으로 5.12%↑ 폭등, 7,000선 눈앞 — AI 반도체 밸류체인 멜트업
- USD/KRW 1,462.8로 **20.5원 급락** (원화 강세) — 외국인 자금 유입에 따른 강달러 완화
- MetaClaw는 keepalive v7.1에서 permanently skipped — 수동 복구 외에는 자동화 불가
- cowagent 세션 + DingTalk authFailed 로그 — 새로운 에이전트가 DingTalk 채널 연결 시도 중?

### 📋 내일(5/5 화) 할 일

- [ ] 삼성부광 9,400원 지지선 재확인 (KOSPI 6,936 상승 반영)
- [ ] 나우로보틱스 손절/재평가: cost 대비 -42.2%, KOSPI 급등도 못 따라옴
- [ ] WTI $100선 모니터링 (5/3 $100.96) — 이탈 시 CRISIS MODE
- [ ] MetaClaw 수동 복구 시도 (keepalive bypass)
- [ ] cowagent session 정체 확인 및 DingTalk authFailed 해결
- [ ] MCP 서버 중복 인스턴스 정리
- [ ] Hermes WebUI (port 8642/8648) 복구

## 2026-05-04 (Mon) 17:00 — Brain Sync

### 수집 결과
| 항목 | 발견 | 저장 | 중복 |
|:-----|:----:|:----:|:----:|
| arXiv 논문 | 12 | 0 | 12 |
| GitHub 트렌딩 | 10 | 0 | 5 |

→ 신규 콘텐츠 없음. 82개 파일이 16:00 배치로 업데이트됨.

### Vault 핵심 콘텐츠 요약
1. **Hermes 진화 전략 보고서** (414줄) — MCP 통합 #1, 멀티-에이전트, 의미론적 메모리 3대 업그레이드
2. **CowAgent 기술 분석** — Dream Distillation, 하이브리드 메모리 검색 이식 가능
3. **GitHub 지식허브** — HIVE(10K⭐/102 MCP tools), CCXT(42K⭐), nexu-io/open-design(20.5K⭐)
4. **arXiv** — RunAgent, LLM procedural execution, Affordance Agent Harness, RAG security

### Vault 통계
- 전체: 118개 문서 (AI_Agents 13, LLM 31, Agent_LLM 5, MCP 리포트 33)

---

## 2026-05-04 (Mon) 17:20 — Tech Scavenger Scan

### 📡 수집 결과 (15:20 최초 실행, 38개 신규 저장)

| 소스 | 수집 |
|:----|:----:|
| GitHub 트렌딩 | 30개 (저장: 17개) |
| arXiv 논문 | 21개 (저장: 14개) |
| HuggingFace Daily Papers | 10개 (저장: 1개) |
| **신규 저장 합계** | **38개** |
| 16:20/17:20 재실행 | 0개 신규 (중복 스킵) |

### 🔥 주목할 만한 발견

**헤르메스 즉시 적용 가능:**

1. **affaan-m/everything-claude-code** (⭐172K) — 완전범용 Agent Harness. Instincts(능동행동), 메모리 아키텍처, 시큐리티 모델이 Hermes의 자가발전 시스템과 유사한 패턴. `instincts` 시스템 → Hermes의 proactive behavior와 mapping 가능

2. **ComposioHQ/awesome-claude-skills** (⭐57K) — Claude Skills 생태계 큐레이션. MCP 서버 설정, Skill 패턴, 프롬프트 전략 추출 가능

3. **wshobson/agents** (⭐34K) — Claude Code용 멀티-에이전트 오케스트레이션. subtask 조정 패턴 참고

4. **shareAI-lab/learn-claude-code** (⭐57K) — bash 기반 미니멀 Agent Harness. Hermes의 tool loop 코어 프리미티브 이해에 유용

**아카이브 논문 (High Relevance):**

5. **Affordance Agent: Verification-Gated Skill Orchestra** — OpenAI/DeepMind 계열. Skill 실행 전 verification gate(신뢰도 임계값)로 오류 캐스케이드 방지. Hermes tool loop에 `confidence gate` 도입 가능

6. **RunAgent: Constraint-Guided NL Plan Execution** — Plan step 추적 + constraint (rubric) 기반 실행. Hermes plan-following 강화에 적용

7. **Persistent Visual Memory** — Visual Signal Dilution 문제 해결을 위한 영구 메모리. Hermes의 long agentic chain에서 context dilution 방지 패턴

8. **Themis: Multilingual Code Reward Model** — 정확성+효율성+스타일+안전성 다중 평가. Hermes 코드 생성 self-critique 용도

**보안 경고:**

9. **When RAG Chatbots Expose Their Backend** — RAG 시스템 백엔드 노출 및 PII 유출 사례 연구. Hermes의 웹/채널 인터페이스에 적용되는 보안 교훈

### 📋 Action Items

- [ ] `affaan-m/everything-claude-code` instincts architecture → Hermes self-evolving 시스템과 비교/이식 검토
- [ ] `awesome-claude-skills` 저장소 크롤링하여 MCP server config + skill 패턴 추출
- [ ] Affordance Agent verification gate → Hermes tool loop에 도입 가능성 평가
- [ ] RAG 보안 리뷰: Hermes Telegram/API 인터페이스 취약점 진단

---

## 2026-05-04 (Mon) 21:05 — 저녁 스냅샷 (MetaClaw 복구, 장 마감 후)

### 시스템 현황

| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 404633, 15:32~, 6h+ 가동) |
| Hermes CLI | tmux hermes 세션 유지 (May02~) |
| Jongdari 배틀루프 | ✅ 정상 (PID 784, May02~, **91h+ 가동**) |
| OpenWebUI | ✅ 정상 (PID 371246, port 3000) |
| MetaClaw | ✅ **복구됨** (PID 460779, port 30000, 18:32 기동) — ~96h 다운 후 최초 복구 |
| CowAgent/Vite | ✅ port 5173, OpenDesign dev server |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| MCP 서버 | 8종 정상 (중복 18개 인스턴스 지속) |
| 메모리 | 4,700MB / 7,748MB (61%) — OpenWebUI + MetaClaw + CowAgent 부하 |
| 디스크 | 2% |
| WSL Uptime | **2d 20h** |

### 🔔 MetaClaw 복구 경과
- **18:32** MetaClaw `skills_only` 모드로 기동 성공 (port 30000 listen)
- keepalive v7.1에서 `permanently skipped` 상태였으나 수동 기동으로 복구
- 이전: 토요일경 ~96h+ 크래시 후 지속적 기동 실패
- 현재: 정상 작동 확인

### 시장 (장 마감, 5/4 월)
- KOSPI: **6,936.99** (+5.12%, 사상 최고) | KOSDAQ: ~1,213.74 (+1.79%)
- USD/KRW: 1,462.8 (원화 강세)
- 장 마감 후 추가 변동 없음

### 포트폴리오 (데이터 미갱신, 장 마감 기준)
- 삼성부광(014950.KQ): 34주, 전일종가 9,710원 — KOSPI 5%↑ 반영 시 반등 예상
- 나우로보틱스(473980.KQ): 10주, cost 대비 -42.2% 지속
- 현금: 4,349,470원 추정

### 지속적 이슈
- MCP 서버 18개 인스턴스 중복 (정상 8set × 2~3) — 리소스 영향 미미
- Gateway port 8642 404 (Hermes WebUI API 미연결)
- 나우로보틱스 -42.2% 손절 판단 미결
- MetaClaw `skills_only` 모드로 기동 — full mode 복구 여부 확인 필요

## 2026-05-05 (Tue) 04:05 — Brain Sync + 시장 점검 (어린이날 휴장)

### Brain Sync
| 항목 | 상태 |
|:-----|:------|
| arXiv | 12 papers found → **0 new** (all duplicates) |
| GitHub Trending | 10 repos → **0 new** (4 duplicates skipped) |
| 전체 기술 문서 | **129개** 유지 |

### 시장 현황 (5/4 마감 기준, 오늘 5/5 어린이날 휴장)
- **KOSPI**: **6,936.99** (+5.12% 사상 최고!) — wiki에 미반영 (마지막 데이터 4/30 6,598.87)
- **KOSDAQ**: **1,213.74** (+1.79%)
- **WTI**: **$105.26** (+3.26%, $100선 확실 방어)
- **USD/KRW**: **1,476.10** (원화 소폭 약세, 1,480 미만)

### 포트폴리오
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040 → 9,540원 (-4.98%) | 🚨 **±3% 초과 — 9,400 지지선 근접** |
| 나우로보틱스(459510.KQ) | 10주 @30,550 → ~29,950 (-1.96%) | 🟡 4/30 상한가 이후 조정 |
| 총 평가 | 약 4,973,330원 (-0.53%) | 🟢 소폭 손실 |

### 알림
1. 🔴 **삼성부광 -4.98%** — -3% 임계치 초과, 9,400원 지지선 관찰 필요
2. 🟢 **KOSPI 5/4 +5.12% 사상 최고** — 하지만 wiki KOSPI 페이지 미갱신 (4/30 6,598.87로 표시)
3. 🟢 **WTI $105.26** — $100선 방어, 고유가 리스크 완화
4. 🟢 **USD/KRW 1,476** — 1,480 미만 안정
5. 🟡 **나우로보틱스** — 5/4 장중 29,950원까지 하락, -2% 조정

---

## 2026-05-05 (Tue) 04:45 — 어린이날 휴장일 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway (PID 301) | 정상, 포트 8642 |
| Open WebUI (PID 785) | 정상, 포트 3000 |
| Hermes CLI (PID 789) | tmux hermes 세션 유지 |
| Jongdari 배틀루프 (PID 2811) | nexus_orchestrator live 모드 실행 |
| MCP 서버 | Filesystem(4개), Fetch(3개), Time(2개), Hermes AI — 모두 정상 |
| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
| 메모리 | 3,064MB / 7,748MB (39.5%) |

### 시장 현황 (5/4 종가 기준, 오늘 5/5 어린이날 휴장)
- **KOSPI**: NaN (5/4) — 5/4 장 마감 데이터 미갱신, 4/30 6,598.87
- **KOSDAQ**: 마지막 4/30 1,192.35
- **WTI**: **$105.64** (5/4 종가, +3.6%, $100선 확고 방어)
- **USD/KRW**: 1,474.63 (5/4 종가, 안정적)

### 포트폴리오 (5/4 종가 기준)
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040 → 9,540원 (-4.98%) | 🚨 **9,400 지지선 근접, 주시 필요** |
| 나우로보틱스(459510.KQ) | 10주 @30,550 → ~29,950 (-1.96%) | 🟡 조정 진행 중 |
| 총 평가 | 약 4,973,330원 (-0.53%) | 🟢 |

### Evo 리포트 (04:30 사이클)
- 총 스캔 문서: 72개 (전 카테고리)
- 흡수 누적: 14개 문서, 9개 스킬
- 신규: petdex (SKIPPED — 실용성 부족)
- 전략적 격차 8개 유지 (MCP 통합 #1 과제)
- MCP 파이프라인 5개 서버 정상 작동

### 금일 이슈
1. 🔴 **오늘 휴장** — 5/5(화) 어린이날, 다음 거래일 5/6(수)
2. 🔴 **삼성부광 -4.98%** — 9,400원 지지선 관찰 지속, 9,000원대 추가 하락 시 손절 검토
3. 🟢 **WTI $105.64** — 고유가 안정화, 인플레 리스크 완화
4. 🟡 **0515(KR) 마감 후** — 5/6 개장 전까지 특이 동향 없음
