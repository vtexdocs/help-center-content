---
title: 'How does the cart with multiple items work in Mercado Livre?'
id: 4dC1deB8bY260W0Ge4ycOq
status: PUBLISHED
createdAt: 2019-01-24T20:45:36.404Z
updatedAt: 2019-12-31T15:26:21.601Z
publishedAt: 2019-12-31T15:26:21.601Z
firstPublishedAt: 2019-01-24T22:08:07.847Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slug: how-does-the-cart-with-multiple-items-work-in-mercado-livre
legacySlug: how-does-the-cart-with-multiple-items-work-in-mercado-livre
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

Mercado Livre has made an update that allows the inclusion of more than one different item in the cart. The so-called __multi-item cart__ brought a new logic for handling the identification of orders and products, which made it necessary to change the way VTEX works with these data.

## How it works in Mercado Livre
With the new feature, Mercado Livre began to display only one ID for the order, regardless of the amount of products added in the cart. However, the back-end doesn't work with this data, assigning a different ID for each item, plus a unique ID for the shipping.

This means that the unique order identification code is only displayed on the end-user screen and is not part of the data that's shared with other systems (such as VTEX platform).

## How it works in VTEX
Mercado Livre sends to VTEX the IDs processed in the back-end: both the delivery ID and the individual item IDs. Because the unique order ID is not sent to our platform, we had to make a change in our integration with Mercado Livre.

Instead of using the IDs of each item (which would generate separate orders in our system), we've changed the logic and started considering the delivery ID to identify the order as a whole. That way, the integration works with only the shipping code (shipment_Id), the only one provided by Mercado Livre that is shared by all products of the same order.

You can find both IDs through the report generated on the integration's panel on VTEX Admin.

![mercalo-livre-pedido-id-en](//images.ctfassets.net/alneenqid6w5/5CZg21BumbrNw5QjimjuGt/67fefe0993b7ca80eb365428f389fd4d/mercalo-livre-pedido-id.png)


<div class="alert alert-warning">
This logic of operation applies to all types of delivery, except those that include pickup points. In such, the platform continues to use the old ID.
</div>
