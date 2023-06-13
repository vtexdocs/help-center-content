---
title: installmentOptions from orderForm API doesn't take into account specific installment promotions
id: YgwSByoCsjqEmWOmuXRU4
status: PUBLISHED
createdAt: 2022-08-24T15:53:17.291Z
updatedAt: 2022-11-25T21:50:31.916Z
publishedAt: 2022-11-25T21:50:31.916Z
firstPublishedAt: 2022-08-24T15:53:17.926Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: installmentoptions-from-orderform-api-doesnt-take-into-account-specific-installment-promotions
kiStatus: No Fix
internalReference: 644563
---

## Summary


When a promotion is restricted to a specific quantity of credit card installments (for example, "10% cash"), the discounted amount is applied even for installments out of the limited range, where the "installmentOptions" object from the orderForm API will return wrong values.

Selecting a different number of installments will recalculate promotions and refresh the values from all installments. You can't create an order with the wrong discount since it'll always be updated to the selected number of installments, so this issue is related only to the exhibited values.



## Simulation



- Create a promotion with a restricted amount of installments;
- Through the API, create or simulate a cart informing a "paymentData" with the number of installments in which the promotion is applied;
- Observe the "installmentOptions" about the discounted values;
- Inform another number of installments and see the value being refreshed to all of them.



## Workaround


This object has a limited behavior and should be considered obsolete.

Stores that depend on discounts for specific installments in an orderForm should be based on a new API, as described in this changelog (1) and this documentation (2).

This new API doesn't cover simulation requests. For them, the alternative is the "paymentSystemToCheckFirstInstallment" configuration (3) – but limited to discounts in the first installment.

---

(1) https://developers.vtex.com/vtex-developer-docs/changelog/improvement-price-consistency-checkout-discounts-installments

(2) https://developers.vtex.com/vtex-rest-api/reference/getcartinstallments

(3) https://developers.vtex.com/vtex-rest-api/docs/using-checkout-api-to-set-a-discount

