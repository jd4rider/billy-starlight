---
title: Devlog
description: Running log of what's new in Billy
---

A running changelog of meaningful updates — written as we ship.

---

## 2026-03-27 — Billy goes open-core

Billy now ships with the full local CLI unlocked by default.

- The core app is no longer positioned as crippleware with a gated “real” version
- Custom OpenAI-compatible backends are available in the open-core build
- Support shifts toward setup help, sponsorship, and future convenience bundles
- The long-term direction is still local-first, private, ad-free software

---

## 2026-03-26 — Custom domains live

Billy now has dedicated public URLs:

- `https://billysh.online` for the main site
- `https://docs.billysh.online` for the docs
- `https://blog.billysh.online` for the blog

This gives the product one canonical landing page instead of scattering traffic across `github.io` subpaths.

- Repo homepage links and public site metadata now point at the new domains
- Blog and docs navigation moved over to their own subdomains
- In-app support and README links now send users to `billysh.online`
- GitHub Pages HTTPS provisioning is rolling out host-by-host as the custom domains settle

---

## 2026-03-18 — Custom endpoints & multi-backend support (v0.1.8-alpha)

Billy can now point at any OpenAI-compatible server — Groq, OpenRouter, LM Studio, or your own.

### Custom backend configuration

```toml
# ~/.localai/config.toml
[backend]
type    = "custom"
url     = "https://api.groq.com/openai/v1"
model   = "llama-3.3-70b-versatile"
api_key = "gsk_..."
```

Or use environment variables with no config file at all:

```bash
BILLY_BACKEND_TYPE=custom \
BILLY_BACKEND_URL=https://api.groq.com/openai/v1 \
BILLY_BACKEND_MODEL=llama-3.3-70b-versatile \
BILLY_API_KEY=gsk_... \
billy
```

### `/backend` command

Type `/backend` to see your active backend, model, and the config file path.
`/backend reload` hot-reloads your config without restarting Billy.

Ollama is still the default, and Billy now treats custom endpoints as part of the open-core tool instead of a gated upgrade.

---

## 2026-03-16 — Agentic mode, collapsible output & TUI polish (v0.1.1-alpha)

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
