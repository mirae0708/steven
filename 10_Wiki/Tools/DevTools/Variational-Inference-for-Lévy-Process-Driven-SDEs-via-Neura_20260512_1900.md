---
source: arxiv
collected: 2026-05-12 19:00
category: Tools/DevTools


authors: Yaman Kindap, Manfred Opper, Benjamin Dupuis
---

# Variational Inference for Lévy Process-Driven SDEs via Neural Tilting



👤 Yaman Kindap, Manfred Opper, Benjamin Dupuis

> Modelling extreme events and heavy-tailed phenomena is central to building reliable predictive systems in domains such as finance, climate science, and safety-critical AI. While Lévy processes provide a natural mathematical framework for capturing jumps and heavy tails, Bayesian inference for Lévy-d

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10934v1)

## Key Takeaways
1. **Core problem**: Bayesian inference for Lévy-driven SDEs is intractable — MC methods are rigorous but unscalable, neural VI methods assume Gaussian (fails to capture discontinuities/jumps).
2. **Method**: Neural exponential tilting framework — reweights the Lévy measure using neural networks while preserving jump structure and maintaining computational tractability.
3. **Technical contributions**: Quadratic neural parametrization yielding closed-form normalization, conditional Gaussian representation for stable processes, symmetry-aware MC estimators.
4. **Results**: Accurately captures jump dynamics where Gaussian VI fails. Validated on both synthetic and real-world datasets.
5. **Hermes relevance**: Limited to financial/time-series modeling domain. The neural tilting framework is a generally applicable VI technique for heavy-tailed phenomena — relevant to market prediction and risk modeling.

---
_Automatically collected by Hermes Tech Brain Sync_
