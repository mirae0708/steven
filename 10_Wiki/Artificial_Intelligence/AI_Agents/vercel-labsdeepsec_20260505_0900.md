---
source: github
collected: 2026-05-05 09:00
category: Artificial_Intelligence/AI_Agents
stars: 233
language: TypeScript

---

# vercel-labs/deepsec

⭐ **233 stars**
🔤 **TypeScript**


> Deepsec is a security harness for finding vulnerabilities in your codebase powered by coding agents

## Links
- 🔗 [Original](https://github.com/vercel-labs/deepsec)

## Key Takeaways
- **Deepsec**: Security harness for finding codebase vulnerabilities, powered by AI coding agents (TypeScript)
- **233⭐** — built by Vercel Labs, same team behind Next.js and v0
- **How it works**: Agents traverse codebase → identify potential security issues (hardcoded secrets, injection points, auth gaps, etc.) → generate targeted exploits to validate → report findings
- **Direct relevance to Hermes**: As Hermes self-evolves and modifies its own codebase via patch/write_file tools, Deepsec's approach can be adapted as a pre-commit security audit step
- **Integration proposal**: Add `security_audit` stage to self_evolve pipeline — before deploying any code change, run agent-based vulnerability scan on the modified code
- **Complementary tooling**: Can be paired with existing security tools (Snyk, CodeQL, Trivy) via MCP — Composio already provides bridge_

---
_Automatically collected by Hermes Tech Brain Sync_
