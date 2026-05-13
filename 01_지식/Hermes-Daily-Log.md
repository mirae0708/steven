# Hermes Daily Log — 2026-05-04 (월)

## 📋 시스템 현황 스냅샷 — 16:45

| 항목 | 상태 |
|:-----|:------|
| Hermes CLI | ✅ 정상 (PID 378, 5/2 01:04 재시작) |
| Hermes chat 세션 | ✅ 정상 (PID 378667, tmux hermes) |
| OpenWebUI | ✅ 정상 (PID 371246, port 3000) |
| tmux hermes-mcp | ✅ 정상 (신규, 16:36 생성) |
| tmux jongdari | ✅ 정상 (1개 세션) |
| tmux cowagent | ✅ 정상 (16:36 생성) |
| MCP 서버(3군데) | ✅ 전원 정상 |
| 메모리 사용 | ~799MB (OpenWebUI) + ~269MB (chat) |

### 포트폴리오 (5/4 종가 기준)
| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----|:-------|:-------|:-------|
| 014950.KQ (삼성부광) | 34주 | 10,040원 | 9,540원 | -4.98% |
| 459510.KQ (나우로보틱스) | 10주 | 30,550원 | 미갱신 | - |
| 현금 | - | 4,349,470원 | - | - |

### Macro
- KOSPI: **6,936.99** (+5.12% 반등, 사상 최고 근접)
- KOSDAQ: **1,213.74** (+1.79% 반등)
- 삼성부광: 9,540원 (-1.45%) — 9,400원 지지선 근접
- 에이치엘사이언스: 17,620원 (-0.17%)
- WTI: $100.96 (-0.96%, $100선 위태)
- USD/KRW: 1,469.58원 (-0.30%, 소폭 강세)

### 이슈
- 삼성부광 -4.98% — 9,400원 지지선 이탈 시 손절 검토 필요
- 나우로보틱스 current_price 미갱신 지속 (5/4 16:45)
- WTI $100.96, $100선 붕괴 임박
- MetaClaw 96h+ 다운 지속
- 459510.KQ 실제 종목명 확인 필요 (paper_portfolio에 종목명 누락)

## 🧬 Auto-Evolution Cycle — 16:30

### Step 1: Knowledge Absorption Scan
- **Scanned:** 50 documents across AI_Agents, Agent_LLM, LLM, Deep_Learning, RL categories
- **Source types:** arXiv papers (16), GitHub repos (16), HF Daily papers (1), Strategy report (1)
- **New categories discovered:** Agent_LLM (agent-native LLMs, agent harnesses)

### Step 2-3: Applicability Analysis & Application
**6 high-impact technologies absorbed:**

... [existing content] ...

### Key Insights
- **MCP is Hermes #1 gap** — 2,000+ servers, de facto standard, all competitors have it
- **Qwen3-Coder $0.4/M tokens** — agent-native LLM cost just dropped dramatically
- **Benchmark gaming discovered** — all 8 major agent benchmarks can be cheated. Real task success > benchmark score
- **Hermes is unique** — only open-source agent with self-learning + persistent memory (6-12mo lead)

---

## 🧬 Auto-Evolution Cycle — 22:30 (Delta)

### Scanned
- 1 new document since 20:30: **club-3090** (noonghunna, ⭐469, Python)

### Absorbed Knowledge
- **club-3090**: Community recipes for running LLMs on RTX 3090 (vLLM, SGLang, llama.cpp)
- Qwen3.6-27B config for 1×/2× 3090 cards — enables local Hermes inference at zero API cost
- Multi-engine support documented for future local LLM deployment

### Created/Updated
- ✅ Updated `Hermes-Auto-Evolution-20260504.md` — added club-3090 as 7th technology
- ✅ Created `Hermes_Evo_Report_20260504_2230.md` — delta cycle report
- ✅ Updated Next Actions: added club-3090 config testing

