# 미래해운항공 물류 자동화 시스템 (Invoice Auto)

## 개요
MRCloud ERP에 인보이스(PI/PL) 데이터를 자동으로 추출하여 입력하는 **RPA 자동화 시스템**. 해운(SEA), 항공(AIR), 특송(EXPRESS) 세 모드를 지원한다.

| 항목 | 내용 |
|:-----|:------|
| **프로젝트명** | Invoice Auto (미래로지스틱스 통합 자동화) |
| **유형** | RPA + OCR 자동화 |
| **대상** | MRCloud ERP (SYS9005 고객관리, SEA1002/AIR/EXPRESS HBL 입력) |
| **개발환경** | Python 3.12, PyInstaller (Windows exe 빌드) |
| **주요 라이브러리** | Selenium, PyMuPDF, Tesseract OCR, Gemini AI |
| **배포** | Windows 실행기(.bat) → 직원들이 설치 없이 사용 |
| **대상 사용자** | 미래로지스틱스 직원 (한국/중국) |

## 시스템 구조
```
C:/Users/Steven/Desktop/프로/invoice_auto/
├── main.py                      ← 🧠 메인 진입점 (모드 선택)
├── launcher.py                  ← 🚀 런처 (환경 체크 + 실행)
├── build_exe.py                 ← 📦 PyInstaller 빌드
├── offline_installer.py         -- 오프라인 설치 프로그램
├── final_proof.py               -- 최종 검증
├── Master_Directive_MIRAE.md    ← 📋 **절대 지침서** (핵심 운영 규칙)
├── core/                        ← 핵심 비즈니스 로직
│   ├── hbl_entry.py             -- HBL 데이터 입력 (메인 자동화)
│   ├── invoice_parser.py        -- 인보이스 파싱
│   ├── customer_manager.py      -- SYS9005 고객 관리
│   ├── item_mapper.py           -- 품목 매핑
│   └── ocr_parser.py            -- OCR 이미지 처리
├── config/                      -- 설정
│   ├── settings.py              -- 환경 설정
│   ├── logger_config.py         -- 로깅 설정
│   ├── user_config.json         -- 사용자 계정
│   └── ui_memory.json           -- UI 학습 데이터
├── utils/                       -- 유틸리티
│   ├── browser_helper.py        -- Selenium 브라우저 제어
│   ├── auth_handler.py          -- ERP 로그인
│   ├── excel_helper.py          -- 엑셀 처리
│   ├── field_mapper.py          -- 필드 매핑
│   ├── file_handler.py          -- 파일 관리
│   ├── geo_helper.py            -- 지리코드 변환
│   ├── js_loader.py             -- JavaScript 로더
│   └── selenium_utils.py        -- 셀레늄 공통 유틸
├── assets/                      -- JS 삽입 스크립트
├── data/                        -- 작업 데이터
│   ├── air input/               -- 항공 인보이스 입력
│   ├── express input/           -- 특송 인보이스 입력
│   ├── sea input/               -- 해운 인보이스 입력
│   ├── processed/               -- 처리 완료
│   └── FAILED/                  -- 처리 실패
├── docs/
│   ├── USAGE_GUIDE.md           -- 사용자 매뉴얼 (한국어/중국어)
│   └── gemini_prompt.md         -- AI 추출 프롬프트 템플릿
├── dist/                        -- 배포 패키지
├── scripts/                     -- 테스트 스크립트
└── scratch/                     -- 개발/디버깅 스크립트
```

## 작동 방식

### 1. 인보이스 수집
- **해운(SEA)**: 이메일 첨부파일(PDF/이미지) → `data/sea input/`
- **항공(AIR)**: 이메일 첨부파일 → `data/air input/`
- **특송(EXPRESS)**: 이메일 첨부파일 → `data/express input/`

### 2. 데이터 추출
- **OCR**: Tesseract + PyMuPDF로 이미지/PDF 텍스트 추출
- **AI 분석**: Gemini API로 인보이스 → ERP JSON 변환
  - 송하인/수하인 정보, 포트코드, 품명, 중량/부피 등 30+ 필드
  - 품목 상세(item_lines)까지 JSON 배열로 추출

### 3. ERP 자동 입력
```
1. ERP 로그인 (저장된 계정 자동)
2. SYS9005 → 고객 정보 관리 (기존 코드 재사용 or 신규 등록)
3. SEA1002/AIR/EXPRESS → HBL 데이터 입력
4. 저장 → Double OK (Confirm + Save)
5. 완료 후 다음 인보이스 반복
```

## 3개 모드

| 모드 | 파일 | 입력폴더 | 설명 |
|:-----|:-----|:---------|:------|
| **SEA (해운)** | `Run_SEA_Watch.bat` | `data/sea input/` | 해운 LCL/FCL 인보이스 |
| **AIR (항공)** | `Run_AIR_Watch.bat` | `data/air input/` | 항공 화물 인보이스 |
| **EXPRESS (특송)** | `Run_EXPRESS_Watch.bat` | `data/express input/` | 특송(택배) 인보이스 |

## 핵심 규칙 (Master Directive)
- **하지 말라고 하면 절대 하지 마라**
- **시키는 것만 제대로 해라**
- **지정 화면 이외로 이탈 금지**
- **HBL 저장 후 Double OK** (Confirm → Save → 2번 확인)
- **작업 완료 후 ERP에서 육안 재확인**

## 관련 문서 in Vault
- [[Detailed-Workflow|세부 워크플로우]]
- [[ERP-Field-Mapping|ERP 필드 매핑 템플릿]]
- [[Invoice-AI-Extraction|AI 인보이스 추출 프롬프트]]

> **원본 위치**: `C:\Users\Steven\Desktop\프로\invoice_auto\`
> **최종 업데이트**: 2026-04-13
