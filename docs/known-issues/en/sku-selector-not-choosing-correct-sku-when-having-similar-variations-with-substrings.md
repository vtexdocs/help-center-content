---
title: 'SKU Selector not choosing correct SKU when having similar variations with substrings'
id: 7EY2RMqoJM7bbLZvyVDdRn
status: PUBLISHED
createdAt: 2024-06-11T18:15:27.243Z
updatedAt: 2024-07-03T20:19:45.157Z
publishedAt: 2024-07-03T20:19:45.157Z
firstPublishedAt: 2024-06-11T18:15:28.029Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: sku-selector-not-choosing-correct-sku-when-having-similar-variations-with-substrings
locale: en
kiStatus: Fixed
internalReference: 1047992
---

## Summary


When having a substring of the variation in the chosen SKU in another variation available, we might not select the picked SKU


##

## Simulation



You need to have a variation available that has a substring of another available variation from the same product, for example:

Variation value: 5
Other Variation with substring: 5.5

OR

Variation value: black
Other Variation with substring: black and white


##

## Workaround


N/A





