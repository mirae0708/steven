---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/LLM


authors: Sayan Kumar Chaki
---

# Relations Are Channels: Knowledge Graph Embedding via Kraus Decompositions



👤 Sayan Kumar Chaki

> Knowledge graph embedding (KGE) models typically represent each relation as an operator on entity embeddings. In this work, we identify three structural axioms that any principled relation operator must satisfy, linearity, trace preservation, and complete positivity, and show that they characterize 

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10317v1)

## Key Takeaways

**(a) Core problem:** Existing Knowledge Graph Embedding (KGE) models lack a principled theoretical foundation for their relation operators. Most models treat relations as arbitrary linear maps on entity embeddings without satisfying fundamental structural axioms, leading to ad-hoc norm constraints and poor handling of complex relation patterns like 1-to-N and N-to-N mappings.

**(b) Method/mechanism:** The paper identifies three necessary axioms for relation operators — linearity, trace preservation, and complete positivity — and proves via the Kraus representation theorem that these axioms characterize a Kraus channel structure (i.e., relations are quantum channels). This yields the KrausKGE framework. The authors further generalize this to non-Euclidean geometries via "w-Kraus" channels that satisfy completeness by construction. The framework provides the first theoretically grounded per-relation complexity measure with a provable lower bound based on the empirical relation matrix rank.

**(c) Results:** KrausKGE consistently outperforms strong baselines on N-to-N relations, with performance gains that increase monotonically with relation fan-out — matching theoretical predictions. Most existing operator-based KGE models are recoverable as special cases with Kraus rank κ=1 under specific embedding choices. The model naturally handles 1-to-N and N-to-N relations, supports k-hop reasoning without explicit path encoders, and eliminates the need for norm constraints on entity embeddings.

**(d) Hermes relevance assessment:** Highly relevant. This work bridges KGE and quantum-inspired (density matrix / Kraus operator) representations, a direction Hermes tracks for structured reasoning and neuro-symbolic integration. The principled complexity measure and elimination of ad-hoc constraints are practically valuable for KGE system design. The w-Kraus generalization to arbitrary metric geometries opens avenues for hybrid LLM+KG reasoning pipelines.

---
_Automatically collected by Hermes Tech Brain Sync_
