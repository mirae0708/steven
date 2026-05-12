---
source: arxiv
collected: 2026-05-12 19:00
category: Artificial_Intelligence/AI_Agents


authors: Junhao Shen, Teng Zhang, Xiaoyan Zhao
---

# Dynamic Skill Lifecycle Management for Agentic Reinforcement Learning



👤 Junhao Shen, Teng Zhang, Xiaoyan Zhao

> Large language model agents increasingly rely on external skills to solve complex tasks, where skills act as modular units that extend their capabilities beyond what parametric memory alone supports. Existing methods assume external skills either accumulate as persistent guidance or internalized int

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10923v1)

## Key Takeaways
1. **Core problem**: Existing agent RL assumes skills accumulate monotonically (persistent guidance or internalized). This is suboptimal because limited parametric capacity and uneven marginal contribution make the optimal active skill set non-monotonic and task-dependent.
2. **SLIM framework**: Dynamic Skill Lifecycle Management treats the active external skill set as an optimization variable jointly updated with policy learning. Uses leave-one-skill-out validation to estimate each skill's marginal contribution.
3. **Three lifecycle operations**: Retain (high-value skills), Retire (skills whose contribution becomes negligible after sufficient exposure), Expand (add new skills when persistent failures reveal missing coverage).
4. **Performance**: Outperforms best baselines by avg 7.1% points on ALFWorld and SearchQA. Shows policy learning and external skill retention are complementary, not mutually exclusive.
5. **Hermes relevance**: Directly applicable to Hermes's skill library management (currently 179 skills). Could inform an automated skill retention/pruning policy based on marginal contribution rather than manual curation.

---
_Automatically collected by Hermes Tech Brain Sync_
