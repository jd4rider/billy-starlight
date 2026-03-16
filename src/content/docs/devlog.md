---
title: Devlog
description: Running log of what's new in Billy.sh
---

A running changelog of meaningful updates — written as we ship.

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
