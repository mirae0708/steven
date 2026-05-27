# CB Score ?/100 문제 분석

> **문제**: Hermes Dashboard에 CB Score가 항상 `?/100`으로 표시됨
> **발견일**: 2026-05-28 04:30 KST (근본 원인 코드 레벨 확정)
> **상태**: 🔴 미해결

---

## 🔍 증상

- Dashboard에서 `CB Score=?/100` 지속
- 재부팅 전/후 동일 (재부팅과 무관)
- Nexus 자체는 `CB Score 22/100` 정상 계산

## 🧬 근본 원인

`get_cb_score()` 함수가 다음과 같이 동작:

```python
def get_cb_score():
    output = subprocess.run(
        ["tmux", "capture-pane", "-t", "jongdari", "-p", "-S", "-50"],
        capture_output=True, text=True
    ).stdout
    for line in output.split('\n'):
        if 'Score=' in line:
            return line.split('Score=')[1].strip()
    return '?/100'
```

- **Jongdari 로그에 `"Score="` 패턴이 더 이상 없음**
- Nexus가 `"Score=x/y"` 포맷으로 출력하지 않음
- 따라서 항상 fallback `'?/100'` 반환

## 🛠️ 해결 방법

### 방법 A: 패턴 변경 (가장 간단)
```
'Score=' → 'CB ' 또는 'Score ' 또는 'CB Score'
```

### 방법 B: 직접 읽기
Jongdari 로그 대신 `brain_state.json`에서 직접 CB Score 읽기

### 방법 C: fallback 처리
`?/100`이 표시되면 `"NaN"`으로 표시 — 적어도 `?`는 안 보임

## 참고
- 이 버그는 **2026-05-17 22:30 이후**로 추정 (Nexus 출력 포맷 변경 시점)
- 자세한 분석: [[Hermes-Auto-Evolution-20260528-0430]]
