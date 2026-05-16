---
source: arxiv
collected: 2026-05-12 12:00
category: Artificial_Intelligence/Computer_Vision


authors: Yinan Deng, Jianyu Dou, Jiahui Wang
---

# PaMoSplat: Part-Aware Motion-Guided Gaussian Splatting for Dynamic Scene Reconstruction



👤 Yinan Deng, Jianyu Dou, Jiahui Wang

> Dynamic scene reconstruction represents a fundamental yet demanding challenge in computer vision and robotics. While recent progress in 3DGS-based methods has advanced dynamic scene modeling, obtaining high-fidelity rendering and accurate tracking in scenarios with substantial, intricate motions rem

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10307v1)

## Key Takeaways
- **Part-aware dynamic Gaussian splatting**: PaMoSplat treats coherent 3D parts as deformation primitives (via graph clustering on lifted multi-view segmentation masks), enabling robust modeling of intricate motions.
- **Motion-guided rigid estimation**: A differential evolutionary algorithm uses multi-view optical flow cues to estimate rigid motion of each part across timestamps, providing a strong warm-start for optimization.
- **Training innovations**: Introduces adaptive iteration count, internal learnable rigidity per part, and flow-supervised rendering loss to accelerate convergence and improve optimization quality.
- **Superior results**: Outperforms existing dynamic 3DGS methods in rendering quality, tracking precision, and convergence speed across diverse scenes including real-world environments.
- **4D editing capability**: The part-level decomposition naturally enables downstream applications like 4D scene editing and manipulation.

---
_Automatically collected by Hermes Tech Brain Sync_
