---
title: "Proportional shipping costs shows negative values when there are promotion that split items and free shipping applied"
id: 60gzoaN1WQC6OsEymBPdeq
status: PUBLISHED
createdAt: 2023-09-28T22:29:39.597Z
updatedAt: 2023-09-28T22:33:53.751Z
publishedAt: 2023-09-28T22:33:53.751Z
firstPublishedAt: 2023-09-28T22:29:40.382Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: proportional-shipping-costs-shows-negative-values-when-there-are-promotion-that-split-items-and-free-shipping-applied
locale: en
kiStatus: Backlog
internalReference: 909925
---

## Summary


When using promotions that split items, such as the "More for Less" type, proportional shipping costs may display negative values.

This issue is visible when the "More for Less" discount is applied by the seller, and a free shipping promotion is applied by the marketplace, resulting in a discount being given. This behavior causes an infinite loop when attempting to complete a purchase.


##

## Simulation


There may be different combinations causing the issue since the weight is used to calculate the proportional shipping costs, making it hard to reproduce.


##

## Workaround


Configure the free shipping promotion to be applied by the seller.




