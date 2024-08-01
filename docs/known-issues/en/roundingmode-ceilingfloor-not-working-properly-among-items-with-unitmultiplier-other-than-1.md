---
title: 'roundingmode ceiling/floor not working properly among items with unitmultiplier other than 1'
id: 5KzOM5kEp8QpkBTX7hdil1
status: PUBLISHED
createdAt: 2024-01-18T17:53:08.668Z
updatedAt: 2024-01-18T17:53:09.229Z
publishedAt: 2024-01-18T17:53:09.229Z
firstPublishedAt: 2024-01-18T17:53:09.229Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: roundingmode-ceilingfloor-not-working-properly-among-items-with-unitmultiplier-other-than-1
locale: en
kiStatus: Backlog
internalReference: 968349
---

## Summary



It is possible to set, via task for the product team, to change how the discount value is rounded in the cart.
In a scenario where the account is using a ceiling or floor rounding mode, this rounding won't work properly with items with unitmultiplier other than 1.

That's because the unitMultiplier of this item is 100.0. When RnB rounds up the discount value for the checkout, it rounds up the unit price. So it takes the value of a small unit and rounds it up. Then it takes the entire discount, divides it by the quantity times the unitMultiplier, and rounds it up to two decimal places.
As RnB only takes into account two decimal places, it either rounds to 0.01 or 0.02.


##

## Simulation



Example:
Total discount: -3.96
Unit discount = -3.96 / (2*100) = -0.0198

So, which item will take 0.0198% of the discount, instead of 3,96%


##

## Workaround



A valid workaround would be set back to no roundingMode, so the problem will stop happening.





