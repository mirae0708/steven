---
source: arXiv
collected: 20260516_1821
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-14
language: Paper
authors: Yi Zhang, Yinda Chen, Che Liu
---

# Pelican-Unified 1.0: A Unified Embodied Intelligence Model for Understanding, Reasoning, Imagination and Action

> **Source:** [arXiv](http://arxiv.org/abs/2605.15153v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260516_1821

## Summary

We present Pelican-Unified 1.0, the first embodied foundation model trained according to the principle of unification. Pelican-Unified 1.0 uses a single VLM as a unified understanding module, mapping scenes, instructions, visual contexts, and action histories into a shared semantic space. The same VLM also serves as a unified reasoning module, autoregressively producing task-, action-, and future-oriented chains of thought in a single forward pass and projecting the final hidden state into a dense latent variable. A Unified Future Generator (UFG) then conditions on this latent variable and jointly generates future videos and future actions through two modality-specific output heads within the same denoising process. The language, video, and action losses are all backpropagated into the shared representation, enabling the model to jointly optimize understanding, reasoning, imagination, and action during training, rather than training three isolated expert systems.

Experiments demonstrate that unification does not imply compromise. With a single checkpoint, Pelican-Unified 1.0 achieves strong performance across all three capabilities: 64.7 on eight VLM benchmarks, the best among comparable-scale models; 66.03 on WorldArena, ranking first; and 93.5 on RoboTwin, the second-best average among compared action methods. These results show that the unified paradigm succeeds in preserving specialist strength while bringing understanding, reasoning, imagination, and action into one model.

## Original

[Pelican-Unified 1.0: A Unified Embodied Intelligence Model for Understanding, Reasoning, Imagination and Action](http://arxiv.org/abs/2605.15153v1)

## Key Takeaways

- **First unified embodied foundation model**: Pelican-Unified 1.0 is the first model trained according to the principle of unification, using a single VLM to jointly handle understanding, reasoning, imagination, and action — replacing the previous paradigm of three isolated expert systems.
- **Shared representation with joint optimization**: A single VLM serves as both the understanding and reasoning module, mapping all modalities into a shared semantic space. Language, video, and action losses are all backpropagated into the shared representation, enabling end-to-end joint optimization.
- **Unified Future Generator (UFG)**: The model uses a UFG that conditions on a dense latent variable from the VLM's final hidden state to jointly generate future videos and future actions via two modality-specific output heads within the same denoising process.
- **Strong empirical results across all capabilities**: A single checkpoint achieves 64.7 on eight VLM benchmarks (best among comparable-scale models), 66.03 on WorldArena (ranked first), and 93.5 on RoboTwin (second-best average among compared action methods), demonstrating that unification preserves specialist strength.
