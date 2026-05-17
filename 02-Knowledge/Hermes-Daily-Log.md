     1|     1|
     2|     2|## 2026-05-03 (Sun) 04:01 — 자동 주말 스냅샷
     3|     3|
     4|     4|### 시스템 현황
     5|     5|| 항목 | 상태 |
     6|     6||:-----|:------|
     7|     7|| Hermes Gateway | 정상 (PID 186539, 03:33 재시작) |
     8|     8|| Hermes CLI | tmux hermes 세션 유지 |
     9|     9|| Jongdari 배틀루프 | 정상 (PID 784, 1개 세션) |
    10|    10|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
    11|    11|| MCP 서버 8개 | 모두 정상 |
    12|    12|| 메모리 | 1,926MB / 7,748MB (24.9%) |
    13|    13|
    14|    14|### 포트폴리오
    15|    15|- 삼성부광(014950.KQ): 34주 @10,040원 -> 9,710원 (-3.29%)
    16|    16|- 나우로보틱스(459510.KQ): 10주 @30,550원 -> 미갱신
    17|    17|- 현금: 4,349,470원 | 총 평가: 약 4,985,110원 (-0.30%)
    18|    18|
    19|    19|### Macro
    20|    20|- KOSPI: 6,598.87 (3d +1.9%) | KOSDAQ: 1,192.35
    21|    21|- WTI: $101.94 ($100+ 지속) | USD/KRW: 1,471.22 (안정)
    22|    22|
    23|    23|### 이슈
    24|    24|- 삼성부광 -3.29% 임박, 9,400원 지지선 관찰
    25|    25|- 나우로보틱스 current_price 미갱신
    26|    26|- Gateway 03:33 재시작 (정기 재시작)
    27|    27|- Jongdari 단일 세션 유지, 중복 해소
    28|    28|- MCP 서버 전원 정상
    29|    29|
    30|    30|### 2026-05-03 (Sun) 05:31 — Brain Sync 스냅샷 (일요일)
    31|    31|- **변경 감지**: 0개 파일 (주말 변동 없음)
    32|    32|- **시장**: KOSPI 6,598.87 / KOSDAQ 1,192.35 (장 마감)
    33|    33|- WTI $101.94 (↓$3.13, $100 하향 임박) | USD/KRW 1,471.22 (원화 강세)
    34|    34|- **포트폴리오**: 삼성부광 -3.59% / 나우로보틱스 flat
    35|    35|- **결론**: 새로운 정보 없음. 다음 거래일: 5/4(월)
    36|    36|
    37|    37|## 2026-05-03 (Sun) 08:00 — 일요일 아침 스냅샷
    38|    38|
    39|    39|### 시스템 현황
    40|    40|| 항목 | 상태 |
    41|    41||:-----|:------|
    42|    42|| Hermes Gateway | 정상 (PID 201039, 06:33 nuke 후 재시작) |
    43|    43|| Hermes CLI | tmux hermes 세션 유지 |
    44|    44|| Jongdari 배틀루프 | 정상 (proc=2, CB Score 16/100) |
    45|    45|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
    46|    46|| OpenWebUI | 정상 (port 3000) |
    47|    47|| MetaClaw | 정상 (port 30000) |
    48|    48|| 메모리  | 2,060MB / 7,748MB (27%) |
    49|    49|| 디스크 | 2% |
    50|    50|
    51|    51|### 포트폴리오 (paper_portfolio)
    52|    52|- 자본: 5,000,000원 | 현금: 0 | 포지션: 2개
    53|    53|- KOSPI: 6,599 | KOSPI 1M 모멘텀: +20.4%
    54|    54|
    55|    55|### 🚨 복구 기록: 06:30~06:33 KeepAlive v7
    56|    56|- 06:30 **SLEEP_DETECTED** (gap ~2.4h) → **MetaClaw 3회 재시작 실패** → **Hermes-WebUI 3회 재시작 실패**
    57|    57|- 06:33 **Nuke & Restart**: Gateway 재시작 → 08:01 keepalive v7("BULLETPROOF") 전환
    58|    58|- **Windows 전원 설정 → NEVER SLEEP** (재발 방지)
    59|    59|- 현재 08:00 모든 서비스 정상 복구 완료
    60|    60|
    61|    61|### 배틀루프 동향
    62|    62|- KBI메탈(024840.KQ), 나우로보틱스(459510.KQ) 분석 중
    63|    63|- 시장 Intel: 뉴스 8건, 모멘텀 5개, Market State: NORMAL
    64|    64|- CB Score 16/100 (낮음, 리스크 회피 모드) — 단기 추세 +20.4%에도 불구하고 변동성 3.7%, 오일/환율 리스크 반영
    65|    65|
    66|    66|### 이슈
    67|    67|- 삼성부광 9,400원 지지선 관찰 지속 (일요일 미갱신)
    68|    68|- 나우로보틱스 현재가 미갱신 상태
    69|    69|- CB Score 16/100 — 낮은 신호로 당분간 진입 없음
    70|    70|- 다음 거래일: 5/4(월) 장 개시
    71|    71|
    72|    72|## 2026-05-03 (Sun) 12:01 — 점심 스냅샷
    73|    73|
    74|    74|### 시스템 현황
    75|    75|| 항목 | 상태 |
    76|    76||:-----|:------|
    77|    77|| Hermes Gateway | 정상 (PID 216671, 09:33 재시작) |
    78|    78|| Hermes CLI | tmux hermes 세션 유지 |
    79|    79|| Jongdari 배틀루프 | 정상 (proc=2, CB Score 16/100) |
    80|    80|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
    81|    81|| OpenWebUI | ❌ 다운 (keepalive 3회 실패 후 복구 안 됨) |
    82|    82|| MetaClaw | ❌ 다운 (keepalive 3회 실패 후 복구 안 됨) |
    83|    83|| MCP 서버 9개 | 정상 (time/fetch/filesystem + 6 Python-based) |
    84|    84|| 메모리 | 2,137MB / 7,748MB (28%) |
    85|    85|| 디스크 | 2% |
    86|    86|| KeepAlive v7 | BULLETPROOF 모드, 12:02 재시작됨 |
    87|    87|
    88|    88|### 🔴 지속적 이슈: MetaClaw & OpenWebUI 다운
    89|    89|- 09:30 keepalive v7 재시작 후 MetaClaw 3회 재시작 실패 → CRITICAL
    90|    90|- OpenWebUI도 동일 패턴으로 3회 실패 → CRITICAL
    91|    91|- BULLETPROOF 모드로 keepalive 재시작 루프 중 (12:02 최신 기동)
    92|    92|- Windows NEVER SLEEP 설정 이후에도 재발 — 근본 원인은 WSL 환경 내 서비스 자체 기동 실패로 추정
    93|    93|
    94|    94|### 🔴 MCP Python 서버 CancelledError 지속 (1,658회)
    95|    95|- antigravity/vscode/docker/obsidian/anythingllm/googledrive — 6개 Python 기반 MCP 서버
    96|    96|- Gateway 재시작 시 `python3` subprocess가 CancelledError로 연결 실패
    97|    97|- `uvx` 기반 MCP(time/fetch)와 Node 기반(filesystem)은 정상
    98|    98|- **원인 추정**: Gateway의 MCP 서버 기동 타이밍 이슈 — Python 서버가 준비되기 전에 타임아웃
    99|    99|
   100|   100|### 배틀루프 동향
   101|   101|- 30분 간격으로 KOSDAQ 종목 Deep Dive 진행 중 (주말 모드)
   102|   102|- 11:30 이후 분석: 진바이오텍, 엔젤로보틱스, 덴티스, 케이씨티, 참좋은여행
   103|   103|- Market State: NORMAL | KOSPI: 6,599
   104|   104|- CB Score: 16/100 (지속) — 리스크 회피 모드 유지
   105|   105|
   106|   106|### 포트폴리오
   107|   107|- paper_portfolio: 자본 5,000,000 / 현금 0 / 포지션 2개
   108|   108|- root portfolio: 자본 0 / 현금 0 / 포지션 1개 (삼성부광 추정)
   109|   109|- 신규 진입 없음 (일요일, CB Score 낮음)
   110|   110|
   111|   111|### 결론
   112|   112|- 주말 유지보수 모드 — 시스템 정상 작동 중이나 MetaClaw/WebUI 다운 상태
   113|   113|- 다음 거래일(5/4 월) 전까지 MetaClaw/WebUI 복구 필요
   114|   114|- Python MCP 서버 CancelledError — 근본 원인 분석 필요
   115|   115|- 정보 변동 없음: 기록 완료
   116|   116|
   117|   117|---
   118|   118|
   119|   119|## 2026-05-03 (Sun) 16:02 — 오후 스냅샷 (Gateway 재시작 + OpenWebUI 복구)
   120|   120|
   121|   121|### 시스템 현황
   122|   122|| 항목 | 상태 |
   123|   123||:-----|:------|
   124|   124|| Hermes Gateway | 정상 (PID 271100, 15:33 재시작) |
   125|   125|| Hermes CLI | tmux hermes 세션 유지 |
   126|   126|| Jongdari 배틀루프 | 정상 (PID 784, proc=2, 62h 가동) |
   127|   127|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
   128|   128|| OpenWebUI | ✅ **복구됨** (PID 273200, port 3000, 16:02 재시작) |
   129|   129|| MetaClaw | ❌ 다운 (port 30000 미청취) |
   130|   130|| MCP 서버 8개 | 모두 정상 (15:31 Gateway nuke 후 재시작) |
   131|   131|| 메모리 | 2,092MB / 7,748MB (27%) |
   132|   132|| 디스크 | 2% |
   133|   133|
   134|   134|### 포트폴리오
   135|   135|- (주말 — 데이터 미갱신, 이전 스냅샷 참조)
   136|   136|- 현금: 4,349,470원 추정
   137|   137|
   138|   138|### Macro
   139|   139|- CB Score: 16/100 (극단 공포 지속) | KOSPI 1M +20.4% | Vol 3.7%
   140|   140|- WTI: $102 | USD/KRW: ₩1,471
   141|   141|- Market State: NORMAL | KOSPI 3일 +1.90%
   142|   142|
   143|   143|### AI Council
   144|   144|- 나우로보틱스(459510.KQ): HOLD(신뢰도 14%) — 기술적:HOLD(50%) / 뉴스:HOLD(50%) / 리스크:SELL(30%)
   145|   145|- 성우(458650.KQ): HOLD(신뢰도 15%) — 기술적:HOLD(60%) / 뉴스:HOLD(50%) / 리스크:HOLD(40%)
   146|   146|- Deep Dive 사이클 정상: 1분 간격 15개 코스닥 종목 순환
   147|   147|
   148|   148|### 이슈
   149|   149|1. Gateway 15:33 재시작 (MCP 서버 전면 재시작 동반) — 약 1시간 다운
   150|   150|2. OpenWebUI 자동 복구됨 (16:02 재시작 감지)
   151|   151|3. MetaClaw 여전히 다운 — 수동 복구 필요
   152|   152|4. MCP 서버 중복: antigravity/vscode/docker/obsidian/anythingllm/googledrive 각 2개 인스턴스 (이전 + 신규) — 부하 없음
   153|   153|5. 다음 거래일 5/4(월) 오전 9시 개장
   154|   154|
   155|   155|---
   156|   156|
   157|   157|## 2026-05-04 (Mon) 00:01 — 새벽 스냅샷 (거래일 D-DAY)
   158|   158|
   159|   159|### 시스템 현황
   160|   160|| 항목 | 상태 |
   161|   161||:-----|:------|
   162|   162|| Hermes Gateway | 정상 (PID 297188, May03 15:33 구동, 8.5h 가동) |
   163|   163|| Hermes CLI | tmux hermes 세션 유지 (May02~) |
   164|   164|| Jongdari 배틀루프 | 정상 (PID 784, May02~, 46h+ 가동) |
   165|   165|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
   166|   166|| OpenWebUI | ✅ 정상 (port 3000, 200 응답) |
   167|   167|| MetaClaw | ❌ 다운 (port 30000 미청취, 프로세스 없음) |
   168|   168|| MCP 서버 8종 | 정상 (uvx 2 + Python 6) — **단, 18개 인스턴스 중복** (이전 9 + 신규 9) |
   169|   169|| 메모리 | 2,155MB / 7,748MB (28%) |
   170|   170|| 디스크 | 2% |
   171|   171|
   172|   172|### 포트폴리오 (주말 데이터 기준)
   173|   173|- **삼성부광(014950.KQ)**: 34주, previousClose 9,920원 (estimated cost 10,040원, 약 -1.2%)
   174|   174|- **나우로보틱스(473980.KQ)**: 10주, previousClose 17,970원 (cost 30,550원 → 약 -41%)
   175|   175|- **현금**: 4,349,470원 추정
   176|   176|- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
   177|   177|
   178|   178|### Macro
   179|   179|- KOSPI: 6,598.87 (4/30 종가) | KOSDAQ: 1,192.35
   180|   180|- WTI: $101.94 | USD/KRW: ₩1,471.22
   181|   181|- 주말 데이터 미갱신, 5/4(월) 9시 개장 시 실시간 반영 예정
   182|   182|
   183|   183|### 📌 오늘(5/4 월) 주요 체크포인트
   184|   184|1. **장 개시 모니터링**: KOSPI 6,600선 유지 여부, 삼성부광 9,400원 지지선
   185|   185|2. **나우로보틱스 급락 심화**: cost 대비 -41%, 손절 판단 필요
   186|   186|3. **MetaClaw 복구**: 24h+ 다운 상태, 재설치/재시작 필요
   187|   187|4. **MCP 서버 중복**: 18개 인스턴스 (정상 8개 × 2 set) — 리소스 영향은 미미하나 추후 정리
   188|   188|5. **CB Score**: 16/100 (극단 공포, 지속) — 신규 진입 보류
   189|   189|
   190|   190|### 이슈
   191|   191|- MetaClaw가 토요일 이후 계속 다운 — keepalive 3회 실패 후 BULLETPROOF 모드로 복구 루프 중이었으나 현재 프로세스 자체 없음
   192|   192|- OpenWebUI는 16:02 재시작 후 정상 복구
   193|   193|- MCP 서버 중복 이슈 지속 (18개 > 정상 8개)
   194|   194|- 오늘 9시 장 개시 전까지 MetaClaw 복구 시도 필요
   195|   195|
   196|   196|---
   197|   197|
   198|   198|## 2026-05-04 (Mon) 04:01 — 장 개시 전 새벽 스냅샷
   199|   199|
   200|   200|### 시스템 현황
   201|   201|| 항목 | 상태 |
   202|   202||:-----|:------|
   203|   203|| Hermes Gateway | ✅ 정상 (PID 316995, May03 15:33 KST~, 12h+ 가동) |
   204|   204|| Hermes CLI | tmux hermes 세션 유지 (May02~) |
   205|   205|| Jongdari 배틀루프 | ⚠️ PID 712, yfinance 014950/459510 "possibly delisted" 오류 반복 |
   206|   206|| OpenWebUI | ✅ 정상 (PID 319500, port 3000, 방금 keepalive가 재시작) |
   207|   207|| MetaClaw | ❌ **다운** (port 30000 미청취, 프로세스 없음) |
   208|   208|| Hermes WebUI | ⚠️ port 8642 Gateway는 listen중이나 404 응답 |
   209|   209|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
   210|   210|| keepalive v7 | ✅ BULLETPROOF — 2개 프로세스 정상 작동 |
   211|   211|| 메모리 | 2,126MB / 7,748MB (27%) |
   212|   212|| 디스크 | 2% |
   213|   213|
   214|   214|### 🚨 Critical: yfinance KOSPI/KOSDAQ 종목 "possibly delisted" 오류
   215|   215|- **삼성부광(014950.KS)**와 **나우로보틱스(459510.KS)** 모두 yfinance에서 `"No data found, symbol may be delisted"` 오류
   216|   216|- 종가 데이터(5d)를 전혀 가져오지 못함 — 이전 **014950.KQ** 티커 변환(→ .KS)에 실패한 것으로 보임
   217|   217|- `473980.KS` (나우로보틱스 실제 티커)도 동일 패턴 확인 필요
   218|   218|- 배틀루프가 사실상 데이터 없는 상태로 반복 루프 중 → **수동 티커 검증 및 수정 필요**
   219|   219|
   220|   220|### 포트폴리오
   221|   221|- **삼성부광(014950.KQ/KS)**: 34주, 데이터 미갱신 (yfinance 오류로 previousClose 미확인)
   222|   222|- **나우로보틱스(459510.KQ → 473980.KQ?)**: 10주, cost 30,550원, 데이터 미갱신
   223|   223|- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
   224|   224|- **현금**: 4,349,470원 추정
   225|   225|
   226|   226|### Macro (4/30 종가 기준, 장 개시 전)
   227|   227|| 지표 | 값 |
   228|   228||:-----|:----|
   229|   229|| KOSPI | 6,598.87 (4/30 종가, 전일대비 -1.38%) |
   230|   230|| KOSDAQ | 1,192.35 (4/30 종가, 전일대비 -2.29%) |
   231|   231|| CB Score | 16/100 — 극단 공포 지속 |
   232|   232|| 장 개시 | **5/4(월) 09:00 KST** — 약 5시간 후 |
   233|   233|
   234|   234|### 🎯 오늘(5/4 월) 체크포인트
   235|   235|1. **yfinance 티커 문제**: 014950.KS 대신 014950.KQ 복원 또는 Yahoo Finance 티커 확인 (Yahoo는 .KQ 접미사 사용)
   236|   236|2. **나우로보틱스 티커 실제 확인**: 459510은 코스닥 신규상장 (2025~) — Yahoo에 473980.KQ로 등록되어 있을 가능성
   237|   237|3. **MetaClaw 복구**: 48h+ 다운 상태 — 수동 개입 필요
   238|   238|4. **장 개시 모니터링**: 09:00 KOSPI/KOSDAQ 오프닝, 삼성부광 9,400원 지지선
   239|   239|5. **CB Score 16**: 극단 공포 — 신규 진입 보류
   240|   240|
   241|   241|### 알려진 문제
   242|   242|- MetaClaw 다운 (48h+)
   243|   243|- yfinance 티커 오류 → 포트폴리오 가치 계산 불가
   244|   244|- MCP 서버 18개 인스턴스 중복 (정상 8set × 2)
   245|   245|- Gateway port 8642 404 (API server 연결됨 상태이나 라우트 미설정)
   246|   246|- Hermes WebUI (port 8648) 미작동
   247|   247|
   248|   248|---
   249|   249|
   250|   250|## 2026-05-04 (Mon) 08:00 — 개장 전 아침 스냅샷 (거래일 D-DAY, 1시간 전)
   251|   251|
   252|   252|### 시스템 현황
   253|   253|| 항목 | 상태 |
   254|   254||:-----|:------|
   255|   255|| Hermes Gateway | ✅ 정상 (PID 332941, 06:33 재시작, 1.5h 가동) |
   256|   256|| Hermes CLI | tmux hermes 세션 유지 (May02~) |
   257|   257|| Jongdari 배틀루프 | ✅ 정상 (PID 784, May02~, 79h+ 가동) |
   258|   258|| OpenWebUI | ⚠️ 프로세스 기동됨 (PID 338471, 08:00) but port 3000 미청취 |
   259|   259|| MetaClaw | ❌ **72h+ 다운** (port 30000, 프로세스 없음) |
   260|   260|| MCP 서버 | 8종 정상 (18개 인스턴스 중복 지속) |
   261|   261|| 메모리 | 2,164MB / 7,748MB (28%) |
   262|   262|| 디스크 | 2% |
   263|   263|| WSL Uptime | 54.9h |
   264|   264|
   265|   265|### 📊 Macro (4/30~5/3 종가)
   266|   266|| 지표 | 값 | 비고 |
   267|   267||:-----|:----|:------|
   268|   268|| KOSPI | 6,598.87 (4/30) | 전주대비 +1.90% |
   269|   269|| KOSDAQ | 1,192.35 (4/30) | 전주대비 -0.96% |
   270|   270|| WTI | **$100.96** (5/3) | ⚠️ $100선 임박 |
   271|   271|| USD/KRW | ₩1,471.22 (5/2) | 안정적 |
   272|   272|| CB Score | 16/100 | 극단 공포 지속 |
   273|   273|
   274|   274|### 포트폴리오
   275|   275|- **삼성부광(014950.KQ)**: 34주 @9,710원 (cost 10,040원, -3.29%)
   276|   276|- **나우로보틱스(473980.KQ)**: 10주 @17,650원 (cost 30,550원, **-42.2%**)
   277|   277|- **현금**: 4,349,470원 추정
   278|   278|- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
   279|   279|
   280|   280|### 🚨 주요 포인트
   281|   281|1. **나우로보틱스 -42.2%**: 473980.KQ(Yahoo 정식 티커) 17,650원 확인. 459510.KQ는 Yahoo 미등록. cost 대비 -42.2%로 손절 기준 초과.
   282|   282|2. **WTI $100.96**: 전주 고점 $106.88에서 $6 하락. $100 이탈 시 CRISIS MODE 전환 가능.
   283|   283|3. **MetaClaw 72h+ 다운**: keepalive 3회 실패 후 프로세스 자체 없음. 수동 복구 필요.
   284|   284|4. **OpenWebUI 재기동 중**: 08:00 keepalive가 시작, 개장 전까지 정상화 예상.
   285|   285|5. **yfinance 티커 확정**: 014950.**KQ**=9,710원 정상, 473980.**KQ**=17,650원 정상. 459510 → 473980 수정 필요.
   286|   286|
   287|   287|### 🎯 개장 체크리스트 (1시간 후 09:00)
   288|   288|- [ ] KOSPI 6,600선 유지 여부
   289|   289|- [ ] 삼성부광 9,400원 지지선 모니터링
   290|   290|- [ ] 나우로보틱스 손절/보유 판단 (-42.2%)
   291|   291|- [ ] WTI $100선 이탈 감시
   292|   292|- [ ] Jongdari 티커 473980.KQ로 수정
   293|   293|- [ ] MetaClaw 복구 시도
   294|   294|
   295|   295|---
   296|   296|
   297|   297|## 2026-05-04 (Mon) 16:30 — 장 마감 스냅샷 (사상 최고치: KOSPI 6,936.99)
   298|   298|
   299|   299|### 🏆 시장 요약 (5/4 월 거래일)
   300|   300|
   301|   301|| 지표 | 값 | 변동 |
   302|   302||:-----|:----|:------|
   303|   303|| KOSPI 종가 | **6,936.99** | **+338.12p (+5.12%)** — 사상 최초 6,900선 돌파 |
   304|   304|| KOSDAQ 종가 | ~1,213.74 | +21.39p (+1.79%) |
   305|   305|| USD/KRW | 1,462.8 | **↓20.5원** (원화 급강세) |
   306|   306|| WTI | $100.96 (5/3) | $100선 유지 |
   307|   307|| CB Score | 16→? → 극단 공포 → **5%↑에도 공포 유지 (추정)** |
   308|   308|
   309|   309|- **외국인 순매수**: 3.2조원 / **기관 순매수**: 1.9조원 / 개인 순매도: 5.1조원
   310|   310|- SK하이닉스 **시총 1,000조 돌파** (최초), 삼성전자와 '1000조 클럽' 2개
   311|   311|- SK하이닉스 +11.9%, 삼성전자 +4.1%, 삼성전자우 +5.9%, SK스퀘어 +14.4%
   312|   312|- **코스피 4월 한 달 +30.6%** — 세계 최고 월간 상승률
   313|   313|
   314|   314|### 시스템 현황
   315|   315|
   316|   316|| 항목 | 상태 |
   317|   317||:-----|:------|
   318|   318|| Hermes Gateway | ✅ 정상 (PID 378667, 14:30 chat 세션) |
   319|   319|| Hermes CLI | tmux hermes 세션 유지 (May02~) |
   320|   320|| Jongdari 배틀루프 | ✅ PID 784 (May02~, 87h+ 가동) |
   321|   321|| tmux 세션 | hermes / hermes-mcp / jongdari / **cowagent** (신규) 각 1개 |
   322|   322|| OpenWebUI | ✅ 정상 (PID 371246, port 3000, 200 OK) |
   323|   323|| MetaClaw | ❌ **~96h+ 다운** (port 30000 미청취, keepalive에서 permanently skipped) |
   324|   324|| keepalive v7.1 | ✅ BULLETPROOF — 정상 작동 |
   325|   325|| MCP 서버 8종 | 정상 (18개 인스턴스 중복) |
   326|   326|| 메모리 | 4,322MB / 7,748MB (56% — OpenWebUI 사용량 포함) |
   327|   327|| 디스크 | 2% |
   328|   328|| WSL Uptime | 63h+ |
   329|   329|| Windows 전원 | NEVER SLEEP 설정 유지 |
   330|   330|
   331|   331|### 포트폴리오
   332|   332|
   333|   333|- **삼성부광(014950.KQ)**: 34주 @9,710원 추정 (cost 10,040원) → 장중 KOSPI 5%↑로 반등 가능
   334|   334|- **나우로보틱스(473980.KQ)**: 10주 @17,650원 추정 (cost 30,550원, **-42.2%**) — 지속적 손실
   335|   335|- **paper_portfolio**: 자본 5,000,000 / 현금 0 / 포지션 2개
   336|   336|- **현금**: 4,349,470원 추정
   337|   337|
   338|   338|### 🚨 주요 이슈
   339|   339|
   340|   340|1. **🔴 MetaClaw ~96h+ 다운**: keepalive v7.1에서 `permanently skipped` 처리 — 복구 시도 없이 지속적 생략 중
   341|   341|2. **🔴 MCP Python 서버 중복 (18개)**: 6개 Python MCP 서버 × 3세트 (PID 472~482 → 256104~256114 → 378710~378720)
   342|   342|3. **🔴 cowagent session 등장**: tmux에 `cowagent` 세션 생성됨 (16:20) — 정체 확인 필요
   343|   343|4. **🟡 DingTalk 인증 실패**: cowagent 세션 로그에서 `[authFailed] 鉴权失败` 반복 — DingTalk 채널 토큰 문제
   344|   344|5. **🟡 Gateway port 8642 404**: Hermes WebUI API 미연결
   345|   345|6. **✅ yfinance 티커**: 014950.KQ / 473980.KQ 정상 확인 — 459510.KQ→473980.KQ 수정 완료
   346|   346|
   347|   347|### 배운 점
   348|   348|
   349|   349|- KOSPI가 단기간에 6,600→6,936으로 5.12%↑ 폭등, 7,000선 눈앞 — AI 반도체 밸류체인 멜트업
   350|   350|- USD/KRW 1,462.8로 **20.5원 급락** (원화 강세) — 외국인 자금 유입에 따른 강달러 완화
   351|   351|- MetaClaw는 keepalive v7.1에서 permanently skipped — 수동 복구 외에는 자동화 불가
   352|   352|- cowagent 세션 + DingTalk authFailed 로그 — 새로운 에이전트가 DingTalk 채널 연결 시도 중?
   353|   353|
   354|   354|### 📋 내일(5/5 화) 할 일
   355|   355|
   356|   356|- [ ] 삼성부광 9,400원 지지선 재확인 (KOSPI 6,936 상승 반영)
   357|   357|- [ ] 나우로보틱스 손절/재평가: cost 대비 -42.2%, KOSPI 급등도 못 따라옴
   358|   358|- [ ] WTI $100선 모니터링 (5/3 $100.96) — 이탈 시 CRISIS MODE
   359|   359|- [ ] MetaClaw 수동 복구 시도 (keepalive bypass)
   360|   360|- [ ] cowagent session 정체 확인 및 DingTalk authFailed 해결
   361|   361|- [ ] MCP 서버 중복 인스턴스 정리
   362|   362|- [ ] Hermes WebUI (port 8642/8648) 복구
   363|   363|
   364|   364|## 2026-05-04 (Mon) 17:00 — Brain Sync
   365|   365|
   366|   366|### 수집 결과
   367|   367|| 항목 | 발견 | 저장 | 중복 |
   368|   368||:-----|:----:|:----:|:----:|
   369|   369|| arXiv 논문 | 12 | 0 | 12 |
   370|   370|| GitHub 트렌딩 | 10 | 0 | 5 |
   371|   371|
   372|   372|→ 신규 콘텐츠 없음. 82개 파일이 16:00 배치로 업데이트됨.
   373|   373|
   374|   374|### Vault 핵심 콘텐츠 요약
   375|   375|1. **Hermes 진화 전략 보고서** (414줄) — MCP 통합 #1, 멀티-에이전트, 의미론적 메모리 3대 업그레이드
   376|   376|2. **CowAgent 기술 분석** — Dream Distillation, 하이브리드 메모리 검색 이식 가능
   377|   377|3. **GitHub 지식허브** — HIVE(10K⭐/102 MCP tools), CCXT(42K⭐), nexu-io/open-design(20.5K⭐)
   378|   378|4. **arXiv** — RunAgent, LLM procedural execution, Affordance Agent Harness, RAG security
   379|   379|
   380|   380|### Vault 통계
   381|   381|- 전체: 118개 문서 (AI_Agents 13, LLM 31, Agent_LLM 5, MCP 리포트 33)
   382|   382|
   383|   383|---
   384|   384|
   385|   385|## 2026-05-04 (Mon) 17:20 — Tech Scavenger Scan
   386|   386|
   387|   387|### 📡 수집 결과 (15:20 최초 실행, 38개 신규 저장)
   388|   388|
   389|   389|| 소스 | 수집 |
   390|   390||:----|:----:|
   391|   391|| GitHub 트렌딩 | 30개 (저장: 17개) |
   392|   392|| arXiv 논문 | 21개 (저장: 14개) |
   393|   393|| HuggingFace Daily Papers | 10개 (저장: 1개) |
   394|   394|| **신규 저장 합계** | **38개** |
   395|   395|| 16:20/17:20 재실행 | 0개 신규 (중복 스킵) |
   396|   396|
   397|   397|### 🔥 주목할 만한 발견
   398|   398|
   399|   399|**헤르메스 즉시 적용 가능:**
   400|   400|
   401|   401|1. **affaan-m/everything-claude-code** (⭐172K) — 완전범용 Agent Harness. Instincts(능동행동), 메모리 아키텍처, 시큐리티 모델이 Hermes의 자가발전 시스템과 유사한 패턴. `instincts` 시스템 → Hermes의 proactive behavior와 mapping 가능
   402|   402|
   403|   403|2. **ComposioHQ/awesome-claude-skills** (⭐57K) — Claude Skills 생태계 큐레이션. MCP 서버 설정, Skill 패턴, 프롬프트 전략 추출 가능
   404|   404|
   405|   405|3. **wshobson/agents** (⭐34K) — Claude Code용 멀티-에이전트 오케스트레이션. subtask 조정 패턴 참고
   406|   406|
   407|   407|4. **shareAI-lab/learn-claude-code** (⭐57K) — bash 기반 미니멀 Agent Harness. Hermes의 tool loop 코어 프리미티브 이해에 유용
   408|   408|
   409|   409|**아카이브 논문 (High Relevance):**
   410|   410|
   411|   411|5. **Affordance Agent: Verification-Gated Skill Orchestra** — OpenAI/DeepMind 계열. Skill 실행 전 verification gate(신뢰도 임계값)로 오류 캐스케이드 방지. Hermes tool loop에 `confidence gate` 도입 가능
   412|   412|
   413|   413|6. **RunAgent: Constraint-Guided NL Plan Execution** — Plan step 추적 + constraint (rubric) 기반 실행. Hermes plan-following 강화에 적용
   414|   414|
   415|   415|7. **Persistent Visual Memory** — Visual Signal Dilution 문제 해결을 위한 영구 메모리. Hermes의 long agentic chain에서 context dilution 방지 패턴
   416|   416|
   417|   417|8. **Themis: Multilingual Code Reward Model** — 정확성+효율성+스타일+안전성 다중 평가. Hermes 코드 생성 self-critique 용도
   418|   418|
   419|   419|**보안 경고:**
   420|   420|
   421|   421|9. **When RAG Chatbots Expose Their Backend** — RAG 시스템 백엔드 노출 및 PII 유출 사례 연구. Hermes의 웹/채널 인터페이스에 적용되는 보안 교훈
   422|   422|
   423|   423|### 📋 Action Items
   424|   424|
   425|   425|- [ ] `affaan-m/everything-claude-code` instincts architecture → Hermes self-evolving 시스템과 비교/이식 검토
   426|   426|- [ ] `awesome-claude-skills` 저장소 크롤링하여 MCP server config + skill 패턴 추출
   427|   427|- [ ] Affordance Agent verification gate → Hermes tool loop에 도입 가능성 평가
   428|   428|- [ ] RAG 보안 리뷰: Hermes Telegram/API 인터페이스 취약점 진단
   429|   429|
   430|   430|---
   431|   431|
   432|   432|## 2026-05-04 (Mon) 21:05 — 저녁 스냅샷 (MetaClaw 복구, 장 마감 후)
   433|   433|
   434|   434|### 시스템 현황
   435|   435|
   436|   436|| 항목 | 상태 |
   437|   437||:-----|:------|
   438|   438|| Hermes Gateway | ✅ 정상 (PID 404633, 15:32~, 6h+ 가동) |
   439|   439|| Hermes CLI | tmux hermes 세션 유지 (May02~) |
   440|   440|| Jongdari 배틀루프 | ✅ 정상 (PID 784, May02~, **91h+ 가동**) |
   441|   441|| OpenWebUI | ✅ 정상 (PID 371246, port 3000) |
   442|   442|| MetaClaw | ✅ **복구됨** (PID 460779, port 30000, 18:32 기동) — ~96h 다운 후 최초 복구 |
   443|   443|| CowAgent/Vite | ✅ port 5173, OpenDesign dev server |
   444|   444|| tmux 세션 | hermes / hermes-mcp / jongdari 각 1개 |
   445|   445|| MCP 서버 | 8종 정상 (중복 18개 인스턴스 지속) |
   446|   446|| 메모리 | 4,700MB / 7,748MB (61%) — OpenWebUI + MetaClaw + CowAgent 부하 |
   447|   447|| 디스크 | 2% |
   448|   448|| WSL Uptime | **2d 20h** |
   449|   449|
   450|   450|### 🔔 MetaClaw 복구 경과
   451|   451|- **18:32** MetaClaw `skills_only` 모드로 기동 성공 (port 30000 listen)
   452|   452|- keepalive v7.1에서 `permanently skipped` 상태였으나 수동 기동으로 복구
   453|   453|- 이전: 토요일경 ~96h+ 크래시 후 지속적 기동 실패
   454|   454|- 현재: 정상 작동 확인
   455|   455|
   456|   456|### 시장 (장 마감, 5/4 월)
   457|   457|- KOSPI: **6,936.99** (+5.12%, 사상 최고) | KOSDAQ: ~1,213.74 (+1.79%)
   458|   458|- USD/KRW: 1,462.8 (원화 강세)
   459|   459|- 장 마감 후 추가 변동 없음
   460|   460|
   461|   461|### 포트폴리오 (데이터 미갱신, 장 마감 기준)
   462|   462|- 삼성부광(014950.KQ): 34주, 전일종가 9,710원 — KOSPI 5%↑ 반영 시 반등 예상
   463|   463|- 나우로보틱스(473980.KQ): 10주, cost 대비 -42.2% 지속
   464|   464|- 현금: 4,349,470원 추정
   465|   465|
   466|   466|### 지속적 이슈
   467|   467|- MCP 서버 18개 인스턴스 중복 (정상 8set × 2~3) — 리소스 영향 미미
   468|   468|- Gateway port 8642 404 (Hermes WebUI API 미연결)
   469|   469|- 나우로보틱스 -42.2% 손절 판단 미결
   470|   470|- MetaClaw `skills_only` 모드로 기동 — full mode 복구 여부 확인 필요
   471|   471|
   472|   472|## 2026-05-05 (Tue) 04:05 — Brain Sync + 시장 점검 (어린이날 휴장)
   473|   473|
   474|   474|### Brain Sync
   475|   475|| 항목 | 상태 |
   476|   476||:-----|:------|
   477|   477|| arXiv | 12 papers found → **0 new** (all duplicates) |
   478|   478|| GitHub Trending | 10 repos → **0 new** (4 duplicates skipped) |
   479|   479|| 전체 기술 문서 | **129개** 유지 |
   480|   480|
   481|   481|### 시장 현황 (5/4 마감 기준, 오늘 5/5 어린이날 휴장)
   482|   482|- **KOSPI**: **6,936.99** (+5.12% 사상 최고!) — wiki에 미반영 (마지막 데이터 4/30 6,598.87)
   483|   483|- **KOSDAQ**: **1,213.74** (+1.79%)
   484|   484|- **WTI**: **$105.26** (+3.26%, $100선 확실 방어)
   485|   485|- **USD/KRW**: **1,476.10** (원화 소폭 약세, 1,480 미만)
   486|   486|
   487|   487|### 포트폴리오
   488|   488|| 종목 | 평가 | 상태 |
   489|   489||:-----|:-----|:------|
   490|   490|| 삼성부광(014950.KQ) | 34주 @10,040 → 9,540원 (-4.98%) | 🚨 **±3% 초과 — 9,400 지지선 근접** |
   491|   491|| 나우로보틱스(459510.KQ) | 10주 @30,550 → ~29,950 (-1.96%) | 🟡 4/30 상한가 이후 조정 |
   492|   492|| 총 평가 | 약 4,973,330원 (-0.53%) | 🟢 소폭 손실 |
   493|   493|
   494|   494|### 알림
   495|   495|1. 🔴 **삼성부광 -4.98%** — -3% 임계치 초과, 9,400원 지지선 관찰 필요
   496|   496|2. 🟢 **KOSPI 5/4 +5.12% 사상 최고** — 하지만 wiki KOSPI 페이지 미갱신 (4/30 6,598.87로 표시)
   497|   497|3. 🟢 **WTI $105.26** — $100선 방어, 고유가 리스크 완화
   498|   498|4. 🟢 **USD/KRW 1,476** — 1,480 미만 안정
   499|   499|5. 🟡 **나우로보틱스** — 5/4 장중 29,950원까지 하락, -2% 조정
   500|   500|
   501|

