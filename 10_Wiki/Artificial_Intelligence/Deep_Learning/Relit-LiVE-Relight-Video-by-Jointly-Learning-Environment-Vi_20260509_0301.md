---
source: arxiv
collected: 2026-05-09 03:01
category: Artificial_Intelligence/Deep_Learning


authors: Weiqing Xiao, Hong Li, Xiuyu Yang, Houyuan Chen, Wenyi Li, Tianqi Liu, Shaocong Xu, Chongjie Ye, Hao Zhao, Beibei Wang
---

# Relit-LiVE: Relight Video by Jointly Learning Environment Video



👤 Weiqing Xiao, Hong Li, Xiuyu Yang

> Recent advances have shown that large-scale video diffusion models can be repurposed as neural renderers by first decomposing videos into intrinsic scene representations and then performing forward rendering under novel illumination. While promising, this paradigm fundamentally relies on accurate in

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.06658v1)

## Key Takeaways

### Motivation & Problem
- Existing neural rendering approaches rely on intrinsic decomposition (albedo, normal, roughness) followed by forward rendering under novel illumination. This paradigm is unreliable for real-world videos — intrinsic decomposition often produces distorted appearances, broken materials, and accumulated temporal artifacts during relighting.

### Core Contribution
- **Relit-LiVE**: A novel video relighting framework that produces physically consistent, temporally stable results without requiring prior knowledge of camera pose.
- Key insight: explicitly introduce raw reference images into the rendering process, so the model can recover critical scene cues lost or corrupted in intrinsic representations.

### Environment Video Prediction
- Proposes a **novel environment video prediction formulation** that jointly generates relit videos and per-frame environment maps aligned with each camera viewpoint in a single diffusion process.
- This joint prediction enforces strong geometric-illumination alignment and naturally supports dynamic lighting and camera motion, easing the requirement of known per-frame camera pose.

### Results & Applications
- Consistently outperforms state-of-the-art video relighting and neural rendering methods across synthetic and real-world benchmarks.
- Accepted at **SIGGRAPH 2026**.
- Naturally supports downstream applications: scene-level rendering, material editing, object insertion, and streaming video relighting.
- Open-source: [github.com/zhuxing0/Relit-LiVE](https://github.com/zhuxing0/Relit-LiVE)

---
_Automatically collected by Hermes Tech Brain Sync_
