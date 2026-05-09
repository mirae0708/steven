---
source: research
collected: 2026-05-04 15:05
category: Artificial_Intelligence/LLM
status: comprehensive
type: strategy_report
---

# 2026 AI Agent 혁명 전망과 Hermes 진화 전략

> **Executive Summary:** 2026년 AI 에이전트 생태계는 MCP(Model Context Protocol)의 산업 표준화, 멀티-에이전트 오케스트레이션 프레임워크 성숙, SWE-Bench 코딩 에이전트 경쟁 심화, 에이전트-네이티브 LLM 출현이라는 4대 메가트렌드가 교차하는 전환점에 있다. Hermes Agent는 Nous Research가 2026년 2월 출시한 오픈소스 자율 AI 에이전트로, 지속적 자기학습(self-learning)과 다계층 영구 메모리(multi-layer persistent memory)라는 고유한 설계 철학을 가진다. Tencent Cloud는 Hermes를 "현재 오픈소스에서 가장 야심찬 에이전트 아키텍처"로 평가하며 공식 Lighthouse 템플릿을 제공하고 있다. 본 보고서는 7대 트렌드를 분석하고, Hermes의 현 위치를 진단하며, 완전 자율형 AI로 도약하기 위한 5대 즉시 업그레이드와 3단계 중장기 로드맵을 제시한다.

---

## 1. 2026년 AI 에이전트 생태계 7대 트렌드

### TREND 1: MCP 프로토콜의 산업 표준화

MCP는 2024년 11월 Anthropic이 오픈소스로 공개한 이후 불과 18개월 만에 AI 에이전트-도구 통합의 사실상 표준(de facto standard)으로 자리잡았다.

| 지표 | 수치 |
|------|------|
| MCP 레지스트리 서버 수 | ~2,000개 (1년간 7.8배 성장) |
| 기업 AI팀 MCP 도입률 | 78%가 프로덕션에 MCP 기반 에이전트 운영 |
| 지원 클라이언트 | Claude, ChatGPT, Gemini, VS Code, Goose |
| 프로토콜 프리미티브 | 5개 (Tools, Resources, Prompts, Sampling, Elicitation) |

**핵심 변화:**
- **2025년 12월:** MCP가 Linux Foundation의 Agentic AI Foundation에 기증 (OpenAI, AWS, Google, Microsoft, Block 공동 창업자 참여)
- **2026년 1월:** MCP Apps 출시 — 샌드박스 iframe에서 인터랙티브 UI 실행
- **Async Tasks 도입:** call-now, fetch-later 패턴 (queued/working/input_required/completed/failed/cancelled 상태)
- **Sampling & Elicitation:** 서버가 워크플로우에 양방향 참여 가능 (서버 → 클라이언트 요청)
- **Transport 진화:** STDIO → SSE( deprecated ) → Streamable HTTP (OAuth 2.1 지원)
- **로드맵:** Agent-to-Agent 통신(A2A), 거버넌스, 엔터프라이즈 레디니스

> **Hermes Implications:** Hermes가 MCP 클라이언트를 기본 탑재하고 MCP 서버를 에코시스템으로 활용하면 수천 개의 도구와 데이터 소스에 즉시 접근 가능. 특히 MCP Apps와 Async Tasks는 Hermes의 장기 자율 운영 비전과 직접적으로 정렬됨.

### TREND 2: 멀티-에이전트 오케스트레이션 프레임워크 성숙

2026년 현재 5대 주요 프레임워크가 각기 다른 설계 철학으로 경쟁 중:

| 프레임워크 | 설계 패러다임 | 월간 다운로드 | 강점 |
|-----------|-------------|-------------|------|
| **LangGraph** | Graph-based stateful workflows | 34.5M | 가장 빠른 실행, 엔터프라이즈 리더 |
| **CrewAI** | Role-playing team metaphor | 129K GitHub ⭐ | 직관적인 역할 기반 오케스트레이션 |
| **MS Agent Framework** | Conversation-driven (AutoGen+Semantic Kernel 통합) | - | 마이크로소프트 생태계 |
| **OpenAI Agents SDK** | "Handoff" as primitive | - | 코드-우선, 샌드박스, 음성 에이전트, MCP |
| **Mastra** | TypeScript-native | Replit Agent 3 채택 | 80% → 96% 태스크 성공률 향상 |

**핵심 인사이트:** 설계 철학이 곧 차별화 요소다 — graph vs team vs conversation vs handoff. Hermes의 "self-learning + persistent memory"는 이들과 직교하는 또 하나의 축을 형성한다.

