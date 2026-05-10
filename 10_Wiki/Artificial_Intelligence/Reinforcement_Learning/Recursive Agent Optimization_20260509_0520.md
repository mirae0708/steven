---
source: arXiv
collected: 20260509_0520
category: Artificial_Intelligence/Reinforcement_Learning
stars: arXiv 2026-05-07
language: Paper
authors: Apurva Gandhi, Satyaki Chakraborty, Xiangjun Wang
---

# Recursive Agent Optimization

> **Source:** [arXiv](http://arxiv.org/abs/2605.06639v1)
> **Category:** Artificial_Intelligence/Reinforcement_Learning
> **Collected:** 20260509_0520

## Summary

We introduce Recursive Agent Optimization (RAO), a reinforcement learning approach for training recursive agents: agents that can spawn and delegate sub-tasks to new instantiations of themselves recursively. Recursive agents implement an inference-time scaling algorithm that naturally allows agents to scale compute at test time by spawning sub-agents. Key insight: RAO trains agents to make optimal spawning decisions — when to delegate, how many sub-agents to create, and how to merge results — via RL rewards that balance task completion against compute cost.

## Key Takeaways
- RAO trains recursive agents via RL to make optimal spawning decisions (when to delegate, how many sub-agents, how to merge)
- Inference-time scaling: more sub-agents = more compute = better results on complex tasks
- Directly relevant to Hermes delegate_task — this validates the multi-agent spawning approach with RL optimization
- Novel approach: agent learns spawning strategy end-to-end rather than using fixed heuristics

## Original

[Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1)
