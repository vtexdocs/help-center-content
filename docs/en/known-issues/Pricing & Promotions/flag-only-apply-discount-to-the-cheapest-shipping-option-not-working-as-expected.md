---
title: "Flag 'Only apply discount to the cheapest shipping option' not working as expected"
id: 15irjH6rNkHhkBeRNn9RUI
status: PUBLISHED
createdAt: 2022-10-05T18:01:57.821Z
updatedAt: 2022-11-25T22:11:49.524Z
publishedAt: 2022-11-25T22:11:49.524Z
firstPublishedAt: 2022-10-05T18:01:58.840Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: flag-only-apply-discount-to-the-cheapest-shipping-option-not-working-as-expected
locale: en
kiStatus: Backlog
internalReference: 672567
---

## Summary



The unexpected behavior happens for orders with more than 1 item and for scenarios that at least one of the items have a delivery window that is not shared with other items, only one.

Example: Free shipping promotion with this restriction.

Cart:
Item 1 - Delivery Window A, Delivery Window B
Item 2 - Delivery Window A, Delivery Window B
Item 3 - Delivery Window A, Delivery Window B, Delivery Window C.

In this case the cheapest option for the entire cart would be Delivery Window C even if is not an option for items 1 and 2.

The expected behavior would be to consider the cheapest options that are actually available for the entire cart.



## Simulation



1. Create a free shipping promotion that have a restriction "Only apply discount to the cheapest shipping option";
2. Add to the cart items with common delivery options and a item with a different one that is not applicable for the other items;
3. Check that the promotion will set a free shipping for all the items except the one with a different delivery option.



## Workaround



- Enable the different delivery option for the other items on the cart;
- Remove the different delivery option for the item that the promotion is not being applied correctly;
- Remove the restriction flag "Only apply discount to the cheapest shipping option".

