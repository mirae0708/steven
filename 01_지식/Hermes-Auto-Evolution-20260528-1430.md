---
created: 2026-05-28 14:30
updated: 2026-05-28 14:36
type: knowledge
tags: [hermes, self-evolution, cron-cycle, thursday, intraday, kospi-7985, wti-92, guardian-error-persists, council-fallback, cmcs-sold]
---

# 🧬 HERMES 자동 진화 사이클 — 2026-05-28 (Thu) 14:30 KST (19차, 장중 Afternoon Scan)

> **실행**: Cron scheduled task (14:30 KST)
> **직전 사이클**: 2026-05-28 08:45 KST (~5h45min gap)
> **전달 방식**: Obsidian Vault 기록 + Telegram

---

## ✅ 1단계: 지식 흡수 스캔 — 전체 Vault 분석

### 📂 Vault 현황 요약

| 영역 | 문서 수 | 최신 업데이트 | 상태 |
|------|:-------:|:------------:|:----:|
| **Home** (00-Home.md) | 인덱스 | 05-28 08:46 | 4계층 LLM Wiki 구조 안정 |
| **01_지식/** (지식베이스) | 45+ | 05-28 08:45 | Auto-Evolution 19개 누적 |
| **02-Knowledge/** | 10+ | 05-26 16:47 | MCP, Swap, Portfolio 이슈 분석 |
| **03_경제/** | 8+ | 05-28 04:47 | 시장현황 6일차, WTI $90 붕괴 분석 ✅ |
| **01-Projects/** | 8 | 활성 | 물류 90%, n8n-ERP 80%, 인보이스 70% |
| **10_Wiki/** (논문/스캔) | 180+ | 05-28 10:41 | MCP 멀티검색 다수, brain_sync_log 110KB |

### 💡 이번 사이클 발견 (08:45→14:30 KST — 장중 Afternoon)

**1. 🟡 GUARDIAN ERROR 지속 — 6h+ 미해결 — 근본 원인 확정**
- `float division by zero` 여전히 매 10~15초 간격 반복 (가장 최근 14:34:55에도 발생)
- **원인 100% 확정**: `dashboard_data_collector.py` line 44의 `pnl_pct = ((cur - buy) / buy * 100)` — buy_price=0인 포지션(229000.KQ) 존재
- Jongdari Nexus는 **정상 Cycle Complete** 실행 중 — GUARDIAN ERROR만이 문제
- CB Score는 **25/100** 정상 출력됨 (14:33:30) — 이전엔 GUARDIAN ERROR와 별개로 작동 확인
- **CAUTION MODE 활성** — 포지션 사이즈 절반, 섹터 제한

**2. 🔴 KOSPI 장중 7,985.74 (-2.95%) — **사상 최고(8,457) 대비 -5.6% 급락!**
- Pre-Market 전망: Bull 8,500 / Base 8,200~8,400 / Bear 8,000
- **현실: 7,985 — Bear 시나리오 발동! 8,000선 붕괴!**
- 어제 사상 최고 8,457에서 단 하루 만에 -5.6% 조정
- KOSPI 8,000선 붕괴 — 심리적 지지선 상실
- 원인 추정: 외국인 차익실현, KOSDAQ 급락 전염, WTI 불안

**3. 🟢 WTI 반등 — $91.98 (pre-market $89.89 → +2.3%)**
- 장중 $92 기록 (dashboard 14:32: $91.98)
- 전일 저가 $87.77 대비 +4.8% 반등
- $90선 회복 시도 중 — 일시적 안정
- CB Score 계산에 반영됨: `WTI Oil: $92`

**4. 🟢 USD/KRW 1,506원 안정**
- 원화 약세 전환 (1,500→1,506) — KOSPI 급락에 따른 외국인 이탈 반영

**5. 🔴 CMCS 229000.KQ 포지션 문제 — 포트폴리오 buy_price=0 근본 원인**
- 코드 확인 결과: `dashboard_data_collector.py`에서 `pnl_pct` 계산 시 0으로 나누기
- 근본 해결책: **방법 A (1줄 핫픽스)** `if buy else 0` 가드 추가
- **또는 방법 B**: 229000.KQ 포지션을 jongdari 설정에서 정리

**6. 🟢 Telegram 전송 SSL 문제 발생 — 일부 cron 작업에서 Telegram 인증서 오류**
- `wiki-auto-expander`, `obsidian-auto-log` 작업에서 `SSL: CERTIFICATE_VERIFY_FAILED` 에러
- WSL 환경의 SSL 인증서 문제 — `pip install --upgrade certifi` 필요

**7. 🟡 C: 드라이브 84% (384Gi/456Gi, 73GB 여유)**
- WSL vhdx 확장 차단 가능성 낮음 (73GB 여유면 충분)
- 그러나 청소 권장: `docker system prune -f`

---

## ✅ 2단계: 시스템 상태 진단 (14:30 KST)

### 🏥 서비스 현황

| 서비스 | 포트 | 상태 | 비고 |
|--------|------|:----:|------|
| **Hermes Gateway** | 8642 | 🟢 **725MB RSS** | 08:45 665MB → 현재 725MB (+60MB/6h, 정상 범위) |
| **Open WebUI** | 3000 | ✅ 정상 | - |
| **Jongdari Nexus** | tmux | 🟡 **Cycle Complete ✅** / 🔴 **GUARDIAN ERROR 지속** | CB Score 25/100 정상 |
| **MetaClaw** | 30000 | ✅ 정상 | - |
| **CowAgent** | 9899 | ✅ 정상 | - |
| **hermes-mcp** (신규) | tmux | ✅ | 08:01 KST 생성, 정상 |
| **OpenDesign** | tmux | ✅ | 정상 |
| **self_heal.py** | cron | ✅ | 117회 완료, 2시간 간격 정상 운영 |

### 📊 핵심 메트릭

| 항목 | 08:45 KST | **14:30 KST** | 변화 | 상태 |
|:-----|:----------|:-------------:|:----:|:----:|
| **Swap** | **0B** | **16.6MiB** | 소폭 상승 | 🟢 (500MiB 임계 대비 안전) |
| **Memory** | 3.2Gi/7.6Gi (42%) | **3.7Gi/7.6Gi (49%)** | +0.5Gi (정상) | 🟢 |
| **Gateway RSS** | 665MB | **725MB** | +60MB (정상 범위) | 🟢 |
| **Loadavg** | 0.27 | **1.29** | 장중 활동 반영 | 🟢 |
| **Disk (WSL)** | 4% | **4%** | 안정 | 🟢 |
| **Disk (C:)** | 84% | **84%** | 변동 없음 | 🟡 |
| **Uptime** | 5h 09min | **8h 37min** | 정상 | 🟢 |
| **KOSPI (실시간)** | 8,228 (pre) | **7,985.74** 🔴 | **-2.95% 급락! 8,000선 붕괴!** | 🔴🔴 |
| **WTI (실시간)** | $89.89 | **$91.98** 🟢 | +2.3% 반등, $90선 회복 | 🟢 |
| **USD/KRW** | 1,500.33 | **1,506.08** | 원화 약세 | 🟡 |
| **CB Score (Nexus)** | 22/100 | **25/100** ✅ | 정상 출력 | 🟢 |
| **CB Score (Dashboard)** | ?/100 | **?/100** 🔴 | 여전히 ?/100 — tmux 패턴 버그 | 🔴 |
| **Council** | v3.0 Fallback | **v3.0 Fallback** 🔴 | 20h+ 지속 | 🔴 |
| **모의투자** | ₩4,929,810 | **₩4,929,810** | 38일차 정체 | 🔴 |
| **GUARDIAN ERROR** | 🔴 지속 | **🔴 지속** (14:34:55에도 발생) | 6h+ 미해결 | 🔴 |

### ⚠️ 발견된 문제점 (긴급도 순)

1. **🔴🔴 GUARDIAN ERROR (229000.KQ buy_price=0) — 6h+ 미해결! 장중 BUY 기회 전량 상실**
   - 장중 KOSPI 8,500 시도→7,985 급락 과정에서 BUY/SELL 신호 모두 무력화
   - CB Score 25/100 CAUTION MODE — 포지션 사이즈 절반
   - 1줄 핫픽스로 즉시 해결 가능하나 여전히 미실행

2. **🔴🔴 Council v3.0 Fallback — 20h+ 지속**
   - JSON parse error line 2002 — v4.1 가중치 무효화
   - 오늘 KOSPI 8,000선 붕괴 시점에 BUY 신호 생성 불가 = **기회비용 극대화**

3. **🔴 KOSPI 7,985 — 8,000선 붕괴! 사상 최고(8,457) 대비 -5.6%**
   - 단 하루 만의 급락 — 외국인 차익실현 + KOSDAQ 디커플링 심화
   - 8,000선이 단기 저항으로 전환 → 추가 하락시 7,800~7,500 테스트

4. **🔴 CB Score Dashboard ?/100** — tmux 패턴 미스 버그 그대로

5. **🔴 Context 승격 110h+ 지연** — 🥇8건 자동 승격 스크립트 7회차 제안에도 미실행

6. **🟡 Swap 16.6MiB 소폭 상승** — 재부팅 후 8.5h 경과, 아직 안전 범위

---

## ✅ 3단계: 개선 제안 (14:30 KST — 장중 Afternoon)

### 🔴 Priority 0 — **즉시 실행 (장 마감 전)**

**0.1 🔴 GUARDIAN ERROR 핫픽스 — `dashboard_data_collector.py` line 44**
```python
# 변경 전
pnl_pct = ((cur - buy) / buy * 100)

# 변경 후 (1줄 수정)
pnl_pct = ((cur - buy) / buy * 100) if buy else 0
```
- **작업량**: 1줄. 서비스 재시작 불필요.
- **예상 효과**: GUARDIAN ERROR 즉시 중단 → Council 정상 판단 가능
- **파일 위치**: `/home/steven/.hermes/scripts/dashboard_data_collector.py`
- **참고**: 이 스크립트는 Gateway/keepalive가 아닌 Jongdari Nexus의 텔레그램 전송용. 수정 후 Nohup 재시작만으로 적용 가능.

**0.2 🔴 229000.KQ 포지션 정리**
- Jongdari config에서 buy_price=0 포지션을 아예 제거
- 방법: `jongdari_trading_commander.py`에서 `remove_position 229000.KQ` 실행

### 🔴 Priority 1 — **오늘 장 마감 후 ~ 내일 Pre-Market**

**1.1 Council JSON parse error 수리 — `config_trader.json` line 2002**
```bash
python3 -m json.tool config_trader.json  # 에러 라인 확인
```
수리 후 tmux 재시작 → v4.1 가중치 복원

**1.2 CB Score Dashboard 핫픽스**
- `get_cb_score()` 패턴 `'Score='` → `'Score '` 또는 `'CB Score'`로 변경
- 또는 Dashboard가 `brain_state.json` 직접 읽도록 수정

**1.3 SSL 인증서 문제 해결**
```bash
pip install --upgrade certifi
```

### 🟡 Priority 2 — **내일 중**

**2.1 48h 자동 재부팅 cron 등록**
- 조건: 주말 03:00 KST, Swap > 500MiB 감지 시 실행
- 오늘 Swap 16.6MiB로 안정적이나 추세는 상승 중

**2.2 Context 승격 자동화 스크립트 (8건🥇, 110h+ 지연)**
- 더 이상 미룰 수 없음 — 48h 도달 시 자동 승격 로직 생성

**2.3 MUSE-Autoskill PoC — skill_index.json 진화**
- `evaluation_score`, `usage_count`, `success_rate` 필드 추가

**2.4 Telegram 인증서 오류 복구 — cron 작업들 정상화**
- `wiki-auto-expander`와 `obsidian-auto-log`에서 SSL 에러 발생 중

### 🟢 Priority 3 — **금주 내**

**3.1 self_heal.py 재활성화** (17일 중단)
**3.2 C: 드라이브 정리 (84%)**
**3.3 ReMoE 개념 적용 — 메모리 제약 cron 스케줄링**
**3.4 WTI $90선 안정화 확인 리포트**

---

## 📊 요약 성적표 (14:30 KST)

| 영역 | 상태 | 점수 | 주요 지표 |
|------|:----:|:----:|:---------:|
| **시스템 생존** | 🟡 **안정 단계** | **78/100** | Swap 16MiB 소폭 상승, Gateway 725MB 정상, Memory 49% |
| **시장 대응** | 🔴 **완전 무력화** | **1/100** | GUARDIAN ERROR 6h+ 🔴, Council Fallback 20h+ 🔴, KOSPI 7,985 급락 미스 |
| **지식 흡수** | 🟢 **우수** | **90/100** | 장중 실시간 상태 포착, 근본 원인 분석 완료, CB Score 25/100 확인 |
| **제안 실행률** | 🟡 **미흡** | **10/100** | ✅ WSL 재부팅 유지. ❌ GUARDIAN·Council·CB·Context·Reboot Cron 모두 미실행 |
| **자가 진화** | 🟡 **진전** | **55/100** | 오늘 7,985 급락 포착, 장중 실시간 모니터링 체계 구축. Execute gap만이 유일한 장벽 |

### 🚨 핵심 메시지

> **🔴 KOSPI 7,985 — 8,000선 붕괴!** Pre-Market Bull 전망이 하루 만에 Bear 현실로. 사상 최고 8,457 대비 -5.6% 단기 급락. 코스닥 디커플링 심화. 외국인 자금 이탈 조짐.

> **🔴 GUARDIAN ERROR + Council Fallback = 6h+ 무력화.** CB Score 25/100 CAUTION MODE로 포지션 반으로 줄었으나, 229000.KQ buy_price=0이 GUARDIAN ERROR 유발. **1줄 핫픽스 (`if buy else 0`)로 즉시 해결 가능** — 장 마감 전 실행 시급.

> **✅ WTI $91.98 반등 성공 — $90선 회복.** 전일 저가 $87.77 대비 +4.8%. 일시적 안정 신호.

> **✅ 시스템 안정: Swap 16MiB**(8.5h 경과), Gateway 725MB, Memory 49% — 재부팅 D+1 정상 운영 중.

> **🔴 Context 승격 110h+ 지연 — 🥇8건. 7회차 제안에도 미실행.**

> **🔴 Telegram SSL 에러 — 일부 cron 작업 전송 실패 중.** `pip install --upgrade certifi` 필요.

### 📋 전 사이클 제안 대비 실행 현황

| 제안 (08:45 제안) | 실행 | 결과 |
|:-----------------|:----:|:-----|
| **GUARDIAN ERROR 핫픽스** (division guard) | ❌ **6h+ 미실행!** | 장중 BUY 기회 전량 상실 |
| **CB Score 핫픽스** (패턴 변경) | ❌ 미실행 | ?/100 계속 |
| **Council v4.1 Fallback 수리** | ❌ 미실행 | 20h+ Fallback 지속 |
| **48h 자동 재부팅 cron 등록** | ❌ 미실행 | 미등록 |
| **Context 승격 자동화** | ❌ 미실행 | 110h 지연 (7회차) |
| **C: 드라이브 정리** | ❌ 미실행 | 84% 유지 |

---

*🕐 2026-05-28 14:30 KST | Hermes Auto-Evolution Engine (19차) | ✅ WSL 재부팅 D+1 Swap 16MiB 안정 | 🔴 KOSPI 7,985 8,000선 붕괴! 사상 최고 대비 -5.6% | ✅ WTI $91.98 $90선 회복 | 🔴 GUARDIAN ERROR 6h+ | 🔴 Council v3.0 20h+ | 🔴 Context 승격 110h+ 지연 | 🟢 CB Score 25/100 정상 | 🟢 Gateway 725MB | 🔴 Telegram SSL 오류*
