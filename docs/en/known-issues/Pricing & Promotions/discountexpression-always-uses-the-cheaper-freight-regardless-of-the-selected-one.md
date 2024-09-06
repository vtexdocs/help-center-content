---
title: 'DiscountExpression Always Uses the Cheaper Freight Regardless of the Selected One'
id: 6tFmwOH8tYRohn29hC4jmR
status: PUBLISHED
createdAt: 2024-08-02T15:42:13.663Z
updatedAt: 2024-08-02T15:42:16.409Z
publishedAt: 2024-08-02T15:42:16.409Z
firstPublishedAt: 2024-08-02T15:42:16.409Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: discountexpression-always-uses-the-cheaper-freight-regardless-of-the-selected-one
locale: en
kiStatus: Backlog
internalReference: 1075053
---

## Summary


The `DiscountExpression`, which is a discount based on a formula defined in the promotion settings, always uses the cheaper freight option regardless of the shipping method selected by the customer. This results in discrepancies between the discount given and the expected discount based on the selected shipping method.



##

## Simulation



- Create a promotion  `formula` that applies a discount based on the total amount including freight.
- Set multiple shipping methods with different costs.
- Add items to the cart and select a shipping method that is not the cheapest.
- Apply the promotion and proceed to checkout.
- Observe that the discount is calculated using the cheapest shipping method rather than the selected one.


##

## Workaround


There is no workaround available.





