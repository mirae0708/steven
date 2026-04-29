---
created: 2026-04-29 15:56
updated: 2026-04-29 15:56
tags: [지식베이스, 아키텍처, 가이드, 팀공유]
---

# 🏗️ Hermes Git 지식 베이스 — 전체 시스템 아키텍처 가이드

> **목적**: 모든 Git 저장소에서 추출한 핵심 지식 통합. 신규 팀원 온보딩 및 시스템 이해를 위한 마스터 문서

---

## 🎯 1. 3대 핵심 시스템 개요

| 시스템 | 목적 | 진입점 | 핵심 기술 |
|--------|------|--------|----------|
| **📈 종다리 트레이딩** | AI 기반 모의주식 자동매매 | `nexus_orchestrator.py` | Python, yfinance, Gemini AI |
| **📦 Invoice Auto** | 해운물류 인보이스 ERP 자동입력 | `launcher.py` / `main.py` | Selenium, DeepSeek AI, OCR |
| **📋 CLP Auto v28** | HBL/MBL PDF→엑셀 CLP 자동생성 | `clp_automation_v28_release.py` | pdfplumber, openpyxl |

**🏗️ Hermes Agent** — 위 3개 시스템을 통합 지휘하는 AI 오케스트레이터

---

## 📈 2. 종다리 트레이딩 시스템 (Jongdari)

### 2.1 전체 구조

```
main.py / nexus_orchestrator.py
  └─ NexusOrchestrator (중앙 지휘소 — 840줄, 7개 모드)
       ├─ live     → 실시간 배틀루프 (tmux jongdari)
       ├─ daily    → 일간 분석 리포트
       ├─ scan     → 시장 스캔 (KRX KOSDAQ 중소형)
       ├─ sector   → 섹터 분석
       ├─ portfolio→ 포트폴리오 현황
       ├─ backtest → 백테스팅
       └─ analyze  → 단일 종목 심층 분석
```

### 2.2 핵심 아키텍처 패턴

**E** — **Expert 계층 (Template Method Pattern)**
| 파일 | 역할 |
|------|------|
| `lib/base_expert.py` (490줄) | 3가지 Expert 템플릿: Quantitative / Comprehensive / AIEnhanced |
| `lib/expert_core.py` (217줄) | 11대 퀀트 지표 엔진 |
| `lib/advanced_expert.py` (363줄) | 고급 분석: 지표40%+캔들20%+MTF25%+레거시15% |

**A** — **AI Council (3명 다수결)**
| 역할 | 분석 내용 | 신호 변환 |
|------|---------|----------|
| 📊 분석관 | 기술적 분석 | STRONG_BUY→0.9, BUY→0.7, HOLD→0.5, SELL→0.3 |
| 🔍 조사관 | 뉴스/모멘텀 | 뉴스언급→0.75, KOSPI 3일>2%→0.65 |
| 📉 리스크관 | CB+포트폴리오 | EMERGENCY→0.9, NORMAL+score≥80→0.8 |

→ **결정**: BUY 2표 이상 + 신뢰도 ≥0.5 → 매수 실행

**C** — **Circuit Breaker (3레이어)**
| 상태 | 조건 | 조치 |
|------|------|------|
| NORMAL | 정상 | 정상 매매 |
| CAUTION | KOSPI 20일선 이탈/변동성↑ | 포지션 축소 |
| DEFENSIVE | 유가>$100/환율>₩1,450 | 방어 모드 |
| EMERGENCY | 극단 위험 | 전면 중단 |

**K** — **Risk Manager** (lib/risk_manager.py)
- Kelly Criterion (25% cap) + ATR 손절/익절
- Trailing Stop + Position Sizing + VaR
- 포트폴리오 집중도 관리

**S** — **Self-Healing** (lib/self_healing.py)
- 에러 발생 시: 백업 생성 → Gemini AI 분석 → 패치 생성 → Telegram 승인 → 자동 적용

### 2.3 주요 설정

| 파일 | 역할 |
|------|------|
| `.env` | 실제 API 키 (Kiwoom, Telegram, Gemini) |
| `99_System_Management/config_trader.json` | 트레이딩 파라미터 |
| `lib/config.py` | YAML/JSON/.env 통합 싱글톤 |

**모의투자 설정**: 초기자본 5,000,000원 / 최대포지션 10% / 손절 -10% / 익절 +15%

### 2.4 데이터 흐름

```
KRX KOSDAQ 스캔 → Kiwoom/yfinance 데이터 → Technical Analysis
  → AI Council 심의 → Risk Manager 검증 → AutoTrader 실행 → Telegram 알림
```

---

## 📦 3. Invoice Auto (미래해운항공 인보이스 자동입력)

### 3.1 전체 구조

