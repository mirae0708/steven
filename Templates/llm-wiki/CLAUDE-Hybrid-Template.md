# CLAUDE.md — Claude Code Hybrid Project Template
# Copy this to your project root as CLAUDE.md
# Claude Code auto-loads this file on every session

# Project Context
## Architecture
- (서술: 프로젝트 아키텍처 개요)
## Key Commands
- (서술: 주요 명령어들)

# Hybrid Mode Rules (Claude Code + Hermes Agent)

## Mode Selection
- **Cloud mode** (`cc-cloud`): 복잡한 리팩토링, 아키텍처 설계, 다중 파일 변경
- **Local mode** (`cc-local`): 단순 버그 수정, 단위 테스트, NDA 코드, 오프라인 작업

## When Hermes delegates to Claude Code
Hermes(총지휘관)가 작업을 분석한 후 적절한 모드로 Claude Code에 위임:
1. Hermes가 작업의 복잡도/민감도 판단
2. Cloud or Local 결정
3. Claude Code 호출 (`claude -p 'task' | claude interactive`)
4. 결과를 Hermes가 검증하여 대장님께 보고

## Code Standards
- (서술: 코딩 규칙, 네이밍 컨벤션, 테스트 요구사항)

## Memory Notes
- (서술: 프로젝트별 중요 정보)
