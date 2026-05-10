---
source: github
collected: 2026-05-10 17:01
category: Artificial_Intelligence/LLM
stars: 417
language: Python

---

# butthtio/solidity-cot-auditor

⭐ **417 stars**
🔤 **Python**

> Multi-role chain-of-thought LLM pipeline for Solidity security auditing, layered on top of Slither output.

## Links
- 🔗 [Original](https://github.com/butthtio/solidity-cot-auditor)

## Key Takeaways

### What it is
- Multi-role CoT pipeline specifically designed for **smart contract security auditing**
- Runs on top of **Slither** (static analysis framework for Solidity) — uses Slither's output as input context
- Assigns **multiple LLM roles** (e.g., auditor, attacker, reviewer) that each perform chain-of-thought reasoning
- Each role analyzes the contract from its specific perspective, then results are aggregated

### Why it matters for Hermes
1. **Multi-role CoT pattern**: Hermes could apply this to code reviews — separate "developer", "security reviewer", "performance auditor" roles
2. **Tool-layered reasoning**: Uses static analysis (Slither) as grounding layer, then LLM adds reasoning on top — similar to Hermes' tool-use pattern
3. **Audit aggregation**: Multiple CoT paths merged into final verdict — relevant to Hermes' multi-agent decision framework

### Skill extraction assessment
- ⏭️ **Not skill-worthy**: Domain-specific (Solidity/smart contracts). Pattern is useful but too narrow for Hermes' general-purpose code workflows. The multi-role CoT pattern is already covered by existing skills (multi_agent_orchestration_claude_code, verifier_backed_problem_generation).

### Hermes applicability score: 2/5
- Pattern is sound (multi-role CoT + static analysis grounding) but Solidity-specific
- Existing skills already cover the general case more broadly

---

_Automatically collected by Hermes Tech Brain Sync_
