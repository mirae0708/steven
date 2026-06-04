---
tags: [hermes, harness, ai-agent, architecture, skill-design, multi-agent]
created: 2026-06-04
source: "Bloom AI - 하네스 100개 사례집 공유 (YouTube)"
related: [Hermes-Auto-Evolution, agent-harness, hermes-agent-skill-authoring]
---

# Harness → Hermes Agent 적용 가이드

## 개요

**Harness(하네스)** 는 Claude Code 생태계에서 AI 에이전트가 제멋대로 달리지 않게 **고삐(Harness)** 를 채우는 아키텍처 체계다. 이 문서는 revfactory/harness (+harness-100) 의 개념과 구조를 Hermes Agent 시스템에 매핑하여, Hermes에서도 동일한 수준의 멀티 에이전트 팀 아키텍처를 구현할 수 있도록 정리한다.

> **핵심 차이**: Claude Code의 Harness는 `.claude/agents/` + `.claude/skills/` 디렉토리 구조로 동작한다. Hermes Agent는 `~/.hermes/skills/` 에 스킬을 저장하고 `delegate_task` + `cronjob` + `kanban` 으로 멀티 에이전트를 구현한다. 개념은 동일하나 구현 방식이 다르다.

---

## 1. Harness 계층 구조 이해

### Claude Code 생태계의 6개 Harness 계층

Claude Code의 아키텍처는 6개 레이어로 구성된다. 각 레이어는 Harness를 구성하는 다른 책임을 가진다.

| 레이어 | 구성 요소 | 설명 | Hermes 대응 |
|--------|----------|------|-------------|
| **L0 — Core** | LLM 자체 (Claude) | 기본 언어 모델 | 모든 LLM Provider (DeepSeek, Claude, GPT 등) |
| **L1 — Agent Core** | Tool calling, 파일 편집, Bash 실행 | 에이전트 기본 동작 | `tools/` 디렉토리 — toolset registry |
| **L2 — Harness** | CLAUDE.md, Hooks, Permissions, Skills, MCP | 에이전트 제어/안전/지식 | `~/.hermes/skills/`, `config.yaml`, `approvals.*` |
| **L3 — Meta-Factory** | Agent Teams, Cross-Harness Workflow | 팀 아키텍처 설계 | `delegate_task()`, `kanban`, `trinity-orchestrator` |
| **L4 — Meta-Meta** | Harness가 Harness를 생성 | 자기 진화 | Hermes Curator + 자가 스킬 생성 |
| **L5 — Ecosystem** | 저장소, 공유, 표준 | 생태계 | `hermes skills browse`, skill hub |

### Harness의 3개 핵심 구성 요소

| 구성 요소 | 역할 | Hermes 대응 |
|-----------|------|-------------|
| **AGENTS.md / CLAUDE.md** | 전체 방향키 — 큰 그림, 규칙, 컨텍스트 | `AGENTS.md` (Hermes 자체 문서) + Session System Prompt |
| **Skills (스킬)** | 구체적인 작업 매뉴얼 — 트리거 + 절차 + 예시 | `~/.hermes/skills/` — SKILL.md 파일 |
| **Hooks** | 특정 상황에서 자동 발동되는 강제 규칙 | `config.yaml` approvals, tirith 보안 스캐너, cron pre/post hooks |
| **MCP / Connectors** | 도구 연결 — 외부 서비스 연동 | `hermes mcp` — 네이티브 MCP 클라이언트 |

---

## 2. Hermes Skill.md vs Harness Skill.md 비교

### Harness Skill.md 구조 (Claude Code)

```markdown
---
name: skill-name                     # 소문자, 하이픈만, 64자 이내
description: "..."                   # ★★★ 가장 중요 — 트리거 키워드
version: "1.0"
---

# Skill Name

## Instructions
- Why + How 중심 절차
- Step by Step 흐름

## Examples
- Input → Output 구체적 예시 2-3개

## Rules
- NEVER: 금지사항
- ALWAYS: 필수사항
```

