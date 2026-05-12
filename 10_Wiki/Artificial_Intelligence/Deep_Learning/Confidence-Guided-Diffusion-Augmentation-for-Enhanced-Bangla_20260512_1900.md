---
source: arxiv
collected: 2026-05-12 19:00
category: Artificial_Intelligence/Deep_Learning


authors: Md. Sultan Al Rayhan, Maheen Islam
---

# Confidence-Guided Diffusion Augmentation for Enhanced Bangla Compound Character Recognition



👤 Md. Sultan Al Rayhan, Maheen Islam

> Recognition of handwritten Bangla compound characters remains a challenging problem due to complex character structures, large intra-class variation, and limited availability of high-quality annotated data. Existing Bangla handwritten character recognition systems often struggle to generalize across

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.10916v1)

## Key Takeaways
1. **Application area**: Low-resource OCR for handwritten Bangla compound characters (complex ligatures, diacritical variations).
2. **Method**: Confidence-guided diffusion augmentation combining class-conditional diffusion with classifier guidance quality gates. Uses Squeeze-and-Excitation enhanced residual blocks and confidence-based filtering.
3. **Results**: 89.2% classification accuracy on AIBangla dataset — surpasses previous benchmark by substantial margin. Consistent improvements across ResNet50, DenseNet121, VGG16, Vision Transformer.
4. **Key technique**: Quality-aware synthetic data filtering via pre-trained classifier confidence gates before fusing with training data.
5. **Hermes relevance**: Limited — specialized OCR domain. The quality-gated synthetic augmentation pattern (filter before train) is a generally useful ML pipeline technique.

---
_Automatically collected by Hermes Tech Brain Sync_
