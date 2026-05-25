---
created: 2026-05-26 08:30
updated: 2026-05-26 08:36
type: knowledge
tags: [hermes, self-evolution, cron-cycle, tuesday, pre-market, d-day-plus-1, pre-open]
---

# 🧬 HERMES 자동 진화 사이클 — 2026-05-26 (Tue) 08:30 KST (7차, Pre-Open T-30min)

## ✅ 1단계: 지식 흡수 스캔 완료

### 📂 이번 사이클 분석 대상 (04:30→08:30 KST 누적 변화, 4시간)

| 문서/데이터 | 크기 | 주요 내용 |
|------------|------|----------|
| `wiki/` AI 폴더 (기존 142건 유지) | — | 04:30 이후 신규 논문/문서 **0건** — 새벽 정체 |
| `MCP-멀티검색` (06:41~06:53, 8 files) | **8건 모두 LOW SIGNAL** | **35회 연속 LOW SIGNAL** (27→35회). 네이버 AI 검색 + GitHub 모두 Naver 지식iN/쇼핑 노이즈. **결정적 타협점 초과** |
| `hermes_dashboard.json` (08:34) | 1.1KB | KOSPI 7,847.71, WTI **$90.91** (vs. $96.60로 5.9% 하락!), USD/KRW **1,517.23** (vs. 1,511로 +0.4% 상승), 포트폴리오 ₩4,929,810, **CB Score=?/100** (미기입) |
| `Nexus 프로세스` (실시간) | 사이클 정상 | **08:31:05** `✅ Cycle Complete. Standby for 10 mins.` — 정상 가동 중. Council 분석: 900100 → SELL(18%), 432980 → HOLD(7%), 049120 → HOLD(20%) 등 |
| `self_heal.py` 로그 | 5/5 마지막 | self_heal.log가 5/5 이후 갱신 없음 — **21일간 중단 상태** 확인 |

### 💡 신규 발견 — 08:30 KST

1. **🔴🔴 WTI $90.91 — 전주 대비 5.9% 추가 하락! ($96.60→$90.91)**  
   대시보드 08:34 데이터 기준 WTI 배럴당 $90.91 기록. 전주 마감 $96.60 대비 **-$5.69(-5.9%) 추가 하락**. $100선 하회 6일차 진입. WTI 급락 지속은 글로벌 경기 침체 신호 vs. 스태그플레이션 완화的双重 해석 가능. **Council 분석에 반영되어야 할 중요 변수.**

2. **🔴 USD/KRW 1,517.23 — 전주 대비 +6원 상승 (1511→1517)**  
   원화 약세 지속. 전일 Brain Sync 1511 대비 +6원 상승. 1520선 재돌파 가능성.

3. **🔴🔴 Self_heal.py 21일간 중단 — CB Score 미기입 지속**  
   `self_heal.log` 마지막 기록이 **5/5 04:11**로 확인됨 — 21일간 self_heal이 작동하지 않음. Dashboard의 CB Score는 `Score=?/100`로 미기입. **04:30 사이클에서 Nexus 재시작으로 CB Score 복구되었다고 보고했으나, dashboard.json 자체는 CB Score를 계속 기록하지 못하고 있음.** Nexus 내부 CB Score(22/100)는 프로세스 재시작 후 정상이나, 대시보드에는 반영 안 됨.

4. **🟢 Nexus 재시작 후 안정적 운영 — 4시간 연속 정상 사이클**  
   04:32 재시작 이후 08:31까지 약 **4시간 동안 20+ 사이클 정상 완료**. 각 사이클: Stock 스캔 → Deep Dive → Council v4.0 분석 → HOLD/BUY/SELL 판단. Council 신뢰도 7~20% 유지 (대부분 HOLD 바이어스). **SELL 판단(900100.KQ, 18%)도 등장했으나 포지션 없어 미실행.**

5. **🟡 MCP 멀티검색 35회 연속 LOW SIGNAL = 리소스 100% 낭비 확인**  
   5/24~5/26 3일간 35회 연속 LOW SIGNAL. 8개 파일 새벽 배치(06:41~06:53) 모두 네이버 지식iN/쇼핑 링크 노이즈. **이 시점에서 "중단"이 아닌 "소스 전환"이 유일한 합리적 선택.** Google News API + Yahoo Finance 조합으로 전환 제안.

6. **🟡 모의투자 34일차 — KOSPI 7,848(+13.7% from 4/27)에도 현금 보유**  
   4/27 저점(6,900) 대비 KOSPI +13.7% 상승했으나 포트폴리오는 현금 492만 전량 보유. CB Score 미복구로 Council 신뢰도 17% 유지 → HOLD 바이어스 고정. **기회비용 $13.7% 누적 손실 중.**

