---
created: 2026-05-04 05:00 KST
updated: 2026-05-04 05:00 KST
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
> 수집 주기: 매주 월요일 오전 5시 KST | 마지막 업데이트: 2026-05-04

---

## 📈 금융 & 경제

### 1. OpenBB-finance/OpenBB (⭐⭐ 66.9k) ★
**링크:** https://github.com/OpenBB-finance/OpenBB
**설명:** 오픈소스 금융 데이터 플랫폼 — 분석가, 퀀트, AI 에이전트를 위한 통합 데이터 인프라
**핵심:** Open Data Platform(ODP) 아키텍처로 Python, REST API, MCP 서버, Excel 등 다양한 표면에 금융 데이터를 제공. `pip install openbb` 후 `obb.equity.price.historical("AAPL")` 단일 호출로 데이터 조회 가능. FastAPI 백엔드 + OpenBB Workspace UI 조합.
**우리 활용:** ★ Hermes/Jongdari의 금융 데이터 소스로 직접 연동 가능. MCP 서버 지원으로 AI 에이전트가 금융 데이터를 호출할 수 있음. 주식/옵션/암호화폐/고정수익 전방위 커버.

### 2. microsoft/qlib (⭐⭐ 41.9k) ★
**링크:** https://github.com/microsoft/qlib
**설명:** Microsoft의 AI 양적 투자 플랫폼 — 전천후 머신러닝 기반 퀀트 파이프라인
**핵심:** 데이터 처리 → 특성 엔지니어링 → 모델 학습 → 백테스팅 → 분석 → 온라인 서빙까지 전체 파이프라인 제공. LightGBM, Transformer, LSTM, Attention 모델 등 SOTA 양적 연구 모델 컬렉션 보유. RL(강화학습), 개념 드리프트 적응, 중첩 의사결정 프레임워크 지원. RD-Agent로 LLM 기반 자동 팩터 마이닝 지원.
**우리 활용:** ★ Jongdari 트레이딩 시스템의 모델링/백테스팅 레이어로 활용 가능. 특성 엔지니어링부터 주문 실행까지 커버.

### 3. akfamily/akshare (⭐⭐ 18.8k) ★
**링크:** https://github.com/akfamily/akshare
**설명:** 우아한 Python 금융 데이터 인터페이스 — 중국 및 글로벌 금융 데이터 원스톱 조회
**핵심:** 중국 동방재부(东方财富), 신랑재경(新浪财经) 등 주요 데이터 소스에서 주식/선물/외환 데이터를 한 줄 호출로 수집. `ak.stock_zh_a_hist(symbol="000001")` 형태. pandas/mplfinance 등 Python 데이터 사이언스 생태계와 완전 통합. AKQuant(Rust 기반 백테스팅) 및 AKTools(HTTP API) 연계 프로젝트 있음.
**우리 활용:** ★ 중국 시장 데이터 수집이 필요할 때 유용. 한국 시장 데이터와 병행해 글로벌 포트폴리오 분석에 활용.

### 4. wilsonfreitas/awesome-quant (⭐⭐ 26.0k)
**링크:** https://github.com/wilsonfreitas/awesome-quant
**설명:** 양적 금융(Quant)을 위한 최고의 오픈소스 리소스 큐레이션
**핵심:** Python/R/Julia 생태계의 양적 금융 라이브러리 전방위 정리. 수치 라이브러리(NumPy/pandas/Polars), 금융상품 가격결정(QuantLib/PyQL/FinancePy), 트레이딩/백테스팅 프레임워크, 포트폴리오 최적화, 리스크 분석, 기술적 지표, 시계열 분석, 시장 데이터, 시각화 등 18+ 카테고리. 양적 금융에 입문하거나 도구를 찾을 때 1순위 참고자료.
**우리 활용:** 새로운 트레이딩 도구나 데이터 소스가 필요할 때 먼저 검토할 체크리스트 역할.

### 5. TauricResearch/TradingAgents (⭐⭐ 64.9k) ★
**링크:** https://github.com/TauricResearch/TradingAgents
**설명:** 멀티 에이전트 LLM 트레이딩 프레임워크 — AI 에이전트들이 협력하여 트레이딩 결정
**핵심:** 여러 LLM 기반 에이전트(분석관, 리스크관리자, 전략가 등)가 협력하여 금융 거래를 수행. 이번 주 GitHub 트렌딩 1위 (일간 +3,315 ⭐), 2위 (주간 +8,489 ⭐). Python 기반.
**우리 활용:** ★ Hermes + Jongdari 시스템의 AI 트레이딩 에이전트 설계에 직접적 참고 가능. 멀티 에이전트 트레이딩 협업 아키텍처가 우리 시스템과 유사.

