---
title: 'Subscriptions not executed due to data indexing failure or masterdata query failure'
id: 1PspxNexEEz4GvJ5BpZZgH
status: PUBLISHED
createdAt: 2024-01-04T20:27:03.576Z
updatedAt: 2024-07-09T17:24:39.295Z
publishedAt: 2024-07-09T17:24:39.295Z
firstPublishedAt: 2024-01-04T20:27:04.193Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: subscriptions-not-executed-due-to-data-indexing-failure-or-masterdata-query-failure
locale: en
kiStatus: Backlog
internalReference: 961526
---

## Summary


The creation of subscription requests depends on the return of a query made to the subscriptions' database, this query is made periodically to identify which subscriptions should be executed in that period, if this query fails or does not return a particular subscription, its cycle is not executed, and no error is logged, thus resulting in a subscription with the nextPurchaseDate in the past.


##

## Simulation


We have no way of simulating this scenario due to the dependence on other systems.


##

## Workaround


To adjust the `nextPurchaseDate`, the end user can pause the subscription and reactivate it. This action will cause the subscription system to recalculate the execution date and the `nextPurchaseDate` will be updated correctly.

Or the customer can update the `nextPurchaseDate` of the user's subscription to a future date via the API.





