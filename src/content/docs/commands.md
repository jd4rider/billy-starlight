---
title: Commands Reference
description: All slash commands available in Billy
---

Type `/` in Billy to open the interactive command picker, or use any command directly.

## Model Management

| Command | Description |
|---|---|
| `/model` | List all installed Ollama models |
| `/model <name>` | Switch to a different model |
| `/pull <name>` | Download a model from the Ollama library |

**Examples:**
```
/model                  ← list models, shows active with ▶
/model codellama        ← switch to codellama
/pull llama3.2          ← download llama3.2 (shows progress)
```

## Memory

| Command | Description |
|---|---|
| `/memory` | List everything Billy remembers about you |
| `/memory forget <id>` | Remove a specific memory by ID |
| `/memory clear` | Wipe all memories |

You don't need commands to save memories — just tell Billy:
```
> Remember that I use TypeScript
> Save that my project uses PostgreSQL
> Don't forget I prefer short answers
```

## History & Sessions

| Command | Description |
|---|---|
| `/history` | Open interactive conversation browser |
| `/resume <id>` | Load a past conversation by ID |
| `/save` | Save the current conversation |
| `/session` | Save a named checkpoint |

## Conversation

| Command | Description |
|---|---|
| `/clear` | Clear the current chat |
| `/compact` | Summarize and compress the conversation context |

## General

| Command | Description |
|---|---|
| `/help` | Show all commands |
| `/quit` | Exit Billy |