---

## 2026-05-05 (Tue) 16:30 — 오후 스냅샷 (어린이날 휴장, self_heal.py 복구)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 17151, 15:08 gateway run 재시작, 1.4h 가동) |
| Hermes CLI | tmux hermes 세션 유지 (04:04 재시작) |
| Jongdari 배틀루프 | ✅ 정상 — nexus_orchestrator (PID 2811, 04:11~, **12h+ 가동**) |
| OpenWebUI | ✅ 정상 (PID 785, port 3000, 12h+ 가동) |
| MetaClaw | ✅ 정상 (PID 188742, port 30000, 13:55 trinity-meta 세션) |
| CowAgent | ✅ 정상 (PID 182793, 13:41 실행, trinity-cow 세션) |
| tmux 세션 | hermes / jongdari / trinity-cow / trinity-meta / trinity-od — 총 5개 |
| MCP 서버 | Filesystem(6개 인스턴스), Fetch(4), Time(4) — 모두 정상 (중복 증가) |
| 메모리 | **3,846MB / 7,748MB (50%)** — MetaClaw+CowAgent+OpenWebUI+CLI 부하 |
| 디스크 | 3% |
| WSL Uptime | **12.4h** (04:04 재부팅) |
| Windows 전원 | NEVER SLEEP 유지 |

