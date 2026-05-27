---
source: arXiv
collected: 20260527_1220
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-26
language: Paper
authors: Huawei Lin, Peng Li, Jie Song
---

# MUSE-Autoskill: Self-Evolving Agents via Skill Creation, Memory, Management, and Evaluation

> **Source:** [arXiv](http://arxiv.org/abs/2605.27366v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260527_1220

## Summary

Large language model (LLM) agents rely on reusable skills to solve complex tasks. However, existing skill creation approaches treat skills as isolated and static artifacts, limiting their reusability, reliability, and long-term improvement. We propose MUSE-Autoskill Agent (Memory-Utilizing Skill Evolution), a self-evolving agent framework that enables agents to autonomously create, manage, evaluate, and evolve skills using a structured memory system.

Key contributions:
- **Skill Creation**: Agents automatically decompose tasks into reusable skills with structured memory integration
- **Skill Memory**: Hierarchical memory system stores skill definitions, usage patterns, and evolution history
- **Skill Management**: Dynamic skill registration, versioning, and dependency tracking
- **Skill Evaluation**: Automated quality assessment through execution feedback and cross-validation
- **Self-Evolution**: Skills are continuously refined based on usage frequency, success rate, and task complexity

## Hermes Relevance

**HIGH SIGNAL** — MUSE-Autoskill maps directly to Hermes' existing skill management system:

| MUSE-Autoskill Component | Hermes Equivalent | Gap |
|:------------------------|:-----------------|:----|
| Skill Creation | `skill_manage(action='create')` | MUSE adds automated decomposition from task goals |
| Skill Memory | `skill_view()` + memory tool | MUSE adds usage history tracking |
| Skill Management | `skills_list()` + categories | MUSE adds versioning & dependency tracking |
| Skill Evaluation | Manual quality check | **NEW** — Automated evaluation via execution feedback |
| Self-Evolution | Manual skill updates | **NEW** — Continuous refinement based on metrics |

**Potential Enhancement**: Add self-evaluation and automated evolution loop to Hermes skill system. Track skill usage frequency, success rate, and auto-suggest improvements.

## Original

[MUSE-Autoskill: Self-Evolving Agents via Skill Creation, Memory, Management, and Evaluation](http://arxiv.org/abs/2605.27366v1)
