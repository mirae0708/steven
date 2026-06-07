---
created: 2026-05-04 05:00 KST
updated: 2026-06-08 05:20 KST
type: knowledge-hub
category: github
tags:
  - github
  - open-source
  - curated
  - knowledge-base
---

# 🌐 GitHub 지식 허브

> 고품질 오픈소스 리포지토리 큐레이션 — 경제·금융·과학·철학·역사·문화 분야
>
> 수집 주기: 매주 월요일 오전 5시 KST | 마지막 업데이트: 2026-06-08

---

## 📈 금융 & 경제

### 1. OpenBB-finance/OpenBB (⭐⭐ 68.8k) ★
**링크:** https://github.com/OpenBB-finance/OpenBB
**설명:** 오픈소스 금융 데이터 플랫폼 — 분석가, 퀀트, AI 에이전트를 위한 통합 데이터 인프라
**핵심:** Open Data Platform(ODP) 아키텍처로 Python, REST API, MCP 서버, Excel 등 다양한 표면에 금융 데이터를 제공. `pip install openbb` 후 `obb.equity.price.historical("AAPL")` 단일 호출로 데이터 조회 가능. FastAPI 백엔드 + OpenBB Workspace UI 조합.
**우리 활용:** ★ Hermes/Jongdari의 금융 데이터 소스로 직접 연동 가능. MCP 서버 지원으로 AI 에이전트가 금융 데이터를 호출할 수 있음. 주식/옵션/암호화폐/고정수익 전방위 커버.

### 2. microsoft/qlib (⭐⭐ 44.1k) ★
**링크:** https://github.com/microsoft/qlib
**설명:** Microsoft의 AI 양적 투자 플랫폼 — 전천후 머신러닝 기반 퀀트 파이프라인
**핵심:** 데이터 처리 → 특성 엔지니어링 → 모델 학습 → 백테스팅 → 분석 → 온라인 서빙까지 전체 파이프라인 제공. LightGBM, Transformer, LSTM, Attention 모델 등 SOTA 양적 연구 모델 컬렉션 보유. RL(강화학습), 개념 드리프트 적응, 중첩 의사결정 프레임워크 지원. RD-Agent로 LLM 기반 자동 팩터 마이닝 지원.
**우리 활용:** ★ Jongdari 트레이딩 시스템의 모델링/백테스팅 레이어로 활용 가능. 특성 엔지니어링부터 주문 실행까지 커버.

### 3. akfamily/akshare (⭐⭐ 20.1k) ★
**링크:** https://github.com/akfamily/akshare
**설명:** 우아한 Python 금융 데이터 인터페이스 — 중국 및 글로벌 금융 데이터 원스톱 조회
**핵심:** 중국 동방재부(东方财富), 신랑재경(新浪财经) 등 주요 데이터 소스에서 주식/선물/외환 데이터를 한 줄 호출로 수집. `ak.stock_zh_a_hist(symbol="000001")` 형태. pandas/mplfinance 등 Python 데이터 사이언스 생태계와 완전 통합. AKQuant(Rust 기반 백테스팅) 및 AKTools(HTTP API) 연계 프로젝트 있음.
**우리 활용:** ★ 중국 시장 데이터 수집이 필요할 때 유용. 한국 시장 데이터와 병행해 글로벌 포트폴리오 분석에 활용.

### 4. wilsonfreitas/awesome-quant (⭐⭐ 26.7k)
**링크:** https://github.com/wilsonfreitas/awesome-quant
**설명:** 양적 금융(Quant)을 위한 최고의 오픈소스 리소스 큐레이션
**핵심:** Python/R/Julia 생태계의 양적 금융 라이브러리 전방위 정리. 수치 라이브러리(NumPy/pandas/Polars), 금융상품 가격결정(QuantLib/PyQL/FinancePy), 트레이딩/백테스팅 프레임워크, 포트폴리오 최적화, 리스크 분석, 기술적 지표, 시계열 분석, 시장 데이터, 시각화 등 18+ 카테고리. 양적 금융에 입문하거나 도구를 찾을 때 1순위 참고자료.
**우리 활용:** 새로운 트레이딩 도구나 데이터 소스가 필요할 때 먼저 검토할 체크리스트 역할.

