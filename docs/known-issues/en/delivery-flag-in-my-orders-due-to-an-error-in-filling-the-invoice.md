---
title: Delivery Flag in My Orders. Due to an error in filling the Invoice.
id: 14iGvVibb5ac4FNvEsmCAi
status: PUBLISHED
createdAt: 2022-03-21T19:58:25.489Z
updatedAt: 2022-11-25T22:02:01.896Z
publishedAt: 2022-11-25T22:02:01.896Z
firstPublishedAt: 2022-06-30T17:22:56.690Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: delivery-flag-in-my-orders-due-to-an-error-in-filling-the-invoice
kiStatus: Backlog
internalReference: 547053
---

## Summary



If the order invoice does not have the correct information on the quantity of items and the order SKU Ids. It will not be possible to insert the "`Delivered`" flag in 'My Orders'.




## Simulation



To simulate this behavior, it is possible to place an order with only one Item.

When invoicing the order, insert the ID of another item on the invoice and/or insert the quantity of more Items.

After invoicing the order, do the "update tracking" and enter the information of "`isDelivered: true`".

We will have the order information "delivered" in the UI, however, in "My Orders" it will continue with the information of "Sending Order".




## Workaround



Be careful not to insert more items on the invoice and/or items with different order IDs. Because in these cases the order will not have the "delivered" flag in My Orders.

