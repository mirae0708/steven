---
title: "물류 시스템 연동 가이드 — ERP 자동화"
created: 2026-05-23
status: approved
reviewed_by: Steven
last_reviewed: 2026-05-23
tags: [context/techstack, logistics, erp, automation]
---

# 물류 시스템 연동 가이드 — ERP 자동화

> 출처: [[01-Projects/Invoice-Auto-System]], [[04_프로젝트/Invoice-Auto-Workflow]], [[03_경제/04_비즈니스_사업분석/00_Index]]
> Members → Context 승격 완료

## 개요
미래해운항공(MIRAE LOGISTICS)의 MRCloud ERP에 인보이스 데이터를 자동으로 입력하는 RPA 자동화 시스템. 해운(SEA), 항공(AIR), 특송(EXPRESS) 세 모드 지원.

## 대상 ERP: MRCloud
- **URL**: http://8.129.105.183:8780/mrcloud/
- **계정**: swlee / heyna889
- **유형**: JSP 기반 iframe 시스템

### 주요 메뉴
| 메뉴 | 코드 | 기능 |
|:-----|:-----|:------|
| Express | EXP1002 | ENTRY 입력 |
| Express | EXP2001 | MBL 관리 |
| Express | EXP3001 | G-EXPRESS |
| Air | AIR1002 | 항공 HBL 입력 |
| Ocean | SEA1002 | 해운 HBL 입력 |
| Account | ACC1001 | ARAP 관리 |
| Account | ACC1102 | SLIP 전표 |
| Account | ACC1202 | BSPL 재무제표 |
| Config | SYS9005 | 고객 정보 관리 |
| Config | SYS9008 | 환율 관리 |

## 인보이스 자동화 3단계

```
[1단계] AI 파싱 → [2단계] SYS9005 고객관리 → [3단계] HBL 입력
```

### 1단계: AI 파싱 (PDF/이미지 → JSON)
- **입력**: 이메일 첨부 PDF/이미지 (SEA/AIR/EXPRESS별 input 폴더)
- **도구**: PyMuPDF + Tesseract OCR + Gemini AI
- **출력**: 30+ 필드 JSON (shipper/consignee/포트/화물/품목)

### 2단계: SYS9005 고객 관리
- 인보이스 shipper/consignee로 기존 고객 검색
- 있음 → Customer Code 재사용
- 없음 → New 버튼 → 모든 필드 자동 입력 (회사명/주소/연락처/Tax ID)

### 3단계: HBL 데이터 입력

#### 해운(SEA1002) 필드 매핑
| ERP 필드 | JSON Key | 설명 |
|:---------|:---------|:------|
| SHIPPER_NAME | `shipper_company` | 송하인 회사명 |
| CONSIGNEE_NAME | `consignee_company` | 수하인 회사명 |
| POL | `pol` | 선적항 (UNLOCODE 5자리) |
| POD | `pod` | 양하항 (UNLOCODE 5자리) |
| POR | `por` | 출발지 |
| DLV/FDS | `dlv` / `fds` | 최종 배송지 |
| INCOTERMS | `incoterms` | FOB/CIF/EXW 등 |
| VVD | `vessel`/`voyage` | 선명 + 항차 |
| PKG_QTY | `pkg_qty` | 총 포장 수량 |
| GROSS_WT | `gross_weight` | 총 중량 (KGS) |
| CBM | `measurement` | 총 부피 |
| HBL_DESC | `description` | 품명/화물 설명 |
| ITEM_LINES | `item_lines[]` | 품목별 상세 (JSON 배열) |

#### 항공(AIR1002) / 특송(EXP1002)
- 포트: `origin`(출발지), `destination`(목적지), `via`(경유지)
- `chargeable_weight`(청구중량) 추가 필드
- 나머지는 해운과 동일 로직

### 더블 OK 시퀀스 (필수)
```
1. "Confirm to create new HBL?" → OK 클릭
2. "Save completed" → OK 클릭
```
이 2단계 완료되어야 한 건 정상 처리. 절대 생략 금지.

## 시스템 구조
```
C:/Users/Steven/Desktop/프로/invoice_auto/
├── main.py                    ← 메인 진입점
├── launcher.py                ← 런처 (환경 체크 + 실행)
├── core/
│   ├── hbl_entry.py           ← HBL 데이터 입력
│   ├── invoice_parser.py      ← 인보이스 파싱
│   ├── customer_manager.py    ← SYS9005 고객 관리
│   ├── item_mapper.py         ← 품목 매핑
│   └── ocr_parser.py          ← OCR 처리
├── config/
│   ├── settings.py            ← 환경 설정
│   ├── user_config.json       ← 사용자 계정
│   └── ui_memory.json         ← UI 학습 데이터
└── utils/
    ├── browser_helper.py      ← Selenium 브라우저 제어
    ├── auth_handler.py        ← ERP 로그인
    └── js_loader.py           ← JavaScript 로더
```

## 3개 모드
| 모드 | 파일 | 입력폴더 | 설명 |
|:-----|:-----|:---------|:------|
| SEA (해운) | `Run_SEA_Watch.bat` | `data/sea input/` | 해운 LCL/FCL 인보이스 |
| AIR (항공) | `Run_AIR_Watch.bat` | `data/air input/` | 항공 화물 인보이스 |
| EXPRESS (특송) | `Run_EXPRESS_Watch.bat` | `data/express input/` | 특송 인보이스 |

## 핵심 운영 규칙 (Master Directive)
1. **하지 말라고 하면 절대 하지 마라**
2. **시키는 것만 제대로 해라**
3. **지정 화면 이외로 이탈 금지**
4. **HBL 저장 후 Double OK 필수**
5. **작업 완료 후 ERP에서 육안 재확인**

## 화면 이탈 금지 규칙
- 작업 중 다른 메뉴/리스트 화면으로 이동 금지
- 모든 작업은 현재 HBL 입력 화면 내에서 해결
- 팝업이 뜨면 즉시 수락

## 관련 문서
- [[../Product/시스템-아키텍처]] — 전체 시스템 아키텍처
- [[../Product/Quote-Tool-연동가이드]] — Freight Quote Tool
- [[../Company/직원용-코딩-아키텍처-가이드]] — 개발 규칙
- [[../../03_경제/04_비즈니스_사업분석/01_AI물류에이전트_SaaS]] — AI 물류 SaaS 사업 계획
- [[../../03_경제/04_비즈니스_사업분석/02_중국물류_자동화]] — 중국 물류 자동화
