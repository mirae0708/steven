---
source: arXiv
collected: 20260505_1620
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-04
language: Paper
authors: Jose Manuel de la Chica, Juan Manuel Vera, Jairo Rodríguez
---

# When Stress Becomes Signal: Detecting Antifragility-Compatible Regimes in Multi-Agent LLM Systems

> **Source:** [arXiv](http://arxiv.org/abs/2605.02463v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260505_1620

## Summary

Multi-agent LLM systems are increasingly used to solve complex tasks through decomposition, debate, specialization, and ensemble reasoning. However, these systems are usually evaluated in terms of robustness: whether performance is preserved under perturbation. This paper studies a different question: whether semantic stress exposes structured variation that could support future antifragile learning. The authors introduce CAFE, a statistical framework for detecting antifragility-compatible regimes in multi-agent architectures. CAFE models a controlled expected distribution of semantic stressors, reconstructs an architecture-specific observed effective stress distribution from multi-dimensional judge signals, and compares both distributions using a distributional Jensen Gap under a convex stress potential. Across five architectures (flat, hierarchical, debate, meta-adaptive, and ensemble), semantic stress reduces average judged quality by roughly one third, yet all architectures exhibit positive distributional Jensen Gaps — meaning immediate quality degradation coexists with statistically detectable antifragility-compatible stress geometry. CAFE is a measurement layer for identifying when and where antifragility learning may be worth applying.

## Relevance to Hermes

**Highly relevant as a meta-evolution measurement tool.** Hermes' self-evolution cycle currently absorbs new technologies and applies them blindly. CAFE provides a framework to measure whether the "stress" of evolving new skills creates learnable patterns or just noise:

1. **Evolvability Stress Sensor**: Before committing a new skill to Hermes' pipeline, measure whether the stress of integration produces structured variation (antifragile) or unstructured degradation (fragile)
2. **Architecture Comparison**: Test which Hermes sub-systems (tool selection, knowledge retrieval, skill synthesis) exhibit antifragility-compatible stress profiles
3. **Jensen Gap as Quality Gate**: Use distributional Jensen Gap as a filter in the causal coordination gate — only absorb changes that show positive stress geometry

**Applied Insight:** Add CAFE-style measurement to Hermes' evolution pipeline as a pre-commit stress test — measure if new skill integration creates learnable structure vs. random noise.

## Hermes Key Learnings Added

| # | Learning | Source | Application |
|---|----------|--------|-------------|
| 12 | **Antifragility Stress Sensor (CAFE)** | When Stress Becomes Signal | Pre-commit stress measurement for evolution pipeline — detect if stress creates learnable structure |

## Original

[When Stress Becomes Signal: Detecting Antifragility-Compatible Regimes in Multi-Agent LLM Systems](http://arxiv.org/abs/2605.02463v1)
