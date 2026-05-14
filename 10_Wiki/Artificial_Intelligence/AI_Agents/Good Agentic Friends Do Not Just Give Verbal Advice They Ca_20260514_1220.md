---
source: arXiv
collected: 20260514_1220
category: Artificial_Intelligence/AI_Agents
stars: arXiv 2026-05-13
language: Paper
authors: Wenrui Bao, Huan Wang, Jian Wang
---

# Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights

> **Source:** [arXiv](http://arxiv.org/abs/2605.13839v1)
> **Category:** Artificial_Intelligence/AI_Agents
> **Collected:** 20260514_1220

## Summary

Multi-agent LLM systems usually collaborate by exchanging natural-language messages. This interface is simple and interpretable, but it forces each sender's intermediate computation to be serialized into tokens and then reprocessed by the receiver, thereby increasing the generated-token cost, prefill overhead, and KV-cache memory. We study an alternative communication interface: instead of appending a sender's message to the receiver's context, compile the sender's hidden states into a transient, receiver-specific weight perturbation. We introduce TFlow (Thought Flow), a weight-space communication framework for a known and fixed receiver architecture. For each query, frozen role-prompted sender agents process the input, and a learned parameter generator maps their internal activations into low-rank LoRA perturbations targeting the receiver's modules. These perturbations are fused and applied only during the receiver's generation, enabling instance-level adaptation without permanently changing the model or enlarging the receiver's text context. With three Qwen3-4B agents, TFlow improves over a standalone receiver by up to 8.5 accuracy points across five benchmarks while reducing processed tokens by up to 32.69%. Compared with a text-based three-agent baseline, it reduces total processed tokens by up to 83.27% and the wall-clock inference time by up to 4.6×, while maintaining competitive accuracy on four of five benchmarks.

## Key Takeaways

1. **Weight-space communication**: 기존 multi-agent 간 텍스트 메시지 교환 대신, sender의 hidden states를 LoRA weight perturbation으로 컴파일하여 receiver에 전달 — token cost와 KV-cache 절감
2. **TFlow (Thought Flow)**: Learned parameter generator가 sender의 internal activations를 receiver-specific LoRA perturbation으로 매핑
3. **Token 83% 절감**: 텍스트 기반 3-agent 대비 total processed tokens 최대 83.27% 감소, inference time 최대 4.6× 단축
4. **정확도 유지**: 5개 벤치마크 중 4개에서 경쟁력 있는 정확도 유지 (최대 +8.5%p 향상)
5. **Instance-level adaptation**: 영구적 모델 변경 없이 generation 중에만 perturbation 적용

**→ Hermes 적용**: Multi-LLM Roundtable 시스템에서 에이전트 간 통신 효율성 개선 가능. 특히 weight-space communication은 Trio Brainstorming Lab (Hermes × MetaClaw × CowAgent)에서 context window 압박 없이 협업하는 방법으로 연구 가치 있음.

## Original

[Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights](http://arxiv.org/abs/2605.13839v1)
