# 06. 에이전트 LLM

> **Agent-native LLM, Tool Use, Function Calling, Code Agent**  
> 관련 논문: ~20편 (10_Wiki/Artificial_Intelligence/LLM), wiki/ai/llm 전반

---

## 1. 에이전트 LLM이란?

### 기존 LLM vs 에이전트 LLM

| 항목 | 기존 LLM | 에이전트 LLM |
|------|----------|-------------|
| 출력 | 텍스트 | 텍스트 + **행동 (도구 호출)** |
| 상태 | Stateless (무상태) | Stateful (상태 유지) |
| 루프 | 단일 응답 | 관찰-사고-행동 루프 |
| 도구 | 없음 | 내장된 도구 사용 능력 |
| 메모리 | 컨텍스트만 | 지속적 메모리 시스템 |

### 핵심 패러다임
```
Observation → Thought → Action → Tool Result → Observation → ...
                     ↕ (Loop until goal achieved)
```

---

## 2. 최신 에이전트 LLM 모델 (2026.05)

| 모델 | 규모 | 비용 | 강점 |
|------|------|:----:|------|
| **GLM-4.5-Air** | 106B MoE | $0.86/M | Agent-specialized foundation |
| **Qwen3-Coder-30B-A3B** | 30B (3B 활성) | $0.4/M | SOTA agent coding |
| **Kimi K2.5** | — | — | Agent Swarm (100개 병렬 sub-agent) |
| **Claude 4 Sonnet** | — | $3/$15 | Tool use 강점 |
| **GPT-5** | — | — | 범용 에이전트 |

---

## 3. Tool Use / Function Calling

### 작동 방식
```
LLM 출력: <function=search_web>{"query": "KOSPI today"}</function>
       → 시스템이 함수 실행
       → 결과를 LLM에 전달
       → LLM이 최종 응답 생성
```

### 발전 방향

#### 🔹 Agent Harness (2026.05)
- **Code as Agent Harness**: 코드 자체가 에이전트 도구로
  - LLM이 Python 코드를 생성 → 실행
  - 실행 결과를 다시 LLM이 해석
- **From Agent Loops to Deterministic Graphs**
  - 무한 루프 위험 → 결정적 그래프로 변환
  - DAG 기반 실행 보장

#### 🔹 Is Grep All You Need? (2026.05)
- **How Agent Harnesses Reshape Agentic Search**
- 에이전트 도구로 검색(grep, search)이 얼마나 중요한지 분석
- **발견:** 단순 검색조차 agent 성능에 결정적

---

## 4. Code Agent (코딩 에이전트)

### 대표 시스템

| 시스템 | 특징 | Stars |
|--------|------|:-----:|
| **Claude Code** | Anthropic의 공식 코딩 에이전트 | — |
| **Codex CLI** | OpenAI의 CLI 코딩 에이전트 | — |
| **Hermes Agent** | 자기학습 + 영구 메모리 코딩 에이전트 | — |
| **everything-claude-code** | 통합 에이전트 하네스 | **172K⭐** |
| **awesome-claude-skills** | Claude Skills 큐레이션 | **57K⭐** |

### 최신 연구

#### 🔹 Constraint Decay (2026.05)
- **코딩 에이전트의 취약성 분석**
- **문제:** 백엔드 코드 에이전트가 시간이 지나면서 제약 조건을 잊음
- **예시:** 
  - 초기: "절대 DELETE 실행 금지"
  - 50턴 후: DELETE 쿼리 실행
- **해결:** Constraint Store + 주기적 검증

#### 🔹 To What Extent Does Agent-generated Code Require Maintenance? (2026.05)
- **에이전트 생성 코드의 유지보수 분석**
- **발견:** 
  - 에이전트 코드는 사람 코드보다 **버그 밀도**는 낮음
  - 하지만 **유지보수 복잡도**는 높음 (이해하기 어려움)
- **시사점:** 코드 품질 + 설명(코멘트) 생성 중요

#### 🔹 EviACT (2026.05)
- **Evidence-to-Action Framework for Agentic Program Repair**
- 증거 기반 버그 수정 에이전트
- 테스트 실패 → 원인 분석 → 수정 제안 자동화

---

## 5. 멀티 에이전트 시스템

### 🔹 EconAI (2026.05)
- **Dynamic Persona Evolution and Memory-Aware Agents**
- 경제 시뮬레이션용 멀티 에이전트
- 각 에이전트가 **진화하는 페르소나 + 메모리** 보유
- **Hermes 연관성:** 가상오피스의 진화 방향

### 🔹 FORGE (2026.05)
- **Self-Evolving Agent Memory With No Weight Updates**
- 가중치 업데이트 없이 메모리 진화
- Hermes의 Layer Memory System (L0-L4)과 일치

### 🔹 Self-Evolving Multi-Agent Systems (2026.05)
- 분산 메모리 기반 자기 진화 멀티 에이전트
- 각 에이전트가 독립적 메모리 공유

---

## 6. Hermes 연관성

| Hermes 기능 | 관련 연구 |
|-------------|-----------|
| Layer Memory System (L0-L4) | FORGE, Rethinking Memory |
| Skill System | Dynamic Skill Lifecycle Management |
| Brain Sync | Continual Knowledge Updating |
| Subagent Delegation | Agent Swarm (Kimi K2.5) |
| 자기 학습 | Self-Evolving Agent |
| Constraint Awareness | Constraint Decay 연구 |

---

## 🔗 관련 문서

- [[02-Knowledge/LLM-Knowledge-Map/05_컨텍스트_메모리]] — Agent Memory의 기반
- [[02-Knowledge/LLM-Knowledge-Map/02_학습_방법론]] — Agent 학습 방법 (GRPO)
- [[02-Knowledge/LLM-Knowledge-Map/_Index]] ← 돌아가기
