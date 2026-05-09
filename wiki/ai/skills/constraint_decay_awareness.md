# Constraint Decay Awareness

**Source**: Dente, F., Satriani, D., Papotti, P., arXiv 2605.06445
**Absorbed**: 2026-05-09 06:30

## Summary

LLM agents exhibit **Constraint Decay** — a systematic failure mode where performance degrades sharply as structural constraints accumulate. In convention-heavy frameworks (Django, FastAPI), pass rates drop ~30% points compared to minimal frameworks (Flask), with ORM runtime errors being the primary failure cause.

## Key Mechanism

1. **Constraint accumulation**: Each added requirement (framework conventions, DB schema, API patterns) increases cognitive load on the agent
2. **Incremental decay**: Agent follows initial constraints → small deviations → complete failure cascade
3. **Framework sensitivity**: Flask 83.4% success → Django/FastAPI ~50-55% — convention-heavy frameworks amplify decay
4. **Root cause**: ORM runtime errors (not syntax/compile errors) — the agent generates syntactically valid code that fails at runtime due to implicit framework conventions

## Applied to Hermes

- **Code generation safety gate**: Before deploying generated code, test against full constraint set in the target environment
- **Framework-awareness routing**: Evaluate constraint complexity before choosing generation strategy — simple tasks → light frameworks, complex tasks → stepwise validation
- **Incremental constraint validation**: After each constraint-adding step, verify solution still passes all previous checks
- **Decorator-based validation**: Add runtime constraint checkers to generated code that validate ORM patterns, middleware ordering, URL routing

## Detection Pattern
```
If agent task involves:
  - Convention-heavy framework (Django, FastAPI, Spring, Rails)
  - ORM/database schema interactions  
  - Multiple middleware/layer integrations
→ Activate constraint decay guard: stepwise validation + pre-deployment test suite
```

## Related Skills
- benchmarkless_safety_scoring
- first_token_hallucination_detection
- safety_scaling_awareness
- everything_claude_code_harness (security gates)
