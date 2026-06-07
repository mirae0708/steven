---
title: "Claude 스타일 Obsidian CSS 커스터마이징"
source: "https://www.youtube.com/watch?v=Q33WveI7NqU"
repo: "https://github.com/mr5pm-public/claude-style-obsidian"
creator: "오후다섯씨 (MR_5PM / 오드 아저씨)"
created: 2025
updated: 2026-06-06
tags:
  - obsidian
  - css
  - claude
  - customization
  - vibecoding
  - free
---

# Claude 스타일 Obsidian CSS 커스터마이징

## 개요

Obsidian의 기본 UI를 **Claude 스타일**로 변경하는 CSS 커스터마이징 방법. CSS 스니펫(Snippet)을 활용하여 테마 전체를 바꾸지 않고 원하는 부분만 덮어쓴다.

- **크리에이터**: 오후다섯씨 (MR_5PM / 오드 아저씨)
- **GitHub**: [mr5pm-public/claude-style-obsidian](https://github.com/mr5pm-public/claude-style-obsidian)
- **영상**: [Claude 스타일 옵시디언 (오후다섯씨)](https://www.youtube.com/watch?v=Q33WveI7NqU)
- **라이선스**: 평생 무료

---

## CSS 스니펫이란?

- Obsidian의 **CSS Snippet** = 특정 부분만 덮어쓰는 가벼운 방식
- 테마를 통째로 바꾸는 게 아니라 `내가 원하는 부분만` 수정
- `.css` 파일 하나로 폰트, 색상, 간격, 테이블 스타일 등 제어 가능

---

## 설치 방법

### 30초 설치

1. [claude-style.css](https://raw.githubusercontent.com/mr5pm-public/claude-style-obsidian/main/claude-style.css) 다운로드
2. Obsidian → **설정(Settings)** → **외형(Appearance)**
3. 맨 아래 **CSS 스니펫** → `[폴더 열기]` 클릭
4. 열린 폴더(`<vault>/.obsidian/snippets/`)에 `claude-style.css` 넣기
5. `[새로고침]` → 목록에 뜨면 **토글 ON**

### 폰트 설치 (선택)
- 부크크 무료 폰트 **북크명조 / 북크고딕** 설치 권장
- 없으면 기본 글꼴로 표시됨

---

## Claude 스타일 핵심 (v1.0 — 498줄 CSS)

| 요소 | 스타일 |
|------|--------|
| 본문 폰트 | 북크고딕(Bookk Gothic), 16px |
| 줄간격 | **2.0** (넉넉함) |
| 자간 | **0.06em** |
| 배경 | 다크 (`#1a1a1a`) |
| 레이아웃 | 본문 720px **가운데 정렬** (Claude 느낌) |
| 표 | 테두리 없는 깔끔한 **밑줄형** |
| 형광펜 `==` | 클로드 주황 (`#C96442`) |
| 링크 | 클로드 주황 (`#C96442`) |
| 강조색 | **테라코타 주황** (`#C96442`) |

---

## AI로 CSS 커스터마이징하기 (Vibe Coding)

### Claude Code + VS Code 활용

**1. Claude Code 연결**
```
VS Code → Claude Code 확장 실행
→ "이 CSS 파일을 열어줘" (claude-style.css 경로 지정)
```

**2. 실시간 수정 명령어 예시**
```
"폰트를 북크명조로 변경해 줘"
"자간을 0.08em으로 늘려줘"
"강조색을 파란색 #3B82F6으로 변경해 줘"
"테이블 스타일을 둥근 모서리로 바꿔줘"
"밝은 화면 모드(라이트 테마)도 추가해 줘"
```

**3. 수정 워크플로**
```
원본 CSS 백업 (예: claude-style.backup.css)
→ AI에게 요청 → CSS 파일 수정 → Obsidian 새로고침 → 확인
```

---

## GitHub 저장소 구조

```
mr5pm-public/claude-style-obsidian/
├── README.md       (설치 가이드 + 사용법)
└── claude-style.css (본 CSS 파일, 498줄, 13.8KB)
```

- ⭐ 1 star (2026-06-06 기준)
- 100% CSS
- 최초 커밋: 2026-06-06

---

## 팁 & 주의사항

1. **원본 보관**: 수정 전 원본 CSS는 꼭 백복사본 보관
2. **점진적 개선**: 한 번에 완벽할 필요 없음. 작업하면서 마음에 안 드는 부분을 AI로 계속 수정
3. **듀얼 모드**: 다크 모드 + 라이트 모드 각각 CSS 적용 가능
4. **파일 분리**: 여러 CSS 파일을 만들어 상황별로 ON/OFF 가능
5. **클로드 코드 추천**: VS Code + Claude Code가 가장 편리한 수정 환경

---

#Obsidian #CSS #Claude #VibeCoding #생산성 #커스터마이징 #mr5pm
