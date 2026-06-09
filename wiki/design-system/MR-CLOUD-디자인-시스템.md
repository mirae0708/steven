---
tags:
  - design-system
  - css
  - ui-ux
  - adminlte
  - erp
  - mr-cloud
cssclasses:
  - wide-page
---
# MR CLOUD 디자인 시스템

> **기반:** AdminLTE 2 / Bootstrap 3 Inspired  
> **대상 서비스:** ERP(`:8082`), 가상오피스(`:8000`), unified-hub(`:8650`)  
> **핵심 파일:** `frontend/src/index.css` ([실제 CSS 보기](https://github.com/.../frontend/src/index.css))

---

## 개요

MR CLOUD 디자인 시스템은 물류 ERP 시스템을 위해 설계된 **CSS Design Tokens** 및 **컴포넌트 스타일 라이브러리**입니다. AdminLTE 2의 디자인 언어를 계승하며, Chrome 브라우저 스타일의 탭 네비게이션, jqGrid 패턴의 테이블, 기능별 버튼 색상 매핑을 특징으로 합니다.

**핵심 원칙:**
1. **Single Source of Truth** — 모든 색상/크기/폰트는 `:root` CSS 변수로 관리
2. **사이드바 터치 금지** — AdminLTE 사이드바는 별도 관리
3. **기능별 버튼 색상** — 버튼의 기능을 색상으로 즉시 식별 가능
4. **테이블 우선** — 데이터 중심 ERP에 최적화된 jqGrid 스타일

---

## 색상 시스템

### Design Tokens

```css
--primary:       #3C8DBC   /* 네비게이션 청색 */
--danger:        #DD4B39   /* 위험/삭제 */
--success:       #00A65A   /* 성공 */
--warning:       #F39C12   /* 경고 */
--bg-color:      #FFFFFF   /* 배경 */
--border-color:  #F4F4F4   /* 테두리 */
--text-main:     #333333   /* 본문 */
--text-muted:    #6c757d   /* 보조 텍스트 */
```

### 버튼 색상 매핑

| 클래스 | 기능 | 색상 | 미리보기 |
|--------|------|------|----------|
| `.btn-primary` | 기본 액션 | `#3C8DBC` | <span style="display:inline-block;width:20px;height:20px;background:#3C8DBC;border-radius:3px;"></span> |
| `.btn-search` | 검색 | `#F39C12` | <span style="display:inline-block;width:20px;height:20px;background:#F39C12;border-radius:3px;"></span> |
| `.btn-new`, `.btn-save` | 신규/저장 | `#00C0EF` | <span style="display:inline-block;width:20px;height:20px;background:#00C0EF;border-radius:3px;"></span> |
| `.btn-delete` | 삭제 | `#DD4B39` | <span style="display:inline-block;width:20px;height:20px;background:#DD4B39;border-radius:3px;"></span> |
| `.btn-copy`, `.btn-excel` | 복사/엑셀 | `#00A65A` | <span style="display:inline-block;width:20px;height:20px;background:#00A65A;border-radius:3px;"></span> |
| `.btn-print` | 프린트 | `#00998B` | <span style="display:inline-block;width:20px;height:20px;background:#00998B;border-radius:3px;"></span> |
| `.btn-cinvoice` | C-Invoice | `#800000` | <span style="display:inline-block;width:20px;height:20px;background:#800000;border-radius:3px;"></span> |

---

## 타이포그래피

**기본 폰트:** `'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif`

| 요소 | 크기 | 두께 | 용례 |
|------|------|------|------|
| Body | 14px | Regular | 일반 텍스트 |
| Section Title | 1.15rem (~18px) | Semi-Bold (600) | 페이지 섹션 제목 |
| Chrome Tab | 0.85rem (~13.5px) | Medium (500) | 상단 탭 레이블 |
| Table Header | 12px | Bold (700) | jqGrid 테이블 헤더 |
| Table Cell | 13px | Regular | 테이블 데이터 |
| Button | 12px | Semi-Bold (600) | 모든 버튼 |
| Badge | 0.75rem (~12px) | Semi-Bold (600) | 상태 뱃지 |

---

## 컴포넌트

### 🔷 Chrome-Style 탭 네비게이션

MR CLOUD의 시그니처 디자인 요소. Chrome 브라우저 탭을 차용한 상단 네비게이션.

```css
.chrome-tabs-container {
  background-color: #3C8DBC;
  padding: 6px 16px 0;
  display: flex;
  overflow-x: auto;
}
.chrome-tab.active {
  background-color: #ffffff;
  color: #333333;
}
```

![[Pasted image 20260610.png|Chrome 탭 예시]]

### 🔷 jqGrid 스타일 테이블

데이터 중심 ERP에 최적화. 헤더 12px Bold, `#F4F4F4` border, 호버 시 `#f9f9f9` 하이라이트.

| 열 | 유형 | 설명 |
|----|------|------|
| 헤더 | `th` | `#F5F5F5` 배경, `#333` 12px bold |
| 셀 | `td` | 13px, `#F4F4F4` border |
| 호버 | `tr:hover td` | `#f9f9f9` 배경 |

### 🔷 Glass Panel / Card

```css
.glass-panel {
  background: #ffffff;
  border: 1px solid #F4F4F4;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 24px;
}
```

### 🔷 폼 요소

- **텍스트 입력:** `.glass-input` — 13px, `#F4F4F4` border, focus 시 primary 파란색 테두리
- **Select2 드롭다운:** AdminLTE 스타일, 13px, 34px 높이
- **Datepicker:** 13px, flatpickr 스타일 호환

---

## 적용 방법

### 1. 새 프로젝트에 적용

```css
/* index.css 최상단에 Design Tokens 선언 */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;500;600;700&display=swap');

:root {
  --primary: #3C8DBC;
  --primary-hover: #367FA9;
  --bg-color: #ffffff;
  --surface: #ffffff;
  --text-main: #333333;
  --text-muted: #6c757d;
  --border-color: #F4F4F4;
  --danger: #DD4B39;
  --success: #00A65A;
  --warning: #F39C12;
  --font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --shadow-sm: 0 1px 1px rgba(0,0,0,0.1);
  --shadow-md: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-lg: 0 4px 8px rgba(0,0,0,0.15);
}
```

### 2. 기존 프로젝트에 적용

`index.css`가 이미 있다면 Design Tokens 섹션만 `:root`에 추가하고, 나머지 스타일(버튼, 테이블, 폼)을 덧붙이면 됩니다.

---

## 사이드바 금지 규칙 ⛔

> **사이드바는 절대 건드리지 말 것.**
> AdminLTE 기반 사이드바는 별도의 CSS 파일에서 관리되며, 디자인 시스템 업데이트 시에도 건드리지 않습니다. 이는 MR CLOUD의 핵심 운영 정책입니다.

---

## Hermes Skill 연동

이 디자인 시스템은 Hermes Agent의 **`super-ux-design-agent`** 스킬로 등록되어 있습니다.

**스킬 위치:** `skills/software-development/super-ux-design-agent/SKILL.md`

Hermes에게 디자인 요청을 하면 자동으로:
1. CSS Design Tokens 로드
2. 버튼 색상 매핑 적용
3. jqGrid 테이블 스타일 적용
4. Chrome 탭 네비게이션 유지
5. Source Sans Pro 폰트 적용
6. Form 요소 스타일 일괄 적용

---

## 연관 문서

- [[Hermes Agent Skill - super-ux-design-agent]]
- [[AdminLTE 3 Migration Guide]]
- [[ERP 시스템 아키텍처]]
- [[가상오피스 UI/UX 설계]]

---

## 변경 이력

| 날짜 | 버전 | 변경 내용 |
|------|------|----------|
| 2026-06-10 | 1.0.0 | 최초 작성. CSS Design Tokens 정의, 버튼 매핑, 테이블/네비/폰트/폼 스타일 문서화 |
