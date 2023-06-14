---
title: 'It is not possible to add an item with attachment to the cart if there is already another unit of this item without attachment in the cart'
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2022-01-28T16:36:23.041Z
publishedAt: 2022-01-28T16:36:23.041Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slug: it-is-not-possible-to-add-an-item-with-attachment-to-the-cart-if-there-is
kiStatus: Backlog
internalReference: 412041
---

## Summary

During the purchase process, if the customer adds an item that has already been included in the cart previously and that in the new inclusion has an [attachment](https://help.vtex.com/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm), the second item is not added to the cart.

For example, if during the purchase process the customer adds a SKU to the cart, and then another unit of the same SKU but with an extended warranty, the last item added (the item with extended warranty) will not be available in the cart. 


## Simulation

To run the simulation, please make sure there are items with attachments in your store.

1. Access the store;
2. Add a product to the cart;
3. Add the product once again and include an attachment to the item (a customization or an extended warranty, for example);
4. Check the cart and verify that the item with the attachment has not been added. 

What happens is that when you add two identical items, but the second one contains an attachment, the platform does not add it to the cart because it interprets it as a repeated item.


## Workaround

There is no workaround for this scenario.


