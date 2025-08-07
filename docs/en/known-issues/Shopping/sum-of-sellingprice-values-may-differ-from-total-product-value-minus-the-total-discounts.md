---
title: "Sum of SellingPrice values may differ from total product value minus the total discounts"
id: wo1qtfZnDfI8EylRbXiPF
status: PUBLISHED
createdAt: 2019-09-13T18:08:45.753Z
updatedAt: 2022-12-22T20:45:50.832Z
publishedAt: 2022-12-22T20:45:50.832Z
firstPublishedAt: 2019-09-14T03:33:18.921Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: sum-of-sellingprice-values-may-differ-from-total-product-value-minus-the-total-discounts
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The sum of the product's unit value with applied discount (`sellingPrice` property) may differ from the product's total value minus the total discount value.

This is because unit discount calculation is a distribution of the total discount between all items and their quantities, which can cause rounding problems. By summing values that have been rounded, the difference from the original total can be noticed.

Therefore, `sellingPrice` should be used as a reference, keeping the totalizers as the real value.

The occurrence is more frequent in stores that use less than 2 decimal places, when rounding is most used.

## Simulation

Example of occurrence:

- Cart containing 2 units of a product that costs $ 190;
- Total product value is $ 380;
- 25% discount;
- Total discount value is $ 95;
- Discounted unit value is $ 142.5;
- If the store does not use decimal places, the final unit value will be $ 142.

In this scenario:

- Total products = $ 380;
- Total discounts = $ 95;
- Order Total = $ 285.

However, the sum of the items' sale price, with the discount applied, is $ 284.

## Workaround

There is currently no workaround available for this scenario.