### Hermes Skill.md 구조 (현재)

```markdown
---
name: skill-name
description: "..."
version: 2.1.0
author: ...
metadata:
  hermes:
    tags: [...]
---

# Skill Name

## 본문 내용
- 절차
- 명령어
- 주의사항
- 링크
```

### 주요 차이점 및 Hermes 적용 팁

| 항목 | Harness 방식 | Hermes 적용법 |
|------|-------------|---------------|
| **Description** | "이 키워드 나오면 무조건 사용" — 강력한 트리거 | 동일하게 적용. `skill_view(name)`으로 로드 |
| **Why + How** | 이유 설명 포함 → LLM 일반화 능력 향상 | Hermes에도 동일 적용 가능. 이유 포함할 것 |
| **500줄 제한** | Progressive Disclosure — references/로 분리 | Hermes도 동일. linked_files 기능 사용 |
| **Examples** | 구체적 Input→Output 2-3개 | Hermes에도 유효. 특히 툴 호출 예시 포함 |
| **Phase 구분** | Phase 1, Phase 2... 번호 매기기 | Hermes에도 유효 |
| **Quality Gate** | 에이전트 출력 검증 기준 포함 | Hermes에서는 `delegate_task` 결과 검증 시 사용 |

---

## 3. Harness 100 — 10개 도메인 × 100개 하네스

### 도메인 카테고리 (harness-100 기준)

| # | 카테고리 | 하네스 수 | 설명 | Hermes에 필요한 스킬 |
|---|----------|-----------|------|---------------------|
| 1 | Content Creation | 01-15 | 유튜브, 팟캐스트, 게임 내러티브, 웹툰 | youtube-content, baoyu-comic, songwriting |
| 2 | Software Dev | 16-30 | 풀스택, API, CI/CD, 보안, IaC | github-pr-workflow, systematic-debugging, TDD |
| 3 | Data & AI/ML | 31-42 | ML 실험, NLP, RAG/LLM, 디자인 시스템 | dspy, unsloth, axolotl, fine-tuning-with-trl |
| 4 | Business & Strategy | 43-55 | 스타트업, 시장조사, 가격, 재무모델 | culture-economy-synergy-intel, business-simulation-engine |
| 5 | Education | 56-65 | 언어튜터, 시험, 토론 | baoyu-comic, llm-wiki |
| 6 | Legal & Compliance | 66-72 | 계약, 특허, GDPR | - |
| 7 | Health & Lifestyle | 73-80 | 식단, 피트니스, 여행 | obsidian-private-health-chief |
| 8 | Communication & Docs | 81-88 | 기술문서, SOP, 제안서 | design-md, nano-pdf |
| 9 | Operations & Process | 89-95 | 채용, 온보딩, 감사, 조달 | legacy-automation-audit |
| 10 | Specialized | 96-100 | 부동산, e-commerce, ESG | - |

### 각 하네스의 표준 구성 (예: 01-youtube-production)

```
01-youtube-production/
├── .claude/
│   ├── CLAUDE.md                     # 프로젝트 개요
│   ├── agents/
│   │   ├── content-strategist.md     # 콘텐츠 전략가
│   │   ├── researcher.md             # 리서처
│   │   ├── script-writer.md          # 스크립트 작가
│   │   ├── visual-director.md        # 비주얼 디렉터
│   │   └── seo-optimizer.md          # SEO 최적화 담당
│   └── skills/
│       ├── orchestrator/
│       │   └── skill.md              # 팀 조율
│       ├── hook-writing/
│       │   └── skill.md              # 훅 작성 전문
│       └── thumbnail-psychology/
│           └── skill.md              # 썸네일 심리학
```

### 3-Layer Skill 시스템

| 레이어 | 목적 | 예시 | Hermes 적용 |
|--------|------|------|-------------|
| **Orchestrator** | 팀 조율, 워크플로우, 에러처리 | `youtube-production/skill.md` | `multi-llm-roundtable`, `trinity-orchestrator` |
| **Agent-Extending** | 도메인 지식으로 에이전트 전문성 증폭 | `hook-writing/skill.md` | 일반 스킬들 — 각각이 에이전트 확장 |
| **External** | 기존 외부 도구 | Gemini 이미지 생성, 웹 검색 | `native-mcp`, 외부 API 호출 |

