---
source: github
collected: 2026-05-13 00:00
category: Artificial_Intelligence/LLM
stars: 229
language: TypeScript

---

# Longbridges/polymarket-kalshi-arbitrage-bot

⭐ **229 stars**
🔤 **TypeScript**


> polymarket trading bot, polymarket bot, polymarket kalshi trading bot, polymarket trading bot, polymarket bot, polymarket kalshi trading bot, polymarket trading bot, polymarket bot, polymarket kalshi trading bot, polymarket trading bot, polymarket bot, polymarket kalshi trading bot, polymarket trading bot, polymarket bot

## Links
- 🔗 [Original](https://github.com/Longbridges/polymarket-kalshi-arbitrage-bot)

## Key Takeaways (Brain Sync)
- **What it is**: TypeScript bot for cross-exchange prediction market arbitrage between Polymarket and Kalshi, focused on short-duration (15-min) markets
- **Strategy 1 — Spread-Based Entry**: Buys Polymarket UP when Kalshi YES is 93-96¢ and spread ≥10¢ (e.g., Kalshi 95¢, Polymarket UP 82¢ → 13¢ spread → BUY)
- **Strategy 2 — Late Resolution**: If Kalshi settled but Polymarket still has liquidity, emits late-entry signal
- **Architecture**: Express service, uses @polymarket/clob-client for order placement, Kalshi trade API for pricing, configurable order cooldowns
- **Risk**: Prediction markets involve execution, liquidity, market, regulatory, and operational risk — no profit guarantee

---
_Automatically collected by Hermes Tech Brain Sync_
