---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-03
language: Paper
authors: Haohan Yu, Jinmiao Cong, Shengzhi Wang
---

# MAGIC: Multi-Step Advantage-Gated Causal Influence for Multi-agent Reinforcement Learning

> **Source:** [arXiv](http://arxiv.org/abs/2605.01805v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260505_1126

## Summary

A key challenge in multi-agent reinforcement learning (MARL) lies in designing learning signals that effectively promote coordination among agents. Designing such signals necessitates the ability to quantify the true, long-term causal influence between agents. To address this, we introduce Multi-step Advantage-Gated Causal Influence (MAGIC) — a method that computes how much one agent's actions causally affect another agent's future rewards over multiple timesteps, then uses this signal to gate advantage updates.

## Relevance to Hermes
- **Causal Coordination Signal**: MAGIC quantifies "did my action actually help you?" — Hermes can use this principle to evaluate sub-agent cooperation: when Hermes delegates a subtask, did the sub-agent's actions positively influence the final outcome?
- **Advantage Gating**: Only reward coordination that has a measurable causal impact — prevents over-engineering of agent interactions that don't actually improve outcomes
- **Multi-step Credit Assignment**: Long-horizon tasks (complex code changes, multi-step research) benefit from tracing causal influence across the entire chain, not just immediate rewards
- **Potential Integration**: Hermes' self-evolution could log sub-agent interactions, compute causal influence scores, and preferentially evolve coordination patterns with high causal impact

## Original

[MAGIC: Multi-Step Advantage-Gated Causal Influence for Multi-agent Reinforcement Learning](http://arxiv.org/abs/2605.01805v1)
