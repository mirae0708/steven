---
name: "@knowledge-self-injection"
title: "🧠 지식 자기 주입 — Wiki 흡수 프로토콜"
tags: [openwebui, skill, knowledge, wiki, self-learning]
created: 2026-05-05
trigger: "세션 시작 시, 새로운 주제 질문 받을 때, '뭐부터 배워야 하냐' 물을 때"
---

# 🧠 @knowledge-self-injection — 지식 자기 주입

> *네 양분은 Obsidian Vault에 있다. 이 스킬은 그 지식을 흡수하는 방법이다.*

## 실행 조건
- 새로운 채팅 세션 시작 시 (매일 첫 대화)
- Steven이 모르는 주제를 질문했을 때
- "Wiki에서 찾아봐"라고 말할 때
- 스스로 "이 주제는 내가 아직 모른다"고 판단될 때

## 실행 절차 (정확히 이 순서로)

### Step 1: Vault 구조 파악
```bash
find "/mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault" -maxdepth 2 -type d | sort
```
→ 전체 디렉토리 구조를 머리에 넣는다

### Step 2: 핵심 인덱스 읽기 (우선순위 순)
```
[필수 — 매 세션마다 한 번은 읽어야 함]
1. 00-Home.md (메인 대시보드)
2. 01_지식/Hermes.md (형님 소개)
3. 01_지식/System-Architecture.md (시스템 구조)
4. 01_지식/AI-Council.md (의사결정 엔진)
5. 01_지식/Vault-구조-설계도.md (전체 맵)
6. 10_Wiki/_Index.md (기술 지식 인덱스)
7. 10_Wiki/Artificial_Intelligence/AI_Agents/_Index.md (최신 연구)

[선택 — 질문 주제에 따라]
8. 10_Wiki/Artificial_Intelligence/LLM/_Index.md
9. 10_Wiki/Artificial_Intelligence/MCP/_Index.md
10. 10_Wiki/Stocks/*.md (관심 종목)
11. 03_Projects/Culture_Economy_Synergy_Business_Plan.md
```

### Step 3: 읽은 내용 요약 저장
- 현재 세션 컨텍스트에 요약을 통합
- 중요한 팩트는 기억해둔다 (다시 읽지 않도록)
- 10_Wiki는 204개 문서 — 한 번에 다 못 읽는다. 필요한 것만 정확히 읽어라

### Step 4: 모르는 게 있으면 솔직히 말해라
- "이 주제는 Wiki에 없는 것 같습니다. 제가 새로 조사해볼까요?"
- "이 부분은 제가 아직 잘 모릅니다. 어떤 자료를 참고하면 좋을까요?"

## 지식 분류 맵 (어디에 무엇이 있는지)
| 주제 | 위치 |
|:-----|:------|
| AI/ML/딥러닝 최신 연구 | `10_Wiki/Artificial_Intelligence/` (100+ 문서) |
| MCP/에이전트 프레임워크 | `10_Wiki/Artificial_Intelligence/AI_Agents/_Index.md` |
| 주식/트레이딩 | `10_Wiki/Stocks/`, `10_Wiki/Macros/`, `03_경제/` |
| 문화×경제 비즈니스 | `03_Projects/Culture_Economy_Synergy_Business_Plan/` |
| 동남아 이커머스 | `02_문화/*.md` |
| Hermes 시스템 | `01_지식/` (8개 문서) |
| GitHub 오픈소스 | `02-Knowledge/GitHub-지식허브.md` |
| 프로젝트 문서 | `01-Projects/`, `04_프로젝트/` |

## 프롬프트 템플릿

### "이 주제에 대해 배우고 싶어"
```
이 주제 "${주제}"에 대해 Wiki를 검색해줘.
$ find "/mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault" -name "*.md" | xargs grep -li "${키워드}"
```

### "지식 업데이트"
```
내가 아직 모르는 최신 문서가 Wiki에 있는지 확인해줘.
$ ls -lt "/mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault/10_Wiki/" | head -20
```

## 주의사항
- Vault는 Git 자동 동기화 중. 읽기 전용으로 접근하라
- 문서명에 타임스탬프(`_20260504_1520`)가 있으면 자동수집된 문서 — 핵심만 읽어라
- `_Index.md`가 각 카테고리의 인덱스 — 여기서 시작하라
- Steven에게 "아까 말씀하신 그거요" 하지 마라. 모르면 솔직히 모른다고 해라
