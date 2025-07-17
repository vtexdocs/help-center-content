---
title: "Item unavailability in Sales App allocation with pickup point (inadequate heuristic in selecting sellers)"
id: 4Bz10krfrQ9oe1eMESQoJE
status: PUBLISHED
createdAt: 2025-05-28T13:45:31.752Z
updatedAt: 2025-05-28T13:56:34.113Z
publishedAt: 2025-05-28T13:56:34.113Z
firstPublishedAt: 2025-05-28T13:45:32.913Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: item-unavailability-in-sales-app-allocation-with-pickup-point-inadequate-heuristic-in-selecting-sellers
locale: en
kiStatus: Backlog
internalReference: 1234534
---

## Summary


When make a cart via the Sales App, the system enters the `“checkedIn:true”` information and registers/associates the orderform with a pickup point, this is done by the “`checkedInPickupPointId”` variable, from which point the allocation stage may fail for one or more items contained in the cart, returning `“unavailableItemFulfillment`” for it.

This is because the seller selection heuristic initially uses the pickup point address for estimates, but in the next stage, during fulfillment, it can use the customer's address depending on the return in the request, and as a consequence the system cannot guarantee that all the items can be fulfilled by the seller(s) selected in the first stage, leading to a failure to allocate part of the items - even when they could be fulfilled by another suitable seller, but which was not included in the initial stage of the heuristic.

Note that the error only manifests itself in flows originating from the Sales App with pickup point check-in.


##

## Simulation


This scenario may not be replicable due to its characteristics, but in some cases it is possible to take the following steps to replicate it:

1-Mount a cart via the Sales App , this will cause the OrderForm to have `“isCheckedIn: true"` and “`checkedInPickupPointId`” set.

2- Add two or more products to the cart, ensuring that only part of them is available in the stock of the chosen pickup point.

3-Watch for at least one of the items to return an `“unavailableItemFulfillment`” message when simulating or closing the order.


##

## Workaround


As a workaround or definitive solution, it is recommended to evaluate the activation of “Delivery Promise (DP)” in the heuristic for the affected account.





