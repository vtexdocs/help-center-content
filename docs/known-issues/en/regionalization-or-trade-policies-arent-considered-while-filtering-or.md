---
title: Regionalization or trade policies aren't considered while filtering or sorting items by price
id: hipqkoLiWMSMEWJxecoIW
status: PUBLISHED
createdAt: 2023-05-08T14:46:49.797Z
updatedAt: 2023-05-08T14:54:57.509Z
publishedAt: 2023-05-08T14:54:57.509Z
firstPublishedAt: 2023-05-08T14:50:42.279Z
contentType: knownIssue
productTeam: Intelligent Search
author: authors_84
tag: Intelligent Search
slug: regionalization-or-trade-policies-arent-considered-while-filtering-or
kiStatus: Backlog
internalReference: 571101
---

## Summary

When using the Intelligent Search (via PLP or even its API) along with regionalization (regionId) or trade policy variation, sorting and filtering items by price doesn't work correctly.

For this module, the regionalization and trade policies can filter/sort only by the availability/stock information, not considering price variations – which are always tied to the same indexed price. The updated prices are discovered while rendering the content (so they are always correct) but don't affect filters and/or sorting (made in a previous moment), which extends to promotions and price range filters.

This is also a problem for items available only under a regionalized context. If the "seller 1" and its comprehensive WL options are stockout the item won't have a price (it'll be zero), which discards the item from filters or may put them at the end of the results.

## Simulation

In a store with different prices by WL sellers (and using regionalization) or trade policy, or with items unavailable for the "seller 1", access any PLP with a filtered/regionalized by the applicable dimension while sorting by price - you will notice that product prices will not be sorted as expected.

## Workaround

The regionalization and trade policy filters aren't prepared to work with price variations, so there are no workarounds.

For the scenario where the item is unavailable for the "seller 1", it's important to review if comprehensive sellers are configured correctly, which may avoid the scenario – only widely unavailable items would be affected.

