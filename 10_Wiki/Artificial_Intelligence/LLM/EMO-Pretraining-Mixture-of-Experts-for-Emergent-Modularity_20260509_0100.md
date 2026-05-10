---
source: arxiv
collected: 2026-05-09 01:00
category: Artificial_Intelligence/LLM


authors: Ryan Wang, Akshita Bhagia, Sewon Min
---

# EMO: Pretraining Mixture of Experts for Emergent Modularity



👤 Ryan Wang, Akshita Bhagia, Sewon Min

> Large language models are typically deployed as monolithic systems, requiring the full model even when applications need only a narrow subset of capabilities, e.g., code, math, or domain-specific knowledge. Mixture-of-Experts (MoEs) seemingly offer a potential alternative by activating only a subset

## Key Takeaways
- EMO challenges the rigid per-layer MoE convention — proposes a globally shared expert pool
- All layers share the same expert pool → decouples depth scaling from expert parameter growth
- Emergent modularity: experts naturally specialize without per-layer isolation
- More parameter-efficient than traditional MoE: same expert count regardless of layer depth
- Significant implication for efficient LLM architecture design

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.06663v1)

## Key Takeaways
_To be filled during Brain Sync processing..._

---
_Automatically collected by Hermes Tech Brain Sync_
