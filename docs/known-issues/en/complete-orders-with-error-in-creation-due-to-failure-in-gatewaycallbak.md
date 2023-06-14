---
title: Complete orders with error in creation due to failure in gatewaycallbak
id: 2qVa686QBsvkgXY8wwmc8Y
status: PUBLISHED
createdAt: 2022-05-04T19:28:00.775Z
updatedAt: 2022-11-25T21:52:28.991Z
publishedAt: 2022-11-25T21:52:28.991Z
firstPublishedAt: 2022-05-04T19:28:01.142Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: complete-orders-with-error-in-creation-due-to-failure-in-gatewaycallbak
kiStatus: Backlog
internalReference: 416936
---

## Summary


We received some inquiries about orders that were stuck in payment approved status but already payment approved, which the normal order flow should not happen.

Based on the analysis of the cases, we understand that a possible occurrence of this occurrence was;

The marketplace order was created incomplete, the marketplace order receives the gatewaycallback call and, at this time, a failure occurs, and this causes an order cancellation process to start, but the marketppace order receives a second call from gatewaycallback that causes the order to be authorized and complete, thus preventing the transaction from being canceled, and this scenario generates a complete order (marketplace / checkout), but with a creation error and the fullfiment order canceled, which could be avoided implementing a validation in gatewaycallback to not proceed with incomplete requests.





## Simulation



## Workaround



