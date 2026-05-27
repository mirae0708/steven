---
source: arXiv
collected: 20260527_1320
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-26
language: Paper
authors: Xiongwei Zhu, Xiaojian Liao, Tianyang Jiang
---

# ReMoE: Boosting Expert Reuse through Router Fine-Tuning in Memory-Constrained MoE LLM Inference

> **Source:** [arXiv](http://arxiv.org/abs/2605.27081v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260527_1320

## Summary

Fine-grained Mixture-of-Experts (MoE) models sparsely activate only a subset of experts per token, reducing activated computation while maintaining high model capacity. However, in memory-constrained inference scenarios, only a small set of experts can be cached. Experts not in the cache must be fetched from slow host memory, creating a memory-I/O bottleneck.

ReMoE proposes a solution:
- **Router Fine-Tuning**: Re-trains the routing mechanism to maximize reuse of cached experts
- **Cache-Aware Routing**: Routes tokens preferentially to experts already in the memory cache
- **Reduced I/O**: Minimizes expensive host memory fetches by keeping frequently-used experts in fast cache
- **Minimal Quality Loss**: Fine-tuning achieves ~90%+ cache hit rate with negligible quality degradation

**Key insight**: Rather than expanding memory, optimize the routing to work within existing memory constraints.

## Hermes Relevance

**MODERATE-HIGH SIGNAL** — Directly relevant to Hermes' memory management challenges:

| Problem | Current Hermes State | ReMoE Insight |
|:--------|:-------------------|:--------------|
| Swap exhaustion (852MiB/2.0Gi) | Gateway 1.3GB RSS | Route processing to minimize memory pressure |
| Memory-constrained inference | Multiple services competing | Prioritize cache-friendly routing |
| Service cascade failure | Potential OOM kills | ReMoE's approach prevents memory thrash |

**Practical Application**: The concept of "routing within memory constraints" applies to Hermes' cron scheduling — prioritize knowledge-intensive tasks when memory is low, defer heavy processing to post-reboot windows. Also applies to Gateway request routing — prefer tasks using already-cached models/skills.

## Original

[ReMoE: Boosting Expert Reuse through Router Fine-Tuning in Memory-Constrained MoE LLM Inference](http://arxiv.org/abs/2605.27081v1)