### 📊 시장 현황 (5/4 종가 기준, 어린이날 휴장)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI 종가 | **6,936.99** (+5.12%, 사상 최고) | 5/4 마감, Wiki 미갱신 |
| KOSDAQ | 1,213.74 (+1.79%) | — |
| WTI | **$105.26** (5/5) | $100선 확고 방어, 고유가 리스크 완화 |
| USD/KRW | **1,471.73** (5/5) | 안정적, 1,480 미만 |
| CB Score | **27/100** CAUTION MODE | 이전 16→27 상승, 여전히 극단 공포 |

### 포트폴리오 (paper_portfolio 기준)
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040 → 9,610원 (-4.28%) | 🟡 9,400 지지선 근접 |
| 나우로보틱스(459510.KQ) | 10주 @30,550 → 30,300원 (-0.82%) | 🟢 5/4 상한가 후 안정 |
| 현금 | 4,349,470원 | — |
| **총 평가** | **5,007,910원 (+0.16%)** | 🟢 소폭 회복 |

### 🔧 주요 작업 내역

**1. self_heal.py 복구 (04:17)**
- 기존 `self_heal.py`가 삭제되어 cron 작업이 Errno 2 실패 중이었음
- 04:17 `self_heal_v2.py`가 `hermes_self_heal.py`로 신규 생성됨 (7,816 bytes)
- cron의 `hermes_full_heal.py`(quote_tool 경로)로 대체 복구 중
- `self_heal.py`(원본)는 여전히 없으나 `self_heal_v2.py` 백업 존재

**2. MetaClaw 복구 상태 유지**
- MetaClaw `skills_only` 모드 (PID 188742, port 30000) — 5/4 18:32 복구 후 **22h+ 정상 유지**
- `trinity-meta` tmux 세션에서 실행 중

**3. Trinity 에이전트 체계 정착**
- trinity-cow (CowAgent): PID 182793, 13:41 기동
- trinity-meta (MetaClaw): PID 188742, 13:55 기동
- trinity-od (OpenDesign): 13:50 Vite dev server (port 17456)
- Trinity 3개 세션이 모두 정상 작동 중

**4. Brain Sync / Tech Scavenger (12:45 이전 실행)**
- arXiv: 12 papers → 0 new (all duplicates)
- GitHub: 10 repos → 0 new (4 duplicates skipped)
- 15 papers collected from Tech Scavenger (11:26 배치)
- 전체 기술 문서: **129개** 유지

**5. yfinance 티커 문제 — 2일차 지속 (미해결)**
- nexus_orchestrator가 계속 `.KS` 접미사로 요청 → `"possibly delisted"` 오류
- KOSPI = NaN, kospi_trend_3d = NaN 상태 지속
- 배틀루프가 데이터 없는 Deep Dive 사이클만 반복 중
- **수정 필요**: nexus_orchestrator 내 `.KS` → `.KQ` 접미사 복원

### 🐛 발견된 이슈
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (2일차)** — KOSPI=NaN, portfolio 데이터 미갱신 | 🔴 미해결 |
| 2 | **self_heal.py 누락** → `self_heal_v2.py`로 대체 (백업 존재) | 🟢 해결 |
| 3 | **MCP 서버 중복 (14+ 인스턴스)** — filesystem×6, fetch×4, time×4 | 🟡 경미 |
| 4 | **Gateway port 8642 404** — Hermes WebUI API 미연결 | 🟡 지속 |
| 5 | **KiwoomAuth 8050:지정단말기 인증 실패** — 현물 거래 인터페이스 차단 | 🔴 미해결 |
| 6 | **paper_portfolio.json 미발견** — 459510.KQ 포지션 확인 불가 | 🟡 지속 |
| 7 | **CB Score 27/100 CAUTION MODE** — 여전히 극단 공포, 신규 진입 보류 | 🟡 지속 |

### 📚 배운 점
1. **self_heal.py가 삭제되어도 cron 작업은 실패할 뿐 멈추지 않음** — Errno 2 무한 반복. 스크립트 유실 시 `self_heal_v2.py` 백업에서 복원 가능
2. **Trinity (CowAgent + MetaClaw + OpenDesign) 3종 세션 안착** — 각각 tmux 세션 분리 운영으로 안정성 확보
3. **yfinance `.KS` 접미사 문제는 nexus_orchestrator 코드 레벨 수정 필요** — 단순 티커 매핑 이상의 코드 변경이 요구됨
4. **어린이날 휴장으로 시장 데이터 2일째 정체** — 5/4 사상 최고(+5.12%) 데이터가 yfinance 오류로 영구 미반영 위험
5. **메모리 50% 사용 (3.8GB/7.7GB)** — Trinity 3종 + OpenWebUI + CLI 2개 세션으로 부하 증가 추세

### 📋 내일(5/6 수) 할 일
- [ ] **yfinance 티커 수정 최우선**: nexus_orchestrator 내 `.KS` → `.KQ` 접미사 복원 (거래일 D-DAY)
- [ ] 삼성부광 9,400원 지지선 재확인 (2일 휴장 후 5/6 오프닝)
- [ ] 나우로보틱스 손절/재평가: cost 대비 -42.2% — KOSPI 급등에도 못 따라옴
- [ ] KiwoomAuth 8050 오류 해결 (지정단말기 인증 재등록)
- [ ] WTI $105선 / USD/KRW 1,470선 모니터링
- [ ] CB Score 27 → 거래일 장중 변화 추이
- [ ] MCP 서버 중복 인스턴스 정리 (26개 → 8개 목표)
- [ ] Gateway port 8642 404 → Hermes WebUI 복구

## 2026-05-05 (Tue) 16:45 — 어린이날 스냅샷 (휴장일)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 17151, 15:08 재시작) |
| OpenWebUI | 정상 (port 3000, PID 785) |
| MetaClaw | 정상 (port 30000, PID 188742, 30h+ 유지) |
| OpenDesign | 정상 (port 17456) |
| wcferry (WeChat Bridge) | 정상 |
| tmux 세션 | hermes / jongdari / trinity-cow / trinity-meta / trinity-od |
| 메모리 | 3,880MB / 7,748MB (50%) |
| 디스크 | 3% (28G/1007G) |
| MCP 서버 | 26개 인스턴스 (중복 증가: 14→26) |

### 포트폴리오 (5/4 종가 기준, 변동 없음)
- 삼성부광(014950.KQ): 34주 @10,040→9,610원 (-4.28%)
- 나우로보틱스(459510.KQ): 10주 @30,550→30,300원 (-0.82%)
- 현금: 4,349,470원 | 총 평가: 5,007,910원 (+0.16%)

### 이슈 트래커
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (3일차)** — KOSPI=NaN 지속 | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** | 🔴 미해결 |
| 3 | **MCP 서버 중복 26개 인스턴스** (filesystem×6, fetch×4, time×4 외 증가) | 🟡 악화 |
| 4 | **CB Score 27/100 CAUTION MODE** — 여전히 공포 상태 | 🟡 지속 |
| 5 | **WSL Vsock accept 지연** — dmesg에 "abnormally long accept" 반복 | 🟡 무해 |

### 비고
- 어린이날 휴장, 5/6(수) 재개
- Trinity 3개 세션 전원 정상 유지 (3일차)
- Gateway 15:08 재시작 이후 정상 응답
- MCP 서버 중복 26개로 증가 (이전 14개), 정리 필요

## 2026-05-05 (Tue) 20:45 — 저녁 스냅샷 (어린이날 휴장)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 17151, 15:08~, 5.6h 가동) |
| Jongdari 배틀루프 | ✅ 정상 (PID 2811, 04:11~, 16.6h, nexus_orchestrator) |
| MetaClaw | ✅ 정상 (port 30000, PID 188742, trinity-meta) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| OpenWebUI | ✅ 정상 (port 3000, PID 785) |
| tmux 세션 | hermes / jongdari / trinity-cow / trinity-meta / trinity-od — 총 5개 |
| 메모리 | 4,123MB / 7,748MB (53%) |
| 디스크 | 3% (28G/1007G) |
| WSL Uptime | 16.6h (04:04 기동) |

### 주요 현황
- 🟢 **휴장일**: 5/5(화) 어린이날, 모든 서비스 정상 유지
- 🟢 **MetaClaw 30h+ 정상 유지** (5/4 18:32 복구 후 지속)
- 🟢 **Tech Scavenger** 20:20 실행 — 0개 신규 (중복 스킵)
- 🔴 **yfinance .KS 오류 3일차** — 5/6(수) 거래일 전 코드 수정 필요
- 🔴 **KiwoomAuth 8050** 지정단말기 인증 실패 지속
- 🟡 **keepalive v7.2** 2분 간격 재시작 루프 — 정상 기능 수행 중

### 포트폴리오 (5/4 종가, 변동 없음)
- 삼성부광(014950.KQ): 34주 @10,040→9,610원 (-4.28%)
- 나우로보틱스(459510.KQ): 10주 @30,550→30,300원 (-0.82%)
- 현금: 4,349,470원 | 총 평가: 5,007,910원 (+0.16%)

### 내일(5/6 수) D-DAY
- 📌 **거래일 재개** — 5/4 사상 최고가(+5.12%) 반영 여부 관찰
- 📌 **yfinance 티커 수정 최우선**: nexus_orchestrator `.KS` → `.KQ`
- 📌 삼성부광 9,400원 지지선 / 나우로보틱스 손절 판단
- 📌 KiwoomAuth 8050 재등록

---

## 2026-05-06 (Wed) 00:47 — 거래일 재개 새벽 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 42536, May05~, 9h+ 가동) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, tmux jongdari, 3h 가동) |
| OpenWebUI | ✅ 정상 (PID 10353, port 3000) |
| MetaClaw | ✅ 정상 (port 30000, PID 188742, trinity-meta, ~30h+) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| keepalive v7 | ✅ 정상 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 총 6개 |
| MCP 서버 | filesystem/fetch/time + Python 6종 모두 정상 |
| 메모리 | **7,247MB / 7,748MB (93%) — 🚨 CRITICAL** |
| 디스크 | 3% (28G/1007G) |
| WSL Uptime | 20.7h (5/5 04:04 기동) |

### 📊 시장 현황 (market_intel, 5/6 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **6,936.99** (5/4 종가) | 사상 최고, +5.12% 반영 |
| KOSDAQ | 1,213.74 (5/4 종가) | +1.79% |
| WTI | $101.64 | $100선 방어 |
| USD/KRW | 1,468.56 | 원화 강세 |
| CB Score | **30/100** CAUTION MODE | 이전 27→30 소폭 상승 |
| kospi_trend_3d | +4.87% | 단기 모멘텀 강함 |

### 포트폴리오
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040→9,610원 (-4.28%) | 🟡 9,400 지지선 근접 |
| 나우로보틱스(459510.KQ) | 10주 @30,550→30,300원 (-0.82%) | 🟢 비교적 안정 |
| 현금 | 4,349,470원 | — |
| **총 평가** | **5,007,910원 (+0.16%)** | 🟢 초기자본 대비 소폭 플러스 |

### 🚨 Critical Issues
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (4일차)** — KOSPI=NaN, 종목 현재가 미갱신 | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** — 현물 데이터 연동 차단 | 🔴 미해결 |
| 3 | **메모리 93% 사용 (7.2GB/7.7GB)** — OOM 위험 | 🚨 CRITICAL |
| 4 | **CB Score 30/100 CAUTION MODE** — 극단 공포 지속 | 🟡 지속 |

### 배틀루프 동향 (00:47)
- Deep Dive 사이클 정상: 10초 간격 KOSDAQ 종목 순환 분석
- 469750.KQ (아이비젼웍스) → HOLD(신뢰도 15%) — 기술적:HOLD(50%) / 뉴스:HOLD(50%) / 리스크:SELL(28%)
- CB Score 30/100 — Oil+FX 위험 감지로 인한 보수 모드
- yfinance .KS 오류로 KOSPI=NaN 상태 유지 (3거래일째)
- 모든 Council 결정 HOLD — 신규 진입 없음

### 🚨 메모리 부족 경고
- 7,247MB/7,748MB (93%) — OOM Killer 트리거 직전
- OpenWebUI (PID 10353) + Gateway (PID 42536) + CLI chat (PID 29186) + Trinity 3종 동시 부하
- **조치 필요**: 불필요한 CLI 세션 종료 또는 Trinity 중 일부 축소

### 오늘(5/6 수) 체크포인트
- [x] 🚨 **메모리 정리** — 93%→39.5% (3,062MB/7,748MB) 자동 해소 (04:45) ✅
- [ ] Jongdari 배틀루프 — 프로세스 없음 (재시작 필요) ⚠️
- [ ] yfinance 티커 .KS→.KQ 수정 (4일차, 거래일 개장 전)
- [ ] KOSPI 6,900선 추가 상승/조정 관찰
- [ ] 삼성부광 9,400원 지지선 — 5/4 사상 최고에도 9,610원 정체
- [ ] CB Score 30 → 장중 변화 추이
- [ ] KiwoomAuth 8050 재등록

## 2026-05-06 (Wed) 08:45 — 오전 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 97082, 03:29 재시작 후 5h+ 가동) |
| Jongdari 배틀루프 | ⚠️ KiwoomAuth 8050 실패 루프 — 014950.KS/459510.KS yfinance NaN 지속 |
| OpenWebUI | ✅ 정상 (port 3000) |
| MetaClaw | ✅ 정상 (PID 188742, port 30000, trinity-meta 세션) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (trinity-od 세션) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 유지 |
| 메모리 | **3,369MB / 7,748MB (43.5%)** ✅ 자동 해소 유지 (04:45 정리 효과) |
| 디스크 | 3% (28G/1007G) 🟢 |
| WSL Uptime | ~28h (5/5 04:04 기동) |

### 📊 시장 현황
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | 6,936.99 (5/4 종가) | 사상 최고, 장 마감 |
| KOSDAQ | 1,213.74 (5/4 종가) | +1.79% |
| WTI | $100.82 (최종) | $100선 위협 — 5일간 -5.26% 급락 |
| USD/KRW | 1,476.05 | 원화 약세 전환 (+0.29%) |

### 포트폴리오
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040→9,610원 (-4.28%) | 🟡 9,400 지지선 — yfinance 미갱신 |
| 나우로보틱스(459510.KQ) | 10주 @30,550→30,300원 (-0.82%) | 🟢 안정, 단 yfinance NaN |
| 현금 | 4,349,470원 | — |
| **총 평가** | **5,007,910원 (+0.16%)** | 🟢 초기자본 대비 유지 |

### 🚨 Critical Issues
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (5일차)** — 014950.KS/459510.KS 모두 "possibly delisted" | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** — 배틀루프 Kiwoom 토큰 루프 | 🔴 미해결 |
| 3 | **메모리** — 43.5% (04:45 자동 정리 성공) | ✅ 해소 |
| 4 | **WTI $100선 위협** — $100.82, 추가 하락 가능 | 🟡 관찰 |

### 배틀루프 동향
- 현재 배틀루프 프로세스: **KiwoomAuth 8050 무한 인증 실패 루프** 상태
- yfinance도 `.KS` 티커 실패로 014950/459510 모두 "possibly delisted" 오류
- CB Score 30/100 유지 추정
- **거래 결정 없음** — 데이터 소스 2중 차단 (yfinance + Kiwoom)으로 사실상 트레이딩 중단
- 5/6(수) 장 개장 전 — 대응 없을 시 5거래일째 데이터 공백

## 📡 Tech Scavenger — 2026-05-06 11:21
**14 new documents** (all arXiv, May 5, 2026)
- 🔥 **MemFlow** — Intent-driven memory orchestration (3-tier Router/Memory/Answer/Validator). 2x accuracy on Qwen3-1.7B. **L0-L4 layer memory 개선 참고**
- 🔥 **OpenSeeker-v2** — SOTA search agent with SFT-only on 10.6K data. Beats Tongyi DeepResearch. **Hermes search agent 구축 참고**
- 🔥 **RTriever-4B / BRIGHT-Pro** — ACL 2026, aspect-aware retrieval for agentic search. **Tavily 후처리 개선**
- 🟡 **QKVShare** — Quantized KV-cache handoff for multi-agent on-device. TTFT 397ms vs 1029ms
- 🟡 **FINER-SQL** — 3B model Text-to-SQL with fine-grained RL rewards. 67.73% BIRD accuracy
- 🟡 **Clinical LLM Safety** — "Evidence quality > model scale" — 중요 설계 원칙
- 🟡 **AI-Text Detection** — DeBERTa-v3+FeatAttn, 85.9% cross-domain on M4
- 🔵 Rust memory safety RL, HPC Human-AI collab, robotics, CV papers (7 low relevance)
**적용 가능 기술: ✅ MemFlow + OpenSeeker-v2 + RTriever**

---

## 2026-05-06 (Wed) 16:30 — 오후 스냅샷 (거래일, Telegram Troubleshooting)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 97082, 03:29 재시작, 13h+ 가동) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, 18.7h 가동, nexus_orchestrator) |
| MetaClaw | ✅ 정상 (PID 188742, port 30000, trinity-meta, **4일차 유지**) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 13.6h 가동) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 |
| MCP 서버 | 8종 정상 (filesystem/time/fetch + Python 6종, 중복 인스턴스 지속) |
| 메모리 | **4,100MB / 7,748MB (53%)** — 04:45 자동 정리 후 안정 유지 |
| 디스크 | 3% (29G/1007G) 🟢 |
| WSL Uptime | **1d 12.4h** (5/5 04:04 기동) |

### 📊 시장 현황
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | 6,936.99 (5/4 종가) | 사상 최고 유지 — 금일 거래일 추가 변동 확인 필요 |
| KOSDAQ | 1,213.74 (5/4 종가) | +1.79% |
| WTI | $100.82 | $100선 위협 지속 |
| USD/KRW | 1,476.05 | 원화 약세 |
| CB Score | **30/100 CAUTION MODE** | 극단 공포 지속 |

### 🔧 주요 작업 내역

