---
source: arXiv 2605.05097 (Andreas Pattichis, Constantine Dovrolis)
absorbed: 2026-05-07 12:30
category: skill
type: memory_architecture
---

# Multi-Timescale Memory Dynamics for Continual Knowledge Updating

**Source**: [Continual Knowledge Updating in LLM Systems: Learning Through Multi-Timescale Memory Dynamics](http://arxiv.org/abs/2605.05097v1) — arXiv 2026-05-06

## Key Concepts

### Problem
LLMs are trained once but deployed in an ever-changing world. External memory systems compensate, but most manage it explicitly (rule-based) rather than letting it adapt organically.

### Solution: Multi-Timescale Memory Dynamics
Biological memory works with coupled multi-timescale dynamics:
- **Short-term (fast)**: New associations immediately usable but quickly overwritten
- **Medium-term (intermediate)**: Consolidation of important patterns from short-term
- **Long-term (slow)**: Stable knowledge that persists across sessions

### Key Innovations
- **Self-organizing memory**: No explicit rules — memory adapts based on usage patterns and reinforcement
- **Coupling between timescales**: Short-term→medium-term consolidation happens naturally through rehearsal-like mechanisms
- **Immediate usability**: New knowledge is available right away (in short-term) while being gradually consolidated

## Hermes Application

### Memory Architecture Enhancement
Directly applicable to Hermes' current memory system:

1. **Three-Tier Memory**:
   - **Working Memory (fast)**: Current conversation context, immediate task state — volatile, high-capacity
   - **Episodic Memory (medium)**: Recent task outcomes, useful patterns from last N interactions — consolidated from working
   - **Semantic Memory (slow)**: Core skills, knowledge base, persistent learnings — stable, long-lasting

2. **Automatic Consolidation**:
   - Patterns that appear frequently in working memory → promoted to episodic
   - Episodic patterns with high utility/reward → consolidated to semantic
   - Forgetting: Low-utility memories decay naturally

3. **Immediate New Knowledge**:
   - New info from wiki scans immediately available in working memory
   - If referenced again soon → promoted to episodic
   - If consistently useful across cycles → semantic memory

### Implementation Sketch
```python
class MultiTimescaleMemory:
    def __init__(self):
        self.working = WorkingMemory(capacity=100, decay_hours=1)
        self.episodic = EpisodicMemory(capacity=1000, decay_hours=24)
        self.semantic = SemanticMemory(decay_hours=720)  # ~30 days
    
    def store(self, item, importance=0.5):
        self.working.store(item, importance)
    
    def consolidate(self):
        # Promote frequently accessed working items to episodic
        for item in self.working.hot_items():
            self.episodic.store(item)
        # Promote high-utility episodic items to semantic
        for item in self.episodic.high_value_items():
            self.semantic.store(item)
        # Decay low-utility items
        self.working.decay()
        self.episodic.decay()
    
    def retrieve(self, query):
        # Search all tiers, prioritize higher tiers (faster)
        results = []
        results.extend(self.semantic.search(query))
        results.extend(self.episodic.search(query))
        results.extend(self.working.search(query))
        return results
```

## Related Skills
- [[./_Index#12-intent-driven-memory|Intent-Driven Memory (MemFlow)]]
- [[./_Index#13-quantized-kv-handoff|Quantized KV-Cache Handoff (QKVShare)]]
- [[Continual Knowledge Updating in LLM Systems Learning Throug_20260507_1122|Original Document]]
