---
title: "Payment Conditions set to process transactions in installments other than 1x are processing transactions as prepaid in full"
id: 2z9cDiCAovzKVFZO7RSqOD
status: PUBLISHED
createdAt: 2024-05-09T18:47:33.319Z
updatedAt: 2024-05-09T18:47:34.221Z
publishedAt: 2024-05-09T18:47:34.221Z
firstPublishedAt: 2024-05-09T18:47:34.221Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-conditions-set-to-process-transactions-in-installments-other-than-1x-are-processing-transactions-as-prepaid-in-full
locale: en
kiStatus: Backlog
internalReference: 1030652
---

## Summary


Payment conditions configured to process transactions in a number of installments other than 1x are being able to process payments in 1x. The issue only occurs for payments where the user has chosen to pay as prepaid in full.


##

## Simulation



1. Set up 3 Payment Conditions for credit cards of any brand: Payment Condition A - with installment in 1x, Payment Condition B - with installment in 2x, and Payment Condition C - with installment in 3x.
2. Go to the Checkout page by adding any item to the cart and proceed to the payment screen. Choose to pay with a credit card in 1x and complete the purchase.
3. Go to the admin and open the newly created transaction, click the "+ Information" button, and observe that the `AvailableRules` field will contain a list with all the IDs of Payment Conditions, Payment Condition A, Payment Condition B, and Payment Condition C, as being able to process the transaction in question.


##

## Workaround


t is possible to set the Payment Condition 1x as default, so when there is a tie between all Payment Conditions, the gateway will prioritize the default rule.





