---
title: 'Order cannot be created when seller has a different Country Code'
id: 5AaGGDakL4Ys5ZvzD2RNAB
status: PUBLISHED
createdAt: 2023-03-03T13:02:18.553Z
updatedAt: 2023-03-03T14:09:43.156Z
publishedAt: 2023-03-03T14:09:43.156Z
firstPublishedAt: 2023-03-03T13:02:19.253Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: order-cannot-be-created-when-seller-has-a-different-country-code
kiStatus: Backlog
internalReference: 763955
---

## Summary


In a marketplace, when there is a seller configured with a different Country Code, the fulfillment service will consider the seller's Country Code when placing the order. It may generate an error if the seller's Country Code defines different mandatory fields than the marketplace's.


##

## Simulation



- Have a seller with a different Country Code;
- Assemble a cart with items from the seller;
- Finish the purchase; you will get an error message, and the order will not be placed.


##

## Workaround


Configure the same Country Code in the seller.




