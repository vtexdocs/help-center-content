---
title: "More for Less promotions incorrectly applying to overlapping quantities"
id: 58LCIFlyd31Yxuq5U0lKuo
status: PUBLISHED
createdAt: 2024-12-12T14:45:56.909Z
updatedAt: 2024-12-12T14:45:57.721Z
publishedAt: 2024-12-12T14:45:57.721Z
firstPublishedAt: 2024-12-12T14:45:57.721Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: more-for-less-promotions-incorrectly-applying-to-overlapping-quantities
locale: en
kiStatus: Backlog
internalReference: 1149846
---

## Summary


When multiple "More for Less" promotions are applied to a collection with a maximum value limit for items, the Rates and Benefits (RnB) service fails to correctly evaluate the applicability of the promotions. This results in more than one promotion being applied, even when the cart's item quantities should only allow one promotion.


##

## Simulation



1. Configure **Promotion 1**:
  - Type: "More for Less"
  - Collection: X
  - Condition: 2 items for a maximum value lower than the regular price of the products in the collection (e.g., the promotion reduces the item price compared to its default configuration).
2. Configure **Promotion 2**:
  - Type: "More for Less"
  - Collection: X
  - Condition: 3 items for a maximum value that provides an even greater discount on the item price compared to Promotion 1.
3. Test the following scenarios:
  - Add **1 unit of Product A** and **1 unit of Product B**. Verify that **Promotion 1** applies and limits the item price as per its configuration. _(Expected behavior)_
  - Add **2 units of Product A** and **1 unit of Product B**. Verify that **Promotion 2** applies, offering a greater discount than Promotion 1. _(Expected behavior)_
  - Add **3 units of Product A** and **1 unit of Product B**. Verify that both **Promotion 1** and **Promotion 2** apply incorrectly, even though the cart's quantity should only trigger Promotion 2. _(Unexpected behavior)_
  - Add **3 units of Product A** and **2 units of Product B**. Verify that only **Promotion 2** applies when both promotions should apply. _(Unexpected behavior)_

RnB loses track of quantities and which products already have discounts applied, leading to incorrect promotion applicability.


##

## Workaround


There is no known workaround to prevent this issue at the moment.





