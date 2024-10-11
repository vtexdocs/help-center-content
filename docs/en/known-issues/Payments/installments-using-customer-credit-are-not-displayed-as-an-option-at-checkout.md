---
title: 'Installments using Customer Credit are not displayed as an option at checkout.'
id: 1bfMjWdCLGo5VdX2atDQc9
status: PUBLISHED
createdAt: 2024-08-09T14:43:33.140Z
updatedAt: 2024-08-09T14:43:34.333Z
publishedAt: 2024-08-09T14:43:34.333Z
firstPublishedAt: 2024-08-09T14:43:34.333Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: installments-using-customer-credit-are-not-displayed-as-an-option-at-checkout
locale: en
kiStatus: Backlog
internalReference: 1078804
---

## Summary


When registering a rule with an installment option, it does not appear in the checkout.
This happens because the installments displayed at checkout come from the gateway's installments call, which in the case of customer credit, considers all installments up to the value of the highest registered installment.

In other words, even if you only register a 4x installment option, options from 1 to 4 installments will be considered.
The native behavior is that if increasing the number of installments does not reduce the installment value, the installment will not be considered.



##

## Simulation



1. Create a customer credit rule with only 4 installments option.
2. Set a high interest rate (>50%).
3. Verify that this installment option does not appear at checkout.

Example:

Number of installments Rate (%) Installment value (R$)
1x 0% 150
2x 0% 75
3x 0% 50
4x 100% 187,50


None of these installments will be shown because it does not bring any advantage to the shopper, since the objective of someone paying in installments is to reduce the installment value.



##

## Workaround


Register all installments, but for those that you don't want to appear at checkout, set a very high-interest rate.





