---
title: "Promotion applies to all SLAs instead of only selected shipping method"
id: 4ZtMasrYDttDtrtqGHrdrV
status: PUBLISHED
createdAt: 2025-07-24T12:50:20.910Z
updatedAt: 2025-07-24T18:02:56.147Z
publishedAt: 2025-07-24T18:02:56.147Z
firstPublishedAt: 2025-07-24T12:50:22.107Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-applies-to-all-slas-instead-of-only-selected-shipping-method
locale: en
kiStatus: Backlog
internalReference: 1265187
---

## Summary


Promotions that should be restricted to a specific shipping method (SLA) are not behaving correctly unless the deprecated `isSlaSelected` flag is explicitly set to `true`. The new Regular Promotion UI no longer exposes this flag, and when creating promotions through it, the flag defaults to `false`. This results in incorrect behavior, where the benefit is applied to any available shipping method, as long as the specified method is listed among the options in the cart simulation.


##

## Simulation



- Create a promotion with a discount restricted to a specific and valid shipping method using the new Regular Promotion form.
- In the cart, add a product and ensure that the specific shipping methods are available for the cart.
- Noticed that even if the selected Shipping Method is not the one configured in the promotion settings, the discount will still apply
- The expected behavior is that the discount should only apply if the specific shipping method is actually selected.
- This only works correctly if the deprecated `isSlaSelected` flag is set to `true` (which is not possible through the new UI).


##

## Workaround


Set `isSlaSelected = true` via API. This ensures that the promotion is only applied after the matching SLA is selected.





