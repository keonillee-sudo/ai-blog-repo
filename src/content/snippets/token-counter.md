---
title: "Rough token counter in Python"
date: 2026-07-25
language: "python"
tags: ["LLMs", "utilities"]
description: "Quick heuristic to estimate token count before sending to an API."
---

A fast heuristic: English text averages ~4 characters per token. This won't match any tokenizer exactly but is useful for back-of-envelope estimates.

```python
def estimate_tokens(text: str) -> int:
    """Rough estimate: ~4 chars per token for English text."""
    return max(1, len(text) // 4)

def fits_in_context(text: str, context_limit: int = 128_000) -> bool:
    return estimate_tokens(text) <= context_limit

# Example
sample = "The quick brown fox jumps over the lazy dog."
print(f"~{estimate_tokens(sample)} tokens")  # ~11
```

For production use, call the model's actual tokenizer (e.g. `tiktoken` for OpenAI, `anthropic.count_tokens` for Claude).
