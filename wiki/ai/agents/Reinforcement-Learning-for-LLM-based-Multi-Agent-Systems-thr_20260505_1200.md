---
source: arxiv
collected: 2026-05-05 12:00
category: Artificial_Intelligence/AI_Agents


authors: Chenchen Zhang
---

# Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces



👤 Chenchen Zhang

> As large language model (LLM) agents evolve from isolated tool users into coordinated teams, reinforcement learning (RL) must optimize not only individual actions but also how work is spawned, delegated, communicated, aggregated, and stopped. This paper studies RL for LLM-based multi-agent systems t

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.02801v1)

## Key Takeaways
- **Core Concept**: RL for LLM-based multi-agent systems must optimize not just individual actions but orchestration patterns — how work is spawned, delegated, communicated, aggregated, and stopped
- **Orchestration Traces**: Training signal comes from trace data of multi-agent coordination (who talks to whom, when tasks are handed off, how results are merged)
- **Relevance to Hermes**: Directly applicable to Hermes' multi-agent architecture design. When Hermes spawns sub-agents (code analysis, file ops, research), the orchestration trace pattern provides a framework for optimizing agent-to-agent handoffs
- **Key Insight**: Beyond tool-use optimization, the *coordination topology* itself can be learned via RL — meaning Hermes could learn optimal agent swarming patterns over time
- **Potential Integration**: Hermes self-evolve pipeline could add an `orchestration_optimizer` module that tracks sub-agent interactions and adjusts coordination patterns via RL

---
_Automatically collected by Hermes Tech Brain Sync_
