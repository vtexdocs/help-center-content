---
title: 'Intelligent Search: OR search results now ranked by relevance'
slug: '2026-08-25-or-search-results-now-ranked-by-relevance'
hidden: false
createdAt: 2026-08-25T00:00:00.000Z
updatedAt: 2026-08-25T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: '2026-08-25-or-search-results-now-ranked-by-relevance'
locale: en
announcementSynopsisEN: 'OR search results are now ranked by relevance to the full search, instead of by the number of matching words.'
tags:
  - Improvement
  - Intelligent Search
---

When a search doesn't find a single product matching all the searched terms, [Intelligent Search](https://help.vtex.com/en/docs/tutorials/intelligent-search-overview) returns results that match any of the words, an "OR search". We've improved how these OR search results are ranked.

## What has changed?

OR searches account for about 5% of all searches, reaching 15% in some stores. Previously, OR search results were ranked mainly by the number of individually matching words, which could place unrelated products above those the customer was actually looking for.

Now, OR search results are ranked by weighting how frequently each matched word appears in the product and how rare that word is in the catalog, instead of simply counting how many words matched. Rarer and more distinctive words, such as a product name, weigh more than common words, such as a unit of measure, bringing the most relevant products to the top.

For example, a search for "painkiller ibuprofen 200 tablets" that falls back to OR now prioritizes products with "ibuprofen", instead of unrelated items like "200-tablet organizer", which also matches "200" and "tablets".

## Why did we make this change?

This change makes OR search results more relevant to what the customer is actually looking for, reducing the chance that an unrelated product appears above one that better matches the search intent.

## What needs to be done?

No action is required. This ranking improvement is automatically applied to all stores using Intelligent Search.

For more details, see:

* [Relevance](https://help.vtex.com/en/docs/tutorials/intelligent-search-how-search-result-relevance-works#step-2-how-intelligent-search-ranks-results)
* [Search behavior](https://help.vtex.com/en/docs/tutorials/search-behavior#minimum-result)
