---
source: arXiv
collected: 20260505_1021
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-03
language: Paper
authors: Favour Nerrise, Lucy Yin, Mohammad H. Abbasi
---

# GeoSAE: Geometric Prior-Guided Layer-Wise Sparse Autoencoder Annotation of Brain MRI Foundation Models

> **Source:** [arXiv](http://arxiv.org/abs/2605.01829v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260505_1021

## Summary

Brain MRI foundation models learn rich representations of anatomy, but interpreting what clinical information they encode remains an open problem. Standard sparse autoencoders (SAEs) suffer from severe feature collapse in deep transformer layers, and in Alzheimer's disease (AD) research, aging confounds nearly every clinical variable, making naive annotation unreliable.

### Key Contribution

GeoSAE is a **geometry-guided SAE framework** that uses the foundation model's learned manifold structure to prevent feature collapse and annotates each surviving feature via age-deconfounded partial correlations.

### Technical Approach

1. **Geometric Prior:** Leverages the foundation model's learned manifold structure to prevent feature collapse that plagues standard SAEs in deep transformer layers.
2. **Age-Deconfounded Annotation:** Uses partial correlations to disentangle true disease signals from aging confounds, since aging correlates with nearly every clinical variable in AD research.
3. **Layer-Wise Application:** Applied across transformer layers to extract interpretable features at each level of representation.

### Results

- **Dataset:** ~14k T1-weighted MRI scans from ADNI (Alzheimer's Disease Neuroimaging Initiative) and AIBL (Australian Imaging Biomarkers and Lifestyle).
- **Compact Interpretable Features:** Identifies a fully interpretable feature set using only **2% of the embedding dimensions** that predicts MCI-to-AD conversion with **AUC 0.746**.
- **Comorbidity baseline:** Comorbidity-annotated features achieve only chance-level performance, validating GeoSAE's approach.
- **Cross-Cohort Replication:** Features replicate across cohorts without retraining (r = 0.97).
- **Neuroanatomical Localization:** Identified features localize to neuroanatomically distinct regions consistent with **Braak staging** (the established pathological staging of Alzheimer's disease).

### Significance

GeoSAE demonstrates that geometry-guided SAEs can extract interpretable biomarkers from frozen brain MRI foundation models, offering a pathway to clinically meaningful feature discovery without task-specific fine-tuning.

### Subjects

Computer Vision and Pattern Recognition (cs.CV); Artificial Intelligence (cs.AI); Machine Learning (cs.LG)

### Code

[https://github.com/favour-nerrise/GeoSAE](https://github.com/favour-nerrise/GeoSAE)

## Original

[GeoSAE: Geometric Prior-Guided Layer-Wise Sparse Autoencoder Annotation of Brain MRI Foundation Models](http://arxiv.org/abs/2605.01829v1)
