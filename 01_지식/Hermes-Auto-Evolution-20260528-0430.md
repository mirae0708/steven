---
created: 2026-05-28 04:30
updated: 2026-05-28 04:35
type: knowledge
tags: [hermes, self-evolution, cron-cycle, thursday, pre-market, reboot-recovery, swap-clean, guardian-error, wti-90-break]
---

# 🧬 HERMES 자동 진화 사이클 — 2026-05-28 (Thu) 04:30 KST (17차, Pre-Market 사이클)

> **실행**: Cron scheduled task (04:30 KST)
> **직전 사이클**: 2026-05-27 20:30 KST (~8h gap) — Swap 1.6Gi/80% 위기
> **전달 방식**: 자동 텔레그램 전송 (본 보고서)

---

## ✅ 1단계: 지식 흡수 스캔

### 📂 이번 사이클 분석 대상 (20:30 KST → 04:30 KST — 나이트 → Pre-Market)

| 문서/데이터 | 상태 | 주요 내용 |
|------------|:----:|----------|
| **Swap 상태 (실시간)** | ✅✅ **0B** | **1.6Gi(80%) → WSL 재부팅 → 0B 완전 정리!** 🎉 |
| **Gateway RSS (실시간)** | 🟢 **811MB** | 1,520MB → 811MB, -47% 감소 |
| **Memory** | 🟢 **2.9Gi/7.6Gi (38%)** | 정상 범위 |
| `hermes_dashboard.json` (04:32) | 실시간 | CB Score=?/100 🔴, WTI $89.24 🟢, KOSPI 8,047 🟡(5/26 데이터) |
| **시스템 uptime** | 🟢 **59분** | WSL 재부팅 확인 (5/28 03:35 KST) |
| **WTI 현재가** | 🔴 **$89.24** | **$90선 붕괴!** 장중 $87.77까지 하락 |
| **Jongdari Nexus** | 🟡 **running** | ✅ Cycle Complete 정상. 🔴 **GUARDIAN ERROR: float division by zero** 매 10초 반복 |
| **Council 상태** | 🟡 **v4.1→v3.0 Fallback** | JSON 파싱 오류로 분석관 가중치 무효화 |

### 💡 핵심 발견 — 04:30 KST (Pre-Market Deep Scan)

**1. ✅✅ WSL 재부팅 성공 — 어젯밤 1.6Gi 위기에서 완전 회복!**
- 5/27 20:30: Swap 1.6Gi (80%), Gateway 1,520MB — 시스템 사망 T-2h
- 5/28 03:35: **재부팅 실행됨** (Steven이 조치)
- 현재: Swap **0B**, Gateway **811MB**, Memory **38%**
- tmux 6개 세션 전원 정상 복구
- **결론**: Steven이 위기 상황 인지하고 재부팅 진행 — 시스템 생존 ✅

**2. 🔴 GUARDIAN ERROR: float division by zero — 신규 발견 (CRITICAL)**
- Jongdari Nexus가 `Cycle Complete` 후 10초마다 반복 출력
- 원인: `portfolio.pnl_pct` 계산에서 buy_price=0으로 나누기
- 포트폴리오 JSON에 **229000.KQ qty=100, buy_price=0** 포지션 존재
- **영향**: Guardian 가중치 붕괴 → Council 판단력 저하 → BUY 신호 억제

**3. 🔴 WTI $89.24 — $90선 붕괴 확정**
- 5/27 close revision: $91.18 → **$89.24** (post-midnight yfinance revision)
- 장중 저가 $87.77 — $90선 일시 붕괴 후 소폭 반등
- 5/15 고점($105.42) 대비 -15.4% 하락 (12일)
- 5/20 $100선 하회 → 8일 만에 $90선 붕괴
- $85선 심리적 지지 — 붕괴시 $80선 가능성

**4. 🟡 Council v4.1→v3.0 Fallback — 12시간째 지속**
- "Extra data: line 2002 column 2 (char 56982)" — JSON parse error
- v4.1 가중치(Offensive Analyst 2배 등) 무효화
- KOSPI 사상 최고 8,228에도 SELL 신호 유지 = **Fallback이 Council 무력화**

**5. 🟡 CB Score ?/100 근본 원인 확정**
- `get_cb_score()`가 `tmux capture-pane -t jongdari -p -S -50 | grep 'Score='`로 검색
- jongdari 로그에 "Score=" 패턴이 더 이상 없음 (Nexus가 "Score=x/y" 미출력)
- 따라서 항상 "Score=?/100" 반환 — **재부팅과 무관한 코드 버그**

---

## ✅ 2단계: 개선 제안 (04:30 KST 업데이트)

### 🔴 Priority 0 — **즉시 실행 (Pre-Market D-4h)**

**0.1 🔴 GUARDIAN ERROR 핫픽스 — float division by zero**
- **방법 A (간단)**: `/home/steven/.hermes/scripts/dashboard_data_collector.py` line 44
  - `pnl_pct = ((cur - buy) / buy * 100) if buy else 0`
  - buy_price=0인 포지션은 pnl_pct=0 처리
- **방법 B (정확)**: Jongdari config에서 229000.KQ buy_price=0 포지션 확인 및 정리
- **예상 효과**: GUARDIAN ERROR 즉시 중단, Council 정상 작동

