---
title: "KIt Price Deletion not Working"
id: 1AccAPGM5xE1u1E2px91nP
status: PUBLISHED
createdAt: 2025-05-27T17:58:23.566Z
updatedAt: 2025-05-27T17:59:10.973Z
publishedAt: 2025-05-27T17:59:10.973Z
firstPublishedAt: 2025-05-27T17:58:24.100Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-price-deletion-not-working
locale: en
kiStatus: Backlog
internalReference: 1234002
---

## Summary


Currently, when attempting to delete a fixed price that belongs to a kit (bundle) in the pricing admin, the process doesn't work.


##

## Simulation


1 - For an item that is a skukit (the father, which is composed of 1+ components) try accessing its pricing admin UI --> https://.myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10

2 - Try deleting a fixed price that belongs to said item --> nothing will happen


##

## Workaround


Delete said prices via API