### 📊 리소스 상태 (08:36 KST 실측)

| 항목 | 04:30 KST | 08:36 KST | 변화 |
|------|-----------|-----------|------|
| **Uptime** | 1d 10h 49m | **1d 14h 55m** | +4h |
| **Memory** | 3.4Gi/7.6Gi (44%) | **3.3Gi/7.6Gi (43%)** | 🟢 안정 |
| **Swap** | **385MiB** 🟡 | **361MiB** 🟡 | **-6.2% 하향 안정화** (385→361MiB, 4시간 연속 감소) |
| **Disk** | 30GB/1007GB (4%) | 30GB/1007GB (4%) | 안정 |
| **Loadavg** | 0.90 / 0.42 / 0.30 | **0.56 / 0.79 / 0.54** | 🟢 저부하 |
| **CB Score (Dashboard)** | ?/100 | **?/100** | 🔴 **미기입 지속** — self_heal 21일 중단 |
| **CB Score (Nexus)** | 22/100 (재시작) | **22/100 추정** | 🟢 프로세스 내부 정상 |
| **시장 상태** | NORMAL (T-4.5h) | **PRE-OPEN (T-24min → 09:00 개장)** | 🟢 |
| **모의투자** | ₩4,929,810 (0 pos, 33일차) | ₩4,929,810 (0 pos, **34일차**) | 34일차 정체 |

### ⚠️ 발견된 문제점 — 08:30 KST 업데이트

| # | 이슈 | 상태 | 08:30 업데이트 |
|---|------|------|---------------|
| 1 | **🔴🔴 Self_heal.py 21일 중단** | **신규 발견 — 심각** | `self_heal.log` 마지막 기록 5/5 04:11. **21일간 자가치유 스크립트 미실행.** Dashboard CB Score `?/100` → 자가 진단 체계의 근본적 붕괴. **04:30 사이클에서 "CB Score 복구 확인" 판단은 dashboard.json의 WTI/FX 필드 존재만 확인했을 뿐, self_heal 프로세스 자체의 가동 여부는 검증하지 않음.** |
| 2 | **🔴 WTI $90.91 급락** | **신규 — 리스크 변수** | 전주 $96.60→$90.91(-5.9%). Council 프롬프트에 WTI 급락 반영 필요. |
| 3 | **🟡 MCP 멀티검색 35회 연속 LOW SIGNAL** | **결정 시점 초과** | 8건 새벽 배치(06:41~06:53)도 모두 LOW SIGNAL. 소스 전환(B+C) 즉시 실행 필요. |
| 4 | **🟡 Swap 361MiB — 지속 하향 안정화** | **긍정적 추세** | 385→361MiB, 4시간 연속 감소. 300MiB 임계는 여전히 상회했으나, 탈축적 속도 일정. |
| 5 | **🟡 모의투자 34일차 정체** | **지속** | KOSPI +13.7% 상승 중. CB Score 미복구로 Council HOLD 고정 → 현금 보유 손실 누적. **금일 개장 후 CB Score 개선 없으면 수동 개입 고려.** |
| 6 | **🟡 Council HOLD 바이어스 지속** | **지속 — 6일차** | Analyst 3명 모두 HOLD 47~50% 고정. 신뢰도 7~20% 수준. CB Score 복구만으로는 구조적 HOLD 바이어스 해결 불가 — **프롬프트 재설계가 유일한 해결책.** |
| 7 | **🟡 Chronic Issues 34일차** | **5건 미해결** | yfinance .KS NaN, KiwoomAuth 8050, Tavily 만료, Dashboard stale, MCP CancelledError |

---

## ✅ 2단계: 시스템 상태 점검 (08:30 KST)

### 🏥 Trinity 서비스 현황

| 서비스 | 포트 | 상태 | 비고 |
|--------|------|:----:|------|
| **Hermes Gateway** | 8642 | ✅ | systemd, 1d+ uptime (PID 297, 83분 CPU) |
| **Open WebUI** | 3000 | ✅ | systemd (PID 305, 6분 CPU) |
| **CowAgent** | 9899 | ✅ | PID 503349, tmux |
| **MetaClaw** | 30000 | ✅ | PID 503488, skills_only 모드 (3주+) |
| **open-design** | 17456 | ✅ | PID 503811 |
| **Virtual Office** | 8001 | ✅ | PID 1928 |
| **Nexus Orchestrator** (jongdari tmux) | - | ✅ **정상 운영** | PID 647388. **08:31:05 마지막 사이클 완료.** Council 분석 정상. |
| **hermes tmux** (PID 484) | - | ✅ | 정상 |
| **hermes-mcp tmux** (PID 503771) | - | ✅ | MCP 서버 정상 |
| **hermes_keepalive.sh** | - | ✅ | 3.5시간 CPU — keepalive 정상 |

