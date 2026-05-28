---
created: 2026-05-29 06:30
updated: 2026-05-29 06:35
type: evolution-cycle
tags: [hermes, self-evolution, cron-cycle, friday, pre-market, swap-decreasing]
---

# 🧬 HERMES 자동 진화 사이클 — 2026-05-29 (Fri) 06:30 KST (19차, Pre-Market)

> **실행**: Cron scheduled task (hermes-auto-evolution, 06:30 KST)
> **직전 사이클**: 2026-05-29 04:30 KST (~2h gap)
> **직전 보고서**: meta_rules.json 변환 + Session DB 복구 완료. GUARDIAN ERROR 72h+ 미해결.

---

## ✅ 1단계: 지식 흡수 스캔

### 📂 핵심 발견 요약

| 항목 | 상태 | 상세 |
|------|:----:|------|
| **Uptime** | 🟢 **11h 58min** | 5/28 18:08 재부팅 이후 ~12h 경과 |
| **Memory** | 🟢 **3.2Gi/7.6Gi (42%)** | 안정적 유지 |
| **Swap** | 🟢 **906MiB/2.0Gi (45%)** | ✅ **감소!** (04:30 1.0Gi→06:30 906MiB, -94MiB) |
| **Loadavg** | 🟢 **0.78** | 저부하 정상 |
| **Disk (WSL)** | 🟢 **4% 사용** | 921Gi 여유 |
| **Disk (C:)** | 🔴 **87%** (393Gi/456Gi, 64Gi 여유) | 전일 86%→87% — 계속 악화 |
| **Gateway** | 🔴 **응답 없음** (port 8642) | 이전 사이클에서도 down |
| **WebUI** | 🟢 **200 OK** | 정상 |
| **Trinity 서비스** | 🟡 **CowAgent 303**, MetaClaw/open-design 404 | 포트 다름 (8001→30000 변화) |
| **tmux 세션** | ✅ **6개** | hermes, hermes-mcp, metaclaw, jongdari, cowagent, opendesign |
| **Agent DB** | 🟢 **복구 완료** | 어제 02:33 VACUUM 이후 "Session DB creation failed" 없음 |
| **CB Score** | 🔴 **?/100** | 여전히 미복구 — get_cb_score() 의존성 |
| **GUARDIAN ERROR** | 🔴 **?h+** | 미확인 (프로세스 없음) |
| **Memory 꽉 참** | 🔴 **2,200/2,200 chars** | 5일 이상 꽉 참 |

### 💡 신규 인사이트

**1. ✅ Swap 906MiB — 감소세! 전 사이클 대비 개선**
- 04:30 KST: **1.0Gi** → 06:30 KST: **906MiB** (-94MiB, -9.2%)
- 이는 재부팅 후 12h 시점에도 Swap이 줄어드는 **처음 관찰되는 패턴**
- 원인 추정: Gateway(8642)가 다운되면서 메모리 500MB+ 해제
- ⚠️ 하지만 이는 Gateway 다운이 swap을 "가린" 것일 뿐, Gateway 재시작 시 다시 증가할 가능성 높음

**2. 🔴 Gateway(8642) 다운 — 재시작 필요**
- 04:30 보고서에서도 down 상태 지속
- waitress 서버인데 crash 후 자동 재시작 안 됨
- Gateway 다운 = 텔레그램 알림/명령어 미처리 + Council 판단 미전달

**3. 🔴 C: 드라이브 87% — 전일 86%→87%로 1%p 증가**
- 64Gi 여유 — 점진적 악화 지속
- WSL vhdx 자동 확장 + temp 파일 누적

**4. 🔴 Context 승격 120h+ 지연 — 5일차 진입**
- 12개 후보가 5/24 이후 승격 없음
- Memory 꽉 찬 상태와 연동 — 새로운 정보 저장/승격 불가

---

## 2단계: 개선 제안

### 🥇 P0 — 즉시 실행 (오늘 장 시작 전)

| # | 작업 | 문제 | 해결책 |
|:-:|:-----|:-----|:--------|
| 1 | **Gateway(8642) 재시작** | 텔레그램 연동 두절, Council 판단 미전달 | `tmux send-keys -t hermes 'hermes gateway run --replace' Enter` |
| 2 | **48h 자동 재부팅 cron 등록** | Swap 906MiB → 2-3일 후 1.6Gi 위기 재발 패턴 | `/etc/cron.d/hermes_auto_reboot` 또는 `sudo crontab`에 48h reboot 등록 |

### 🥈 P1 — 금주 해결

| # | 작업 | 문제 | 해결책 |
|:-:|:-----|:-----|:--------|
| 3 | **CB Score 핫픽스** | `get_cb_score()`가 `tmux capture-pane -t jongdari`에 의존 → 재부팅 후 항상 ?/100 | `dashboard_data_collector.py` L72-74: `nexus_live_log.txt`에서 `Score=` regex 검색으로 변경 |
| 4 | **Memory 정리** | 2,200/2,200 chars 꽉 참 → 5일간 새 정보 저장 불가 | `hermes_memory.db`에서 오래된 항목 정리 (30일 이상) 또는 `hermes memory clear` |
| 5 | **C: 드라이브 정리** | 87% (64Gi 여유) 계속 악화 | `docker system prune -f`, WSL `diskpart compact vhdx`, `temp/*` 정리 |

### 🟢 P2 — 차주

| # | 작업 | 설명 |
|:-:|:-----|:------|
| 6 | **Context 승격 자동화 스크립트** | 48h 이상 대기 건 자동 승격 + 텔레그램 알림 |
| 7 | **Memory DB 스키마 최적화** | 2,200 chars 제한 해소 또는 rolling window 도입 |
| 8 | **self_heal.py 재활성화** | 5/18 이후 중단 — 시스템 자기 회복력 복원 |

---

### 🔍 2시간 차이 분석 (04:30→06:30)

| 지표 | 04:30 KST | **06:30 KST** | 변화 |
|:-----|:---------:|:------------:|:----:|
| Swap | 1.0Gi | **906MiB** | ✅ -94MiB |
| Memory | 3.1Gi | 3.2Gi | 동일 |
| C: Disk | 86% (65GB) | **87% (64GB)** | 🔴 -1GB |
| Loadavg | 1.29 | **0.78** | 🟢 안정 |
| Gateway | down | **down** | 동일 |
| Jongdari tmux | ✅ | ✅ | 유지 |

---

## ⚠️ 미해결 체크리스트

| # | 작업 | 긴급도 | 지속일 | 상태 |
|:-:|:-----|:-----:|:-----:|:----:|
| 1 | Gateway(8642) 재시작 | 🔴🔴 | 12h | ❌ 미해결 |
| 2 | 48h 자동 재부팅 cron 등록 | 🔴🔴 | 4일 | ❌ 미해결 |
| 3 | CB Score ?/100 핫픽스 | 🔴 | 5일 | ❌ 미해결 |
| 4 | GUARDIAN ERROR 핫픽스 | 🔴 | 4일 | ❌ 미해결 (프로세스 없음) |
| 5 | Memory 2,200/2,200 chars 정리 | 🟡 | 5일 | ❌ 미해결 |
| 6 | C: 드라이브 87% 정리 | 🟡 | 4일 | ❌ 미해결 |
| 7 | Context 승격 120h+ | 🟡 | 5일 | ❌ 미해결 |

---

> **핵심 메시지**: Swap 906MiB로 감소했지만 Gateway(8642) 다운이 원인일 가능성 높음. Gateway 재시작이 최우선 과제. C: 드라이브 87%로 점진적 악화 지속 — 90% 도달 전 조치 필요.
