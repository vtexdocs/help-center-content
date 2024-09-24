---
title: "Same SKU in multiple lists in 'Buy Together' promotions on the new UI is causing the promotion to not apply at the checkout"
id: 4M9UZhQqkU4Tl07lyLPtMt
status: PUBLISHED
createdAt: 2024-09-03T10:55:07.063Z
updatedAt: 2024-09-10T12:15:48.590Z
publishedAt: 2024-09-10T12:15:48.590Z
firstPublishedAt: 2024-09-03T10:55:07.909Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: same-sku-in-multiple-lists-in-buy-together-promotions-on-the-new-ui-is-causing-the-promotion-to-not-apply-at-the-checkout
locale: en
kiStatus: Fixed
internalReference: 1091209
---

## Summary


There is an issue in the new UI where "Buy Together" promotions allow the same SKU to be added to both List 1 and List 2 without any warning or error. This is not an intended use of the promotion type, as "Buy Together" promotions are designed to work with distinct SKUs in each list. The configuration may lead to unexpected behaviors, such as the promotion not applying correctly at checkout.


##

## Simulation



1. Go to the VTEX Admin panel and ensure you are using the new UI for promotion management.
2. Create a "Buy Together" promotion.
3. Add the same SKU to both List 1 and List 2.
4. Save the promotion without encountering any warnings or errors.
5. Attempt to apply the promotion at checkout using items from List 1 and List 2.


##

## Workaround


Currently, there is no workaround available for this issue in the new UI. Merchants are advised to avoid adding the same SKU to both lists when configuring "Buy Together" promotions. Instead, consider using distinct SKUs for each list or using the "More for Less" promotion type to achieve similar results without conflicts.





