---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/LLM


authors: Xin Guo, Grace He, Xinyu Li
---

# Signature Approach for Contextual Bandits with Nonlinear and Path-dependent Rewards



👤 Xin Guo, Grace He, Xinyu Li

> We study contextual bandits with nonlinear and path-dependent rewards through a novel signature-transform-based approach. Leveraging the universal nonlinearity property of signatures, we approximate continuous path-dependent reward functionals by linear functionals in the signature space. This repre

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10313v1)

## Key Takeaways
- **Problem**: Addresses contextual bandits with nonlinear and path-dependent rewards — a challenging setting beyond standard linear reward assumptions.
- **Method**: Proposes **DisSigUCB**, a signature-transform-based algorithm that approximates continuous path-dependent reward functionals as linear functionals in signature space, enabling the use of efficient linear bandit methods while preserving expressive sequential structure.
- **Theory**: Proves a high-probability data-dependent sublinear regret bound of $\tilde{\mathcal O}(\sqrt{(d+m)KT})$, where $d$ is the context dimension and $m$ is the signature feature dimension.
- **Results**: Consistently outperforms classical linear and kernelized contextual bandit baselines in three real-world applications: temperature sensor monitoring, sleep-stage classification, and hospital nurse staffing.
- **Significance**: Provides a principled bridge between the expressive power of signature transforms and the practical efficiency of linear contextual bandits for sequential decision-making with path-dependent feedback.

---
_Automatically collected by Hermes Tech Brain Sync_
