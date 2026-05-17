     1|# Hermes Daily Log — 2026-05-04 (월)
     2|
     3|## 📋 시스템 현황 스냅샷 — 16:45
     4|
     5|| 항목 | 상태 |
     6||:-----|:------|
     7|| Hermes CLI | ✅ 정상 (PID 378, 5/2 01:04 재시작) |
     8|| Hermes chat 세션 | ✅ 정상 (PID 378667, tmux hermes) |
     9|| OpenWebUI | ✅ 정상 (PID 371246, port 3000) |
    10|| tmux hermes-mcp | ✅ 정상 (신규, 16:36 생성) |
    11|| tmux jongdari | ✅ 정상 (1개 세션) |
    12|| tmux cowagent | ✅ 정상 (16:36 생성) |
    13|| MCP 서버(3군데) | ✅ 전원 정상 |
    14|| 메모리 사용 | ~799MB (OpenWebUI) + ~269MB (chat) |
    15|
    16|### 포트폴리오 (5/4 종가 기준)
    17|| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
    18||:-----|:----|:-------|:-------|:-------|
    19|| 014950.KQ (삼성부광) | 34주 | 10,040원 | 9,540원 | -4.98% |
    20|| 459510.KQ (나우로보틱스) | 10주 | 30,550원 | 미갱신 | - |
    21|| 현금 | - | 4,349,470원 | - | - |
    22|
    23|### Macro
    24|- KOSPI: **6,936.99** (+5.12% 반등, 사상 최고 근접)
    25|- KOSDAQ: **1,213.74** (+1.79% 반등)
    26|- 삼성부광: 9,540원 (-1.45%) — 9,400원 지지선 근접
    27|- 에이치엘사이언스: 17,620원 (-0.17%)
    28|- WTI: $100.96 (-0.96%, $100선 위태)
    29|- USD/KRW: 1,469.58원 (-0.30%, 소폭 강세)
    30|
    31|### 이슈
    32|- 삼성부광 -4.98% — 9,400원 지지선 이탈 시 손절 검토 필요
    33|- 나우로보틱스 current_price 미갱신 지속 (5/4 16:45)
    34|- WTI $100.96, $100선 붕괴 임박
    35|- MetaClaw 96h+ 다운 지속
    36|- 459510.KQ 실제 종목명 확인 필요 (paper_portfolio에 종목명 누락)
    37|
    38|## 🧬 Auto-Evolution Cycle — 16:30
    39|
    40|### Step 1: Knowledge Absorption Scan
    41|- **Scanned:** 50 documents across AI_Agents, Agent_LLM, LLM, Deep_Learning, RL categories
    42|- **Source types:** arXiv papers (16), GitHub repos (16), HF Daily papers (1), Strategy report (1)
    43|- **New categories discovered:** Agent_LLM (agent-native LLMs, agent harnesses)
    44|
    45|### Step 2-3: Applicability Analysis & Application
    46|**6 high-impact technologies absorbed:**
    47|
    48|... [existing content] ...
    49|
    50|### Key Insights
    51|- **MCP is Hermes #1 gap** — 2,000+ servers, de facto standard, all competitors have it
    52|- **Qwen3-Coder $0.4/M tokens** — agent-native LLM cost just dropped dramatically
    53|- **Benchmark gaming discovered** — all 8 major agent benchmarks can be cheated. Real task success > benchmark score
    54|- **Hermes is unique** — only open-source agent with self-learning + persistent memory (6-12mo lead)
    55|
    56|---
    57|
    58|## 🧬 Auto-Evolution Cycle — 22:30 (Delta)
    59|
    60|### Scanned
    61|- 1 new document since 20:30: **club-3090** (noonghunna, ⭐469, Python)
    62|
    63|### Absorbed Knowledge
    64|- **club-3090**: Community recipes for running LLMs on RTX 3090 (vLLM, SGLang, llama.cpp)
    65|- Qwen3.6-27B config for 1×/2× 3090 cards — enables local Hermes inference at zero API cost
    66|- Multi-engine support documented for future local LLM deployment
    67|
    68|### Created/Updated
    69|- ✅ Updated `Hermes-Auto-Evolution-20260504.md` — added club-3090 as 7th technology
    70|- ✅ Created `Hermes_Evo_Report_20260504_2230.md` — delta cycle report
    71|- ✅ Updated Next Actions: added club-3090 config testing
    72|
    73|### Cumulative Today
    74|- **13 documents absorbed**, **8 technologies documented**, **51 total scanned**
    75|- **8 critical gaps remain** (MCP integration still #1 priority)
    76|- MCP pipeline: 20 multi-search reports generated today, 5.9s avg latency
    77|
    78|---
    79|### Created/Updated
    80|1. ✅ Created `AI_Agents/_Index.md` — knowledge index for agent research
    81|2. ✅ Created `Agent_LLM/_Index.md` — knowledge index for agent-capable LLMs
    82|3. ✅ Created `01_지식/Hermes-Auto-Evolution-20260504.md` — detailed evolution report
    83|4. ✅ Updated Meta Rules: verification gates, MCP-first, security-first
    84|5. ✅ Updated L1 Skill Index: 3 new skill templates
    85|6. ✅ Updated L2 Global Facts: MCP ecosystem stats, agent LLM pricing, benchmark strategy
    86|
    87|### Key Insights
    88|- **MCP is Hermes #1 gap** — 2,000+ servers, de facto standard, all competitors have it
    89|- **Qwen3-Coder $0.4/M tokens** — agent-native LLM cost just dropped dramatically
    90|- **Benchmark gaming discovered** — all 8 major agent benchmarks can be cheated. Real task success > benchmark score
    91|- **Hermes is unique** — only open-source agent with self-learning + persistent memory (6-12mo lead)
    92|
    93|---
    94|
    95|# Hermes Daily Log — 2026-04-29 (수)
    96|
    97|## 오늘의 주요 작업
    98|### 1. Obsidian 연동 구축 ✅
    99|- `hermes-share/` 명령 파일 기반 양방향 통신 시스템 구축
   100|- watcher 데몬 (tmux hermes-watcher) 2초 간격 감시 중
   101|- Vault에 시스템 문서 7개 생성
   102|
   103|### 2. 배틀루프 상태
   104|- tmux `jongdari` 세션: **실행 중** (PID 65571, 65587)
   105|- 포트폴리오: 현금 4,658,640원 + 014950.KQ 34주 (9,790원)
   106|- CB Score: 6/100
   107|
   108|### 3. 발견한 이슈
   109|- `014950.KQ`: Yahoo Finance "possibly delisted" → data_engine 자체 DB로는 정상 조회됨 (9,790원)
   110|- 네이버 뉴스 파싱 정규식 수정 완료 (8건 수집 확인)
   111|- 뉴스 HTML `resp.read()` 두 번 호출 문제 발견 및 수정
   112|
   113|## 배운 점
   114|- Windows ↔ WSL 간 파일 공유는 `/mnt/c/` 마운트로 가능
   115|- tmux 세션명 충돌 조심 (hermes / hermes-watcher 분리)
   116|- Obsidian `[[wiki link]]` 문법은 폴더 구조 포함해야 함
   117|
   118|---
   119|## 📋 2026-04-29 04:00 — 자동 스냅샷 기록
   120|
   121|### 시스템 현황 스냅샷
   122|| 항목 | 상태 |
   123||:-----|:------|
   124|| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
   125|| WebUI | ✅ 정상 (PID 466) |
   126|| Jongdari 배틀루프 | ❌ **종료됨** — tmux 세션은 있으나 프로세스 Terminated |
   127|| Data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 03:27 최신 갱신 |
   128|| CB Score | 6/100 — 극단 공포 |
   129|| WTI | $98 |
   130|| USD/KRW | ₩1,473 |
   131|
   132|### 발견 이슈
   133|1. **Jongdari 배틀루프 종료** — `nexus_orchestrator.py --mode live` 프로세스가 `/mnt/c/Users/Steven/Desktop/stock/...`에서 Terminated 상태. 재시작 필요.
   134|2. **014950.KS yfinance delisted** — 코스피 심볼 계속 실패. KQ(코스닥)는 정상 작동.
   135|3. **473980.KQ(에이치엘사이언스) 데이터 수집 확인** — 모니터링 대상 추가된 것으로 보임.
   136|
   137|### Action Required
   138|- Jongdari 배틀루프 재시작 필요 (tmux jongdari에서 `python3 nexus_orchestrator.py --mode live`)
   139|- 014950.KS yfinance fallback 로직은 아직 개선되지 않음
   140|
   141||---
   142|## 📋 2026-04-29 08:00 — 자동 스냅샷 기록
   143|
   144|### 시스템 현황 스냅샷
   145|| 항목 | 상태 |
   146||:-----|:------|
   147|| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
   148|| WebUI | ✅ 정상 (PID 466) |
   149|| Jongdari 배틀루프 | ✅ **재시작 성공** — PID 87594, 05:06부터 정상 작동 중 |
   150|| data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 07:00 최신 갱신 |
   151|| 시장 현황 | KOSPI 6,615 (4/27 마감, 3d +3.07%), USD/KRW 1,472.88, WTI $99.62 |
   152|
   153|### 주요 변경사항
   154|1. **Jongdari 배틀루프 정상 복구** — 05:06에 `nexus_orchestrator.py --mode live` 재시작됨. self_evolve_report 정상 (08:00 최신).
   155|2. **WTI $100.06→$99.62 오류 수정** — 07:00에 실제 종가로 정정. CRISIS MODE 해제됨 (3d +3.93%).
   156|3. **tomorrow_strategy**: 삼성전자(score 92), SK하이닉스(88), 현대차(85) 추천 — 반도체/자동차 강세 모멘텀.
   157|
   158|### 포트폴리오 현황
   159|| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
   160||:-----|:----|:-------|:-------|:-------|
   161|| 014950.KQ | 34주 | 10,040원 | 9,790원 | -2.49% |
   162|| 현금 | - | 4,658,070원 | - | - |
   163|| **합계** | | **5,000,000원** | | **-0.1%** |
   164|
   165|### 발견 이슈
   166|- 473980.KQ(에이치엘사이언스) 4/27 매매: 19주 매수(17,910) → 2분만에 매도(17,880, -570원 손실). 전략적 재평가 필요.
   167|- KOSPI RSI 87.9 / KOSDAQ RSI 91.0 — **과매수 영역**. 조정 리스크 주의.
   168|
   169|## 내일 할 일
   170|
   171|### 🚚 인보이스 감지 (2026-04-29 02:37)
   172|- [SEA (해운)] **MRS25032301_1774865043.pdf** 대기 중
   173|- [SEA (해운)] **MRSO2020031401_1774881189.pdf** 대기 중
   174|- [SEA (해운)] **Friotech_COMMERCIAL INVOICE PACKINGLIST - 03_21(2024).xlsx** 대기 중
   175|- [AIR (항공)] **MRS24092701.pdf** 대기 중
   176|- [EXPRESS (특송)] **MRL247433 260414HL-INVOICE.xlsx** 대기 중
   177|
   178|---
   179|
   180|## 📋 2026-04-29 12:00 - 자동 스냅샷 기록
   181|
   182|### 시스템 현황 스냅샷
   183|| 항목 | 상태 |
   184||:-----|:------|
   185|| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
   186|| WebUI | ✅ 정상 (PID 466) |
   187|| Jongdari 배틀루프 | ✅ **정상 작동** (PID 87594, 05:06~, 1분 간격 스캔) |
   188|| Data 수집 | ✅ Nexus 자체 수집, KOSPI 3일 +2.32% |
   189|| CB Score | 6/100 - 극단 공포 유지 |
   190|| WTI | $99 |
   191|| USD/KRW | 1,476원 |
   192|| KOSPI | 6,626 |
   193|| KOSDAQ | 1,211 |
   194|
   195|### AI Council 분석 결과 (최근)
   196|- **464580.KQ (닷밀)** -> HOLD | 분석관:HOLD(50%), 조사관:BUY(65%), 리스크관:HOLD(50%)
   197|- 모든 분석 대상 HOLD 유지, 당 매수 없음
   198|
   199|### 내일 전략
   200|| 종목 | Score | 논리 | 목표가 |
   201||:-----|:-----|:-----|:-------|
   202|| 삼성전자 | 92 | 반도체 업황 개선, 외국인 대량 매수 | 68,500 |
   203|| SK하이닉스 | 88 | HBM 수요 폭증, 수렴 패턴 상방 이탈 | 185,000 |
   204|| 현대차 | 85 | 주주환원 정책 강화, 저PBR 매력 | 258,000 |
   205|
   206|### 발견 이슈
   207|1. **portfolio.json 초기화** - 5,000,000원 현금 + 빈 포지션. 4/27 매수 014950.KQ 34주(9,790원) 기록 소실. 시스템 리셋으로 포지션 유실 추정.
   208|2. **CB Score 6/100 지속** - 극단 공포 vs KOSPI 1M +31.2% 과매수 모순.
   209|3. **WTI $99선** - 오전 $100.61 돌파 후 하락. 변동성 지속.
   210|4. **KOSPI 6,626 / KOSDAQ 1,211** - 장중 데이터 정상 수집 중.
   211|
   212|### Action Required
   213|- portfolio.json 리셋 원인 파악 (재시작 시 포지션 스냅샷 유지 로직)
   214|- 014950.KQ 재매수 검토 (진입가 10,040 -> 9,800선)
   215|
   216|---
   217|
   218|## 📋 2026-04-29 16:00 — 자동 스냅샷 기록
   219|
   220|### 시스템 현황 스냅샷
   221|| 항목 | 상태 |
   222||:-----|:------|
   223|| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
   224|| WebUI | ✅ 정상 (PID 466, 4일차) |
   225|| Jongdari 배틀루프 | ✅ **정상 작동** (PID 50459/87594, 05:06~, 1분 간격 스캔) |
   226|| Hermes tmux | ✅ 새 세션 생성됨 (15:48) |
   227|| Data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,220 / WTI $100.56 / USD/KRW 1,478 |
   228|| CB Score | (포함되지 않음 — market_intel 구조 변경) |
   229|| KOSPI 3일 변동 | +3.32% |
   230|
   231|### 포트폴리오 현황
   232|- **현금**: 5,000,000원
   233|- **포지션**: 없음 (portfolio.json 리셋 현상 지속)
   234|- **014950.KQ 34주(9,790원) 포지션**: 여전히 소실됨 — 시스템 리셋 후 복구되지 않음
   235|
   236|### AI Council 최근 분석 (15:51~)
   237|- **240550.KQ (동방메디컬)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
   238|- **486990.KQ (노타)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
   239|- **476080.KQ (M83)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
   240|- 모든 종목 HOLD 유지 — 당일 매매 없음
   241|
   242|### 시장 주요 동향
   243|- **KOSPI 6,691** — 사흘 연속 사상 최고치 마감 기록
   244|- **KOSDAQ 1,220** — 동반 상승
   245|- **WTI $100.56** — $100선 재돌파, 변동성 지속
   246|- **USD/KRW 1,478원** — 원화 약세 지속
   247|- **모멘텀**: 006400.KS(삼성SDI) +4.7%, 051910.KS(LG화학) +3.4%, 005930.KS(삼성전자) +1.8%
   248|- **삼성전자**: 당일 +1.8% 상승, 외국인 매수 지속
   249|
   250|### 발견 이슈
   251|1. **market_intel.json 구조 변경** — `kospi`, `kosdaq`, `usdkrw`, `wti`, `cb_score` 최상위 키가 사라지고 `macro` 내부로 통합됨. CB Score 정보 누락. 12:00 스냅샷 이후 시스템 업데이트로 추정.
   252|2. **portfolio.json 리셋 지속** — 여전히 현금 500만원만 표시, 포지션 없음. 014950.KQ 34주 포지션 소실 미복구.
   253|3. **self_evolve_report** — 16:00 기준 정상 (battleloop=ok, market_intel=ok, portfolio_updated=true)
   254|
   255|### Action Required
   256|- portfolio.json 포지션 복구 또는 재매수 결정 필요
   257|- market_intel 스키마 변경에 따른 스냅샷 파서 업데이트 필요
   258|- CB Score 복원 — 새 구조에서 어디에 포함되었는지 확인 필요
   259|
   260|## 이번 주 배운 점
   261|- OpenClaw 게이트웨이를 Hermes 시스템에서 완전 분리/삭제 완료 (반말 이슈도 있었음 🫡)
   262|- market_intel.json 데이터 구조가 동적으로 변경될 수 있음 — 스냅샷 수집 시 유연한 파싱 필요
   263|- portfolio.json이 시스템 재시작 시 리셋되는 문제 — 영구 스토리지/스냅샷 복구 로직 필요
   264|- tmux 세션이 프로세스 크래시에도 존속할 수 있어 ps aux와 tmux ls 결과가 다를 수 있음
   265|
   266|## 내일 할 일 (2026-04-30, 목)
   267|1. **portfolio.json 리셋 문제 원인 파악 및 수정** — 종료 시 포지션 스냅샷 저장 로직
   268|2. **market_intel 파서 업데이트** — 새 JSON 구조(macro 내부)에 대응
   269|3. **014950.KQ 재매수 검토** — 이전 진입가 10,040원 대비 현재가 확인
   270|4. **CB Score 복원** — 데이터 구조 변경에 따른 CB Score 수집 파이프라인 재확인
   271|5. **인보이스 감지 처리** — 대기 중인 5건 검토
   272||
   273|
   274|---
   275|
   276|## 📋 2026-04-29 16:00 — 장 마감 스냅샷 기록
   277|
   278|### 시스템 현황 스냅샷
   279|| 항목 | 상태 |
   280||:-----|:------|
   281|| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
   282|| WebUI | ✅ 정상 (PID 466, Apr25~) |
   283|| Jongdari 배틀루프 | ⚠️ **중복 실행** — PID 87577(05:06~, 기존) + PID 50459(16:00~, 신규 tmux jongdari) |
   284|| CB Score | 16/100 — 극단 공포 유지 (WTI $101, KOSPI 1M +32.4%) |
   285|| WTI | **$101** — $100 재돌파, CRISIS MODE |
   286|| USD/KRW | ₩1,478 |
   287|| Data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 정상 수집 |
   288|
   289|### 포트폴리오 현황
   290|| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
   291||:-----|:----|:-------|:-------|:-------|
   292|| 현금 | 5,000,000원 | - | - | - |
   293|| **합계** | | **5,000,000원** | | **0.0%** |
   294|
   295|⚠️ **portfolio.json 초기화 확정** — 014950.KQ 34주(매입가 10,040원) 포지션 완전 소실. 시스템 리셋으로 기록 유실.
   296|
   297|### 발견 이슈
   298|1. **portfolio.json 초기화 (재확인)** — 12:00 스냅샷에서 발견된 문제, 16:00에도 여전히 500만 현금 상태. 구체적 시점은 불명확하나 재시작 시 포지션 복원 로직 부재 확인.
   299|2. **Jongdari 중복 실행** — 기존 세션(PID 87577, bash 래퍼) 생존 상태에서 새로운 tmux `jongdari` 세션(PID 50459)이 16:00에 추가 생성됨. 배틀루프 이중 실행 중.
   300|3. **CB Score 6→16 상승** — WTI $100 재돌파($100→$101) 반영. KOSPI 1M +32.4%, Vol 3.7%로 여전히 고위험.
   301|4. **yfinance "possibly delisted" 지속** — 014950.KS, 240550.KS, 486990.KS 모두 조회 실패. KQ(코스닥) 한정 데이터 정상.
   302|5. **Telegram API 404 에러** — 뉴스 전송 시 Telegram 봇에서 404 Not Found. 봇 채팅 ID 문제 가능성.
   303|6. **014950.KQ 현재가** — 4/29 종가 9,910원 (전일 9,790원, +1.22%). 이전 매입가(10,040원) 대비 -1.29%.
   304|
   305|### Action Required
   306|- **\[긴급\] Jongdari 중복 세션 정리** — PID 87577 (kitty 기반 원본) 또는 PID 50459 (tmux 새 세션) 중 하나만 유지. tmux jongdari 정리 필요.
   307|- **\[긴급\] portfolio.json 복원** — 014950.KQ 34주(매입가 10,040, 현재 9,910) 포지션 수동 복원. 포지션 스냅샷 백업 메커니즘 구축 필요.
   308|- Telegram 404 원인 파악 및 봇 채팅 ID 재설정
   309|- AI Council 분석 결과 absent — 오늘 장 마감 후 분석 미실시로 추정
   310|
   311|---
   312|
   313|## 📋 2026-04-29 20:00 — 야간 스냅샷 기록
   314|
   315|### 시스템 현황 스냅샷
   316|| 항목 | 상태 |
   317||:-----|:------|
   318|| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
   319|| WebUI | ✅ 정상 (PID 466, Apr25~) |
   320|| Jongdari 배틀루프 | ⚠️ **중복 실행 지속** — PID 87594(05:06~,kitty) + PID 50459(16:00~,tmux) |
   321|| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유 (현재 9,900원, -1.4%) |
   322|| Data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,221 / WTI $103.36 / USD/KRW 1,479 |
   323|| KOSPI 3일 변동 | +3.32% |
   324|
   325|### 새로 발견된 매매 이력 (paper_portfolio.history)
   326|| 시간 | 종목 | 종류 | 수량 | 가격 | 손익 |
   327||:----|:-----|:----|:----|:----|:----|
   328|| 11:44 | 464580.KQ (닷밀) | BUY | 155주 | 2,100원 | - |
   329|| 12:22 | 464580.KQ (닷밀) | SELL | 155주 | 2,080원 | -3,100원 |
   330|
   331|- **464580.KQ 매매**: AI Council 분석관:SELL(30%)/조사관:BUY(65%)/리스크관:SELL(50%) → 2:1 SELL로 매도. 38분 보유, -3,100원 손실.
   332|- **당일 순손익**: -3,100원 (464580.KQ 손실만 발생, 014950.KQ 미실현 -1.4%)
   333|- **불일치**: portfolio.json은 빈 포지션이나 paper_portfolio.json은 정상 보유 중
   334|
   335|### 시장 변동사항
   336|- **WTI $103.36** — $100→$103 급등 (+4.4%). CRISIS MODE 지속.
   337|- **USD/KRW 1,479원** — 원화 약세 심화 (오전 1,476→야간 1,479)
   338|- **KOSPI 6,691** — 사상 최고 유지. RSI 87.9 과매수 경고 지속.
   339|- **CB Score**: market_intel 새 구조에서 누락 (16:00 기준 16/100)
   340|
   341|### 발견 이슈
   342|1. **portfolio vs paper_portfolio 불일치** — 운영용 portfolio.json(빈 포지션)과 실제 paper_portfolio.json(014950.KQ 34주 보유)가 불일치. paper_portfolio.json이 실제임.
   343|2. **중복 실행 미해결** — PID 87577(kitty bash)+87594(실제) + 50459(tmux). 3개 체인.
   344|3. **CB Score 데이터 누락 지속** — 새 market_intel 구조에 CB Score 미포함.
   345|4. **WTI $103 급등** — 추가 상승 시 포트폴리오 리스크 증가.
   346|
   347|### Action Required
   348|- portfolio.json을 paper_portfolio.json 기준으로 복원 필요
   349|- 중복 세션 정리 (하나만 유지)
   350|- CB Score 재수집 파이프라인 복원
   351|
   352||---
   353|## 📋 2026-04-30 00:00 — 자정 스냅샷 기록
   354|
   355|### 시스템 현황 스냅샷
   356|| 항목 | 상태 |
   357||:-----|:------|
   358|| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
   359|| WebUI | ✅ 정상 (PID 466, Apr25~) |
   360|| Jongdari 배틀루프 | ⚠️ **3중 중복 실행** — PID 87577(05:06, bash)+87594(05:06)+93123(22:10, 신규) |
   361|| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유, 464580.KQ 매매(-3,100원) |
   362|| data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,220 / WTI **$105.15** / USD/KRW **₩1,483** |
   363|| CB Score | market_intel 구조 변경으로 누락 |
   364|
   365|### 당일 매매 요약
   366|- **014950.KQ**: 보유 34주 (4/27 진입 @10,040, 현재 9,920원, -1.2%)
   367|- **464580.KQ (닷밀)**: 11:44 매수 155주 @2,100 → 12:22 매도 @2,080 (-3,100원)
   368|- **473980.KQ (에이치엘사이언스)**: 4/27 19주 매수 @17,910 → 2분만 매도 @17,880 (-570원)
   369|- **당일 순손익**: -3,100원 / 누적 손익: -3,670원
   370|
   371|### 주요 변동사항
   372|1. **WTI $100.69→$105.15 급등 (+4.4%)** — 20:00 스냅샷 $103에서 추가 2% 상승. CRISIS MODE 심화.
   373|2. **USD/KRW ₩1,479→₩1,483** — 원화 약세 지속. $105 유가 영향.
   374|3. **Jongdari 3중 실행** — 22:10에 새로운 tmux 세션(PID 93123) 추가 실행됨. kitty+tmu+x 3개 chain.
   375|4. **portfolio.json ≠ paper_portfolio.json** — 운영용 portfolio.json은 동기화됨(34주 정상), paper_portfolio는 4/29 daily_pnl 반영.
   376|5. **market_intel 스키마 변경** — CB Score, top_gainers/losers, sector_momentum 모두 빈 배열.
   377|
   378|### 미해결 이슈
   379|- portfolio.json 리셋 문제: 일단 paper_portfolio 기준으로 현재 34주 포지션 동기화 완료
   380|- 중복 세션 정리 필요 (3→1)
   381|- CB Score 데이터 복원 필요
   382|- WTI $105 급등 — 포트폴리오 리스크 상승
   383||- FOMC 앞두고 뉴욕증시 하락 — 한국 시장 영향 주시 필요
   384|
   385||---
   386|## 📋 2026-04-30 04:00 — 자동 스냅샷 기록
   387|
   388|### 시스템 현황 스냅샷
   389|| 항목 | 상태 |
   390||:-----|:------|
   391|| Hermes Gateway | ✅ 정상 (PID 64547, 5일차, Apr26~) |
   392|| WebUI | ✅ 정상 (PID 466, Apr25~) |
   393|| Jongdari 배틀루프 | ⚠️ **3중 중복 실행 지속** — PID 87577(bash)+87594(실제)+93123(22:10~) |
   394|| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유 |
   395|| data 수집 | ✅ KOSPI 6,641(4/28) / KOSDAQ 1,216(4/28) / WTI **$106.70** / USD/KRW **₩1,488** |
   396|| CB Score | market_intel 구조 변경으로 누락 지속 |
   397|
   398|### 전일 요약 (4/29)
   399|- **014950.KQ(삼성부광)**: 34주 보유(4/27 진입 @10,040, 4/29 종가 9,920, -1.20%)
   400|- **464580.KQ(닷밀)**: 11:44 매수 155주 @2,100 → 12:22 매도 @2,080 (-3,100원)
   401|- **473980.KQ(에이치엘사이언스)**: 4/27 매수 19주 @17,910 → 2분만 매도 @17,880 (-570원)
   402|- **당일 순손익**: -3,100원 / 누적 손익: -3,670원
   403|
   404|### 주요 변동사항
   405|1. **WTI $106.70** — 전일 $100.69에서 $106.70으로 +5.97% 급등. 연속 6시간 $100 이상 유지. CRISIS MODE 심화.
   406|2. **USD/KRW ₩1,488** — 원화 약세 지속(전일 1,473→1,488, +1.02%). WTI 급등 영향.
   407|3. **Jongdari 3중 중복 실행 지속** — 87577(kitty)+87594(실제)+93123(tmux). 해소되지 않음.
   408|4. **portfolio.json ≠ paper_portfolio.json** — 운영/paper 불일치 상태.
   409|5. **KOSPI 4/29 Close=NaN** — yfinance 아직 확정되지 않음. 4/28 종가 6,641 기준 유지.
   410|
   411|### 미해결 이슈
   412|- 3중 중복 Jongdari 세션 정리(3→1)
   413|- CB Score 데이터 복원 (market_intel 구조 변경)
   414|- portfolio.json 복원 (paper_portfolio 기준 34주 동기화)
   415||- WTI $106 급등 → 포트폴리오 리스크 최대치, FOMC 앞둔 변동성 주의
   416|
   417||---
   418|## 📋 2026-05-02 04:00 — 주말 스냅샷 기록
   419|
   420|### 시스템 현황 스냅샷
   421|| 항목 | 상태 |
   422||:-----|:------|
   423|| Hermes Gateway | ✅ 정상 (PID 293, 5/2 01:04 재시작됨) |
   424|| Jongdari 배틀루프 | ✅ 정상 (PID 784, 1개 세션만) |
   425|| portfolio.json | ✅ 정상 — 014950.KQ 34주 @10,040원 |
   426|| tmux 세션 | ✅ hermes / hermes-mcp / jongdari 각 1개 |
   427|| WTI | $102.19 |
   428|| USD/KRW | ₩1,472.47 |
   429|
   430|### 신규 발견
   431|1. **459510.KQ(나우로보틱스) 신규 매수** — 4/30 20:28 AI Council BUY 결정(📊70%/🔍40%/📉60%), 10주 @30,550원 진입. paper_portfolio에 기록됨.
   432|2. **Jongdari 3중 중복 해소** — 4/29 3개 세션에서 현재 1개(pid 784)로 정상화. tmux 세션도 1개만 유지.
   433|3. **portfolio.json 정상 복원 완료** — 014950.KQ 34주 포지션 정상 유지 중 (cash 4,654,970 + 34주 = 4,991,970원).
   434|4. **paper_portfolio current_price 미갱신** — 459510.KQ current_price가 buy_price=30,550원과 동일, yfinance 미갱신 상태.
   435|
   436|### 미해결 이슈
   437||- paper_portfolio.json 459510.KQ current_price 갱신 필요
   438||- WTI $102 (여전히 $100+) — CRISIS MODE 감시 지속
   439||- CB Score market_intel 구조 누락 지속
   440|
   441||---
   442|## 📋 2026-05-02 08:00 — 토요일 스냅샷 기록
   443|
   444|### 시스템 현황 스냅샷
   445|| 항목 | 상태 |
   446||:-----|:------|
   447|| Hermes Gateway | ✅ 정상 (PID 293, 5/2 01:04 재시작, 8일차) |
   448|| WebUI | ✅ 정상 (PID 13180, port 8648) |
   449|| Open WebUI | ✅ 정상 (PID 14231, port 3000) |
   450|| MetaClaw | ✅ 정상 (PID 11552, skills_only 모드) |
   451|| Jongdari 배틀루프 | ✅ 정상 (08:00 self_evolve: battleloop=ok, market_intel=ok) |
   452|| tmux 세션 | ✅ hermes / hermes-mcp / jongdari 각 1개 (중복 없음) |
   453|| WTI | $102.50 (5/2 07:58 최신) |
   454|| USD/KRW | ₩1,471.22 |
   455|| KOSPI (4/30 종가) | 6,598.87 (-1.38%) |
   456|| KOSDAQ (4/30 종가) | 1,192.35 (-2.29%) |
   457|
   458|### 포트폴리오 현황
   459|| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
   460||:-----|:----|:-------|:-------|:-------|
   461|| 014950.KQ (삼성부광) | 34주 | 10,040원 | 9,710원 | -3.29% |
   462|| 459510.KQ (나우로보틱스) | 10주 | 30,550원 | 30,550원 | 0.00% |
   463|| 현금 | - | 4,349,470원 | - | - |
   464|| **합계** | - | **5,012,470원** | | **+0.25%** |
   465|
   466|### 주요 변동사항
   467|1. **주말 시스템 안정화** — 5/1(근로자의 날) + 5/2(토) 휴장. 신규 거래일 데이터 없음. 모든 서비스 정상 유지 중.
   468|2. **Jongdari 중복 세션 완전 해소 확인** — 3중 중복(04/29) → 단일 세션(PID 784→881→현재 단일)으로 정상화.
   469|3. **459510.KQ current_price 미갱신 상태 지속** — 4/30 20:28 매수 @30,550, 아직 yfinance 업데이트 안 됨. 다음 영업일(5/4 월) 갱신 예상.
   470|4. **삼성부광 -3.29% 손실 심화** — 4/30 KOSDAQ -2.29% 급락 영향. 지지선 9,400원 모니터링 필요.
   471|5. **신규 종목 458650.KQ (논 논 타겟팅) 감지** — 배틀루프 로그에서 매수 거절 + 매도 불가 경고 반복 (5/1 22:27~23:30, 12회). 포지션 없음이 정상이나 지속적 스캔 확인.
   472|6. **KOSDAQ 4/30 -2.29% 급락** — 사상 최고 1,221에서 1,192로 조정. RSI 56.6으로 과매수 해소.
   473|7. **KOSPI 6,598.87(-1.38%)** — 사상 최고 6,691에서 소폭 조정. RSI 66.0으로 안정권.
   474|
   475|### 발견 이슈
   476|1. **459510.KQ 종목명 불일치** — paper_portfolio에 '459510.KQ'로만 저장(종목명 누락). 실제는 '알에스오토메이션' 또는 확인 필요.
   477|2. **458650.KQ 지속 스캔** — 배틀루프가 458650.KQ를 스캔하나 매도불가 경고만 발생. 매수 조건 미달(수익률 0%)로 매수 거절. 포지션 없음 정상.
   478|3. **014950.KQ(삼성부광)** — RSI 38.8로 과매도 접근. 4/30 KOSDAQ 급락에 동반 하락. 9,400원(20일 최저) 지지선 테스트 가능성.
   479|
   480|### 내일 전략 (다음 영업일: 5/4 월)
   481|- 삼성부광 9,400원 지지선 이탈 시 손절 검토
   482|- 459510.KQ 첫 거래일 관찰 (current_price 갱신 확인)
   483|- KOSDAQ 반등 시 포트폴리오 확장 기회 모색
   484|| - WTI $100선 유지 여부 — CRISIS MODE 지속 감시
   485|
   486|---
   487|
   488|# Hermes Daily Log — 2026-05-05 (화) 어린이날 휴장
   489|
   490|## 📋 시스템 현황 스냅샷 — 12:45 KST
   491|
   492|| 항목 | 상태 |
   493||:-----|:------|
   494|| Hermes Gateway | ✅ 정상 (PID 301, 04:04 재시작) |
   495|| Hermes CLI chat | ✅ 정상 (PID 789, tmux hermes) |
   496|| Open WebUI | ✅ 정상 (PID 785, port 3000) |
   497|| MetaClaw | ✅ 정상 (PID 156299, port 30000, skills_only) |
   498|| Jongdari Nexus | ✅ 정상 (PID 2811, nexus_orchestrator) |
   499|| tmux 세션 | hermes / jongdari 각 1개 |
   500|| 메모리 | ~2,560MB / 7,748MB (33%) — 양호 |
   501|

## 2026-05-17 (Sun) 08:45 — 아침 스냅샷 (일요일, Trinity 전면 복구 + 6건 MCP 검색)

### System Status (08:47 KST)
| Item | Status | Note |
|:-----|:----:|:-----|
| Hermes Gateway | OK | systemd PID 찾을 수 없으나 자체 실행 중 |
| OpenWebUI | OK | PID 312, port 3000 |
| tmux sessions | ✅ **9개** | hermes / hermes-mcp / jongdari / cowagent / metaclaw / opendesign / **trinity-cow / trinity-meta / trinity-od** |
| WSL Uptime | ✅ | 1d 16h (since 5/15 16:28) |
| Memory | 🟢 | 4.0Gi / 7.6Gi (53%) |
| Swap | 🟢 | 33MiB / 2.0Gi (~1.6%) |
| Disk | 🟢 | 27Gi / 1007Gi (3%) |
| KeepAlive | ✅ | PID 86242, 정상 사이클 |
| Cron | ✅ | self-heal 1min, dashboard 2min, self-evolve hourly, tech scavenger 20min, brain sync 30min |

### New Since 00:45 Snapshot
- **Trinity 전면 복구 완료!** — tmux 세션 6개→9개 확장, trinity-cow(9899)/trinity-meta(30000)/trinity-od(17456) 모두 정상
- **Brain Sync 3회 실행** — 04:00, 06:00, 07:00 KST — 모두 정상 통합
- **MCP 멀티검색 6건 생성 (06:40~06:51)**:
  1. **AI 반도체 2026 시장 전망** — IDC $1.29T 전망, HBM 완판
  2. **K푸드 글로벌 수출 2026** — Q1 $3.35B (+3.5%), 연간 $16B 목표
  3. **글로벌 경제 증시 2026.5** — US CPI 3.8% 쇼크, HBM TAM $35B→$100B (2028)
  4. **삼성전자·SK하이닉스 반도체** — SK하닉 영업익 48.7조 전망 (삼전 추월)
  5. **AI 인공지능 2026 트렌드** — 딥테크 스타트업, 9M+ 글로벌
  6. **미국주식 나스닥 S&P500** — S&P500 7,409 (-1.24%)
- **Auto-Evolution 2회 실행** — 06:34 (6건 인사이트), 08:30 (8건 인사이트 + 5건 개선 제안)

### Auto-Evolution Key Insights (08:30 Report)
1. **Pelican-Unified 1.0** (arXiv 2605.15153) — 최초의 통합 임베디드 파운데이션 모델 (VLM+UFG)
2. **APWA** (arXiv 2605.15132) — 분산 병렬 에이전트 워크플로우 — Trinity 구조에 적용 가능
3. **TFlow** (arXiv 2605.13839) — 가중치 공간 통신으로 토큰 83% 절감 — Trio Brainstorming Lab 최적화
4. **AI Knows When It's Being Watched** (arXiv 2605.15034) — 감시/비감시 환경 차이
5. **Recursion-of-Thought** (Unknown venue) — 자기 참조적 사고 체인 — Deep Diagnosis 패턴으로 이슈 분석
6. **Open-Ontologies** — MCP 기반 온톨로지 F1=0.717 vs LLM-only 0.431 — Hermes/MCP 패러다임 검증
7. **SkillOps** (arXiv 2605.13716) — LLM Agent 스킬 라이브러리 유지보수 — 190개 스킬에 적용
8. **EMO-Pretraining** — 글로벌 공유 전문가 풀, 12.5% 전문가로 ~3% 성능 저하만 발생

### Enhancement Proposals from Auto-Evolution
| Priority | Proposal | Status |
|:--------:|:---------|:------:|
| 🔴 | Tech Scavenger 캐시 리셋 — arXiv 429 해소 | Scheduled for Mon |
| 🔴 | KOSPI 반등 진입 계획 — 현금 492만원 포지셔닝 | Mon pre-market |
| 🟡 | SkillOps 통합 — 190개 스킬 건강 모니터링 | Draft phase |
| 🟡 | Trinity TFlow 업그레이드 — 토큰 30-50% 절감 | Research phase |
| 🟢 | Recursion-of-Thought Deep Diagnosis — 23일 이슈 해부 | Plan phase |

### Market (5/15 actual close — 주말 유지)
| Indicator | Value | Change |
|:----------|:-----:|:------:|
| KOSPI | **7,493.18** | -6.12% (8,000→crash) |
| KOSDAQ | **1,129.82** | -5.14% |
| USD/KRW | **1,497.76 won** | +0.30% (1,500 임박) |
| WTI | **$105.42** | +4.20% ($100↑ 중동 리스크) |
| S&P500 (Fri) | **7,409** | -1.24% |
| Samsung Bookgwang | **7,700 won** | -5.52% (new low, RSI 22.4) |
| HL Science | **17,010 won** | -1.10% |
| Now Robotics | **28,400 won** | +1.79% (KOSPI 하락 속 독자 강세) |

### Portfolio
- **Cash**: 4,929,810 won (전액 현금, 변동 없음)
- KOSPI -6.12% crash 회피 성공 (Day 23)
- 월요일 반등 진입 계획 대기 중

### Unresolved Issues (Day 23)
| # | Issue | Severity | Note |
|:-:|:------|:--------:|:-----|
| 1 | yfinance .KS NaN | 🔴 | 23일차 — KOSDAQ 데이터 수집 불가 |
| 2 | KiwoomAuth 8050 port | 🔴 | 23일차 — 실거래 불가 |
| 3 | Tavily API key expired (401) | 🔴 | 23일차 — 뉴스 수집 저하 |
| 4 | Dashboard stale | 🔴 | 23일차 — 5/7 이후 미갱신 |
| 5 | MCP Python Zombie | 🔴 | 23일차 — 재시작 시 사생 프로세스 |
| 6-7 | Trinity services | ✅ | **복구 완료** (trinity-* 3개 tmux 신규) |
| 8 | Hermes Gateway systemd | 🟡 | PID 파일 누락, 자체 실행 중 |

### Changes Since 00:45
- **✅** Trinity 복구 — tmux 6개→9개 (trinity-cow/meta/od 신규)
- **✅** MCP 멀티검색 6건 신규 (06:40~06:51) — 10_Wiki/ 저장
- **✅** Auto-Evolution 08:30 — 8개 인사이트 + 5개 개선 제안
- **✅** Brain Sync 3회 — 04:00/06:00/07:00
- **🔄** Tech Scavenger — arXiv 429 지속 (캐시 포화 147 URL)
- **⟳** Gateway systemd PID — 미해결 (KeepAlive 대체 정상 작동)

## 2026-05-17 (Sun) 15:00 — 오후 Brain Sync (Swap 급증 경고)

### New Since 08:45 Snapshot
- **MCP 멀티검색 5건 신규 (12:51~14:41)**: AI 반도체, 미국증시 S&P500, 국내증시 KOSPI, 바이오헬스케어, 2차전지배터리 — 모두 noisy/Naver 광고 혼입
- **Auto-Evolution 5회차 (14:30)**: Swap 사용량 12배 급증 (33MiB→411MiB, 4시간만에) — MetaClaw 메모리 누수 의심 (468MB RSS)

### ⚠️ CRITICAL: Swap Usage Anomaly
| Time | Swap | Delta | Note |
|:----|:----:|:-----:|:-----|
| 08:47 | 33MiB / 2.0Gi (1.6%) | — | 정상 |
| 10:30 | 33MiB (추정) | — | 정상 유지 |
| 12:30 | 200MiB (추정) | ⬆️ | 상승 시작 |
| 14:30 | **411MiB / 2.0Gi (20%)** | ⬆️ **12.4x** | MetaClaw 468MB RSS |
- **성장률**: ~95MiB/hour → 17시간 내 한도 도달 예상 (~07:30 Mon)
- **영향**: Swap 포화 시 OOM killer가 프로세스 종료 (MetaClaw 우선 타격)
- **권장**: 자정까지 1GiB 초과 시 MetaClaw 선제적 재시작

### Market (Sunday — 5/15 close 유지)
- KOSPI 7,493 (-6.12%), KOSDAQ 1,129 (-5.14%), USD/KRW 1,497.76, WTI $105.42
- 월요일 첫 거래일 대비: 3가지 시나리오(KOSPI 7,500↑/7,300~7,500/<7,200) + USD/KRW 1,500 스태그플레이션 경고

### Cross-Cycle Progress (Day 23)
| 항목 | 진척 |
|:-----|:-----|
| Trinity 복구 | ✅ 완전 복구, 3/3 정상 |
| Tech Scavenger 캐시 리셋 | ❌ 5회 요청에도 미실행 |
| Swap 모니터링 | ✅ **신규 추가 (14:30)** |
| 지식 문서 생성 (3건) | ❌ 13일차 지연 |
| Deep Diagnosis (5건) | 📋 계획 수립 완료, 월요일 실행 예정 |
