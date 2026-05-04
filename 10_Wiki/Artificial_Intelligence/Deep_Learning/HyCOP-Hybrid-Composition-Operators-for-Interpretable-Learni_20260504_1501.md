---
source: arxiv
collected: 2026-05-04 15:01
category: Artificial_Intelligence/Deep_Learning


authors: Jinpai Zhao, Nishant Panda, Yen Ting Lin
---

# HyCOP: Hybrid Composition Operators for Interpretable Learning of PDEs



👤 Jinpai Zhao, Nishant Panda, Yen Ting Lin

> We introduce HyCOP, a modular framework that learns parametric PDE solution operators by composing simple modules (advection, diffusion, learned closures, boundary handling) in a query-conditioned way. Rather than learning a monolithic map, HyCOP learns a policy over short programs - which module to

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.00820v1)

|## Key Takeaways
- Modular PDE solver: composes advection/diffusion/boundary modules via learned policy
- Query-conditioned: chooses which module + duration based on regime features
- Order-of-magnitude OOD improvement over monolithic neural operators
- Supports modular transfer: dictionary updates (boundary swaps, residual enrichment)
- Theory: error decomposition separating composition error from module error
- Enables hybrid surrogates at arbitrary query times without autoregressive rollout

---
_Automatically collected by Hermes Tech Brain Sync_
