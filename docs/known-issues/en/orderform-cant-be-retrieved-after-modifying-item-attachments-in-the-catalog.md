---
title: "OrderForm can't be retrieved after modifying item attachments in the catalog"
id: 5T3UBM0eCUVlKZ7ThQwFZU
status: PUBLISHED
createdAt: 2022-09-28T14:04:26.176Z
updatedAt: 2022-11-25T21:49:45.319Z
publishedAt: 2022-11-25T21:49:45.319Z
firstPublishedAt: 2022-09-28T14:04:26.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-cant-be-retrieved-after-modifying-item-attachments-in-the-catalog
kiStatus: Backlog
internalReference: 320044
---

## Summary


After changing (update or deleting) some item attachments in the products catalog, if you already have some cart/orderForm that refers to items with the specific attachment, the orderForm can't be loaded anymore.

The cart/checkout page will present a "communication error with the seller" – because the item attachments come from the fulfillment service inside the checkout's pipeline. In Splunk, the error logs (that can be filtered by their operationId) will detail the exception message "_Some item attachments are not available_".



## Simulation


- to have an item with attachment fields
- insert this item in a cart and fill the attachment fields
- change/remove some of these fields in the products catalog
- go back to the cart (expect some cache in the catalog information to see the changes)
- the cart won't load and generate the mentioned error



## Workaround


N/A

