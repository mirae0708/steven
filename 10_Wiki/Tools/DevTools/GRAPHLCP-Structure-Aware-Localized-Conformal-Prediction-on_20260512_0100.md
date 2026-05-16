---
source: arxiv
collected: 2026-05-12 01:00
category: Tools/DevTools


authors: Peyman Baghershahi, Fangxin Wang, Debmalya Mandal
---

# GRAPHLCP: Structure-Aware Localized Conformal Prediction on Graphs



👤 Peyman Baghershahi, Fangxin Wang, Debmalya Mandal

> Conformal prediction (CP) provides a distribution-free approach to uncertainty quantification with finite-sample guarantees. However, applying CP to graph neural networks (GNNs) remains challenging as the combinatorial nature of graphs often leads to insufficiently certain predictions and indiscriminative embeddings. Existing methods primarily rely on embedding-space proximity for localization, which can be unreliable for graphs and yield inefficient prediction sets. We propose GRAPHLCP, a proximity-based localized CP framework that explicitly incorporates graph topology and inter-node dependencies into localization and weighting. Our approach introduces a feature-aware densification step to mitigate locality bias in sparse graphs, followed by a Personalized PageRank-based kernel computation to model structural proximity. This enables topology-dependent anchor sampling and calibration weighting that captures both local and long-range dependencies. Extensive experiments on several regression and classification datasets demonstrate that GRAPHLCP guarantees marginal coverage with finite samples while efficiently attaining favorable test conditional coverage across various conditioning scenarios.

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.08074v1)

## Key Takeaways
- **Structure-Aware Localization:** Unlike prior CP methods for graphs that rely solely on embedding-space proximity (which can be unreliable), GRAPHLCP explicitly incorporates graph topology and inter-node dependencies into the localization process, yielding more efficient prediction sets.
- **Feature-Aware Densification + PPR Kernel:** The framework introduces a two-step approach — first densifying sparse graphs to mitigate locality bias, then computing a Personalized PageRank-based kernel to model structural proximity that captures both local and long-range dependencies.
- **Topology-Dependent Calibration:** Anchor sampling and calibration weighting are guided by graph structure rather than raw embeddings, enabling the model to produce prediction sets that respect the underlying graph connectivity.
- **Strong Empirical Coverage:** Extensive experiments across regression and classification benchmarks show that GRAPHLCP achieves valid marginal coverage with finite samples while maintaining favorable test conditional coverage under diverse conditioning scenarios.

---
_Automatically collected by Hermes Tech Brain Sync_
