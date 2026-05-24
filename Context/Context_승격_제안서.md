# Context 승격 제안서

> 분석일: 2026-05-25
> 대상: 10_Wiki/, 01_지식/, 03_경제/, 03_Projects/, 05_참고_자료/, 06-Guides/
> 기준: (1) 팀 전체 공식 지식 (2) Steven 업무 핵심 지식 (3) 반복 참고 자료

---

## [Context/Company/] — 회사/팀 규칙, 프로세스, 정체성

### 1. 01_지식/직원용-코딩-아키텍처-가이드.md
- **현재 경로**: ~/team-wiki-vault/01_지식/직원용-코딩-아키텍처-가이드.md
- **승격 이유**: 팀의 공식 코딩 규칙, 아키텍처 패턴(6가지), 네이밍 컨벤션, 에러 처리, 보안 수칙, 안티패턴까지 모든 개발자가 알아야 할 내용을 체계적으로 정리. 신규 팀원 온보딩 필수.
- **제안**: `Context/Company/Coding-Architecture-Guide.md`

### 2. 03_경제/Operations-Guide.md
- **현재 경로**: ~/team-wiki-vault/03_경제/Operations-Guide.md
- **승격 이유**: 크론 작업 일정(매일 08:45 배틀루프, 장중 리포트, FOMC 분석), 장애 대응 매뉴얼(배틀루프 다운, KeepAlive 문제, Watcher 문제), 자주 쓰는 명령어, 부팅 시 자동 실행 순서 등 팀 운영의 핵심 프로세스.
- **제안**: `Context/Company/Operations-Guide.md`

### 3. 06-Guides/Onboarding.md
- **현재 경로**: ~/team-wiki-vault/06-Guides/Onboarding.md
- **승격 이유**: 팀원 온보딩 첫 단계로 필수 (Vault 클론 → Obsidian 설정 → Git 연동 → Claude Code 연동 → 템플릿 활용).
- **제안**: `Context/Company/Onboarding-Guide.md`

### 4. 06-Guides/Obsidian-Plugin-Setup.md
- **현재 경로**: ~/team-wiki-vault/06-Guides/Obsidian-Plugin-Setup.md
- **승격 이유**: Obsidian Git, Dataview, Kanban, Tasks, Templater 등 팀 공통 도구 스택 설정 가이드.
- **제안**: `Context/Company/Obsidian-Plugin-Setup.md`

### 5. 01_지식/Vault-구조-설계도.md
- **현재 경로**: ~/team-wiki-vault/01_지식/Vault-구조-설계도.md
- **승격 이유**: 전체 Vault의 디렉토리 구조와 각 폴더 용도 정의. 신규 팀원이 Vault를 이해하는 첫 지도. 지식 분류 체계(태그 시스템)도 포함.
- **제안**: `Context/Company/Vault-Structure-Map.md`

---

## [Context/Product/] — 제품/서비스 (물류/ERP/트레이딩)

### 6. 01_지식/Hermes-Git-지식베이스.md
- **현재 경로**: ~/team-wiki-vault/01_지식/Hermes-Git-지식베이스.md
- **승격 이유**: 3대 핵심 시스템(종다리 트레이딩, Invoice Auto, CLP Auto)의 전체 아키텍처를 한 문서에 통합. 각 시스템의 진입점, 기술 스택, 데이터 흐름, 설정 파일 위치, 주요 이슈까지 모두 담긴 마스터 문서. Steven의 업무 전체를 이해하는 데 필수.
- **제안**: `Context/Product/System-Architecture-Master.md`

### 7. 01_지식/System-Architecture.md
- **현재 경로**: ~/team-wiki-vault/01_지식/System-Architecture.md
- **승격 이유**: 인프라 계층(WSL2→tmux→각 서비스), 통신 흐름(Telegram→Hermes→NexusOrchestrator), 핵심 메커니즘(Market Intel 수집, AI Council, CB Score)을 간결하게 설명. 아키텍처 빠른 참조용.
- **제안**: `Context/Product/System-Architecture-Overview.md`

