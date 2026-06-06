---
source: arXiv
collected: 20260606_0320
category: Artificial_Intelligence/LLM
stars: arXiv 2026-06-04
language: Paper
authors: Luzhe Sun, Jingtian Ji, Haoran Chen
---

# Flow-based Policy Adaptation without Policy Updates

> **Source:** [arXiv](http://arxiv.org/abs/2606.06461v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260606_0320

## Summary

Leveraging prior knowledge from pretrained policies, foundation models, or human operators offers an efficient alternative to learning robot skills from scratch. However, these agents often provide actions that are suboptimal, noisy, or misaligned with task-specific expert behavior. We propose GLOVES, a family of flow-based adaptation methods that correct non-expert actions by transporting them toward an expert action distribution. Rather than replacing agentic control with full autonomy, GLOVES performs selective action-level adaptation, improving task success while preserving agent intent. The learned flow also provides a natural in-distribution scoring mechanism through reverse flow evaluation. We use this signal as an intervention gate: actions that appear consistent with the expert distribution are passed through unchanged, while anomalous or out-of-distribution (OOD) actions are corrected. In this way, assistance is only provided when necessary. GLOVES requires only limited expert supervision, using a small number of demonstrations or reusable successful skill segments. By learning local expert action patterns and stitching them during execution, GLOVES provides a lightweight shared-control module for robust action adaptation across tasks and environments. Code and demos are available at ripl.github.io/GLOVES_web.

## Key Takeaways
- **Problem**: Pretrained/prior policies, foundation models, or human operators provide suboptimal or misaligned actions for specific task domains — full retraining is expensive and rigid.
- **Method**: GLOVES — a flow-based adaptation method that transports non-expert actions toward an expert action distribution via normalizing flows. Uses reverse flow evaluation as an OOD intervention gate (passes consistent actions, corrects anomalous ones).
- **Results**: Improves task success while preserving agent intent, requires only limited expert supervision (few demos or reusable skill segments), provides lightweight shared-control for robust action adaptation.
- **Hermes relevance**: HIGH — GLOVES' selective action-level adaptation and OOD gating is directly applicable to Hermes' multi-agent delegation pattern. The "intervention gate" concept maps to Hermes' skill validation: actions that fit known patterns pass through; anomalous ones get corrected/re-routed.

## Original

[Flow-based Policy Adaptation without Policy Updates](http://arxiv.org/abs/2606.06461v1)
