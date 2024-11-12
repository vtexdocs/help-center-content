---
title: "Products in the 'product-list' that have an 'itemAttachment' duplicate when the quantity is increased"
id: 4QybxJRoj7wLNvN7NG2FLA
status: PUBLISHED
createdAt: 2022-01-24T21:19:51.135Z
updatedAt: 2024-10-31T14:10:47.569Z
publishedAt: 2024-10-31T14:10:47.569Z
firstPublishedAt: 2022-06-29T13:13:18.202Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: products-in-the-productlist-that-have-an-itemattachment-duplicate-when-the-quantity-is-increased
locale: en
kiStatus: Fixed
internalReference: 337069
---

## Summary


If a store uses the product-list component of Store Framework, used in the minicart, cart items may be duplicated when increasing the quantity of an item that has an attachment (itemAttachment).

This is because the default noSplitItem behavior of the API request that updates cart items is false.


##

## Simulation



1. In your store, add to the cart an item that has an attachment option;
2. Include an attachment to the item added to the cart;
3. Increase the quantity of this item with the cart item update request by sending the following body:
`{ "orderItems": [{ "index": 0, "quantity": 2 }] }`
4. Notice that the API returns the list of items with the duplicate product, instead of increasing the quantity.


##

## Workaround


Currently, there is no workaround.