### 📊 자가 진단 정확도 평가 — 업데이트

| 메트릭 | 이전 방식 | 결과 | 개선 방안 |
|--------|----------|:----:|----------|
| Self_heal.py 가동 | 로그 파일 존재 확인 | **21일간 FALSE POSITIVE** (파일은 있으나 실행 안 됨) | 로그 mtime + 프로세스 체크 이중 검증 |
| Nexus 프로세스 상태 | `pgrep nexus_orchestrator >= 1` | **04:30 사이클에서 발견. 2.5일간 FALSE NEGATIVE** | 로그 mtime + 마지막 사이클 시간 확인 추가 |
| CB Score (Dashboard) | `?/100` 미기입 | **self_heal 중단으로 미기입 지속** | Nexus 내부 CB Score와 대시보드 CB Score의 분리 인지 필요 |
| MCP 품질 | 파일 건수 확인 | **35회 연속 FALSE POSITIVE** (파일은 있으나 모두 LOW SIGNAL) | 콘텐츠 품질 점수 도입 |

---

## ✅ 3단계: 개선 제안 — 08:30 KST (Pre-Open T-30min)

### 🔴 Priority 0 — 금일 09:00 개장 전 필수 (T-24min)

**0.1 🔴🔴 [긴급] Self_heal.py 재시작 및 CB Score 복구**
- `self_heal.py` 프로세스가 21일간 중단됨. dashboard.json에 CB Score가 `?/100`로 미기입.
- **실행**: `self_heal.py` 프로세스 상태 확인 → 중단 시 재시작
- **대시보드 직접 패치**: dashboard.json에 `cb_score` 필드를 Nexus 내부 값(22/100)으로 수동 기입
- **근본 원인**: self_heal.py의 자동 재시작 메커니즘이 없음. keepalive.sh에 self_heal 감시 루틴 추가 필요

**0.2 🔴 [긴급] 대시보드 CB Score 수동 설정**
- dashboard.json → `cb_score: "?"` → `cb_score: "22/100"`로 수정
- Nexus는 정상 가동 중(22/100)이나 dashboard에 반영 안 됨
- Council은 dashboard CB Score 참조 → 개장 전 수동 복구 필요

### 🟡 Priority 1 — 화요일 장중 (5/26)

**1.1 MCP 멀티검색 소스 전환 — 결정 시점 도래 (35회 연속 LOW SIGNAL)**
- 현재: Naver + GitHub → 모두 LOW SIGNAL
- 제안: **B+C 모드** (Bing News + Google News + Yahoo Finance)
- Naver 검색은 한국어 뉴스/커뮤니티 전용으로 제한 (일 1~2회)
- 실행: MCP 크론 명령어 수정 (`--sources bing google yahoo`)

**1.2 Council 프롬프트 v4.1 — Analyst 편향 명시 (6일째 지연)**
- Analyst 1: "기회비용 인지 — KOSPI +13.7% 상승 중 현금 보유 34일"
  - WTI $90.91 급락 반영 (5.9% 하락 = 글로벌 수요 위축 vs 인플레 완화)
- Analyst 2: "8,000선 저항 리스크 + USD/KRW 1,517 원화 약세"
- Analyst 3: "CB Score 22/100 추세 개선 반영"
- **3개 Analyst 응답 차별화로 HOLD 50% 고정 바이어스 해소**

**1.3 Self_heal.py 감시 루틴 keepalive.sh 통합**
- keepalive.sh가 self_heal.py의 주기적 실행을 감시
- 1시간 이상 로그 미갱신 시 재시작 트리거
- **이번 발견(21일 중단) 재발 방지**

### 🚀 Priority 2 — 중기 (이번주)

**2.1 자가 진단 v2 설계 — 이중/삼중 검증 체계**
- 04:30 교훈(프로세스 생존≠작동) + 08:30 교훈(로그 존재≠실행) 통합
- v2 요구사항: 프로세스 존재 + 로그 mtime + 실제 출력 라인 증분 = 3중 검증
- 각 서비스별 "alive" vs "working" 구분 메트릭 설계

**2.2 SkillOpt (arXiv 2605.23904) — 스킬 진화 PoC**
- 5/25 12:30 최초 식별 → 44시간 경과. 이번주 내 PoC 시작 목표.
- `skills/` 폴더 내 3개 스킬에 `evolution_strategy` YAML frontmatter 파일럿

**2.3 Context 승격 자동화**
- 32시간+ Steven 승인 대기. 자동 승격 기준 도입:
  (1) Brain Sync 3회 연속 동일 후보 → 자동 승격
  (2) 48시간 자동 승격 timeout

