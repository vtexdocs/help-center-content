---
title: "Item becomes unavailable if its possible assembly options don't match the cart sales channel"
id: 36TbVrK9qcFFNUaIdN7JTH
status: PUBLISHED
createdAt: 2024-08-20T12:43:01.364Z
updatedAt: 2024-08-26T13:50:42.246Z
publishedAt: 2024-08-26T13:50:42.246Z
firstPublishedAt: 2024-08-20T12:43:02.653Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: item-becomes-unavailable-if-its-possible-assembly-options-dont-match-the-cart-sales-channel
locale: en
kiStatus: Fixed
internalReference: 1083848
---

## Summary


If an item has any possible assembly options that are not available for the sales channel used in the cart, the item becomes unavailable.
This happens even if the assembly option itself is not required and hasn't been added to the cart.


##

## Simulation



1. Create a parent SKU, and a child SKU that functions as an assembly option.
2. Set the assembly option to be optional (minimum quantity of zero, default selected quantity of zero).
3. Set the parent SKU sales channel to one that is not available to the child SKU.
4. Try adding the parent SKU to a cart using that sales channel.


##

## Workaround


If possible, ensure that assembly option SKUs match all sales channels used by their parent items.




