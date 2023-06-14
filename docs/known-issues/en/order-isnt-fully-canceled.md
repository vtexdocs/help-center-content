---
title: 'Order isn't fully canceled'
id: 5rEjHAKKVHQWbgkTpEBreV
status: PUBLISHED
createdAt: 2021-09-15T15:03:40.366Z
updatedAt: 2022-12-22T20:41:09.335Z
publishedAt: 2022-12-22T20:41:09.335Z
firstPublishedAt: 2021-09-15T15:12:26.748Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: order-isnt-fully-canceled
kiStatus: Backlog
internalReference: 
---

## Summary

When an [order is incomplete](https://help.vtex.com/en/tutorial/understanding-incomplete-orders--tutorials_294), the platform is expected to cancel it and to prevent the order flow from starting. However, in some cases the cancelation fails and the order flow is not interrupted.

Therefore, it is possible that the order remains available to the [seller](https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w), the marketplace or the store responsible for the entire sales process. In this case, the item remains reserved in inventory.

It may also happen that the payment transaction is not canceled and the payment is not returned to the customer.


## Simulation

Due to instability, it is not possible to simulate this scenario.


## Workaround

The order must be canceled manually. [Cancel the order via API](https://developers.vtex.com/vtex-rest-api/reference/orders#cancelorder).


