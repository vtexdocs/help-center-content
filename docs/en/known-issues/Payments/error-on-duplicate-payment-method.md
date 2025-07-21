---
title: "Error on duplicate payment method"
id: 1wdiEae6sehlnTDnanWT7n
status: PUBLISHED
createdAt: 2023-11-02T12:23:14.027Z
updatedAt: 2023-11-02T12:23:15.109Z
publishedAt: 2023-11-02T12:23:15.109Z
firstPublishedAt: 2023-11-02T12:23:15.109Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-on-duplicate-payment-method
locale: en
kiStatus: Backlog
internalReference: 929428
---

## Summary


When duplicating a payment method that does not have installments, the operator receives the following message on the screen, "The current payment system does not allow installment options". This happens because when the body of the creation request in the new rule is created, some fields are inserted by default, including installmentOptions, but this field does not exist for cash payments such as debit and boleto(Brazil).


##

## Simulation



1. Go to the payment terms screen
2. Select a payment method that does not have installments.
3. Click the button to duplicate the rule.
4. The following error message will be displayed on your screen: "The current payment system does not allow installment options"


##

## Workaround


We have two ways to get around this problem:

1. Create another one with the same settings as the one you want to duplicate;
2. Create the rule via API, `https://.myvtex.com/api/payments/pvt/rules/`, removing the installmentOptions field from the body.





