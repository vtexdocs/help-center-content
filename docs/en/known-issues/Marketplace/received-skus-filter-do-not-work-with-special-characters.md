---
title: "Received Skus filter do not work with special characters"
id: 6aSErtF2Xv5RuKuIHUEEPg
status: PUBLISHED
createdAt: 2023-11-29T17:58:26.201Z
updatedAt: 2023-11-29T17:58:26.900Z
publishedAt: 2023-11-29T17:58:26.900Z
firstPublishedAt: 2023-11-29T17:58:26.900Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-filter-do-not-work-with-special-characters
locale: en
kiStatus: Backlog
internalReference: 944533
---

## Summary


When trying to filter the skus on the Received Skus module, the marketplace can choose to filter by seller, category and/or brand.

However, when selecting a brand that has special characters (like "&" or "+") the result is that there are no skus in that filter, which is not actually correct.


##

## Simulation



1. Filter by one of the options on the Received Skus module;
2. Select a value with special character;
3. Check that the result is no skus;
4. Now search by the value on the search and check that in fact there are some skus.


##

## Workaround


No workaround to fix the filter, but using the search could bring a close result of the skus.





