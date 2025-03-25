---
title: 'Promotions by order of payment methods do not appear on the product page'
id: HZ5IoCFFOhuxU0jQWkMPp
status: PUBLISHED
createdAt: 2019-08-13T20:45:50.232Z
updatedAt: 2024-07-01T18:48:59.282Z
publishedAt: 2024-07-01T18:48:59.282Z
firstPublishedAt: 2019-08-13T21:10:58.244Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-by-order-of-payment-methods-do-not-appear-on-the-product-page
locale: en
kiStatus: No Fix
internalReference: 781523
---

## Summary


The product page shows the SKU price with some promotions only, which does not include the specific conditions for payment methods nor the number of installments. These are only applied during checkout, after the user has explicitly opted for using a certain payment condition.



##

## Simulation




1. Create a promotion that grants a 5% discount for payment by "boleto" (popular Brazilian offline payment method)
2. Access the product page
3. Note that the displayed value do not take the set discount into account. The discount will appear after choosing "boleto" as payment method at checkout.



##

## Workaround



This scenario can be easily solved by implementing a front-end Javascript which calculates the price and includes the discount percentage due, thereafter displaying an element with this additional price on the product page.