---

## 📋 실행 요약 — 08:30 KST

```
🧬 HERMES EVOLUTION CYCLE — 2026-05-26 08:30 KST (7차, Pre-Open T-30min)
============================================
지식흡수: ✅ 새벽 정체 — 0건 신규 논문
  - wiki/: 0건 신규
  - MCP-멀티검색: 🔴🔴 35회 연속 LOW SIGNAL (소스 전환 결정 시점)
  - Brain Sync: 정상 (02:00, 08:00 추정)

실행된 액션:
  ✅ NEXUS ORCHESTRATOR 사이클 정상 가동 확인 (04:32 재시작 ~ 08:31, 20+ 사이클)
  ✅ Swap 361MiB — 4시간 연속 하향 안정화 (385→361MiB, -6.2%)
  ✅ Trinity 6/6 서비스 정상

시스템상태: 
  - Memory 3.3Gi/7.6Gi (43%), Disk 4%, Swap 361MiB 🟡
  - CB Score (Dashboard): 🔴🔴 ?/100 (self_heal 21일 중단)
  - CB Score (Nexus): 🟢 22/100 (프로세스 내부 정상)
  - 모의투자 ₩4,929,810 (포지션 0, 34일차)
  - KOSPI 7,848 / WTI $90.91 🔴(-5.9%) / USD/KRW 1,517🔴
  - Market State: 🟢 PRE-OPEN (T-24min → Tue 09:00 KST 개장)
  - Uptime 1d 14h 55m (5/24 17:40 재부팅 이후)

발견된이슈: ⚠️ 7건
  - [🔴🔴 Self_heal.py] 21일간 중단 — CB Score 대시보드 미기입 (신규 발견)
  - [🔴 WTI] $90.91 — 전주 대비 5.9% 추가 급락 (신규)
  - [🔴 USD/KRW] 1,517 — 원화 약세 심화 (신규)
  - [🟡 MCP] 35회 연속 LOW SIGNAL — 소스 전환 결정 overdue
  - [🟡 모의투자] 34일차 정체 — KOSPI +13.7% 현금 보유 손실
  - [🟡 Council] HOLD 바이어스 6일차 — 프롬프트 재설계 지연
  - [🟡 Swap] 361MiB — 하향 추세지만 300MiB 임계 상회

개선제안: ✅ 8건
  Priority 0 (2건): 🔴🔴 Self_heal 재시작 + 대시보드 CB Score 수동 패치
  Priority 1 (3건): MCP 소스 전환, Council 프롬프트 v4.1, Self_heal 감시 루틴
  Priority 2 (3건): 자가 진단 v2, SkillOpt PoC, Context 자동화
============================================

🔧 08:30 KST 핵심 액션 (Today, 5/26 Tue):
  1. 🔴🔴 Self_heal.py 재시작 또는 dashboard.json CB Score 수동 기입 (T-24min, 개장 전)
  2. 🔴 MCP 멀티검색 소스 전환: Naver+GitHub → Bing+Google+Yahoo
  3. 🟡 Council 프롬프트 v4.1 — WTI $90.91 + USD/KRW 1,517 반영
  4. 🟡 09:00 개장 후 Council 분석 모니터링 → 포지션 진입 결정
  5. 🟡 Swap 361MiB 모니터링 (500MiB 도달 시 재부팅)
```

> 💡 **08:30 KST 핵심 발견: "고장 난 시계도 하루에 두 번은 맞다"**  
> 이번 사이클의 가장 중요한 발견은 **self_heal.py가 21일간 중단되었음에도 불구하고**, 이전 6개 진화 사이클이 모두 이 사실을 놓쳤다는 점입니다. `self_heal.log` 파일은 디스크에 존재했기에 "self_heal 정상"으로 판단했지만, 실제로는 5/5 이후 단 한 줄도 기록되지 않았습니다. 이는 04:30 사이클의 "프로세스 생존 ≠ 작동 중" 발견과 동일한 패턴입니다. **파일 존재 ≠ 프로세스 실행 ≠ 기능 정상 — 이 세 가지를 모두 검증해야 진정한 자가 진단이 가능합니다.**  
> 한편, WTI가 $90.91로 전주 대비 5.9% 급락한 점과 USD/KRW가 1,517로 원화 약세가 심화된 점은 금일 Council 분석에 직접 반영되어야 할 중요한 변수입니다. KOSPI 7,848에서 8,000선 재돌파를 시도하는 화요일, CB Score 미복구 상태에서 Council이 어떤 판단을 내릴지 — 그리고 34일째 현금 보유 중인 모의투자에 드디어 변화가 있을지가 오늘의 핵심 관전 포인트입니다.
