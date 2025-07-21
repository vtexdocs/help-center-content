---
title: "Rounding of TotalValue in ListOrders"
id: 4XyW5dYYny0wHSOuGbLCRw
status: PUBLISHED
createdAt: 2023-02-17T14:06:47.652Z
updatedAt: 2025-01-28T13:48:17.907Z
publishedAt: 2025-01-28T13:48:17.907Z
firstPublishedAt: 2023-02-17T14:06:48.556Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: rounding-of-totalvalue-in-listorders
locale: en
kiStatus: Backlog
internalReference: 756314
---

## Summary


When we query the `totalValue` of some orders using the GET ListOrders route, we may come across discrepant values to the values returned in Get Order. This is because the listOrder route queries the Solr database which has the `totalValue` field defined as float, which can generate inaccurate numbers due to its approximation/rounding nature.

On the other hand, in the GET Order route, the queried database is set to integer, so the return does not behave in the same way as the List Order route.

The consequence of this is that the list API can return values with different decimals when the value is too high.
Another side effect of this scenario is the display of `totalValue `with “.0” in the list orders.


##

## Simulation


There is no way to simulate the scenario, but it can occur in orders with a very high value or scenarios with coins with many zeros;


##

## Workaround


We don't have a WA yet.