### 8. 01_지식/AI-Council.md
- **현재 경로**: ~/team-wiki-vault/01_지식/AI-Council.md
- **승격 이유**: 3명의 AI 분석가(기술적/뉴스모멘텀/리스크관리)의 역할, 평가 기준, 다수결 의사결정 프로세스, CB Score 기반 포지션 사이징. 트레이딩 시스템의 두뇌 역할을 하는 핵심 메커니즘.
- **제안**: `Context/Product/AI-Council-Process.md`

### 9. 03_경제/Trading-Strategies.md
- **현재 경로**: ~/team-wiki-vault/03_경제/Trading-Strategies.md
- **승격 이유**: 모멘텀 스코어링, 포트폴리오 규칙(최대 5종목, 손절 -8%, 익절 +15%), CB Score 계산식, 매매 신호 조건, 시장 환경별 전략까지 Steven의 트레이딩 핵심 규칙을 상세히 정의. 반복 참조 빈도가 가장 높은 문서 중 하나.
- **제안**: `Context/Product/Trading-Strategy-Definition.md`

### 10. 03_경제/04_비즈니스_사업분석/00_Index.md
- **현재 경로**: ~/team-wiki-vault/03_경제/04_비즈니스_사업분석/00_Index.md
- **승격 이유**: 미래해운항공 기반 8개 비즈니스 아이템 포트폴리오 전체 지도 (운영중 6개 + 신규 8개). 물류 포워딩, ERP 자동화, 가상오피스, 멀티 LLM 라운드테이블 등 Steven의 모든 사업 현황 한눈에 파악 가능.
- **제안**: `Context/Product/Business-Portfolio-Index.md`

### 11. 03_경제/04_비즈니스_사업분석/99_워크플로우_엔진_선택.md
- **현재 경로**: ~/team-wiki-vault/03_경제/04_비즈니스_사업분석/99_워크플로우_엔진_선택.md
- **승격 이유**: n8n/Dify/Activepieces/LangFlow 비교 분석 및 n8n 추천 결정. 워크플로우 자동화 인프라 선택은 팀 전체 기술스택 결정에 영향을 미치는 핵심 참고 자료.
- **제안**: `Context/Product/Workflow-Engine-Selection.md`

### 12. 03_Projects/CowAgent_사용자_가이드/CowAgent-사용법-및-운영-가이드.md
- **현재 경로**: ~/team-wiki-vault/03_Projects/CowAgent_사용자_가이드/CowAgent-사용법-및-운영-가이드.md
- **승격 이유**: CowAgent v2.0.7의 전체 사용법 (Web 콘솔, CLI, 채팅 명령어, Agent 모드, WeChat 연동, Skill Hub, 지식베이스, 문제해결). 팀 전체가 사용하는 AI 비서 시스템의 운영 메뉴얼.
- **제안**: `Context/Product/CowAgent-Usage-Guide.md`

### 13. 03_경제/04_비즈니스_사업분석/99_시뮬레이션리포트.md
- **현재 경로**: ~/team-wiki-vault/03_경제/04_비즈니스_사업분석/99_시뮬레이션리포트.md
- **승격 이유**: 9개 비즈니스 아이템의 종합 시뮬레이션 결과 (S/A/B 등급, ROI, BEP, 2년 순이익). AI 물류 에이전트 SaaS가 S등급 1위. 사업 의사결정의 근거 자료로 반복 참조.
- **제안**: `Context/Product/Business-Simulation-Report.md`

---

## [Context/TechStack/] — 기술 스택

### 14. 01_지식/자율형-에이전트-로드맵.md
- **현재 경로**: ~/team-wiki-vault/01_지식/자율형-에이전트-로드맵.md
- **승격 이유**: MCP(Model Context Protocol), LangGraph, OpenAI Agents SDK, Mastra 등 Hermes 진화 방향을 결정짓는 기술 조사 결과. MCP 서버 구축 → LangGraph 도입 → GitHub 자동화 → 외부 시스템 통합의 4단계 로드맵 포함.
- **제안**: `Context/TechStack/Autonomous-Agent-Roadmap.md`

