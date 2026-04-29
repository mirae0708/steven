# CLP 처리 워크플로우

## 전체 프로세스

```
[1] MBL/, HBL/ 폴더에 PDF 배치
    ↓ (자동_CLP_입력기_v28.exe 실행)
[2] config.json 로드 (HBL↔MBL 매핑)
    ↓
[3] MBL PDF 분석
├── MBL 번호 추출
├── 컨테이너 번호
└── 중량(KGS) + CBM
    ↓
[4] HBL PDF 분석
├── HBL 번호 추출 (*SHIPPER B/L NO.*)
├── 선적일 파싱 (8가지 패턴)
├── 포장수량(PKG)
├── 총 중량(KGS)
└── 총 부피(CBM)
    ↓
[5] 매핑 + image_sequence 정렬
├── config.json 매핑 테이블 참조
└── HBL 폴더 PDF 파일명 알파벳순 정렬
    ↓
[6] 엑셀 템플릿 작업
├── 시트명: "{M}.{D} MANIFEST"
├── 템플릿: "MANIFEST" 키워드 시트 자동 탐색
├── 16행부터 13개 컬럼 데이터 입력
└── Remark: Weight/CBM 불일치 자동 표시
    ↓
[7] 저장 완료
```

## 날짜 파싱 (8가지 패턴)

| # | 패턴 | 예시 |
|:-:|:-----|:-----|
| 1 | `%d,%b,%Y` | 24,Mar,2025 |
| 2 | `%b.%d.%Y` | Mar.24.2025 |
| 3 | `%d-%b-%Y` | 24-MAR-2025 |
| 4 | `%Y-%m-%d` | 2025-03-24 |
| 5 | `%m/%d/%Y` | 03/24/2025 |
| 6 | `%B %d, %Y` | March 24, 2025 |
| 7 | `%d %B %Y` | 24 March 2025 |
| 8 | `%Y.%m.%d` | 2025.03.24 |

모든 패턴은 파싱 후 +1일 (익일 도착 기준)

## 빌드 방법 (개발자)
```bash
pip install pyinstaller pdfplumber openpyxl pandas pdfminer.six
pyinstaller clp_v28.spec
```

## 주의사항
- 엑셀 파일이 열려 있으면 PermissionError
- config.json JSON 형식 중요 (`,` 위치 확인)
- 마지막 매핑 항목 뒤에는 콤마 금지
- MBL/HBL 폴더가 없으면 자동 생성 후 종료 (재실행 필요)

## config.json 편집 팁
```json
// 새 HBL 추가 (중간에 넣을 때 앞 항목 뒤에 , 확인)
"MRN514143": ["NBOSHIC3546E37K", "NEWMARK", "NEW COMPANY CO., LTD"],
// 마지막 항목: , 없음
"MXS26041602": ["HDFC26E7248851D", "CLAW", "CLAWSUP INC"]
```
