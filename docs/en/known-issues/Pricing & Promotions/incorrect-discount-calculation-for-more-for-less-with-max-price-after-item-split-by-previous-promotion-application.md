---
title: "Incorrect discount calculation for 'More for Less' with Max price after item split by previous promotion application"
id: 6ZiiHgNADTxZDpE9wu6EkJ
status: PUBLISHED
createdAt: 2024-09-06T14:21:14.890Z
updatedAt: 2024-09-07T01:50:37.471Z
publishedAt: 2024-09-07T01:50:37.471Z
firstPublishedAt: 2024-09-06T14:21:16.136Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-discount-calculation-for-more-for-less-with-max-price-after-item-split-by-previous-promotion-application
locale: en
kiStatus: Backlog
internalReference: 1093789
---

## Summary


A bug occurs when stacking a Buy Together promotion, or any promotion that splits items, with a More for Less promotion configured to give a Max Price discount, leading to incorrect discount calculations. The issue arises from price differences between the split items, causing the second promotion to apply inaccurate discounts across multiple SKUs.
Additionally, a side effect occurs where the calculated discount from the second promotion is applied to all eligible SKUs, without considering the maximum number of items specified in the More for Less promotion configuration.


##

## Simulation



1. Create a _Buy Together_ promotion that applies a percentage discount to a SKU.
2. Create a _More for Less_ promotion with a max price discount that applies a discount to the same SKU.
3. Add items to the cart that meet the conditions for both promotions.
4. Observe that the _Buy Together_ promotion applies correctly.
5. When the _More for Less_ promotion attempts to apply, the system calculates the discount based on a split group of SKUs and applies the discount inaccurately to all items of that SKU.
_Note_: The issue can occur due to other factors that cause item splits, not just from the first promotion.


##

## Workaround


N/A





