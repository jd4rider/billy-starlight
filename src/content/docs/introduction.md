---
title: Introduction
description: What is Billy and why was it built?
---

# Billy

**Billy** is an open-source, terminal-based AI coding assistant that runs entirely on your machine.

No subscription. No API keys. No cloud. Just fast local AI.

## Why Billy?

Tools like GitHub Copilot are powerful, but cost $10–19/month. If you're a student, indie developer, or just getting started — that adds up.

Billy runs on [Ollama](https://ollama.com), a free local LLM server, and works offline. Pay once (or use the free tier) and it's yours.

## What can Billy do?

- 💬 **Chat** with any Ollama model from your terminal
- 🤖 **Agentic mode** — Billy can propose and run shell commands, read the output, and self-debug until it works
- 🧠 **Remember things** about you across sessions
- 📜 **Resume conversations** — full session history
- 🔄 **Switch models** on the fly with `/model`
- 📦 **Download models** without leaving the app with `/pull`
- ⌨️  **Command picker** — type `/` to see all commands
- 📊 **Progress bars** and collapsible command output for a clean terminal experience

## Built with

| Library | Role |
|---|---|
| [Go](https://go.dev) | Language |
| [Bubble Tea](https://github.com/charmbracelet/bubbletea) | TUI framework |
| [Lipgloss](https://github.com/charmbracelet/lipgloss) | Terminal styling |
| [Glamour](https://github.com/charmbracelet/glamour) | Markdown rendering |
| [Ollama](https://ollama.com) | Local LLM server |
| [SQLite](https://sqlite.org) | History & memory storage |