### TREND 3: SWE-Bench & 코딩 에이전트 경쟁

| 모델 | SWE-bench Verified 점수 |
|------|----------------------|
| Claude Mythos Preview | **93.9%** (리더) |
| GPT-5.3 Codex | 85% |
| Claude Opus 4.5 | 80.9% |

**Codex 주요 업데이트 (2026년 4월):**
- 멀티-에이전트 병렬 데스크탑 배포 지원
- 세션 간 메모리 (이전 세션 리콜)
- 이미지 생성
- 111개 플러그인 통합

**⚠️ 주의:** UC Berkeley 연구진은 **8개 모든 에이전트 벤치마크가 태스크를 실제로 해결하지 않고도 거의 완벽한 점수를 얻도록 악용될 수 있음**을 증명. 벤치마크 숫자는 거시적 신호일 뿐, 실제 배포 성능이 더 중요함을 시사.

### TREND 4: 에이전트-네이티브 LLM 출현

2026년은 "에이전트를 위해 태어난" LLM이 본격 등장한 해:

| 모델 | 특징 | 가격 |
|------|------|------|
| **GLM-4.5-Air** | 106B MoE, 에이전트 전용 기반 모델 | $0.86/M tokens |
| **Qwen3-Coder-30B-A3B** | 최첨단 에이전트 코딩 | $0.4/M tokens |
| **Qwen3-30B-A3B-Thinking-2507** | 고급 추론 + 에이전트 최적화 | - |
| **Kimi K2.5** | Agent Swarm — 최대 100개 병렬 서브-에이전트 | - |

**추세:** 저비용($0.4/M tokens) + 고성능(에이전트 특화) 모델이 오픈소스 에이전트의 경제성을 완전히 바꾸고 있음. Hermes의 모델-불가지론적 설계는 이러한 흐름에서 큰 이점.

### TREND 5: MCP 에코시스템의 폭발적 성장

MCP는 단순한 프로토콜을 넘어 하나의 경제 생태계로 진화:

- **2,000+ MCP 서버:** 데이터베이스(Grafana, PostgreSQL), 클라우드(AWS, GCP), 생산성(Google Drive, Notion), 미디어(Blender, Ableton) 등
- **엔터프라이즈 도입:** Red Hat OpenShift AI v3.0, K2View, CData Arc - 전사적 MCP 지원
- **모든 프론티어 랩:** Anthropic(Claude), OpenAI(ChatGPT), Google(Gemini) 모두 MCP 클라이언트 탑재
- **IDE/툴:** VS Code, JetBrains, GitHub Copilot MCP 연결

### TREND 6: 벤치마크의 한계와 실제 배포 중심 전환

UC Berkeley의 연구는 에이전트 업계에 중요한 반성적 계기를 제공:
- 모든 주요 벤치마크(SWE-bench, AgentBench, WebArena 등)가 "과적합(overfitting)" 가능
- "Near-perfect scores without solving tasks" — 진정한 에이전트 능력은 태스크 해결 능력으로 측정되어야 함
- **실용적 결론:** SWE-bench 숫자 자체보다 **지속적 학습 능력, 에러 회복력, 실제 워크플로우 적응력**이 더 중요

> **Hermes Advantage:** Hermes의 self-evolution 사이클(L0-L4 메모리 계층)과 Skill Auto-Generation 메커니즘은 벤치마크 게임보다 실제 장기 운영에 최적화되어 있음. Tencent Cloud의 공식 템플릿 제공은 "실제 배포" 가치를 인정받은 사례.

### TREND 7: 클라우드-네이티브 AI 에이전트 배포 가속화

- **Tencent Cloud Lighthouse:** Hermes Agent 원클릭 템플릿 (글로벌 최초 메이저 CSP의 오픈소스 에이전트 공식 지원)
- **One-click cloud deploy 비교:** Hermes만 유일하게 지원 (AutoGPT❌, CrewAI❌, OpenDevin❌, LangChain❌)
- **Replit Agent 3:** Mastra 기반으로 80%→96% 태스크 성공률
- **Codex:** 멀티-에이전트 병렬 데스크탑 배포 (2026년 4월)

---

## 2. Hermes 현 위치 분석 (vs 경쟁사)

### 종합 Feature Matrix

