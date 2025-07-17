---
title: "Promotions with Minimum Value and Gift Conditions not Displaying Gift in Cart"
id: oUDvaZPL0fjbN3v18QQIM
status: PUBLISHED
createdAt: 2022-07-25T19:29:19.209Z
updatedAt: 2024-12-19T19:20:23.403Z
publishedAt: 2024-12-19T19:20:23.403Z
firstPublishedAt: 2022-07-25T19:29:19.674Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-with-minimum-value-and-gift-conditions-not-displaying-gift-in-cart
locale: en
kiStatus: Backlog
internalReference: 445569
---

## Summary


The issue occurs when combining a promotion with a minimum value condition and a gift item. In such cases, the gift is not displayed to the user in the checkout UI. Although the promotion is technically applied, the user cannot see or select the gift, leading to confusion.


##

## Simulation


This issue does not occur consistently in every test, making it harder to replicate. However, the general steps to reproduce are as follows:

1. Create a promotion that combines a minimum order value condition with a gift item.
2. Add eligible items to the cart to meet the promotion’s minimum value condition.
3. Proceed to checkout.
4. Observe whether the gift item is displayed or selectable in the checkout UI. In some cases, the promotion appears to be applied in the order, but the gift is missing from the UI.


##

## Workaround


There is no workaround available for this issue.