### Cumulative Today
- **13 documents absorbed**, **8 technologies documented**, **51 total scanned**
- **8 critical gaps remain** (MCP integration still #1 priority)
- MCP pipeline: 20 multi-search reports generated today, 5.9s avg latency

---
### Created/Updated
1. ✅ Created `AI_Agents/_Index.md` — knowledge index for agent research
2. ✅ Created `Agent_LLM/_Index.md` — knowledge index for agent-capable LLMs
3. ✅ Created `01_지식/Hermes-Auto-Evolution-20260504.md` — detailed evolution report
4. ✅ Updated Meta Rules: verification gates, MCP-first, security-first
5. ✅ Updated L1 Skill Index: 3 new skill templates
6. ✅ Updated L2 Global Facts: MCP ecosystem stats, agent LLM pricing, benchmark strategy

### Key Insights
- **MCP is Hermes #1 gap** — 2,000+ servers, de facto standard, all competitors have it
- **Qwen3-Coder $0.4/M tokens** — agent-native LLM cost just dropped dramatically
- **Benchmark gaming discovered** — all 8 major agent benchmarks can be cheated. Real task success > benchmark score
- **Hermes is unique** — only open-source agent with self-learning + persistent memory (6-12mo lead)

---

# Hermes Daily Log — 2026-04-29 (수)

## 오늘의 주요 작업
### 1. Obsidian 연동 구축 ✅
- `hermes-share/` 명령 파일 기반 양방향 통신 시스템 구축
- watcher 데몬 (tmux hermes-watcher) 2초 간격 감시 중
- Vault에 시스템 문서 7개 생성

### 2. 배틀루프 상태
- tmux `jongdari` 세션: **실행 중** (PID 65571, 65587)
- 포트폴리오: 현금 4,658,640원 + 014950.KQ 34주 (9,790원)
- CB Score: 6/100

### 3. 발견한 이슈
- `014950.KQ`: Yahoo Finance "possibly delisted" → data_engine 자체 DB로는 정상 조회됨 (9,790원)
- 네이버 뉴스 파싱 정규식 수정 완료 (8건 수집 확인)
- 뉴스 HTML `resp.read()` 두 번 호출 문제 발견 및 수정

## 배운 점
- Windows ↔ WSL 간 파일 공유는 `/mnt/c/` 마운트로 가능
- tmux 세션명 충돌 조심 (hermes / hermes-watcher 분리)
- Obsidian `[[wiki link]]` 문법은 폴더 구조 포함해야 함

---
## 📋 2026-04-29 04:00 — 자동 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
| WebUI | ✅ 정상 (PID 466) |
| Jongdari 배틀루프 | ❌ **종료됨** — tmux 세션은 있으나 프로세스 Terminated |
| Data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 03:27 최신 갱신 |
| CB Score | 6/100 — 극단 공포 |
| WTI | $98 |
| USD/KRW | ₩1,473 |

### 발견 이슈
1. **Jongdari 배틀루프 종료** — `nexus_orchestrator.py --mode live` 프로세스가 `/mnt/c/Users/Steven/Desktop/stock/...`에서 Terminated 상태. 재시작 필요.
2. **014950.KS yfinance delisted** — 코스피 심볼 계속 실패. KQ(코스닥)는 정상 작동.
3. **473980.KQ(에이치엘사이언스) 데이터 수집 확인** — 모니터링 대상 추가된 것으로 보임.

### Action Required
- Jongdari 배틀루프 재시작 필요 (tmux jongdari에서 `python3 nexus_orchestrator.py --mode live`)
- 014950.KS yfinance fallback 로직은 아직 개선되지 않음

|---
## 📋 2026-04-29 08:00 — 자동 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
| WebUI | ✅ 정상 (PID 466) |
| Jongdari 배틀루프 | ✅ **재시작 성공** — PID 87594, 05:06부터 정상 작동 중 |
| data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 07:00 최신 갱신 |
| 시장 현황 | KOSPI 6,615 (4/27 마감, 3d +3.07%), USD/KRW 1,472.88, WTI $99.62 |

### 주요 변경사항
1. **Jongdari 배틀루프 정상 복구** — 05:06에 `nexus_orchestrator.py --mode live` 재시작됨. self_evolve_report 정상 (08:00 최신).
2. **WTI $100.06→$99.62 오류 수정** — 07:00에 실제 종가로 정정. CRISIS MODE 해제됨 (3d +3.93%).
3. **tomorrow_strategy**: 삼성전자(score 92), SK하이닉스(88), 현대차(85) 추천 — 반도체/자동차 강세 모멘텀.

### 포트폴리오 현황
| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----|:-------|:-------|:-------|
| 014950.KQ | 34주 | 10,040원 | 9,790원 | -2.49% |
| 현금 | - | 4,658,070원 | - | - |
| **합계** | | **5,000,000원** | | **-0.1%** |

### 발견 이슈
- 473980.KQ(에이치엘사이언스) 4/27 매매: 19주 매수(17,910) → 2분만에 매도(17,880, -570원 손실). 전략적 재평가 필요.
- KOSPI RSI 87.9 / KOSDAQ RSI 91.0 — **과매수 영역**. 조정 리스크 주의.

## 내일 할 일

### 🚚 인보이스 감지 (2026-04-29 02:37)
- [SEA (해운)] **MRS25032301_1774865043.pdf** 대기 중
- [SEA (해운)] **MRSO2020031401_1774881189.pdf** 대기 중
- [SEA (해운)] **Friotech_COMMERCIAL INVOICE PACKINGLIST - 03_21(2024).xlsx** 대기 중
- [AIR (항공)] **MRS24092701.pdf** 대기 중
- [EXPRESS (특송)] **MRL247433 260414HL-INVOICE.xlsx** 대기 중

---

## 📋 2026-04-29 12:00 - 자동 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
| WebUI | ✅ 정상 (PID 466) |
| Jongdari 배틀루프 | ✅ **정상 작동** (PID 87594, 05:06~, 1분 간격 스캔) |
| Data 수집 | ✅ Nexus 자체 수집, KOSPI 3일 +2.32% |
| CB Score | 6/100 - 극단 공포 유지 |
| WTI | $99 |
| USD/KRW | 1,476원 |
| KOSPI | 6,626 |
| KOSDAQ | 1,211 |

### AI Council 분석 결과 (최근)
- **464580.KQ (닷밀)** -> HOLD | 분석관:HOLD(50%), 조사관:BUY(65%), 리스크관:HOLD(50%)
- 모든 분석 대상 HOLD 유지, 당 매수 없음

### 내일 전략
| 종목 | Score | 논리 | 목표가 |
|:-----|:-----|:-----|:-------|
| 삼성전자 | 92 | 반도체 업황 개선, 외국인 대량 매수 | 68,500 |
| SK하이닉스 | 88 | HBM 수요 폭증, 수렴 패턴 상방 이탈 | 185,000 |
| 현대차 | 85 | 주주환원 정책 강화, 저PBR 매력 | 258,000 |

### 발견 이슈
1. **portfolio.json 초기화** - 5,000,000원 현금 + 빈 포지션. 4/27 매수 014950.KQ 34주(9,790원) 기록 소실. 시스템 리셋으로 포지션 유실 추정.
2. **CB Score 6/100 지속** - 극단 공포 vs KOSPI 1M +31.2% 과매수 모순.
3. **WTI $99선** - 오전 $100.61 돌파 후 하락. 변동성 지속.
4. **KOSPI 6,626 / KOSDAQ 1,211** - 장중 데이터 정상 수집 중.

### Action Required
- portfolio.json 리셋 원인 파악 (재시작 시 포지션 스냅샷 유지 로직)
- 014950.KQ 재매수 검토 (진입가 10,040 -> 9,800선)

---

## 📋 2026-04-29 16:00 — 자동 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
| WebUI | ✅ 정상 (PID 466, 4일차) |
| Jongdari 배틀루프 | ✅ **정상 작동** (PID 50459/87594, 05:06~, 1분 간격 스캔) |
| Hermes tmux | ✅ 새 세션 생성됨 (15:48) |
| Data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,220 / WTI $100.56 / USD/KRW 1,478 |
| CB Score | (포함되지 않음 — market_intel 구조 변경) |
| KOSPI 3일 변동 | +3.32% |

### 포트폴리오 현황
- **현금**: 5,000,000원
- **포지션**: 없음 (portfolio.json 리셋 현상 지속)
- **014950.KQ 34주(9,790원) 포지션**: 여전히 소실됨 — 시스템 리셋 후 복구되지 않음

### AI Council 최근 분석 (15:51~)
- **240550.KQ (동방메디컬)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
- **486990.KQ (노타)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
- **476080.KQ (M83)** → HOLD | 분석관:HOLD(50%) | 조사관:BUY(65%) | 리스크관:HOLD(50%)
- 모든 종목 HOLD 유지 — 당일 매매 없음

### 시장 주요 동향
- **KOSPI 6,691** — 사흘 연속 사상 최고치 마감 기록
- **KOSDAQ 1,220** — 동반 상승
- **WTI $100.56** — $100선 재돌파, 변동성 지속
- **USD/KRW 1,478원** — 원화 약세 지속
- **모멘텀**: 006400.KS(삼성SDI) +4.7%, 051910.KS(LG화학) +3.4%, 005930.KS(삼성전자) +1.8%
- **삼성전자**: 당일 +1.8% 상승, 외국인 매수 지속

### 발견 이슈
1. **market_intel.json 구조 변경** — `kospi`, `kosdaq`, `usdkrw`, `wti`, `cb_score` 최상위 키가 사라지고 `macro` 내부로 통합됨. CB Score 정보 누락. 12:00 스냅샷 이후 시스템 업데이트로 추정.
2. **portfolio.json 리셋 지속** — 여전히 현금 500만원만 표시, 포지션 없음. 014950.KQ 34주 포지션 소실 미복구.
3. **self_evolve_report** — 16:00 기준 정상 (battleloop=ok, market_intel=ok, portfolio_updated=true)

### Action Required
- portfolio.json 포지션 복구 또는 재매수 결정 필요
- market_intel 스키마 변경에 따른 스냅샷 파서 업데이트 필요
- CB Score 복원 — 새 구조에서 어디에 포함되었는지 확인 필요

## 이번 주 배운 점
- OpenClaw 게이트웨이를 Hermes 시스템에서 완전 분리/삭제 완료 (반말 이슈도 있었음 🫡)
- market_intel.json 데이터 구조가 동적으로 변경될 수 있음 — 스냅샷 수집 시 유연한 파싱 필요
- portfolio.json이 시스템 재시작 시 리셋되는 문제 — 영구 스토리지/스냅샷 복구 로직 필요
- tmux 세션이 프로세스 크래시에도 존속할 수 있어 ps aux와 tmux ls 결과가 다를 수 있음

## 내일 할 일 (2026-04-30, 목)
1. **portfolio.json 리셋 문제 원인 파악 및 수정** — 종료 시 포지션 스냅샷 저장 로직
2. **market_intel 파서 업데이트** — 새 JSON 구조(macro 내부)에 대응
3. **014950.KQ 재매수 검토** — 이전 진입가 10,040원 대비 현재가 확인
4. **CB Score 복원** — 데이터 구조 변경에 따른 CB Score 수집 파이프라인 재확인
5. **인보이스 감지 처리** — 대기 중인 5건 검토
|

---

## 📋 2026-04-29 16:00 — 장 마감 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 3일차) |
| WebUI | ✅ 정상 (PID 466, Apr25~) |
| Jongdari 배틀루프 | ⚠️ **중복 실행** — PID 87577(05:06~, 기존) + PID 50459(16:00~, 신규 tmux jongdari) |
| CB Score | 16/100 — 극단 공포 유지 (WTI $101, KOSPI 1M +32.4%) |
| WTI | **$101** — $100 재돌파, CRISIS MODE |
| USD/KRW | ₩1,478 |
| Data 수집 | ✅ KOSPI/KOSDAQ/환율/WTI 모두 정상 수집 |

### 포트폴리오 현황
| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----|:-------|:-------|:-------|
| 현금 | 5,000,000원 | - | - | - |
| **합계** | | **5,000,000원** | | **0.0%** |

⚠️ **portfolio.json 초기화 확정** — 014950.KQ 34주(매입가 10,040원) 포지션 완전 소실. 시스템 리셋으로 기록 유실.

### 발견 이슈
1. **portfolio.json 초기화 (재확인)** — 12:00 스냅샷에서 발견된 문제, 16:00에도 여전히 500만 현금 상태. 구체적 시점은 불명확하나 재시작 시 포지션 복원 로직 부재 확인.
2. **Jongdari 중복 실행** — 기존 세션(PID 87577, bash 래퍼) 생존 상태에서 새로운 tmux `jongdari` 세션(PID 50459)이 16:00에 추가 생성됨. 배틀루프 이중 실행 중.
3. **CB Score 6→16 상승** — WTI $100 재돌파($100→$101) 반영. KOSPI 1M +32.4%, Vol 3.7%로 여전히 고위험.
4. **yfinance "possibly delisted" 지속** — 014950.KS, 240550.KS, 486990.KS 모두 조회 실패. KQ(코스닥) 한정 데이터 정상.
5. **Telegram API 404 에러** — 뉴스 전송 시 Telegram 봇에서 404 Not Found. 봇 채팅 ID 문제 가능성.
6. **014950.KQ 현재가** — 4/29 종가 9,910원 (전일 9,790원, +1.22%). 이전 매입가(10,040원) 대비 -1.29%.

### Action Required
- **\[긴급\] Jongdari 중복 세션 정리** — PID 87577 (kitty 기반 원본) 또는 PID 50459 (tmux 새 세션) 중 하나만 유지. tmux jongdari 정리 필요.
- **\[긴급\] portfolio.json 복원** — 014950.KQ 34주(매입가 10,040, 현재 9,910) 포지션 수동 복원. 포지션 스냅샷 백업 메커니즘 구축 필요.
- Telegram 404 원인 파악 및 봇 채팅 ID 재설정
- AI Council 분석 결과 absent — 오늘 장 마감 후 분석 미실시로 추정

---

## 📋 2026-04-29 20:00 — 야간 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
| WebUI | ✅ 정상 (PID 466, Apr25~) |
| Jongdari 배틀루프 | ⚠️ **중복 실행 지속** — PID 87594(05:06~,kitty) + PID 50459(16:00~,tmux) |
| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유 (현재 9,900원, -1.4%) |
| Data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,221 / WTI $103.36 / USD/KRW 1,479 |
| KOSPI 3일 변동 | +3.32% |

### 새로 발견된 매매 이력 (paper_portfolio.history)
| 시간 | 종목 | 종류 | 수량 | 가격 | 손익 |
|:----|:-----|:----|:----|:----|:----|
| 11:44 | 464580.KQ (닷밀) | BUY | 155주 | 2,100원 | - |
| 12:22 | 464580.KQ (닷밀) | SELL | 155주 | 2,080원 | -3,100원 |

- **464580.KQ 매매**: AI Council 분석관:SELL(30%)/조사관:BUY(65%)/리스크관:SELL(50%) → 2:1 SELL로 매도. 38분 보유, -3,100원 손실.
- **당일 순손익**: -3,100원 (464580.KQ 손실만 발생, 014950.KQ 미실현 -1.4%)
- **불일치**: portfolio.json은 빈 포지션이나 paper_portfolio.json은 정상 보유 중

### 시장 변동사항
- **WTI $103.36** — $100→$103 급등 (+4.4%). CRISIS MODE 지속.
- **USD/KRW 1,479원** — 원화 약세 심화 (오전 1,476→야간 1,479)
- **KOSPI 6,691** — 사상 최고 유지. RSI 87.9 과매수 경고 지속.
- **CB Score**: market_intel 새 구조에서 누락 (16:00 기준 16/100)

### 발견 이슈
1. **portfolio vs paper_portfolio 불일치** — 운영용 portfolio.json(빈 포지션)과 실제 paper_portfolio.json(014950.KQ 34주 보유)가 불일치. paper_portfolio.json이 실제임.
2. **중복 실행 미해결** — PID 87577(kitty bash)+87594(실제) + 50459(tmux). 3개 체인.
3. **CB Score 데이터 누락 지속** — 새 market_intel 구조에 CB Score 미포함.
4. **WTI $103 급등** — 추가 상승 시 포트폴리오 리스크 증가.

### Action Required
- portfolio.json을 paper_portfolio.json 기준으로 복원 필요
- 중복 세션 정리 (하나만 유지)
- CB Score 재수집 파이프라인 복원

|---
## 📋 2026-04-30 00:00 — 자정 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 4일차) |
| WebUI | ✅ 정상 (PID 466, Apr25~) |
| Jongdari 배틀루프 | ⚠️ **3중 중복 실행** — PID 87577(05:06, bash)+87594(05:06)+93123(22:10, 신규) |
| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유, 464580.KQ 매매(-3,100원) |
| data 수집 | ✅ KOSPI 6,691 / KOSDAQ 1,220 / WTI **$105.15** / USD/KRW **₩1,483** |
| CB Score | market_intel 구조 변경으로 누락 |

### 당일 매매 요약
- **014950.KQ**: 보유 34주 (4/27 진입 @10,040, 현재 9,920원, -1.2%)
- **464580.KQ (닷밀)**: 11:44 매수 155주 @2,100 → 12:22 매도 @2,080 (-3,100원)
- **473980.KQ (에이치엘사이언스)**: 4/27 19주 매수 @17,910 → 2분만 매도 @17,880 (-570원)
- **당일 순손익**: -3,100원 / 누적 손익: -3,670원

### 주요 변동사항
1. **WTI $100.69→$105.15 급등 (+4.4%)** — 20:00 스냅샷 $103에서 추가 2% 상승. CRISIS MODE 심화.
2. **USD/KRW ₩1,479→₩1,483** — 원화 약세 지속. $105 유가 영향.
3. **Jongdari 3중 실행** — 22:10에 새로운 tmux 세션(PID 93123) 추가 실행됨. kitty+tmu+x 3개 chain.
4. **portfolio.json ≠ paper_portfolio.json** — 운영용 portfolio.json은 동기화됨(34주 정상), paper_portfolio는 4/29 daily_pnl 반영.
5. **market_intel 스키마 변경** — CB Score, top_gainers/losers, sector_momentum 모두 빈 배열.

### 미해결 이슈
- portfolio.json 리셋 문제: 일단 paper_portfolio 기준으로 현재 34주 포지션 동기화 완료
- 중복 세션 정리 필요 (3→1)
- CB Score 데이터 복원 필요
- WTI $105 급등 — 포트폴리오 리스크 상승
|- FOMC 앞두고 뉴욕증시 하락 — 한국 시장 영향 주시 필요

|---
## 📋 2026-04-30 04:00 — 자동 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 64547, 5일차, Apr26~) |
| WebUI | ✅ 정상 (PID 466, Apr25~) |
| Jongdari 배틀루프 | ⚠️ **3중 중복 실행 지속** — PID 87577(bash)+87594(실제)+93123(22:10~) |
| paper_portfolio | ✅ 014950.KQ 34주 @10,040원 보유 |
| data 수집 | ✅ KOSPI 6,641(4/28) / KOSDAQ 1,216(4/28) / WTI **$106.70** / USD/KRW **₩1,488** |
| CB Score | market_intel 구조 변경으로 누락 지속 |

### 전일 요약 (4/29)
- **014950.KQ(삼성부광)**: 34주 보유(4/27 진입 @10,040, 4/29 종가 9,920, -1.20%)
- **464580.KQ(닷밀)**: 11:44 매수 155주 @2,100 → 12:22 매도 @2,080 (-3,100원)
- **473980.KQ(에이치엘사이언스)**: 4/27 매수 19주 @17,910 → 2분만 매도 @17,880 (-570원)
- **당일 순손익**: -3,100원 / 누적 손익: -3,670원

### 주요 변동사항
1. **WTI $106.70** — 전일 $100.69에서 $106.70으로 +5.97% 급등. 연속 6시간 $100 이상 유지. CRISIS MODE 심화.
2. **USD/KRW ₩1,488** — 원화 약세 지속(전일 1,473→1,488, +1.02%). WTI 급등 영향.
3. **Jongdari 3중 중복 실행 지속** — 87577(kitty)+87594(실제)+93123(tmux). 해소되지 않음.
4. **portfolio.json ≠ paper_portfolio.json** — 운영/paper 불일치 상태.
5. **KOSPI 4/29 Close=NaN** — yfinance 아직 확정되지 않음. 4/28 종가 6,641 기준 유지.

### 미해결 이슈
- 3중 중복 Jongdari 세션 정리(3→1)
- CB Score 데이터 복원 (market_intel 구조 변경)
- portfolio.json 복원 (paper_portfolio 기준 34주 동기화)
|- WTI $106 급등 → 포트폴리오 리스크 최대치, FOMC 앞둔 변동성 주의

|---
## 📋 2026-05-02 04:00 — 주말 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 293, 5/2 01:04 재시작됨) |
| Jongdari 배틀루프 | ✅ 정상 (PID 784, 1개 세션만) |
| portfolio.json | ✅ 정상 — 014950.KQ 34주 @10,040원 |
| tmux 세션 | ✅ hermes / hermes-mcp / jongdari 각 1개 |
| WTI | $102.19 |
| USD/KRW | ₩1,472.47 |

### 신규 발견
1. **459510.KQ(나우로보틱스) 신규 매수** — 4/30 20:28 AI Council BUY 결정(📊70%/🔍40%/📉60%), 10주 @30,550원 진입. paper_portfolio에 기록됨.
2. **Jongdari 3중 중복 해소** — 4/29 3개 세션에서 현재 1개(pid 784)로 정상화. tmux 세션도 1개만 유지.
3. **portfolio.json 정상 복원 완료** — 014950.KQ 34주 포지션 정상 유지 중 (cash 4,654,970 + 34주 = 4,991,970원).
4. **paper_portfolio current_price 미갱신** — 459510.KQ current_price가 buy_price=30,550원과 동일, yfinance 미갱신 상태.

### 미해결 이슈
|- paper_portfolio.json 459510.KQ current_price 갱신 필요
|- WTI $102 (여전히 $100+) — CRISIS MODE 감시 지속
|- CB Score market_intel 구조 누락 지속

|---
## 📋 2026-05-02 08:00 — 토요일 스냅샷 기록

### 시스템 현황 스냅샷
| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 293, 5/2 01:04 재시작, 8일차) |
| WebUI | ✅ 정상 (PID 13180, port 8648) |
| Open WebUI | ✅ 정상 (PID 14231, port 3000) |
| MetaClaw | ✅ 정상 (PID 11552, skills_only 모드) |
| Jongdari 배틀루프 | ✅ 정상 (08:00 self_evolve: battleloop=ok, market_intel=ok) |
| tmux 세션 | ✅ hermes / hermes-mcp / jongdari 각 1개 (중복 없음) |
| WTI | $102.50 (5/2 07:58 최신) |
| USD/KRW | ₩1,471.22 |
| KOSPI (4/30 종가) | 6,598.87 (-1.38%) |
| KOSDAQ (4/30 종가) | 1,192.35 (-2.29%) |