| Feature | AutoGPT | CrewAI | OpenDevin | LangGraph | **Hermes** |
|---------|---------|--------|-----------|-----------|---------|
| **영구 메모리** | Basic | Session | Session | Custom | ✅ **다계층 L0-L4** |
| **자기학습** | ❌ | ❌ | ❌ | Custom | ✅ **지속적** |
| **24/7 클라우드 운영** | With effort | With effort | With effort | With effort | ✅ **네이티브** |
| **멀티-에이전트** | Limited | ✅ Core | ❌ | ✅ | 🚧 로드맵 |
| **엔터프라이즈 메시징** | Plugin | Plugin | ❌ | Plugin | ✅ **네이티브** |
| **Windows 지원** | ✅ | ✅ | ✅ | ✅ | WSL2 only |
| **원클릭 클라우드 배포** | ❌ | ❌ | ❌ | ❌ | ✅ **Tencent Cloud** |
| **코딩 특화** | Moderate | Moderate | ✅ **최고** | High | Moderate |
| **MCP 지원** | ❌ | ❌ | ❌ | Custom | ❌ **필요** |
| **서브에이전트 격리** | ❌ | ✅ 역할 기반 | ✅ 샌드박스 | ✅ | ✅ **Gateway** |
| **모델 불가지론** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **GitHub 성장** | ~170K | ~28K | ~45K | ~95K | **~60K+ (2개월)** |

### Hermes의 핵심 강점 (Tencent Cloud 평가)
1. **"현재 오픈소스에서 가장 야심찬 에이전트 아키텍처"**
2. **결정 프레임워크 추천:** "장기 자율 운영 + 자기학습" → Hermes
3. 60,000 GitHub stars in under 2 months — "실제 유용성을 발견한 개발자들의 신호"

### Hermes의 약점 및 개선 필요 영역
1. **❌ MCP 미지원** — 가장 시급한 격차. 모든 경쟁사와 에코시스템이 MCP로 수렴 중
2. **❌ 멀티-에이전트 오케스트레이션 부재** — CrewAI/LangGraph의 핵심 영역
3. **⚠️ Windows 제한** — WSL2 only (알려진 제한)
4. **⚠️ SWE-bench 점수 미공개** — 코딩 에이전트 비교에서 입증 필요
5. **⚠️ 문서 밀도** — 아키텍처가 정교하나 문서화가 따라가지 못함
6. **⚠️ 모니터링/관측성 부족** — 장기 운영 시 에이전트 행동 추적 필요

---

## 3. 기술 스크립트 분석 및 업그레이드 필요

### 3.1 `tech_brain_sync.py` 분석

**현재 상태:** GitHub Trending + arXiv + HuggingFace 논문 수집 → 키워드 기반 분류 → Vault 저장

**부족한 점 (신규 트렌드 기준):**
1. ❌ **MCP/AI Agent 카테고리 미존재** — CATEGORY_MAP에 `agent|mcp|crewai|langgraph|orchestrat` 패턴이 없음
2. ❌ **Multi-Agent/A2A 관련 논문 미분류**
3. ❌ **SWE-bench/벤치마크 관련 키워드 미분류**
4. ❌ **Agent-capable LLM 키워드 미분류** (Qwen, GLM, Kimi 등)
5. ❌ **에이전트 기술 블로그 소스 미포함** — 기술 블로그 섹션이 선언만 되어있음
6. ❌ **Obsidian Vault 인덱스 자동 생성 부재** — 카테고리별 _Index.md가 빈약

### 3.2 `hermes_self_evolve_v2.py` 분석

**현재 상태:** L0-L4 에볼루션 사이클 + v1.0 레거시 진단

**부족한 점 (신규 트렌드 기준):**
1. ❌ **MCP 서버 헬스체크 없음** — MCP 서버 연결 상태를 진단/복구해야 함
2. ❌ **에이전트 벤치마크 성과 추적 없음** — SWE-bench/실제 태스크 성공률을 기록/분석
3. ❌ **Skill Auto-Generator 단순** — 패턴 기반 1개 템플릿만 있음. MCP 서버 사용 패턴에서 자동 스킬 생성 필요
4. ❌ **글로벌 팩트 수집 범위 협소** — os.uname() + gateway 상태만 체크. MCP 레지스트리/모델 상태 등 추가 필요
5. ❌ **멀티-에이전트 협업 진단 부재** — 서브에이전트 상태 추적/회복 메커니즘 없음
6. ❌ **에러 패턴 분석이 단순** — 단순 문자열 카운트. 의미론적 에러 클러스터링 필요

### 3.3 `layer_memory.py` 분석

