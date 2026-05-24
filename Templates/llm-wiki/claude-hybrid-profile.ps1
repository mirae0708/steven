# ─────────────────────────────────────────────────────────
# Claude Code Hybrid Switcher — PowerShell Profile
# ─────────────────────────────────────────────────────────
# 설치: notepad $PROFILE → 아래 내용 붙여넣기 → 저장
# 적용: . $PROFILE
# ─────────────────────────────────────────────────────────

function Start-ClaudeCloud {
    <#
    .SYNOPSIS
        🌐 Cloud mode — Claude 3.7 Sonnet/Opus (Anthropic API)
    .DESCRIPTION
        Clears local overrides and runs Claude Code with cloud API.
        Use for: complex refactoring, architecture design, multi-file changes
    #>
    Remove-Item Env:\ANTHROPIC_BASE_URL -ErrorAction SilentlyContinue
    Remove-Item Env:\ANTHROPIC_AUTH_TOKEN -ErrorAction SilentlyContinue
    Write-Host ""
    Write-Host "╔══════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║     🌐 CLOUD MODE — Claude API          ║" -ForegroundColor Cyan
    Write-Host "║     Model: Claude 3.7 Sonnet/Opus       ║" -ForegroundColor Cyan
    Write-Host "║     Cost:  💰 Pay-per-token             ║" -ForegroundColor Cyan
    Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
    claude
}

function Start-ClaudeLocal {
    <#
    .SYNOPSIS
        💻 Local mode — Hermes LLM (local GPU)
    .DESCRIPTION
        Points Claude Code to local LLM endpoint (Ollama/LM Studio).
        Use for: simple bug fixes, unit tests, NDA code, offline dev
    .PARAMETER Model
        Local model name (default: hermes3:8b)
    .EXAMPLE
        cc-local                              # hermes3:8b
        cc-local -Model "nous-hermes-2:7b"    # specific model
    #>
    param([string]$Model = "hermes3:8b")
    
    # ── 로컬 서버 엔드포인트 설정 ──
    # Ollama (기본): http://localhost:11434
    # LM Studio:     http://localhost:1234
    $LOCAL_ENDPOINT = "http://localhost:11434"
    
    $env:ANTHROPIC_BASE_URL = $LOCAL_ENDPOINT
    $env:ANTHROPIC_AUTH_TOKEN = "local-hermes-dummy-token"
    
    Write-Host ""
    Write-Host "╔══════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║     💻 LOCAL MODE — Hermes LLM          ║" -ForegroundColor Green
    Write-Host "║     Endpoint: $($LOCAL_ENDPOINT)        " -ForegroundColor Green
    Write-Host "║     Model:    $Model                    " -ForegroundColor Green
    Write-Host "║     Cost:     ✅ Free (local GPU)       " -ForegroundColor Green
    Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    claude --model $Model
}

function Start-ClaudeReview {
    <#
    .SYNOPSIS
        🔍 Review mode — quick code review with Claude
    .DESCRIPTION
        Runs Claude Code in print mode for code review.
        Analyzes git diff and returns structured feedback.
    #>
    param([string]$Target = "HEAD")
    
    Write-Host "🔍 Reviewing changes since $Target ..." -ForegroundColor Yellow
    git diff $Target | claude -p "Review this diff for bugs, security issues, and style problems. Be thorough." --max-turns 1
}

# ── Short Aliases ──
Set-Alias -Name cc-cloud  -Value Start-ClaudeCloud
Set-Alias -Name cc-local  -Value Start-ClaudeLocal
Set-Alias -Name cc-review -Value Start-ClaudeReview

# ── Extra: Quick switch without function ──
function Set-ClaudeMode {
    param([string]$Mode = "cloud")
    if ($Mode -eq "local") {
        $env:ANTHROPIC_BASE_URL = "http://localhost:11434"
        $env:ANTHROPIC_AUTH_TOKEN = "local-token"
        Write-Host "💻 Switched to LOCAL mode" -ForegroundColor Green
    } else {
        Remove-Item Env:\ANTHROPIC_BASE_URL -ErrorAction SilentlyContinue
        Remove-Item Env:\ANTHROPIC_AUTH_TOKEN -ErrorAction SilentlyContinue
        Write-Host "🌐 Switched to CLOUD mode" -ForegroundColor Cyan
    }
}
Set-Alias -Name ccmode -Value Set-ClaudeMode
