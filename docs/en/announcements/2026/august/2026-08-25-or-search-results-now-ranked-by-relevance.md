---
title: '"OR Search" results now ranked by relevance'
slug: '2026-08-25-resultados-de-busca-or-agora-ordenados-por-relevancia'
hidden: false
createdAt: 2026-08-25T00:00:00.000Z
updatedAt: 2026-08-25T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: '2026-08-25-or-search-results-now-ranked-by-relevance'
locale: en
announcementSynopsisEN: '"OR Search" results are now ranked by relevance to the full query instead of by word-match count.'
tags:
  - Improvement
  - Intelligent Search
---

When a search doesn't match any single product with all its terms, Intelligent Search falls back to showing results that match any of the words, an "OR search." We've improved how these OR search results are ranked.

## What changed?

OR searches correspond to about 5% of all searches, and up to 15% for some merchants. Previously, OR search results were ranked mainly by how many individual words matched, which could push unrelated products above the ones customers were actually looking for.

Now, OR search results are ranked by weighing how often each matched word appears in a product and how rare that word is across the catalog, instead of just counting how many words matched. Rarer, more distinctive words (like a product name) carry more weight than common ones (like a unit of measurement), so the most relevant products surface first. For example, a search for "ibuprofen pain reliever 200 tablets" that falls back to OR now ranks ibuprofen products first, instead of unrelated items like a "200-tablet pill organizer" that also happens to match "200" and "tablets."

## Why did we make this change?

This change makes OR search results more relevant to what customers are actually looking for, reducing the chances of an unrelated product outranking one that better matches the search intent.

## What needs to be done?

No action is necessary. This ranking improvement applies automatically to all stores using VTEX Intelligent Search.
