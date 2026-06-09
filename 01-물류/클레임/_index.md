---
created: 2026-06-10
updated: 2026-06-10
tags: [물류, 클레임, 인덱스]
---

# 📋 물류 클레임 관리

> 모든 물류 클레임을 체계적으로 기록하고 분석합니다.
> **클레임 = 학습 기회** — 재발 방지가 최우선 목표입니다.

## 클레임 유형

| 유형 | 설명 |
|------|------|
| 🔴 **Damage** | 파손/손상 |
| 🟠 **Loss** | 분실/망실 |
| 🟡 **Delay** | 지연 |
| 🔵 **Document** | 서류 오류 |
| 🟣 **Customs** | 통관 클레임 |
| ⚪ **Billing** | 요금/정산 |

## 클레임 현황 (Dataview)

```dataview
TABLE 
  type as "유형",
  severity as "등급",
  status as "상태",
  cost as "비용($)",
  customer as "고객사",
  carrier as "선사"
FROM "01-물류/클레임"
WHERE type
SORT file.ctime DESC
```

## 주간/월간 분석 리포트

```dataview
TABLE 
  file.name as "리포트명",
  file.mday as "수정일"
FROM "01-물류/클레임/분석"
SORT file.ctime DESC
```

## 물류 지식 연결

> 클레임은 각 운송 모드/업무 프로세스에서 발생할 수 있습니다.

- [[01-물류/해상운송|🚢 해상운송]] — Ocean Freight 클레임 (Loss/Damage/Delay)
- [[01-물류/항공운송|✈️ 항공운송]] — Air Freight 클레임
- [[01-물류/특송|📦 특송(CXR)]] — Express 클레임
- [[01-물류/포워딩-프로세스|📋 포워딩 업무 흐름도]] — 프로세스별 위험 포인트
- [[01-물류/서류-가이드|📄 서류 가이드]] — Document 오류 방지
- [[01-물류/통관|🛃 통관]] — Customs 클레임 관련
- [[01-물류/_index|🌐 물류 지식 허브]]

## 빠른 링크

- 📝 [[01-물류/클레임/템플릿/claim-record|클레임 기록 템플릿]]
- 📊 [[01-물류/클레임/분석/월간-클레임-리포트|월간 리포트]]
- 📖 [[01-물류/클레임/참고/보험-청구-프로세스|보험 청구 프로세스]]
- 📖 [[01-물류/클레임/참고/클레임-방지-SOP|클레임 방지 SOP]]