---

## 4. 6가지 팀 아키텍처 패턴 (Harness → Hermes 매핑)

### 4.1 Pipeline (파이프라인)
**설명**: 순차적 의존 작업. A → B → C 순서로 실행.

**Harness 사용처**: 콘텐츠 제작 (리서치 → 글쓰기 → 리뷰)

**Hermes 적용**:
```python
# Hermes delegate_task로 sequential pipeline 구현
result1 = delegate_task(goal="Research topic X", ...)
result2 = delegate_task(goal=f"Write script based on: {result1}", ...)
result3 = delegate_task(goal=f"Review and polish: {result2}", ...)
```

### 4.2 Fan-out/Fan-in (병렬 + 병합)
**설명**: 병렬 독립 작업 후 결과 병합.

**Harness 사용처**: 코드 리뷰 (보안/성능/스타일 병렬 검토 → 통합 리포트)

**Hermes 적용**:
```python
# Hermes batch delegate_task
results = delegate_task(tasks=[
    {"goal": "Security review", ...},
    {"goal": "Performance review", ...},
    {"goal": "Style review", ...},
])
# 결과 병합 로직
```

### 4.3 Expert Pool (전문가 풀)
**설명**: 컨텍스트에 따라 필요한 전문가만 선택적 호출.

**Harness 사용처**: 다양한 질문에 맞는 전문가 에이전트 선택

**Hermes 적용**: `skill_view()`로 필요한 스킬만 로드. 조건부 delegate_task.

### 4.4 Producer-Reviewer (생산자-검토자)
**설명**: 생성 후 품질 검토. Quality Gate 포함.

**Harness 사용처**: 모든 콘텐츠 제작, 코드 작성

**Hermes 적용**:
```python
result = delegate_task(goal="Create X", ...)
review = delegate_task(goal=f"Review this: {result}", ...)
if review["quality"] < 85:
    # revision loop
    result = delegate_task(goal=f"Revise based on: {review}", ...)
```

### 4.5 Supervisor (감독관)
**설명**: 중앙 에이전트가 동적 작업 분배.

**Harness 사용처**: 복잡한 프로젝트 관리

**Hermes 적용**: `hermes-team-commander` 스킬이 이 역할. Orchestrator가 직접 작업 분배.

### 4.6 Hierarchical Delegation (계층적 위임)
**설명**: 탑다운 재귀적 위임. Orchestrator → Sub-Orchestrator → Worker.

**Harness 사용처**: 대규모 시스템 설계

**Hermes 적용**:
```
Orchestrator (메인 세션)
  └── Sub-Orchestrator A (delegate_task - orchestrator role)
        ├── Worker A1 (delegate_task - leaf role)
        ├── Worker A2 (delegate_task - leaf role)
        └── Worker A3 (delegate_task - leaf role)
  └── Sub-Orchestrator B
        └── ...
```

---

## 5. Harness 에러 복구 전략 (Hermes 매핑)

### 4단계 Recovery Level

| Level | 설명 | 허용 횟수 | Hermes 구현 |
|-------|------|-----------|-------------|
| Level 1 — Self | 동일 에이전트 Retry | 최대 2회 | delegate_task에 retry 로직 |
| Level 2 — Peer | 관련 에이전트 도움 요청 | 2회 | 다른 스킬 로드 + 재시도 |
| Level 3 — Orchestrator | 직접 분석 후 재할당 | — | 메인 세션이 직접 처리 |
| Level 4 — Human | 사용자 개입 | Critical Error 발생 시 | `clarify()` 툴로 사용자 확인 |

### Error Object 표준 형식

```json
{
  "error_type": "QualityGateFailure | InputMissing | LogicError | Timeout",
  "severity": "Low | Medium | High | Critical",
  "description": "상세 설명",
  "recovery_suggestion": "구체적 해결 제안",
  "retry_count": 1
}
```