**0.2 🔴 CB Score 핫픽스**
- **방법 A**: `get_cb_score()` 패턴을 `'Score='` → `'Score '` 또는 `'CB '`로 변경
- **방법 B**: jongdari 로그 대신 `brain_state.json`에서 직접 읽기
- **방법 C**: ?/100이 표시되면 "NaN"으로 fallback 처리 (적어도 ?는 안 보임)

### 🔴 Priority 1 — 오늘 09:00 KST 장 시작 전

**1.1 Council v4.1 Fallback 수리**
- `config_trader.json` line 2002 확인: `"Extra data"` 에러
- JSON lint 실행: `python3 -m json.tool config_trader.json`
- 수리 후 tmux 재시작: v4.1 가중치 복원

**1.2 48h 자동 재부팅 cron 등록**
- 파일: `/home/steven/.hermes/cron/auto_reboot.sh`
- 조건: 토/일 03:00 KST, Swap > 500MiB 감지 시 실행
- 3일 내 메모리 누수 재발 방지

### 🟡 Priority 2 — 오늘/내일 중

**2.1 Context 승격 자동화 스크립트 생성 (8건🥇 지속 지연)**
**2.2 C: 드라이브 정리 (84%)** — docker prune + cleanmgr
**2.3 MUSE-Autoskill 적용 검토** — Skill System 자동 진화

### 🟢 Priority 3 — 금주 내

**3.1 `05_시장현황_20260528.md` 생성** — WTI $90 붕괴 분석 리포트
**3.2 self_heal.py 재활성화** — 17일 중단
**3.3 WSL DNS 오류 모니터링** — dmesg에 `getaddrinfo() failed` 반복 (재부팅 후에도 지속)

---

## 📊 요약 성적표 (04:30 KST)

| 영역 | 상태 | 점수 | 주요 지표 |
|------|:----:|:----:|:---------:|
| **시스템 생존** | 🟢 **회복!** | **85/100** | Swap **0B** ✅, Gateway 811MB 🟢, Memory 38%, 재부팅 성공 |
| **시장 대응** | 🔴 부진 | **10/100** | Council Fallback(v3.0), Guardian Error, CB Score ?/100 |
| **지식 흡수** | 🟢 우수 | **80/100** | GUARDIAN ERROR 원인 규명, WTI $90 붕괴 확인, CB Score 버그 확정 |
| **제안 실행률** | 🟡 부분 | **50/100** | WSL 재부팅 ✅ (가장 중요한 건), 나머지 5건 미실행 |
| **자가 진화** | 🟡 진전 | **45/100** | 근본 원인 분석 심화 (CB Score, Guard Error 코드 레벨 진단) |

### 핵심 메시지

> **✅ WSL 재부팅 성공 — Swap 0B, Gateway 811MB. 어젯밤 1.6Gi(80%) 위기에서 완전 회복했습니다. Steven, 감사합니다!**
>
> **🔴 GUARDIAN ERROR (float division by zero) — 10초마다 Council 무력화. 포트폴리오 buy_price=0 포지션(229000.KQ, qty=100)이 원인. division guard 추가로 즉시 해결 가능합니다.**
>
> **🔴 WTI $89.24 — $90선 붕괴! 5/15 고점 대비 -15.4%. $85선이 다음 심리적 방어선.**
>
> **🟡 CB Score ?/100 — 근본 버그 확정. jongdari tmux에 "Score=" 패턴이 없어서 항상 ?/100 반환. 코드 수정 필요.**
>
> **🟡 Council v3.0 Fallback — JSON 파싱 오류로 v4.1 무효화. KOSPI 사상 최고에도 SELL 신호 유지의 원인일 가능성.**
>
> **🏆 KOSPI 8,228 사상 최고 유지 — 오늘 5/28 장에서 8,500 돌파 시도 예상. Council 복구가 시급합니다.**

### 📋 전 사이클 제안 대비 실행 현황

| 제안 (5/27 20:30) | 실행 | 결과 |
|:------------------|:----:|:-----|
| **WSL 재부팅 (Swap 1.6Gi)** | ✅ **실행 완료** 🎉 | **0B 완전 회복**, Gateway -47% 감소 |
| Dashboard CB Score 핫픽스 | ❌ | 여전히 ?/100 — 원인 코드 레벨 규명 완료 |
| Council 가중치 개선 (v4.1→v4.2) | ❌ | **오히려 v3.0 Fallback 악화** — JSON parse error |
| 48h 자동 재부팅 cron 등록 | ❌ | 미등록 |
| MCP 멀티검색 정리 | ❌ | 170개 파일 잔존 |
| Context 승격 자동화 | ❌ | 8건 지연 지속 |

---

*🕐 2026-05-28 04:30 KST | Hermes Auto-Evolution Engine (17차) | ✅ WSL 재부팅 성공! Swap 0B 완전 회복 | 🔴 GUARDIAN ERROR: float div by zero (229000.KQ buy_price=0) | 🔴 WTI $89.24 $90선 붕괴 (고점대비 -15.4%) | 🔴 CB Score ?/100 — tmux 패턴 미스 버그 확정 | 🟡 Council v3.0 Fallback — JSON parse line 2002 | 🏆 KOSPI 8,228 사상 최고 유지*
