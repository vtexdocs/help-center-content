---
title: 'Checkout allows to add 2 different addresses for delivery'
id: 2z7iq68qdHXAfY8RLDHXDg
status: PUBLISHED
createdAt: 2023-11-06T22:03:24.983Z
updatedAt: 2023-11-07T21:28:43.164Z
publishedAt: 2023-11-07T21:28:43.164Z
firstPublishedAt: 2023-11-06T22:03:25.472Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-to-add-2-different-addresses-for-delivery
locale: en
kiStatus: Backlog
internalReference: 931225
---

## Summary


Checkout allows adding two different addresses for delivery in the orderForm, for example, a "commercial" and a "residential" (defined by the 'addressType' field), when one of them is disposable.

When both addresses are selected, there will be a message error "Unable to communicate with seller", and the shopper can't proceed to the next steps.


##

## Simulation



- Send a new address via API Add shipping address and select delivery option;
- Add a client who already has a complete profile via API Add client profile.


##

## Workaround


N/A




