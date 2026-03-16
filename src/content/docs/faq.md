---
title: FAQ
description: Frequently asked questions about Billy.sh
---

## Does Billy require internet?

**No.** Billy runs entirely offline using your local Ollama server. The only time it needs internet is to download models (`/pull`) or if you configure a remote backend.

## What models work best?

For coding tasks:
- `codellama` — Meta's code-focused model
- `deepseek-coder` — Excellent for code completion
- `mistral` — Great all-rounder, good for chat + code

For general chat:
- `llama3.2` — Fast 3B model, good for most tasks
- `llama3.1` — Larger, more capable

## How is this different from GitHub Copilot?

| | Billy.sh | GitHub Copilot |
|---|---|---|
| Cost | Free (open source) or one-time fee | $10/month |
| Data | Stays on your machine | Sent to GitHub/OpenAI |
| Works offline | ✅ | ❌ |
| Model choice | Any Ollama model | Fixed models |
| IDE integration | Coming soon | Built-in |

## Can I use my own server?

Not yet, but Groq and custom HTTP backends are on the roadmap.

## Is it production ready?

Billy is pre-alpha. It works, but expect rough edges.

## Where is my data stored?

Everything is in `~/.localai/`:
- `config.toml` — your settings
- `history.db` — conversations and memories (SQLite)
