---
source: GitHub wshobson/agents (⭐34,897)
absorbed: 2026-05-07 12:30
category: skill
type: orchestration_pattern
---

# Multi-Agent Orchestration for Claude Code

**Sources**:
- [wshobson/agents](https://github.com/wshobson/agents) — 34,897 ⭐ (absorbed 2026-05-07)
- [ruvnet/ruflo](https://github.com/ruvnet/ruflo) — 45,966 ⭐ (absorbed 2026-05-08)

## Key Concepts

### What It Is
Intelligent automation and multi-agent orchestration platforms designed specifically for Claude Code environments. Two complementary approaches exist:

1. **wshobson/agents** — Parallel agent execution and result synthesis framework
2. **ruvnet/ruflo** — Enterprise-grade agent orchestration with self-learning swarm intelligence

### Core Architecture

#### wshobson/agents Pattern
- **Agent Swarm**: Multiple Claude Code instances coordinate on complex tasks
- **Task Decomposition**: Break large tasks into subtasks distributed across agents
- **Result Synthesis**: Merge and reconcile outputs from parallel agent runs
- **State Management**: Shared context between agent instances with conflict resolution

#### ruvnet/ruflo Enterprise Pattern
- **Self-Learning Swarm Intelligence**: Agents learn from past orchestrations, improving task decomposition over time
- **Native Claude Code + Codex Integration**: First-class support for both Claude and Codex environments
- **Enterprise RAG Pipeline**: Built-in retrieval-augmented generation for agent context hydration
- **Autonomous Workflow Coordination**: Scheduled, event-driven, and conditional workflow triggers
- **Conversational AI Stack**: Full conversational agent lifecycle management (session, memory, persona)

### Key Patterns for Hermes

1. **Parallel Agent Execution**: Run multiple agent instances simultaneously on independent subtasks
2. **Result Reconciliation**: When agents produce conflicting results, use a synthesis step to resolve
3. **Context Window Management**: Distribute context across agents to avoid exceeding limits
4. **Agent Specialization**: Route tasks to agent instances optimized for that domain
5. **Self-Learning Orchestration** (ruflo): Track success/failure patterns per task type to improve future decomposition
6. **RAG-Hydrated Agents** (ruflo): Pre-load agent context with relevant external data before execution

## Hermes Application

### Multi-Instance Architecture
Hermes can leverage these patterns for:
1. **Parallel Research**: Scan multiple topics simultaneously
2. **Competitive Analysis**: Run multiple solution strategies, pick best
3. **Ensemble Reasoning**: Multiple agents propose answers → vote/merge
4. **Adaptive Task Decomposition** (ruflo-inspired): Learn from past evolution cycles which task splits work best

### Integration Pattern
```python
# Conceptual parallel orchestration
tasks = [
    ("research_mcp", "Scan MCP server documentation"),
    ("research_agents", "Scan AI Agent papers"),
    ("research_tools", "Scan new tools")
]

# Spawn parallel agents
results = parallel_execute(tasks, agent_count=3)

# Synthesize
final_report = synthesize(results)
```

### Self-Learning Enhancement (ruflo-inspired)
```python
# Track orchestration outcomes for adaptive improvement
orchestration_memory = {
    "research_task": {"success_rate": 0.92, "best_split": 3, "avg_duration": 45},
    "code_review_task": {"success_rate": 0.78, "best_split": 2, "avg_duration": 120}
}
# Use past data to inform future task decomposition strategy
```

## Related Skills
- [[./_Index#3-parallel-evolution-islands|Parallel Evolution Islands (FunFuzz)]]
- [[./_Index#14-deep-search-trajectories|Deep Search Trajectories (OpenSeeker-v2)]]
- [[./_Index#8-intent-driven-memory|Intent-Driven Memory (MemFlow)]]
- [[wshobsonagents_20260507_1120|Original wshobson Document]]
- [[ruvnetruflo_20260508_0220|Original ruflo Document]]
