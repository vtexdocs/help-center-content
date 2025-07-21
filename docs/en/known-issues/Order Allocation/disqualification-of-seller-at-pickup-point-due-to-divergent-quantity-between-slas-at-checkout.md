---
title: "Disqualification of seller at Pickup Point due to divergent quantity between SLAs at Checkout"
id: qs0rLD5PX5ZFUAflzoK27
status: PUBLISHED
createdAt: 2025-05-16T20:03:57.747Z
updatedAt: 2025-05-16T20:03:58.910Z
publishedAt: 2025-05-16T20:03:58.910Z
firstPublishedAt: 2025-05-16T20:03:58.910Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: disqualification-of-seller-at-pickup-point-due-to-divergent-quantity-between-slas-at-checkout
locale: en
kiStatus: Backlog
internalReference: 1228333
---

## Summary


When the cart contains more than one unit of the same SKU and the shopper chooses the “pick-up” delivery channel, there may be an unexpected change in the pick-up point selected or even the impossibility of choosing one of the options listed.

This behavior usually occurs when the same seller responds with more than one SLA of the same type, e.g. “pick-up”, and these SLAs have different logistics routes, each with different availability for the SKU in question.
The reason is that the checkout tries to prioritize the SLA with the lowest availability during the simulation, based on the pick-up address chosen. This can lead to disregarding the SLA (and the seller) which, in practice, could have enough stock to fulfill the order at that pick-up point.


##

## Simulation


This type of scenario requires a very wide range of availability configurations, and simulating it is not trivial.

NOTE:When you enter the shopper's ZIP code, Fulfillment returns the available SLAs with a total quantity (e.g. 4 units).
When you change to the pick-up address, a new simulation is made which, by returning SLAs of the same type with different quantities, ends up limiting availability to the lowest value available in the SLAs offered, which means that the seller in question will no longer be able to fulfill the cart with the total number of units requested by the shopper.


##

## Workaround



There is no workaround available for this scenario.




