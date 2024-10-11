---
title: 'Put Price Overwrites KIT Price Logic'
id: 6eUXEJkxQUl6NCiFWrIiFw
status: PUBLISHED
createdAt: 2022-06-28T16:56:02.848Z
updatedAt: 2023-11-09T13:43:40.623Z
publishedAt: 2023-11-09T13:43:40.623Z
firstPublishedAt: 2022-06-28T16:56:03.203Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: put-price-overwrites-kit-price-logic
locale: en
kiStatus: Backlog
internalReference: 404486
---

## Summary


The KIT price composition should be based upon the calculation of it's components and their quantities.

That is, a KIT's price should be:
`SKU_KIT_Price= (component_1*qty_1) + (component_2*qty_2) + (...) + (component_n*qty_n)`

However, there is currently a way to bypass this logic if the user insert a PUT Price directly on the kit sku on the Pricing Module.



##

## Simulation



1. Create a KIT with at least 2 components and set their price and quantities;
2. Check that the KIT price is set according to their logic mentioned above.
3. Update the KIT price on the pricing module by inserting a PUT Price on the kit sku;
4. Check that even when updating the price components and their quantities, the KIT price will remain as the put price set before.


##

## Workaround


Make any changes in the components, a new PUT Price with the new calculation and the correct logic will overwrite it again, then normalizing the "wrong" behavior.