### 6. vnpy/vnpy (⭐⭐ 40.1k) ★
**링크:** https://github.com/vnpy/vnpy
**설명:** 중국 최대 오픈소스 퀀트 트레이딩 프레임워크 — Python 기반
**핵심:** CTA 전략, 알고리즘 트레이딩, 옵션 거래, 포트폴리오 관리 등 포괄적 트레이딩 기능. 중국 거래소(상해/심천/대련/정저우) 및 글로벌 거래소 연동. 이벤트 드리븐 엔진, 실시간 시장 데이터, 백테스팅, 라이브 트레이딩 모두 지원.
**우리 활용:** ★ Jongdari의 아키텍처 설계 참고. 특히 이벤트 드리븐 엔진과 리스크 관리 모듈 구조가 유용.

### 7. QuantConnect/Lean (⭐⭐ 18.7k) ★
**링크:** https://github.com/QuantConnect/Lean
**설명:** 알고리즘 트레이딩 엔진 — C# 기반, QuantConnect 플랫폼의 핵심
**핵심:** 크로스 플랫폼 알고리즘 트레이딩 엔진으로 주식/옵션/선물/암호화폐/FX 등 다양한 자산군 지원. Python과 C#으로 전략 작성 가능. 대규모 백테스팅, 실시간 트레이딩, 리스크 관리, 데이터 피드 통합. QuantConnect 클라우드에서 20년치 데이터 무료 사용.
**우리 활용:** ★ Jongdari 백테스팅 엔진 벤치마크로 활용. 데이터 처리 파이프라인과 전략 실행 엔진 설계 참고.

### 8. AI4Finance-Foundation/FinGPT (⭐⭐ 19.9k) ★
**링크:** https://github.com/AI4Finance-Foundation/FinGPT
**설명:** 오픈소스 금융 LLM — 금융 분야 특화 파인튜닝 프레임워크
**핵심:** 금융 텍스트 데이터를 활용한 LLM 파인튜닝 플랫폼. 감성 분석, 뉴스 요약, 재무 보고서 분석, 시장 예측 등 금융 NLP 태스크 지원. 데이터 수집/전처리/파인튜닝/평가까지 엔드투엔드 파이프라인. LoRA 등 경량 튜닝 방식 채택.
**우리 활용:** ★ Jongdari의 뉴스 감성 분석/시장 인텔리전스 파이프라인에 직접 적용 가능. 금융 특화 LLM 구축의 실질적 참고.

---

## 🔬 과학 & 기술

### 9. JuliaLang/julia (⭐⭐ 48.7k)
**링크:** https://github.com/JuliaLang/julia
**설명:** 고성능 테크니컬 컴퓨팅 언어 — Python의 사용성과 C의 속도를 겸비
**핵심:** 동적 언어의 생산성과 정적 언어의 성능을 결합한 프로그래밍 언어. 과학 컴퓨팅, 머신러닝, HPC, 수치 해석에 특화. `juliaup`으로 설치 관리. VS Code/Emacs/Vim/Pluto.jl 등 다양한 개발 환경 지원. 활발한 Discourse/Zulip 커뮤니티.
**우리 활용:** 대규모 수치 계산/백테스팅 엔진 성능 최적화에 Julia 고려 가능.

### 10. Future-House/paper-qa (⭐⭐ 8.4k) ★
**링크:** https://github.com/Future-House/paper-qa
**설명:** 과학 문서 Q&A를 위한 고정밀 RAG 시스템 — 인용 기반 응답 생성
**핵심:** Agentic RAG 접근법으로 LLM 에이전트가 반복적으로 질의를 개선하고 인용과 함께 근거 있는 답변 생성. Semantic Scholar, Crossref, Unpaywall에서 메타데이터(인용 수, 철회 확인, 저널 품질) 자동 수집. PDF, 텍스트, Office 문서, 소스 코드까지 검색 인덱싱. 모든 LiteLLM 제공자 및 임베딩 모델 지원. v5(PaperQA2)는 과학 Q&A에서 초인간 성능 주장.
**우리 활용:** ★ Hermes가 논문/리포트를 분석할 때 활용. 과학/금융 문서 기반 Q&A에 강력함.

