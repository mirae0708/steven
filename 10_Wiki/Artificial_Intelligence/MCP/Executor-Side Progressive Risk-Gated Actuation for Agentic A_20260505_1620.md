---
source: arXiv
collected: 20260505_1620
category: Artificial_Intelligence/MCP
stars: arXiv 2026-05-04
language: Paper
authors: Zhenyu Liu, Yi Ma, Rahim Tafazolli
---

# Executor-Side Progressive Risk-Gated Actuation for Agentic AI in Wireless Supervisory Control

> **Source:** [arXiv](http://arxiv.org/abs/2605.02697v1)
> **Category:** Artificial_Intelligence/MCP
> **Collected:** 20260505_1620

## Summary

Agentic artificial intelligence (AI) shows promise for automating O-RAN wireless supervisory control, but translated intents still require an executor-side decision before live network actuation. Existing control flows lack explicit semantics for whether an intent should commit, gate for evidence, or reject under stale telemetry, concurrent policies, deadline and bandwidth limits, and rollback constraints. The authors propose Progressive Risk-Gated Actuation (PRGA), an executor-side contract for risk-gated wireless intent execution. PRGA structures each intent into executable local triage (C0), on-demand coordination evidence (C1), and post-hoc provenance support (C2), with C2 kept off the online safety path. A deterministic two-stage policy checks expiry, freshness, rollback-handle validity, local conflict, blocking preconditions, and planner-executor risk divergence from C0, then retrieves C1 only for gated intents when deadline and bandwidth budgets allow. On benchmarks, PRGA reduces time-to-first-safe-action by 23.3-27.4% and per-commit control-plane bytes by 52.7-54.2%.

## Relevance to Hermes

**Architectural pattern reference (domain-scoped).** While this paper is specific to O-RAN wireless control, the three-tier risk-gating model (C0/C1/C2) is a general safety architecture:

1. **C0 (Local Triage)**: Quick, deterministic checks before any action — analogous to Hermes' existing verification gates
2. **C1 (On-Demand Evidence)**: Expensive verification retrieved only when C0 flags uncertainty — could optimize Hermes' tool execution by deferring expensive validation until needed
3. **C2 (Post-Hoc Provenance)**: Audit trail kept offline — Hermes could log execution traces for post-hoc analysis without impacting response latency

**Scoped for reference** — not immediately actionable but the C0→C1→C2 pattern could inform Hermes' execution safety architecture.

## Original

[Executor-Side Progressive Risk-Gated Actuation for Agentic AI in Wireless Supervisory Control](http://arxiv.org/abs/2605.02697v1)
