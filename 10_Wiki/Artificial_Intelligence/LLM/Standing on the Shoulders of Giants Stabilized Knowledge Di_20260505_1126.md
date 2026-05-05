---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-04
language: Paper
authors: Mohamad Khajezade, Fatemeh H. Fard, Mohamed Sami Shehata
---

# Standing on the Shoulders of Giants: Stabilized Knowledge Distillation for Cross--Language Code Clone Detection

> **Source:** [arXiv:2605.02860](http://arxiv.org/abs/2605.02860v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260505_1126

## Summary

### Problem
Cross-language code clone detection (X-CCD) is challenging because semantically equivalent programs written in different languages share little surface similarity. Large language models (LLMs) show promise but using them as black-box systems raises concerns about **cost, reproducibility, privacy, and unreliable output formatting**. Compact open-source models especially struggle to follow reasoning-oriented prompts and produce outputs that can be consistently mapped to binary clone labels.

### Proposed Approach
The authors propose a **knowledge distillation (KD) framework** that transfers reasoning capabilities from **DeepSeek-R1** (teacher) into compact open-source student models for X-CCD.

**Key components:**
1. **Synthetic training data**: Created 10,671 reasoning-oriented samples from cross-language code pairs (derived from Project CodeNet) covering Python-Java, Rust-Java, Rust-Python, and Rust-Ruby.
2. **Student models**: Phi-3-Mini and Qwen2.5-Coder-3B, fine-tuned with LoRA adapters.
3. **Response stabilization methods** (to guarantee 100% response rate):
   - **Forced conclusion prompting** — ensures the model outputs a binary decision
   - **Binary classification head** — replaces generation with direct classification
   - **Contrastive classification head** — encourages separable representations for clone vs. non-clone pairs

### Research Questions
- **RQ1**: How well do small open-source models perform on X-CCD for unseen languages and problems?
- **RQ2**: Can knowledge distillation from a reasoning-focused teacher improve performance and response rate?
- **RQ3**: What is the most effective approach to achieving a complete response rate?

### Key Results
- KD **consistently improved response rates** for both Phi3 and Qwen-Coder across all language pairs. E.g., Qwen-Coder response rate rose from 24.3% to 67.7% on same-distribution Rust–Ruby problems.
- KD improved **F1 scores** of the forced-conclusion method by up to 10.5% for some settings.
- KD improved performance in **62% of scenarios** with the binary head and **50%** with the contrastive head.
- **Classification-head variants substantially reduced inference time** (from hours to minutes) compared to generation-based inference.
- **Scaled average F1 improved** by 6.92 and 8.84 points (Phi3) and 27.28 and 23.38 points (Qwen-Coder) in same-distribution and different-distribution settings.

### Contributions
1. First reasoning-oriented synthetic training dataset for cross-language CCD (10,671 samples, 4 language pairs).
2. Systematic analysis of 4 dataset variants differing in prompt structure and reasoning content.
3. Demonstration that KD improves CCD performance in both same-distribution and different-distribution settings.
4. First study on multilingual CCD distillation evaluating cross-language generalization.
5. Two novel methods to address incomplete response behavior in LLMs for X-CCD.
6. Introduction of **response rate** as a new evaluation metric.

### Conclusion
Reasoning-oriented distillation combined with response stabilization makes compact open-source models more **practical and reliable** for cross-language code clone detection. The forced conclusion method preserves reasoning ability while guaranteeing a valid binary decision, and classification heads provide fast, deterministic alternatives to generation-based inference.

## Original

[Standing on the Shoulders of Giants: Stabilized Knowledge Distillation for Cross--Language Code Clone Detection](http://arxiv.org/abs/2605.02860v1)
