---
title: Configuration
description: Configure Billy using config.toml or environment variables
---

## Config file

Billy reads from `~/.localai/config.toml` on startup. If it doesn't exist, defaults are used.

```toml
[backend]
type = "ollama"
url  = "http://localhost:11434"

[ollama]
model       = "mistral"
temperature = 0.7

[storage]
history_file = "~/.localai/history.db"
```

## Options

### `[backend]`

| Key | Default | Description |
|---|---|---|
| `type` | `ollama` | Backend to use. Currently only `ollama`. |
| `url` | `http://localhost:11434` | URL of the Ollama server |

### `[ollama]`

| Key | Default | Description |
|---|---|---|
| `model` | `mistral` | Default model to use |
| `temperature` | `0.7` | Sampling temperature (0.0 = deterministic, 1.0 = creative) |

### `[storage]`

| Key | Default | Description |
|---|---|---|
| `history_file` | `~/.localai/history.db` | SQLite database for history & memories |

## Environment variables

All config values can be overridden:

```bash
BILLY_MODEL=llama3.2 billy
BILLY_BACKEND_URL=http://192.168.1.10:11434 billy
```
