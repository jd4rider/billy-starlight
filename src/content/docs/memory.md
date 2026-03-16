---
title: Memory System
description: How Billy learns and remembers things about you
---

Billy has a persistent memory system backed by SQLite. It learns about you over time without any special setup.

## How it works

Billy scans your messages for trigger phrases and automatically saves relevant information.

**Trigger phrases:**
- "remember that..."
- "save that..."
- "don't forget..."
- "keep in mind..."
- "note that..."
- ...and more

## Example

```
> Remember that I'm a senior Go developer
> Save that I'm building a SaaS product called Billy.sh
> Keep in mind I prefer concise, direct code examples
```

Billy confirms what it saved and includes all memories as context in every future conversation.

## Managing memories

```
/memory                     ← list all memories (with IDs)
/memory forget 3            ← delete memory with ID 3
/memory clear               ← wipe everything
```

## Privacy

Memories are stored locally in `~/.localai/history.db`. Nothing is sent to any server. You have full control.
