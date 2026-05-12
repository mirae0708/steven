---
source: arxiv
collected: 2026-05-12 19:00
category: Artificial_Intelligence/LLM


authors: Haoyuan Sun, Jing Wang, Yuxin Song
---

# Power Reinforcement Post-Training of Text-to-Image Models with Super-Linear Advantage Shaping



👤 Haoyuan Sun, Jing Wang, Yuxin Song

> Recently, post-training methods based on reinforcement learning, with a particular focus on Group Relative Policy Optimization (GRPO), have emerged as the robust paradigm for further advancement of text-to-image (T2I) models. However, these methods are often prone to reward hacking, wherein models e

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10937v1)

## Key Takeaways
1. **Core problem**: RL-based post-training for T2I models (e.g., GRPO) is prone to reward hacking — models exploit biases in imperfect reward functions rather than gaining genuine performance.
2. **SLAS method**: Super-Linear Advantage Shaping extends the Fisher-Rao information metric with advantage-dependent weighting. Introduces non-linear geometric structure that relaxes constraints along high-advantage directions (amplify informative updates) while tightening in low-advantage regions (suppress illusory gradients).
3. **Key improvement**: Batch-level normalization stabilizes training under varying reward scales. Outperforms DanceGRPO baseline across multiple backbones.
4. **Results**: Faster training dynamics, improved out-of-domain performance on GenEval and UniGenBench++, enhanced robustness to model scaling, while mitigating reward hacking.
5. **Hermes relevance**: Fisher-Rao information geometry approach to reward shaping could inform Hermes's RL-based optimization strategies for agent skill learning.

---
_Automatically collected by Hermes Tech Brain Sync_
