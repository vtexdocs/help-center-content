---
title: "Incorrect price update when a promotion doesn't apply the discount to all the same items in a cart"
id: 1nXGR7pKjyc0Rmo0UzMOns
status: PUBLISHED
createdAt: 2024-05-01T20:07:04.369Z
updatedAt: 2024-05-01T20:07:16.339Z
publishedAt: 2024-05-01T20:07:16.339Z
firstPublishedAt: 2024-05-01T20:07:05.363Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-price-update-when-a-promotion-doesnt-apply-the-discount-to-all-the-same-items-in-a-cart
locale: en
kiStatus: Backlog
internalReference: 1025539
---

## Summary


When a promotion applies a discount to only one item of the same SKU (e.g. a More for Less promotion), if there is a second promotion for that same SKU, the discount calculation will be applied to the amount already discounted by the first promotion - resulting in a smaller discount than would be given if the second promotion were applied to the initial price of the SKU.

The problem occurs in the price update when a promotion doesn't apply the discount to all the same items in a cart and this causes a "split" (two same items with different prices). When the second promotion is applied, it is applied to the wrong price.

The bug is not given because of a specific promotion.


##

## Simulation



- Create a More for Less promotion, giving the discount to only one item from the same SKU
- Create a regular percentage promotion for the same SKU
- At checkout, see that the discount given by the second promotion is based on the lower value of the SKU, which had already been discounted by the first promotion


##

## Workaround


N/A