### 포트폴리오 현황
| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----|:-------|:-------|:-------|
| 014950.KQ (삼성부광) | 34주 | 10,040원 | 9,710원 | -3.29% |
| 459510.KQ (나우로보틱스) | 10주 | 30,550원 | 30,550원 | 0.00% |
| 현금 | - | 4,349,470원 | - | - |
| **합계** | - | **5,012,470원** | | **+0.25%** |

### 주요 변동사항
1. **주말 시스템 안정화** — 5/1(근로자의 날) + 5/2(토) 휴장. 신규 거래일 데이터 없음. 모든 서비스 정상 유지 중.
2. **Jongdari 중복 세션 완전 해소 확인** — 3중 중복(04/29) → 단일 세션(PID 784→881→현재 단일)으로 정상화.
3. **459510.KQ current_price 미갱신 상태 지속** — 4/30 20:28 매수 @30,550, 아직 yfinance 업데이트 안 됨. 다음 영업일(5/4 월) 갱신 예상.
4. **삼성부광 -3.29% 손실 심화** — 4/30 KOSDAQ -2.29% 급락 영향. 지지선 9,400원 모니터링 필요.
5. **신규 종목 458650.KQ (논 논 타겟팅) 감지** — 배틀루프 로그에서 매수 거절 + 매도 불가 경고 반복 (5/1 22:27~23:30, 12회). 포지션 없음이 정상이나 지속적 스캔 확인.
6. **KOSDAQ 4/30 -2.29% 급락** — 사상 최고 1,221에서 1,192로 조정. RSI 56.6으로 과매수 해소.
7. **KOSPI 6,598.87(-1.38%)** — 사상 최고 6,691에서 소폭 조정. RSI 66.0으로 안정권.

