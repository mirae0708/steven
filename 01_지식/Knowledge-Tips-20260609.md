---
created: 2026-06-09 00:46
updated: 2026-06-09 00:46
tags: [knowledge-tip, mcp, virtual-office, swap-pattern, c-drive, bloody-monday]
---

# 🧠 Knowledge Tips — 2026-06-09 수집

## 1. MCP 생태계 표준화 가속 확인

**관찰 시점**: 2026-06-08 MCP 멀티검색 일괄 수집
**발견 내용**: 
- AAIF (Agent-to-Agent Interoperability Forum) 100+ 회원사 참여
- 월 9,700만 MCP SDK 다운로드 기록 — de facto 표준 확정
- Agent-to-Agent (A2A) 프로토콜이 MCP 기반으로 통합되는 추세
- Google, Microsoft, Anthropic, OpenAI 모두 MCP 호환 제품 출시

**활용**: Hermes MCP-멀티검색 cron 인프라가 시장 트렌드 포착에 효과적임 재확인. 6/8 22:41~22:44 3건 AI에이전트/MCP 검색 추가 수행 완료.

**참조**: [[10_Wiki/Artificial_Intelligence/]] 최신 논문 72건 + MCP 관련 신규 문서군

---

## 2. 가상오피스 문서 품질 53% 수정률 — 근본 원인 진단

**관찰 시점**: 2026-06-08 Daily Log 분석
**발견 내용**:
- Booking 20건 확정은 양호
- 문서 15건 중 8건(53%) "수정 필요" 상태
- 주요 원인: PDF 오버레이 좌표 오차 + HBL 주소 매핑 불일치

**제안 해결책**:
1. n8n 문서생성 파이프라인에 좌표 검증 로직 추가
2. 고객 주소 DB (영문/한글) 정합성 검증 자동화
3. 생성 후 샘플링 검증 (10% 샘플 → 사람 검토)

---

## 3. YOUNGLOG 단일 고객 의존도 리스크

**관찰 시점**: 2026-06-08 Sales VP 리포트 분석
**발견 내용**:
- Sales VP 격적 10건 전량 YOUNGLOG (100% 의존)
- 루트: KR→SG/GB/DE/TH/MY/JP/US/AE — 다국적 루트이나 고객 단일
- 중국 물류 DB: 62개 업체 구축 완료, 아직 견적 연결 안 됨

**제안**: 중국 물류 DB 62개 업체 대상 콜드 콜 / 견적 요청 자동화 파이프라인 구축

---

## 4. Swap 재축적 패턴 정형화 관찰

**6/5 재부팅 이후 Swap 타임라인**:

| 시간 | Swap 사용량 | 변동 |
|:----|:----------:|:----:|
| 6/5 22:22 (재부팅 직후) | 780KiB | Baseline |
| 6/8 12:45 (피크) | 796MiB | +100% |
| 6/8 16:46 | 448MiB | -44% |
| 6/8 20:46 | 99MiB ✅ | -78% |
| 6/9 00:46 | 334MiB | +237% (4h 재축적) |

**패턴 결론**:
- Uptime 72h+에서 Swap 300~500MiB가 정상 범위
- Trinity 서비스(특히 MetaClaw)의 자연 메모리 누적이 주요 원인
- 1GiB 초과 시에만 재부팅 필요 (현재 수준에서는 모니터링 유지)
- 20:46→00:46 재축적은 정상 nightly 배치 작업 영향 추정

---

## 5. C: 드라이브 83% 지속 문제

- Docker prune 이후 79Gi 여유 유지 (추가 개선 없음)
- Windows vhdx compact (Hyper-V 권한 필요) — WSL에서 실행 불가
- 임시 방편:
  - `docker system prune -a --volumes` (C: 드라이브 Docker 이미지 정리)
  - Windows Temp 정리 (`%TEMP%`, `C:\Windows\Temp`)
  - WSL `/tmp/` 내 불필요 파일 정리
