---
source: arxiv
collected: 2026-05-12 19:00
category: Artificial_Intelligence/Deep_Learning


authors: Keya Hu, Linlu Qiu, Yiyang Lu
---

# ELF: Embedded Language Flows



👤 Keya Hu, Linlu Qiu, Yiyang Lu

> Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion langua

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10938v1)

## Key Takeaways
1. **Core innovation**: Continuous diffusion language models can be made effective with minimal adaptation. ELF operates in continuous embedding space using Flow Matching, only mapping to discrete tokens at the final time step.
2. **Key advantage**: Can directly adapt established image-domain techniques (e.g., classifier-free guidance / CFG) that discrete DLMs cannot easily use.
3. **Results**: Substantially outperforms leading discrete and continuous DLMs with fewer sampling steps.
4. **Technical approach**: Shared-weight network maps continuous embeddings to discrete tokens at final step. Continuous-time Flow Matching formulation.
5. **Hermes relevance**: Indicates a trend toward continuous-space language modeling that bypasses tokenization boundaries — relevant to understanding the trajectory of generative architectures.

---
_Automatically collected by Hermes Tech Brain Sync_