### 발견 이슈
1. **459510.KQ 종목명 불일치** — paper_portfolio에 '459510.KQ'로만 저장(종목명 누락). 실제는 '알에스오토메이션' 또는 확인 필요.
2. **458650.KQ 지속 스캔** — 배틀루프가 458650.KQ를 스캔하나 매도불가 경고만 발생. 매수 조건 미달(수익률 0%)로 매수 거절. 포지션 없음 정상.
3. **014950.KQ(삼성부광)** — RSI 38.8로 과매도 접근. 4/30 KOSDAQ 급락에 동반 하락. 9,400원(20일 최저) 지지선 테스트 가능성.

### 내일 전략 (다음 영업일: 5/4 월)
- 삼성부광 9,400원 지지선 이탈 시 손절 검토
- 459510.KQ 첫 거래일 관찰 (current_price 갱신 확인)
- KOSDAQ 반등 시 포트폴리오 확장 기회 모색
| - WTI $100선 유지 여부 — CRISIS MODE 지속 감시

---

# Hermes Daily Log — 2026-05-05 (화) 어린이날 휴장

## 📋 시스템 현황 스냅샷 — 12:45 KST

| 항목 | 상태 |
|:-----|:------|
| Hermes Gateway | ✅ 정상 (PID 301, 04:04 재시작) |
| Hermes CLI chat | ✅ 정상 (PID 789, tmux hermes) |
| Open WebUI | ✅ 정상 (PID 785, port 3000) |
| MetaClaw | ✅ 정상 (PID 156299, port 30000, skills_only) |
| Jongdari Nexus | ✅ 정상 (PID 2811, nexus_orchestrator) |
| tmux 세션 | hermes / jongdari 각 1개 |
| 메모리 | ~2,560MB / 7,748MB (33%) — 양호 |