```
launcher.py (메인 실행기)
  └─ 싱글 인스턴스 (.launcher.lock)
  └─ Watch 모드: 파일 감지 → 자동 처리 → 재감시
  └─ 3모드: SEA / AIR / EXPRESS
  └─ 실행 배치: Run_SEA_Watch.bat / Run_AIR_Watch.bat / Run_EXPRESS_Watch.bat

main.py (워크플로우 엔진)
  └─ process_invoice(pdf_path, mode) — 3단계 파이프라인
```

### 3.2 3단계 워크플로우

```
[1단계] InvoiceParser.parse()
  └─ AI (DeepSeek / Zhipu GLM) → JSON 구조화
  └─ 33개 ERP 필드 추출 + 환율 로직 (기준+5원, 0.5 올림/버림)

[2단계] CustomerManager.ensure_customer()
  └─ SYS9005 화면 검색 → 기존코드 재사용 / 신규 생성
  └─ 충돌 시 12회 재귀 재시도

[3단계] HBLEntry (입력→저장)
  └─ JS 주입 (field_mapper.js + hbl_entry*.js) → 화면 자동 입력
  └─ Double OK Sequence: 저장→Confirm→Save완료 확인
  └─ 품질 검증: SAMPLE/N/A 제외, 중복제거, 최대20건
```

### 3.3 모드별 차이

| 항목 | SEA | AIR | EXPRESS |
|------|-----|-----|---------|
| 화면 ID | SEA1002 | AIR1002 | EXP1002 |
| 품명입력 | 1차 저장 전 | 1차 저장 전 | 1차 저장 후 |
| 항구 기본값 | - | - | POL=SZX, VIA=HKG, POD=SEL |

### 3.4 기술 스택
- **브라우저**: `undetected_chromedriver` + Selenium
- **AI**: DeepSeek API + Zhipu GLM-4.7-Flash
- **OCR**: Tesseract (백업), PyMuPDF
- **JS 주입**: assets/ 폴더 → Selenium execute_script

---

## 📋 4. CLP Auto v28

### 4.1 구조 (단일 스크립트, 466줄)

```
clp_automation_v28_release.py
  ├─ load_config()       — config.json 로드
  ├─ parse_hbl_date()    — 8가지 날짜 형식 인식
  ├─ find_template_sheet() — "MANIFEST" 시트 탐색
  ├─ build_image_sequence_from_house() — HBL 번호 추출→정렬
  └─ run_dist_automation_v28() — 메인 실행
```

### 4.2 실행 플로우

```
config.json 로드
  → MBL/HBL PDF 폴더 확인
  → Master BL 분석 (MBL번호, 컨테이너, 중량, CBM)
  → House BL 분석 (HBL번호, 선적일, 화물정보)
  → config.json final_mapping 매칭
  → 엑셀 템플릿 복사 → 데이터 채움 (16행부터, 13개 컬럼)
  → Weight/CBM 불일치 시 빨간 폰트 경고
```

### 4.3 기술 스택
- **PDF**: pdfplumber + 정규식 기반 파싱
- **엑셀**: openpyxl
- **빌드**: PyInstaller (단일 exe 배포)

---

## 🧠 5. Hermes Agent 시스템

### 5.1 부팅 체인

```
Windows 로그인
  └─ Task Scheduler → start-hermes-wsl.bat
       └─ WSL 부팅 → .bashrc 실행
            ├─ tmux new-session -d -s hermes "hermes"  ← Agent 본체
            └─ cron @reboot → keepalive.sh           ← 생존 감시
```

### 5.2 주요 컴포넌트

| 컴포넌트 | 포트/ID | 역할 |
|---------|---------|------|
| Hermes Agent | tmux `hermes` | AI 어시스턴트 (deepseek-chat) |
| Hermes Gateway | port 8642 | OpenAI 호환 API 서버 |
| Open WebUI | port 3000 | 웹 채팅 인터페이스 |
| Jongdari 배틀루프 | tmux `jongdari` | 실시간 모의투자 |
| Brain Sync | 매시 30분 cron | Wiki→Agent 지식 동기화 |

### 5.3 자기발전 시스템

**Brain Sync 엔진 (hermes_brain_sync.py, 238줄)**
```
1. MD5 변경 감지 → 7개 Watch 디렉토리 스캔
2. Wiki 전체 읽기 → 종목/섹터/거시경제/Raw 수집
3. merge_into_hermes() → brain_state.json 저장
4. 종목↔섹터 관계 자동 추출
```

### 5.4 크론 스케줄

| 시간 | 작업 |
|:----|:-----|
| @reboot | keepalive.sh (Hermes 생존 감시) |
| 매시 30분 | brain_sync.py (Wiki 동기화) |
| 매시 00분 | 자기 진단 (에러 패턴 체크) |
| 매 30분 | 배틀루프 생존 확인 + 복구 |
| 평일 08:00 | 장전 점검 + 배틀루프 시작 |
| 평일 08:05 | 증시 뉴스 수집 |
| 평일 08:10 | 시장 브리핑 |
| 매일 12:00 | 장중 리포트 |
| 매일 16:00 | Daily Log 생성 |
| 목요일 16:30 | FOMC 주간 리뷰 |

