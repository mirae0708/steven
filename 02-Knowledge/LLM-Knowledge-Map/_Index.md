# 📚 LLM 대형언어모델 지식맵

> **작성일:** 2026-05-29  
> **출처:** Hermes Wiki Vault (10_Wiki/Artificial_Intelligence/LLM — 146개 논문, wiki/ai/llm — 60+ 논문)  
> **목적:** 대형언어모델(Large Language Model)의 전반적 지식 체계 정리

---

## 📖 목차

| # | 문서 | 핵심 내용 | 관련 논문 수 |
|---|------|-----------|:----------:|
| 01 | [[02-Knowledge/LLM-Knowledge-Map/01_LLM_아키텍처\|LLM 아키텍처]] | Transformer, Attention, MoE, Sparse Attention | ~25편 |
| 02 | [[02-Knowledge/LLM-Knowledge-Map/02_학습_방법론\|학습 방법론]] | Pre-training, SFT, RLHF, GRPO, DPO, Alignment | ~20편 |
| 03 | [[02-Knowledge/LLM-Knowledge-Map/03_추론_최적화\|추론 최적화]] | KV Cache, Speculative Decoding, 양자화, MoE 추론 | ~10편 |
| 04 | [[02-Knowledge/LLM-Knowledge-Map/04_파인튜닝\|파인튜닝]] | LoRA, QLoRA, PEFT, Adapter, Continual Learning | ~15편 |
| 05 | [[02-Knowledge/LLM-Knowledge-Map/05_컨텍스트_메모리\|컨텍스트와 메모리]] | Long Context, Memory Systems, RAG, Context Window | ~15편 |
| 06 | [[02-Knowledge/LLM-Knowledge-Map/06_에이전트_LLM\|에이전트 LLM]] | Agent-native LLM, Tool Use, Function Calling, Code Agent | ~20편 |
| 07 | [[02-Knowledge/LLM-Knowledge-Map/07_평가_벤치마크\|평가와 벤치마크]] | MMLU, GSM8K, SWE-Bench, HumanEval 등 | ~10편 |

---

## 🔗 주요 연결

- **[[02-Knowledge/LLM-Knowledge-Map/01_LLM_아키텍처]]** ← Transformer → **[[02-Knowledge/LLM-Knowledge-Map/03_추론_최적화]]** (KV Cache)
- **[[02-Knowledge/LLM-Knowledge-Map/02_학습_방법론]]** → GRPO → **[[02-Knowledge/LLM-Knowledge-Map/04_파인튜닝]]** (PEFT with RL)
- **[[02-Knowledge/LLM-Knowledge-Map/05_컨텍스트_메모리]]** → **[[02-Knowledge/LLM-Knowledge-Map/06_에이전트_LLM]]** (Agent Memory)
- **[[02-Knowledge/LLM-Knowledge-Map/01_LLM_아키텍처]]** → MoE → **[[02-Knowledge/LLM-Knowledge-Map/03_추론_최적화]]** (MoE Inference)

---

## 📊 빠른 통계

- 총 논문: **200+ 편** (10_Wiki 146편 + wiki 60+편)
- 주요 키워드: Transformer, MoE, KV Cache, GRPO, PEFT, Agent, RLHF
- 최신 트렌드(2026.05): Agent-native LLM, Self-Evolving Memory, Alignment Tampering 방어
