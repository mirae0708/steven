---
source: arxiv
collected: 2026-05-09 01:00
category: Artificial_Intelligence/LLM


authors: Minbin Huang, Han Shi, Chuanyang Zheng
---

# UniPool: A Globally Shared Expert Pool for Mixture-of-Experts



👤 Minbin Huang, Han Shi, Chuanyang Zheng

> Modern Mixture-of-Experts (MoE) architectures allocate expert capacity through a rigid per-layer rule: each transformer layer owns a separate expert set. This convention couples depth scaling with linear expert-parameter growth and assumes that every layer needs isolated expert capacity. However, re

## Key Takeaways
- UniPool: globally shared expert pool across all MoE layers instead of per-layer experts
- Decouples depth scaling from expert parameter growth — same pool size regardless of layer count
- Emergent modularity through global routing, not forced isolation
- More parameter-efficient, better expert utilization

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.06665v1)

## Key Takeaways
- UniPool replaces per-layer expert ownership with a single globally shared expert pool accessed by independent per-layer routers
- Routing probe reveals redundancy: replacing deeper layer's top-k router with random routing drops accuracy by only 1.0–1.6 points
- Introduces pool-level auxiliary loss for balanced expert utilization and NormRouter for sparse, scale-stable routing
- Consistently improves validation loss (up to 0.0386) and perplexity over vanilla MoE at 182M–978M parameter scales trained on 30B tokens
- Pool size becomes an explicit depth-scaling hyperparameter — reduced-pool variants using 41.6%–66.7% of vanilla expert-parameter budget match or outperform layer-wise MoE
- Expert parameters need not grow linearly with depth under shared-pool design; sublinear growth is more efficient and effective

---
_Automatically collected by Hermes Tech Brain Sync_
