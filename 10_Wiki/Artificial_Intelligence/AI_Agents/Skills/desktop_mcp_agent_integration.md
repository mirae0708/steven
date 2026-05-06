---
source: GitHub warpdot-dev/craft-agents-oss (⭐229)
absorbed: 2026-05-07 00:30
category: skill
type: integration_pattern
---

# Desktop MCP Agent Integration

**Source**: [craft-agents-oss](https://github.com/warpdot-dev/craft-agents-oss) by warpdot-dev — Electron desktop AI agent framework

## Key Concepts

### Architecture
- **Electron-based Desktop App**: Runs as a native desktop application (Windows/Linux/Mac) with AI agent capabilities
- **MCP (Model Context Protocol)**: Built-in MCP server/client for tool integration — same protocol Hermes uses
- **WebSocket Thin-Client**: Lightweight communication layer vs heavy HTTP — reduces latency in agent tool calls
- **Multi-LLM Support**: Can switch between different LLM providers (Anthropic, OpenAI, Google AI, GitHub Copilot) 
- **OAuth Integration**: Pre-built auth flows for connecting to external services
- **Skills & Automations**: Plugin-based skill system with automation triggers

### Key Patterns for Hermes

1. **WebSocket Thin-Client Architecture**:
   - Instead of HTTP REST for every tool call, use persistent WebSocket connections
   - Reduces handshake overhead for rapid-fire agent tool invocations
   - Enables real-time streaming of intermediate results

2. **Headless Server Mode**:
   - Can run as headless server (no GUI) — useful for background agent processes
   - Hermes could spawn headless agent instances for parallel task execution

3. **Skill Plugin System**:
   - Skills are self-contained plugins with tools, prompts, and config
   - Each skill declares its MCP tools and OAuth requirements
   - Hermes can adopt similar skill packaging for portable agent capabilities

4. **Desktop Integration Patterns**:
   - Native file system access (beyond what browser sandbox allows)
   - Local process spawning for code execution, testing, builds
   - System tray / background agent always-on capability

## Hermes Application

### Direct Integration Points

1. **Local MCP Server Management**: 
   - Use craft-agents pattern to run MCP servers locally alongside Hermes
   - WebSocket-based communication for lower latency tool invocation
   
2. **Multi-LLM Router**:
   - Implement lightweight LLM provider switching based on task complexity
   - Route simple queries to faster/cheaper models, complex tasks to stronger models

3. **Headless Agent Spawner**:
   - Spawn headless agent instances for parallel skill execution
   - Each instance gets its own MCP tool context and model assignment

### Configuration Reference

```json
{
  "mcp_servers": {
    "filesystem": { "transport": "stdio", "command": "npx", "args": ["-y", "@modelcontextprotocol/server-filesystem"] },
    "websearch": { "transport": "websocket", "url": "ws://localhost:3001/mcp" }
  },
  "llm_providers": {
    "primary": { "provider": "anthropic", "model": "claude-sonnet-4" },
    "fast": { "provider": "google", "model": "gemini-2.0-flash" }
  }
}
```

## Related Skills
- [[../MCP/warpdot-devcraft-agents-oss_20260507_0000|Original Document]]
- [[./_Index#11-memetic-tool-retrieval-fitext|Memetic Tool Retrieval (FitText)]]
- [[../MCP/_Index|MCP Knowledge Base]]
