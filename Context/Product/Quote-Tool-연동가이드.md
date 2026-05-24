---
title: "Freight Quote Tool — 연동 가이드"
created: 2026-05-23
status: approved
reviewed_by: Steven
last_reviewed: 2026-05-23
tags: [context/product, logistics, quote-tool, freight]
---

# Freight Quote Tool — 연동 가이드

> 출처: freight-quote-tool 스킬 (v9.0)
> Members → Context 승격 완료

## 개요
YOUNGLOG(영로그)의 물류 견적 자동화 시스템. 해상(FCL/LCL) + 항공(3tier) 견적을 SQLite DB 기반으로 자동 계산하고 Excel/PDF/HTML로 출력한다.

## 프로젝트 위치
- **MAIN (v9.0)**: `/mnt/c/Users/Steven/Desktop/quote_tool_new/`
- **LEGACY (v3)**: `/mnt/c/Users/Steven/Desktop/quote_tool/` (참조용)

## 시스템 구조
```
quote_tool_new/
├── src/
│   ├── config.py              — 설정 (YOUNGLOG 정보)
│   ├── constants.py           — IATA, 모드명, 기본값
│   ├── models/                — dataclass (Cargo/Quote 등)
│   ├── calculators/
│   │   ├── air_calculator.py     — 항공 3모드 (LOW/STANDARD/PREMIUM)
│   │   ├── sea_calculator.py     — 해상 FCL 3종 + LCL
│   │   ├── incoterms.py          — INCOTERMS 조건 매핑
│   │   └── korea_trucking_calculator.py
│   ├── database/connector.py  — 28개 DB 함수 (725줄)
│   ├── services/quote_service.py   — 수동수정+DB저장+재계산
│   ├── ui/cli.py              — CLI 인터페이스
│   └── exporters/excel_exporter.py — openpyxl 엑셀 출력
├── web/app.py                 — FastAPI 20+ 엔드포인트
├── data/
│   ├── config.json            — YOUNGLOG Co., Ltd.
│   └── freight_rates.db       — 438건 운임 DB
└── scripts/run.py             — 원클릭 실행
```

## DB 통계 (v9.0)
| 항목 | 수량 |
|------|:----:|
| 국가 | 32 |
| 항구 | 68 |
| 해상 노선 | 35 |
| 운임 레코드 | 438 (freight_rates) |
| 선사 | 19 |
| 스케줄 운임 | 963 |
| 로컬비용 | 237 |

## 지원 모드

### 해상 (SEA)
| 컨테이너 타입 | 설명 |
|:------------|:------|
| PER_20FT | 20ft FCL |
| PER_40FT | 40ft FCL |
| PER_40HC | 40ft High Cube |
| STANDARD | LCL (CBM 기준) |

### 항공 (AIR)
| Tier | 설명 | 소요일 |
|:----|:------|:------:|
| LOW | 저가 | 7~10일 |
| STANDARD | 표준 | 3~7일 |
| PREMIUM | 특급 | 1~3일 |

### 지원 INCOTERMS
- 해상: FOB, CFR, CIF (DB 데이터 있는 것)
- 항공: EXW, FCA, CPT, CIP, DAP, DDP

## 핵심 계산 로직
- 항공: Volumetric Weight = (W×H×D cm × pkgs) ÷ 6,000, 1CBM=167kg
- 해상 FCL: 컨테이너 타입별 ALL_IN 운임 + BAF(12%) + 로컬비용
- 해상 LCL: CBM당 단가 × CBM (최소요금 있음)
- INCOTERMS: FOB=선적지비용만, CFR/CIF=선적지+양하지

## 로컬비용 (2026 기준 예시)
| 국가 | THC(20FT) | CUSTOMS | DOC |
|:----|:---------:|:-------:|:---:|
| 한국(부산) | $180 | $80 | $80 |
| 중국(상하이) | $280 | $150 | $80 |
| 미국(LA) | $455 | $175 | $85 |
| 사우디(담맘) | $220 | $250 | - |

## 실행법
```bash
cd /mnt/c/Users/Steven/Desktop/quote_tool_new
python3 scripts/run.py              # CLI 대화형
python3 -m uvicorn web.app:app --host 0.0.0.0 --port 8000  # Web API
```

## 가상오피스 연동
`work_engine.py sales_quote()`가 freight_rates.db 직접 조회:
```python
sales_quote(name, company, origin_text="", dest_text="",
            container_type="PER_20FT", incoterm="DAP")
```

## 관련 문서
- [[../TechStack/물류-ERP-연동가이드]] — MRCloud ERP 자동화
- [[../Company/직원용-코딩-아키텍처-가이드]] — 개발 규칙
- [[../../03_경제/04_비즈니스_사업분석/01_AI물류에이전트_SaaS]] — AI 물류 SaaS
