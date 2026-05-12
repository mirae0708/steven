---
source: arxiv
collected: 2026-05-12 19:00
category: Artificial_Intelligence/LLM


authors: Chenyang Song, Weilin Zhao, Xu Han
---

# DECO: Sparse Mixture-of-Experts with Dense-Comparable Performance on End-Side Devices



👤 Chenyang Song, Weilin Zhao, Xu Han

> While Mixture-of-Experts (MoE) scales model capacity without proportionally increasing computation, its massive total parameter footprint creates significant storage and memory-access bottlenecks, which hinder efficient end-side deployment that simultaneously requires high performance, low computati

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10933v1)

## Key Takeaways
1. **Core problem**: MoE models have massive total parameter footprint causing storage/memory bottlenecks for edge deployment. Need dense-comparable performance with low cost and small storage.
2. **DECO architecture**: Uses differentiable ReLU-based routing with learnable expert-wise scaling. Introduces NormSiLU activation (normalizes inputs before SiLU) for stable routed-expert activation and higher intrinsic sparsity.
3. **Key insight**: Non-gated MLP experts with ReLU-based routing work well — enables MoE architecture simplification.
4. **Results**: Activating only 20% of experts, DECO matches dense performance. Specialized kernel delivers 3.00× speedup on real hardware vs dense inference.
5. **Hermes relevance**: MoE efficiency techniques inform local LLM deployment strategies. NormSiLU activation pattern may be applicable to other sparsity-aware architectures.

---
_Automatically collected by Hermes Tech Brain Sync_
