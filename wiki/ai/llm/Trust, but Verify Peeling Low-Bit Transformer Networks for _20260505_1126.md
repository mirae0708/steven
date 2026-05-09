---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-04
language: Paper
authors: Arian Eamaz, Farhang Yeganegi, Mojtaba Soltanalian
---

# Trust, but Verify: Peeling Low-Bit Transformer Networks for Training Monitoring

> **Source:** [arXiv:2605.02853v1](http://arxiv.org/abs/2605.02853v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260505_1126
> **Published:** Mon, 4 May 2026
> **Affiliation:** University of Illinois Chicago (Department of Electrical and Computer Engineering)
> **Subject:** Machine Learning (cs.LG)

## Summary

Understanding whether deep neural networks are effectively optimized remains challenging, as training occurs in highly nonconvex landscapes and standard metrics provide limited visibility into layer-wise learning quality. This challenge is particularly acute for transformer-based language models, where training is expensive, models are often reused in frozen form, and poorly optimized layers can silently degrade performance. We propose a layer-wise peeling framework for monitoring training dynamics, in which each transformer layer is locally optimized against intermediate representations of the trained model. By constructing lightweight, layer-specific reference solutions and projecting layers onto multiple intermediate outputs via different permutations, we obtain achievable baselines that enable fine-grained diagnosis of under-optimized layers. Experiments on decoder-only transformer models show that these layer-wise reference bounds can match or even surpass the trained model at various stages of training, exposing inefficiencies that remain hidden in aggregate loss curves. We further demonstrate that this analysis remains effective under binarization and quantized settings, where training dynamics are particularly fragile. Across all numerical results, the proposed bounds consistently separate apparent convergence from effective optimality, highlighting optimization opportunities that are invisible when relying on training loss alone.

## Key Contributions

1. **YES (Yeganegi-Eamaz-Soltanalian) Bounds for Transformers**: Extends the YES training certification framework (previously developed for fully connected ReLU networks) to transformer-based language models, including GPT-2-style and LLaMA-style architectures.

2. **Layer-wise Peeling Strategy**: A sequential, layer-by-layer optimization approach where each transformer layer is locally optimized against cached intermediate representations of the trained model, then frozen. This produces lightweight reference solutions that serve as achievable baselines.

3. **Permutation-Based Analysis**: By projecting YES layers onto different intermediate outputs of the trained model (via different permutations), the framework generates multiple reference trajectories that reveal which layers are well-optimized, which are redundant, and where training is underperforming.

4. **Quantization-Aware Diagnostics**: Demonstrates effectiveness under aggressive quantization (binary 1-bit and ternary 1.58-bit), where optimization is particularly fragile and standard loss curves can misleadingly suggest convergence.

5. **Early Stopping Signal**: YES bounds can serve as a principled stopping criterion — once training meets the tightest YES bound, further optimization primarily refines within an already-certified region rather than discovering qualitatively better solutions.

## Method Details

### Core Idea
Compare a trained model's solution against a low-cost, layer-wise constructed baseline (the "YES solution"). If the training trajectory fails to surpass this baseline, the optimizer is provably underperforming. If it does, one obtains a certificate that meaningful learning has occurred.

### YES Construction for Transformers
1. **Cache teacher representations**: From a small subset of training data, extract per-layer hidden representations from the trained model.
2. **Layer-wise sequential optimization**: Each YES transformer layer is independently optimized via MSE regression to match the corresponding cached representation of the trained model, while previous layers remain frozen.
3. **Output head fitting**: A lightweight final head is trained (via cross-entropy) on top of the YES representations, with all transformer layers fixed.
4. **Permutation evaluation**: Multiple layer-to-target mappings are tested (e.g., [1,2,3,4] direct, [3,3,3,4], [4,4,4,4], etc.) to probe which layers are critical vs. redundant.

### Key Insight
Different permutations yield different YES baselines. If the direct permutation (matching the original training order) is outperformed by alternative permutations, this indicates the training did not fully exploit the layer-wise structure. The minimum error across all permutations defines the YES bound.

## Experiments

### Small-scale Language Models
- **Architectures**: 4-layer LLaMA-style and GPT-2-style decoders trained on WikiText-2 (subset: 100K tokens train, 10K tokens test).
- **Findings**: Training loss surpasses most YES baselines, but some permutations (e.g., projecting to first and last layers only) outperform the trained model at various epochs, revealing optimization inefficiencies.

### Large-scale Fine-tuning: OpenLLaMA-3B
- **Model**: 26-layer, ~3B parameter OpenLLaMA fine-tuned on WikiText-103 under quantization.
- **Quantization schemes**: Channel-wise 1-bit binary and ternary (1.58-bit) quantization applied to MLP/gating/output layers.
- **Findings**:
  - Under low learning rates, training curves appear converged but YES bounds reveal better optimization paths exist.
  - Some YES permutations consistently track or outperform the training trajectory.
  - With 26-layer YES bounds, YES1 (projecting 23 layers to the final layer output) dominates — suggesting most intermediate layers are nearly redundant for this dataset/regime.
  - YES bounds can reveal that smooth loss curves are not reliable indicators of reaching a strong solution, especially under quantization.

### Test Set Generalization
- YES solutions that achieve better training performance than the trained model also generalize competitively.
- YES1 (direct permutation) consistently remains competitive on the test set and can even outperform the trained model's test results — suggesting YES solutions may have better generalization properties under limited data.

### Toy Example (MNIST)
- Binary neural network on MNIST confirms the stair-step "YES cloud" behavior, demonstrating baseline effectiveness in controlled settings.

## Implications

- **Diagnostic tool**: Provides layer-wise certificates that expose under-optimized layers invisible in aggregate loss curves.
- **Pruning signal**: Data-driven argument for layer pruning or selective fine-tuning — redundant layers can be identified without retraining multiple ablated models.
- **Quantization safety**: Helps disentangle optimization inefficiency from quantization-induced distortion.
- **Early stopping**: YES bounds can serve as an independent stopping criterion that preserves generalization.

## Original

[Trust, but Verify: Peeling Low-Bit Transformer Networks for Training Monitoring](http://arxiv.org/abs/2605.02853v1)
