---
title: Error when including many filters in the order list
id: 5M3g0lGChGPauii9O69wUz
status: PUBLISHED
createdAt: 2022-12-21T13:56:55.765Z
updatedAt: 2022-12-21T13:58:55.819Z
publishedAt: 2022-12-21T13:58:55.819Z
firstPublishedAt: 2022-12-21T13:56:56.309Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: error-when-including-many-filters-in-the-order-list
kiStatus: Fixed
internalReference: 347932
---

## Summary


In some stores, the list of Sellers, promotions, or other filters can be quite high, and in some moments they may want to make a fairly wide selection.

For example, filter all orders for 10 Sellers, that it’s a reasonable number, but in this case, we are talking about much larger amounts, that is, selecting 60 Sellers, or promotions can generate the problem.

After selecting all these Sellers, we will encounter an error (404 response) when trying to confirm the filter.


##

## Simulation


Try to filter select near to 60 Sellers:

We see the error:

    Server Error404 - File or directory not found.The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.



##

## Workaround


If it is necessary to obtain a significant amount of information, it is possible to think about exporting the report without filters and doing these in the exported CSV / XLS document.