### 품질 개선 효과 (A/B 테스트 결과)

Harness 공식 연구 결과 (n=15, author-measured):

| 메트릭 | Without Harness | With Harness | 개선 |
|--------|----------------|--------------|------|
| 평균 품질 점수 | 49.5 | 79.3 | **+60%** |
| Win Rate | — | — | **100%** (15/15) |
| 출력 분산 | — | — | **-32%** |

> 과제 복잡도가 높을수록 개선 효과 큼: Basic +23.8, Advanced +29.6, Expert +36.2

---

## 6. Hermes에 Harness 적용 — 구체적 실행 계획

### Phase 1: Harness 메타 스킬 생성
Hermes에 "하네스 구성해줘" 라는 프롬프트 하나로 전문 에이전트 팀을 구성하는 메타 스킬 생성.

```markdown
# 하네스 메타 스킬 (harness-builder)
트리거: "하네스 구성", "harness build", "에이전트 팀 만들어줘"
동작:
  1. 사용자 도메인 분석
  2. 적합한 팀 아키텍처 패턴 선택 (6가지 중)
  3. 필요한 스킬 목록 산출
  4. team-workflow skill 생성
```

### Phase 2: 멀티 에이전트 워크플로우 스킬 생성
각 도메인별로 다음과 같은 구조의 Orchestrator 스킬 생성:

- Phase 정의 (Phase 0 ~ Phase N)
- Hand-off 규칙 (입력/출력 명세)
- Quality Gate (점수 기준)
- Error Recovery (4단계)
- Status Board (진행 상황 테이블)

### Phase 3: 기존 Hermes 스킬과 Harness 스킬 통합
Hermes에 이미 있는 스킬들(220+개)을 Harness 체계로 재구성:

- 각 스킬에 명확한 **트리거 키워드** 부여
- **Phase 구분** 추가
- **Error Recovery** 섹션 추가
- **Quality Gate** 기준 추가

### Phase 4: Hermes 고유 기능 활용
Claude Code에는 없는 Hermes만의 장점을 Harness에 통합:

| Hermes 고유 기능 | Harness 적용 |
|------------------|-------------|
| Persistent Memory | Harness 간 컨텍스트 공유 |
| Cronjob | 정기적 하네스 실행 (매주 시장 분석 등) |
| Session Search | 이전 하네스 결과 참조 |
| Profiles | 도메인별 분리된 하네스 환경 |
| Kanban | 멀티 하네스 작업 큐 관리 |
| Telegram/Discord | 하네스 결과 알림 |

---

## 7. 실전 적용 예시 — Hermes용 유튜브 콘텐츠 하네스

### 에이전트 팀 구성

| 역할 | 책임 | 기존 Hermes 스킬 |
|------|------|------------------|
| **Orchestrator** | 작업 흐름 관리, 최종 출력 책임 | (새로 생성) |
| **Content Strategist** | 주제 선정, SEO 키워드, 콘텐츠 전략 | `culture-economy-synergy-intel` |
| **Researcher** | 자료 조사, 최신 트렌드, 팩트 체크 | `youtube-content`, `web_search` |
| **Script Writer** | 훅, 본문, CTA 스크립트 작성 | `baoyu-comic` (스토리텔링) |
| **Visual Director** | 썸네일, 영상 구성 지시 | `pixel-art`, `sketch` |
| **SEO & Growth** | 제목, 설명, 태그, 성장 전략 | `blogwatcher` |

### 워크플로우 (Orchestrator Skill에 정의)

```
Phase 0: Initialization — 사용자 요청 분석
Phase 1: Strategy — Content Strategist (주제/키워드)
Phase 2: Research — Researcher (자료/팩트) [Parallel 가능]
Phase 3: Creation — Script Writer + Visual Director
Phase 4: Review — Quality Gate (점수 < 85면 Phase 3으로)
Phase 5: Optimization — SEO & Growth (제목/설명/태그)
Phase 6: Final Approval — Orchestrator 종합 검토
```

