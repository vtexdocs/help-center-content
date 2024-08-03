---
title: 'Unecessary search results prioritization by diacritics for Portuguese'
id: 3lbgwHFc9RLusAnZnvnE1H
status: PUBLISHED
createdAt: 2024-05-07T15:24:18.404Z
updatedAt: 2024-05-07T16:55:01.818Z
publishedAt: 2024-05-07T16:55:01.818Z
firstPublishedAt: 2024-05-07T15:24:19.224Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: unecessary-search-results-prioritization-by-diacritics-for-portuguese
locale: en
kiStatus: Backlog
internalReference: 1028763
---

## Summary


The Intelligent Search prioritizes results that have an exact match, considering the diacritics of the searched term and the products.

In some languages, they can generate completely different words, but for others, this is not important enough or can be related to frequent typos.

In Portuguese, diacritics like acute accent, circumflex accent, and tilde fall into this scenario. A product or a search term missing the diacritic will prioritize some products over others depending on how they are registered. For this language, normalization is expected.


##

## Simulation


In a Portuguese store, searching for "tennis" will present first the products with "tenis" (exact match with diacritics) and only later the results with "tênis" (exact match ignoring diacritics).


##

## Workaround


It's recommended that the product catalog always keep the same writing for its products. If not applicable, a synonym can help to keep terms equivalent.

