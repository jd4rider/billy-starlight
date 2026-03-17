---
title: Devlog
description: Running log of what's new in Billy.sh
---

A running changelog of meaningful updates — written as we ship.

---

## 2026-03-17 — Agentic mode overhaul: async execution, directory tracking & visual feedback (v0.1.4-alpha)

A major overhaul to make Billy a genuinely capable coding agent — not just a
command suggester, but a tool that iterates on errors the way you'd expect from
Copilot CLI or Codex CLI.

### Non-blocking shell execution

The original agent froze the entire TUI while a command ran (builds, installs,
test runs). The shell runner is now fully async — the UI stays responsive, the
spinner keeps spinning, and results arrive as messages when the command finishes.

### Working directory tracking

Previously, if Billy scaffolded a new project with `mkdir myapp && cd myapp`,
the next command would still run in the parent folder. Billy now captures the
real `$PWD` after every command and automatically updates the working directory
— so `cd`, `mkdir`, and nested project creation all work correctly without you
having to intervene.

### Visual feedback at every step

You can now see exactly what Billy is doing at all times:

```
⚡ Run  go build .
   ⟳ running…          ← blue, command in flight

✗ failed               ← red on error
$ go build .
./main.go:5:2: undefined: fmt

⟳ Step 1 — Billy is analyzing output…   ← purple, AI processing

Billy > The import is missing. Let me fix it:

⚡ Run  sed -i '' 's/^package main/package main\nimport "fmt"/' main.go && go build .
   ⟳ running…

✓ done                 ← green on success
```

The status bar at the bottom also shows the current step number so you always
know where you are in a long chain.

### Project context injection

Billy now reads your project type before every agent request — `go.mod`,
`package.json`, `Cargo.toml`, `pyproject.toml`, and more. This lets him pick
the right commands without you having to tell him what kind of project it is.

### 20-step safety cap

Long agent chains are capped at 20 iterations. If Billy hasn't solved the
problem by then, he'll stop and ask for guidance rather than running forever.

### Default model upgraded to qwen2.5-coder:14b

The default model is now **qwen2.5-coder:14b**. It reasons significantly better
on multi-step coding tasks. Most modern dev machines (16 GB+ RAM) handle it
without issue. Existing installs are auto-migrated — no config change needed.

---

## 2026-03-16 — Agentic mode, collapsible output & TUI polish (pre-alpha)

Big batch of TUI improvements land across the board.

### Agentic mode

Billy can now propose and run shell commands. When he does, you get an
interactive arrow-key picker instead of a `y/n` prompt:

```
  ❯  ✅ Approve
     ⏭  Skip
     🚫 Abort
     ▶▶ Run all remaining
```

After a command runs, the output is fed back to Billy as `Command >` context —
so he can read the result, catch errors, and retry automatically until it works.

### Collapsible command output

Long command output (> 15 lines) is collapsed by default with a preview:

```
$ npm install
  ... 10 lines shown ...
  ╰─ [+] 47 lines hidden · click or Ctrl+X to expand
```

Billy still receives the full output for reasoning. Click the hint or press
**Ctrl+X** to expand in-place.

### Progress bars

Charmbracelet's `harmonica` spring-physics progress bars now show during
long-running operations (builds, installs, pulls).

### Mouse support

- Click the `[+] N lines hidden` hint to expand collapsed output
- **Ctrl+X** keyboard shortcut as an alternative

### Label alignment fix

`You >`, `Billy >`, and `Command >` labels are now consistently left-aligned.
A lipgloss trailing-newline quirk was causing the first user message to render
offset from the left edge. Fixed at the root.

---

## Earlier — Core foundation

- Interactive TUI built with Bubble Tea
- Local Ollama backend (chat, model list, pull, switch)
- Conversation history persisted to SQLite
- Memory system — Billy remembers facts you tell him
- Session picker — resume any previous conversation
- `/` command picker with fuzzy dropdown
- Homebrew tap, Scoop bucket, `.deb`/`.rpm` packages
