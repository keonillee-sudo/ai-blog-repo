---
title: "What is an LLM, actually?"
date: 2026-07-25
tags: ["LLMs", "fundamentals"]
description: "My attempt to explain large language models from first principles."
---

Large language models are next-token predictors trained on massive text corpora. That's the one-sentence version. Here's what that actually means.

## The core idea

Given a sequence of tokens, an LLM assigns a probability distribution over what the next token should be. During training, it's shown billions of examples and adjusts its weights to maximize the likelihood of the correct next token.

At inference time, you sample from that distribution repeatedly — that's how text generation works.

## Why "large"?

Scale turned out to matter enormously. Models with more parameters, trained on more data, developed emergent capabilities that smaller models didn't have. Nobody fully predicted this in advance.

## What they're not

LLMs don't "know" things the way a database knows facts. They encode statistical patterns from training data. This is why they hallucinate — the pattern-completion machinery doesn't have a separate "is this true?" check.

More on this soon.
