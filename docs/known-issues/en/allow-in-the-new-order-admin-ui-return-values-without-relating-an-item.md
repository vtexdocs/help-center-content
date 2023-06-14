---
title: 'Allow in the new Order Admin UI return values without relating an item'
id: 4mD1o81lDZEB5y35KRM6LW
status: PUBLISHED
createdAt: 2022-02-08T01:36:09.738Z
updatedAt: 2022-11-25T22:03:00.483Z
publishedAt: 2022-11-25T22:03:00.483Z
firstPublishedAt: 2022-02-08T01:36:10.568Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: allow-in-the-new-order-admin-ui-return-values-without-relating-an-item
kiStatus: Fixed
internalReference: 519576
---

## Summary


For return flows within an order, it is possible to indicate which products will be returned and/or associated values, such as shipping costs or simply a part of the value of the order.

In this case, the problem is that validation is being carried out in the new UI that requires the association of at least one item within the order in order to continue with the process. This limits those users who only need to return values, that is, without associating products.



## Simulation



- For accounts that have the new order detail UI, it would be simply going into an invoiced order and attempting a value-only return without selecting any products.
- The button to continue with the return flow (**Request Refund**) will be disabled until at least one of the order items is selected.



## Workaround


A workaround will be to use the previous version of the order detail UI to register **returns of values only** while this limitation is solved in the new UI.

