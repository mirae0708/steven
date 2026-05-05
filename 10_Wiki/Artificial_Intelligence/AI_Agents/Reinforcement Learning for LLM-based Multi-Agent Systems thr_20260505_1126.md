---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-04
language: Paper
authors: Chenchen Zhang
arxiv_id: 2605.02801v1
artifact: https://github.com/xxzcc/awesome-llm-mas-rl
---

# Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces

> **Source:** [arXiv:2605.02801](http://arxiv.org/abs/2605.02801v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260505_1126

## Full Summary

### Core Thesis

As LLM agents evolve from isolated tool users into coordinated teams, reinforcement learning (RL) must optimize not only individual actions but also how work is **spawned, delegated, communicated, aggregated, and stopped**. This paper studies RL for LLM-based multi-agent systems (LLM-MAS) through **orchestration traces** — temporal interaction graphs whose events include sub-agent spawning, delegation, communication, tool use, return, aggregation, and stopping decisions.

The central argument: LLM-MAS RL is most usefully organized around the orchestration trace as a shared abstraction, rather than only through per-agent trajectories.

### Three Technical Axes

1. **Reward Design (8 families, R1–R8):**
   - Outcome rewards (terminal task success/failure)
   - Process rewards (per-step correctness)
   - Orchestration rewards (parallelism speedup, split correctness, aggregation quality)
   - Tool-use rewards
   - Verifier/consistency rewards
   - Preference rewards
   - Hybrid compositions (e.g., Kimi PARL: `r_perf + λ₁·r_parallel + λ₂·r_finish`)

2. **Credit & Signal Assignment (8 units, from token to team):**
   - Token-level, message-level, turn-level, agent-level, role-level, orchestrator-level, framework-level, team-level
   - Key finding: **explicit counterfactual message-level credit remains especially sparse** in the curated pool
   - Agent-, role-, turn-, and orchestrator-level signals are beginning to fill in

3. **Orchestration Learning (5 sub-decisions, O1–O5):**
   - **O1**: When to spawn sub-agents
   - **O2**: Whom to delegate to
   - **O3**: How to communicate
   - **O4**: How to aggregate
   - **O5**: When to stop → **No explicit RL training method found for this decision** as of the May 4, 2026 cutoff

### Formal Framework

The paper extends the Dec-POMDP formalism to a **Dynamic-Dec-POMDP (ℳ⁺)** that accommodates spawn/despawn dynamics, variable agent sets, and event-graph-structured traces. Key contributions include:

- A **trace-conditioned value function** `V^π(G_≤t)` that grows/shrinks as the event graph changes
- **Observation 1 (Credit diffusion):** Under uniform credit allocation on long shared-reward traces, per-decision signals become indistinguishable — motivating structured credit decomposition
- **Observation 2 (Non-identifiability):** Orchestrator spawn decisions are not identifiable from on-policy rollouts alone without explicit off-policy mechanisms

### Industrial Evidence

The paper bridges academic methods to three public industrial systems:

| System | Evidence Role |
|--------|---------------|
| **Kimi Agent Swarm (K2.5/K2.6)** | Clearest public **trained orchestrator** — PARL with up to 300 sub-agents, 4,000 coordinated steps |
| **OpenAI Codex** | Deployment shape & harness boundary constraints |
| **Anthropic Claude Code** | Sub-agent interface & parallel-team workflow anchor |

The **scale gap** is characterized as a gap between publicly reported industrial deployment envelopes and open academic evaluation regimes.

### Why LLM-MAS ≠ Classical MARL

Seven key differences:
1. **Action space is natural language** — combinatorial, ill-defined for VDN/QMIX
2. **Observations are long & partially summarized** — graph-structured, not sequence-structured
3. **Agent count is dynamic & learnable** — not a fixed hyperparameter
4. **Communication is free-form** — natural language, not discrete channels
5. **Episode length is long & asynchronous** — rollout cost dominates
6. **Agents are heterogeneous by role** — planner/executor/critic/verifier
7. **New credit-bearing units** — message, tool call, role, orchestrator decision

### Agent-Team Topologies (6 patterns)

1. **Centralized orchestrator** (Kimi PARL, M-GRPO)
2. **Planner-executor-critic** (MALT, MATPO)
3. **Debate/committee** (Debate-as-Reward, LatentMAS)
4. **Parallel swarm** (Kimi K2.5/K2.6, parallel Claudes)
5. **Hierarchical** (HALO, AgentSpawn)
6. **Managed/harness-based** (OpenAI Codex, Claude Code)

### Safety & Adversarial Robustness

The paper identifies attack surfaces including prompt injection through delegated sub-agents, reward hacking in multi-agent settings, and the under-addressed problem of **steerability** in LLM-MAS.

### Open Problems (15 total)

**Algorithmic:** Off-policy evaluation for orchestrator decisions, variable-topology generalization, message-level credit assignment
**Reward:** Reward-weighting composition, multi-agent reward hacking, orchestrator-level reward shaping
**Systems:** Rollout cost reduction, asynchronous training, trace-length scaling
**Safety:** Multi-agent adversarial robustness, cross-agent injection defense, steerable orchestration
**Evaluation:** MAS-native benchmarks that measure parallelism efficiency, collaboration quality, and error amplification

### Artifact Released

- **GitHub:** [github.com/xxzcc/awesome-llm-mas-rl](https://github.com/xxzcc/awesome-llm-mas-rl)
- 84-entry tagged paper pool (51 focal LLM-MAS entries + 33 supporting references)
- 32-record exclusion log
- 18-column taxonomy tags
- Minimal JSON schema for replayable orchestration traces
- Scripted corpus statistics & dependency-free trace validator

## Original

[Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces](http://arxiv.org/abs/2605.02801v1)
