---
title: 'Single installment payment condition does not appear at chekout.'
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2024-04-26T15:49:53.973Z
publishedAt: 2024-04-26T15:49:53.973Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: single-installment-payment-condition-does-not-appear-at-chekout
locale: en
kiStatus: Backlog
internalReference: 605568
---

## Summary


When configuring a single Payment Condition with only one installment option or multiple payment conditions where only one installment option is available for a specific cart, this installment option is not displayed at checkout. Although it appears correctly in `paymentData`, it is not visible to the user. Instead, only the option to pay the total value is shown. However, when the transaction is completed, the payment is processed with the correct installment option.


##

## Simulation



- Set up a single installment Payment Condition.
- Go to the checkout page by purchasing any random item.
- Navigate to the Network tab in devtools and verify that the installment option is correctly loaded in the `paymentData` response.
- Check the installment options dropdown on the checkout page. Note that the configured installment option is missing, instead, the total amount is displayed.
- Despite this issue, upon completing the purchase, the transaction correctly reflects the chosen installment option.


##

## Workaround


N/A

Atenciosamente,
Gisely Lacerda
Product Support Engineer, Shopper Journey squad

