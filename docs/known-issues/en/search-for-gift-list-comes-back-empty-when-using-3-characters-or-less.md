---
title: Search for gift list comes back empty when using 3 characters or less
id: 3CcMnzSpUQcUaG4wkm2ay2
status: PUBLISHED
createdAt: 2018-02-08T17:25:13.152Z
updatedAt: 2022-12-22T20:45:36.781Z
publishedAt: 2022-12-22T20:45:36.781Z
firstPublishedAt: 2018-02-08T17:33:02.101Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: search-for-gift-list-comes-back-empty-when-using-3-characters-or-less
kiStatus: Backlog
internalReference: 
---

## Summary

Search result will come back empty if a gift list search (Controle GiftListSearchV2) is attempted using 3 characters or less. 

## Simulation

1. Accessa the page where the <vtex.cmc:GiftListSearchV2 /> control is installed
2. Attempt a search using 3 characters or less 

Search will back empty, even if lists containing the term that was searched for are available.

## Workaround

Include an alert and a treatment of that field, making it impossible for the client to search using 3 characters or less.

