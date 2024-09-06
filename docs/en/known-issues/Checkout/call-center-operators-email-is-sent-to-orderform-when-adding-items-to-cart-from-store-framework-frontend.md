---
title: "Call center operator's email is sent to orderForm when adding items to cart from Store Framework front-end"
id: 3KwP4q7VZsu6e3c1DwWY5t
status: PUBLISHED
createdAt: 2024-07-16T20:06:11.748Z
updatedAt: 2024-07-16T20:06:12.844Z
publishedAt: 2024-07-16T20:06:12.844Z
firstPublishedAt: 2024-07-16T20:06:12.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: call-center-operators-email-is-sent-to-orderform-when-adding-items-to-cart-from-store-framework-frontend
locale: en
kiStatus: Backlog
internalReference: 1066571
---

## Summary


When using Store Framework components to add items to a cart while logged in as a call center operator and not impersonating any customer, the operator's email is filled in the orderForm's clientProfileData attachment.


##

## Simulation



1. Access a store built on Store Framework.
2. Authenticate as a call center operator.
3. Without impersonating any customers, add an item to the cart with a component such as add-to-cart-button.
4. Verify that the cart now contains the call center operator's email address.


##

## Workaround


N/A





