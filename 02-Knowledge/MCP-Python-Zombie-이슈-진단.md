---
created: 2026-05-07 20:45 KST
updated: 2026-05-07 20:45 KST
type: troubleshooting
category: system
tags:
  - mcp
  - zombie
  - gateway
  - python
  - troubleshooting
  - keepalive
---

# 🐛 MCP Python 서버 Zombie 이슈 진단

> 마지막 업데이트: 2026-05-07

## 증상

Hermes Gateway가 `uvx` 기반(time, fetch) 및 Node 기반(filesystem) MCP 서버는 정상 기동하나, `python3` subprocess로 실행되는 6개 Python 기반 MCP 서버가 **Zombie 상태**가 됨:

| 서버 | PID | RSS | 상태 |
|:-----|:---:|:---:|:----:|
| vscode | 537 | 1,024B | Zombie |
| docker | 539 | 1,024B | Zombie |
| obsidian | 541 | 1,024B | Zombie |
| anythingllm | 543 | 1,000B | Zombie |
| googledrive | 545 | 1,152B | Zombie |
| opendesign | 547 | 1,152B | Zombie |

- PID는 존재하나 RSS가 1~1.7KB로 측정 — 실질적으로 실행 안 됨 (init 프로세스가 wait() 처리함)
- Gateway 로그에 `CancelledError` 다수 기록

## 원인 (추정)

1. **Gateway 기동 타이밍 이슈**: Gateway가 Python MCP 서버를 subprocess로 `python3 server.py` 호출하지만 서버가 준비되기 전에 Gateway 쪽 타임아웃
2. **CancelledError 체인**: Python subprocess가 `asyncio.CancelledError`를 받아 연결 실패, 이후 재시도 실패 반복
3. **KeepAlive v7.3 충돌 증폭**: keepalive가 1분 간격 재시작/자살 반복하며 Gateway도 영향을 받음

## 해결 방안

1. **Gateway 재시작 필요** (`--replace` 옵션으로 기존 인스턴스 교체)
2. 또는 MCP 서버 개별 재시작: 각 `server.py`에 SIGTERM 후 재실행
3. **근본적 해결**: Gateway 측 MCP 서버 기동 타임아웃 증가 및 재시도 로직 개선 필요

## 관련 이슈

- KeepAlive v7.3 Crash Loop (pidfile 충돌)
- Trinity CowAgent + OpenDesign 다운