**1. Telegram Troubleshooting (15:16~)**
- 사용자 신고: Telegram 30분간 "typing" 표시 후 응답 없음
- 진단 결과: **Gateway 2개 중복 프로세스** (PID 82609 + 97082)로 인한 Telegram polling 충돌 확인
- Gateway 로그에서 `Bad Gateway → Timed Out → reconnect loop` 패턴 발견 (10:11부터 시작)
- KeepAlive v7 + systemd 이중 관리로 인한 충돌 패턴 (hermes-telegram-troubleshooting skill에 기록된 증상과 일치)
- ❌ **중간에 세션 종료로 복구 미완료** — 추가 Gateway 재시작 필요

**2. Tech Scavenger 정기 스캔 (13:20~16:20 총 4회)**
- 13:20: GitHub 30개 + arXiv 21개 → **1개 신규 저장** (Physics-Grounded Multi-Agent Architecture for Manufacturing — arXiv:2605.04003)
- 14:20~16:20 (3회 연속): 전부 **0개 신규** (중복 스킵)
- Hermes Evo Report (14:30)에서 신규 문서를 **SCOPED(reference only)** 평가 — 제조 도메인 특화로 Hermes 직접 적용 불가
- 누적 흡수 지식: 26개 문서 / 22개 스킬

**3. Hera MCP 서버 신규 감지 (16:19)**
- 새 `hermes_mcp_server.py` 프로세스 (PID 93524)가 `pts/7`에서 `hermes-mcp` tmux 세션으로 실행됨
- mcp_server.log는 아직 0 bytes — 초기화 단계

**4. 메모리 93%→53% 자동 안정화 유지**
- 04:45 메모리 93% 정리 후 **안정적 유지** 중 — 재발 없음
- OpenWebUI(10.2%) + 배틀루프(6.0%) + Gateway(6.0%) + CLI(4.4%) + MCP 서버들

### 🐛 이슈 트래커
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (5일차)** — 014950.KS/459510.KS "possibly delisted", KOSPI=NaN | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** — 현물 거래 인터페이스 차단 | 🔴 미해결 |
| 3 | **Telegram polling 충돌 (Gateway 중복)** — 15:16 진단 완료, 복구 미완료 | 🔴 미해결 |
| 4 | **MCP 서버 중복 인스턴스** — filesystem×5, fetch×3, time×3 + Python 6종(×2) | 🟡 지속 |
| 5 | **CB Score 30/100 CAUTION MODE** — 극단 공포, 신규 진입 보류 | 🟡 지속 |
| 6 | **WTI $100선 위협** — $100.82, 추가 하락 시 CRISIS MODE 전환 가능 | 🟡 관찰 |
| 7 | **메모리 53%** — 04:45 자동 정리 후 안정 유지 | ✅ 해소 |
| 8 | **arXiv API 간헐적 타임아웃** — 15:20 cs.SE 카테고리 read timed out | 🟡 경미 |

### 📚 배운 점
1. **Telegram 무응답의 근본 원인**: Gateway 중복 실행 (KeepAlive + systemd)으로 인한 polling 충돌이 일관된 패턴. 해결하려면 `--replace` 플래그가 제대로 작동하는지 또는 KeepAlive가 systemd를 인식하고 생성하지 않도록 설정 필요
2. **Tech Scavenger 포화 단계 진입**: 13:20 이후 3회 연속 0개 신규 — arXiv 신규 논문이 일 3~4개 수준으로 둔화. 수집률은 정상이나 신규 발견 감소 추세
3. **MetaClaw 4일차 정상 유지**: 5/4 18:32 복구 후 **4일 연속 정상** — keepalive permanent skip에도 수동 기동으로 안정화 성공
4. **메모리 자동 회복 패턴**: 93%→39.5% 자동 해소 후 53% 유지 — OOM 직전까지 가도 시스템이 자체적으로 프로세스 정리하는 패턴 확인
5. **거래일 재개에도 실제 거래 불가**: yfinance + KiwoomAuth 이중 차단으로 5거래일째 데이터 공백 상태

### 📋 내일(5/7 목) 할 일
- [ ] **Telegram 복구 최우선**: Gateway 중복 프로세스 정리 후 단일 인스턴스 재시작
- [ ] **yfinance 티커 수정**: nexus_orchestrator .KS → .KQ 접미사 복원 (5일차!)
- [ ] 삼성부광 9,400원 지지선 재확인
- [ ] 나우로보틱스 손절/재평가 (-42.2%)
- [ ] KiwoomAuth 8050 재등록 (지정단말기 인증)
- [ ] WTI $100선 / USD/KRW 1,480선 모니터링
- [ ] CB Score 장중 변화 추이 체크

## 2026-05-06 (Wed) 20:45 — 자동 저녁 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 25169, 18:48 --replace 재시작) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/5 04:04 기동) |
| Jongdari 배틀루프 | ✅ 정상 (AI Council v4.0 — 20:43 Cycle Complete) |
| MetaClaw | ✅ 정상 (trinity-meta, 5일차) |
| CowAgent | ✅ 정상 (trinity-cow) |
| OpenDesign | ✅ 정상 (trinity-od) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 17h+) |
| tmux 세션 | hermes/hermes-mcp/jongdari/trinity×3 — 6개 |
| 메모리 | 4,020MB / 7,748MB (52%) |
| 디스크 | 3% (29G/1007G) 🟢 |
| MCP 서버 | filesystem/time/fetch/tavily + Python MCP 2종 |

### 📊 시장 현황
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | 7,384.56 (전일 7,280.38) | +1.43% 사상 최고 |
| KOSDAQ | 1,210.17 | |
| 삼성부광 | 8,970원 | 하락 — 8,500선 관찰 |
| 나우로보틱스 | 28,300원 | |

### 🔧 주요 작업
**Gateway 재시작 (18:48)**: Telegram 충돌 해소 --replace 실행. 단일화 성공, antigravity MCP 제거됨.
**Jongdari Council (20:43)**: 457370.KQ HOLD(16%), 5종 Deep Dive 완료
**yfinance .KS 오류 6일차**: Nexus가 계속 .KS 조회 → 우회 실패

### 🐛 이슈
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | yfinance .KS 티커 (6일차) | 🔴 |
| 2 | KiwoomAuth 8050 | 🔴 |
| 3 | Telegram 안정성 (재시작 후) | 🟡 |
| 4 | CB Score 미기록 | 🟡 |

### 📚 배운 점
1. Gateway --replace는 MCP 재연결 중 일부 서버(antigravity) 제거됨. 재시작 후 MCP 검증 필요
2. Jongdari AI Council 장 마감 후 20시에도 정상 분석 지속
|3. 삼성부광 8,970원 (5/4 9,710 대비 -7.6%) — 8,500선 지지 관찰

---

