---
title: "The minimum and maximum values of the logistics affect the allocation flow"
id: 2NKMEf9m4DJd4UIQaNZhJ6
status: PUBLISHED
createdAt: 2025-05-16T14:37:25.555Z
updatedAt: 2025-05-16T14:37:58.458Z
publishedAt: 2025-05-16T14:37:58.458Z
firstPublishedAt: 2025-05-16T14:37:26.116Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: the-minimum-and-maximum-values-of-the-logistics-affect-the-allocation-flow
locale: en
kiStatus: Backlog
internalReference: 1227934
---

## Summary


The allocation of an item may not occur as expected when the cart has items from different sellers, and one of these sellers has shipping rules based on value range;
In cart scenarios with more than one SKU and one of these SKUs is available from a single seller, and this seller has carrier rules conditional on the total value of the order, the system's heuristics may discard valid SLA options during the simulation process, resulting in the message “`unavailableItemFulfillment`” for the item at checkout; in other words, the system is unable to correctly allocate all the items in the cart.


##

## Simulation


To simulate this, set up two SKUs, each available exclusively from a different seller:

For one of the sellers, create two shipping options (SLAs) conditioned by cart value:

Example:

“Shipping A “: valid from 0 to 100
“Shipping B": valid from 100 to 999,000.00.

Now simulate a cart with units of the SKU delivered by each of the sellers so that the total value of the cart is greater than the value supported by the Shipping A option.

When you reach the checkout stage, the system returns the message “`unavailableItemFulfillment`” for one of the items.

The allocation algorithm runs two simulations: one considering the entire cart (multi-item) and an individual simulation per item, and due to the discard logic based on the response of the entire cart, the SLA that would be viable for SKU 01 in the item-by-item simulation is eliminated.

In the scenario described, one of the available SLAs (“Shipping B”) for SKU 01 is discarded because it is not present in the simulation considering the entire cart, leading to the impossibility of allocating the items.


##

## Workaround


Currently, there is no native workaround to completely circumvent the problem.





