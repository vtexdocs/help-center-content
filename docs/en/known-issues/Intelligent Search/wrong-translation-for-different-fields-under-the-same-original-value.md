---
title: 'Wrong translation for different fields under the same original value'
id: 5amLWqGy7TPh7tk4KnLTmW
status: PUBLISHED
createdAt: 2024-02-16T00:05:00.562Z
updatedAt: 2024-02-16T00:05:01.618Z
publishedAt: 2024-02-16T00:05:01.618Z
firstPublishedAt: 2024-02-16T00:05:01.618Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-translation-for-different-fields-under-the-same-original-value
locale: en
kiStatus: Backlog
internalReference: 982848
---

## Summary


Intelligent Search may use the wrong translation for a field whose value in the primary language is the same between different fields.


##

## Simulation


Considering two fields (category and specification) from a product in a store with "nl-BE" as its default language and "fr-BE" as an additional language with the following values:

- category
  - nl-BE = medium
  - fr-BE = moyens
- specification
  - nl-BE = medium
  - fr-BE = midi

In a mismatch, the "fr-BE" translation for the specification field may be wrongly indexed  as "moyens" instead of "midi"


##

## Workaround


N/A





