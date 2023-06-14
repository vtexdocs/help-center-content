---
title: 'Different payment value when mixing the types of sellers for the same seller in a cart'
id: 7txlcqRF5XLB014Z31pXaL
status: PUBLISHED
createdAt: 2023-05-08T22:25:15.897Z
updatedAt: 2023-05-08T22:25:16.585Z
publishedAt: 2023-05-08T22:25:16.585Z
firstPublishedAt: 2023-05-08T22:25:16.585Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: different-payment-value-when-mixing-the-types-of-sellers-for-the-same-seller-in-a-cart
locale: en
kiStatus: Backlog
internalReference: 821741
---

## Summary


In cases where a seller acts as a white-label seller and as a regular seller for different items in the same cart, the payment amount will be with the shipping value doubled.


##

## Simulation



- Add an item fulfilled by a seller's white label in the cart;
- Add another item from the same seller but as a regular seller;
- Place the order; you will see different values in the order and transaction.


##

## Workaround


Refrain from mixing the types of sellers for the same seller.




