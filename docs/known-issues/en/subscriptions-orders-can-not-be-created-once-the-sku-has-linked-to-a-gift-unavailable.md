---
title: Subscriptions Orders can not be created once the SKU has linked to a gift unavailable
id: 1hY76gsKwR07AohWMsmUXu
status: PUBLISHED
createdAt: 2022-03-07T14:33:11.578Z
updatedAt: 2023-05-19T19:13:18.924Z
publishedAt: 2023-05-19T19:13:18.924Z
firstPublishedAt: 2022-05-18T18:53:34.529Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: subscriptions-orders-can-not-be-created-once-the-sku-has-linked-to-a-gift-unavailable
kiStatus: Fixed
internalReference: 395965
---

## Summary


There is a condition that the Orders from Subscription cannot be created because it is linked to an **unavailable gift**, even if the items of a subscription are available.


##

## Simulation



- To simulate this, you need a gift (like Promotion **Buy One Get One**) linked to one SKU of subscription, and this gift should be unavailable after the purchase is made and before the next cycle.
- The error on the subscription cycle is "**Could not select a SLA for SKU {SKU ID}**"


##

## Workaround


The way to avoid this scenario is to remove the link of gift out of stock or guarantee that the gift has stock if you want to create a new cycle with the gift.

