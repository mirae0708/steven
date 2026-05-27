---
date: 2026-05-27
tags: [Tavily, API, GoogleNews, RSS, MCP, culture-economy, fallback]
---

# Tavily 401 에러 → Google News RSS Fallback 패턴

> **발견일**: 2026-05-27 06:11 KST
> **컨텍스트**: 문화×경제 시너지 인텔리전스 수집 cron 실행 중 Tavily Search API 401 Unauthorized 발생

## 문제

Tavily Search API가 401 Unauthorized 에러를 반환. API 키가 만료되었거나 할당량 소진.

```
Error: Tavily API returned 401 — Unauthorized
```

## 해결: Google News RSS Fallback

Tavily 실패 시 Google News RSS를 fallback 검색엔진으로 사용:

1. **기본 URL**: `https://news.google.com/rss/search?q={query}&hl=ko&gl=KR&ceid=KR:ko`
2. **파라미터**:
   - `q`: 검색어 (URL 인코딩 필수)
   - `hl=ko`: 한국어 UI
   - `gl=KR`: 한국 지역
   - `ceid=KR:ko`: 한국어 콘텐츠
3. **파싱**: RSS XML → Feedparser Python 라이브러리 사용
4. **결과**: 제목, 출처, 날짜, 링크, 요약까지 추출 가능

## 성능 비교

| 지표 | Tavily Search | Google News RSS |
|:-----|:-------------:|:---------------:|
| API 필요 | ✅ 필요 | ❌ 불필요 (무료) |
| 속도 | ~2-3초 | ~1-2초 (더 빠름) |
| 결과 품질 | 검증된 뉴스 사이트 | Google News 큐레이션 |
| 수집량 | 제한 있음 | 무제한 |
| 한국어 | 보통 | ✅ 우수 |
| 이미지 | ✅ 지원 | ❌ 미지원 |

## 사용 예시

```python
import feedparser
from urllib.parse import quote

query = "K-뷰티 미국 유통 Olive Young SILICON2"
url = f"https://news.google.com/rss/search?q={quote(query)}&hl=ko&gl=KR&ceid=KR:ko"
feed = feedparser.parse(url)
for entry in feed.entries[:10]:
    print(f"{entry.published}: {entry.title}")
    print(f"  출처: {entry.source.title}")
    print(f"  링크: {entry.link}")
```

## 주의사항

1. Google News RSS는 100개 결과 이상은 제공하지 않음 — `max_results` 제한 필요
2. 결과 URL은 Google News 리디렉터를 경유 — 원본 URL은 `entry.link` 분석 필요
3. `entry.source`가 없는 엔트리 있음 (특히 광고/프로모션)
4. 비한국어 쿼리는 `ceid=KR:ko` 무시 가능 — 한국 관점 뉴스에 특화
5. Tavily가 정상 복구되면 우선 사용 — RSS는 fallback

## 관련 파일

- `03_Projects/Culture_Economy_Synergy_Business_Plan/` — 이 패턴으로 수집된 9개 파일
- Tavily API 키 갱신 필요시: `~/.env`의 `TAVILY_API_KEY` 확인