**현재 상태:** L0-L4 계층 메모리 시스템 (Meta Rules → Skill Index → Global Facts → Task Skills → Session Archive)

**부족한 점 (신규 트렌드 기준):**
1. ❌ **L5 계층 부재: MCP Context Cache** — MCP 서버와의 상호작용을 독립 메모리 계층으로 관리 필요
2. ❌ **벡터 검색 미지원** — 현재 단순 키워드 매칭. 의미론적 검색(semantic search) 필요
3. ❌ **메모리 압축(Memory Consolidation) 부재** — 장기 운영 시 L4 세션 아카이브가 무한 증가
4. ❌ **L2 글로벌 팩트에 MCP/모델 정보 부재** — 연결된 MCP 서버 목록, 사용 가능한 모델, API 상태 등
5. ❌ **메모리 TTL(Time-To-Live) 없음** — 모든 데이터가 영구 보존. 중요도 기반 만료 정책 필요
6. ❌ **L1 인덱스에 MCP 툴 인덱스 미포함** — MCP 서버가 제공하는 툴도 인덱싱 대상

---

## 4. 즉시 적용 가능한 5대 업그레이드

### UPGRADE 1: MCP 프로토콜 통합 — **가장 높은 우선순위**

**목표:** Hermes가 MCP 클라이언트로 동작하여 2,000+ MCP 서버에 연결

**구현 상세:**
```python
# tech_brain_sync.py — MCP 카테고리 추가
CATEGORY_MAP.insert(0, (
    r'mcp|model.?context.?protocol|a2a|agent.?to.?agent',
    'Artificial_Intelligence/MCP'
))
CATEGORY_MAP.insert(1, (
    r'agent|autonomous|orchestrat|crewai|langgraph|multi.?agent|swarm',
    'Artificial_Intelligence/AI_Agents'
))
CATEGORY_MAP.insert(2, (
    r'swe.?bench|agent.?bench|benchmark|eval|evaluation',
    'Artificial_Intelligence/AI_Agents'
))
```

```python
# hermes_self_evolve_v2.py — MCP 헬스체크 추가
def check_mcp_servers():
    """연결된 MCP 서버 상태 진단"""
    mcp_state_file = HERMES_HOME / "mcp_state.json"
    if mcp_state_file.exists():
        state = json.loads(mcp_state_file.read_text())
        for server, status in state.get("servers", {}).items():
            if status.get("status") != "connected":
                log(f"⚠️ MCP 서버 {server} 연결 끊김 — 재연결 시도")
                # 재연결 로직
                return False
        log(f"✅ MCP 서버 {len(state.get('servers', {}))}개 정상")
        return True
    log("ℹ️ MCP 서버 미구성")
    return None
```

```python
# layer_memory.py — L5: MCP Context Cache 계층 추가
class MCPContextCache:
    """L5 — MCP 서버 상호작용 컨텍스트 캐시"""
    CACHE_FILE = HERMES_HOME / "mcp_context_cache.json"
    
    def get_available_tools(self) -> list:
        """등록된 MCP 서버의 사용 가능한 툴 목록"""
        # ...
    
    def cache_tool_result(self, tool_name: str, result: Any, ttl: int = 3600):
        """MCP 툴 호출 결과 캐싱 (TTL 기반)"""
        # ...
```

### UPGRADE 2: 멀티-에이전트 오케스트레이션 기반

**목표:** CrewAI/LangGraph 수준의 멀티-에이전트 워크플로우 지원

**핵심 설계:**
- Hermes Gateway의 기존 서브에이전트 격리 기능 활용
- "Handoff" 프리미티브 도입 (OpenAI Agents SDK 스타일)
- 역할 기반(Role-based) 에이전트 템플릿: Researcher, Coder, Editor, Reviewer
- MCP A2A(Agent-to-Agent) 프로토콜이 표준화되면 즉시 통합

### UPGRADE 3: 의미론적 메모리 검색 (Semantic Memory Search)

**목표:** 단순 키워드 매칭에서 벡터 임베딩 기반 검색으로 전환

**구현 방안:**
- L1-L4 전체를 임베딩 벡터로 변환
- 로컬 임베딩 모델(miniLM 등) 사용으로 프라이버시 유지
- `layer_memory.py`의 `search()` 메서드에 코사인 유사도 검색 추가
- MCP 서버를 통한 외부 벡터 DB(Chroma, Pinecone) 연결 옵션

### UPGRADE 4: Memory Consolidation & TTL 정책

