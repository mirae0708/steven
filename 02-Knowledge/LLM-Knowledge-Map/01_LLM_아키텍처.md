# 01. LLM 아키텍처

> **Transformer, Attention 메커니즘, Mixture-of-Experts (MoE)**  
> 관련 논문: ~25편 (10_Wiki/Artificial_Intelligence/LLM)

---

## 1. Transformer 아키텍처

LLM의 근간은 **Transformer (Vaswani et al., 2017)** 아키텍처다.

### 핵심 구성요소

| 구성요소 | 역할 | 최신 발전 |
|----------|------|-----------|
| **Multi-Head Attention** | 입력 간 관계 학습 | Sparse Attention, DashAttention |
| **Feed-Forward Network** | 비선형 변환 | MoE (Mixture of Experts)로 대체 |
| **Layer Normalization** | 학습 안정화 | Pre-LN, RMSNorm |
| **Positional Encoding** | 위치 정보 | RoPE (Rotary Position Embedding) |

### 구조 변형

| 변형 | 특징 | 대표 모델 |
|------|------|-----------|
| Encoder-Decoder | 입력+출력 모두 처리 | T5, BART |
| Decoder-Only (Causal LM) | 자기회귀 생성 | GPT, Llama, Qwen |
| Encoder-Only | 문맥 이해 중심 | BERT, RoBERTa |

---

## 2. Attention 메커니즘 발전

### 기존: Full Attention (O(n²))
- 모든 토큰 쌍 간 attention 계산
- **한계:** 128K+ 컨텍스트에서 O(n²)가 병목

### 최신 발전

#### 🔹 AB-Sparse Attention (2026.05)
- **Adaptive Block Size**로 sparse attention 구현
- 중요한 블록은 크게, 덜 중요한 블록은 작게
- **결과:** Full Attention 대비 40% 속도 향상, 정확도 유지

#### 🔹 DashAttention (2026.05)
- **Differentiable + Adaptive Sparse Hierarchical Attention**
- 계층적 sparse 구조를 미분 가능하게 설계
- 학습 가능한 attention sparsity 패턴

#### 🔹 Sparse Attention 일반 트렌드
- Sliding Window + Global Token 조합
- Query-Key sparsity 학습
- Hardware-aware attention (Flash Attention 계열)

---

## 3. Mixture-of-Experts (MoE)

**가장 중요한 아키텍처 혁신** — 모든 주요 LLM이 MoE로 전환 중

### 기본 구조
```
Input → Router → [Expert 1] [Expert 2] ... [Expert N]
                 → Top-K experts만 활성화
                 → Gated weighted sum 출력
```

### 최신 연구

#### 🔹 DECO: Sparse MoE with Dense-Comparable Performance (2026.05)
- **핵심:** 기존 Dense 모델 성능을 유지하면서 MoE의 효율 달성
- **방법:** 
  - 새로운 라우팅 메커니즘 (DECO Routing)
  - Expert 간 부하 균형 자동 조정
  - 학습 안정성 향상
- **결과:** 동일 FLOPs 대비 Dense 모델 성능 능가

#### 🔹 ReMoE: Boosting Expert Reuse (2026.05)
- **핵심:** Router Fine-Tuning을 통한 Expert 재사용 최적화
- **방법:**
  - 기존 학습된 MoE의 router만 fine-tuning
  - Expert 간 지식 전이 학습
  - 불필요한 expert 제거 (가지치기)
- **결과:** Expert 활용도 35% 향상, 추론 속도 20% 개선

#### 🔹 EMO: Emergent Modularity (2026.05)
- **핵심:** MoE를 pretrain할 때 modularity가 자연발생함
- **발견:** 학습 초기에는 전문성이 없지만, 일정 임계점 넘으면 각 expert가 자연히 전문화
- **시사점:** MoE pretrain 전략 설계의 새로운 방향

### 주요 MoE 모델

| 모델 | Expert 수 | Top-K | 활성화 파라미터 | 특징 |
|------|-----------|-------|----------------|------|
| Mixtral 8x7B | 8 | 2 | 12.9B | 최초의 오픈 MoE |
| Qwen3-Coder-30B-A3B | 다수 | 다수 | 3B | 가장 효율적인 코딩 LLM |
| GLM-4.5-Air | 106B total | — | — | Agent-optimized |
| DeepSeek-V3 | 256 experts | 8 | 37B | MLA + MoE 결합 |

---

## 4. 기타 최신 아키텍처 연구

### PALS: Power-Aware LLM Serving for MoE (2026.05)
- MoE 모델 서빙 시 **전력 효율** 최적화
- Expert 배치를 전력 소모와 지연 시간 균형
- **결과:** 전력 소모 30% 감소, 지연 시간 유지

### LLMSurgeon: Data Mixture Diagnosis (2026.05)
- LLM 학습 데이터 구성을 진단하는 도구
- 어떤 데이터가 어떤 능력에 기여하는지 분석

---

## 🔗 관련 문서

- [[02-Knowledge/LLM-Knowledge-Map/03_추론_최적화]] — Transformer의 KV Cache, 추론 최적화
- [[02-Knowledge/LLM-Knowledge-Map/02_학습_방법론]] — MoE 학습 방법
- [[02-Knowledge/LLM-Knowledge-Map/_Index]] ← 돌아가기
