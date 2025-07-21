---
title: "The ClearSale antifraud connector is sending the wrong cart items in cases where two or more items share the same name."
id: 1OSID8MeL6DxaM3urR7CHj
status: PUBLISHED
createdAt: 2023-04-28T12:21:24.524Z
updatedAt: 2023-05-08T18:23:47.413Z
publishedAt: 2023-05-08T18:23:47.413Z
firstPublishedAt: 2023-04-28T12:21:25.305Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-clearsale-antifraud-connector-is-sending-the-wrong-cart-items-in-cases-where-two-or-more-items-share-the-same-name
locale: en
kiStatus: Backlog
internalReference: 799396
---

## Summary


The ClearSale antifraud connector uses the item name as a condition when looping through the mini cart sent by the checkout. In cases where two or more items share the same name, even if they have different SKUs, only one of those items is sent to the antifraud system. The transaction amount for the remaining items is sent as freight.


##

## Simulation


Place an order with 2 items in the cart where they share the same name.


##

## Workaround


N/A





