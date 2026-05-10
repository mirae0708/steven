---
source: arXiv
collected: 20260509_0421
category: Artificial_Intelligence/LLM
stars: arXiv 2026-05-07
language: Paper
authors: Josh Rosen, Seth Rosen
---

# From Agent Loops to Deterministic Graphs: Execution Lineage for Reproducible AI-Native Work

> **Source:** [arXiv](http://arxiv.org/abs/2605.06365v1)
> **Category:** Artificial_Intelligence/LLM
> **Collected:** 20260509_0421

## Summary

AI 작업(agent loop)을 DAG(방향성 비순환 그래프)로 표현하는 Execution Lineage 모델 제안. Loop 기반 업데이트와 달리 DAG replay가 (1) 무관 브랜치 오염 제로, (2) 중간 아티팩트 완벽 보존, (3) 변경 전파의 일관성 보장. 정답 품질과 상태 유지 품질은 별개의 문제임을 입증. → Hermes의 작업 파이프라인에 DAG 기반 실행 모델 도입 가능성 시사.

## Key Takeaways
- Execution Lineage: AI agent loop 출력을 DAG로 표현 → 재현 가능한 AI-Native 작업
- Loop 기반 업데이트의 문제: 무관 브랜치 오염, 중간 아티팩트 손실, 변경 전파 불일치
- DAG replay: (1) 무관 브랜치 오염 제로, (2) 중간 아티팩트 완벽 보존, (3) 변경 전파 일관성 보장
- 정답 품질과 상태 유지 품질은 별개의 문제
- → Hermes 작업 파이프라인에 DAG 기반 실행 모델 도입 가능성 시사

## Original

[From Agent Loops to Deterministic Graphs: Execution Lineage for Reproducible AI-Native Work](http://arxiv.org/abs/2605.06365v1)