### 5. TauricResearch/TradingAgents (⭐⭐ 84.0k) ★
**링크:** https://github.com/TauricResearch/TradingAgents
**설명:** 멀티 에이전트 LLM 트레이딩 프레임워크 — AI 에이전트들이 협력하여 트레이딩 결정
**핵심:** 여러 LLM 기반 에이전트(분석관, 리스크관리자, 전략가 등)가 협력하여 금융 거래를 수행. GitHub 전 분야 트렌딩 지속 랭크인 — 꾸준한 성장세. Python 기반.
**우리 활용:** ★ Hermes + Jongdari 시스템의 AI 트레이딩 에이전트 설계에 직접적 참고 가능. 멀티 에이전트 트레이딩 협업 아키텍처가 우리 시스템과 유사.

### 6. vnpy/vnpy (⭐⭐ 41.4k) ★
**링크:** https://github.com/vnpy/vnpy
**설명:** 중국 최대 오픈소스 퀀트 트레이딩 프레임워크 — Python 기반
**핵심:** CTA 전략, 알고리즘 트레이딩, 옵션 거래, 포트폴리오 관리 등 포괄적 트레이딩 기능. 중국 거래소(상해/심천/대련/정저우) 및 글로벌 거래소 연동. 이벤트 드리븐 엔진, 실시간 시장 데이터, 백테스팅, 라이브 트레이딩 모두 지원.
**우리 활용:** ★ Jongdari의 아키텍처 설계 참고. 특히 이벤트 드리븐 엔진과 리스크 관리 모듈 구조가 유용.

### 7. QuantConnect/Lean (⭐⭐ 19.8k) ★
**링크:** https://github.com/QuantConnect/Lean
**설명:** 알고리즘 트레이딩 엔진 — C# 기반, QuantConnect 플랫폼의 핵심
**핵심:** 크로스 플랫폼 알고리즘 트레이딩 엔진으로 주식/옵션/선물/암호화폐/FX 등 다양한 자산군 지원. Python과 C#으로 전략 작성 가능. 대규모 백테스팅, 실시간 트레이딩, 리스크 관리, 데이터 피드 통합. QuantConnect 클라우드에서 20년치 데이터 무료 사용.
**우리 활용:** ★ Jongdari 백테스팅 엔진 벤치마크로 활용. 데이터 처리 파이프라인과 전략 실행 엔진 설계 참고.

### 8. AI4Finance-Foundation/FinGPT (⭐⭐ 20.4k) ★
**링크:** https://github.com/AI4Finance-Foundation/FinGPT
**설명:** 오픈소스 금융 LLM — 금융 분야 특화 파인튜닝 프레임워크
**핵심:** 금융 텍스트 데이터를 활용한 LLM 파인튜닝 플랫폼. 감성 분석, 뉴스 요약, 재무 보고서 분석, 시장 예측 등 금융 NLP 태스크 지원. 데이터 수집/전처리/파인튜닝/평가까지 엔드투엔드 파이프라인. LoRA 등 경량 튜닝 방식 채택.
**우리 활용:** ★ Jongdari의 뉴스 감성 분석/시장 인텔리전스 파이프라인에 직접 적용 가능. 금융 특화 LLM 구축의 실질적 참고.

### 9. anthropics/financial-services (⭐⭐ 30.4k) ★
**링크:** https://github.com/anthropics/financial-services
**설명:** Anthropic의 Claude Agent 기반 금융 서비스 레퍼런스 — 투자은행/리서치/PE/자산운용 전용 에이전트 패키지
**핵심:** Anthropic이 공식 제공하는 금융 서비스 Claude Agent 컬렉션. Pitch Agent, Market Researcher, Earnings Reviewer, Model Builder, GL Reconciler, KYC Screener 등 11개 엔드투엔드 워크플로우 에이전트를 Cowork Plugin 및 Managed Agent API로 제공. Comps/DCF/LBO/3-Statement 모델링 스킬 내장. Morningstar, FactSet, S&P Global, Moody's, LSEG, PitchBook 등 11개 MCP 데이터 커넥터 탑재. Claude Code로 `claude plugin install pitch-agent@claude-for-financial-services` 1줄 설치. 주간 +3,000 ⭐ 성장 중, 현재 27.3k 돌파.
**우리 활용:** ★ Hermes/Jongdari 트레이딩 시스템에 금융 분석 Agent를 추가할 때 가장 완성도 높은 레퍼런스. 특히 MCP 커넥터 아키텍처와 멀티 에이전트 오케스트레이션 방식이 우리 시스템과 시너지 높음.