### 포트폴리오 (paper_portfolio 기준, 5/5 12:45)

| 종목 | 수량 | 매입가 | 현재가 | 손익률 |
|:-----|:----|:-------|:-------|:-------|
| 014950.KQ (삼성부광) | 34주 | 10,040원 | 9,610원 (↑70) | -4.28% 🟡 |
| 459510.KQ (나우로보틱스) | 10주 | 30,550원 | 30,300원 (→) | -0.82% 🟢 |
| 현금 | - | 4,349,470원 | - | - |
| **합계** | - | **5,007,910원** | | **+0.16%** 🟢 |

### Macro (5/4 종가 기준)
- KOSPI: **6,936.99** (+5.12%, 사상 최고)
- KOSDAQ: **1,213.74** (+1.79%)
- WTI: **$104.47** (↑$3.51, $100선 이탈 위험 해소)
- USD/KRW: **1,475.21** (원화 약세, +5.63원)
- KOSPI 3D 트렌드: **+4.87%**

### 어린이날 휴장 안내
- 5/5(화) KRX 휴장 — 다음 거래일: 5/6(수)
- 신규 거래 데이터 없음, 모든 서비스 정상 유지 중

### 🔴 발견된 이슈
1. **self_heal.py 스크립트 없음** (Errno 2) — 05:35 self-heal cron에서 `hermes_self_heal.py`가 삭제됨. 자동 치유 스크립트 누락 상태이나 tmux 복구는 정상 수행. 복구 필요.
2. **Telegram 연결 간헐적 끊김** — 5/4 14:55~14:58 인터럽트 로그에 Telegram 안정성 문제 다수 기록. 사용자가 "텔레그램이 되었다가 안되고 이래" 보고.
3. **삼성부광 9,610원** — 9,400원 지지선보다 여유 있으나 여전히 -4.28% 손실. 5/6 장중 관찰 필수.
4. **459510.KQ current_price 갱신됨** (30,300원) — 미갱신 상태에서 해소됨. -0.82%로 손실 미미.
5. **operational portfolio.json 불일치** — 운영용에는 014950.KQ 34주만 기록, paper_portfolio와 싱크 안 됨.

