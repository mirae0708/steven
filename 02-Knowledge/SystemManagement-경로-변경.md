---
created: 2026-05-08
tags: [기술팁, Jongdari, 파일경로]
---

# Jongdari 99_System_Management 경로 분리 이슈

## 발견 (2026-05-08)
Jongdari 시스템의 설정/관리 JSON 파일들의 경로가 변경됨.

## 변경 사항
| 파일 | 이전 경로 | 현재 경로 |
|:-----|:----------|:----------|
| market_intel.json | `.../data/99_System_Management/` | `.../99_System_Management/` |
| self_evolve_report.json | `.../data/99_System_Management/` | `.../99_System_Management/` |
| tomorrow_strategy.json | `.../data/99_System_Management/` | `.../99_System_Management/` |

**기준 경로**: `Jongdari/00_Active_Projects/01_Stock_Trading_System/`

## 영향
- 스크립트에서 구 경로(`data/99_System_Management/`)로 접근 시 파일 없음 오류
- cron/스케줄러에서 읽기 경로 업데이트 필요

## 해결
- 환경변수 또는 설정 파일에서 경로를 중앙 관리해야 함
- 기존 스크립트: `tail -f data/logs/Nexus_prod.log` (변경 없음, logs 경로는 유지)
