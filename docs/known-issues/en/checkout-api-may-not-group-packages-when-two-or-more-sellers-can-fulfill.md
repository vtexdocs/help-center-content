---
title: Checkout API may not group packages when two or more sellers can fulfill
id: 3nTRP8r3ZvoZ6UqC1RTbIb
status: PUBLISHED
createdAt: 2023-05-03T22:24:43.036Z
updatedAt: 2023-05-08T18:33:00.831Z
publishedAt: 2023-05-08T18:33:00.831Z
firstPublishedAt: 2023-05-03T22:24:44.282Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-api-may-not-group-packages-when-two-or-more-sellers-can-fulfill
kiStatus: Backlog
internalReference: 802156
---

## Summary


When two or more sellers can fulfill a cart with more than one item, Checkout API may not group packages selecting different sellers for each product. This increases the shipping value for the shopper.

This behavior was noticed when two items were added to the cart; one of the items could be fulfilled by only one seller, and a package split happened even though the other item could be fulfilled by the same seller. But it's not limited to thethis scenatrio.


##

## Simulation


There is no easy way to replicate the scenario, but refer to orders/cart where the issue happened.


##

## Workaround


N/A




