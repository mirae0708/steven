---
source: arxiv
collected: 2026-05-09 01:00
category: Tools/DevTools


authors: Omar El Khalifi, Thomas Rossi, Oscar Fossey
---

# ActCam: Zero-Shot Joint Camera and 3D Motion Control for Video Generation



👤 Omar El Khalifi, Thomas Rossi, Oscar Fossey

> For artistic applications, video generation requires fine-grained control over both performance and cinematography, i.e., the actor's motion and the camera trajectory. We present ActCam, a zero-shot method for video generation that jointly transfers character motion from a driving video into a new s

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.06667v1)

## Key Takeaways

- **Zero-shot joint control** – ActCam transfers character motion from a driving video into a new scene while enabling per-frame control of intrinsic and extrinsic camera parameters, all without any training or fine-tuning.
- **Two-phase conditioning schedule** – Early denoising steps use both pose and sparse depth to enforce scene structure; later steps drop depth and use only pose guidance to refine high-frequency details without over-constraining the output.
- **Geometric consistency** – Generates pose and depth conditions that remain geometrically consistent across frames, enabling coherent camera trajectories even under large viewpoint changes.
- **Stronger than pose-only baselines** – Outperforms pose-only control and other pose+camera methods in camera adherence and motion fidelity, with human evaluations preferring ActCam especially under large viewpoint changes.
- **Plug-and-play design** – Works on any pretrained image-to-video diffusion model that accepts depth and pose conditioning, making it broadly applicable without model-specific modifications.
- **Accepted at SIGGRAPH 2026.**

---
_Automatically collected by Hermes Tech Brain Sync_
