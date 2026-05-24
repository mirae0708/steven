---
created: 2026-05-25 08:46 KST
updated: 2026-05-25 08:46 KST
type: troubleshooting
category: system
tags:
  - swap
  - memory
  - gateway
  - metaclaw
  - monitoring
  - pattern
---

# 🔄 Hermes Swap 재축적 패턴 진단 (5/25)

> 마지막 업데이트: 2026-05-25

## 개요

Hermes Gateway (port 8642)에서 발생하는 **Swap 재축적 현상** — WSL 재부팅 직후 0B 수준이었다가 수일~수주에 걸쳐 Swap 사용량이 점진적으로 증가하는 패턴.

## 타임라인

| 날짜 (KST) | Swap 사용량 | Delta | 구분 |
|:-----------|:----------:|:-----:|:-----|
| 5/24 00:45 | **780KiB** | — | ✅ **재부팅 효과 (사실상 0B)** |
| 5/25 02:01 | **780KiB** | 0% | ✅ 유지 |
| 5/25 08:33 | **35MiB** | **~45x 증가** | ⚠️ 재축적 조짐 |
| 5/18~5/22 | **602MiB** (peak) | — | ❌ 재부팅 필요 |

## 관찰된 패턴

1. **초기 (재부팅 후 ~24h)** — Swap 사용량 0~1MiB (정상)
2. **중기 (2~5일)** — 35~100MiB 서서히 증가
3. **말기 (7~14일)** — 300~602MiB까지 축적 → Gateway 응답 지연
4. **해소** — WSL 재부팅으로만 완전 해소. Gateway 단독 재시작으로는 Swap 반환되지 않음.

## 의심 원인

- **MetaClaw 메모리 누수** — 5/23 이전 major leak 확인됨. skills_only 모드로 완화했으나 잔여 누수 가능성.
- **Python MCP 서버** — Zombie 상태 서버 6개(obsidian, googledrive, anythingllm 등)가 Swap에 남아있을 가능성.
- **UVX 캐시** — `uvx` 기반 MCP 서버들의 Python 런타임 캐시 WSL 메모리 상주.

## 모니터링 기준

| Swap 사용량 | 판정 | 액션 |
|:----------:|:-----|:-----|
| 0~1MiB | ✅ 정상 | 관찰 유지 |
| 1~50MiB | 🟡 주의 | 2일마다 추세 확인 |
| 50~100MiB | ⚠️ 경고 | 일일 모니터링 |
| 100~300MiB | 🔴 위험 | Gateway 재시작 고려 |
| 300MiB+ | 🚨 심각 | WSL 재부팅 |

## 관련 문서
- [[MCP-Python-Zombie-이슈-진단]]
- [[Hermes-Auto-Evolution-20260525-0830]]
- `HITL-D` — Hermes Self-Heal 스크립트
