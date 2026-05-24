---
title: "Hermes → Claude Code 명령 패턴"
created: 2026-05-23
status: approved
tags: [agents/hermes, context/product]
---

# Hermes → Claude Code 명령 패턴

> Hermes(총지휘관)가 Claude Code(코딩 실행)를 호출하는 실제 명령 패턴 모음

## 패턴 1: 단순 작업 — Print Mode (Hermes가 직접 실행)

Hermes가 `terminal()`로 Claude Code를 직접 호출:

```
terminal(command="claude -p 'src/utils.py에 있는 모든 함수에 타입 힌트를 추가해줘' --allowedTools 'Read,Edit' --max-turns 10", workdir="/project", timeout=120)
```

**언제 쓰나?** 
- 단일 파일 수정
- 명확한 요구사항
- 대화 불필요

## 패턴 2: 복잡 작업 — Interactive via tmux

Hermes가 tmux 세션을 만들어 Claude Code와 장기 대화:

```bash
# 1. tmux 세션 생성
tmux new-session -d -s cc-work -x 140 -y 40

# 2. Claude Code 실행
tmux send-keys -t cc-work 'cd /project && claude' Enter
sleep 5 && tmux send-keys -t cc-work Enter  # trust dialog
sleep 2 && tmux send-keys -t cc-work Down && sleep 0.3 && tmux send-keys -t cc-work Enter  # permissions

# 3. 작업 지시
tmux send-keys -t cc-work '전체 인증 시스템을 JWT로 마이그레이션해줘' Enter

# 4. 진행 모니터링
sleep 30 && tmux capture-pane -t cc-work -p -S -50

# 5. 추가 지시
tmux send-keys -t cc-work '이제 마이그레이션 테스트 코드도 작성해줘' Enter

# 6. 종료
tmux send-keys -t cc-work '/exit' Enter
sleep 2 && tmux kill-session -t cc-work
```

## 패턴 3: Claude Code로 리뷰

```bash
# 최근 커밋 리뷰
claude -p "$(git diff HEAD~1)" --max-turns 1

# 현재 브랜치 vs main 리뷰
claude -p "$(git diff main...)" --max-turns 1

# PR 리뷰
claude -p "Review this PR" --from-pr 42 --max-turns 10
```

## 패턴 4: 벌크 작업 — 병렬 Claude Code

여러 Claude Code 인스턴스를 동시 실행:

```bash
# 각각 tmux 세션
tmux new-session -d -s backend -x 140 -y 40
tmux new-session -d -s frontend -x 140 -y 40
tmux new-session -d -s tests -x 140 -y 40

tmux send-keys -t backend 'cd /project/backend && claude -p "API 라우터 리팩토링"' Enter
tmux send-keys -t frontend 'cd /project/frontend && claude -p "로그인 페이지 UI 수정"' Enter
tmux send-keys -t tests 'cd /project && claude -p "통합 테스트 20개 추가"' Enter
```

## 대장님께서 Hermes에게 명령하는 예시

```
"프로젝트 전체에서 API 키 하드코딩된 부분 찾아서 .env로 분리해줘"
→ Hermes가 작업 분석 → Claude Code(cloud)에 위임 → 결과 검증 → 보고

"src/utils.js에서 버그 하나 고쳐줘. 함수명 validateInput에서 null 체크 누락됨"
→ Hermes가 작업 분석 → Claude Code(local)에 위임 → 결과 검증 → 보고

"이 PR 리뷰해줘"
→ Hermes가 git diff 분석 → Claude Code로 리뷰 요청 → 결과 요약
```

## 관련 스킬
- [[claude-code]] (autonomous-ai-agents) — Claude Code 완전 가이드