### 긍정 신호
- KOSPI 사상 최고 6,936.99 달성 (5/4 +5.12%)
- 삼성부광 9,540→9,610 (소폭 반등, 9,400 지지선 안정)
- 나우로보틱스 현재가 정상 갱신 확인

---

## 2026-05-13 (수) 16:45 — Cron Wiki Update

### 📋 시스템 현황
| 항목 | 상태 | 비고 |
|:-----|:----:|:-----|
| Hermes Gateway (systemd) | ✅ | PID 298, 3일차 (5/10~) |
| Jongdari 배틀루프 | ✅ | PID 15259, 사이클 정상 |
| KeepAlive v7+ | ✅ | BULLETPROOF 모드, PID 파일 미스매치 버그 |
| Open WebUI | ✅ | port 3000 |
| tmux 세션 (6개) | ✅ | hermes / hermes-mcp / jongdari / trinity-3종 |
| 메모리 | 🟢 | 2.4Gi / 7.6Gi (31%) |
| Swap | 🟡 | 739Mi / 2.0Gi (36%) — 전일 1%→재악화 |
| 디스크 | 🟢 | 33Gi / 1007Gi (4%) |

### 📊 시장 현황 (5/13 actual close 기준)
| 지표 | 값 | 비고 |
|:-----|:----:|:-----|
| KOSPI | 7,829.27 (+2.44%) | RSI 86.3 과매수, BB% 94.3% 상단 근접 |
| KOSDAQ | 1,170.79 (-0.72%) | RSI 47.8 약세 — KOSPI 디커플링 심화 |
| WTI | $100.73 (-1.42%) | $100선 유지, RS 55.6 BB% 64.5% |
| USD/KRW | 1,490.28 (+1.07%) | RSI 55.0, BB% 91.9% 상단 근접 |
| 삼성부광 | 7,840원 (-2.00%) | RSI **21.8** 심각 과매도, 신저가, 포트폴리오 **-21.91%** |
| 에이치엘사이언스 | 16,440원 (+2.18%) | RSI 36.5 과매도 탈출 시도 |
| 나우로보틱스 | 27,600원 (+0.73%) | 5/13 **신규 Wiki 등록** |

