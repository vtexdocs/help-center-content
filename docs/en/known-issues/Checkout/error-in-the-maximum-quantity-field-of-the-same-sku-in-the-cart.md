---
title: "Error in the maximum quantity field of the same SKU in the Cart"
id: 5xW5unmFphzQCwsmEochaG
status: PUBLISHED
createdAt: 2022-07-05T17:39:46.732Z
updatedAt: 2022-11-25T21:49:06.186Z
publishedAt: 2022-11-25T21:49:06.186Z
firstPublishedAt: 2022-07-05T17:39:47.173Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-the-maximum-quantity-field-of-the-same-sku-in-the-cart
locale: en
kiStatus: Backlog
internalReference: 587394
---

## Summary


When the store configures the field “maximum quantity of the same SKU in the cart” and it is an order coming from a marketplace, if the quantity of items in the order is greater than the one configured in the admin, it is allowing the orders to be integrated, not respecting the maximum amount of configured skus.



## Simulation


Trying to insert an order from a certified marketplace with the quantity above the value configured in the maximum quantity field of the same SKU in the admin cart.



## Workaround


N/A

