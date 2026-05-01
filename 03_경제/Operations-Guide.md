# 운영 가이드

## 크론 작업 일정

| 시간 | 작업 | 설명 |
|:----|:-----|:------|
| 매일 08:45 | 배틀루프 시작 | 모의투자 실시간 루프 가동 |
| 평일 08:00 | 아침 리포트 | 장 전 시장 상황 + 포트폴리오 보고 |
| 평일 12:00 | 장중 리포트 | 오전 시장 분석 + 포트폴리오 현황 |
| 평일 15:30 | 장 마감 요약 | 오늘의 결과 + 수익률 정리 |
| 목요일 16:30 | FOMC 분석 | 연준 회의 결과 분석 |
| 매시간 00분 | 자기 발전 | 자체 진단 + 개선 (hermes_self_evolve.py) |
| 4시간마다 | 의무 점검 | 4대 핵심 항목 점검 |
| 3시간마다 | 자기 진단 | 프로세스 생존 + 복구 |
| 2시간마다 | 장중 모니터링 | 추가 장중 리포트 |
| 매 30분 | 자동 치유 | 배틀루프 생존 확인 |
| 매 60초 | KeepAlive | 게이트웨이 서버 감시 |

## 장애 대응

### 배틀루프 다운
```bash
# 상태 확인
tmux ls
tmux capture-pane -t jongdari -p | tail -20

# 수동 재시작
bash /mnt/c/.../01_Stock_Trading_System/start_battleloop.sh

# 강제 재시작
tmux kill-session -t jongdari 2>/dev/null
bash /mnt/c/.../01_Stock_Trading_System/start_battleloop.sh
```

### KeepAlive 문제
```bash
# 게이트웨이 확인
curl -s -o /dev/null -w "%{http_code}" http://localhost:18789/

# 수동 재시작
tmux send-keys -t openclaw 'pkill -f gateway-server' Enter
tmux send-keys -t openclaw 'cd ~/jongdari && node src/gateway-server.js --replace' Enter
```

### Watcher (Obsidian 연동) 문제
```bash
# 상태 확인
tmux ls | grep hermes-watcher

# 재시작
bash /mnt/c/Users/Steven/hermes-share/start_hermes_watcher.sh
```

## 자주 쓰는 명령어

### 시스템 상태 확인
```bash
# 전체 프로세스
tmux ls

# 배틀루프 로그
tail -50 /mnt/c/.../01_Stock_Trading_System/data/market_intel.json

# 포트폴리오
cat /home/steven/jongdari/data/paper_portfolio.json
```

### 모니터링
```bash
# Hermes 직접 진단
cd /home/steven/jongdari && python3 hermes_autoheal.py --check

# 뉴스 수집 테스트
python3 -c "from nexus_orchestrator import NexusOrchestrator; n=NexusOrchestrator(); import asyncio; asyncio.run(n._collect_market_intel())"

# 종목 분석
python3 nexus_orchestrator.py --stock 014950.KQ
```

## 부팅 시 자동 실행 순서
1. `.bashrc` → OpenClaw Gateway (tmux `openclaw`)
2. `.bashrc` → Hermes Agent (tmux `hermes`)
3. cron → Watcher (tmux `hermes-watcher`)
4. cron → 배틀루프 (08:45)