### 🔬 오늘의 주요 발견 — 신규 지식

**🏆 첫 MCP 보안 논문 수집**
- `Attacks and Mitigations for Distributed Governance of Agentic AI` (arXiv 2605.12364)
- 5/4 MCP 카테고리 추가 후 첫 수집된 MCP 관련 학술 논문
- MCP 프로토콜의 보안 취약점과 분산 거버넌스 이슈를 다룸

**🧬 Tech Scavenger: 19개 신규 arXiv 페이퍼 수집 (15:20 대규모 배치)**
- AlphaGRPO (2605.12495) — 멀티모달 GRPO 확장
- LongMemEval-V2 (2605.12493) — 에이전트 장기메모리 벤치마크
- MEME (2605.12477) — 에이전트 메모리 평가
- Learning, Fast and Slow (2605.12484) — LLM 학습 동학
- Beyond GRPO (2605.12491) — GRPO 후속 연구
- Cumulative: 144회 실행, 21회 실제 수집 (14.6%)

**🔄 Tech Scavenger 8시간 갭 (07:21→15:20)**
- 실행 프로세스 사망 추정 — Cron job(`625ae3e2ffff`) `last_run_at: null`
- 실행 메커니즘 개선 필요

**🟡 Swap 재악화 추세**
- 5/12 25MB(1%) → 5/13 739Mi(36%) — 약 700MB 증가, 과거 93% OOM 경험 대비 주시 필요

