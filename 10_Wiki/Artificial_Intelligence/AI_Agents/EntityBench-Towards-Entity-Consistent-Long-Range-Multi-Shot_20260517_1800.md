---
source: arxiv
collected: 2026-05-17 18:00
category: Artificial_Intelligence/AI_Agents


authors: Ruozhen He, Meng Wei, Ziyan Yang
---

# EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation



👤 Ruozhen He, Meng Wei, Ziyan Yang

> Multi-shot video generation extends single-shot generation to coherent visual narratives, yet maintaining consistent characters, objects, and locations across shots remains a challenge over long sequences. Existing evaluations typically use independently generated prompt sets with limited entity coverage and simple consistency metrics, making standardized comparison difficult. We introduce EntityBench, a benchmark of 140 episodes (2,491 shots) derived from real narrative media, with explicit per-shot entity schedules tracking characters, objects, and locations simultaneously across easy / medium / hard tiers of up to 50 shots, 13 cross-shot characters, 8 cross-shot locations, 22 cross-shot objects, and recurrence gaps spanning up to 48 shots. It is paired with a three-pillar evaluation suite that disentangles intra-shot quality, prompt-following alignment, and cross-shot consistency, with a fidelity gate that admits only accurate entity appearances into cross-shot scoring. As a baseline, we propose EntityMem, a memory-augmented generation system that stores verified per-entity visual references in a persistent memory bank before generation begins. Experiments show that cross-shot entity consistency degrades sharply with recurrence distance in existing methods, and that explicit per-entity memory yields the highest character fidelity (Cohen's d = +2.33) and presence among methods evaluated. Code and data are available at https://github.com/Catherine-R-He/EntityBench/.

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.15199v1)

## Key Takeaways
- Introduces EntityBench, a benchmark of 140 episodes (2,491 shots) from real narrative media for evaluating entity consistency in multi-shot video generation
- Features a three-pillar evaluation suite disentangling intra-shot quality, prompt-following alignment, and cross-shot consistency with a fidelity gate
- Proposes EntityMem, a memory-augmented generation system storing verified per-entity visual references in a persistent memory bank
- Experiments show cross-shot entity consistency degrades sharply with recurrence distance; EntityMem achieves highest character fidelity (Cohen's d = +2.33)
- Relevance to Hermes: Provides a structured framework for evaluating multi-shot consistency, applicable to agentic systems that must maintain entity coherence across long contexts

---
_Automatically collected by Hermes Tech Brain Sync_
