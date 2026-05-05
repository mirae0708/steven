---
source: arXiv
collected: 20260505_1620
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-04
language: Paper
authors: Kyle Zheng, Han Zhang, Renliang Sun
---

# FitText: Evolving Agent Tool Ecologies via Memetic Retrieval

> **Source:** [arXiv](http://arxiv.org/abs/2605.02411v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260505_1620

## Summary

A semantic gap separates how users describe tasks from how tools are documented. As API ecosystems scale to tens of thousands of endpoints, static retrieval from the initial query alone cannot bridge this gap: the agent's understanding of what it needs evolves during execution, but its tool set does not. FitText makes retrieval dynamic by embedding it in the agent's reasoning loop — generating natural-language pseudo-tool descriptions as retrieval probes, refining them iteratively using retrieval feedback, and exploring diverse alternatives through stochastic generation. Memetic Retrieval adds evolutionary selection pressure over candidate descriptions, guided by a tool memory that avoids redundant search. On ToolRet (43k tools, 4 domains), FitText improves average retrieval rank from 8.81 to 2.78; on StableToolBench (16,464 APIs), it achieves a 0.73 average pass rate — a 24-point absolute gain over static query retrieval.

## Relevance to Hermes

**Directly applicable.** Hermes' MCP tool ecosystem (Playwright MCP, Filesystem MCP, Git MCP, Sequential Thinking MCP, AutoResearchAgent) currently relies on static tool descriptions. FitText's memetic retrieval pattern can make tool selection dynamic:

1. **Pseudo-tool descriptions as probes**: When Hermes needs a tool, it generates candidate natural-language descriptions of what the tool should do, refining them based on retrieval feedback
2. **Evolutionary selection**: Cross-pollinate successful tool descriptions across parallel evolution islands (tools, knowledge, skills)
3. **Tool memory**: Cache successful tool-description mappings to avoid redundant search
4. **Model capacity gate**: FitText shows memetic retrieval amplifies signal only with competent base models — relevant for Hermes' model provider selection

**Applied Insight:** Add `memetic_tool_retrieval` pattern to Hermes' tool selection logic — replace static tool lookup with dynamic, evolution-guided retrieval.

## Hermes Key Learnings Added

| # | Learning | Source | Application |
|---|----------|--------|-------------|
| 11 | **Memetic Tool Retrieval** | FitText | Replace static tool lookup with evolution-guided dynamic retrieval |

## Original

[FitText: Evolving Agent Tool Ecologies via Memetic Retrieval](http://arxiv.org/abs/2605.02411v1)
