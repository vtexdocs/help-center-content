---
title: "Status in the order list is different from the current order status"
id: 2UBFdtXWtCIygv0SiObCTN
status: PUBLISHED
createdAt: 2022-05-11T18:25:07.711Z
updatedAt: 2023-06-07T17:52:27.382Z
publishedAt: 2023-06-07T17:52:27.382Z
firstPublishedAt: 2022-05-11T18:25:08.248Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: status-in-the-order-list-is-different-from-the-current-order-status
locale: en
kiStatus: Backlog
internalReference: 577103
---

## Summary


In some cases, the order list shows a status different from the current order status (card).

The cause is due to the order information indexing, remembering that the list order is an indexed information of the order, which allows for example the use of filters and search. Disagreement can happen in moments, so generates this divergence.

It is also important to remember that this does not affect the order information at all.


##

## Simulation


It is not possible to simulate the case, but when indexing fails, the order list must show a different status (lower) than that shown when opening the order detail (card). Here is an example of the behavior:

> List order status = Handling
>
> Order detail status = Invoiced



##

## Workaround


At this time, all cases that present this divergence in the order list and the order detail must be reported in order to take action on them.

In the same way, what is done is just reindex the order information to solve this behavior.




