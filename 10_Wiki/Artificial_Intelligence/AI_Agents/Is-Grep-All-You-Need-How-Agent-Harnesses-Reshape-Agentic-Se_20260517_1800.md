---
source: arxiv
collected: 2026-05-17 18:00
category: Artificial_Intelligence/AI_Agents


authors: Sahil Sen, Akhil Kasturi, Elias Lumer
---

# Is Grep All You Need? How Agent Harnesses Reshape Agentic Search



👤 Sahil Sen, Akhil Kasturi, Elias Lumer

> Recent advances in Large Language Model (LLM) agents have enabled complex agentic workflows where models autonomously retrieve information, call tools, and reason over large corpora to complete tasks on behalf of users. Despite the growing adoption of retrieval-augmented generation (RAG) in agentic search systems, existing literature lacks a systematic comparison of how retrieval strategy choice interacts with agent architecture and tool-calling paradigm. Important practical dimensions, including how tool outputs are presented to the model and how performance changes when searches must cope with more irrelevant surrounding text, remain under-explored in agent loops. This paper reports an empirical study organized into two experiments. Experiment 1 compares grep and vector retrieval on a 116-question sample from LongMemEval, using a custom agent harness (Chronos) and provider-native CLI harnesses (Claude Code, Codex, and Gemini CLI), for both inline tool results and file-based tool results that the model reads separately. Experiment 2 compares grep-only and vector-only retrieval while progressively mixing in additional unrelated conversation history, so that each query is embedded in more distracting material alongside the passages that matter. Across Chronos and the provider CLIs, grep generally yields higher accuracy than vector retrieval in our comparisons in experiment 1; at the same time, overall scores still depend strongly on which harness and tool-calling style is used, even when the underlying conversation data are the same.

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.15184v1)

## Key Takeaways
- Empirically compares grep vs. vector retrieval in agentic search across multiple agent harnesses (Chronos, Claude Code, Codex, Gemini CLI)
- Finds that grep generally yields higher accuracy than vector retrieval for the LongMemEval benchmark, but results depend strongly on harness and tool-calling style
- Shows that adding irrelevant conversation history degrades retrieval performance, with vector search more affected than grep
- Demonstrates that how tool outputs are presented (inline vs. file-based) significantly impacts agent performance
- Relevance to Hermes: Informs retrieval strategy decisions for Hermes agents — simple grep-based retrieval can be surprisingly effective, and harness design matters as much as retrieval method

---
_Automatically collected by Hermes Tech Brain Sync_
