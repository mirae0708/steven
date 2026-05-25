# 🚢 Freight Quote 시스템 — 운영 가이드

**최종 업데이트:** 2026-05-26

## 개요
물류 견적 자동화 시스템. 실제 시장 운임 + 로컬비용 데이터를 수집/관리하여 양방향(수출/수입) 견적을 지원한다.

## 데이터베이스
- **위치:** `C:\Users\Steven\Desktop\quote_tool\freight_rates.db`
- **핵심 테이블:** `local_costs`(31개국 로컬비용), `schedule_rates`(해상운임), `countries`(32개국), `seaports`(68개항), `shipping_lines`(19개선사), `vessel_schedules`(선사스케줄)
- **참조 테이블:** `inland_ref_pn_icn` (피엔물류 인천공항 Inland 117건)

## 크론 작업

### 1. 양방향 Tier1 로컬비용 집중수집
- **스케줄:** 매주 월요일 09:00
- **대상:** 양방향 점수 40% 미만 15개국 (홀/짝주 교대)
- **내용:** Tavily 검색으로 부족 카테고리(THC/CUSTOMS/DOC/INLAND 등) 수집

### 2. 실제 해상운임 수집 (가장 중요)
- **스케줄:** 매주 화/목요일 10:00
- **화요일:** 미주/구주 원양항로 8개 (LA, 뉴욕, 함부르크, 로테르담 등)
- **목요일:** 아시아/기타 8개 (호치민, 자카르타, 나바셰바, 시드니 등)
- **내용:** Tavily로 실제 선사 시장운임 검색 → DB 저장

### 3. Tier2~4 + 가격비교 + 월별갱신
- **스케줄:** 매월 1일 09:00
- Tier2(9개국) 보강 + Tier3/4(8개국) 가격비교 + `rate_update.py --apply`

## 데이터 현황

### 로컬비용 (local_costs)
- KR(한국) ✅ 12개 카테고리 (완비)
- Tier4(80%+): KR 1개국
- Tier3(60~80%): FR, KE, NG, CL, GR, NL, US 7개국
- Tier2(40~60%): AE, CN, QA, VN, DE, IN, JP, SA, SG 9개국
- Tier1(~40%): 15개국 (BE, ES, IT, MA, MX, MY, BR, CA, EG, GB, ID, PL, TH, ZA, OM)

### 실제 해상운임 (schedule_rates)
- 총 963건 활성, 선사 15개
- **편중 문제:** 대부분 근거리(일본/중국) 위주 — 원양항로(미주/구주/동남아) 데이터 부족
- 화/목 크론으로 지속 보강중

## 참조 데이터
- **피엔물류 인천공항 요금표** (`inland_ref_pn_icn`): 21개 지역 × 6개 차종 = 117건
- **고객코드 DB** (`MIRAE_CUSTOMER_CODE_FINAL.xlsx`): 7,969행, 국가 분류 완료

## 명령어
```bash
# Tier 리포트 실행
python3 /home/steven/.hermes/scripts/local_cost_tier_report.py

# 운임 현황 조회
cd /mnt/c/Users/Steven/Desktop/quote_tool && python3 rate_update.py

# 운임 갱신
cd /mnt/c/Users/Steven/Desktop/quote_tool && python3 rate_update.py --apply

# 운임 이력
cd /mnt/c/Users/Steven/Desktop/quote_tool && python3 rate_update.py --history
```
