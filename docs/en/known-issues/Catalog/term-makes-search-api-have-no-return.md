---
title: 'Term makes search API have no return'
id: 2ZmZlhMUaIEmbjLhXiDngm
status: PUBLISHED
createdAt: 2022-05-02T16:20:29.941Z
updatedAt: 2022-11-25T21:46:01.758Z
publishedAt: 2022-11-25T21:46:01.758Z
firstPublishedAt: 2022-05-02T16:20:30.689Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: term-makes-search-api-have-no-return
locale: en
kiStatus: Backlog
internalReference: 570542
---

## Summary


Some words are ignored by the search, in the case of "é", the term should be converted to "e" and then ignored by the search. But a search with that term will return an empty search.



## Simulation



- Register a product with "é" in the name or substitute word
- Search for product name or substitute word.
- See that you will be redirected to an empty search



## Workaround


N/A

