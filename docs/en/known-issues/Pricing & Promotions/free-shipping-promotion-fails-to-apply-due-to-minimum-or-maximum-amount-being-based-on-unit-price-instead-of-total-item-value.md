---
title: "Free shipping promotion fails to apply due to minimum or maximum amount being based on unit price instead of total item value"
id: 2eti6qau2VXzuBBU8Us25V
status: PUBLISHED
createdAt: 2024-08-15T13:48:35.886Z
updatedAt: 2024-08-15T13:48:36.853Z
publishedAt: 2024-08-15T13:48:36.853Z
firstPublishedAt: 2024-08-15T13:48:36.853Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: free-shipping-promotion-fails-to-apply-due-to-minimum-or-maximum-amount-being-based-on-unit-price-instead-of-total-item-value
locale: en
kiStatus: Backlog
internalReference: 1081841
---

## Summary


The free shipping promotion with a minimum or maximum order amount is incorrectly considering the item value per unit instead of the total item value, leading to inconsistencies in applying the promotion.


##

## Simulation



1. Set up a free shipping promotion with a minimum cart value threshold.
2. Add a product to the cart that is priced based on a unit multiplier (e.g., price per kilogram) rather than a fixed price.
3. Ensure that the total value of items in the cart exceeds the minimum value required for the promotion to apply. However, the real value of the item, considering the unit multiplier, should make the total cart value lower than the promotion's minimum requirement.
4. Verify that the promotion does not apply when the total cart value exceeds the required minimum due to the item’s unit multiplier.


##

## Workaround


Currently, there is no available workaround for this issue.





