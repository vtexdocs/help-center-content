---
title: "Promotions resulting in wrong sorting/filtering by price or discount"
id: 1qGJByINC3S7ibgiQccVcY
status: PUBLISHED
createdAt: 2023-08-28T17:51:44.627Z
updatedAt: 2023-11-10T18:19:30.796Z
publishedAt: 2023-11-10T18:19:30.796Z
firstPublishedAt: 2023-08-28T17:55:21.450Z
contentType: knownIssue
productTeam: Intelligent Search
author: authors_84
tag: Intelligent Search
slugEN: promotions-resulting-in-wrong-sorting-filtering-by-price-or-discount
locale: en
kiStatus: Backlog
internalReference: 888304
---

## Summary

Product lists and search results may be badly sorted/filtered while using sorting or filtering by price or discount if there are outdated item prices at the index level, even if the storefront is showing the right price.

The sorting for products is always based on previously indexed information (cold data), while the storefront usually recalculates all the information in runtime (hot data), so the presented prices are always correct in relation to the cart.

It is expected every price change (and even other changes) will enqueue items to be reindexed so the index is up to date with the new conditions. The issue is that the Promotions module doesn't support sending notifications to the indexing service when a promotion begins or finishes, occasionally resulting in outdated items' prices, where the Search module isn't able to sort/filter the items correctly in comparison to real-time prices.

Any action that reindexes the item's commercial conditions (like stock changes) will also organically update its price considering the promotion, eventually masking the issue for some items.

Stores using `simulationBehavior=skip` won't see divergences between items sorting and applied filters in the PLP, as this parameter results in rendering the "cold data" there, but they'll appear while comparing the same item in the PLP with its PDP, which fixedly works like a `simulationBehavior=default`, retrieving updated information in runtime.


## Simulation

The easiest way to see the effects of this issue is to have a list of products sorted by lowest price, create a promotion for a product in the middle of the list, and watch its sorting not change after enabling the promotion, even when it gets cheaper than other products.

## Workaround

N/A

