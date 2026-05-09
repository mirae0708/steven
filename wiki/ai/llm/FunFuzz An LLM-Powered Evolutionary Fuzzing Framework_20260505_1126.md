---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-04
language: Paper
authors: Mario Rodríguez Béjar, B. Romera-Paredes, Jose L. Hernández-Ramos
---

# FunFuzz: An LLM-Powered Evolutionary Fuzzing Framework

> **Source:** [arXiv](http://arxiv.org/abs/2605.02789v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260505_1126

## Summary

Modern fuzzers increasingly use Large Language Models (LLMs) to generate structured inputs, but LLM-driven fuzzing is sensitive to prompt initialization and sampling variance, which can reduce exploration efficiency and lead to redundant inputs. We present FunFuzz, a multi-island evolutionary fuzzing framework that runs several isolated searches in parallel and periodically migrates high-value candidates to maintain diversity. FunFuzz derives initial generation prompts from documentation and initializes islands with topic-specific instructions, then continuously adapts prompts using feedback-guided selection. During fuzzing, candidates are prioritized by incremental compiler coverage, while compiler-internal failure signals are used to identify crash-inducing inputs. We evaluate FunFuzz on compiler fuzzing, where inputs are source programs and success is measured by compiler coverage and unique compiler-internal failures. Across repeated 24-hour campaigns on GCC and Clang, FunFuzz achieves higher compiler coverage than previous LLM-driven baselines and discovers more unique failure-triggering inputs.

## Key Details

### Problem Statement
- LLM-driven fuzzing suffers from sensitivity to prompt initialization and sampling variance
- Can lead to exploration efficiency reduction and redundant inputs
- Existing LLM-assisted fuzzers (e.g., Fuzz4All) rely on single shared prompts, biasing search trajectories

### FunFuzz Approach

**Two-stage framework:**
1. **Prompt Distillation & Initialization:** Uses autoprompting-style distillation from documentation; derives per-island seed instructions for semantically distinct starting points
2. **Evolutionary Fuzzing Loop:** Multi-island search with coverage-guided selection and periodic migration

**Key Components:**
- **Multi-Island Architecture:** Multiple isolated searches running in parallel (default: 5 islands)
- **Per-Island Seed Initialization:** Each island gets topic-specific instructions (e.g., allocation patterns, control flow)
- **Coverage-Guided Fitness:** Programs scored by incremental compiler source-line coverage
- **Soft Migration:** Every 3 hours, top 51% islands share 10% of elite population; weak islands prune bottom 30% and receive migrants
- **Temperature-Controlled Selection:** Softmax over fitness scores with decaying temperature schedule
- **Prompt Adaptation:** Selected parent programs incorporated into next generation prompts

### Experimental Setup

**Systems Under Test:** GCC 16.0.0, Clang/LLVM (trunk)
**Languages:** C and C++
**Duration:** 24-hour campaigns, 3 runs per configuration
**LLMs:** DeepSeek-Coder-V2-Lite-Base (generation), GPT-4.1 (prompt distillation)
**Baselines:** Fuzz4All (single + parallel 5-instance), Kitten (high-throughput mutational)
**Hardware:** NVIDIA A100 80GB (LLM inference), Intel i7-13700H (compilation)

### Results

#### Coverage (C)
| Configuration | GCC | Clang |
|---|---|---|
| Fuzz4All | 292,872 | 597,822 |
| FunFuzz (5 islands) | **329,905 (+12.7%)** | **634,091 (+6.1%)** |
| FunFuzz (warm-start) | 372,275 (+27.1%) | 653,402 (+9.3%) |
| Kitten | 316,900 | 620,312 |

#### Coverage (C++)
| Configuration | G++ | Clang++ |
|---|---|---|
| Fuzz4All | 254,298 | 697,519 |
| FunFuzz (5 islands) | **333,254 (+31.0%)** | **727,964 (+4.4%)** |

#### Bug Discovery (24h)
- **Total unique failures found:** 119 (across all FunFuzz configurations)
- **Confirmed by developers:** 80
- **GCC C bugs:** 14 unique (vs. 5 for Fuzz4All, 9 for Kitten)
- **Clang C bugs:** 24 unique (vs. 14 for Fuzz4All)
- **G++ bugs:** 24 unique (vs. 12 for Fuzz4All)
- **Clang++ bugs:** 64 unique (vs. 15 for Fuzz4All)
- Warm-start configuration dramatically increases bug-finding (34 GCC C, 52 Clang C)

### Ablation Findings
- **Coverage-guided scoring** is the primary performance driver
- **Per-island seed initialization** boosts early coverage by 7-11%
- **Soft migration** outperforms full-reset (FunSearch-style) migration
- **5 islands** is optimal; 10+ islands fragment the search too much
- Compilation-time tracking (+Time) and redundancy filtering (+Filter) consistently help
- Favoring compilation failures (+Fail) is beneficial for LLVM but harmful for GCC

### Contributions
1. Multi-island LLM-assisted evolutionary fuzzing with soft migration
2. Prompt distillation with per-island semantic initialization
3. Comprehensive 24-hour evaluation on GCC and Clang (C/C++) against strong baselines

### Limitations & Future Work
- Evaluation limited to C/C++ compilers
- Extending oracle beyond internal failures to semantic bugs (miscompilation)
- Incorporating richer feedback signals (IR-level coverage)
- Hybrid mutation/generation for improved efficiency
- Evaluation on other structured-input domains (interpreters, protocol parsers)

## Original

[FunFuzz: An LLM-Powered Evolutionary Fuzzing Framework](http://arxiv.org/abs/2605.02789v1)
