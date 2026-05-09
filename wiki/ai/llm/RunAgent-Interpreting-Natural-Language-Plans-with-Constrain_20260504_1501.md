---
source: arxiv
collected: 2026-05-04 15:01
category: Artificial_Intelligence/LLM


authors: Arunabh Srivastava, Mohammad A.,  Khojastepour
---

# RunAgent: Interpreting Natural-Language Plans with Constraint-Guided Execution



👤 Arunabh Srivastava, Mohammad A.,  Khojastepour

> Humans solve problems by executing targeted plans, yet large language models (LLMs) remain unreliable for structured workflow execution. We propose RunAgent, a multi-agent plan execution platform that interprets natural-language plans while enforcing stepwise execution through constraints and rubric

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.00798v1)

## Key Takeaways

### Core Concept
- **Constraint-Guided Execution**: RunAgent is a multi-agent plan execution platform that interprets natural-language plans while enforcing stepwise execution through constraints and rubrics.
- It bridges natural language expressiveness with the determinism of programming via an agentic language with explicit control constructs (IF, GOTO, FORALL).

### Key Architectural Features
1. **Initialization & Staging**: Automatically derives constraints from the task+instance pair at plan start. Generates atomic constraints (single, irreducible logical conditions).
2. **Compiler Module**: Parses natural-language plans into machine-readable format (Python dicts), detects agentic language keywords, generates sub-steps for FORALL operations.
3. **Executor Module**: Step-by-step implementation with:
   - Dynamic execution selection (LLM reasoning, Python code generation, or Tool invocation)
   - Two-stage constraint validation (LLM reasoner → LLM judge)
   - Error correction with retry and fallback mechanisms
   - Context history filtering (retains only relevant info per step)

### Agentic Language Keywords
- **IF**: Conditional branching, checked by LLM judge
- **GOTO**: Unconditional jump to another step
- **FORALL**: Iterate over all items (LLMs struggle with "for all" operations)
- **LLM: / PYTHON: / TOOL:** Prefixes to force execution modality

### Constraint Validation Process
1. ShouldCheckConstraintsForStep() — skips validation for summarizing steps
2. FilterRelevantConstraints() — selects constraints relevant to current step
3. Two-phase check: LLM reasoner provides justification → LLM judge validates
4. On violation: error appended to execution context, step retried
5. After max retries: Fall-Back LLM executes without further checks

### Evaluation Results
- Outperforms baseline LLMs (GPT-4o) and state-of-the-art PlanGEN methods
- Calendar Scheduling: 81.1% accuracy (vs GPT-4o baseline, 75.4% without constraints)
- SciBench Math: Consistent improvement over GPT-4o across Calc, Stat, Diff datasets
- Ablation study confirms constraint checking provides measurable accuracy gains

### Key Insight
Plan-based prompting alone can *degrade* LLM performance (GPT-4o solves problems better directly than when given a plan). RunAgent's stepwise execution with constraints is what makes plans outperform direct solving.

---
_Automatically collected by Hermes Tech Brain Sync_