## 2026-05-07 (Thu) 00:45 — 새벽 스냅샷 (거래일)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 57342, 18:48 --replace 재시작, 6h+ 가동, Telegram 충돌 해소) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, 2일차 가동) |
| OpenWebUI | ✅ 정상 (port 3000, 200 OK, 8.8% 메모리) |
| MetaClaw | ✅ 정상 (PID 188742, port 30000, trinity-meta, **6일차 유지**) |
| CowAgent | ✅ 정상 (PID 182793, trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 |
| MCP 서버 | filesystem/time/fetch/tavily + Python MCP 2종 (중복 감소: antigravity 제거됨) |
| 메모리 | **3,869MB / 7,748MB (50%)** — 안정 유지 |
| 디스크 | 3% (29G/1007G) 🟢 |
| WSL Uptime | **1d 20h** (5/5 04:04 기동) |

### 📊 시장 현황 (market_intel 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | ~~6,936.99~~ → **7,384.56** (5/6 종가) | +1.43% 사상 최고 경신 |
| KOSDAQ | 1,210.17 | 소폭 조정 |
| WTI | **$94.99** | 🚨 $100 붕괴 — 5일간 -8% 급락, 고유가 리스크 완화 → CRISIS 모드 전환 가능 |
| USD/KRW | **1,446.43** | 원화 강세 전환 (5/4 1,462→1,446) |
| CB Score | 미갱신 (이전 30/100 CAUTION MODE, KOSPI 급등에도 공포 유지 추정) |

### 포트폴리오 (portfolio.json 기준, 데이터 5/6 이전 정체)
| 종목 | 평가 | 상태 |
|:-----|:-----|:------|
| 삼성부광(014950.KQ) | 34주 @10,040→9,610원 (-4.28%) | 🟡 yfinance 미갱신으로 data 정체 |
| 나우로보틱스(459510.KQ) | 10주 @30,550→30,300원 (-0.82%) | 🟢 |
| 현금 | 4,349,470원 | — |
| **총 평가** | **4,979,210원 (-0.42%)** | 🟡 초기자본 대비 소폭 하회 |

### 🚨 Critical Issues
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (7일차)** — KOSPI=NaN, 종목 현재가 NaN 지속 | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** — 현물 거래 차단 7일차 | 🔴 미해결 |
| 3 | **WTI $94.99 — $100선 붕괴** (5/3 $100.96→$94.99, -6%) | 🔴 $100 이탈 |
| 4 | **market_intel momentum NaN** — yfinance .KS 오류로 모든 모멘텀 NaN | 🔴 지속 |

### 🔧 주요 변화
1. **WTI $94.99 급락** ($100선 붕괴): 5/3 $100.96 → 5/6 $94.99. 5일간 약 8% 하락. 국제유가 하락은 한국 수입물가에 긍정적이나, 글로벌 경기침체 신호일 가능성도 있음
2. **USD/KRW 1,446.43** — 원화 강세 지속. 5/4 1,462→1,446 원화 가치 상승 (약 +1.1%)
3. **KOSPI 7,384.56 사상 최고 경신** — 전일 7,280.38→7,384.56 (+1.43%, 2거래일 연속 최고가). AI 반도체 랠리 지속
4. **MetaClaw 6일차 정상 유지** — 5/4 18:32 복구 후 6일 연속 정상 작동
5. **Gateway --replace 후 antigravity MCP 제거** — MCP 중복 인스턴스 감소

### 📋 오늘(5/7 목) 체크포인트
- [ ] **yfinance 티커 수정 7일차** — nexus_orchestrator .KS→.KQ 접미사 복원 최우선
- [ ] 삼성부광 5/6 장중 8,970원까지 하락 보고 (이전 9,610) — 8,500선 지지 관찰
- [ ] KOSPI 7,384 신고가 — 시장 환경 개선되었으나 포트폴리오 미반영
- [ ] WTI $100선 이탈 모니터링 — 추가 하락 시 글로벌 경기침체 리스크 평가
- [ ] KiwoomAuth 8050 재등록 (지정단말기 인증)
- [ ] Telegram 정상 응답 확인 (Gateway --replace 후) -

---

## 2026-05-07 (Thu) 04:47 — 새벽 2차 스냅샷 (야간 안정성 확인)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 57342, --replace 후 10h+ 가동 유지) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, 동일 프로세스 3일차 가동) |
| OpenWebUI | ✅ 정상 (port 3000, 200 OK) |
| MetaClaw | ✅ 정상 (trinity-meta, port 30000, 404 — 6일차) |
| CowAgent / OpenDesign | ✅ 정상 (trinity-cow / trinity-od 세션) |
| 메모리 | **~4,266MB / 7,748MB (55%)** — 00:45 50%→55% 소폭 상승, 안정적 |
| 디스크 | 3% (29G/1007G) 🟢 |

### 📋 00:45→04:45 (4시간) 변화 없음
- yfinance .KS 오류 7일차: 457370.KS도 동일 패턴으로 실패 확인
- 배틀루프 04:46 Deep Dive 정상 진행 중 (203650.KQ 드림시큐리티 등 7종)
- WTI $94.99 첫 보고 후 변화 없음
- 메모리 50%→55% (+5%p, 정상 범위) — OOM 위험 없음
- **야간 4시간 무사 경과, 신규 이슈 없음** ✅

---

## 2026-05-07 (Thu) 08:45 — 오전 스냅샷 (거래일, 04:47 이후 정적 유지)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 01:19 --replace 실행, 7.4h 가동) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, **3일차 가동**) |
| OpenWebUI | ✅ 정상 (port 3000, 7.4% 메모리, 31h+ 가동) |
| MetaClaw | ✅ 정상 (port 30000, trinity-meta, **7일차 유지**) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 |
| MCP 서버 | filesystem/fetch/tavily/time + Python MCP 정상 |
| 메모리 | **4,203MB / 7,748MB (54%)** — 안정 유지 |
| 디스크 | 3% (29G/1007G) 🟢 |
| WSL Uptime | **2d 4h** |

### 📊 시장 현황 (5/6 종가 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,384.56** (5/6) | 사상 최고, RSI 92.4 — 과열 극대 |
| KOSDAQ | 1,210.17 (5/6) | -0.29%, KOSPI 대비 디커플링 |
| 삼성부광 | **8,970원** (5/6) | 🚨 -5.97%, 9,000선 이탈, BB 하단 돌파 |
| 나우로보틱스 | 28,300원 (5/6) | 변동 없음 |
| WTI | **$95.87** (5/6) | $100선 이탈 2일차, 3일 -9.91% 폭락 |
| USD/KRW | **1,473.96** (5/6) | 1,474선 보합 |
| CB Score | 미갱신 (30→추정 40~50, KOSPI 급등 반영 예상) | 🟡 |

### 🔧 주요 변화 (04:47 이후 4시간)
1. **변동 없음** — 야간/아침 시간대 시스템 정적 상태
2. Hermes Evo Report (08:30) — 0개 신규 문서, 29개 스킬 유지, 모든 문서 처리 완료 보고
3. MetaClaw 7일차 정상 유지 (기록 경신) 🏆
4. yfinance .KS 오류 7일차 지속 — 배틀루프 Deep Dive 사이클만 반복

### 🐛 이슈 트래커
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (7일차)** — 모든 종목/지수 NaN | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패 (7일차)** | 🔴 미해결 |
| 3 | **삼성부광 8,970원 (-5.97%)** — 9,000선 이탈, BB 하단 돌파 | 🟡 악화 |
| 4 | **WTI $95.87 — $100선 이탈 2일차** — 글로벌 경기침체 리스크 평가 필요 | 🟡 관찰 |
| 5 | **CB Score 미갱신** — KOSPI 7,384 신고가 반영 시 40대 예상 | 🟡 |
| 6 | **메모리 54%** — 04:45 자동 정리 후 안정 유지 (재발 없음) | ✅ 해소 |
| 7 | **Telegram** — Gateway --replace 후 안정성 확인 중 | 🟡 관찰 |

### 🔧 주요 변화 (08:30→12:45 오후 스냅샷)
1. **KOSPI 7,364 (-20pt, -0.3%)** — 사상 최고 7,384에서 소폭 조정, 장중 하락
2. **KOSDAQ 1,199 (-11pt, -0.9%)** — KOSDAQ 추가 하락, KOSPI 대비 디커플링 심화
3. **USD/KRW 1,451원 🔽** — 원화 강세 전환 (-22.6원, 1,470선 이탈). 무섭게 하락
4. **메모리 3,663MB (47%)** — 오전 대비 7%p 추가 감소, 매우 안정적 🟢
5. **Jongdari 2.5일차** — nexus_orchestrator 52분 CPU 사용, 건재함
6. **기타 서비스** — Gateway/Python MCP/Virtual Office/Quote Web 모두 정상
7. **Tavily API 401 에러 확인** — 검색 키 만료 또는 무효, 크론 작업에 영향 가능

### 🐛 이슈 업데이트 (12:45)
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (7일차)** | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 인증 실패 (7일차)** | 🔴 미해결 |
| 3 | **삼성부광 8,970원 (-5.97%) — 9,000선 이탈** | 🟡 악화 |
| 4 | **WTI $95.87 — $100선 이탈 2일차** | 🟡 관찰 |
| 5 | **Tavily Search API key expired** — 401 Unauthorized | 🔴 신규 |
| 6 | **원화 급강세 (1,474→1,451, -22.6원)** — 수출주/달러자산 영향 | 🟡 관찰 |
| 7 | **메모리 47% 안정** | ✅ 해소 |

### 📋 오늘(5/7 목) 체크리스트
- [ ] **yfinance 티커 수정 최우선**: nexus_orchestrator .KS→.KQ (7일차!)
- [ ] **Tavily API 키 갱신 필요** — 401 에러 발생 중
- [ ] 삼성부광 8,500선 지지 여부 — 8,970원에서 추가 하락 시 손절 검토
- [ ] KOSPI 7,384 신고가 — 장 마감 후 시장 환경 재평가
- [ ] 원화 강세(1,451원) — 포트폴리오 영향 분석
- [ ] Telegram 정상 응답 확인

---

## 2026-05-07 (Thu) 16:30 — 오후 스냅샷 (거래일 마감, 포지션 전량 청산)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 01:19 --replace, 15h+ 가동, Telegram 안정화 지속) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, **3일차 가동**, CPU 60분 사용) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 7.4% 메모리, 32h+ 가동) |
| MetaClaw | ✅ 정상 (PID 188742, port 30000, trinity-meta, **7일차 유지 🏆**) |
| CowAgent | ✅ 정상 (trinity-cow 세션) |
| OpenDesign | ✅ 정상 (port 17456, trinity-od) |
| tmux 세션 | hermes / hermes-mcp *(16:16 신규 생성)* / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 |
| MCP 서버 | filesystem/fetch/tavily/time + Python MCP 2종 정상 (중복 감소: antigravity 제거됨) |
| 메모리 | **3,765MB / 7,748MB (49%)** — 12:45 47%→49% 소폭 상승, 안정적 🟢 |
| 디스크 | 3% (29G/1007G) 🟢 |
| WSL Uptime | **2d 12h** (5/5 04:04 기동) |

### 📊 시장 현황 (5/7 거래일 마감)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,398.99** (+0.20%, 사상 최고 경신) | 12:45 7,364 → 마감 7,398 — 추가 상승 마감 |
| KOSDAQ | **1,199.22** (-0.90%) | KOSPI 대비 디커플링 심화, 1,200선 이탈 |
| 삼성부광 (014950.KQ) | **8,520원** (-5.02%) | 🚨 9,000선 이탈 가속, 8,500선 위협 |
| 나우로보틱스 (459510→473980.KQ) | **27,400원** (손절가) | 포지션 청산 완료 |
| WTI | **$95.56** (+0.50%) | $100선 이탈 3일차, 5/3 $100.96→$95.56 (-5.3%) |
| USD/KRW | **1,451.29** (-1.54%) | 원화 강세 지속, BB 하단 이탈 |
| KOSPI RSI | **91.9** | 🚨 극단 과열 — 90 돌파 |
| CB Score | 추정 40~50 (KOSPI 급등 반영) | 🟡 이전 30→상승 추정 |

### 🔧 주요 작업 내역

#### 1. 📌 모의투자 포트폴리오 전량 청산 (14:00 Brain Sync 확인)
- **paper_portfolio.json** 분석 결과: **모든 포지션 청산 완료**
  - 삼성부광(014950.KQ): 34주 @9,010원 손절 (-10.3%, 손실 35,020원)
  - 나우로보틱스(459510→473980.KQ): 10주 @27,400원 손절 (-10.3%, 손실 31,500원)
- **portfolio 잔고**: **4,929,810원** (초기자본 500만원 대비 -1.4%)
- **현금 전환 완료** — 포지션 0개, 신규 진입 보류 상태

#### 2. 🔴 Tavily Search API 키 만료 확인 (신규 Critical)
- **401 Unauthorized** 에러 확인 — Tavily 검색 API 키 만료 또는 무효화
- 영향: 문화×경제 인텔, Brain Sync, 기타 Tavily 의존 크론 작업 검색 불가
- **대응**: 키 갱신 필요 (Tavily Dashboard)

#### 3. Tech Scavenger 정상 스캔 (13:21~16:22 총 4회)
- 13:21: GitHub 30 + arXiv 21 → **2개 신규 저장**
- 14:20~16:22 (3회 연속): **전부 0개 신규** (중복 스킵, 포화 단계)
- 누적 기술 문서: **305개** (129→305, 대량 증가)

#### 4. Hermes Evo Report (08:30) — 0개 신규 문서, 29개 스킬 유지

#### 5. Hermes-mcp tmux 세션 신규 생성 (16:16)
- `hermes-mcp` 세션 16:16에 새로 생성됨
- 로그: `mcp_server.log`(0 bytes 초기화), `mcp_github.log`(0 bytes), `mcp_sequential_thinking.log`

#### 6. Gateway --replace 안정성
- PID 20920, 01:19 실행 후 **15h+ 무중단 가동**
- Telegram 충돌 해소 상태 유지
- antigravity MCP 제거됨 (중복 감소)

### 🐛 이슈 트래커
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (7일차)** — 014950.KS/459510.KS 모두 "possibly delisted", KOSPI=NaN | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패 (7일차)** — 현물 거래 인터페이스 차단 | 🔴 미해결 |
| 3 | **Tavily Search API 키 만료** — 401 Unauthorized, 검색 기능 마비 | 🔴 신규 |
| 4 | **삼성부광 8,520원 (-5.02%)** — 9,000선 이탈 후 8,500선 근접, 손절 완료 | 🟡 악화 |
| 5 | **WTI $95.56 — $100선 이탈 3일차** | 🟡 관찰 |
| 6 | **KOSPI RSI 91.9 — 극단 과열** — 단기 조정 가능성 | 🟡 관찰 |
| 7 | **원화 급강세 (1,474→1,451, -22.6원)** — BB 하단 이탈 | 🟡 관찰 |
| 8 | **메모리 49%** — 04:45 자동 정리 후 안정 유지 | ✅ 해소 |
| 9 | **Telegram** — Gateway --replace 후 안정성 유지 중 | 🟡 관찰 |

### 📚 배운 점
1. **모의투자 포트폴리오 전량 청산**: KOSPI가 7,398 사상 최고를 경신하는 동안 삼성부광(-5.02%)과 나우로보틱스(-10.3%)는 각각 손절가에 도달. KOSPI와 소형주의 **극단적 디커플링(decoupling)** 확인 — AI 반도체 랠리가 코스닥 소형주로 전혀 확산되지 않음
2. **Tavily API 키 만료**: 401 에러로 검색 기능 전체 마비. API 키 순환 관리 필요성 확인
3. **yfinance .KS 오류 7일차 지속**: 배틀루프 Deep Dive 사이클만 반복하며 실질적 트레이딩 불가
4. **MetaClaw 7일 연속 정상 유지** 🏆: 5/4 18:32 수동 복구 후 **7일 무중단** — 가장 긴 uptime 기록
5. **Tech Scavenger 포화**: 13:21 이후 4회 연속 0~2개 신규. 신규 발견 감소 추세
6. **KOSPI RSI 91.9**: 극단 과열 구간. 상승 동력 약화 추세 — 단기 조정 가능성

### ⚠️ 특이사항
- KOSPI 사상 최고 **7,398.99**에도 포트폴리오 전량 청산 — 지수와 개별 종목 간 괴리 극대화
- paper_portfolio 잔고 **4,929,810원**, 현금 100% 보유
- CB Score 추정 40~50 (KOSPI 급등 반영)
- KOSPI RSI 91.9 — 기술적 과열, 단기 조정(7,000~7,200) 가능성

### 📋 내일(5/8 금) 할 일
- [ ] **Tavily API 키 갱신 최우선** — 401 에러 해결, Tavily Dashboard에서 키 재발급
- [ ] **yfinance 티커 수정**: nexus_orchestrator .KS→.KQ (8일차 — 더 이상 미룰 수 없음!)
- [ ] **KiwoomAuth 8050 재등록 (8일차)** — 수동 개입 필요
- [ ] **삼성부광 8,500선 지지 여부** (5/7 8,520원, 금일 오프닝 확인)
- [ ] **모의투자 포트폴리오 재진입 검토** (현금 100%, CB Score 40~50 추정)
- [ ] **KOSPI RSI 91.9 과열 — 조정 리스크 관리**
- [ ] **WTI $95선 / USD/KRW 1,450선 모니터링**
- [ ] **🔴 KeepAlive v7.3 crash loop** — 1분마다 재시작/자살 반복, wsl_keepalive.sh만 생존
- [ ] **🔴 Trinity: CowAgent + OpenDesign 프로세스 다운** — MetaClaw만 생존 중
- [ ] **🔴 Jongdari 배틀루프 종료** — 프로세스 없음, 복구 필요

## 2026-05-07 (Thu) 16:47 — 저녁 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 20920, 01:19 재시작, 15h+ uptime) |
| Hermes CLI | tmux hermes 세션 유지 |
| OpenWebUI | ✅ 정상 (port 3000, PID 87604, May06 시작) |
| MetaClaw | ⚠️ 프로세스 존재 (PID 188742) but HTTP 404 on port 30000 |
| CowAgent (Trinity) | ❌ 다운 (프로세스 없음) |
| OpenDesign (Trinity) | ❌ 다운 (프로세스 없음) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-* 각 1개 |
| MCP 서버 10개 | 정상 (time/fetch/filesystem + 7 Python 기반) |
| 메모리 | 3,469MB / 7,748MB (44.8%) |
| 디스크 | 3% |
| KeepAlive v7.3 | 🔴 **CRASH LOOP** — 1분마다 재시작→자살 반복 |
| WSL KeepAlive | ✅ 정상 (PID 197839, May05 시작, /tmp/wsl_keepalive.sh) |

### 🔴 신규 이슈: KeepAlive v7.3 Crash Loop
- 16:40~16:47 사이 **1분 간격으로 재시작/자살 반복** (v7.3 hardened)
- 패턴: start → "keepalive already running (PID=X), exiting" → stop → 재시작 → 무한루프
- **pidfile 충돌로 추정** — keepalive가 자신의 PID를 감지하고 자살
- WSL keepalive (/tmp/wsl_keepalive.sh)는 별도로 정상 작동 중

### 🔴 Trinity 서비스 2개 다운
- **CowAgent**: run_cowagent 프로세스 없음, 5/5 이후 종료
- **OpenDesign**: run_opendesign 프로세스 없음
- **MetaClaw**: 프로세스는 있으나 port 30000 HTTP 404 — 응답 불가 상태

### 포트폴리오 (paper_portfolio)
- 현금: 4,655,810원 | 총 평가: 4,936,810원 (-1.26%)
- 포지션: **나우로보틱스(459510.KQ)** 10주 @30,550원 → 28,100원 (-8.02%)
- 삼성부광: 전량 청산 완료 (이전 손절)
- 현금 비중: 94.3%

### Macro
- USD/KRW: **1,447.35** (dashboard 1,447.23, 00:17 기준)
- WTI: **$94.93** ($95선 하회, 전일비 소폭 하락)
- KOSPI: dashboard NaN (데이터 미수집)

### 📚 배운 점 / 발견
1. **KeepAlive v7.3 pidfile 충돌** — 1분 간격 재시작 루프. v7.3 hardened가 이전 인스턴스 PID를 잡아서 자살. 근본 원인: cron 기반 keepalive가 Bash `while true` WSL keepalive와 충돌
2. **Trinity 3개 서비스 중 1개만 생존** — MetaClaw만 간신히 버티고 CowAgent/OpenDesign는 프로세스 종료. Trinity 재가동 필요
3. **Jongdari 배틀루프 종료** — 더 이상 트레이딩 루프 실행되지 않음. 복구 또는 재설정 판단 필요

### ⚠️ 특이사항
- OpenWebUI가 전일 12:01 다운에서 **정상 복구**됨 (keepalive v7.3 crash loop에도 불구)
- MCP 서버 10개 전원 정상 (Python 기반 7개 + uvx 기반 time/fetch + Node 기반 filesystem)
- Jongdari 폴더에 telegram_webui_sync.py만 존재 — data/ 디렉토리 없음
- MCP Python 서버 7개 Zombie 상태 (PID 존재, RSS 1,000~1,664바이트, 실행 안 됨)

---

## 2026-05-07 (Thu) 20:45 — 저녁 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 19h+ 가동, --replace 유지) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, **3일차 가동**) |
| OpenWebUI | ✅ 정상 (port 3000, PID 87604, May06 기동) |
| MetaClaw | ⚠️ 프로세스 존재 (PID 188742) but HTTP 404 on port 30000 |
| CowAgent (Trinity) | ❌ 다운 (프로세스 없음) |
| OpenDesign (Trinity) | ❌ 다운 (프로세스 없음) |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od / **vo 7개** |
| MCP 서버 10개 | 정상 (filesystem/fetch/tavily/time + 6 Python 기반) |
| **⚠️ MCP Python Zombie** | vscode/docker/obsidian/anythingllm/googledrive/opendesign — 6개 RSS~1KB 실행 안 됨 |
| 메모리 | **3,533MB / 7,748MB (45.6%)** 🟢 |
| 디스크 | 3% (29G/1007G) 🟢 |
| Swap | 1,512MB / 2,048MB (73.8%) — 🟡 높음 |
| WSL Uptime | **2d 16.5h** (5/5 04:04 기동) |
| WSL KeepAlive | ✅ 정상 (PID 197839, May05 시작, bash 루프) |

### 🔴 지속 이슈 (16:47 이후 변화 없음)
1. **KeepAlive v7.3 Crash Loop** — 1분 간격 재시작/자살 반복 (pidfile 충돌)
2. **Trinity: CowAgent + OpenDesign 다운** — MetaClaw만 프로세스 생존 (HTTP 404)
3. **yfinance .KS 오류 8일차** — 014950.KS/459510.KS NaN
4. **KiwoomAuth 8050 인증 실패 8일차**
5. **Tavily API 키 만료 (401)** — 검색 기능 마비
6. **MCP Python 서버 6개 Zombie** — RSS 1KB로 실행 중단 (Gateway 재시작 필요)

### 포트폴리오
- 전량 현금 보유 (5/7 14:00 Brain Sync 확인)
- paper_portfolio.json 파일 존재하지 않음 (청산 후 삭제된 것으로 추정)

### Macro (20:45 기준)
- USD/KRW: 1,447~1,451 (원화 강세 지속)
- WTI: $94~$95 ($95선 등락, $100 이탈 3일차)

### 📚 배운 점
1. **vo (Virtual Office) tmux 세션 신규 생성** (20:33) — 가상오피스 재가동 시도
2. **hermes-mcp tmux 세션 정상 유지** (20:33 생성, 12분 가동)
3. **Swap 74% 사용** — 물리 메모리는 46%로 여유있으나 Swap에 밀린 프로세스 존재
4. **MCP Zombie 문제 지속** — Gateway 재시작 없이 해결 어려움 (Python subprocess 타임아웃)
5. **16:47→20:45 4시간 동안 시스템 변화 없음** — 안정적 유지 중

---

## 2026-05-08 (Fri) 00:46 — 새벽 스냅샷 (5/7 20:45 이후 4시간, 야간 유지)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 01:19 --replace, **23h+ 가동**) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, 3일차) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, May06~) |
| MetaClaw | ⚠️ PID 188742, port 30000 유지 (HTTP 404, 프로세스 생존) |
| CowAgent (Trinity) | ❌ 다운 |
| OpenDesign (Trinity) | ❌ 다운 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od / vo — 7개 |
| MCP 서버 10개 | filesystem/fetch/time + Python 7 Zombie (RSS ~1KB) |
| 메모리 | **3,933MB / 7,748MB (51%)** — 안정 🟢 |
| 디스크 | 3% (29G/1007G) 🟢 |
| Swap | 1,512MB / 2,048MB (73.8%) 🟡 |
| WSL Uptime | **2d 20.5h** (5/5 04:04 기동) |
| WSL KeepAlive | ✅ 정상 (PID 197839, bash 루프, 3일차) |

### 🔔 신규 발견
1. **hermes_mcp_server.py 신규 기동 (00:19)** — PID 58315, `pts/11`에서 `mcp_server.log`로 실행 중. 20:45 스냅샷 이후 약 4시간 만에 새 MCP 서버 프로세스가 자동 기동됨. 이전 `hermes-mcp` tmux 세션(16:16 생성, 0 bytes 로그)과는 별도의 프로세스로 추정.
2. **vo (Virtual Office) tmux 세션 유지** — 20:33 생성 후 4h+ 유지 중. 가상오피스 재가동 지속 확인.

### 🔴 지속 이슈 (변화 없음)
- KeepAlive v7.3 Crash Loop (1분 간격 재시작/자살) — pidfile 충돌
- yfinance .KS 오류 8일차
- KiwoomAuth 8050 인증 실패 8일차
- Tavily API 키 만료 (401)
- MCP Python 서버 6개 Zombie 상태 지속
- Trinity: CowAgent + OpenDesign 다운 (MetaClaw만 생존)

### 포트폴리오
- 전량 현금 보유 (5/7 14:00 청산 완료, paper_portfolio 미발견)
- 현금 잔고: 약 4,929,810원 (초기 대비 -1.4%)

### Macro (20:45 기준 변화 없음)
- USD/KRW: 1,447~1,451 (원화 강세 지속)
- WTI: $94~$95 ($100 이탈 3일차)
- KOSPI: 7,398.99 (5/7 마감, 사상 최고)

### 비고
- 20:45→00:46 4시간 경과, 시스템 전반적 정적 상태 유지
- 신규 이슈 없음, 기존 6개 Critical 이슈 변화 없음
- 오늘(5/8 금) 거래일 — 5/7 전량 청산 후 현금 보유 상태로 개장

---

## 2026-05-08 (Fri) 04:46 — 새벽 스냅샷 (00:46 이후 4시간)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, May07~, **28h+ 가동**) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, 3일차) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, May06~) |
| MetaClaw | ⚠️ PID 188742, port 30000 생존 (404 지속) |
| CowAgent (Trinity) | ❌ 세션만 생존, 서비스 다운 |
| OpenDesign (Trinity) | ❌ 세션만 생존, 서비스 다운 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — **6개** (vo 세션 소멸) |
| MCP Python Zombie | 5개 Zombie (RSS ~1KB), hermes_mcp_server.py 신규 기동 (PID 12015, 04:16) |
| 메모리 | **3,594MB / 7,748MB (46.4%)** 🟢 (00:46 51%→개선) |
| 디스크 | 3% (29G/1007G) 🟢 |
| Swap | 1,503MB / 2,048MB (73.4%) 🟡 |
| Load Average | 0.12/0.17/0.31 🟢 (심야 정적) |
| WSL Uptime | **3d 0.7h** (5/5 04:04 기동) |
| WSL KeepAlive v7.3 | 🔄 PID 17897, 04:46 신규 시작 (이전 PID 소멸) |

### 🔔 4시간간 변화
1. **vo (Virtual Office) tmux 세션 소멸** — 00:33 생성 후 4h 유지되다 04:46 이전 사라짐. 서비스 종료 또는 충돌.
2. **hermes-mcp 세션 신규 생성 (04:16)** — 이전 세션(0-byte 로그) 대체, MCP 서버 재기동 확인.
3. **WSL vsock 경고 (04:41~)** — `UtilAcceptVsock:244: Waiting for abnormally long accept(11)` 5회 연속. 네트워크 릴레이 지연, 부하 극저 상태와 무관. WSL 경량 이슈로 판단.
4. **Keepalive v7.3 재시작** — 04:46 정상 기동, Windows 절전 모드 차단 설정 완료.
5. **Gateway/MCP 로그 에러 없음** — 야간 4시간 동안 CRITICAL/WARNING 0건. 청정 상태.

### 🟡 지속 이슈 (변화 없음)
- KeepAlive v7.3 Crash Loop (1분 간격) — pidfile 충돌 원인, 재시작 반복
- Trinity: CowAgent + OpenDesign 서비스 다운 (MetaClaw만 404 생존)
- MetaClaw HTTP 404 — 프로세스 생존하나 API 응답 불가
- MCP Python Zombie 5개 지속
- KiwoomAuth 8050 인증 실패
- Tavily API 키 만료 (401)

### 비고
- 심야 4시간, 사용자 활동 없음. 시스템 안정적 정적 유지
- WSL vsock 경고는 신규 이슈이나 심각도 낮음 (Relay 타임아웃, 서비스 영향 없음)
- 금일(5/8) 거래일 — 현금 보유 상태로 장 개시

---

## 2026-05-08 (Fri) 08:45 — 장중 스냅샷 (금요일)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 5/7 재시작) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/5~, 3일차) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, 10분 주기 스캔) |
| WebUI | ✅ 정상 (PID 87604, 포트 3000) |
| KeepAlive v7.3 | 🔄 PID 68425, 활성 |
| tmux 세션 | 6개 (hermes/hermes-mcp/jongdari/trinity-cow/trinity-meta/trinity-od) |
| MCP 서버 8개 | 모두 정상 |
| 메모리 | 3,660MB / 7,748MB (47.2%) 🟡 |
| 디스크 | 3% (29G/1007G) 🟢 |
| WSL Uptime | 3d 4.7h (5/5 04:04 기동) |

### 포트폴리오
- **현금**: 4,929,810원 (전주 대비 -1.4% 감소)
- **포지션**: 없음 (5/3 삼성부광 34주 + 나우로보틱스 10주 → 모두 청산됨)
- **총 평가**: 4,929,810원 (-1.4% vs 5/3 4,985,110원)

### Macro (08:43 기준)
- **KOSPI**: 7,384.56 (5/3 6,598→7,384, +10.37% 3일간 폭등)
- **KOSDAQ**: 1,210.17
- **WTI**: $97.05 ($100 아래 하락)
- **USD/KRW**: ₩1,455.62 (안정)
- **CB Score**: 22/100 (이전 6→22 개선, KOSPI 1M +37.3%)
- **Market State**: NORMAL

### AI Council 분석 (08:43)
| 종목 | 결정 | 신뢰도 | 분석관 |
|:-----|:------|:-------|:-------|
| 457370.KQ (한켐) | ✅ HOLD | 17% | 기술적:HOLD/뉴스:HOLD/리스크:HOLD(47%) |
| 336680.KQ (탑런토탈솔루션) | ✅ HOLD | 14% | 기술적:BUY(74%)/뉴스:HOLD/리스크:HOLD(47%) |
- 336680.KQ: 기술적 분석관 BUY(74% 강력)이나 리스크관이 HOLD로 제동
- 전체 포지션 없어 실제 매매 없음

### 시장 특이사항
- **KOSPI 3일 +10.37% 급등** — 극단적 상승, CB Score 22/100 (아직 공포 영역이나 개선 중)
- KOSPI 7,384 — 사상 최고치 근접 또는 돌파
- 모멘텀: POSCO(005490.KS)+5.7%, 현대차+4.0%, SK하이닉스+3.3%

### Tomorrow Strategy (5/8)
1. 삼성전자(005930) — Score 92, 진입 64,200 / 목표 68,500
2. SK하이닉스(000660) — Score 88, 진입 172,000 / 목표 185,000
3. 현대차(005380) — Score 85, 진입 235,000 / 목표 258,000

### 🟡 지속 이슈 (변화 없음)
- Trinity: CowAgent + OpenDesign 서비스 다운
- MetaClaw HTTP 404
- Tavily API 키 만료 (401)
- MCP Python Zombie 5개
- KiwoomAuth 8050 인증 실패

### Action Required
- [ ] KOSPI 7,384 급등 — 조정 리스크 대비, 현금 보유 전략 유효
- [ ] 포트폴리오 청산 원인 확인 (portfolio.json 초기화됨)
- [ ] 336680.KQ 기술적 분석관 BUY(74%) — 리스크 해소 시 진입 검토
- [ ] Tavily API 키 갱신 필요

---

## 2026-05-09 (Sat) 00:45 — 토요일 새벽 스냅샷 (주말, 휴장)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 5/7 01:19 --replace, **47h+ 가동**) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/5~, 4일차) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, 4일차) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 5/6~) |
| MetaClaw | ⚠️ PID 188742 생존 (port 30000, 404 지속, 8일차) |
| CowAgent (Trinity) | ❌ 다운 |
| OpenDesign (Trinity) | ❌ 다운 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-* — 6개 |
| MCP 서버 | filesystem/fetch/tavily/time + Python 6종 (Zombie) |
| MCP Python Zombie | 6개 RSS ~1KB, 실행 중단 상태 |
| 메모리 | **3,730MB / 7,748MB (48%)** 🟢 안정 |
| 디스크 | 3% (29G/1007G) 🟢 |
| Swap | 1,503MB / 2,048MB (73.4%) 🟡 |
| WSL Uptime | **3d 20.7h** (5/5 04:04 기동) |
| WSL KeepAlive | ✅ 정상 (bash 루프, 4일차) |

### 📊 Macro (KOSPI_data.json 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,490.05** (5/7 종가, +1.43%) | 사상 최고 경신, 5/8 NaN (휴장/미수집) |
| KOSDAQ | 1,199 (5/7) | 1,200선 이탈 |
| USD/KRW | 1,447~1,451 | 원화 강세 지속 |
| WTI | $94~$97 | $100 이탈 5일차 |

### 포트폴리오
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음 (5/7 전량 청산 완료)
- 삼성부광(014950.KQ): 5/7 장중 8,520원까지 하락 후 손절
- 나우로보틱스(473980.KQ): 5/7 27,400원 손절

### 🐛 지속 이슈 (변화 없음, 5/7 08:45 이후)
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (9일차)** — KOSPI=NaN, 종목 데이터 미수집 | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패 (9일차)** | 🔴 미해결 |
| 3 | **Tavily API 키 만료 (401)** — 검색 기능 마비 | 🔴 미해결 |
| 4 | **MCP Python Zombie 6개** — RSS 1KB, Gateway 재시행 필요 | 🔴 지속 |
| 5 | **Trinity: CowAgent + OpenDesign 서비스 다운** | 🔴 지속 |
| 6 | **MetaClaw HTTP 404** — 프로세스 생존하나 API 응답 불가 | 🟡 지속 |
| 7 | **Swap 73.4% 사용** — 물리 메모리는 48% 여유 | 🟡 관찰 |

### 비고
- 5/7 08:45→5/9 00:45, 약 40시간 경과. 시스템 정적 상태 유지.
- KOSPI 5/7 마감 7,490.05 (08:45 스냅샷의 7,384→7,490으로 상향 조정) — KOSPI_data.json 갱신됨
- 5/8(금) 데이터 NaN — 휴장 또는 데이터 미수집
- KOSPI RSI 91.9 극단 과열에도 5/7 추가 상승 마감 (7,384→7,490)
- 주말(5/9~5/10) 휴장, 다음 거래일 5/11(월)
- 기록학 내용: 기존 6개 Critical 이슈 전부 미해결 상태로 주말 진입

---

## 2026-05-09 (Sat) 04:45 — 토요일 새벽 스냅샷 (주말, 00:45 이후 4시간)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 5/7 01:19 --replace, **51h+ 가동**, 연속 uptime 경신) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/5~, 4일차) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, nexus_orchestrator, 5/5~, **4일차**, CPU 79분 누적) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 5/6~, 3일차) |
| MetaClaw (Trinity) | ⚠️ PID 188742 생존 (port 30000, 404 지속, 5/4 복구 후 8일차) |
| **CowAgent MCP 신규** | ✅ PID 83776, 02:01 기동 — cowagent MCP server tool |
| **MetaClaw MCP 신규** | ✅ PID 84102, 02:02 기동 — metaclaw MCP server tool |
| CowAgent (Trinity 서비스) | ❌ 세션만 생존 |
| OpenDesign (Trinity) | ❌ 세션만 생존 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — **6개 유지** |
| MCP 서버 | filesystem×6 / time×5 / fetch×5 — MCP 중복 증가 |
| 메모리 | **4,200MB / 7,748MB (54%)** 🟢 (00:45 48%→소폭 상승, 정상 범위) |
| 디스크 | 3% (29G/1007G) 🟢 |
| Swap | 1,312MB / 2,048MB (64%) 🟡 (00:45 73.4%→64% 개선) |
| WSL Uptime | **4일 35분** (5/5 04:04 기동) |
| WSL KeepAlive | ✅ 정상 (bash 루프, 4일차) |

### 🔔 00:45→04:45 변화점
1. **CowAgent/MetaClaw MCP 서버 신규 기동** (02:01~02:02) — `~/.hermes/mcp-tools/cowagent/server.py` 및 `metaclaw/server.py`가 각각 기동되어 MCP tool로 등록됨. 이전에는 없던 신규 프로세스로, Trinity 서비스 복구 시도의 일환으로 추정.
2. **Swap 73.4%→64% 개선** — 1,503MB→1,312MB로 약 191MB 해소. 물리 메모리는 안정적 유지.
3. **Gateway 51h+ uptime 경신** — 5/7 01:19 --replace 재시작 후 연속 가동 기록 갱신 중.
4. **야간 4시간, 신규 Critical 이슈 없음** — 시스템 전반 정적 상태 유지.

### 📊 Macro (00:45 기준 변화 없음)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,490.05** (5/7 종가) | 사상 최고 유지, 주말 휴장 |
| KOSDAQ | 1,199 (5/7) | 1,200선 이탈 |
| USD/KRW | 1,447~1,451 | 원화 강세 지속 |
| WTI | $94~$97 | $100 이탈 5일차 |

### 포트폴리오
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음 (5/7 전량 청산 완료)
- 다음 거래일: 5/11(월)

### 🐛 지속 이슈 (00:45 이후 변화 없음)
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류 (9일차)** — KOSPI=NaN, 종목 데이터 미수집 | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패 (9일차)** | 🔴 미해결 |
| 3 | **Tavily API 키 만료 (401)** — 검색 기능 마비 | 🔴 미해결 |
| 4 | **MCP Python Zombie 5~6개** — RSS ~1KB 실행 중단 | 🔴 지속 |
| 5 | **Trinity: CowAgent + OpenDesign 서비스 다운** | 🔴 지속 |
| 6 | **MetaClaw HTTP 404** — 프로세스 생존하나 API 응답 불가 | 🟡 지속 |

### 비고
- 주말(5/9 토~5/10 일) 휴장, 다음 거래일 5/11(월)
- Gateway 51h+ 무중단 기록, Jongdari 배틀루프 4일 연속 정상
- CowAgent/MetaClaw MCP tool 신규 기동 — Trinity 생태계 복원 시도로 보이나 Trinity 서비스 자체는 미복구
- 기록학 내용: 6개 Critical 이슈 전부 주말로 이월

---

## 2026-05-09 (Sat) 16:45 — 토요일 오후 스냅샷 (04:45 이후 +12시간)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 20920, 5/7~, **63h+** 연속 가동) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/5~, 4일차) |
| Jongdari 배틀루프 | ✅ 정상 (PID 15259, 5/5~, 4일차) |
| OpenWebUI | ✅ 정상 (PID 87604, port 3000, 5/6~, 3일차) |
| MetaClaw (Trinity) | ⚠️ PID 188742 생존 (port 30000, 404 지속) |
| CowAgent/MetaClaw MCP | ✅ MCP tool 8개 정상 (02:01 기동) |
| CowAgent/OpenDesign 서비스 | ❌ 다운 상태 유지 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od / cad / cargo / vo — **9개** (+cad, cargo, vo 신규) |
| 메모리 | **3,830MB / 7,748MB (49%)** 🟢 (04:45 54%→49% 개선) |
| 디스크 | 3% (26G/1007G) 🟢 |
| Swap | 1,429MB / 2,048MB (70%) 🟡 (04:45 64%→70% 소폭 상승) |
| WSL Uptime | **4.5일** (5/5 04:04 기동) |
| WSL KeepAlive | ✅ 정상 (PID 25986, bash 루프) |

### 🔔 04:45→16:45 변화점
1. **KOSPI 5/8 종가 7,498.0** (+0.1%, 5/7 대비 소폭 상승) — 신규 데이터 수집 완료
2. **메모리 54%→49% 개선** — 약 370MB 해소 (MCP 프로세스 안정화 효과)
3. **tmux 세션 6→9개 증가** — `cad`, `cargo`, `vo` 신규 세션 발견 (16:36~16:46 생성)
4. **Swap 64%→70% 소폭 상승** — 1,312→1,429MB (+117MB), 안정 범위
5. **Gateway 51h→63h uptime 경신** — 추가 12시간 무중단
6. **주말 오후, 신규 Critical 이슈 없음**

### 📊 Macro (5/8 업데이트 반영)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,498.0** (5/8 종가) | 사상 최고, +0.1% 소폭 상승 |
| KOSDAQ | 1,199 (5/7) | 1,200선 이탈 유지 |
| USD/KRW | 1,447~1,451 | 변화 없음 |
| WTI | $94~$97 | 지속 하락권 |

### 포트폴리오 (변동 없음)
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음
- 다음 거래일: **5/11(월)**

### 🐛 지속 이슈 (변화 없음, 10일차 진입)
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | **yfinance .KS 티커 오류** — KOSPI=NaN | 🔴 미해결 |
| 2 | **KiwoomAuth 8050 지정단말기 인증 실패** | 🔴 미해결 |
| 3 | **Tavily API 키 만료 (401)** — 검색 마비 | 🔴 미해결 |
| 4 | **MCP Python Zombie 5~6개** — RSS ~1KB | 🔴 지속 |
| 5 | **Trinity: CowAgent+OpenDesign 다운** | 🔴 지속 |
| 6 | **MetaClaw HTTP 404** — 프로세스 생존 | 🟡 지속 |

### 비고
- 토요일 주말, 전일 대비 특이사항 없음. 6개 이슈 10일차 진입.
- KOSPI 5/8 종가 7,498 — 추가 상승 없이 소폭 안정화. RSI 극단 과열권.
- Gateway 63h+ 최장 uptime 기록 중. Jongdari 4일 연속 정상 운영.
- 신규 tmux 세션(cad/cargo/vo) 확인 — 외부 작업 또는 자동화 프로세스로 추정.
- 다음 거래일 5/11(월) 오픈까지 약 40시간 남음.

## 2026-05-10 (Sun) 15:03 — 자동 주말 스냅샷

### 시스템 현황 (전일 대비 변화 없음)
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 20920, uptime 3일 15h) |
| Jongdari 배틀루프 | 비활성 (주말) |
| MCP 서버 8개 | 모두 정상 |
| Open WebUI | 정상 (:3000) |
| 메모리 | 778MB / 7,748MB (~10%) — 안정적 |
| Uptime | 5일 9h 50m |

