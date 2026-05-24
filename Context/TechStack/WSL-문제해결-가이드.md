---
title: "WSL 환경 문제 해결 가이드"
created: 2026-05-23
status: approved
reviewed_by: Steven
last_reviewed: 2026-05-23
tags: [context/techstack, wsl, troubleshooting, environment]
---

# WSL 환경 문제 해결 가이드

> WSL2 Ubuntu에서 Hermes Agent 운영 시 자주 발생하는 문제와 해결법

## 1. 브라우저 관련

### Windows Chrome 직접 제어 불가
**증상**: WSL 내에서 `playwright`나 `selenium`으로 Windows Chrome을 실행/제어하려고 하면 안 됨.
**원인**: WSL과 Windows는 별도 그래픽/프로세스 공간. WSL 내부 브라우저는 헤드리스(headless)만 가능.
**해결**: 
```
1. Hermes Playwright (WSL 내장 Chromium) 사용 → headless 렌더링
2. 렌더링 결과는 PNG 파일로 저장 → 텔레그램 전송
3. Windows Chrome 실제 화면이 필요하면 사용자가 직접 열어야 함
```

### localhost 접속 시 하얀 화면
**증상**: `http://localhost:3005` (Mirae ERP 등) 접속 시 하얀 화면 또는 사이드바 미표시.
**원인**: WSL 내부 서버를 Windows 브라우저에서 접속 시 CSS/JS 로딩 문제 or 캐시 문제.
**해결**:
```
1. curl localhost:3005 로 서버 응답 확인 (200 OK 확인)
2. 크롬 시크릿 모드로 접속 (캐시 제거)
3. Playwright로 WSL 내부에서 직접 렌더링 후 PNG로 확인
4. 서버 재시작: sudo pkill node && node app.js &
```

## 2. 파일 시스템/경로

### Windows ↔ WSL 경로 변환
| Windows 경로 | WSL 경로 |
|:------------|:---------|
| `C:\Users\Steven\Desktop\...` | `/mnt/c/Users/Steven/Desktop/...` |
| `D:\data\...` | `/mnt/d/data/...` |

**주의**: `file:///mnt/c/...` 경로는 Chrome에서 동작하지 않음. HTML의 `<img src>` 등에 이미지 경로 쓸 때는 **base64 인라인** 사용.

### Obsidian Vault 접근
```
Windows: C:/Users/Steven/Desktop/wiki/team-wiki-vault/
WSL:     /mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault/
```
Obsidian Git 작업은 **Windows에서 실행** (WSL에서 커밋해도 됨).

## 3. 성능/메모리

### Swap 급증 (메모리 누수)
**증상**: WSL Swap이 0B → 수백 MiB로 증가. MetaClaw 등 장기 실행 프로세스가 원인.
**확인**: `free -h` 또는 `ps aux --sort=-%mem | head`
**해결**:
```
1. 의심 프로세스 재시작: tmux kill-session -t openclaw && restart
2. WSL 재부팅: wsl --shutdown (Windows CMD에서)
3. 메모리 제한: %USERPROFILE%\.wslconfig 에 [wsl2] memory=8GB 설정
```

### WSL 가동 시간 확인
```bash
uptime
# 또는
ps -eo pid,lstart,args | grep init
```

## 4. 네트워크

### WSL IP 주소 확인
```bash
ip addr show eth0 | grep inet | awk '{print $2}' | cut -d/ -f1
# Windows에서 접속 시 이 IP 사용
```

### 텔레그램 끊김
**증상**: Telegram Bot 응답 안 함, `Timed out` 에러.
**원인**: WSL 네트워크 일시 불안정, Telegram API Rate Limit.
**해결**:
```
1. 텔레그램 봇 세션 유지 확인: tmux ls | grep hermes
2. cron 배달 에러 확인: cronjob action=list
3. 봇 재시작: tmux kill-session -t hermes && start_hermes_tmux.sh
```

### 한국 사이트 봇 차단
| 사이트 | 상태 | 해결 |
|:-------|:----|:-----|
| 네이버 검색/지도 | ❌ IP 차단 | 카카오맵 API 사용 |
| 구글 검색 | ❌ CAPTCHA | Playwright 우회 |
| 다이닝코드 | ❌ 403 | 대체 서비스 |
| **카카오맵 API** | ✅ 동작 | REST API 키로 무료 사용 |

## 5. 서비스 관리

### tmux 세션 구조
| 세션명 | 서비스 | 포트 |
|:-------|:-------|:----:|
| hermes | Hermes Agent 본체 | - |
| jongdari | 배틀루프 (트레이딩) | - |
| openclaw | OpenClaw Gateway | 18789 |
| hermes-watcher | Obsidian 연동 | - |
| hermes-mcp | MCP 서버 | - |
| trinity-cow | CowAgent | - |
| trinity-meta | MetaClaw | - |
| trinity-od | Open Design | - |

### 서비스 복구
```bash
# 개별 재시작
tmux kill-session -t <세션명>
start_hermes_tmux.sh  # (또는 해당 서비스 실행 스크립트)

# 전면 복구 (self-heal)
~/self_heal.sh
# 또는
python3 ~/hermes_autoheal.py

# cron 기반 자동 복구
# hermes-self-heal-cron: 매 2시간 35분
# trinity-auto-heal: 매 5분
```

## 6. 일반적인 오류와 해결

### "MCP server unreachable"
```bash
# MCP 서버 재시작
cd ~/.hermes/scripts
python3 hermes_mcp_server.py --restart
```

### "Tavily API 401 Unauthorized"
- config.yaml과 .env의 API 키 확인
- 키가 만료되었으면 재발급 필요

### "yfinance: possibly delisted"
- 코스닥 종목은 `.KQ` 심볼 사용 (`.KS`는 코스피)
- 에러는 무시 가능 — 자체 DB로 정상 조회됨

### "pip install 실패" (WSL 패키지)
```bash
# 빌드 의존성 설치
sudo apt-get update
sudo apt-get install -y python3-dev build-essential libssl-dev libffi-dev
```

### SQLite datetime 비교 버그
```sql
-- ❌ timestamp > date 비교 실패
WHERE valid_from <= date('now')
-- ✅ date() 래핑
WHERE date(valid_from) <= date('now')
```

## 7. 백업 및 복구

### Git으로 복구
```bash
cd /mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault
git checkout HEAD -- <파일경로>   # 최근 커밋으로 복구
git log --oneline -5              # 최근 5개 커밋 확인
git reset --hard HEAD~1           # 마지막 커밋 취소
```

### 중요 파일 백업 위치
- `~/jongdari/data/` — 시장 데이터
- `~/jongdari/config/` — 거래 설정
- `~/.hermes/config.yaml` — Hermes 설정
- Vault: Windows Obsidian Git으로 자동 관리

## 관련 문서
- [[../Product/시스템-아키텍처]] — 전체 시스템
- [[../Agents/Hermes/역할과-책임]] — Hermes 역할
- [[../Product/Quote-Tool-연동가이드]] — 견적 시스템
- [[../TechStack/물류-ERP-연동가이드]] — ERP 연동
