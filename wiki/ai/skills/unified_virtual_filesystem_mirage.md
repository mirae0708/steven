|---
source: GitHub strukto-ai/mirage (⭐301)
absorbed: 2026-05-07 18:30
category: skill
type: integration_pattern
---

# Unified Virtual Filesystem for AI Agents (Mirage)

**Source**: [strukto-ai/mirage](https://github.com/strukto-ai/mirage) — A Unified Virtual Filesystem for AI Agents (⭐301, TypeScript/Python)

## Key Concepts

### What It Is
Mirage provides a single virtual filesystem tree that mounts services and data sources (S3, Google Drive, Slack, Gmail, GitHub, Notion, Linear, Redis, Discord, SSH, etc.) side-by-side as one filesystem. AI agents interact with every backend using the same handful of Unix-like tools (cat, cp, grep, wc, find, jq) — no need to learn N different APIs.

### Core Architecture
- **Workspace**: Root filesystem that mounts multiple resources under a single tree
- **Resource**: Backend driver for each service (S3Resource, SlackResource, GitHubResource, etc.)
- **Dispatcher + Cache**: Routes operations to the right resource, caches for performance
- **Bash Execution Layer**: Runs bash-like commands across all mounted resources transparently

### Key Innovations
1. **Zero new vocabulary for LLMs**: Any LLM that knows bash can use Mirage out of the box
2. **Cross-service pipelines**: `grep alert /slack/general/*.json | wc -l` — pipes data across services
3. **Custom commands per resource+filetype**: Override `cat` for Parquet files in S3 to render JSON instead of raw bytes
4. **Portable workspaces**: Clone, snapshot, and version environments — move between machines

## Hermes Application

### Direct Integration Points

1. **Unified Data Access via Mirage CLI**:
   - Mount S3, GDrive, GitHub as a filesystem and access them through bash commands
   - Hermes could use Mirage via `subprocess` or Python SDK to access any mounted service
   - Eliminates need for separate API wrappers per service

2. **Windows/WSL Bridge Enhancement**:
   - Mirage mounts could unify the Windows filesystem (C: drive) with WSL paths seamlessly
   - Agents see one filesystem instead of /mnt/c/ vs /home/ dichotomy

3. **Portable Agent Workspaces**:
   - Snapshot and version the entire agent workspace (tools, configs, state)
   - Reproduce agent runs across machines without manual reconfiguration

4. **MCP Integration Pattern**:
   - Mirage works with major agent frameworks (OpenAI SDK, LangChain, Claude Code, Codex)
   - Can be integrated as an MCP server providing filesystem tool access
   - Each mounted resource becomes automatically available via bash tools

### CLI Usage Pattern
```bash
# Install
pip install mirage-ai

# Mount multiple services
mirage mount /data --ram
mirage mount /s3 --s3 bucket=my-bucket
mirage mount /slack --slack

# Use bash tools across all mounts
mirage exec 'cat /s3/reports/summary.csv'
mirage exec 'grep error /slack/general/*.json'
mirage exec 'cp /github/repo/README.md /data/'
```

### Python SDK Pattern
```python
from mirage import Workspace
from mirage.resources import S3Resource, SlackResource, GitHubResource

ws = Workspace({
    '/data':  RAMResource(),
    '/s3':    S3Resource({ 'bucket': 'logs' }),
    '/slack': SlackResource({}),
    '/github': GitHubResource({}),
})

# Cross-service pipeline in one command
result = await ws.execute('grep alert /slack/general/*.json | wc -l')
```

## Applicability Assessment

- **Makes Hermes smarter?** ✅ — Reduces cognitive load on multi-service access; agents lean on familiar bash skills
- **Extends functionality?** ✅ — Unified access to S3, Gmail, Slack, GitHub, GDrive, Notion, Linear through one interface
- **Value to user?** ✅ — Dramatically reduces integration effort for new data sources; portable workspaces

## Related Skills
- [[./desktop_mcp_agent_integration|Desktop MCP Agent Integration (craft-agents-oss)]]
- [[./memetic_tool_retrieval|Memetic Tool Retrieval (FitText)]]
- [[../MCP/_Index|MCP Knowledge Base]]