### 포트폴리오 (변동 없음)
- **현금 100%**: 4,929,810원
- **포지션**: 없음
- 다음 거래일: **5/11(월)**

### 📊 Macro
| 지표 | 값 |
|:-----|:----|
| KOSPI (5/8) | 7,498.0 |
| USD/KRW | 1,447~1,451 |
| WTI | $94~$97 |

### 지속 이슈 (11일차 진입, 변화 없음)
1. yfinance .KS 티커 오류 (KOSPI=NaN) 🔴
2. KiwoomAuth 8050 지정단말기 인증 실패 🔴
3. Tavily API 키 만료 (401) 🔴
4. MCP Python Zombie 5~6개 🔴
5. Trinity: CowAgent+OpenDesign 다운 🔴
6. MetaClaw HTTP 404 🟡

### 비고
- 일요일 주말, 전일 대비 특이사항 없음. 6개 이슈 11일차 진입.
- Gateway 63h+ uptime 지속. KOSPI 7,498 — RSI 과열권 유지.
- 신규 학습/기록할 기술 팁이나 버그 해결 사항 없음.
|
## 2026-05-11 (Mon) 04:45 — 새벽 스냅샷 (00:45 이후 4시간, 거래일 D-DAY)

### 시스템 현황 (변화 없음, 00:45 기준 동일)
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 298, ~13h 가동) |
| Jongdari 배틀루프 | ✅ 정상 (PID 1884, 10분 주기 사이클) |
| OpenWebUI | ✅ 정상 (port 3000, PID 307) |
| MetaClaw | ✅ 정상 (port 30000, PID 3626) |
| CowAgent/OpenDesign | ❌ 다운 (세션만 유지) |
| 가상오피스(port 8001) | ✅ 정상 (PID 76154) |
| 메모리 | 4,100MB/7,748MB (53%) 🟢 |
| Swap | 0B 🟢 (완전 해소 유지) |
| 디스크 | 3% (26G/1007G) 🟢 |
| WSL Uptime | ~9.9h (5/10 재부팅) |

### 00:45→04:45 변화
- **4시간간 신규 이슈 없음** — 시스템 전반 정적 상태 유지
- Swap 0B 유지, 메모리 47%→53% 소폭 상승 (정상 범위)
- 금일(5/11 월) 09:00 거래일 재개

### 포트폴리오 (변동 없음)
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%), 포지션 없음

### Macro
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | 7,498.0 (5/8 종가) | 사상 최고, RSI 91.7 과열 |
| USD/KRW | ₩1,461 | 중립권 |
| WTI | $95 | $100 이탈 6일차 |
| CB Score | 22/100 | 개선 중 |

### 지속 이슈 (12일차 진입, 변화 없음)
1. yfinance .KS 티커 오류 🔴
2. KiwoomAuth 8050 지정단말기 인증 실패 🔴
3. Tavily API 키 만료 (401) 🔴
4. MCP Python Zombie 5~6개 🔴
5. Trinity: CowAgent+OpenDesign 다운 🔴
6. MetaClaw HTTP 404 🟡

### 비고
- 5/11(월) 09:00 거래일 재개. KOSPI 7,500 고점 테스트 관찰.
- 00:45 이후 4시간, 시스템 정적 상태 — 기록할 신규 내용 없음.

---

## 2026-05-11 (Mon) 00:45 — 거래일 재개 새벽 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 298, 5/10 15:44 --replace 재시작, ~9h 가동) |
| Hermes CLI | ✅ tmux hermes 세션 유지 (5/10 15:45~) |
| Jongdari 배틀루프 | ✅ 정상 (PID 1884, nexus_orchestrator, 10분 주기 사이클, 00:40 Cycle Complete) |
| OpenWebUI | ✅ 정상 (PID 307, port 3000, 200 OK, 10% 메모리) |
| MetaClaw | ✅ 정상 (PID 3626, port 30000, trinity-metaclaw 세션) |
| CowAgent (Trinity) | ⚠️ tmux 세션만 유지, 서비스 다운 |
| OpenDesign (Trinity) | ⚠️ tmux 세션만 유지, 서비스 다운 |
| tmux 세션 | hermes / hermes-mcp / jongdari / trinity-cow / trinity-meta / trinity-od — 6개 |
| MCP 서버 5+종 | ✅ 정상 (time/fetch/filesystem/tavily + Python MCP) |
| 가상오피스(port 8001) | ✅ 정상 (uvicorn, PID 76154) |
| 메모리 | **3,600MB / 7,748MB (47%)** 🟢 안정 |
| 디스크 | 3% (26G/1007G) 🟢 |
| Swap | 0B 사용 🟢 (이전 73% → 완전 해소) |
| Load Average | 0.14/0.33/0.41 🟢 |
| WSL Uptime | **5h 51m** (5/10 19:00 WSL 재부팅) |
| Gateway Uptime | ~9h (5/10 15:44 재시작) |

### 포트폴리오
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음 (5/7 전량 청산 완료)
- **paper_portfolio**: 청산 후 미발견

### Macro (Jongdari 배틀루프 마지막 수집 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,498.0** (5/8 종가) | 사상 최고 유지, 주말 간 정체 |
| KOSDAQ | 1,207.72 (5/8) | 소폭 회복 |
| CB Score | **22/100** | 이전 30→22 소폭 개선, 여전히 공포 |
| KOSPI 1M 모멘텀 | **+36.5%** | 극단적 상승 |
| WTI | **$95** | $100 이탈 6일차 |
| USD/KRW | **₩1,461** | 중립권, 안정적 |
| 시장데이터 | 뉴스 8건 / 모멘텀 5개 | 정상 수집 |

### AI Council (00:40 기준)
- **061090.KQ → SELL(신뢰도 19%)** — 기술적:STRONG_SELL(25%) / 뉴스:HOLD(50%) / 리스크:HOLD(47%)
- Deep Dive 사이클 정상: 10분 주기로 15개 KOSDAQ 종목 순환 분석 중

### 📌 오늘(5/11 월) 체크포인트
- 🔴 **6개 Critical 이슈 그대로 주말 이월** — 12일차 진입
  1. yfinance .KS 티커 오류 (KOSPI=NaN)
  2. KiwoomAuth 8050 지정단말기 인증 실패
  3. Tavily API 키 만료 (401)
  4. MCP Python Zombie 5~6개
  5. Trinity: CowAgent+OpenDesign 다운
  6. MetaClaw HTTP 404 (port 30000 생존)
- 📊 KOSPI 7,500 고점 테스트 — RSI 91.7 과열, 단기 조정 가능성
- 🟢 Swap 완전 해소 (0B) — 메모리 상태 최적
- 🟢 가상오피스 재가동 (port 8001, uvicorn)

### 비고
- 5/11(월) 거래일 재개. KOSPI 5/8 7,498 마감 후 2일 휴장.
- Gateway 5/10 15:44 재시작 후 정상 유지. CLI 세션 2개 활성.
- 주말 간 시스템 전반 안정적. 신규 학습/기술 팁/버그 없음.