### 10. virattt/dexter (⭐⭐ 26.9k) ★
**링크:** https://github.com/virattt/dexter
**설명:** 자율 금융 리서치 에이전트 — 생각하고 계획하고 스스로 학습하며 실시간 시장 데이터 분석
**핵심:** TypeScript(Bun) 기반 자율 금융 리서치 에이전트. 복잡한 금융 질문을 단계별 리서치 플랜으로 자동 분해, 실시간 재무 데이터(손익계산서/대차대조표/현금흐름표)를 수집/분석. 자체 검증 루프로 작업 정확도 확인 및 반복 개선. 루프 감지 및 단계 제한 안전장치 내장. OpenAI + Financial Datasets API + Exa 검색 엔진 통합. WhatsApp 연동 지원. 443+ 커밋, 활발한 개발 중.
**우리 활용:** ★ Hermes의 금융 리서치 Agent 설계에 직접 참고. 특히 task planning → self-validation → refinement 사이클이 우리 멀티 에이전트 시스템과 잘 맞음.

### 11. VectifyAI/PageIndex (⭐⭐ 32.7k) ★
**링크:** https://github.com/VectifyAI/PageIndex
**설명:** 벡터리스(벡터DB 불필요), 추론 기반 RAG 시스템 — 전문 문서 분석에서 SOTA 달성
**핵심:** Vector DB나 Chunking 없이 문서의 계층적 트리 인덱스를 구축하고 LLM 추론으로 검색하는 혁신적 RAG 접근법. FinanceBench에서 98.7% 정확도로 SOTA 달성. 문서를 자연스러운 섹션 단위로 조직하고, 컨텍스트 인식 검색 수행. MCP 서버 및 API로 통합 가능. Self-hosted 오픈소스 및 Cloud 서비스 모두 제공.
**우리 활용:** ★ Hermes가 금융 보고서/리서치 문서를 분석할 때 기존 RAG보다 훨씬 정확한 검색 가능. 벡터 DB 없이 문서 기반 QA가 가능해 인프라 부담 감소. PageIndex MCP 서버를 Hermes 워크플로에 통합하면 문서 인텔리전스 대폭 향상.

### 12. LearningCircuit/local-deep-research (⭐⭐ 8.4k) ★
**링크:** https://github.com/LearningCircuit/local-deep-research
**설명:** 로컬에서 실행되는 AI 리서치 어시스턴트 — RTX 3090에서 Qwen3.6-27B로 ~95% SimpleQA
**핵심:** 완전 로컬 환경에서 딥 리서치를 수행하는 에이전트. Ollama + SearXNG + 자체 엔진 조합으로 모든 LLM(로컬/클라우드) 지원. arXiv, PubMed 등 10+ 검색 엔진 연동. SQLCipher 암호화 데이터베이스로 프라이버시 보장. Docker Compose 또는 `pip install local-deep-research`로 1분 설치. SimpleQA ~95%, xbench-DeepSearch 77% 달성 (로컬 GPU 기준 최초).
**우리 활용:** ★ Hermes의 웹 리서치/논문 분석 파이프라인을 로컬에서 실행 가능하게 함. 금융/과학 문서 리서치를 클라우드 API 비용 없이 수행 가능. Hermes-Obsidian 대시보드와 연계하면 완전한 온프레미스 리서치 워크플로우 구축 가능.

