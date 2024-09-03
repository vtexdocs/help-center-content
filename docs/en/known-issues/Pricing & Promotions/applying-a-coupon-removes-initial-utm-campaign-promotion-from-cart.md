---
title: 'Applying a Coupon Removes Initial UTM Campaign Promotion from Cart'
id: 2A1S6PgEwD9SgQo1UHrFFS
status: PUBLISHED
createdAt: 2024-08-27T20:52:46.450Z
updatedAt: 2024-08-27T21:14:48.748Z
publishedAt: 2024-08-27T21:14:48.748Z
firstPublishedAt: 2024-08-27T20:52:47.777Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: applying-a-coupon-removes-initial-utm-campaign-promotion-from-cart
locale: en
kiStatus: Backlog
internalReference: 1088010
---

## Summary


There is a bug where applying a coupon triggers a conflict with a promotion associated with a `utm_campaign`. When a promotion is activated by a specific `utm_campaign` and a coupon (which also has its own `utm_campaign` configuration) is added, the coupon removes the initial promotion. Despite the initial `utm_campaign` remaining in the `orderForm`, the initial promotion is no longer applied. The second promotion is triggered by the coupon, not by the UTM.


##

## Simulation


To reproduce this behavior, follow these steps:

1. **Create Promotions:**

  - **First Promotion:** Set up a promotion for free shipping that is triggered by a specific `utm_campaign`. This promotion should be configured to activate based on the UTM parameter without requiring a coupon.
  - **Second Promotion:** Set up a promotion that provides a percentage discount and is associated with a different `utm_campaign`. This promotion should be configured to require a coupon for activation.
2. **Reproduce the Bug:**

  1. Access the store using a link with the `utm_campaign` parameter that matches the first promotion (e.g., `utm_campaign=FREE_SHIPPING`).
  2. Add products to the cart.
  3. Enter a postal code in the cart.
  4. Verify that the free shipping promotion (first promotion) is applied.
  5. Apply a coupon that triggers the second promotion (e.g., `DISCOUNT20`).
  6. Observe that the initial free shipping promotion is removed from the cart after applying the coupon, even though the initial `utm_campaign` remains in the `orderForm`.


##

## Workaround


If the second promotion (triggered by the coupon) is configured with a `utm_source` instead of `utm_campaign`, the bug can be circumvented. In this case, both promotions will be applied successfully without any conflict.





