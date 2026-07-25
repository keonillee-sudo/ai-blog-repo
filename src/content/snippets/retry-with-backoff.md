---
title: "API call with exponential backoff"
date: 2026-07-22
language: "python"
tags: ["utilities", "agents"]
description: "Retry wrapper for flaky LLM API calls with jittered exponential backoff."
---

Rate limits and transient errors are common when hitting LLM APIs in a loop. This decorator handles retries cleanly.

```python
import time
import random
import functools

def retry_with_backoff(max_retries: int = 5, base_delay: float = 1.0):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            for attempt in range(max_retries):
                try:
                    return fn(*args, **kwargs)
                except Exception as e:
                    if attempt == max_retries - 1:
                        raise
                    delay = base_delay * (2 ** attempt) + random.uniform(0, 1)
                    print(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay:.1f}s")
                    time.sleep(delay)
        return wrapper
    return decorator

@retry_with_backoff(max_retries=4, base_delay=2.0)
def call_api(prompt: str) -> str:
    # your API call here
    ...
```

The jitter (`random.uniform(0, 1)`) prevents thundering herd when many requests fail simultaneously.
