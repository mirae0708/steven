---
created: 2026-06-10
tags: [물류, 클레임, 템플릿]
---

# 클레임 기록 템플릿

> 새 클레임 발생 시 이 템플릿을 복사해서 사용하세요.
> 사용법: `Ctrl+P` → "템플릿: 삽입" → `claim-record`

```
---
claim-id: CLM-{YYYYMMDD}-{SEQ}
type: damage | loss | delay | document | customs | billing
severity: critical | major | minor | informational
status: open | investigating | resolved | closed
date: YYYY-MM-DD
closed: 
customer: 
carrier: 
mode: sea | air | express | truck
route: 
reference: 
cost: 0
recovered: 0
insurance_claimed: false
---

# CLM-{YYYYMMDD}-{SEQ}

## 1. What (무슨 일이?)
**Claim Type:** 
**Description:** 

## 2. Where (어디서?)
**발생 지점:** 
**Process Stage:** 

## 3. When (언제?)
**발생:** 
**보고:** 

## 4. Who (누가?)
**Shipper(고객사):** 
**Consignee(수하인):** 
**Carrier(선사/항공사):** 
**담당자:** 

## 5. Why (왜?) - RCA
**Direct Cause:** 
**Root Cause:** 
**Contributing Factors:** 

## 6. How (어떻게 해결?)
**Resolution:** 
**Cost:** 
**Recovered:** 
**Insurance:** 
**Closed:** 

## 7. Prevention (재발 방지)
**시정 조치:** 
**예방 조치:** 
**SOP Update Needed:** 
```
