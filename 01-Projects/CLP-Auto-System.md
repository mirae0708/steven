# CLP 자동화 시스템 v28

## 개요
MBL(Master B/L)과 HBL(House B/L) PDF를 분석하여 **MANIFEST & CLP 엑셀 템플릿**에 데이터를 자동 입력하는 시스템. 해운 수입(Import) 물류의 CLP 자동 생성 도구.

| 항목 | 내용 |
|:-----|:------|
| **프로젝트명** | CLP 자동화 시스템 |
| **최종 버전** | v28 (릴리즈) |
| **실행파일** | `자동_CLP_입력기_v28.exe` |
| **소스코드** | `clp_automation_v28_release.py` (466줄) |
| **설정파일** | `config.json` (HBL 매핑 데이터) |
| **대상 시스템** | MRCloud ERP — CLP 양식 |
| **대상 사용자** | 미래해운항공 포워딩팀 |

## 프로그램 구조
```
C:/Users/Steven/Desktop/clp/
├── 자동_CLP_입력기_v28.exe    ← 실행 파일 (PyInstaller)
├── config.json                 ← HBL ↔ MBL 매핑 설정
├── MANIFEST & CLP.xlsx         ← 엑셀 템플릿
├── readme_v28.txt              ← 사용 설명서
├── MBL/                        ← Master B/L PDF (분석할 파일 넣는 곳)
├── HBL/                        ← House B/L PDF (분석할 파일 넣는 곳)
├── old/                        ← 구버전 소스
│   ├── clp_automation_v26_dist.py
│   └── clp_automation_v27_auto_folders.py
└── CLP_배포용_v28/             ← 배포 패키지
    ├── 자동_CLP_입력기.exe
    ├── config.json
    ├── MANIFEST & CLP.xlsx
    ├── readme.txt
    ├── HBL/ (빈 폴더)
    └── MBL/ (빈 폴더)
```

## 작동 방식

### 1. MBL 분석 (Master B/L)
- PDF 1페이지에서 MBL 번호, 컨테이너 번호, 중량(KGS), CBM 추출
- 정규식: `CONTAINER NUMBER` + `KGS` + `CBM` 패턴

### 2. HBL 분석 (House B/L)
- PDF 1페이지에서 HBL 번호, 포장수량, 중량, CBM, 선적일 추출
- `SHIPPER B/L NO.` → HBL 번호
- `ON BOARD` 또는 `DATE OF ISSUE` → 선적일

### 3. 매핑 (config.json)
HBL 번호를 MBL 번호에 연결:
```json
"MRN514142": ["WDFCGBA11153011U", "RODEM", "MIRAE NST CO., LTD."]
//             [MBL번호,        MARKING, CONSIGNEE명]
```

### 4. 엑셀 작성
- 날짜 기준 시트 생성: `{M}.{D} MANIFEST` (예: `3.24 MANIFEST`)
- 템플릿 시트에서 "MANIFEST" 키워드로 시트 자동 탐색
- 각 HBL을 엑셀 16행부터 순서대로 입력 (13개 컬럼)

### 5. Remark 자동 생성
- Weight/CBM 불일치 시: `W Mismatch (Sum:500/MBL:480)` (빨간색)
- MBL 파일 누락 시: `MBL File Missing (HDFC26E7248851D)`

## 주요 특징 (v28)

| 기능 | 설명 |
|:-----|:------|
| ✅ **config.json 분리** | HBL 매핑 데이터를 외부 JSON으로 분리, 코드 수정 불필요 |
| ✅ **image_sequence 자동화** | HBL 폴더 PDF 파일명 알파벳순 정렬 |
| ✅ **템플릿 자동 탐색** | "MANIFEST" 키워드 포함 시트 자동 검색 |
| ✅ **날짜 파싱 8패턴** | `24,Mar,2025` / `Mar.24.2025` / `2025-03-24` 등 |
| ✅ **오류 메시지 개선** | 실패 파일명 + 구체적 사유 출력 |
| ✅ **PyInstaller 호환** | hiddenimports 명시, warn 458줄 대응 |

## config.json 구조
```json
{
    "final_mapping": {
        "HBL번호": ["MBL번호", "MARKING", "CONSIGNEE명"],
        ...
    },
    "fixed_values": {
        "forwarder": "(주)미래",
        "warehouse": "백마제2창고",
        "shipper": "판시노",
        "incoterm": "EXW"
    },
    "template_sheet": {
        "keyword": "MANIFEST"
    },
    "image_sequence": {
        "auto_sort": true
    }
}
```

## 엑셀 출력 컬럼
| Col | 항목 | 데이터 |
|:---:|:-----|:-------|
| 1 | No | 순번 |
| 2 | MBL No | Master B/L 번호 |
| 3 | HBL No | House B/L 번호 |
| 4 | Incoterm | EXW (고정) |
| 5 | Consignee | 수하인명 |
| 6 | Marking | 마킹 |
| 7 | PKG | 포장 수량 |
| 8 | Weight (KGS) | 총 중량 |
| 9 | CBM | 총 부피 |
| 10 | Forwarder | (주)미래 |
| 11 | Container No | 컨테이너 번호 |
| 12 | Warehouse | 백마제2창고 |
| 13 | Shipper | 판시노 |
| 14 | Remark | W/CBM 불일치 or MBL Missing |

## 관련 링크
- [[Invoice-Auto-System|미래해운항공 물류 자동화 시스템]]
- [[clp-auto-workflow|CLP 처리 워크플로우]]
