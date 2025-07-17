---
title: "B2B Checkout Settings is considering pickup address for deliveries"
id: 2yMng3qqLSfT43FoPvsmsj
status: PUBLISHED
createdAt: 2025-02-26T22:51:41.969Z
updatedAt: 2025-03-17T14:03:19.325Z
publishedAt: 2025-03-17T14:03:19.325Z
firstPublishedAt: 2025-02-26T22:51:42.713Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: en
kiStatus: Backlog
internalReference: 1186568
---

## Summary


B2B Checkout settings is considering all available addresses for deliveries, including pickup addresses. If a pickup address is selected, the Checkout page gets frozen.

In the checkout API is possible to see the message "The address cannot be used for the given delivery channel".


##

## Simulation



- Add any product to the cart;
- At the shipping step, change to pickup and go back to delivery;
- The pickup address will be in the delivery address.


##

## Workaround


Refresh the page.




