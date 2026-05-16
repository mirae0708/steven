---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/Deep_Learning


authors: Zheyu Zhang, Shuo Yang, Bardh Prenkaj
---

# Active Tabular Augmentation via Policy-Guided Diffusion Inpainting



👤 Zheyu Zhang, Shuo Yang, Bardh Prenkaj

> Generative tabular augmentation is appealing in data-scarce domains, yet the prevailing focus on distributional fidelity does not reliably translate into better downstream models. We formalize a fidelity-utility gap: common generative objectives prioritize distributional plausibility, whereas augmen

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10315v1)

## Key Takeaways

**(a) Core Problem:** Generative tabular augmentation methods focus on distributional fidelity (generating realistic-looking data), but this does not reliably improve downstream model performance. The paper formalizes a **fidelity-utility gap**: common generative objectives prioritize distributional plausibility, whereas effective augmentation requires that injected samples actually reduce the current learner's held-out evaluation loss.

**(b) Method/Mechanism:** The authors propose **TAP (Tabular Augmentation Policy)**, which couples **diffusion inpainting** (conditional generation on partially masked tabular rows) with a lightweight **learner-conditioned policy network**. The policy steers generation toward high-utility regions of the data space, and controls safe injection via explicit gating and a conservative windowed commitment mechanism — deciding not just how to generate, but *what* to generate and *when* to inject during training.

**(c) Results:** On seven real-world datasets under severe data scarcity, TAP consistently outperforms strong generative baselines, improving classification accuracy by **up to 15.6 percentage points** and reducing regression RMSE by **up to 32%**. Accepted at ICML 2026.

**(d) Hermes Relevance:** Highly relevant — this paper directly addresses a practical limitation in deep learning workflows (data scarcity for tabular data), proposes a principled solution combining diffusion models with reinforcement-learning-style policy control, and provides strong empirical validation. Useful for teams working on tabular ML pipelines, data augmentation strategies, or active learning systems.

---
_Automatically collected by Hermes Tech Brain Sync_
