---
source: arXiv
collected: 20260505_1126
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-03
language: Paper
authors: Yiheng Yao, Chelsea Zou, Robert D. Hawkins
---

# Talk is Cheap, Communication is Hard: Dynamic Grounding Failures and Repair in Multi-Agent Negotiation

> **Source:** [arXiv](http://arxiv.org/abs/2605.01750v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260505_1126

## Summary

Grounding is the collaborative process of establishing mutual belief sufficient for the current communicative purpose. While static grounding maps language to a shared, externally observable context, dynamic grounding is a joint activity where meaning is negotiated through interaction. Current multi-agent LLM systems assume perfect grounding — agents understand each other perfectly because they share the same model. This paper shows this assumption fails: agents systematically misinterpret each other (grounding failures) and must develop repair strategies through interaction.

## Relevance to Hermes
- **Critical insight**: Hermes operates in a multi-tool environment where sub-agents (file ops, code analysis, research) may have different context — grounding failures occur when agents misinterpret what another agent "meant"
- **Dynamic Grounding**: Hermes should implement explicit grounding checks — after a sub-agent returns results, the coordinating agent should verify shared understanding before proceeding
- **Repair Strategy**: When grounding fails (ambiguous file paths, unclear code changes), Hermes should engage in clarification dialogue rather than assuming correctness — this prevents cascading errors in multi-step tasks

## Original

[Talk is Cheap, Communication is Hard: Dynamic Grounding Failures and Repair in Multi-Agent Negotiation](http://arxiv.org/abs/2605.01750v1)