---

## 🗂️ 6. Obsidian Wiki Vault 구조

**루트**: `C:\Users\Steven\Desktop\wiki\team-wiki-vault\` (Git 자동 동기화 5분간격)

### 6.1 디렉토리 구성

| 디렉토리 | 용도 |
|---------|------|
| `10_Wiki/Stocks/` | 개별 종목 심층 분석 (삼성부광, 에이치엘사이언스 등) |
| `10_Wiki/Sectors/` | 섹터 분석 (반도체, 2차전지 등) |
| `10_Wiki/Themes/` | 테마 분석 (장비부품, 코스닥 중소형 등) |
| `10_Wiki/Macros/` | 거시경제 (KOSPI, KOSDAQ, 환율, WTI) |
| `02-Knowledge/` | 시스템 아키텍처, AI Council, 트레이딩 전략 |
| `01-Projects/` | 프로젝트 관리 (종다리, 인보이스, CLP) |
| `00_Raw/MarketData/` | JSON 원시 시장 데이터 |
| `99_System/` | GEMINI.md (분석 규칙), Wiki 업데이트 로그 |
| `05-Templates/` | 일일/프로젝트 템플릿 |
| `06-Guides/` | 온보딩, 플러그인 설정 가이드 |

### 6.2 GEMINI.md 핵심 원칙 (절대 규칙)

```
1. Raw 데이터 기반 분석 — 절대 환각 금지
2. 내부 링크 [[링크]] 형식 사용
3. 6단계 워크플로우: Scan → Read → Analyze → Write → Link → Log
4. 그래프 뷰 색상 규칙:
   - 빨강 = 종목 / 파랑 = 섹터 / 노랑 = 거시경제 / 초록 = 테마
```

---

## 🔍 7. 발견된 주요 이슈

| # | 이슈 | 영향 | 우선순위 |
|:-:|:----|:-----|:--------:|
| ⚠️ | **portfolio.json 리셋** | 시스템 재시작 시 포지션 유실 | 🔴 상 |
| ⚠️ | **Jongdari 2중 PID** | 배틀루프 중복 실행 (87577+50459) | 🔴 상 |
| ⚠️ | **yfinance delisted 심볼** | 코스피 종목 데이터 수집 실패 | 🟡 중 |
| ⚠️ | **Telegram 404** | 뉴스 전송 시 봇 채팅 ID 오류 | 🟡 중 |
| ⚠️ | **market_intel 스키마** | JSON 구조 동적 변경 문제 | 🟢 하 |

---

## 📚 8. 팀원 학습 가이드

### Level 1 — 입문자
1. [[06-Guides/Hermes 온보딩 가이드|Hermes 온보딩 가이드]] 읽기
2. [[06-Guides/옵시디언 플러그인 설정|옵시디언 설정 가이드]] 따라하기
3. `10_Wiki/Macros/`에서 현재 시장 상황 익히기
4. [[05-Templates/일일 템플릿|일일 템플릿]]으로 Daily Log 작성 연습

### Level 2 — 시스템 이해
1. [[02-Knowledge/종다리 트레이딩 시스템 아키텍처|종다리 시스템 아키텍처]]
2. [[02-Knowledge/AI Council 의사결정 프로세스|AI Council 분석]]
3. [[02-Knowledge/트레이딩 전략 가이드|트레이딩 전략]]
4. [[01-Projects/미래해운항공 인보이스 자동화|Invoice Auto 문서]]
5. [[01-Projects/CLP 자동화 시스템|CLP Auto 문서]]

### Level 3 — 기여자
1. `nexus_orchestrator.py` 분석 및 개선
2. `lib/` 모듈별 단위 테스트 작성
3. Wiki 페이지 직접 편집 및 지식 확장
4. AI Council 분석 가중치 튜닝

---

## 📋 9. 시스템 가동 상태 (2026-04-29 기준)

| 서비스 | PID | 상태 | 가동시간 |
|--------|:---:|:----:|:--------:|
| Hermes Agent (tmux) | - | ✅ 정상 | 계속 |
| Hermes Gateway | 64547 | ✅ 정상 | 4일차 |
| Open WebUI | 466 | ✅ 정상 | 4일차 |
| Jongdari 배틀루프 | 87594 | ✅ 정상 | 가동중 |
| Brain Sync | cron | ✅ 정상 | 매시30분 |
| Git Sync | 5분 | ✅ 정상 | Obsidian Git |

> **주의**: 각 시스템의 버전, 설정값, 로그 위치는 해당 Wiki 페이지 참조