### 2026-05-10 (Sun) — Tech Scavenger DNS Failure
- **17:20 KST**: `hermes_tech_scavenger.py` timed out after 120s
- **Root cause**: Transient DNS failure (`Temporary failure in name resolution`) at 17:20 UTC
- **Impact**: All 3 channels (GitHub 0/30, arXiv partial, HF 0/10) failed to collect
- **Fix applied (v1.2)**: Early-abort on DNS failure — if DNS error detected, skip remaining queries instead of timing out on each one sequentially
- **Script fixed**: `~/.hermes/scripts/hermes_tech_scavenger.py` — `dns_ok` flag in `scavenge_github()` and `scavenge_arxiv()`
- **Skill updated**: `devops/hermes-tech-scavenger` — DNS failure section added

## 2026-05-10 (Sun) 20:45 — 주말 저녁 스냅샷

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 298, 15:44 재시작) |
| Hermes CLI | tmux hermes 세션 유지 |
| MetaClaw | 정상 (port 30000, PID 3626) |
| Jongdari 배틀루프 | 정상 — 10분 주기 사이클 완료 |
| WebUI | 정상 (port 3000, PID 307) |
| MCP 서버 5개 | 모두 정상 |
| 메모리 | 3,641MB / 7,748MB (47%) |
| 디스크 | 26G/1007G (3%) |
| Gateway Uptime | ~5시간 (15:44 재시작) |

### 포트폴리오 (Dashboard 5/7 기준 — 미갱신)
- 현금: 4,655,810원 | 총 평가: 4,936,810원 (-1.26%)
- 나우로보틱스(459510.KQ): 10주 @30,550원 → 28,100원 (-8.02%)
- **참고**: 실제 포지션은 5/8(금) 청산 후 100% 현금(4,929,810원) 상태로 확인됨. Dashboard 갱신 필요.

### 시장 (5/8 마감 기준 — 휴장)
- KOSPI: 7,498.00 (RSI 91.7, 과열) | KOSDAQ: 1,207.72
- USD/KRW: 1,461.48 (중립) | WTI: $95.42 (중립, 주간 -10%)
- 삼성부광: 8,980원 (+6.02%) | 에이치엘사이언스: 17,700원 (+4.49%)

### 지속 이슈 (11일차)
- 6건 미해결: KiwoomAuth 8050, yfinance NaN, Tavily API 만료, MCP 좀비, MetaClaw 404, CowAgent/OpenDesign 다운
- Dashboard 3일 이상 미갱신 (마지막: 5/7 00:17)

### 주말 요약
- DNS 장애(fix v1.2) 적용 확인. Tech Scavenger 정상화.
- Skill 라이브러리 47개 유지 (신규 흡수 없음)

## 2026-05-11 (Mon) 08:30 — 프리마켓 스냅샷 (T-30min)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | 정상 (PID 298, 17h uptime) |
| Memory | 4.1Gi/7.6Gi (53%) |
| Disk | 26G/1007G (3%) |
| Swap | ~0MiB (완전 해소) |
| Dashboard | ✅ **갱신 완료 (5/7→5/11 08:30)** |
| WTI | **$98.33 (+3.05% 주말 반등)** — 5/8 $95.42→5/10 $98.33 |
| KOSPI | 7,498.00 — RSI 91.7 과매수, 7,500선 테스트 imminent |

### 금일 관찰 포인트
- KOSPI 7,500 고점 테스트 — RSI 91.7 과열, 단기 조정 가능성
- 삼성부광 5/8 +6.02% 반등 이후 추세 지속 여부
- WTI $100선 재돌파 시도 — 에너지 섹터 영향
- 포트폴리오: 100% 현금 (₩4,929,810)

### 신규 지식 흡수 (07:07 KST)
- **Culture Economy 8건** — K-구독박스/Alibaba B2B/K-뷰티 유럽/BTS 머천다이징/K-Food 공급망 등 물류 연계 기회 매핑
- **Key Takeaways 3건 보완 완료** — agent-skills-eval/CodexSaver/yt-dlp
|- **47개 스킬 유지** (신규 스킬 흡수 없음), Dashboard 갱신 완료
|- 월요일(5/11) 개장 준비: KOSPI 7,500 고점 테스트 관찰, Dashboard 갱신

## 2026-05-12 (Tue) 00:30 — Evolution Cycle (Market Close + 12h)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 |
| 메모리 | 🟢 ~50% |
| 디스크 | 🟢 3% (26G/1007G) |
| MetaClaw | ✅ 정상 (port 30000) |
| OpenWebUI | ✅ 정상 (port 3000) |
| Jongdari 배틀루프 | ✅ 정상 |
| MCP 서버 | ✅ 정상 |
| Dashboard JSON | 🔴 **5일차 스테일** (5/7 데이터) |

### 지식 흡수
- **1개 신규 문서**: MCP-멀티검색-20260511_1040.md (올리브영 2026 인기상품 리서치)
- **0개 신규 스킬** — 47개 스킬 유지 (변동 없음)
- Key Takeaways 3건 모두 해결 (이전 사이클)

### 시장 리뷰 (5/11 거래일)
- **KOSPI**: 10:10 스캔 기준 7,867 (+4.93% 급등, RSI 95.0 극단 과매수)
- **KOSDAQ**: 1,194 (-1.11%) — 대형주와 소형주 극심한 괴리
- **삼성부광**: 8,480원 (-5.57% 당일) — 청산 결정의 적절성 재확인
- **WTI**: $99.03 (+3.78%) — $100선 임박
- **USD/KRW**: 1,470.78 (+1.10%)
- **포트폴리오**: **현금 100% 유지** (₩4,929,810) — 청산 결정 적절했음

### 🐛 지속 이슈 (13일차, 변화 없음)
| # | 이슈 | 상태 |
|:-:|:-----|:----:|
| 1 | yfinance .KS 티커 오류 (KOSPI=NaN) | 🔴 미해결 |
| 2 | KiwoomAuth 8050 인증 실패 | 🔴 미해결 |
| 3 | Tavily API 키 만료 (401) | 🔴 미해결 |
| 4 | MCP Python Zombie 5~6개 | 🔴 지속 |
| 5 | Trinity: CowAgent+OpenDesign 다운 | 🔴 지속 |
- 신규 지식 흡수: 1개 (비즈니스 인텔리전스), 스킬 변화 없음

## 2026-05-12 (Tue) 00:45 — Cron 스냅샷 (15분 경과, 변경 없음)

| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 298, 5/10 시작) |
| OpenWebUI | ✅ 정상 (port 3000) |
| MetaClaw | ✅ 정상 (port 30000, PID 3626) |
| Jongdari 배틀루프 | ✅ 정상 (tmux 세션 유지) |
| MCP 서버 | 🟡 3개 확인 (기존 8개→3개, 일부 유실 가능) |
| Dashboard JSON | 🔴 5일차 스테일 (5/7 데이터, 파일 타임스탬프만 갱신) |
| 메모리 | 🟡 4.4Gi/7.6Gi (58%, 전일比 상승) |
| 디스크 | 🟢 3% (26G/1007G) |
| Uptime | 1일 5:56 |

### 이슈 현황 (14일차 진입, 모두 변동 없음)
1. yfinance .KS 티커 오류 (KOSPI=NaN) — 🔴 미해결
2. KiwoomAuth 8050 인증 실패 — 🔴 미해결
3. Tavily API 키 만료 (401) — 🔴 미해결
4. MCP Python Zombie (5~6개→현재 3개 추정) — 🔴 지속
5. Trinity: CowAgent+OpenDesign 다운 — 🔴 지속
6. MetaClaw HTTP 404 — 🟡 지속

### 비고
- 00:44:35 MCP fetch/fetch transient error 1회 발생 (자동 복구)
- 00:30 대비 신규 이슈·변화 없음 — 모든 지속 이슈 14일차
- 포트폴리오: 현금 100% 유지 (₩4,929,810)
- KOSPI 7,867 RSI 95.0 — 5/12 조정 리스크 여전

---

### 결론 (00:30 사이클)
- KOSPI 7,867 RSI 95.0 — 극단적 과매수, 5/12 조정 가능성 높음
- 포트폴리오 현금 100% 유지 — 시장 급등에도 소형주 디커플링으로 진입 자제 타당
- 6개 Critical 이슈 13일차 진입 — 수동 개입 필요
- 신규 지식 흡수: 1개 (비즈니스 인텔리전스), 스킬 변화 없음

## 2026-05-12 (Tue) 11:00 — 🧠 Brain Sync

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 |
| Tech Brain Sync | ✅ 70개 문서 유지, 9개 arXiv + 2개 GitHub 처리 |
| 신규 문서 | 11개 (9 arXiv + 2 GitHub) — 모두 기존 중복 → 스킵 |
| 중복 스킵 | 9개 arXiv (429 rate limit 복구 후 기존 데이터 활용) |
| Brain Sync 상태 | Key Takeaways 작성 완료, AI_Agents Index 업데이트 |

### Today's Paper Batch Analysis

| Paper | Category | Verdict |
|-------|----------|---------|
| **LLMs Improving LLMs: Agentic Discovery for TTS** (2605.08083) | AI_Agents | ✅ HIGH — Hermes self-evolution pattern |
| **The Memory Curse** (2605.08060) 🔴 | AI_Agents | 🚨 CRITICAL — multi-agent cooperation risk |
| **VecCISC: Confidence-Informed Self-Consistency** (2605.08070) | LLM | ✅ HIGH — consensus mechanism upgrade |
| **Conformal Path Reasoning for KGQA** (2605.08077) | LLM | 🟡 Medium — structured retrieval calibration |
| **Flow-OPD: On-Policy Distillation** (2605.08063) | NLP | 🟡 Medium — gradient interference concept |
| **EmambaIR** (2605.08073) | CV | ⏭️ Skipped — CV domain |
| **Normalizing Trajectory Models** (2605.08078) | DL | ⏭️ Skipped — generative |
| **123D: Autonomous Driving Data** (2605.08084) | Robotics | ⏭️ Skipped — driving domain |
| **Zero-Shot Imagined Speech Decoding** (2605.08075) | BCI | ⏭️ Skipped — neuroscience |

### GitHub Trending
| Repo | Stars | Notes |
|------|-------|-------|
| haydenbleasel/files-sdk | ⭐337 | Unified storage SDK for blob/object backends |
| shareAI-lab/learn-claude-code | ⭐59,773 | Bash-only nano agent harness (0→1) |

### Key Insight — The Memory Curse
**⚠️ This is the most important finding today.** The paper empirically demonstrates that LLM agents with *more* context history become *less* cooperative in multi-agent settings. This is counterintuitive — we assume more memory helps — but the data shows it doesn't. For Hermes' AI Council (multiple agents voting/negotiating), this means:
- Shared context windows between council members may *worsen* consensus quality
- Bounded, scoped memory per interaction may outperform full-history sharing
- Implement cooperative intent verification gates between agent handoffs

### 지속 이슈 (14일차)
1. yfinance .KS 티커 오류 (KOSPI=NaN) — 🔴 미해결
2. KiwoomAuth 8050 인증 실패 — 🔴 미해결
3. Tavily API 키 만료 (401) — 🔴 미해결
4. MCP Python Zombie — 🔴 지속
5. Trinity: CowAgent+OpenDesign 다운 — 🔴 지속
6. MetaClaw HTTP 404 — 🟡 지속

### 포트폴리오
- 현금 100% 유지 (₩4,929,810)
- KOSPI 7,867 RSI 95.0 — 5/12 조정 리스크 지속

---

## 2026-05-12 (Tue) 12:00 — 🧠 Brain Sync (2차 — 1120~1200 배치)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Tech Brain Sync | ✅ 99개 문서 유지, 10개 신규 저장 (2개 중복 스킵) |
| 신규 문서 | 10개 (arXiv + GitHub Trending) |
| 10_Wiki Index | ✅ 갱신 완료 (12→75 docs, AI_Agents/MCP 카테고리 추가) |

### Today's 2nd Batch Analysis

| Paper/Source | Category | Verdict |
|-------------|----------|---------|
| **Agentic MIP Research** (2605.09186) | AI_Agents | 🟡 Medium — LLM-driven MIP constraint handler generation |
| **Beyond Autonomy: Tiered AgentRunner** (2605.10223) | AI_Agents | ✅ HIGH — Enterprise governable agent framework (write-review gates, acceptance verification) |
| **FusionRCG** (2605.10312) | HPC | ⏭️ Skipped — GPU memory for quantum chemistry |
| **RADAR: Redundancy-Aware Diffusion** (2605.09907) | AI_Agents | ✅ HIGH — Multi-agent comm structure generation via diffusion |
| **STAR: Failure-Aware Markov Routing** (2605.10057) | AI_Agents | ✅ HIGH — Multi-agent spatiotemporal reasoning with failure recovery |
| **GELATO: Adaptive Token Offloading** (2605.10124) | LLM | 🟡 Medium — Device-edge speculative LLM inference |
| **Open Ontologies** (2605.09184) | MCP | ✅ HIGH — Rust-based ontology engineering via MCP protocol |
| **DP-LAC: Adaptive Clipping** (2605.10272) | LLM | 🟡 Medium — Federated fine-tuning DP-SGD optimization |
| **Usability as a Weapon** (2605.10133) | LLM/Security | ✅ HIGH — Usability requirements used to bypass LLM code safety |
| **Positive Alignment: AI for Human Flourishing** (2605.10310) | RL/Alignment | 🟡 Medium — Beyond safety to positive AI design |
| **shareAI-lab/learn-claude-code** (⭐59,773) | GitHub | 🟡 Medium — Bash-only nano agent harness 0→1 |
| **PixelFlowCast** (2605.10046) | DL/CV | ⏭️ Skipped — weather nowcasting domain |
| **MARGIN: Vulnerability Detection** (2605.10240) | LLM/Security | 🟡 Medium — Imbalanced vulnerability detection via geometry |
| **Nano-U: Terrain Segmentation** (2605.10265) | MLOps | ⏭️ Skipped — tiny robot navigation |
| **PaMoSplat: Gaussian Splatting** (2605.10099) | CV | ⏭️ Skipped — 3D reconstruction |
| **Emergent Semantic Role Understanding** (2605.10290) | CV | ⏭️ Skipped |
| **Active Tabular Augmentation via Diffusion** (2605.10304) | DL | ⏭️ Skipped |
| **GRAPHLCP: Conformal Prediction** (2605.10262) | Tools | 🟡 Medium — Structure-aware localized conformal prediction |
| **Signature Approach for Contextual Bandits** (2605.10283) | LLM | ⏭️ Skipped |
| **MCP-멀티검색: 올리브영 2026 인기상품** | MCP | 📊 Culture-Economy intelligence report |

### Key Findings for Hermes

1. **🔴 Memory Curse confirmed** (already in 11:00 log) — the most critical paper this cycle for Hermes AI Council
2. **🟢 Beyond Autonomy/AgentRunner** — enterprise agent frameworks converging on 3-tier architecture: independent review gates, acceptance verification, tiered compute allocation → aligns with Hermes' constraint_decay_awareness and execution_lineage_dag patterns
3. **🟢 RADAR** — multi-agent communication optimization via redundancy-aware structure generation → applicable to Hermes Trinity coordination optimization
4. **🟢 STAR** — failure-aware routing with MARL for multi-agent systems → applicable to Hermes delegation failure recovery
5. **🟢 Open Ontologies** — MCP-based ontology engineering in Rust → MCP protocol expanding into knowledge engineering domain
6. **🟢 Usability as a Weapon** — usability requirements (high-signal) override implicit security requirements (low-signal) in LLM code gen → defensive coding guidance for Hermes' own code generation

### 지속 이슈 (14일차 — 변화 없음)
1. yfinance .KS 티커 오류 (KOSPI=NaN) — 🔴
2. KiwoomAuth 8050 인증 실패 — 🔴
3. Tavily API 키 만료 (401) — 🔴
4. MetaClaw HTTP 404 — 🟡
5. Trinity: CowAgent+OpenDesign — 🔴
6. Dashboard JSON stale (5/7) — 🔴
7. MCP Python Zombie — 🔴

### 포트폴리오
- 현금 100% 유지 (₩4,929,810)
- KOSPI 7,948 (+6.00%) RSI 84.9 — 극단 과매수 유지
- 삼성부광 8,240원 RSI 29.4 — 과매도 진입 (포트폴리오 -17.93%)
- USD/KRW 1,482.63 (+1.51%) — 4일 연속 원화 약세
- WTI $98.54 — $100 저항 재확인
|

---

## 2026-05-13 (Wed) 00:46 — 새벽 스냅샷 (5/12 12:00 이후 +12h)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 298, 5/10~, **3일차 가동**) |
| Jongdari 배틀루프 | ✅ 정상 (PID 1884, nexus_orchestrator) |
| OpenWebUI | ✅ 정상 (port 3000, PID 307) |
| MetaClaw | ✅ 정상 (port 30000, PID 3626) |
| CowAgent/OpenDesign (Trinity) | ❌ 세션만 생존, 서비스 다운 |
| MCP 서버 | ✅ filesystem/time/fetch/tavily + Python MCP 정상 |
| 메모리 | 4,300MB / 7,748MB (55%) 🟢 |
| 디스크 | 3% (26G/1007G) 🟢 |
| Swap | 799MB / 2,048MB (39%) 🟡 |
| WSL Uptime | 2d 6h (5/10 19:00 재부팅) |
| Dashboard JSON | 🔴 **6일차 스테일** (5/7 데이터) |

### 📊 Macro (5/12 종가 기준)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,643.15** | RSI 86.2 과매수, 7,500→7,643 반등 |
| KOSDAQ | 1,207 (5/8) | 데이터 정체 |
| 삼성부광 | 8,240원 | RSI 29.4 과매도 진입 |
| USD/KRW | 1,482.63 | 4일 연속 원화 약세 |
| WTI | $98.54 | $100 저항 재확인 |

### 포트폴리오 (변동 없음)
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음 (5/7 전량 청산)
- KOSPI 7,643에도 현금 보유 — 소형주 디커플링 지속

### 지속 이슈 (15일차 진입, 변화 없음)
1. yfinance .KS 티커 오류 (KOSPI=NaN) 🔴
2. KiwoomAuth 8050 지정단말기 인증 실패 🔴
3. Tavily API 키 만료 (401) 🔴
4. Dashboard 6일차 스테일 (5/7) 🔴
5. MCP Python Zombie 5~6개 🔴
6. Trinity: CowAgent+OpenDesign 다운 🔴
7. MetaClaw HTTP 404 🟡

### 비고
- 5/12 12:00 이후 12시간, 시스템 정적 상태 유지. 신규 버그/기술팁 없음.
- KOSPI 5/12 7,643 마감 (wiki 갱신 완료). RSI 86.2 여전히 과매수권.
- 삼성부광 8,240원 RSI 29.4 과매도 — 청산 결정 (5/7 @9,010) 적절했음.
- Dashboard JSON 5/7 이후 미갱신 (6일차) — 수동 갱신 필요.
- 6개 Critical 이슈 15일차 진입, 모두 미해결 상태로 주중 지속.


---

## 2026-05-13 (Wed) 04:45 — 새벽 스냅샷 (00:46 이후 +4h)

