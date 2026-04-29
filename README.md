# team-wiki-vault 구조 및 활용법

## 폴더 구조

- obsidian/ : Obsidian 전용 마크다운 문서 (01-Projects, 02-Knowledge 등)
- public/   : 웹 위키 정적 파일 (index.html, style.css 등)
- src/      : 웹앱 JS 코드 (app.js, config.js 등)
- scripts/  : 실험/분석/테스트 코드 (scratch/의 JS 파일)

## 설치 및 활용법

### 1. Obsidian 사용
- Obsidian 실행 → obsidian/ 폴더를 vault로 열기

### 2. 웹 위키 사용
- public/index.html 더블클릭 또는 Live Server로 실행

### 3. 코드 관리
- src/ 폴더에서 JS 코드 수정
- scripts/ 폴더에서 분석/실험 코드 관리

### 4. 클라우드(GitHub) 연동
- GitHub 저장소 생성 후 VS Code에서 연동
- 모든 변경사항을 커밋/푸시하여 백업 및 협업

## 시너지 활용 예시
- scripts/에서 분석 결과를 obsidian/에 md 파일로 저장 → Obsidian과 웹 위키에서 모두 활용
- Obsidian에서 작성한 문서를 웹 위키에서 읽어와 표시(추가 개발 필요)
