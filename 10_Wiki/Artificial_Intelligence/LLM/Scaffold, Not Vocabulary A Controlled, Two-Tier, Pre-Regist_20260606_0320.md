---
source: arXiv
collected: 20260606_0320
category: Artificial_Intelligence/LLM
stars: arXiv 2026-06-04
language: Paper
authors: Mehmet Iscan
---

# Scaffold, Not Vocabulary? A Controlled, Two-Tier, Pre-Registered Study of a Popperian Code-Generation Skill

> **Source:** [arXiv](http://arxiv.org/abs/2606.06454v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260606_0320

## Summary

|Large language models increasingly write, review, and judge code, and a fast-growing practice equips them with prompt 'skills' that ask the model to reason like a scientist. A prominent example tells the model to act as a Popperian falsificationist, and such skills are reported to improve generated code. But these gains are almost always read off an LLM-as-a-judge, an instrument with documented positional, self-preference, and stylistic biases. We ask: if it appears to help, is the gain from the skill's Popperian content, or from the structure any scaffold imposes? We pre-register a two-tier ablation with three controls: a length-matched placebo, a labels-only scaffold that keeps the Popperian headers but strips the procedure, and an execution oracle (HumanEval+ unit tests), plus a vocabulary-halo sentinel and a same-model self-judge audit. On a frontier model (Claude Sonnet 4.6, N=163) all conditions sit near the benchmark ceiling and do not separate, so the pre-registered +5-point improvement is not supported (a ceiling-limited non-detection). On a small model (Qwen2.5-Coder-0.5B, N=164) structured arms lift best-of-eight correctness by 20-22 points, but the full skill shows no separable benefit over a labels-only scaffold (aggregate F@8=L@8 vs V@8=34.8%), and the placebo trails by only 2.4 points. A 0.5B self-judge applying the Popperian rubric does not beat random selection and concentrates 60% of its picks on one index. In the two settings tested, the skill's Popperian procedural content adds no separable execution-correctness benefit beyond a labels-only scaffold, so the gains track scaffold structure. We contribute a calibrated negative result and a reusable disambiguation protocol; the finding bounds an engineering claim about one prompt-skill family and is not an evaluation of Popperian methodology in general.

## Key Takeaways

- **Problem**: Prompt 'skills' (e.g., Popperian falsificationist) are widely claimed to improve LLM code generation, but these claims rely on LLM-as-a-judge evaluations that have known biases. The core question is whether gains come from the skill's procedural/philosophical content or merely from the structure/scaffold it imposes.
- **Method**: Pre-registered two-tier ablation study with three controls — a length-matched placebo, a labels-only scaffold (Popperian headers, no procedure), and execution oracle via HumanEval+ unit tests — plus a vocabulary-halo sentinel and same-model self-judge audit. Tested on a frontier model (Claude Sonnet 4.6, N=163) and a small model (Qwen2.5-Coder-0.5B, N=164).
- **Results**: On Claude Sonnet, all conditions hit the benchmark ceiling (no separation, ceiling-limited non-detection). On Qwen 0.5B, structured arms improve best-of-eight correctness by 20-22 points, but the full Popperian skill shows no separable benefit over a labels-only scaffold (F@8=L@8 vs V@8=34.8%); the placebo trails by only 2.4 points. The 0.5B self-judge applying the Popperian rubric performs no better than random. Conclusion: gains track scaffold structure, not Popperian content.
- **Hermes relevance**: **HIGH** — This paper directly questions whether prompt 'skills' add value beyond structural scaffolding, which is directly relevant to Hermes' 179+ skill library. The calibrated negative result and reusable disambiguation protocol provide a methodology Hermes should adopt to validate its own skills, distinguishing genuine procedural value from scaffold effects.

## Original

[Scaffold, Not Vocabulary? A Controlled, Two-Tier, Pre-Registered Study of a Popperian Code-Generation Skill](http://arxiv.org/abs/2606.06454v1)
