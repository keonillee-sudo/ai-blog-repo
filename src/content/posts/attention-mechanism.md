---
title: "Understanding attention (the mechanism, not the psychology)"
date: 2026-07-20
tags: ["LLMs", "transformers", "fundamentals"]
description: "Breaking down how transformer attention actually works."
---

Attention is the core operation that makes transformers tick. Here's my mental model.

## The intuition

When predicting the next word in "The cat sat on the ___", the model needs to "look back" at earlier tokens to find relevant context. Attention is the mechanism that decides which earlier tokens are most relevant.

Each token gets to ask: *which other tokens in this sequence should I pay attention to?*

## Query, Key, Value

Every token produces three vectors:

- **Query** — "what am I looking for?"
- **Key** — "what do I offer to others looking?"
- **Value** — "what do I contribute if selected?"

A token's attention output is a weighted sum of other tokens' Values, where the weights come from how well its Query matches each Key.

## Why it works

This lets every token attend to any other token in the sequence, regardless of distance. Compare this to RNNs which had to pass information step-by-step and often lost it over long sequences.

Still digging into multi-head attention — will update this note.
