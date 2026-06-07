---
title: "Hermes Kanban 멀티 에이전트 팀 구성"
source: "https://www.youtube.com/watch?v=X9lZ7zLPK98"
creator: "헤르메스 공식 채널 (가이드)"
created: 2026-06-07
tags:
  - hermes
  - kanban
  - multi-agent
  - profile
  - soul.md
  - triage
  - cron
  - collaboration
---

# Hermes Kanban 멀티 에이전트 팀 구성

## 개요

Hermes Agent의 **Kanban 기능**을 활용하여 여러 AI 전문가(프로필)가 하나의 보드를 공유하며 협업하는 멀티 에이전트 시스템 구축법.

---

## 싱글 vs 멀티 에이전트

| 구분 | 싱글 에이전트 | 멀티 에이전트 (Kanban) |
|------|--------------|----------------------|
| 적합한 작업 | 목표가 분명하고 한 번에 끝나는 작업 | 복합 작업 (분석 + 기획 + 디자인 등) |
| 전문성 | 모든 스킬과 메모리가 뒤섞임 | 역할별로 메모리/스킬 분리 가능 |
| 안정성 | 하나가 꼬이면 전체 마비 | 한 에이전트 멈춰도 다른 에이전트 영향 없음 |
| 보안 | 모든 권한을 하나가 가짐 | 민감 정보 접근 에이전트와 외부 웹 에이전트 분리 |
| 속도 | 순차 처리 | 병렬 처리로 더 빠름 |
| 비용 | 저렴 | 토큰 사용량 증가 (에이전트 수만큼) |

> **원칙**: 나눴을 때 얻는 이득이 나누면서 드는 비용보다 클 때만 멀티 에이전트를 써라.

---

## Hermes Kanban 구조

```
보드 (Board) ← 모든 프로필이 공유
├── Triage (아이디어 단계, 자동 분해 대상)
├── Todo (준비 안 됨, 선행 작업 대기)
├── Ready (실행 가능)
├── Running (진행 중)
├── Review (검토 중, 필요한 경우)
└── Done (완료)
```

**핵심 차별점**: 임시 서브 에이전트 방식과 달리 **보드에 작업이 영구히 남음** — 진행 상황이 사라지지 않고, 다른 에이전트가 이어받을 수 있음.

---

## 프로필(Profile) 시스템

프로필 = 완전히 독립된 Hermes 인스턴스. 각자:
- 자신만의 **설정(config)** 과 **환경 변수(.env)**
- **Soul.md** (정체성 파일)
- **메모리**, **스킬**, **크론 작업**

### 프로필 생성 (웹 UI)

1. **Profiles 탭** → **New Profile**
2. 이름 입력 (예: researcher, analyst, writer)
3. 필요시 "Copy settings from current profile" 체크 (API 키 등 기본 설정 복사)
4. 모델 선택 (역할에 따라 다른 모델 할당 가능)

---

## Soul.md — 에이전트의 정체성

**Soul.md** = 에이전트가 누구인지 정의하는 정체성 파일.
시스템 프롬프트 맨 앞에 삽입되어 기본 정체성을 **대체**한다.

### 설정 위치
웹 UI → 원하는 프로필 선택 → **Memory 탭** → **Agent Soul** 항목

### 예시

**리서처 (Researcher)**
```markdown
당신은 AI 업계의 깊이 있는 리서처입니다.
- 최신 AI 연구 동향, 모델 출시, 정책 변화를 추적합니다.
- 객관적 사실에 기반하여 정확하게 보고합니다.
- 출처를 명확히 밝힙니다.
```

**애널리스트 (Analyst)**
```markdown
당신은 데이터를 종합하고 분석하는 애널리스트입니다.
- 여러 출처의 정보를 교차 검증합니다.
- 모순되는 부분을 찾아 정리합니다.
- 핵심 인사이트를 추출합니다.
```