### 11. sympy/sympy (⭐⭐ 14.6k)
**링크:** https://github.com/sympy/sympy
**설명:** 순수 Python으로 작성된 컴퓨터 대수 시스템 (CAS)
**핵심:** 기호 계산, 미적분, 방정식 풀이, 급수 전개, 행렬 연산 등 수학적 연산 지원. 외부 의존성 없이 pure Python만으로 동작. `isympy` 콘솔로 대화형 사용 가능. 2005년부터 개발, PeerJ Computer Science (2017)에 게재됨.
**우리 활용:** 파생상품 가격결정/리스크 측정에서 기호 수학이 필요할 때 의존성 없이 사용 가능.

### 12. astropy/astropy (⭐⭐ 5.1k)
**링크:** https://github.com/astropy/astropy
**설명:** 천문학을 위한 Python 핵심 라이브러리 — 커뮤니티 주도
**핵심:** 좌표계, FITS 파일 처리, 단위/상수, 천체 역학, 통계, 데이터 시각화 등 천문학 특화 도구. NumFOCUS 후원, BSD 라이선스. 활발한 Slack/Discourse 커뮤니티.
**우리 활용:** 좌표 계산, 시간 변환, 고급 통계 라이브러리는 금융 시계열 분석에도 간접 활용 가능.

### 13. Stellarium/stellarium (⭐⭐ 9.6k)
**링크:** https://github.com/Stellarium/stellarium
**설명:** 실시간 3D 플라네타리움 — 자유 소프트웨어
**핵심:** 맨눈/쌍안경/망원경 관측 모드를 지원하는 리얼리스틱 3D 밤하늘 렌더링. 별/행성/성운/은하까지 실제 천체 데이터 기반. Windows/macOS/Linux 크로스 플랫폼. OpenGL 가속.
**우리 활용:** 천문학 지식이나 데이터 시각화가 필요한 프로젝트에 교육용/참고용.

---

## 🧠 철학 & 인문

### 14. hackerkid/Mind-Expanding-Books (⭐⭐ 13.7k)
**링크:** https://github.com/hackerkid/Mind-Expanding-Books
**설명:** 마음을 확장하는 책 추천 큐레이션 — 철학/역사/경제/심리/과학/소설 전방위
**핵심:** 20+ 카테고리로 분류된 엄선 도서 목록. 스타트업(Shoe Dog, Zero to One), 철학/심리(Man's Search for Meaning, Meditations, Atomic Habits), 전기/자서전, 역사, 과학/의학, 논리/문제해결, 정치, 경제, 젠더/섹슈얼리티, 교육, 소설(고전/판타지/SF/공포) 등. 각 도서는 Goodreads 평점과 출판년도 포함.
**우리 활용:** 트레이딩 외적 통찰(행동경제학, 심리학, 역사)이 필요한 독서 로드맵으로 활용.

---

## 📚 기타 지식

### 15. modelscope/modelscope (⭐⭐ 8.9k)
**링크:** https://github.com/modelscope/modelscope
**설명:** Model-as-a-Service 플랫폼 — 다양한 AI 모델의 통합 제공
**핵심:** NLP/CV/음성/멀티모달 등 다양한 도메인의 AI 모델을 표준화된 인터페이스로 제공. 모델 탐색/다운로드/추론/파인튜닝을 한 곳에서 처리. 중국 알리바바 주도.
**우리 활용:** Hermes의 모델 레이어 옵션으로 검토 가능 (Hugging Face 보완).

### 16. stdlib-js/stdlib (⭐⭐ 5.8k)
**링크:** https://github.com/stdlib-js/stdlib
**설명:** JavaScript/TypeScript용 표준 수치 라이브러리 — 과학 컴퓨팅
**핵심:** 통계, 수학, 과학 컴퓨팅, 수치 해석을 위한 JS/TS 라이브러리. Python의 NumPy/SciPy 역할을 JS 생태계에서 수행. 웹 브라우저와 Node.js 모두 지원.
**우리 활용:** 웹 기반 대시보드에서 금융/통계 계산이 필요할 때 활용 가능.

---

## 📊 분야별 통계

| 분야 | GitHub 리포 수 | 5k+ 스타 리포 |
|------|--------------|-------------|
| 💰 Finance | 3,000+ | 34 |
| 📈 Economics | 2,317 | 3 |
| 🔬 Science | 3,872 | 10 |
| 🧠 Philosophy | 1,076 | 1 |
| 📜 History | 2,878 | 13 (대부분 도구) |
| 🌍 Culture | 632 | 2 |

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
