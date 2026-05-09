# Recursive Agent Optimization (RAO)

**Source**: Gandhi, A., Chakraborty, S., Wang, X. et al., arXiv 2605.06639
**Absorbed**: 2026-05-09 06:30

## Summary

Recursive Agent Optimization (RAO) is a reinforcement learning approach for training **recursive agents**: agents that can spawn and delegate sub-tasks to new instantiations of themselves recursively. This implements an **inference-time scaling algorithm** — more recursive depth yields better performance.

## Key Mechanism

1. **Recursive spawn-delegate pattern**: Agent calls a `spawn()` action that creates a child agent instance with a sub-task prompt
2. **Inference-time scaling**: Performance scales with number of recursive calls (depth and branching factor)
3. **RL training loop**: Parent agent learns optimal spawn/delegate policy via (action, observation, reward) tuples from children
4. **Sub-agent returns**: Each spawned agent returns structured output (analysis, code, decision) back to parent

## Applied to Hermes

- **Self-evolution pipeline**: Spawn sub-agents for parallel knowledge absorption from multiple papers, then synthesize
- **Deep research**: Recursively decompose complex queries into sub-queries handled by specialized instances
- **Code generation**: Spawn independent code-review agents that analyze generated code before merge
- **Portfolio analysis**: Spawn per-stock analysis agents, aggregate into council decision

## Key Equations / Concepts

- Policy: `π(a_t | s_t)` where action space includes `spawn(child_prompt)`, `merge(child_result)`, `finalize()`
- Reward: Task completion quality + efficiency (cost/benefit of spawning)
- Key insight: Recursive delegation enables handling complexity that exceeds single-agent capacity

## Related Skills
- multi_agent_orchestration_claude_code
- tree_credit_assignment_memory
- nanobot_lightweight_agent
