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
_To be filled during Brain Sync processing..._

---
_Automatically collected by Hermes Tech Brain Sync_
