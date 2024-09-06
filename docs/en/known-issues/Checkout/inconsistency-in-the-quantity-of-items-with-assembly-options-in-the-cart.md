---
title: 'Inconsistency in the quantity of items with assembly options in the cart'
id: 5whwOflEwjIEpHIhv5sO2E
status: DRAFT
createdAt: 2024-08-02T11:03:16.194Z
updatedAt: 2024-08-02T11:03:16.194Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: en
kiStatus: Fixed
internalReference: 417098
---

## Summary


In products with assembly options customization, a parent item has components, which are called child items. This is the case, for example, of a refrigerator (parent item) with extended warranty (child item). There is an inconsistency in the platform when adding to the cart the total quantity available in stock of the parent item and the same quantity of one of its child items. Suppose a customer is buying a product that has assembly options customization. When they add to the cart the total quantity available in stock of the parent item and the same quantity of a child item associated with it, the final quantity of the child item will be different from the final quantity of the parent item. The cart will have one more unit of the child item relative to the parent item.


##

## Simulation



- Access the store;
- Add a product that has a child item to the cart (select the total quantity available in stock);
- Select the child item of the product, in the same quantity;
- Check the items in the cart.

Notice that the cart contains one more unit of the child item relative to the parent item.


##

## Workaround


N/A




