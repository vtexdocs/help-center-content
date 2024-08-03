---
title: 'Tax service request uses shippingData.address even when a cart has two selected address'
id: 21t5R3AmcllYam4mXqX6lY
status: PUBLISHED
createdAt: 2024-08-01T13:11:10.623Z
updatedAt: 2024-08-01T13:11:11.796Z
publishedAt: 2024-08-01T13:11:11.796Z
firstPublishedAt: 2024-08-01T13:11:11.796Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: tax-service-request-uses-shippingdataaddress-even-when-a-cart-has-two-selected-address
locale: en
kiStatus: Backlog
internalReference: 1074168
---

## Summary


In a cart with items for pickup and delivery, checkout's simulation only considers the information on the shippingData.address object for the tax service request. For example, considering those addresses are from different states, and the tax provider considers different taxes for each state, one of the items will have the wrong tax applied.


##

## Simulation



- Configure Tax Service;
- Add two items to a cart with different selected addresses: one for pickup and the other for delivery.


##

## Workaround


N/A