### 13. HKUDS/AI-Trader (⭐⭐ 19.4k) ★
**링크:** https://github.com/HKUDS/AI-Trader
**설명:** 100% 완전 자동화된 Agent-Native 트레이딩 플랫폼 — AI 에이전트가 협력하여 트레이딩 스킬을 공유하고 향상
**핵심:** 모든 AI 에이전트(OpenClaw, Claude Code, Codex, Cursor 등)가 `Read https://ai4trade.ai/SKILL.md and register.` 한 줄 메시지로 즉시 연결 가능. FastAPI 백엔드 + Polymarket 페이퍼 트레이딩 지원. 에이전트 간 집단 지능 트레이딩, 크로스 플랫폼 신호 동기화, 원클릭 카피 트레이딩 기능. 대시보드에서 실시간 금융 이벤트 모니터링 및 정산 자동화.
**우리 활용:** ★ Hermes/Jongdari의 멀티 에이전트 트레이딩 시스템 아키텍처 참고. 특히 "에이전트가 하나의 메시지로 플랫폼에 참여"하는 설계는 우리 Agent 네트워크에 직접 적용 가능.

---

## 🔬 과학 & 기술

### 14. JuliaLang/julia (⭐⭐ 49.1k)
**링크:** https://github.com/JuliaLang/julia
**설명:** 고성능 테크니컬 컴퓨팅 언어 — Python의 사용성과 C의 속도를 겸비
**핵심:** 동적 언어의 생산성과 정적 언어의 성능을 결합한 프로그래밍 언어. 과학 컴퓨팅, 머신러닝, HPC, 수치 해석에 특화. `juliaup`으로 설치 관리. VS Code/Emacs/Vim/Pluto.jl 등 다양한 개발 환경 지원. 활발한 Discourse/Zulip 커뮤니티.
**우리 활용:** 대규모 수치 계산/백테스팅 엔진 성능 최적화에 Julia 고려 가능.

### 15. Future-House/paper-qa (⭐⭐ 8.6k) ★
**링크:** https://github.com/Future-House/paper-qa
**설명:** 과학 문서 Q&A를 위한 고정밀 RAG 시스템 — 인용 기반 응답 생성
**핵심:** Agentic RAG 접근법으로 LLM 에이전트가 반복적으로 질의를 개선하고 인용과 함께 근거 있는 답변 생성. Semantic Scholar, Crossref, Unpaywall에서 메타데이터(인용 수, 철회 확인, 저널 품질) 자동 수집. PDF, 텍스트, Office 문서, 소스 코드까지 검색 인덱싱. 모든 LiteLLM 제공자 및 임베딩 모델 지원. v5(PaperQA2)는 과학 Q&A에서 초인간 성능 주장.
**우리 활용:** ★ Hermes가 논문/리포트를 분석할 때 활용. 과학/금융 문서 기반 Q&A에 강력함.

### 16. sympy/sympy (⭐⭐ 15.0k)
**링크:** https://github.com/sympy/sympy
**설명:** 순수 Python으로 작성된 컴퓨터 대수 시스템 (CAS)
**핵심:** 기호 계산, 미적분, 방정식 풀이, 급수 전개, 행렬 연산 등 수학적 연산 지원. 외부 의존성 없이 pure Python만으로 동작. `isympy` 콘솔로 대화형 사용 가능. 2005년부터 개발, PeerJ Computer Science (2017)에 게재됨.
**우리 활용:** 파생상품 가격결정/리스크 측정에서 기호 수학이 필요할 때 의존성 없이 사용 가능.

### 17. astropy/astropy (⭐⭐ 5.1k)
**링크:** https://github.com/astropy/astropy
**설명:** 천문학을 위한 Python 핵심 라이브러리 — 커뮤니티 주도
**핵심:** 좌표계, FITS 파일 처리, 단위/상수, 천체 역학, 통계, 데이터 시각화 등 천문학 특화 도구. NumFOCUS 후원, BSD 라이선스. 활발한 Slack/Discourse 커뮤니티.
**우리 활용:** 좌표 계산, 시간 변환, 고급 통계 라이브러리는 금융 시계열 분석에도 간접 활용 가능.

