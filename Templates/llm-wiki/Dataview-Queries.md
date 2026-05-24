---
title: "Dataview 지식 그래프 쿼리 모음"
created: 2026-05-23
tags: [context/techstack, context/guide]
---

# Dataview 지식 그래프 쿼리 모음

> Obsidian Dataview 플러그인 필수 설치.
> 이 문서를 Vault에 저장하고 Dataview가 활성화된 상태에서 쿼리를 복사해 사용하세요.

---

## 1. Context/ — 전체 공식 지식 목록

```dataview
TABLE status, reviewed_by, created AS "작성일"
FROM "Context"
SORT file.name ASC
```

## 2. Members/ — 개인 작업 중인 문서

```dataview
TABLE author, status, created AS "작성일"
FROM "Members"
WHERE status = "draft"
SORT created DESC
```

## 3. 최근 7일간 변경된 문서

```dataview
TABLE file.mtime AS "수정일", file.folder AS "위치"
FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
```

## 4. 승격 대기 문서 (Promotion Candidates)

> Members/에 작성 후 AI 검토 요청 주석을 단 문서만 필터링

```dataview
TABLE author, created AS "작성일"
FROM "Members"
WHERE contains(file.content, "@Hermes")
   OR contains(file.content, "Context로 승격")
SORT created DESC
```

## 5. 내부 링크가 없는 고립 문서

> 연결되지 않은 문서는 지식 그래프에서 사장될 위험이 있음

```dataview
TABLE file.folder AS "위치"
FROM ""
WHERE length(file.outlinks) = 0
  AND file.name != "00-Home"
  AND !contains(file.path, "_Private")
SORT file.folder ASC
```

## 6. 특정 태그별 문서 현황

```dataview
TABLE rows.file.link AS "문서", rows.file.folder AS "위치"
FROM ""
FLATTEN file.tags AS tag
WHERE tag
GROUP BY tag AS "태그"
SORT tag ASC
```

## 7. Context/ 내 카테고리별 문서 수

```dataview
TABLE length(rows) AS "문서 수"
FROM "Context"
GROUP BY file.folder AS "카테고리"
SORT 카테고리 ASC
```

## 8. 미승인 문서 체크

> status가 approved가 아닌 Context 문서 — 검증 필요

```dataview
TABLE status, created AS "작성일"
FROM "Context"
WHERE status != "approved"
SORT created DESC
```

## 9. 최근 생성된 문서 Top 20

```dataview
TABLE created AS "작성일", file.folder AS "위치"
FROM ""
SORT created DESC
LIMIT 20
```

## 10. 전체 문서 통계 (대시보드용)

```dataview
TABLE length(rows) AS "문서 수"
FROM ""
GROUP BY file.folder AS "폴더"
SORT length(rows) DESC
```

---

## 설치 방법

1. Obsidian → 설정 → 커뮤니티 플러그인 → Dataview 설치 및 활성화
2. 이 문서를 `Context/TechStack/Dataview-Queries.md` 또는 원하는 위치에 저장
3. 각 쿼리 블록을 복사해서 새 문서에 붙여넣으면 실시간 데이터 표시됨
