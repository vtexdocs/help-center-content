---
title: "orderForm not resilient to changes in itemAttachment and offerings"
id: 2pNOpx38Dca7HBomTZBdAD
status: PUBLISHED
createdAt: 2022-01-05T20:40:21.829Z
updatedAt: 2022-11-25T21:51:57.663Z
publishedAt: 2022-11-25T21:51:57.663Z
firstPublishedAt: 2022-06-29T13:12:46.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-not-resilient-to-changes-in-itemattachment-and-offerings
locale: en
kiStatus: Backlog
internalReference: 334191
---

## Summary


The orderForm is sensitive to changing or removing an itemAttachment from the product catalog. If an itemAttachment ceases to exist or starts to have another validation pattern, an orderForm that already has old data will become inaccessible, and it will not be possible to proceed with the purchase flow.
This scenario also applies to services (offerings).



## Simulation



- Create an attachment in the catalog and make it available in some item
- Create an orderForm, with this items
- Add attachment to item
- Disable or rename attachment in catalog



## Workaround


Once registered, the item attachments should not be changed, unless it is possible to guarantee that there will not be carts with this information filled in.