### 18. Stellarium/stellarium (⭐⭐ 9.6k)
**링크:** https://github.com/Stellarium/stellarium
**설명:** 실시간 3D 플라네타리움 — 자유 소프트웨어
**핵심:** 맨눈/쌍안경/망원경 관측 모드를 지원하는 리얼리스틱 3D 밤하늘 렌더링. 별/행성/성운/은하까지 실제 천체 데이터 기반. Windows/macOS/Linux 크로스 플랫폼. OpenGL 가속.
**우리 활용:** 천문학 지식이나 데이터 시각화가 필요한 프로젝트에 교육용/참고용.

### 19. cocoindex-io/cocoindex (⭐⭐ 10.2k) ★
**링크:** https://github.com/cocoindex-io/cocoindex
**설명:** AI 에이전트를 위한 증분 인덱싱 엔진 — 코드베이스/미팅노트/슬랙/PDF를 실시간 컨텍스트로
**핵심:** AI 에이전트와 LLM 앱을 위해 데이터 소스(코드, 문서, Slack, 이메일, PDF, 영상)를 실시간으로 증분 인덱싱하는 Python 프레임워크. 변경사항(Δ)만 재처리하여 항상 최신 컨텍스트 유지. Rust 코어 기반 고성능, 병렬 처리 기본. 선언적 Python API로 5분 설정. CocoIndex-code MCP 서버로 Claude Code/Cursor와 즉시 통합 가능 — AST-aware 증분 코드 인덱싱으로 토큰 70% 절감, 80-90% 캐시 히트율. 20+ 예제 제공.
**우리 활용:** ★ Hermes의 RAG/기억 시스템을 증분 업데이트로 전환 가능. 특히 기술 위키 자동 동기화에 강력함 — 코드 변경 시 관련 지식만 업데이트. Hermes MCP 서버에 CocoIndex-code 탑재하면 코드베이스 이해도 대폭 향상.

