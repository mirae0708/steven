---
source: GitHub virgiliojr94/book-to-skill (⭐351)
absorbed: 2026-05-07 00:30
category: skill
type: knowledge_ingestion
---

# PDF-to-Skill Pipeline

**Source**: [book-to-skill](https://github.com/virgiliojr94/book-to-skill) by virgiliojr94 — Transform technical book PDFs into structured Claude Code skills

## Key Concepts

### Architecture
- **PDF Ingestion**: Parses technical book PDFs (with table of contents, code blocks, diagrams)
- **Skill Structure Generation**: Auto-generates structured skill files with:
  - Key concepts and definitions
  - Code patterns and examples
  - Reference documentation
  - Practice/study exercises
- **Ready-to-Use Skills**: Output is a Claude Code skill that can be immediately loaded
- **Study Mode**: Skills can be used for interactive study — query concepts, get explanations
- **Reference Mode**: Skills serve as contextual reference during active work sessions

### Key Patterns for Hermes

1. **Structured Extraction Pipeline**:
   - TOC-based chapter segmentation → concept extraction → code pattern isolation → skill compilation
   - Each chapter becomes a skill component with cross-references

2. **Code-First Skill Design**:
   - Extracted code blocks become ready-to-run examples
   - Functions/methods get their own skill entries with usage patterns
   - Anti-patterns and caveats documented alongside examples

3. **Contextual Reference Injection**:
   - When working on a related task, inject relevant skill sections into context
   - Lazy-load skill components to avoid context overflow

## Hermes Application

### Ingestion Pipeline Enhancement

1. **Technical Book → Hermes Skill**:
   - Any PDF technical book can become a reusable Hermes skill
   - Auto-extract: key algorithms → tool definitions, APIs → function signatures, patterns → prompt templates
   
2. **Knowledge Base Enrichment**:
   - Books on AI/ML, programming, system design → structured knowledge graphs
   - Code examples → executable test cases in Hermes' skill test suite

3. **Active Learning Loop**:
   - After ingesting a book, Hermes can self-test on extracted concepts
   - Knowledge gaps identified → trigger additional search/ingestion

### Pipeline Flow

```
PDF Book → TOC Parse → Chapter Extraction
                       ├── Concepts → Knowledge Graph Nodes
                       ├── Code     → Executable Skill Functions
                       ├── Examples → Test Cases
                       └── Exercises→ Validation Benchmarks
                                ↓
                    Hermes Skill Package (.skill)
```

## Related Skills
- [[../LLM/virgiliojr94book-to-skill_20260507_0000|Original Document]]
- [[./_Index#10-iterative-schema-exploration|Iterative Schema Exploration (FlexSQL)]]
- [[./_Index|AI Agents Knowledge Base]]