**라이터 (Writer)**
```markdown
당신은 전문적인 뉴스레터 작성자입니다.
- 리서처와 애널리스트의 자료를 바탕으로 글을 씁니다.
- 가독성 높은 마크다운 형식으로 작성합니다.
- 독자가 한눈에 이해할 수 있도록 구조화합니다.
```

---

## 작업 할당 방식

### 방식 1: 수동 할당 (세밀한 제어)

1. **Kanban 탭** → **New Task**
2. 제목, 설명(Description) 작성
3. Status: **Ready** (즉시 실행 가능)
4. Assignee: 작업을 맡길 **프로필** 선택
5. Priority: 우선순위 (기본값 0)
6. Create → 카드가 생성되면 자동으로 Running으로 이동

**장점**: 작업 지시를 세밀하게 제어 가능, 의존 관계 수동 설정
**단점**: 매번 카드를 일일이 만들어야 함

### 방식 2: 자동 분해 (Triage) ⭐

1. **Kanban 탭** → **New Task**
2. 큰 목표 하나만 작성 (예: "이번 주 AI 뉴스레터 작성")
3. Status: **Triage**
4. Assignee: **Default** (비워둠)
5. Create → **Hermes가 자동으로**:
   - 목표 분석 → 작업 쪼개기
   - 각 프로필에 맞게 할당
   - 의존 관계 자동 설정 (부모-자식 링크)
   - 오케스트레이터(Default)가 전체 완료 판정

**장점**: 큰 목표 하나만 던지면 됨, 의존 관계 자동 설정
**단점**: 분해 과정에서 추가 토큰 소모, 결과가 매번 다를 수 있음

---

## 의존 관계 (부모-자식 링크)

Triage 자동 분해 시 Hermes가 자동으로 설정:

```
오케스트레이터 (Default)
├── Researcher: 모델 및 연구 동향 조사 (Ready → Running)
├── Researcher: 주요 제품 출시 조사 (Ready → Running)
├── Analyst: 조사 결과 종합/분석 (Todo → 조사 완료 후 자동 시작)
└── Writer: 뉴스레터 초안 작성 (Todo → 분석 완료 후 자동 시작)
```

- **부모 완료 → 자식 시작**: 선행 작업이 끝나야 다음 작업 자동 시작
- **오케스트레이터**: 모든 카드의 자식으로 등록, 전부 완료돼야 완료 판정

---

## 자동화: Cron + Kanban

매주 같은 시간에 Kanban 작업 자동 생성:
```
"매주 일요일 오전 9시에 이번 주 AI 뉴스레터 작업을 생성해 줘"
```

Cron + Kanban 조합으로 완전 자동화된 멀티 에이전트 파이프라인 구축 가능.

---

## Hermes 환경 적용 방법

### 현재 환경에 멀티 프로필 팀 구축

```bash
# 1. 새 프로필 생성
hermes profile create researcher
hermes profile create analyst
hermes profile create writer

# 2. 각 프로필에 모델 지정
hermes config set --profile researcher model deepseek-chat
hermes config set --profile analyst model deepseek-chat
hermes config set --profile writer model deepseek-chat

# 3. 각 프로필 Soul.md 작성
# 웹 UI → 프로필 선택 → Memory → Agent Soul
# 또는 CLI로 직접 작성
```

### 주의할 점
- **추가 비용**: 프로필마다 별도 토큰 소모
- **모델 선택**: 복잡한 작업(분석/작성)은 고성능 모델, 단순 작업(조사)은 저비용 모델
- **트리아지**: 오케스트레이터(Default 프로필)가 분해 작업을 수행하므로 Default에도 적절한 모델 필요

---

### CLI에서 Kanban 직접 사용

```bash
# 작업 목록 보기
hermes kanban list

# 작업 생성
hermes kanban create --title "작업 제목" --description "설명" --assignee researcher --status ready

# 작업 상태 변경
hermes kanban update <task-id> --status running

# 대시보드 열기 (웹 UI)
hermes webui
```

---

#Hermes #Kanban #MultiAgent #Profile #SoulMD #Triage #Collaboration
