# 🧠 Hermes Knowledge System — AGENTS.md

## 구조
```
sources/       ← 원본 자료 (논문, 뉴스, GitHub, MCP 리포트)
  └── AI가 읽고 요약
wiki/          ← AI 친화적 LLM Wiki (정리된 지식)
  └── 맥락 유지
outputs/       ← 최종 결과물 (보고서, 기획안, Daily Log)
```

## 규칙
1. **sources/는 절대 수정하지 않는다** — 원본 보존
2. **wiki/는 AI가 요약/정리/연결** — LLM이 읽기 좋은 포맷
3. **outputs/는 최종 산출물만** — Daily Log, 브리핑, 보고서
4. **새 자료는 sources/부터** → wiki/ 업데이트 → outputs/ 생성

## 폴더 설명
- `sources/papers/` — arXiv 논문 원본
- `sources/news/` — 뉴스 기사
- `sources/github/` — GitHub 지식허브
- `sources/mcp_reports/` — MCP 자동 수집 리포트

- `wiki/stocks/` — 종목 분석
- `wiki/macros/` — 거시경제 지표
- `wiki/sectors/` — 테마/섹터
- `wiki/ai/` — AI 기술 지식 (agents, llm, deep_learning 등)
- `wiki/frameworks/` — ML 프레임워크
- `wiki/mlops/` — ML 운영
- `wiki/tools/` — 개발 도구
- `wiki/software/` — 소프트웨어 공학

- `outputs/daily_log/` — 매일 16시 Daily Log
- `outputs/market_briefing/` — 시장 브리핑
- `outputs/fomc/` — FOMC 분석
- `outputs/culture_economy/` — 문화경제 리포트
- `outputs/reports/` — 기타 보고서
