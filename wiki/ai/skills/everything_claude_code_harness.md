---
source: GitHub affaan-m/everything-claude-code (⭐174,715)
absorbed: 2026-05-07 12:30
category: skill
type: agent_framework
---

# Everything Claude Code — Agent Harness Optimization

**Source**: [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) — 174,715 ⭐

## Key Concepts

### What It Is
An agent harness performance optimization system for Claude Code, Codex, Opencode, Cursor, and other agent IDEs. Focuses on: skills, instincts, memory, security, and research-first development.

### Core Components

1. **Skills System**: Structured, reusable skill modules for common tasks
2. **Instincts**: Pre-configured behavioral patterns (reaction to errors, git workflows, testing habits)
3. **Memory Framework**: Persistent memory across sessions with structured recall
4. **Security Layer**: Sandboxing, permission gating, audit trails for agent actions
5. **Research-First Dev**: Systematic approach to exploration vs exploitation in coding tasks

### Key Patterns for Hermes

| Pattern | Description |
|---------|-------------|
| **Skill Packaging** | Skills are self-contained with tests, prompts, tool deps |
| **Instinct Hooks** | Trigger behaviors on events (git commit, test fail, npm install) |
| **Security Gates** | Permission levels for file system, network, shell access |
| **Performance Budgets** | Track token usage, latency, cost per skill execution |

## Hermes Application

### Direct Integration Points

1. **Instinct System**: Pre-configure behavioral patterns for common scenarios
   - "On git conflict → analyze both branches before merging"
   - "On test failure → run minimal reproduction before full suite"
   - "On npm install → verify package integrity before executing scripts"

2. **Security Gates**: Implement tiered permissions for Hermes' tool access
   - Level 0: Read-only (file browsing, search)
   - Level 1: Write (file creation, editing)
   - Level 2: Execute (shell commands, process management)
   - Level 3: System (network, install, config changes)

3. **Performance Tracking**: Monitor and optimize Hermes' own efficiency
   - Track tool call latency per type
   - Budget context window per task
   - Auto-prioritize high-value operations

## Related Skills
- [[./_Index#7-agentic-red-teaming|Agentic Red Teaming]]
- [[./_Index#14-slm-text-to-sql|SLM Text-to-SQL]]
- [[affaan-meverything-claude-code_20260507_1120|Original Document]]
