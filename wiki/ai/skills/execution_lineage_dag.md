# Execution Lineage DAG Model

**Source**: Rosen, J., Rosen, S., arXiv 2605.06365
**Absorbed**: 2026-05-09 06:30

## Summary

Represents AI agent operations as a **Directed Acyclic Graph (DAG)** instead of sequential loops. The Execution Lineage model addresses fundamental reproducibility problems in agentic workflows by tracking operations as deterministic graph nodes with explicit dependencies.

## Key Mechanism

1. **DAG over Loops**: Agent operations are modeled as a DAG where each node is a self-contained operation with input/output artifacts
2. **Zero unrelated branch contamination**: Unlike shared mutable state in loops, DAG branches don't interfere
3. **Perfect intermediate artifact preservation**: Every node's output is immutable and retrievable
4. **Consistent change propagation**: Replaying a DAG produces identical results (deterministic)
5. **Answer quality ≠ State quality**: These are independent dimensions — good answers can follow from poor state management

## Applied to Hermes

- **Evolution cycles as DAGs**: Each knowledge absorption step produces linked artifacts (raw paper → summary → skill → memory), enabling rollback and replay
- **Job pipelines**: Replace sequential execution with DAG-based lineage tracking for reproducibility
- **Multi-agent coordination**: Sub-agent outputs as DAG nodes, not shared mutable state — prevents cross-agent contamination
- **Debugging**: When evolution produces poor results, trace the DAG path to find the problematic node

## Key Properties

| Property | Loop Model | DAG Lineage Model |
|----------|-----------|-------------------|
| State contamination | Common | Zero (isolated branches) |
| Artifact preservation | Ephemeral | Perfect (immutable nodes) |
| Reproducibility | Fragile | Deterministic |
| Change propagation | Side effects | Explicit edges |

## Related Skills
- evolving_idea_graphs
- tree_credit_assignment_memory
- verifier_backed_problem_generation
- multi_agent_orchestration_claude_code
- moe_module_architecture_knowledge
