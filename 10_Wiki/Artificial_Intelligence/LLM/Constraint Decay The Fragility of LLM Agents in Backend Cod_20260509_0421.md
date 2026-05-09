---
source: arXiv
collected: 20260509_0421
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-07
language: Paper
authors: Francesco Dente, Dario Satriani, Paolo Papotti
---

# Constraint Decay: The Fragility of LLM Agents in Backend Code Generation

> **Source:** [arXiv](http://arxiv.org/abs/2605.06445v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260509_0421

## Summary

LLM 에이전트의 "Constraint Decay(제약 붕괴)" 현상 발견. 구조적 제약이 쌓일수록 성능 급락 — Python Flask에선 잘 작동하나 Django/FastAPI 같은 컨벤션-헤비 환경에서 30%p 이상 Pass Rate 하락. ORM 런타임 오류가 주요 원인. → 생산 환경에서 LLM 코딩 에이전트 사용 시 구조적 제약 준수가 핵심 과제.

## Original

[Constraint Decay: The Fragility of LLM Agents in Backend Code Generation](http://arxiv.org/abs/2605.06445v1)
