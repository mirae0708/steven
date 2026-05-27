# GUARDIAN ERROR 해결 가이드

> **문제**: Jongdari Nexus에서 `GUARDIAN ERROR: float division by zero`가 매 10초마다 반복 출력
> **발견일**: 2026-05-28 04:30 KST
> **상태**: 🔴 미해결 (핫픽스 필요)

---

## 🔍 증상

```
04:42:54 | Nexus | INFO | GUARDIAN ERROR: float division by zero
04:43:04 | Nexus | INFO | GUARDIAN ERROR: float division by zero
...
```

- 10초 간격으로 무한 반복
- `Cycle Complete` 이후에도 지속
- Council 판단력 저하 (Guardian 가중치 붕괴)
- BUY 신호 억제 가능성

## 🧬 근본 원인

1. 포트폴리오에 **229000.KQ (qty=100, buy_price=0)** 포지션 존재
2. `portfolio.pnl_pct` 계산에서 `buy_price=0`으로 나누기 수행
3. `pnl_pct = (cur - buy) / buy * 100` → `/ by zero` → `float division by zero`

## 🛠️ 해결 방법

### 방법 A: division guard 추가 (간단, 즉시)
**파일**: `/home/steven/.hermes/scripts/dashboard_data_collector.py` (line ~44)

```python
# 변경 전
pnl_pct = ((cur - buy) / buy * 100)

# 변경 후
pnl_pct = ((cur - buy) / buy * 100) if buy else 0
```

**예상 효과**: GUARDIAN ERROR 즉시 중단, Council 정상 작동

### 방법 B: 포트폴리오 정리 (정확)
Jongdari 설정 파일에서 229000.KQ 포지션 확인 후 buy_price 설정 또는 포지션 정리

## 🔗 관련 문서
- [[Hermes-Auto-Evolution-20260528-0430]]
- [[AI-Council]]
- [[Jongdari-트레이딩-시스템]]

---

*최종 업데이트: 2026-05-28 04:45 KST*
