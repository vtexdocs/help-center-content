---
title: 'Customer information being lost when it has some order with "profileErrorOnLoading'
id: 7B0eutLBOCKOun4iwALVpq
status: PUBLISHED
createdAt: 2023-06-27T12:51:33.790Z
updatedAt: 2023-06-27T12:51:34.237Z
publishedAt: 2023-06-27T12:51:34.237Z
firstPublishedAt: 2023-06-27T12:51:34.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: customer-information-being-lost-when-it-has-some-order-with-profileerroronloading
locale: en
kiStatus: Backlog
internalReference: 340036
---

## Summary


When the order has "profileErrorOnLoading=true", the expected behavior is that the customer profile, address, and credit card won't be saved/updated on the Profile System.

The problem is that the checkout is still making some requests to register the buyer's e-mail, naturally, without sending other fields like name and phone. So, if the customer is already registered in the store, these fields are cleared, and the customer data is lost.


##

## Simulation


We can't simulate the behavior since the "profileErrorOnLoading" is just for unexpected exceptions.


##

## Workaround


N/A



