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
- Standard MoEs suffer severe performance degradation when inference is restricted to a subset of experts per domain — EMO is designed to solve this
- Core idea: tokens within a document share an expert pool (since they share a domain), while different documents use different pools — no human-defined priors needed
- Emergent modularity: expert subsets naturally specialize at the semantic/domain level (e.g., math, code) rather than the low-level syntactic specialization seen in standard MoEs
- Pretrained a 1B-active, 14B-total EMO model on 1 trillion tokens — matches standard MoE performance as a full model
- Selective expert use works: retaining only 25% of experts → just ~1% absolute performance drop; retaining 12.5% → only ~3% drop — standard MoEs break entirely under the same conditions
- Enables modular, memory-efficient deployment of large sparse models without requiring domain labels during training

---
_Automatically collected by Hermes Tech Brain Sync_
