---
created: 2026-05-26 12:45 KST
updated: 2026-05-26 12:45 KST
type: system-analysis
category: hermes-architecture
tags:
  - auto-evolution
  - propose-execute-gap
  - council
  - governance
  - self-improvement
  - systemic-pattern
---

# 🔄 Hermes Auto-Evolution: 제안-실행 격차 (Propose-Execute Gap) 진단

> 최종 업데이트: 2026-05-26 12:45 KST

## 개요

Hermes Auto-Evolution 시스템이 지속적으로 개선 제안을 생성하지만, **실제 실행으로 이어지지 못하는 구조적 격차(Propose-Execute Gap)** 가 5/21~5/26 기간 동안 명확히 드러남.

## 증상

| 지표 | 값 | 기간 |
|:-----|:---|:-----|
| Council HOLD 바이어스 | KOSPI **8,085**에서도 Analyst 전원 HOLD | 7일차 (5/20→5/26) |
| Council 프롬프트 v4.1 제안 | 최초 제안 후 실행 0회 | 5일차 |
| Context 승격 제안 | **8건 🥇** 승격 대기 | **44h+** (5/25 00:27 기준) |
| 제안 자동화 반영 | SkillOpt/QGP PoC 제안 후 48h 경과 | 진행 없음 |
| 모의투자 기회비용 | **₩843K** 추정 (KOSPI +17.1% 상승에도 현금 보유) | 34일차 |

## 근본 원인 분석

### 1. 의사결정 체인의 단절
- **Auto-Evolution** → 제안 생성 ✅ (매 사이클 2~9건 제안)
- **Brain Sync** → Context 승격 제안 ✅ (8건🥇 식별)
- **실행 권한** → Steven 승인 필요 ❌ (자동화된 fallback 부재)
- **결과**: 제안은 Vault에 기록되지만 실행되지 않음

### 2. Council 구조의 편향 고착
- Analyst 3명 모두 DEFENSIVE 프롬프트로 **동일 편향** 공유
- KOSPI 8,000(+17.1% from low)에도 Analyst 전원 HOLD(50%)
- CB Score 22/100 정상이나 Council 프롬프트는 5/21 이후 미변경
- **다양화 없는 Council = 단일 의사결정자보다 못함**

### 3. 자동 실행 트리거 부재
| 조건 | 자동 실행? | 현재 상태 |
|:-----|:----------:|:----------|
| Brain Sync 3회 연속 동일 제안 | ❌ | 수동 대기 |
| 48h timeout 경과 | ❌ | Steven 승인 필요 |
| KOSPI 8,000 돌파 시 Council 재설정 | ❌ | 미구현 |
| CB Score 3일 연속 정상 시 Council 전환 | ❌ | 미구현 |

## 제안된 해결책

### 🥇 Immediate (Today~This Week)

#### 1. Council 프롬프트 다양화 (v4.1)
Analyst 3인을 서로 다른 편향으로 재설계:
- **Analyst 1 (Offensive/공격형)**: KOSPI 8,000 돌파 모멘텀 반영, 25% 진입 검토
- **Analyst 2 (Defensive/방어형)**: Swap 441MiB, RSI 70+ 과매수, WTI 약세 리스크 반영
- **Analyst 3 (Balanced/균형형)**: 모멘텀 긍정 + 리스크 존재, 15% 제한적 진입

#### 2. Context 자동 승격 기준 도입
```
Brain Sync 3회 연속 동일 후보 추천 → 자동 승격
48h timeout (5/25 00:27 기준, 5/27 00:27 적용) → 자동 승격
```

### 🥈 Short-term (This Week~Next Week)

#### 3. 자동 실행 트리거 시스템
- KOSPI 이정표 도달 시 Council 자동 리밸런싱
- CB Score 안정 기간에 따른 포트폴리오 모드 전환
- Auto-Evolution 제안 중 Priority 1에 한해 24h timeout 자동 실행

#### 4. 제안→실행 체인 단축
- Auto-Evolution 사이클 말미에 "오늘 실행 가능한 액션 1건" 강제 생성
- 실행 가능한 액션은 terminal 명령어를 포함한 구체적 형식으로 생성
- cron 작업에 "제안 검토 후 실행" 사이클 추가

### 🥉 Mid-term (Next Sprint)

#### 5. FORGE + DecentMem 메모리 진화
- Brain Sync → GraphRAG 메모리 저장 파이프라인
- 배틀루프 사이클 로그를 메모리에 저장하여 패턴 학습
- 메모리 기반 의사결정 히스토리 축적으로 Council 편향 완화

## 핵심 교훈

> **Auto-Evolution이 완전한 자기 진화가 되려면 제안(Propose)과 실행(Execute) 사이의 간격을 메우는 자동화된 거버넌스 체계가 필요하다.** 제안만 100번 하는 시스템은 관찰자(Observer)일 뿐, 진화 시스템(Evolving System)이 아니다.

## 타임라인

| 일자 (KST) | 이벤트 | 제안-실행 상태 |
|:-----------|:-------|:--------------|
| 5/21 | Council HOLD 바이어스 최초 식별 | 제안만 ✅ |
| 5/22 | Council 프롬프트 v4.1 최초 제안 | 제안만 ✅ |
| 5/25 00:27 | Context 승격 8건🥇 제안 | 44h+ 미실행 |
| 5/25 08:33 | Swap 재축적 패턴 진단 문서 생성 | ✅ 실행됨 |
| 5/26 02:30 | CB Score 결함 수리 (self_heal.py fallback) | ✅ 실행됨 |
| 5/26 10:30 | Council v4.1 재제안 (5일차) | 제안만 ✅ |
| 5/26 12:45 | Propose-Execute Gap 메타 분석 🔍 | **NOW → 이 문서** |

## 관련 문서
- [[Hermes-Auto-Evolution-20260526-0830]]
- [[Hermes-Auto-Evolution-20260526-1030]]
- [[Hermes-Auto-Evolution-20260526-1230]]
- [[Swap-재축적-패턴-진단]]
- [[자율형-에이전트-로드맵]]
