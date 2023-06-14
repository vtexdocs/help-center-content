---
title: 'Inconsistency in the quantity of items with assembly options in the cart'
id: ANQ597XM5mK85MhME920Y
status: PUBLISHED
createdAt: 2021-09-23T20:34:36.214Z
updatedAt: 2022-12-22T20:41:06.210Z
publishedAt: 2022-12-22T20:41:06.210Z
firstPublishedAt: 2021-09-23T20:44:17.391Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
kiStatus: Backlog
internalReference: 
---

## Summary

In products with assembly options customization, a parent item has components, which are called child items. This is the case, for example, of a refrigerator (parent item) with extended warranty (child item). There is an inconsistency in the platform when adding to the cart the total quantity available in stock of the parent item and the same quantity of one of its child items. Suppose a customer is buying a product that has assembly options customization. When they add to the cart the total quantity available in stock of the parent item and the same quantity of a child item associated with it, the final quantity of the child item will be different from the final quantity of the parent item. The cart will have one more unit of the child item relative to the parent item.


## Simulation

1. Access the store;
2. Add a product that has a child item to the cart (select the total quantity available in stock);
3. Select the child item of the product, in the same quantity;
4. Check the items in the cart.

![KI assembly](//images.ctfassets.net/alneenqid6w5/1xmOq4gUrxUjJLMMox7WQj/2296bfc12736ff882e99f2bf70645470/KI_assembly.png)

Notice that the cart contains one more unit of the child item relative to the parent item.


## Workaround

There is no workaround for this scenario.


