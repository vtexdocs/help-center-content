---
title: 'Intelligent Search word analyzer not normalizing gender in Portuguese words'
id: 2oVUQnXZK6FNXg7co88C1B
status: PUBLISHED
createdAt: 2024-07-26T22:55:32.746Z
updatedAt: 2024-07-26T22:55:46.558Z
publishedAt: 2024-07-26T22:55:46.558Z
firstPublishedAt: 2024-07-26T22:55:33.875Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-word-analyzer-not-normalizing-gender-in-portuguese-words
locale: en
kiStatus: Backlog
internalReference: 1072003
---

## Summary


It's expected that searched terms are normalized between their different forms (plural/singular, gender, and other possibilities), a process formally called stemming. The analyzer is different for each language to match their needs.

The analyzer for Portuguese is not normalizing the gender of words.


##

## Simulation


Consider a word registered in different products with different genders, such as "camiseta listrada" and "vestido listrado".

Although "listrada" and "listrado" are the same word but in different gender forms, searching "listrada" won't return the "vestidos" – and vice-versa.


##

## Workaround


Register bidirectional synonyms for words with relevant gender form variations.





