---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/MCP


authors: Fabio Rovai
---

# Open Ontologies: Tool-Augmented Ontology Engineering with Stable Matching Alignment



👤 Fabio Rovai

> We present Open Ontologies, an open-source ontology engineering system implemented in Rust that integrates LLM-driven construction with formal OWL reasoning and ontology alignment via the Model Context Protocol. Our primary finding is that stable 1-to-1 matching is the dominant factor in ontology al

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.09184v1)

## Key Takeaways

**(a) Core Problem:** Ontology engineering and alignment remain difficult to automate — existing systems either lack LLM integration, depend on brittle syntactic matching, or cannot interoperate with tools via standard protocols. The paper investigates two sub-problems: (1) whether stable matching theory improves ontology alignment quality over conventional signal-weighting approaches, and (2) whether structured tool access (via MCP) enables LLMs to reason about ontologies more effectively than reading raw OWL syntax.

**(b) Method/Mechanism:** Open Ontologies is an open-source Rust system that combines LLM-driven ontology construction with formal OWL reasoning and ontology alignment, all exposed through the Model Context Protocol (MCP). For alignment, it applies stable 1-to-1 matching (Gale-Shapley) to resolve correspondences between ontology entities, comparing against five weight configurations. For tool-augmented interaction, it compares three LLM access modes: raw OWL file reading, no file (LLM knowledge only), and structured MCP tool access.

**(c) Results:** On the OAEI Anatomy track, stable matching achieves **F1 = 0.832** (P = 0.963, R = 0.733), competitive with state-of-the-art and highest in precision. Signal weights are shown to be nearly irrelevant when stable matching is applied (F1 varies by < 0.004 across configurations), but removing stable matching drops F1 to 0.728. On the Conference track, the same method achieves F1 = 0.438. Critically, structured MCP tool access (F1 = 0.717) far outperforms both raw OWL file reading (F1 = 0.323) and no-file LLM knowledge (F1 = 0.431), demonstrating that tool structure provides a qualitatively different mode of access.

**(d) Hermes Relevance:** Highly relevant. This paper directly validates the MCP paradigm that Hermes and Nous Research champion — structured tool access (MCP) enabling LLMs to outperform both raw data exposure and pure parametric knowledge. The stable matching alignment approach is novel for ontology engineering and offers a clean, weight-agnostic technique applicable to any entity alignment task. The Rust implementation and MIT-licensed single-binary distribution align well with Hermes' focus on practical, deployable AI infrastructure.

---
_Automatically collected by Hermes Tech Brain Sync_
