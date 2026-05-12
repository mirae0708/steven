---
source: github
collected: 2026-05-13 00:00
category: Artificial_Intelligence/AI_Agents
stars: 316
language: Python

---

# ChristianJR19/GoblinOS

⭐ **316 stars**
🔤 **Python**


> a Hermes Agent personality layer that replaces the default agent identity with a persistent, mood-driven goblin persona

## Links
- 🔗 [Original](https://github.com/ChristianJR19/GoblinOS)

## Key Takeaways (Brain Sync)
- **What it is**: Personality layer for Hermes Agent that replaces default identity with a persistent, mood-driven goblin persona
- **Core mechanism**: Injects SOUL.md (personality), MEMORY.md (lore/proverbs), AGENTS.md (workspace context) into Hermes agent directory
- **Mood system**: 8 moods (neutral, curious, excited, suspicious, mischievous, annoyed, sleepy, smug) with event-driven transitions; mood affects code behavior (renaming variables, double-checking, etc.)
- **Hoard system**: Persistent SQLite DB that stores "shinies" (code snippets, URLs, facts) with scoring/search; can reference them in future conversations
- **API**: goblin serve → FastAPI dashboard with /health, /mood, /hoard, /transmute, /riddle endpoints
- **Hermes relevance**: Directly applicable — could integrate the goblin mood/hoard layers or fork the personality injection pattern for custom AGENTS.md injection

---
_Automatically collected by Hermes Tech Brain Sync_
