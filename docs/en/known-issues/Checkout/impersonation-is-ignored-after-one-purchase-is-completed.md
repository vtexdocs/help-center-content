---
title: 'Impersonation is ignored after one purchase is completed'
id: 4mHKOlwaLwfIEf8HFh4y4Y
status: PUBLISHED
createdAt: 2024-03-20T20:10:26.200Z
updatedAt: 2024-03-20T20:10:27.029Z
publishedAt: 2024-03-20T20:10:27.029Z
firstPublishedAt: 2024-03-20T20:10:27.029Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: impersonation-is-ignored-after-one-purchase-is-completed
locale: en
kiStatus: Backlog
internalReference: 1003545
---

## Summary


When a call center operator impersonates a shopper, completes a purchase and is sent to the orderPlaced page, a new orderForm will be generated.

This new orderForm will have its clientProfileData attachment with the call center operator's email instead of the impersonated shopper, even though the impersonation data is persisted normally within the Session.


##

## Simulation



1. Log into the myvtex environment as a call center operator.
2. Impersonate a shopper and complete a purchase.
3. Afterwards, while still impersonating the user, begin a new purchase, and note how the cart data will contain your call center operator's email within clientProfileData.


##

## Workaround


If you need to create more than one order for the same shopper, make sure to redo the impersonation process in-between orders.





