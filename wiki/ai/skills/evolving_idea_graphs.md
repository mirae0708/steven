---
source: arXiv 2605.04922 (Jiangwen Dong, Bo Li, Wanyu Lin)
absorbed: 2026-05-07 12:30
category: skill
type: self_evolution
---

# Evolving Idea Graphs with Learnable Edits-and-Commits

**Source**: [Evolving Idea Graphs with Learnable Edits-and-Commits for Multi-Agent Scientific Ideation](http://arxiv.org/abs/2605.04922v1) — arXiv 2026-05-06

## Key Concepts

### Problem
Multi-agent systems for scientific discovery coordinate through temporary texts (drafts, chat logs). It's hard to pinpoint weaknesses or track the evolution of ideas.

### Solution: Idea Graphs with Version Control
- **Idea Graph**: Represents research ideas as nodes in a graph, with edges showing relationships (derives-from, contradicts, improves-upon)
- **Edits-and-Commits**: Each modification to an idea is tracked like Git commits — allowing rollback, diff, and branching
- **Learnable Edit Operators**: The system learns which types of edits (add evidence, challenge assumption, generalize scope) produce stronger ideas

### Key Innovations
- **Graph-based idea representation**: Ideas aren't lost in chat logs — they're structured nodes
- **Edit type classification**: Categorizes each modification (e.g., "strengthen", "counter-argue", "synthesize") 
- **Quality feedback loop**: Learns which edit types correlate with successful ideas

## Hermes Application

### Self-Evolution Pipeline
Directly applicable to Hermes' own self-evolution mechanism:

1. **Evolution-as-Commits**: Each evolution cycle = a commit to Hermes' capabilities
2. **Idea Graph for Skill Development**: Track how skills evolve — which modifications improve performance
3. **Learnable Edit Selection**: Learn which types of knowledge absorption yield the best outcomes

### Implementation Pattern
```
Current Skill State → Identify Weakness → Propose Edit (type: strengthen/counter-argue/synthesize)
                                        ↓
                                 Apply Edit → Commit → Evaluate
                                        ↓
                                 Update Idea Graph (quality feedback)
```

### Quality Metrics
- Track which edit types produce successful evolutions
- Prune ineffective branches (revert bad commits)
- Double-down on effective edit strategies

## Related Skills
- [[./_Index#10-antifragility-stress-sensor|Antifragility Stress Sensor (CAFE)]]
- [[./_Index#5-parallel-evolution-islands|Parallel Evolution Islands (FunFuzz)]]
- [[Evolving Idea Graphs with Learnable Edits-and-Commits for Mu_20260507_1221|Original Document]]