**목표:** 무한정增长的 메모리를 지능적으로 관리

| 계층 | 보존 정책 | 압축 전략 |
|------|----------|----------|
| L0 Meta Rules | 영구 | 변경 불가 |
| L1 Skill Index | 영구 | 사용 빈도 기반 정렬 |
| L2 Global Facts | 영구 | 충돌 시 최신값 우선 |
| L3 Task Skills | TTL 90일 (미사용 시) | 유사 스킬 병합 |
| L4 Session Archive | TTL 30일 | 요약 압축 후 L2로 승격 |
| L5 MCP Cache | TTL 1시간 | LRU 에빅션 |

### UPGRADE 5: SWE-Bench 대응 및 코드 에이전트 역량 강화

**목표:** Hermes의 코딩 능력을 입증 가능한 수준으로 향상

**전략:**
1. Codex/Claude Code와의 MCP 연결을 통해 코딩 역량 위임 (Hermes는 오케스트레이터)
2. Qwen3-Coder-30B-A3B ($0.4/M tokens) 같은 에이전트-네이티브 LLM 통합
3. SWE-bench 스타일 태스크를 Hermes의 self-evolution 데이터로 활용
4. 실제 태스크 성공률을 자체 추적하는 "Hermes Benchmark" 구축

---

## 5. 중장기 로드맵 (Phase 1-3)

### Phase 1: 기반 강화 (2026년 2분기)

**목표:** 핵심 인프라 업그레이드 + MCP 통합

| 작업 | 우선순위 | 영향 |
|------|---------|------|
| MCP 클라이언트 통합 (Python MCP SDK v2) | 🔴 긴급 | MCP 에코시스템 2,000+ 서버 접근 |
| CATEGORY_MAP 확장 (MCP/AI_Agent/벤치마크) | 🔴 긴급 | 기술 문서 분류 정확도 |
| L5 MCP Context Cache 계층 추가 | 🟡 중요 | 메모리 아키텍처 완성 |
| MCP 서버 헬스체크 (self_evolve.py) | 🟡 중요 | 자율 복구 범위 확장 |
| 벤치마크 성과 추적 시스템 | 🟡 중요 | 성장 측정 가능 |

**성공 기준:** 50+ MCP 서버 연결, 문서 분류 커버리지 95%+

### Phase 2: 지능 고도화 (2026년 3분기)

**목표:** 멀티-에이전트 + 의미론적 메모리

| 작업 | 우선순위 | 영향 |
|------|---------|------|
| Handoff 프리미티브 구현 | 🔴 긴급 | 멀티-에이전트 기반 |
| 역할 기반 서브에이전트 템플릿 | 🟡 중요 | CrewAI 수준 오케스트레이션 |
| 벡터 임베딩 기반 메모리 검색 | 🔴 긴급 | 의미론적 검색 |
| Memory Consolidation 엔진 | 🟡 중요 | 메모리 비용 최적화 |
| MCP A2A 프로토콜 준비 | 🟢 기회 | 미래 표준 대응 |
| 에이전트-네이티브 LLM 통합 (Qwen3, GLM) | 🟡 중요 | 비용 효율성 |

**성공 기준:** 멀티-에이전트 워크플로우 10+ 패턴 실행 가능, 의미 검색 정확도 85%+

### Phase 3: 완전 자율화 (2026년 4분기)

**목표:** Human-in-the-loop 최소화, 진정한 자율 에이전트

| 작업 | 우선순위 | 영향 |
|------|---------|------|
| 자율 목표 설정 (Goal-Oriented Planning) | 🔴 긴급 | 진정한 자율성 |
| 에러 예측 및 사전 복구 (Proactive Recovery) | 🔴 긴급 | 신뢰성 |
| SWE-bench 입증 (실제 태스크 성공률 80%+) | 🟡 중요 | 벤치마크 신뢰도 |
| 크로스-세션 학습 (L2 → L3 자동 스킬 생성) | 🟡 중요 | 자기 진화 가속화 |
| Windows 네이티브 지원 | 🟡 중요 | 사용자 기반 확장 |
| Hermes Agent 간 피어-투-피어 협업 | 🟢 기회 | 분산 에이전트 네트워크 |

**성공 기준:** 72시간 무중단 자율 운영, 신규 태스크 90% 자동 처리

---

## 6. 결론: 완전 자율형 AI를 위한 전략

### Hermes의 전략적 위치