### Communication Protocol

```json
{
  "message_id": "msg_001",
  "phase": "Phase 3: Script Writing",
  "from": "Orchestrator",
  "to": "Script Writer",
  "task": "유튜브 스크립트 작성",
  "input_data": {
    "topic": "Hermes Agent 하네스 활용법",
    "research_summary": "... (요약)",
    "key_points": ["트리거", "Quality Gate", "Error Recovery"]
  },
  "requirements": {
    "style": "실전 중심",
    "length": "1200~1500자",
    "must_include": ["훅", "CTA", "실전 예시"]
  },
  "quality_gate": {
    "min_score": 85,
    "check_items": ["정확성", "매력도", "SEO 최적화"]
  }
}
```

---

## 8. 권장 스킬 구조 템플릿 (Hermes용)

```markdown
---
name: domain-orchestrator-workflow
description: "이 스킬은 [도메인] 작업을 위한 멀티 에이전트 워크플로우를 정의한다. '하네스 구성', '[도메인] 작업 시작', '팀 가동' 등의 키워드가 트리거다."
version: 1.0.0
---

# [도메인] Orchestrator Workflow

## Instructions

### Phase 0: Initialization
- 사용자 요청 분석 및 목표 정의
- 필요한 에이전트 결정

### Phase 1: [첫 번째 단계]
- [에이전트 이름]에게 작업 위임
- 입력: [명세]
- 출력: [예상 결과물]
- Quality Gate: [점수 기준]

### Phase 2: [두 번째 단계]
...

### Phase N: Final Approval
- 모든 결과물 종합 검토
- 사용자에게 최종 제출

## Error Recovery

### Error Type: QualityGateFailure
- Severity: Medium
- Action: 구체적 피드백과 함께 동일 에이전트에게 Revision 요청 (최대 2회)
- Escalation: 2회 실패 시 Orchestrator 직접 처리

### Error Type: InputMissing
- Severity: Low
- Action: 이전 에이전트에게 Delta Request

### Error Type: CriticalError
- Severity: Critical
- Action: 즉시 사용자 보고 + 작업 일시 정지

## Communication Protocol
- 모든 Hand-off는 Orchestrator를 경유
- JSON 형식의 표준 메시지 사용
- Self-Review + Quality Score 포함

## Rules
- ALWAYS: Status Board 업데이트 (현재 진행 상황)
- NEVER: 중요 결정을 사용자 확인 없이 진행
- ALWAYS: 에러 발생 시 상세 로그 기록
```

---

## 9. 참고 자료

- **Harness 공식 저장소**: https://github.com/revfactory/harness
- **Harness 100**: https://github.com/revfactory/harness-100
- **Hermes Agent Docs**: https://hermes-agent.nousresearch.com/docs
- **Claude Code Architecture (6 Layers)**: https://mer.vin/2026/05/claude-code-architecture-explained-six-harness-layers-beyond-the-llm/
- **ECC (Everything Claude Code)**: https://github.com/affaan-m/everything-claude-code
- **관련 Hermes 스킬**: `hermes-agent-skill-authoring`, `trinity-orchestrator`, `writing-plans`, `plan`

---

## 10. 액션 아이템

- [ ] Harness 메타 스킬 (`harness-builder`) 생성 — "하네스 구성해줘" 명령으로 팀 생성
- [ ] 6가지 아키텍처 패턴별 Hermes 템플릿 스킬 생성
- [ ] Hermes 기존 스킬 220+개에 Harness 형식 적용 (트리거 + Phase + Quality Gate)
- [ ] 유튜브 콘텐츠 하네스 (Hermes-native) PoC 구현
- [ ] 물류 ERP 하네스 — Hermes의 가장 강력한 도메인 특화 하네스
- [ ] Error Recovery 표준 프로토콜 Hermes 스킬로 패키징
- [ ] Hermes Kanban과 Harness 연동 — 멀티 하네스 작업 큐
