---
title: "Incorrect delivery calculation when one of the SLAs doesn't have all items"
id: 57rd31npt6iWcOQm0gIAMA
status: PUBLISHED
createdAt: 2018-08-06T18:50:44.391Z
updatedAt: 2022-12-22T20:43:12.816Z
publishedAt: 2022-12-22T20:43:12.816Z
firstPublishedAt: 2018-08-06T19:53:28.422Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: incorrect-delivery-calculation-when-one-of-the-slas-doesnt-have-all-items
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

This scenario happens only for shipping calculations in the cart where not all delivery methods have all available items. 

This causes the value to be calculated considering the quantity in common among all delivery methods. In other words, the shipping value is defined based on the maximum quantity of items that all delivery methods can handle.

## Simulation

1. Consider that the store has 2 delivery methods: Express and Normal, for example.
2. In the Express delivery method, `item x` has the available quantity of only 10 units.
3. In the Normal delivery method, consider that there are 200 available units of the same `item x`.
4. In the cart, the customer selects 14 `item x` units.
5. Since the Express delivery method has only 10 units, the checkout will not be calculated for the 14 units, but for only 10 units in both delivery methods.
6. As a result, the value displayed in the simulation will be lower, if the chosen delivery method is Normal; if the customer's choice is Express, the value shown will refer to a smaller number of items than the one previously selected.

## Workaround

Currently there's no workaround for this scenario.