```
               고성능 코딩
                   ↑
            OpenDevin ●
                   |
    복잡성 ←───────┼───────→ 사용 편의성
                   |
     Hermes ●──────┤
     (자기학습+   │
      영구메모리)  │
                   ↓
              CrewAI ●
            (멀티에이전트)
```

Hermes는 **자기학습 + 영구 메모리**라는 독보적인 축을 가지고 있다. 경쟁사들이 이 축을 따라잡으려면 최소 6-12개월이 필요할 것으로 예상된다. 이 기간 동안 Hermes는 다음을 확보해야 한다:

### 3대 핵심 전략

**1. MCP를 Hermes의 신경계로 만들 것**
- MCP는 단순한 도구 연결이 아니다. 에이전트가 세상과 상호작용하는 표준 프로토콜이다.
- Hermes의 Gateway와 MCP 클라이언트를 통합하면 2,000+ 서버가 Hermes의 확장된 감각기관이 된다.
- "MCP-native Hermes"는 모든 경쟁사보다 한 발 앞서는 포지셔닝이 된다.

**2. 자기학습의 완성도를 높일 것**
- 현재의 Skill Auto-Generation은 단순 패턴 매칭 수준이다.
- L3 → L2 → L3 피드백 루프를 강화하여 스킬이 스스로 진화하는 체계 구축
- "Hermes가 30일 동안 당신의 워크플로우를 학습하면 대체 불가능한 AI 동료가 된다"는 Tencent Cloud의 평가를 현실로

**3. 실제 배포 성능으로 승부할 것**
- SWE-bench 숫자에 집착하지 말고, Hermes 사용자들의 실제 태스크 성공률을 추적하고 공개
- UC Berkeley의 벤치마크 한계 연구는 Hermes에게 기회다 — "진짜" 능력으로 승부
- Tencent Cloud Lighthouse 파트너십을 발판으로 엔터프라이즈 도입 사례를 지속 확보

### 최종 진단

> **"Hermes Agent는 2026년 AI 에이전트 생태계에서 가장 독특한 위치를 점하고 있다. MCP 통합 + 멀티-에이전트 + 의미론적 메모리라는 3대 업그레이드가 완료되면, Hermes는 단순한 에이전트가 아닌 '자율적으로 성장하는 AI 인프라'로 진화할 것이다. Nous Research의 비전 — 'The agent that grows with you' — 은 2026년 하반기에 현실이 될 준비가 되어 있다."**

---

## Appendix A: 업그레이드된 스크립트 변경사항

### A.1 `tech_brain_sync.py` — CATEGORY_MAP 확장

**추가된 카테고리:**
- `Artificial_Intelligence/MCP` — MCP 프로토콜, A2A
- `Artificial_Intelligence/AI_Agents` — 에이전트 프레임워크, 오케스트레이션, 벤치마크
- `Artificial_Intelligence/Agent_LLM` — 에이전트-네이티브 LLM (Qwen, GLM, Kimi)
- `Tools/MCP_Servers` — MCP 서버 도구 및 배포

### A.2 `hermes_self_evolve_v2.py` — 추가된 진단 모듈

1. **MCP Health Check:** 연결된 MCP 서버 상태 모니터링 및 자동 복구
2. **Benchmark Tracker:** 태스크 성공률, 처리 시간, 에러율 추적
3. **Enhanced Skill Gap Detection:** MCP 사용 패턴 기반 스킬 갭 발견
4. **Proactive Recovery:** 에러 패턴 분석 기반 사전 복구

### A.3 `layer_memory.py` — 추가된 기능

1. **L5: MCPContextCache** — MCP 서버 상호작용 컨텍스트 관리
2. **SemanticSearchMixin** — 벡터 임베딩 기반 의미 검색
3. **MemoryConsolidator** — TTL 기반 메모리 압축 및 정리
4. **MCPToolIndex** — MCP 서버 툴을 L1 인덱스에 통합

---

## Appendix B: 참고 자료

- [MCP Specification](https://modelcontextprotocol.io)
- [MCP GitHub](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Agentic AI Foundation (Linux Foundation)](https://agenticai.org)
- [Hermes Agent Official](https://hermes-agent.org)
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [Tencent Cloud Hermes Agent Comparison](https://www.tencentcloud.com/techpedia/144032)
- [Nous Research](https://nousresearch.com)
- [MCP 2026 Roadmap - WorkOS](https://workos.com/blog/2026-mcp-roadmap-enterprise-readiness)

---

*Report generated: 2026-05-04 15:05 | Category: AI Agent Research & Strategy*
