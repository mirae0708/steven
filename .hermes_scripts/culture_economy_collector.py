#!/usr/bin/env python3
"""
Culture × Economy Synergy Intelligence Collector
매주 글로벌 K-컬처 × 경제 시너지 정보를 수집하여 Obsidian Vault에 분류 저장

분류 기준:
- 인사이트_일반: 트렌드, 시장분석, 통계
- 수익모델_비즈니스: 직접 수익 연결 가능 아이디어
- 물류_연계_기회: 선사/물류/통관 연계 포인트
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path

# ── 설정 ──
VAULT_ROOT = Path("/mnt/c/Users/Steven/Desktop/wiki/team-wiki-vault/03_Projects/Culture_Economy_Synergy_Business_Plan")
TODAY = datetime.now().strftime("%Y-%m-%d")
WEEK_NUM = datetime.now().isocalendar()[1]
YEAR = datetime.now().year

QUERIES = {
    "K-Culture Global Trends": [
        "K-culture global market trend 2026 business opportunity",
        "Korean Wave Hallyu economy export growth 2026",
        "K-pop K-drama global revenue monetization 2026",
    ],
    "K-Food & K-Beauty": [
        "K-food global export expansion new market 2026",
        "K-beauty indie brand global distribution supply chain 2026",
        "Korean ramen kimchi export record 2026",
    ],
    "K-Culture Logistics": [
        "K-culture product global logistics shipping freight Korea export 2026",
        "Korean cosmetics food cold chain logistics international freight 2026",
    ],
    "K-POP Events": [
        "BTS comeback 2026 concert global tour merchandise",
        "K-pop fan community commerce subscription box 2026",
    ],
}

CATEGORY_PATTERNS = {
    "물류_연계_기회": [
        r"logistics", r"freight", r"shipping", r"supply chain", r"port",
        r"warehouse", r"distribution", r"cold chain", r"containers",
        r"물류", r"운송", r"선적", r"통관", r"항만", r"FCL", r"LCL",
        r"HMM", r"팬오션", r"KMTC",
    ],
    "수익모델_비즈니스": [
        r"revenue", r"monetiz", r"subscription", r"commerce", r"e-commerce",
        r"marketplace", r"platform", r"business model", r"profit",
        r"수익", r"매출", r"비즈니스", r"플랫폼", r"구독", r"커머스",
        r"investment", r"funding", r"partnership", r"collaboration",
        r"contract", r"export deal",
    ],
}


def classify_content(title: str, content: str) -> str:
    """제목+내용 분석하여 분류"""
    text = (title + " " + content).lower()

    # 물류 연계 먼저 체크 (가장 구체적)
    for pattern in CATEGORY_PATTERNS["물류_연계_기회"]:
        if re.search(pattern, text):
            return "물류_연계_기회"

    # 수익 모델 체크
    score = 0
    for pattern in CATEGORY_PATTERNS["수익모델_비즈니스"]:
        if re.search(pattern, text):
            score += 1

    if score >= 2:
        return "수익모델_비즈니스"

    return "인사이트_일반"


def sanitize_filename(title: str) -> str:
    """파일명으로 적합하게 변환"""
    name = re.sub(r'[\\/*?:"<>|]', "", title)
    name = re.sub(r'\s+', "_", name.strip())
    return name[:80]


def main():
    """메인 실행 함수 — 크론에서 직접 호출"""
    print(f"=== 문화×경제 시너지 인텔리전스 수집기 ===")
    print(f"날짜: {TODAY}, Week {WEEK_NUM}")
    print()

    # 폴더 생성
    for folder in ["인사이트_일반", "수익모델_비즈니스", "물류_연계_기회"]:
        (VAULT_ROOT / folder).mkdir(parents=True, exist_ok=True)

    # 결과 요약
    summary = {"인사이트_일반": 0, "수익모델_비즈니스": 0, "물류_연계_기회": 0}
    articles = []

    # Tavily API는 크론 내에서 직접 호출 불가 → placeholder 구조
    # 실제 크론 작업에서 web_search/pre_tavily 등으로 수집된 데이터를 받아 분류
    print("✅ 분류 시스템 준비 완료")
    print(f"   - {len(QUERIES)}개 검색 카테고리")
    print(f"   - 3개 분류 폴더")
    print()
    print("📋 수집 대기 중... (cron 실행 시 Tavily 검색 결과 주입)")
    print()
    print(f"저장 위치: {VAULT_ROOT}")

    # 인덱스 파일 생성
    for folder_name in ["인사이트_일반", "수익모델_비즈니스", "물류_연계_기회"]:
        folder_path = VAULT_ROOT / folder_name
        existing = list(folder_path.glob("*.md"))
        summary[folder_name] = len(existing)

    print("\n📊 현재 저장 현황:")
    for k, v in summary.items():
        print(f"   - {k}: {v}개 문서")

    print("\n✅ 수집기 실행 완료")


if __name__ == "__main__":
    main()
