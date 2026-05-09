---
skill_id: verifier_backed_problem_generation
name: Verifier-Backed Hard Problem Generation
type: knowledge
domain: Reasoning_Improvement
source: arXiv 2605.06660 (Lai et al.)
collected: 2026-05-08 22:20
status: absorbed
---

# Verifier-Backed Hard Problem Generation for Mathematical Reasoning

## Core Insight

LLMs can generate valid, challenging, and novel problems by using a **verifier-backed generation loop**:
1. **Generator** produces candidate problems
2. **Verifier** checks validity (solvability, correctness, uniqueness)
3. **Difficulty filter** selects appropriately hard problems
4. **Novelty check** ensures the problem isn't memorized

This enables autonomous problem creation for self-training, evaluation, and scientific discovery.

## Why This Matters for Hermes

Hermes can adopt the verifier-backed pattern for **self-improvement**:
- Generate challenging test cases for new skills
- Create self-evaluation benchmarks when none exist
- Enable autonomous discovery of edge cases in tool usage
- Generate training data for specialized agent behaviors

## Key Architecture

```
┌────────────┐     ┌────────────┐     ┌─────────────┐
│ Generator  │────>│  Verifier  │────>│ Difficulty  │────> Valid Problem
│ (LLM)      │     │ (LLM+Code) │     │  Filter     │
└────────────┘     └────────────┘     └─────────────┘
                         │
                         ▼
                   Novelty Check
                   (embedding
                    similarity)
```

## Implementation Pattern

### Verifier-Backed Skill Self-Testing

```python
class SkillProblemGenerator:
    """Generate hard test problems for Hermes skill validation."""
    
    def __init__(self, verifier_llm=None):
        self.verifier = verifier_llm  # or rule-based checker
    
    async def generate_test(self, skill_spec: str) -> dict:
        """Generate a challenging test case for a given skill."""
        # 1. Generate candidate problem
        candidate = await self._generate_candidate(skill_spec)
        
        # 2. Verify validity (solvability, internal consistency)
        valid = await self._verify(candidate)
        if not valid:
            return await self.generate_test(skill_spec)  # retry
        
        # 3. Assess difficulty
        difficulty = await self._assess_difficulty(candidate)
        
        # 4. Check novelty against known problems
        novel = await self._check_novelty(candidate)
        
        return {
            "problem": candidate,
            "valid": valid,
            "difficulty": difficulty,
            "novel": novel,
            "generation_rounds": 1
        }
    
    async def generate_benchmark_suite(self, 
                                        skill_spec: str,
                                        num_problems: int = 20) -> list[dict]:
        """Generate a full benchmark suite for skill evaluation."""
        problems = []
        while len(problems) < num_problems:
            problem = await self.generate_test(skill_spec)
            if problem["valid"] and problem["novel"]:
                problems.append(problem)
        return problems
```

## Integration into Hermes

1. **Skill Validation**: After absorbing a new skill, generate test problems to verify understanding
2. **Evolution Benchmark**: Create custom benchmarks for each evolution cycle
3. **Edge Case Discovery**: Systematically probe skill boundaries
4. **Self-Training**: Generate practice problems to improve weak areas

## When to Use

- **New skill absorption**: Validate skill was learned correctly
- **Before deployment**: Ensure skill handles edge cases
- **Periodic retesting**: Skills may drift or become stale
- **Competitive evaluation**: Compare alternative skill implementations

## Limitations

- Verifier quality bounds overall effectiveness
- Domain-specific: Best for well-defined problems (math, code, logic)
- Generation can be expensive (multi-step process)
- Novelty detection needs good embedding infrastructure

## Related Skills

- `open_seeker_v2` — Deep search trajectories
- `reasoning_intensive_retrieval` — Hard retrieval problems
- `evolving_idea_graphs` — Version-controlled skill evolution
- `antifragility_stress_sensor` — Stress testing integration