### ⏳ 지속 이슈 (17일차)
| # | 이슈 | 심각도 | 상태 |
|:-:|:-----|:------:|:----:|
| 1 | yfinance .KS 티커 오류 (KOSPI=NaN) | 🔴 | 미해결 |
| 2 | KiwoomAuth 8050 | 🔴 | 미해결 |
| 3 | Tavily API 키 만료 (401) | 🔴 | 미해결 |
| 4 | Dashboard 6일 스테일 | 🔴 | 미해결 |
| 5 | MCP Python Zombie | 🔴 | 미해결 |
| 6 | Trinity: CowAgent+OpenDesign 다운 | 🔴 | 미해결 |
| 7 | MetaClaw HTTP 404 | 🟡 | 미해결 |
| 8 | Swap 36% 재악화 | 🟡 | 신규 |
| 9 | KeepAlive PID 파일 누락 | 🟡 | 신규 |

### 🎯 내일 우선순위
1. [ ] Swap 모니터링 — 50% 도달 시 조치 필요
2. [ ] Tech Scavenger Cron job 실행 불가 원인 조사
3. [ ] Tavily API 키 갱신 (401 만료 지속)
4. [ ] Dashboard 강제 갱신 고려
5. [ ] MetaClaw / CowAgent / OpenDesign 복구 시도
- WTI $104.47로 $100선 이탈 리스크 완화