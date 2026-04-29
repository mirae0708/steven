# AI 인보이스 추출 — Gemini 프롬프트 템플릿

## 목적
인보이스(PI/PL) PDF/이미지를 Gemini AI로 분석하여 ERP 표준 JSON으로 변환한다.

## 핵심 원칙
- 영단어 변형(Weight vs Gross Wt, Meas vs CBM 등)에 관계없이 의미 파악
- **지정된 ERP 키(JSON Key)만 출력** — 다른 키 절대 추가 금지
- UNLOCODE는 반드시 5자리 영문 코드(CNSZX, KRINC 등)로만 추출
- 숫자 필드는 숫자만 추출 (단위 제거)

## ERP 매칭 템플릿

| JSON Key | 추출 대상 |
|:---------|:----------|
| `shipper_company` | 수출자/송하인 회사명 (Shipper, Exporter, Seller) |
| `shipper_search_keyword` | 검색용 키워드 (회사명 앞 10-15글자) |
| `shipper_address` | 수출자 주소 |
| `shipper_phone` | 전화번호 |
| `shipper_fax` | 팩스 |
| `shipper_email` | 이메일 |
| `shipper_contact_person` | 담당자명 (Attn, PIC) |
| `shipper_tax_id` | 사업자등록번호 (VAT, Tax ID) |
| `consignee_*` | 수입자/수하인 (위와 동일 구조) |
| `pol` | 선적항 UNLOCODE |
| `pod` | 양하항 UNLOCODE |
| `por` | 출발지 UNLOCODE |
| `dlv` | 최종 배송지 UNLOCODE |
| `fds` | 최종 목적지 UNLOCODE |
| `incoterms` | 무역조건 (FOB, CIF, EXW) |
| `bound` | 수출입 구분 (OUTBOUND/INBOUND) |
| `trans_type` | 운송 유형 (4-5DAYS, NORMAL) |
| `vessel` | 선명 |
| `voyage` | 항차 |
| `pkg_qty` | 총 포장 수량 (숫자만) |
| `gross_weight` | 총 중량 KGS (숫자만) |
| `measurement` | 총 부피 CBM (숫자만) |
| `chargeable_weight` | 청구중량 (숫자만) |
| `description` | 화물 품명 요약 |
| `total_qty` | 총 품목 수량 (숫자만) |
| `origin` | 출발지 도시/공항코드 |
| `via` | 경유지 |
| `destination` | 최종 목적지 |
| `agent` / `agent_name` | 에이전트 코드/명 |
| `partner` / `partner_name` | 파트너 코드/명 |
| `item_lines[]` | 품목 배열: `{product_name, qty, unit_price, amount}` |

## AI에게 주는 지시
> 너는 세계 최고의 "MRCloud ERP 전용" 물류 인보이스(PI/PL) 분석 AI이다. 첨부된 문서의 영단어가 조금씩 다르거나 폼이 달라도 정확히 파악하여 아래 지정된 100% 고정된 ERP 규격 키에 맞춰 완벽한 JSON 데이터로 추출하라.

## 참고
- **원본 프롬프트**: `C:\Users\Steven\Desktop\프로\invoice_auto\docs\gemini_prompt.md`
- **원본 절대 지침서**: `Master_Directive_MIRAE.md`
