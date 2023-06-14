---
title: 'Rounding of TotalValue in ListOrders'
id: 4XyW5dYYny0wHSOuGbLCRw
status: PUBLISHED
createdAt: 2023-02-17T14:06:47.652Z
updatedAt: 2023-03-15T18:07:19.037Z
publishedAt: 2023-03-15T18:07:19.037Z
firstPublishedAt: 2023-02-17T14:06:48.556Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: rounding-of-totalvalue-in-listorders
kiStatus: Backlog
internalReference: 756314
---

## Summary


When we query the order value through the UI, it displays a value and when we query it via the Get Orders API, we see a value 0.01 higher. This behavior occurs due to the rounding done in the database. However, this behavior does not impact the total value of the order, it is just a visualization in the ListOrders, the total value of the order is still correct.

Another scenario is to show a value with ".0" in the list orders.


##

## Simulation


Orders with very high values can have this behavior in ListOrders.


##

## Workaround


We don't have a WA yet.

We emphasize that this behavior does not interfere with the value of the order, it is only visual in the listorders.





