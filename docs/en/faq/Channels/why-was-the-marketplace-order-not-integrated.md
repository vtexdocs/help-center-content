---
title: 'Why was the marketplace order not integrated?'
id: frequentlyAskedQuestions_717
status: CHANGED
createdAt: 2017-04-27T22:28:15.676Z
updatedAt: 2020-11-27T19:02:07.748Z
publishedAt: 2019-12-31T14:23:55.880Z
firstPublishedAt: 2017-04-27T23:02:34.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-was-the-marketplace-order-not-integrated
locale: en
legacySlug: why-was-the-marketplace-order-not-integrated
---

The first step to take is to check the Integrations module, which is the tool that monitors and records the logs of interactions with the marketplaces.
The Integrations itself will indicate the barrier and will provide the option of reprocessing the order.

See our [order analysis documentation in Integrations](/en/tutorial/checking-integrations-in-bridge).

Below we have the main scenarios found.

### Out of stock

[Understand how stock integration works](/en/tutorial/understanding-the-minimum-availability-rule/) and [find out why products run out](/en/faq/why-was-the-order-closed-when-there-was-no-stock/).

### Discrepancies in amounts

[Understand how price integration works](/en/tutorial/updating-prices-for-marketplace) and [find out why discrepancies occur](/en/faq/why-was-the-order-closed-with-the-wrong-price/)

### Invalid SKU ID

This occurs when the store already had a catalog associated with the marketplace prior to configuration by VTEX. When VTEX did the configuration, the SKU IDs were not the same, which prevented integration. The way to solve this is by changing the SKU IDs at the partner, so that they use the same codes as VTEX.

### Order with incomplete delivery data

Every VTEX order requires delivery information. Otherwise what to do with an order that there is no way to be delivered? Therefore it is necessary to enter all pertinent information so that the order can move forward.    

### Out-of-Stock Status

Out-of-stock products may cause the marketplace to block the order until the item associated with the SKU is once again available. Usually in the marketplace, the order status changes to **Unavailable**. This prevents the order from moving forward, barring its progress.

In such cases, orders cannot be automatically approved by the API, since they are not suitable for approval. To correct this you have to contact the marketplace itself to have the scenario adjusted.

### From/to of non-ERP registered carriers

Many ERP systems have a From/To to relate the registered carriers in VTEX with the carriers registered in that system. Therefore, whenever a new carrier is registered in VTEX it is necessary to also update this From/To. Otherwise, order integration errors may occur, such as this below:

`PEDIDO 3352226239 27/03/2017 16:32:37 Interface = 15  Msg = transportadora / servico de entrega (Correios - Correios) nao cadastrados`