### 15. 06-Guides/Claude-System-Prompt.md
- **현재 경로**: ~/team-wiki-vault/06-Guides/Claude-System-Prompt.md
- **승격 이유**: Wiki Basic Model의 시스템 프롬프트 템플릿. 모든 AI 도구(Claude, Hermes 등)가 Wiki를 다룰 때 따라야 할 규칙 정의.
- **제안**: `Context/TechStack/Wiki-Basic-Model-Prompt.md`

### 16. 05_참고_자료/GitHub-지식허브.md
- **현재 경로**: ~/team-wiki-vault/05_참고_자료/GitHub-지식허브.md
- **승격 이유**: 검증된 고품질 GitHub 저장소 모음. 반복적으로 참조하는 외부 리소스 목록.
- **제안**: `Context/TechStack/GitHub-Knowledge-Hub.md`

### 17. 10_Wiki/Macros/ (4개 파일)
- **경로**: KOSPI.md, KOSDAQ.md, 환율.md, 국제유가WTI.md
- **승격 이유**: 매일 반복적으로 조회하는 거시경제 핵심 지표 4종 (기술적 지표, RSI, 볼린저밴드, 시장 영향 분석 포함). 실시간성은 있지만 기본 포맷과 해석 방법은 참고 자료로 가치 있음. **단, Context는 정적 지식 저장소이므로 실시간 데이터를 포함한 전체 파일은 부적합. 포맷 템플릿과 해석 방법론만 추출.**
- **제안**: `Context/TechStack/Macro-Indicator-Template.md` (포맷 템플릿만 추출)

---

## 요약

| 우선순위 | 대상 | Context 폴더 | 승격 사유 |
|:--------:|:-----|:------------|:----------|
| 🥇 | 직원용-코딩-아키텍처-가이드 | Company | 팀 개발 규칙의 전부 |
| 🥇 | Hermes-Git-지식베이스 | Product | 3대 시스템 마스터 문서 |
| 🥇 | Operations-Guide | Company | 매일 보는 운영 매뉴얼 |
| 🥇 | Trading-Strategies | Product | 트레이딩 핵심 규칙 |
| 🥇 | AI-Council | Product | 의사결정 메커니즘 |
| 🥇 | System-Architecture | Product | 전체 아키텍처 요약 |
| 🥇 | Business-Portfolio-Index | Product | 사업 전체 지도 |
| 🥇 | Vault-구조-설계도 | Company | Vault 네비게이션 |
| 🥈 | CowAgent-사용법-및-운영-가이드 | Product | AI 비서 운영 메뉴얼 |
| 🥈 | Workflow-Engine-Selection | Product | 기술스택 결정 근거 |
| 🥈 | Onboarding-Guide | Company | 신규 팀원 필수 |
| 🥈 | Autonomous-Agent-Roadmap | TechStack | Hermes 진화 방향 |
| 🥈 | Obsidian-Plugin-Setup | Company | 공통 도구 설정 |
| 🥈 | Business-Simulation-Report | Product | 사업 의사결정 근거 |
| 🥉 | Claude-System-Prompt | TechStack | AI 도구 규칙 |
| 🥉 | GitHub-지식허브 | TechStack | 외부 참조 허브 |
| 🥉 | Macro-Indicator-Template | TechStack | 지표 분석 포맷 |

> **참고**: 10_Wiki/의 대부분은 AI 연구 논문 요약과 MCP 자동검색 로그로, Context로 승격할 가치가 낮음. Macros/의 거시경제 파일은 실시간성이 강해 포맷 템플릿만 추출. 03_경제/04_비즈니스_사업분석/의 각 개별 사업 분석 문서(01~08)는 인덱스와 시뮬레이션 리포트로 대표 가능. 05_참고_자료/의 01_링크_모음과 02_용어_정리는 내용이 비어 있어 보류.
