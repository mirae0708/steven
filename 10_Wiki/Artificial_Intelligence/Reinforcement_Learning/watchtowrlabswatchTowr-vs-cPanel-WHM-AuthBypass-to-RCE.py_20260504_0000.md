---
source: github
collected: 2026-05-04 00:00
category: Artificial_Intelligence/Reinforcement_Learning
stars: 310
language: Python

---

# watchtowrlabs/watchTowr-vs-cPanel-WHM-AuthBypass-to-RCE.py

⭐ **310 stars**
🔤 **Python**


> 

## Links
- 🔗 [Original](https://github.com/watchtowrlabs/watchTowr-vs-cPanel-WHM-AuthBypass-to-RCE.py)

## Key Takeaways
- **CVE-2026-41940**: cPanel/WHM 인증 우회(Auth Bypass) → RCE 익스플로잇 체인 PoC
- **작성자**: Sina Kheirkhah (@SinSinology) — watchTowr 연구팀
- **공격 기법**: CRLF Injection (Basic auth + no-ob cookie) → 세션 토큰 유출 → WHM root 권한 획득
- **영향**: cPanel/WHM 11.110.0.89 및 이하 버전 (2026-04-28 보안 패치 이전)
- **탐지 방법**: 포트 2087(WHM) 대상으로 preauth 세션 생성 → CRLF injection → /json-api/version 응답 확인
- **Python 기반 PoC** — 단일 스크립트로 탐지 아티팩트 생성

---

_Automatically collected by Hermes Tech Brain Sync_