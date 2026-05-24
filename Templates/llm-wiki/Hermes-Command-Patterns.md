---
title: "Hermes LLM Wiki 명령어 패턴"
created: 2026-05-23
tags: [agents/hermes, context/guide]
---

# Hermes LLM Wiki 명령어 패턴

> 대장님이 저(헤르메스)에게 LLM Wiki 시스템 관련해서 사용할 수 있는 실제 명령어 패턴 모음.

---

## 1. 지식 승격 요청

**기본형 — Members/에 초안 쓰고 요청**
> "Members/Steven/ideas/API-개선-아이디어.md를 Context로 승격시켜줘"

**상세 요청**
> "이 문서를 Context로 승격시켜줘. 요약, 링크 연결, 규칙 검증, 충돌 체크, PR 초안까지 다 해줘"

**일괄 승격 검토**
> "Members/ 폴더에서 승격할 만한 문서가 있는지 검토해줘"

---

## 2. 지식 검색 및 참조

**일반 질문 (자동으로 Context 우선 참조)**
> "ERP 시스템 결제 흐름이 어떻게 돼?"

**Context에 있는지 확인**
> "이 내용이 Context에 등록되어 있는지 확인해줘"

**더티 체크**
> "Members/에 있는 'ERP 데이터 Sync' 문서랑 Context/Product/Data-Sync.md 내용이 충돌하는지 비교해줘"

---

## 3. 문서 정리 및 리팩토링

**자동 요약**
> "Members/Steven/Daily/에 있는 이번주 Daily Note들을 요약해서 Context에 등록할 수 있는 형태로 만들어줘"

**고립 문서 찾기**
> "Vault 전체에서 다른 문서랑 연결이 안 된 고립 문서들을 찾아줘"

**오래된 문서 정리 제안**
> "Context/Product/에 6개월 전 문서들 중에 업데이트 필요한 게 있으면 알려줘"

---

## 4. PR 기반 협업

**PR 검토 요청**
> "열려있는 PR들의 지식 충돌이나 중복을 검토해줘"

**변경 내역 리뷰**
> "최근 main 브랜치에 머지된 Context 변경사항을 요약해줘"

---

## 5. 일괄 작업

**벌크 작업**
> "Members/Steven/Projects/ 밑에 있는 모든 문서를 스캔해서 Context로 승격할 가치가 있는 것만 골라줘"

**템플릿 적용**
> "Members/Steven/Ideas/ 밑에 새 문서 3개를 만들어줘. 템플릿은 Templater/llm-wiki/Members-Template.md 사용해"

---

## 6. 시스템 점검

**전체 현황**
> "LLM Wiki 시스템 전체 현황 리포트를 만들어줘 — 문서 수, 승격 대기, 고립 문서, 미승인 상태"

**거버넌스 체크**
> "Context/ 에서 status가 approved가 아닌 문서가 있으면 알려줘"

---

## 참고: 명령어를 줄 때 기억할 점

- **짧게**: "이거 Context로 올려줘" → 충분히 알아듣습니다
- **정확히**: 파일 경로까지 주면 더 빠름
- **결과물 요구**: PR 초안을 원하면 "PR까지 만들어줘" 추가
