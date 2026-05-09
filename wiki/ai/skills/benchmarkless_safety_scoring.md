---
skill_id: benchmarkless_safety_scoring
name: Benchmarkless Comparative Safety Scoring
type: knowledge
domain: LLM_Reliability
source: arXiv 2605.06652 (Gautam et al.)
collected: 2026-05-08 22:20
status: absorbed
---

# Benchmarkless Comparative Safety Scoring

## Core Insight

When no labeled benchmark exists for a specific language, sector, or regulatory regime, LLM safety can still be validated through an **instrumental-validity chain** that replaces ground-truth agreement with three checks:

1. **Responsiveness** — Does the score separate safe vs. abliterated models (AUROC 0.89–1.00)?
2. **Variance Dominance** — Is target identity the dominant variance component (η² ≈ 0.52) over auditor/judge artifacts?
3. **Stability** — Do severity profiles stabilize within 10 reruns?

## Why This Matters for Hermes

Hermes operates in domains where ground-truth safety benchmarks may not exist (custom tool pipelines, novel agent behaviors, multi-step workflows). This methodology enables:

- **Self-validation** of Hermes' own safety before deployment actions
- **Evolution quality gate** — assess whether a new skill version is safer than the previous
- **Comparative evaluation** when switching underlying models (e.g., DeepSeek vs. Llama)

## Key Terminology from SimpleAudit

| Term | Definition |
|------|------------|
| Scenario Pack | Fixed set of safety test scenarios |
| Auditor | Human or automated entity administering scenarios |
| Judge | Evaluator scoring responses against rubric |
| Instrumental Validity | Chain of evidence replacing ground-truth labels |
| Abliterated | Model with safety guardrails intentionally removed (negative control) |

## Implementation Pattern

### SimpleAudit-Inspired Hermes Safety Gate

```python
class SafetyScoringGate:
    """Benchmarkless safety validation for Hermes evolution cycles."""
    
    def __init__(self, scenario_pack: list[str], num_reruns: int = 10):
        self.scenario_pack = scenario_pack  # safety test scenarios
        self.num_reruns = num_reruns
        self.history = []
    
    async def evaluate(self, model_version: str, 
                       judge_fn) -> dict:
        """
        Run safety evaluation without labeled ground truth.
        
        Args:
            model_version: Identifier for the model/skill version
            judge_fn: Function that scores responses (human or automated)
            
        Returns:
            dict with validity chain evidence
        """
        # 1. Responsiveness check: compare safe vs. abliterated
        responsiveness = await self._check_responsiveness(judge_fn)
        
        # 2. Variance decomposition: target vs. auditor/judge artifacts
        variance = await self._decompose_variance(judge_fn)
        
        # 3. Stability: severity profiles over reruns
        stability = await self._check_stability(judge_fn)
        
        # 4. Combined validity assessment
        valid = (
            responsiveness["auroc"] > 0.85 and
            variance["target_dominance"] > 0.40 and
            stability["converged"]
        )
        
        return {
            "model_version": model_version,
            "valid": valid,
            "responsiveness": responsiveness,
            "variance_decomposition": variance,
            "stability": stability
        }
```

## Integration into Hermes Evolution Pipeline

1. **Pre-evolution baseline**: Run safety scoring on current skill set
2. **Post-evolution comparison**: Run same scenarios on new skill version
3. **Gate decision**: If safety degrades → rollback or flag for review
4. **Continuous monitoring**: Track safety score over time as skills accumulate

## When to Use

- **Every evolution cycle**: Run before/after skill absorption
- **Model switches**: When changing underlying LLM provider
- **Regulatory compliance**: For deployments in regulated domains
- **User-facing actions**: Before executing high-risk tool calls

## Limitations

- Requires a well-designed scenario pack (quality of input matters)
- Instrumental validity ≠ ground-truth validation (approximation)
- Auditor/judge consistency needs monitoring
- Cultural/language specificity of scenario packs

## Related Skills

- `agentic_red_teaming` — Autonomous security/quality probing
- `safety_scaling_awareness` — Safety ≠ accuracy; independent metrics
- `first_token_hallucination_detection` — Single-decode hallucination detection
- `antifragility_stress_sensor` — Stress testing for evolution quality
