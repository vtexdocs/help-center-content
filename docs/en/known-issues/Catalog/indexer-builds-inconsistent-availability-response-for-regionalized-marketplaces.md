---
title: "Indexer builds inconsistent availability response for regionalized marketplaces"
id: 19LGbEIzW6uPgRN4reWsLv
status: PUBLISHED
createdAt: 2025-01-31T16:44:34.154Z
updatedAt: 2025-01-31T17:00:35.561Z
publishedAt: 2025-01-31T17:00:35.561Z
firstPublishedAt: 2025-01-31T16:44:34.817Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: indexer-builds-inconsistent-availability-response-for-regionalized-marketplaces
locale: en
kiStatus: Backlog
internalReference: 1172289
---

## Summary


Currently, the indexer, when checking whether an item is available for a marketplace, perform a checkout simulation.

This process builds a JSON with several fields, in which the field "stockBalance", from the checkout, is considered to determine the availability of an item in a sales channel.

However, an item might be available even with stockBalance = 0, when it only has stock coming from regionalized sellers, the checkout uses another field to update the "availability" property.

The indexer should consider the latter and this inconsistency might, sometimes, cause the behavior of it not correctly showing the item's availability in its response.

It is important to note that this doesn't affect the real availability of the item, as these items will only show when regionalizing beforehand and it is also necessary to keep the "show without stock" flag set as true, as described in this other case issue: https://help.vtex.com/en/known-issues/product-unavailable-even-with-franchised-stock--58KRJl4MFOaeb5KUYGmH8G


##

## Simulation


1 - have a product only available for regionalized sellers
2 - check its indexed data for a sales channels that only have offers for this seller
3 - it will be shown as unavailable, even if it has stock for the sellers


##

## Workaround


Set 1+ units of stock for the marketplace itself if the indexed data information is crucial for your operation.

Also, upcoming updates to the VTEX search engines will cover this issue.

