---
source: arXiv
collected: 20260514_1122
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-13
language: Paper
authors: Hongji Pu, Xinyuan Song, Liang Zhao
---

# SkillOps: Managing LLM Agent Skill Libraries as Self-Maintaining Software Ecosystems

> **Source:** [arXiv](http://arxiv.org/abs/2605.13716v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260514_1122

## Summary

Large language model agents increasingly rely on skill libraries for multi-step tasks, yet these libraries can accumulate persistent defects as skills are added, reused, patched, and linked to changing dependencies. We call this failure mode skill technical debt: library-level defects that may not break a single skill locally but can harm future retrieval, composition, and execution. Existing skill-based agents mainly focus on task-time retrieval, planning, and repair, while library-time maintenance remains underexplored. We propose SkillOps, a method-agnostic plug-in framework for maintaining skill libraries. SkillOps represents each skill as a typed Skill Contract (P, O, A, V, F), organizes skills with a Hierarchical Skill Ecosystem Graph, and diagnoses library health across utility, compatibility, risk, and validation dimensions. Given a raw skill library, SkillOps produces a maintained library that can be used by existing retrieval or planning agents without changing their internal code. On ALFWorld, SkillOps achieves 79.5 percent task success as a standalone agent, outperforming the strongest baseline by 8.8 percentage points with no additional task-time large language model calls. As a plug-in layer, it improves retrieval-heavy baselines by 0.68 to 2.90 percentage points. The current rule-based maintenance implementation uses nearly zero library-time large language model calls or tokens, showing that skill-library maintenance can be added as a low-overhead architectural layer.

## Key Takeaways

1. **Skill Technical Debt 정의**: 스킬 라이브러리에 결함이 누적되어 검색(retrieval), 구성(composition), 실행(execution)에 악영향을 미치는 현상 — 단일 스킬 자체는 정상이어도 라이브러리 수준에서 문제 발생
2. **Skill Contract (P, O, A, V, F)**: 각 스킬을 타입화된 계약으로 표현하여 정확한 의존성과 동작 명세화 — Purpose, Output, Action, Validation, Format
3. **Hierarchical Skill Ecosystem Graph**: 스킬 간 계층적 의존성 그래프로 라이브러리 구조를 시각화
4. **4차원 진단**: Utility, Compatibility, Risk, Validation 차원에서 라이브러리 건강도 진단
5. **low-overhead plugin**: 규칙 기반으로 거의 zero LLM call/token으로 라이브러리 유지보수 가능 — Hermes의 179+ 스킬 라이브러리 유지보수에 직접 적용 가능
6. **ALFWorld 79.5%**: 추가 Task-time LLM call 없이 베이스라인 대비 +8.8%p 향상 — Hermes의 SLIM 개념과 시너지

**→ Hermes 적용**: Hermes의 179+ 스킬 라이브러리에 SkillOps 스킬 컨트랙트와 계층적 의존성 그래프 도입 검토. 특히 Skill Technical Debt 진단 자동화에 유용.

## Original

[SkillOps: Managing LLM Agent Skill Libraries as Self-Maintaining Software Ecosystems](http://arxiv.org/abs/2605.13716v1)
