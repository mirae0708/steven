---
source: arxiv
collected: 2026-05-04 15:01
category: Artificial_Intelligence/LLM


authors: Pavlin G. Poličar, Andraž Pevcin, Blaž Zupan
---

# Generating Statistical Charts with Validation-Driven LLM Workflows



👤 Pavlin G. Poličar, Andraž Pevcin, Blaž Zupan

> Generating diverse, readable statistical charts from tabular data remains challenging for LLMs, as many failures become apparent after rendering and are not detectable from data or code alone. Existing chart datasets also rarely provide fully aligned artifacts, such as executable code, dataset conte

## Links
- 🔗 [Original](http://arxiv.org/abs/2605.00800v1)

|## Key Takeaways
- Structured LLM workflow: dataset screening → plot proposal → code → render → validate → describe → QA
- Rendered-output validation catches readability/mismatch failures invisible from code alone
- Produced 1,500 charts from 74 UCI datasets, 24 chart families, 30,003 QA pairs
- 16 MLLMs evaluated: chart-syntax questions nearly saturated, but value extraction/comparison/reasoning remain hard
- Treats chart generation as inspectable process, not one-shot prompt-to-code

---
_Automatically collected by Hermes Tech Brain Sync_
