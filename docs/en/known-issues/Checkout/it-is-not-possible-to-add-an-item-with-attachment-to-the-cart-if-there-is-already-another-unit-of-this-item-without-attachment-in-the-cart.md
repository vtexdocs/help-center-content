---
title: "It is not possible to add an item with attachment to the cart if there is already another unit of this item without attachment in the cart"
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2024-02-02T15:01:32.297Z
publishedAt: 2024-02-02T15:01:32.297Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: it-is-not-possible-to-add-an-item-with-attachment-to-the-cart-if-there-is-already-another-unit-of-this-item-without-attachment-in-the-cart
locale: en
kiStatus: No Fix
internalReference: 412041
---

## Summary


During the purchase process, if the customer adds an item that has already been included in the cart previously and the new inclusion has assembly options, the second item is not added to the cart.

For example, if during the purchase process, the customer adds an SKU to the cart and then another unit of the same SKU but with an extended warranty (via assemblyOptions), the last item added (the item with an extended warranty) will not be available in the cart.


##

## Simulation


To run the simulation, please make sure there are items with assembly options in your store.


1. Access the store;
2. Add a product to the cart;
3. Add the product once again and include an assembly option to the item (a customization or an extended warranty, for example);
4. Check the cart and verify that the item with the assembly option has not been added.


##

## Workaround


There is no workaround available.