### 시스템 현황
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 298, 5/10~, **3일차 가동**) |
| Jongdari 배틀루프 | ✅ 정상 (PID 1884, 10분 주기 스캔, 04:43 Cycle Complete) |
| OpenWebUI | ✅ 정상 (port 3000, PID 307) |
| MetaClaw | 🟡 HTTP 404 — 프로세스 생존하나 API 미응답 |
| CowAgent/OpenDesign (Trinity) | ❌ 세션만 생존 |
| MCP Python 서버 | ✅ 정상 (PID 23958, 03:35 재시작) |
| 메모리 | 2,830MB / 7,748MB (36%) 🟢 |
| Swap | 921MB / 2,048MB (45%) 🟡 |
| 디스크 | 3% (26G/1007G) 🟢 |
| WSL Uptime | 2d 9h 58m (5/10 19:00 재부팅) |
| Dashboard JSON | 🔴 **7일차 스테일** (5/7 데이터) |

### 📊 Macro (실시간)
| 지표 | 값 | 비고 |
|:-----|:----|:------|
| KOSPI | **7,822.24** | 5/12 종가 7,643→7,822, +2.34% 급등 |
| KOSDAQ | 1,207.34 | 데이터 정체 |
| USD/KRW | **1,491.19** | 원화 약세 심화 (1,482→1,491) |
| WTI | **$102.28** | $100 재돌파, CRISIS MODE 재진입 |
| CB Score | **47/100** 🔶 | KOSPI 1M=33.2%, Vol=3.7%, Oil=$102(True), FX=₩1,491(True) |

### 🔶 CB Score 47 — DEFENSIVE MODE 진입
- 5/13 04:42 Nexus 로그: **CB Score=47/100** (5/8 22/100 → **+25p 상승**)
- KOSPI 1M 수익률 33.2% 반영, Vol 3.7% 안정
- 그러나 WTI $102(True) + USD/KRW ₩1,491(True) — **2개 붉은 깃발**
- DEFENSIVE MODE: 제한적 매수, 방산/에너지만 허용

### 포트폴리오 (변동 없음)
- **현금 100%**: 4,929,810원 (초기자본 대비 -1.4%)
- **포지션**: 없음 (portfolio.json cash 4,929,810, positions {}, history [])
- KOSPI 7,822에도 현금 보유 — DEFENSIVE MODE + 소형주 디커플링 지속

### 지속 이슈 (16일차 진입)
1. yfinance .KS 티커 오류 (KOSPI=NaN) 🔴
2. KiwoomAuth 8050 지정단말기 인증 실패 🔴
3. Tavily API 키 만료 (401) 🔴
4. Dashboard 7일차 스테일 (5/7) 🔴
5. MCP Python Zombie 🔴
6. Trinity: CowAgent+OpenDesign 다운 🔴
7. MetaClaw HTTP 404 🟡

### 비고
- CB Score 47/100 — DEFENSIVE MODE 전환. KOSPI 급등에도 포트폴리오 현금 유지 정당화.
- WTI $102 재돌파: 이전 4/29 $101→5/5 $104→5/12 $98→5/13 $102, $100 내왕 반복 중.
- USD/KRW 1,491: 1,480 임계치 돌파 지속, 수입물가 상승 압력.
- KOSPI 7,822 — RSI 과매수권에 WTI+환율 악재, 단기 조정 리스크 상존.
- MetaClaw HTTP 404 여전. Trinity 3종 모두 불완전.

## 2026-05-13 (Wed) 16:30 — 일일 로그 자동 생성

### 시스템 현황
| 항목 | 상태 |
|:-----|:-----:|
| Gateway | ✅ (PID 298, 3일차) |
| 배틀루프 | ✅ (사이클 정상) |
| KeepAlive | ✅ |
| 메모리 | 🟢 2.4Gi/7.6Gi (31%) |
| Swap | 🟡 739Mi/2.0Gi (36%) — 전일 1%→재악화 |

### 오늘의 주요 활동
- **00:15**: 의무 점검 — 전원 ✅, KeepAlive PID 파일 누락 버그 발견
- **00:30~04:00**: CB Score 47 — DEFENSIVE MODE 전환. KOSPI 7,822 현금 100%.
- **04:21~07:20**: Tech Scavenger 4회 — 모두 0개 신규 (중복)
- **15:20**: **Tech Scavenger 대규모 수집 — 19개 신규 문서** (arXiv)
  - AlphaGRPO, LongMemEval-V2, MEME 외 15편
  - **첫 MCP 카테고리 논문 수집** 🏆
- **07:21~15:20**: 8시간 실행 갭 — 프로세스 중단 추정

### 포트폴리오
- 현금 100% (₩4,929,810) — DEFENSIVE MODE 유지

### 이슈
- 7개 지속 이슈 (16일차) + Swap 36% 재악화 신규
- Tech Scavenger Cron job 미실행 (`last_run_at: null`)

### 2026-05-13 (Wed) 20:45 — 저녁 Cron Wiki Update

### 📋 시스템 현황
| 항목 | 상태 | 비고 |
|:-----|:----:|:-----|
| Hermes Gateway (systemd) | ✅ | PID 298, 3일차 (5/10~) |
| Jongdari 배틀루프 | ✅ | PID 57763, 사이클 정상 |
| Open WebUI | ✅ | port 3000, PID 307 |
| MetaClaw | 🟡 | HTTP 404, PID 3626 생존 |
| CowAgent (Trinity) | ❌ | 세션만 유지 |
| OpenDesign (Trinity) | ❌ | 세션만 유지 |
| tmux 세션 (6개) | ✅ | hermes / hermes-mcp / jongdari / trinity-3종 |
| 메모리 | 🟢 | 2.5Gi / 7.6Gi (33%) |
| Swap | 🟡 | 720Mi / 2.0Gi (35%) |
| 디스크 | 🟢 | 33Gi / 1007Gi (4%) |
| Uptime | 🟢 | 3d 1h |

### 📊 시장 현황 (5/13 close 기준, 변동 없음)
| 지표 | 값 | 비고 |
|:-----|:----:|:-----|
| KOSPI | 7,822.24 | RSI 86.2 과매수, 사상 최고 근접 |
| KOSDAQ | 1,207.34 | 데이터 정체 |
| WTI | $102.28 | $100 재돌파, CRISIS MODE |
| USD/KRW | 1,491.19 | 원화 약세 심화 |
| 삼성부광 | 7,840원 (-2.00%) | RSI 21.8 심각 과매도, 포트폴리오 **-21.91%** |
| CB Score | 47/100 🔶 | DEFENSIVE MODE — WTI+FX 붉은깃발 2개 |

### 포트폴리오
- **현금 100%**: ₩4,929,810 (초기자본 대비 -1.4%)
- **포지션**: 없음 (5/7 전량 청산)

### 📋 16:30→20:45 변화 요약 (4시간)
1. **MCP 멀티검색 3건 연속 수집** (18:41~18:52) — AI 에이전트 오픈소스 트렌드 2026 주제, 5.5초 avg latency
2. **MetaClaw HTTP 404 지속** — PID 3626 생존하나 API 미응답 (16일차)
3. **Swap 36%→35% 소폭 개선** — 739Mi→720Mi, 안정 범위
4. **메모리 31%→33% 소폭 상승** — 정상 변동 범위
5. **Gateway 3일차 무중단 유지** — PID 298, May10 19:00부터 71h+ 가동
6. **Jongdari 재시작 감지** — 이전 PID 1884(3일차)→PID 57763(16:07 신규), 배틀루프 사이클 정상
7. **대시보드 8일차 스테일** — 5/7 이후 미갱신 (수동 갱신 필요)
8. **신규 지식 발견 없음** — 기존 7개 Critical 이슈 변화 없음

### 🐛 지속 이슈 (16일차, 변화 없음)
| # | 이슈 | 심각도 |
|:-:|:-----|:------:|
| 1 | yfinance .KS 티커 오류 (KOSPI=NaN) | 🔴 |
| 2 | KiwoomAuth 8050 지정단말기 인증 실패 | 🔴 |
| 3 | Tavily API 키 만료 (401) | 🔴 |
| 4 | Dashboard 8일차 스테일 | 🔴 |
| 5 | MCP Python Zombie | 🔴 |
| 6 | Trinity: CowAgent+OpenDesign 다운 | 🔴 |
| 7 | MetaClaw HTTP 404 | 🟡 |

---

## 2026-05-14 (Thu) 16:30 — 오후 스냅샷 (KOSPI 7,981, 삼성부광 반등 +3.95%)

### 시스템 현황 (16:30 KST)
| 항목 | 상태 | 비고 |
|:-----|:----:|:-----:|
| Gateway (systemd) | ✅ active | PID 305, WSL 재부팅 후 복구 완료 |
| MetaClaw | ✅ | PID 61328, port 30000 정상 |
| OpenWebUI | ✅ | PID 312, port 3000 |
| Jongdari 배틀루프 | ✅ | PID 5941 (nexus_orchestrator, 14.5h+) |
| KeepAlive v7.3 | ✅ | 최근 사이클 정상 |
| tmux 6개 세션 | ✅ | all 복구 |
| 메모리 | 🟢 3.3Gi/7.6Gi (43%) | 안정 |
| Swap | 🟢 268KiB/2.0Gi (~0%) | 재부팅 효과 유지 |
| WSL Uptime | 🟢 14h 35m (01:58→) | |

### 시장 현황 (5/14 actual close)
| 지표 | 값 | 전일 대비 |
|:-----|:-------:|:---------:|
| KOSPI | **7,981.41** | 🟢 +137.40p (+1.75%) |
| KOSDAQ | **1,191.09** | 🟢 +14.16p (+1.20%) |
| USD/KRW | **1,490.26원** | 🔴 +0.72원 |
| WTI | **$101.00** | 🔴 -$2.49 (-2.41%) |
| 삼성부광 | **8,150원** | 🟢 +310원 (+3.95%) |
| 에이치엘 | **17,200원** | 🟢 +780원 (+4.75%) |
| 나우로보틱스 | **27,900원** | 🟢 +50원 (+0.18%) |

### 오늘의 주요 활동
1. **WSL 재부팅 (01:58)** — 14.5h 전, 전면 복구 완료
2. **Tech Scavenger 4회 (21건 신규)** — SkillOps, Phasor Memory, EVA-Bench, Good Agentic Friends 등
3. **MCP 멀티검색 7건** — 삼성전자 파업, 알테오젠, 삼성SDI-GM, US 트렌드
4. **Auto Evolution Cycle (15:00)** — IDLE, 스킬 47개 유지
5. **삼성부광 강한 반등 (+3.95%)** — 5일 연속 하락 마감 후 첫 반등
6. **KOSPI 7,981** — 8,000선 눈앞, RSI 87.1 극단 과매수

### 포트폴리오
| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----:|:------:|:------:|:------:|
| 삼성부광 | 34주 | 10,040원 | 8,150원 | -18.82% |
| 나우로보틱스 | 10주 | 30,550원 | 27,900원 | -8.67% |
| **합계** | | **5,012,470원** | **4,905,570원** | **-2.13%** |

### 지속 이슈 (20일차)
| # | 이슈 | 심각도 | 상태 |
|:-:|:-----|:------:|:----:|
| 1 | yfinance .KS 티커 오류 | 🔴 | 20일차 |
| 2 | KiwoomAuth 8050 | 🔴 | 20일차 |
| 3 | Tavily API 키 만료 (401) | 🔴 | 20일차 |
| 4 | Dashboard 8일 스테일 | 🔴 | 5/7 이후 미갱신 |
| 5 | MCP Python Zombie | 🔴 | 20일차 |
| 6 | Trinity: CowAgent+OpenDesign | 🟡 | **tmux 복구 완료** (12:47) |
| 7 | MetaClaw HTTP 404 | 🟡 | **port 30000 정상 복구** |
| 8 | ✅ Gateway inactive | ✅ | **복구 완료** |

### 변화 요약 (12:46→16:30)
1. ✅ **Gateway inactive 해결**: systemd active (PID 305)
2. ✅ **MetaClaw 정상 복구**: port 30000 응답
3. ✅ **Swap 0% 유지**: 재부팅 효과 지속
4. 🔴 **3개 Critical 이슈 20일차**: yfinance/KiwoomAuth/Tavily
5. 🔴 **Dashboard 8일 스테일**: 여전히 미갱신
6. 🔴 **KOSPI RSI 87.1**: 극단 과매수, 8,000선 조정 위험
7. 🟢 **삼성부광 첫 반등**: RSI 23.7에서 회복 중

## 2026-05-14 (Thu) 20:45 — 야간 스냅샷 + 지식 기록

> **Watchdog Cron (05:46 KST 5/15 실행)** — 전일 데이터 통합 기록 완료

### 📊 시장 요약 (5/14 확정)

| 지표 | 확정가 | 전일비 |
|:-----|-------:|:------:|
| KOSPI | 7,981.41 | +1.75% 🟢 |
| KOSDAQ | 1,191.09 | +1.20% 🟢 |
| USD/KRW | 1,490.26 | 보합 |
| WTI | $101.00 | -2.41% 🔴 |
| 삼성부광 | 8,150원 | +3.95% 🟢 |
| 에이치엘사이언스 | 17,200원 | +4.75% 🟢 |
| 나우로보틱스 | 27,900원 | 보합 |

### 🔬 오늘의 지식 수집 (21건 신규)

**주요 논문 요약:**

| 논문 | 의의 | Hermes 적용 |
|:-----|:-----|:------------|
| **SkillOps** (arXiv 2605.13716) | 스킬 라이브러리 유지보수 프레임워크. Skill Contract(P,O,A,V,F) + 계층적 의존성 그래프. 4차원 건강도 진단 | Hermes 47개 스킬 라이브러리 자동 유지보수 도입 검토 |
| **Good Agentic Friends** (arXiv 2605.13839) | Multi-agent weight-space 통신 (TFlow). Token 83% 절감, 속도 4.6× | Trio Brainstorming Lab 통신 효율화 |
| **Phasor Memory Networks** (arXiv 2605.13370) | NTM gradient 불안정성 해결. 안정적 BPTT + 확장 가능한 명시적 메모리 | Layer Memory System L0-L4 참고 |
| **EconAI** (arXiv 2605.13762) | 동적 페르소나 진화 + 메모리 인식 에이전트 | 가상오피스 경제 시뮬레이션 연계 |
| **EVA-Bench** (arXiv 2605.13841) | Voice Agent 최초 end-to-end 평가 프레임워크 | 향후 음성 에이전트 도입 시 참고 |
| **WARDEN** (arXiv 2605.13846) | 6시간 데이터로 멸종위기 언어 전사/번역 | Few-shot NLP 참고 |

**기술 트렌드:**
- **MCP 첫 보안 논문** (5/13 arXiv) — Attacks/Mitigations on MCP. 생태계 성숙 신호
- **GRIP-VLM** — VLM 그룹별 중요도 기반 프루닝, 효율적 비전 모델 경량화
- **R-DMesh** — Video-guided 3D Animation via Rectified Dynamic Mesh

### 🏢 비즈니스 사업분석 — 8개 아이템 인덱스 갱신 완료
- 모든 시뮬레이션 리포트(낙관적/보수적) 및 워크플로우 엔진 선택 문서 최종 갱신
- AI 물류 에이전트 SaaS (⭐1순위), 중국-한국 물류 브릿지 (⭐1순위), 인보이스 OCR (🥈2순위) 업데이트
- 사업성 평가 공식 확립: (시장규모×수요강도×진입장벽) / (초기투자×운영복잡성)

### 📋 지속 이슈 트래커 (20일차)
- 🔴 yfinance KOSPI NaN (20일) | KiwoomAuth 8050 (20일) | Tavily API 401 (20일) | Dashboard 8일 스테일
- 🟡 MetaClaw port 30000 복구됨 | Trinity tmux 복구완료
- ✅ WSL 14.5h+ 정상 | Gateway active | Swap 0% 리셋 유지


## 2026-05-17 (Sun) 00:45 — Midnight Snapshot (Weekend)

### System Status
| Item | Status | Note |
|:-----|:----:|:-----|
| Hermes Gateway | OK | /health responding |
| OpenWebUI | OK | PID 312, port 3000 |
| tmux sessions (6) | OK | All Trinity + jongdari |
| WSL Uptime | OK | 1d 8h |
| Memory | OK | 3.3Gi / 7.6Gi (43%) |
| Swap | OK | ~0% |
| Disk | OK | 27Gi / 1007Gi (3%) |
| Cron | OK | All active |

### Activity Summary (May 16-17)
- **MCP Multi-Search 1**: Global stock outlook (22:40)
- **Brain Sync**: 00:01 KST — May 15-16 knowledge integrated
- **Self-Heal**: 2 runs normal
- **MetaClaw**: Unreachable (ongoing)

### Market (May 15 close, weekend hold)
- KOSPI 7,493 (-6.12%) | KOSDAQ 1,130 (-5.14%)
- USD/KRW 1,498 (+0.30%) | WTI $105.42 (+4.20%)
- Samsung Bookgwang 7,700 (-5.52%, new low) | HL Science 17,010 (-1.10%) | Now Robotics 28,400 (+1.79%)

### Portfolio
- Cash: 4,929,810 won (fully liquidated - crash avoidance successful, Day 22)

### Issues Tracker (23 days persistent)
- RED: yfinance NaN | KiwoomAuth 8050 | Tavily 401 | Dashboard stale | MCP Zombie
- YELLOW: Trinity services (recovered but MetaClaw unreachable)


### 🔬 Tech Scavenger Update (05/17 12:20 KST)
| Source | Scanned | New Docs |
|:-------|:-------:|:--------:|
| GitHub Trending | 30 repos | 0 |
| arXiv (6 cats) | 21 papers | 0 |
| HuggingFace Daily | 10 papers | 0 |
| **Total** | **61** | **0** |

**Latest batch** (05/16 18:21): 16 new arXiv papers saved to Wiki
- **EntityBench** — Entity-Consistent Long-Range Multi-Shot
- **ATLAS** — Agentic or Latent Visual Reasoning
- **FutureSim** — Replaying World Events for Adaptive Agents
- **RefDecoder** — Visual Generation with Conditional Video Decoder
- **Is Grep All You Need** — Agent Harnesses Reshape Agentic Search
- **Veritas** — Semantically Grounded Agentic Framework for Memory
- **Viverra** — Text-to-Code with Guarantees
- **APWA** — Distributed Parallelizable Agentic Workflows
- **AI Knows When It's Being Watched** — Strategic Action in Audits
- **Articraft** — Scalable Articulated 3D Asset Generation
- **Hand-in-the-Loop** — Dexterous VLA with Seamless Interaction
- **Pelican-Unified 1.0** — Unified Embodied Intelligence Model

**API Issues Today**: arXiv rate-limiting (HTTP 429 cs.SE/DC/MA) and timeouts (cs.RO) — 9 categories affected across several runs. GitHub Trending stable.

**Cumulative**: 174 runs since May 4, ~230+ papers/projects documented in Wiki.

## 2026-05-17 (Sun) 15:00 — Brain Sync
- **Swap 급증 경고**: 33MiB→411MiB (4h, 12.4x), MetaClaw 468MB RSS
- **MCP 5건**: 모두 noisy/Naver 광고 — pipeline quality degradation
- **5th Auto-Evolution cycle**: Swap monitoring 신규 제안
- **Monday 대비**: KOSPI 3개 시나리오, USD/KRW 1,500 경계, WTI $105.42
- **미해결**: 23일차 5건 RED, Tech Scavenger 캐시 미리셋
