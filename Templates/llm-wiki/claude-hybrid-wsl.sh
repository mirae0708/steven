#!/bin/bash
# ─────────────────────────────────────────────────────────
# Claude Code Hybrid Switcher — WSL ~/.bashrc aliases
# ─────────────────────────────────────────────────────────
# 설치: cat 이 파일 내용 >> ~/.bashrc && source ~/.bashrc
# ─────────────────────────────────────────────────────────

# ── 서버 검색 (Ollama or LM Studio) ──
__claude_detect_local() {
    # Ollama check (WSL local)
    if curl -s http://localhost:11434/api/tags >/dev/null 2>&1; then
        echo "http://localhost:11434"
        return 0
    fi
    # LM Studio check (WSL local)
    if curl -s http://localhost:1234/v1/models >/dev/null 2>&1; then
        echo "http://localhost:1234"
        return 0
    fi
    # Windows host (Ollama)
    if curl -s http://host.docker.internal:11434/api/tags >/dev/null 2>&1; then
        echo "http://host.docker.internal:11434"
        return 0
    fi
    # Windows host (LM Studio)
    if curl -s http://host.docker.internal:1234/v1/models >/dev/null 2>&1; then
        echo "http://host.docker.internal:1234"
        return 0
    fi
    echo ""
    return 1
}

# ── Cloud Mode ──
cc-cloud() {
    unset ANTHROPIC_BASE_URL
    unset ANTHROPIC_AUTH_TOKEN
    echo ""
    echo "╔══════════════════════════════════════════╗"
    echo "║     🌐 CLOUD MODE — Claude API          ║"
    echo "║     Cost: 💰 Pay-per-token               ║"
    echo "╚══════════════════════════════════════════╝"
    echo ""
    claude "$@"
}

# ── Local Mode ──
cc-local() {
    local endpoint
    endpoint=$(__claude_detect_local)
    
    if [ -z "$endpoint" ]; then
        echo "❌ 로컬 LLM 서버를 찾을 수 없습니다."
        echo "   Ollama:  http://localhost:11434"
        echo "   LM Studio: http://localhost:1234"
        echo "   먼저 서버를 실행해주세요."
        return 1
    fi
    
    local model="${1:-hermes3:8b}"
    shift 2>/dev/null || true
    
    export ANTHROPIC_BASE_URL="$endpoint"
    export ANTHROPIC_AUTH_TOKEN="local-hermes-token"
    
    echo ""
    echo "╔══════════════════════════════════════════╗"
    echo "║     💻 LOCAL MODE — Hermes LLM          ║"
    echo "║     Endpoint: $endpoint"
    echo "║     Model:    $model"
    echo "║     Cost:     ✅ Free (local GPU)       ║"
    echo "╚══════════════════════════════════════════╝"
    echo ""
    claude --model "$model" "$@"
}

# ── Quick Review ──
cc-review() {
    local target="${1:-HEAD}"
    echo "🔍 Reviewing changes since $target ..."
    git diff "$target" | claude -p "Review this diff for bugs, security issues, and style. Be thorough." --max-turns 1
}

# ── Print Mode Shortcuts ──
cc-p() {
    # Cloud print mode — one-shot task
    claude -p "$1" --allowedTools 'Read,Edit,Write,Bash' --max-turns "${2:-10}"
}

cc-pl() {
    # Local print mode — one-shot task (local LLM)
    local endpoint
    endpoint=$(__claude_detect_local) || { echo "❌ No local LLM"; return 1; }
    export ANTHROPIC_BASE_URL="$endpoint"
    export ANTHROPIC_AUTH_TOKEN="local-token"
    claude --model hermes3:8b -p "$1" --allowedTools 'Read,Edit' --max-turns "${2:-5}"
}

# ── Status Check ──
cc-status() {
    echo "=== Claude Code Hybrid Status ==="
    echo "ANTHROPIC_BASE_URL: ${ANTHROPIC_BASE_URL:-🌐 Cloud (default)}"
    echo "ANTHROPIC_AUTH_TOKEN: ${ANTHROPIC_AUTH_TOKEN:+🔑 set}${ANTHROPIC_AUTH_TOKEN:-❌ not set}"
    echo ""
    echo "Local servers:"
    if curl -s http://localhost:11434/api/tags >/dev/null 2>&1; then
        echo "  ✅ Ollama (localhost:11434) — running"
        curl -s http://localhost:11434/api/tags | python3 -c "import json,sys; d=json.load(sys.stdin); [print(f'    - {m[\"name\"]}') for m in d.get('models',[])]" 2>/dev/null || true
    else
        echo "  ❌ Ollama (localhost:11434) — not running"
    fi
    if curl -s http://localhost:1234/v1/models >/dev/null 2>&1; then
        echo "  ✅ LM Studio (localhost:1234) — running"
    else
        echo "  ❌ LM Studio (localhost:1234) — not running"
    fi
    echo ""
    echo "Commands:"
    echo "  cc-cloud [args]     🌐 Cloud mode (Claude API)"
    echo "  cc-local [model]    💻 Local mode (Hermes LLM)"
    echo "  cc-review [ref]     🔍 Quick code review"
    echo "  cc-p 'task' [turns]  📝 Cloud print mode"
    echo "  cc-pl 'task' [turns] 📝 Local print mode"
}