### 20. mattpocock/skills (⭐⭐ 120.3k)
**링크:** https://github.com/mattpocock/skills
**설명:** 실제 엔지니어를 위한 AI 코딩 에이전트 스킬 — GSD/Grilling/Spec-Kit 대안의 경량 컴포저블 스킬
**핵심:** TypeScript 전문가 Matt Pocock이 개발한 Claude Code/Codex/Cursor용 에이전트 스킬 모음. `/grill-me`(요구사항 정교화), `/grill-with-docs`(공유 언어 구축), `/triage`, `/spec`, `/plan`, `/build`, `/review`, `/pr` 등 15+ 스킬. `npx skills@latest add mattpocock/skills` 30초 설치. 각 스킬은 단일 SKILL.md 파일로 경량 설계, 모델에 무관하게 동작. 에이전트가 요구사항을 오해하는 문제(#1), 과도한 장황함(#2), 잘못된 코드(#3) 등 실제 실패 모드를 해결.
**우리 활용:** Hermes Agent의 스킬 시스템 설계 참고. 특히 `/grill-with-docs`의 공유 언어 구축 기법과 `/plan`의 작은 원자적 태스크 분할 방식이 우리 코딩 워크플로에 직접 적용 가능.

### 21. addyosmani/agent-skills (⭐⭐ 48.9k)
**링크:** https://github.com/addyosmani/agent-skills
**설명:** 프로덕션 등급 AI 코딩 에이전트 스킬 — /spec → /plan → /build → /test → /review → /ship
**핵심:** Google Chrome 엔지니어링 리더 Addy Osmani의 에이전트 스킬 세트. 7개 슬래시 명령(/spec, /plan, /build, /test, /review, /code-simplify, /ship)이 전체 개발 수명주기를 커버. Spec → Plan → Build → Verify → Review → Ship 파이프라인. Claude Code 마켓플레이스, Cursor, Gemini CLI 모두 지원. 각 스킬은 시니어 엔지니어의 워크플로와 품질 게이트를 인코딩. API 디자인, 프론트엔드 UI, 데이터베이스 스키마 등 컨텍스트 기반 자동 활성화.
**우리 활용:** Hermes의 코딩 에이전트 파이프라인에 /spec→/plan→/build→/test→/review→/ship 사이클을 도입하면 품질 일관성 향상. 특히 /spec의 'spec before code' 원칙과 /test의 'tests are proof' 원칙이 우리 TDD 워크플로와 일치.

### 22. rohitg00/agentmemory (⭐⭐ 21.7k) ★
**링크:** https://github.com/rohitg00/agentmemory
**설명:** #1 AI 코딩 에이전트용 영구 메모리 시스템 — 실제 벤치마크 기반
**핵심:** Claude Code, Cursor, Gemini CLI, Codex CLI, **Hermes**, OpenClaw 등 모든 주요 AI 에이전트를 위한 영구 메모리 서버. iii 엔진 기반으로 95.2% 검색 정확도(R@5), 토큰 92% 절감, 0개 외부 DB 필요, 12개 자동 후크, 51개 MCP 도구, 950+ 테스트 통과. `npm install -g @agentmemory/agentmemory` 1줄 설치 후 `agentmemory connect claude-code`로 연결. Karpathy의 LLM Wiki 패턴을 구현 — 신뢰도 점수, 라이프사이클, 지식 그래프, 하이브리드 검색 지원.
**우리 활용:** ★ Hermes가 직접 지원하는 메모리 시스템! Hermes의 계층 메모리 시스템(L0-L4)을 agentmemory로 확장 가능. MCP 서버 기반이라 Hermes와 즉시 통합 가능.

### 23. Imbad0202/academic-research-skills (⭐⭐ 28.5k)
**링크:** https://github.com/Imbad0202/academic-research-skills
**설명:** Claude Code용 학술 연구 스킬 — 연구 → 작성 → 리뷰 → 수정 → 최종 완료 전 과정
**핵심:** 학술 논문 작성을 위한 Claude Code 스킬 모음(v3.9.1). 연구 단계별(1~5단계)로 리서치, 작성, 리뷰, 수정, 최종화를 커버. Semantic Scholar API 논문 검증, 항목별 인용 확인(CLAIM_AUDIT=1), 상호 참조 삼각 측량, 스타일 보정(과거 작업에서 어휘 학습), 7가지 품질 게이트. 작성자가 AI 사용을 숨기기 위한 도구가 아니라 더 나은 논문을 위한 휴먼-인-더-루프 접근법. 398+ 커밋, 매우 활발한 개발.
**우리 활용:** Hermes/Obsidian Wiki의 논문 분석/작성 파이프라인에 단계별 리서치 스킬 체계를 도입 가능. 특히 인용 검증과 주장-출처 일치 감사 기능이 논문 품질 관리에 유용.

### 24. Hmbown/CodeWhale (⭐⭐ 37.4k)
**링크:** https://github.com/Hmbown/CodeWhale
**설명:** DeepSeek + MiMo 코딩 에이전트 — 로컬 워크스페이스 편집과 자동 모드
**핵심:** Rust 바이너리로 배포되는 DeepSeek V4 + MiMo 전용 TUI 코딩 에이전트. `codewhale` 명령 하나로 추론 블록 스트리밍, 승인 게이트가 있는 로컬 워크스페이스 편집, 턴당 모델/사고 수준 선택, 다중 제공자 지원. npm/Cargo/Homebrew/Docker 모두 지원. DeepSeek-TUI에서 CodeWhale로 리브랜딩. 37.4k ⭐, 활발한 개발 중.
**우리 활용:** DeepSeek V4/MiMo 기반 로컬 코딩 에이전트가 필요할 때 참고. 특히 Rust 기반 경량 설계와 자동 모드 아키텍처가 Hermes의 에이전트 시스템과 시너지 가능.

### 25. colbymchenry/codegraph (⭐⭐ 43.7k) ★
**링크:** https://github.com/colbymchenry/codegraph
**설명:** 사전 인덱싱된 코드 지식 그래프 — Claude Code, Cursor, Codex, OpenCode, Hermes Agent용. 토큰 절감, 툴 호출 감소, 100% 로컬
**핵심:** 코드베이스의 심볼 관계, 호출 그래프, 코드 구조를 사전 인덱싱하여 AI 에이전트가 파일을 스캔하지 않고 즉시 질의 가능. VS Code(85% 툴호출 감소), Excalidraw(96%), Tokio(92%) 등 7개 실제 코드베이스 벤치마크에서 평균 35% 비용 절감, 57% 토큰 감소, 71% 툴호출 감소 달성. `npx @colbymchenry/codegraph` 커맨드 하나로 설치, Hermes Agent 공식 지원. TypeScript 기반, Node.js 번들 런타임 내장.
**우리 활용:** ★ Hermes Agent가 공식 지원하는 프로젝트! CodeGraph의 MCP 서버를 Hermes 워크플로에 통합하면 큰 코드베이스 탐색 시 비용과 응답시간 대폭 개선 가능. 특히 Hermes가 자체 코드베이스를 이해하거나 외부 프로젝트 분석 시 활용도 높음.

### 26. CloakHQ/CloakBrowser (⭐⭐ 24.7k) ★
**링크:** https://github.com/CloakHQ/CloakBrowser
**설명:** 스텔스 Chromium — 모든 봇 탐지 테스트 통과. Drop-in Playwright/Puppeteer 대체품, C++ 소스 레벨 핑거프린트 패치
**핵심:** 58개 C++ 소스 레벨 패치로 canvas, WebGL, 오디오, 폰트, GPU, 화면, WebRTC, 네트워크 타이밍, 자동화 신호를 수정. Playwright의 완전한 드롭인 대체 — import만 변경하면 동일한 API로 동작. `pip install cloakbrowser` 또는 `npm install cloakbrowser` 1줄 설치. reCAPTCHA v3 0.9 점수, Cloudflare Turnstile, FingerprintJS, BrowserScan 등 30+ 탐지 사이트 통과. `humanize=True` 플래그로 사람 같은 마우스 커브/키보드 타이밍 제공. 오픈소스, 무료.
**우리 활용:** ★ Hermes가 WSL 브라우저 제어(Playwright)의 한계를 극복하는 데 직접 사용 가능. 봇 탐지가 심한 사이트(물류 포털, 금융 사이트) 크롤링 시 CloakBrowser로 대체. 특히 ERP 브라우저 정찰/자동화 작업에서 치명적인 도구.

---

## 🧠 철학 & 인문

### 30. hackerkid/Mind-Expanding-Books (⭐⭐ 13.7k)
**링크:** https://github.com/hackerkid/Mind-Expanding-Books
**설명:** 마음을 확장하는 책 추천 큐레이션 — 철학/역사/경제/심리/과학/소설 전방위
**핵심:** 20+ 카테고리로 분류된 엄선 도서 목록. 스타트업(Shoe Dog, Zero to One), 철학/심리(Man's Search for Meaning, Meditations, Atomic Habits), 전기/자서전, 역사, 과학/의학, 논리/문제해결, 정치, 경제, 젠더/섹슈얼리티, 교육, 소설(고전/판타지/SF/공포) 등. 각 도서는 Goodreads 평점과 출판년도 포함.
**우리 활용:** 트레이딩 외적 통찰(행동경제학, 심리학, 역사)이 필요한 독서 로드맵으로 활용.

---

## 📚 기타 지식

### 31. modelscope/modelscope (⭐⭐ 8.9k)
**링크:** https://github.com/modelscope/modelscope
**설명:** Model-as-a-Service 플랫폼 — 다양한 AI 모델의 통합 제공
**핵심:** NLP/CV/음성/멀티모달 등 다양한 도메인의 AI 모델을 표준화된 인터페이스로 제공. 모델 탐색/다운로드/추론/파인튜닝을 한 곳에서 처리. 중국 알리바바 주도.
**우리 활용:** Hermes의 모델 레이어 옵션으로 검토 가능 (Hugging Face 보완).

### 32. stdlib-js/stdlib (⭐⭐ 5.8k)
**링크:** https://github.com/stdlib-js/stdlib
**설명:** JavaScript/TypeScript용 표준 수치 라이브러리 — 과학 컴퓨팅
**핵심:** 통계, 수학, 과학 컴퓨팅, 수치 해석을 위한 JS/TS 라이브러리. Python의 NumPy/SciPy 역할을 JS 생태계에서 수행. 웹 브라우저와 Node.js 모두 지원.
**우리 활용:** 웹 기반 대시보드에서 금융/통계 계산이 필요할 때 활용 가능.

### 27. obra/superpowers (⭐⭐ 220.3k) ★
**링크:** https://github.com/obra/superpowers
**설명:** 에이전트 스킬 프레임워크 & 소프트웨어 개발 방법론 — spec → plan → build → review → ship 전 과정 커버
**핵심:** Jesse Vincent(obra)가 개발한 완전한 소프트웨어 개발 방법론. 에이전트가 자동으로 spec을 추출 → 구현 계획 수립 → TDD 기반 구현 → 서브에이전트가 병렬 작업 수행 → 코드 리뷰. 주간 +10,367 ⭐ 폭발적 성장 중. Claude Code 공식 마켓플레이스, Codex CLI, Cursor, Gemini CLI 등 모든 주요 에이전트 지원. `npx skills add obra/superpowers --skill spec`으로 특정 스킬만 선택 설치 가능.
**우리 활용:** ★ Hermes Agent의 코딩 워크플로를 spec→plan→build→review 파이프라인으로 체계화 가능. 특히 subagent-driven-development 방식은 우리 가상오피스 멀티 에이전트 시스템과 직접 시너지.

### 28. HKUDS/CLI-Anything (⭐⭐ 42.3k)
**링크:** https://github.com/HKUDS/CLI-Anything
**설명:** 모든 소프트웨어를 에이전트-네이티브로 만드는 CLI 래퍼 — AI 에이전트가 CLI로 모든 앱 제어
**핵심:** Python 기반, Click 프레임워크로 어떤 소프트웨어든 AI 에이전트가 호출 가능한 CLI 명령어로 래핑. CLI-Hub에서 200+ CLI 하네스(Blender, LibreOffice, Obsidian, QGIS, FreeCAD, n8n, Godot, Zotero 등)를 `pip install cli-anything-hub`로 1분 설치. 2,269개 테스트 100% 통과. CLI-Hub에서 커뮤니티 하네스 검색/설치 가능. Pi, OpenClaw, nanobot, Cursor, Claude Code 등 모든 코딩 에이전트와 호환.
**우리 활용:** 가상오피스/물류 자동화에서 CLI로 제어 가능한 소프트웨어(Obsidian, LibreOffice, n8n)를 에이전트가 직접 조작하게 할 수 있음. 특히 Obsidian CLI로 위키 자동화, LibreOffice CLI로 HBL/Document 생성 자동화에 활용 가능.

---

## 📊 분야별 통계

| 분야 | GitHub 리포 수 | 5k+ 스타 리포 |
|------|--------------|-------------|
| 💰 Finance | 3,200+ | 37 |
| 📈 Economics | 2,400 | 3 |
| 🔬 Science | 4,100+ | 13 |
| 🧠 Philosophy | 1,110 | 1 |
| 📜 History | 2,920 | 14 (대부분 도구) |
| 🌍 Culture | 650 | 2 |

> 참고: History/Culture 태그는 GitHub에서 주로 개발 도구(셸 히스토리, Git 히스토리, 체인지로그)가 점유하고 있어 인문학적 리포 수는 제한적.

---

## 🔗 참고 링크

- [GitHub Topics: Economics](https://github.com/topics/economics)
- [GitHub Topics: Finance](https://github.com/topics/finance)
- [GitHub Topics: Science](https://github.com/topics/science)
- [GitHub Topics: Philosophy](https://github.com/topics/philosophy)
- [GitHub Topics: History](https://github.com/topics/history)
- [GitHub Topics: Culture](https://github.com/topics/culture)
- [GitHub Trending (Weekly)](https://github.com/trending?since=weekly)
