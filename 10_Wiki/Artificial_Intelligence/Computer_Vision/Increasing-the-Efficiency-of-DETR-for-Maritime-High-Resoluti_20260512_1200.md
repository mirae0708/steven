---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/Computer_Vision


authors: Tinsae Yehuala, Hao Cheng, Ville Lehtola
---

# Increasing the Efficiency of DETR for Maritime High-Resolution Images



👤 Tinsae Yehuala, Hao Cheng, Ville Lehtola

> Maritime object detection is critical for the safe navigation of unmanned surface vessels (USVs), requiring accurate recognition of obstacles from small buoys to large vessels. Real-time detection is challenging due to long distances, small object sizes, large-scale variations, edge computing limita

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10269v1)

## Key Takeaways
**(a) Core Problem:** Real-time maritime object detection for unmanned surface vessels (USVs) faces challenges from long distances, small objects, large-scale variations, edge computing constraints, and high memory demands of high-resolution imagery. Existing solutions (downsampling, splitting) degrade accuracy or add complexity, while memory-efficient models handle only limited resolutions.

**(b) Method/Mechanism:** The authors leverage Vision Mamba (ViM) backbones built on State Space Models (SSMs) to capture long-range dependencies with linear scaling in sequence length. Images are tokenized into sequences for efficient high-resolution processing. A tailored Feature Pyramid Network with successive downsampling and SSM layers is designed, plus token pruning to reduce computation on background regions.

**(c) Results:** The approach achieves a better balance between performance and computational efficiency compared to state-of-the-art methods like RT-DETR with ResNet-50 backbone for maritime object detection. Accepted to IEEE ITSC 2026.

**(d) Hermes Relevance Assessment:** Moderately relevant. Demonstrates application of SSM-based architectures (Mamba) to a real-world vision task — relevant for Hermes' interest in efficient, edge-deployable models and alternatives to traditional attention mechanisms. The token pruning and efficient FPN design are practical contributions for resource-constrained vision pipelines.

---
_Automatically collected by Hermes Tech Brain Sync_
