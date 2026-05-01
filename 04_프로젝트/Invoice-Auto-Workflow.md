# 물류 자동화 — 세부 워크플로우

## 전체 프로세스

```
[인보이스 수신]
    ↓ (이메일 자동감시 → input 폴더)
[파일 감시 → 자동 실행]
    ↓
[1단계] SYS9005 고객 관리
├── 기존 고객? → 코드 재사용
└── 신규 고객? → New → 정보 입력 → 저장
    ↓
[2단계] HBL 데이터 입력 (SEA1002 / AIR / EXPRESS)
├── 송하인/수하인 정보
├── 포트 코드 (POL/POD/POR/DLV)
├── 화물 정보 (중량, 부피, PKG)
├── 품명 상세 (Description + Item Lines)
└── 인코텀즈, 선명/항차 등
    ↓
[3단계] 저장 → Double OK
├── 첫 번째 OK: "Confirm to create new HBL?"
└── 두 번째 OK: "Save completed"
    ↓
[완료] → data/processed/로 이동
```

## SYS9005 (고객 정보 관리)

### 검색
- 인보이스의 shipper/consignee 정보로 고객 검색
- 검색 키워드: 회사명 앞 10-15글자
- 있으면 → Customer Code 기억
- 없으면 → New 버튼 → 모든 필드 자동 입력

### 등록 필드
| 필드 | 데이터 출처 |
|:-----|:-----------|
| Company Name | Shipper/Consignee 회사명 |
| Address | 인보이스 주소 |
| Tel/Fax | 연락처 |
| Contact Person | 담당자명 |
| Tax ID / VAT No | 사업자등록번호 |

## HBL 데이터 입력 (SEA1002)

### 주요 필드 매핑
| ERP 필드 | JSON Key | 설명 |
|:---------|:---------|:------|
| SHIPPER_NAME | `shipper_company` | 송하인 회사명 |
| CONSIGNEE_NAME | `consignee_company` | 수하인 회사명 |
| POL | `pol` | 선적항 (UNLOCODE 5자리) |
| POD | `pod` | 양하항 (UNLOCODE 5자리) |
| POR | `por` | 출발지 (UNLOCODE) |
| DLV_FDS | `dlv` / `fds` | 최종 배송지 |
| INCOTERMS | `incoterms` | FOB, CIF, EXW 등 |
| VVD | `vessel` / `voyage` | 선명 + 항차 |
| PKG_QTY | `pkg_qty` | 총 포장 수량 |
| GROSS_WT | `gross_weight` | 총 중량 (KGS) |
| CBM | `measurement` | 총 부피 (CBM) |
| HBL_DESC / NGDS | `description` | 품명/화물 설명 |
| ITEM_LINES | `item_lines[]` | 품목별 상세 (JSON 배열) |

### 항공(AIR) / 특송(EXPRESS)
- 포트 코드 필드: `origin`(출발지), `destination`(목적지), `via`(경유지)
- `chargeable_weight`(청구중량) 추가
- 나머지는 해운과 동일한 로직

## 더블 OK 시퀀스 (필수)
HBL 저장 후 반드시 순서대로 수행:
1. "Confirm to create new H.BL?" → **OK** 클릭
2. "Save completed" → **OK** 클릭
3. 이 2단계가 완료되어야 한 건 정상 처리

## 화면 이탈 금지
- 작업 중 다른 메뉴/리스트 화면으로 이동하지 않음
- 모든 작업은 현재 HBL 입력 화면 내에서 해결
- 팝업이 뜨면 즉시 수락
