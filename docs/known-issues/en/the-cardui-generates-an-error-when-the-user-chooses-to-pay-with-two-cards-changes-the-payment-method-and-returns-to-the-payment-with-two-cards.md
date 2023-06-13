---
title:  The card-ui generates an error when the user chooses to pay with two cards, changes the payment method and returns to the payment with two cards
id: 1LZL3Gq40b7TRjCLnASacW
status: PUBLISHED
createdAt: 2022-11-30T19:03:35.002Z
updatedAt: 2022-12-01T19:01:19.135Z
publishedAt: 2022-12-01T19:01:19.135Z
firstPublishedAt: 2022-11-30T19:03:35.662Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-cardui-generates-an-error-when-the-user-chooses-to-pay-with-two-cards-changes-the-payment-method-and-returns-to-the-payment-with-two-cards
kiStatus: Fixed
internalReference: 670424
---

## Summary


When the user chooses to pay with two cards, then changes the payment method and return to pay with two cards, the message "_Error inesperado"_ will appear in the payment option box._ _


##

## Simulation



1. Go to checkout with a random item
2. Choose to pay by Credit Card or Debit Card and select to pay with two cards
3. Change the payment method
4. Change the payment method to the previous one
5. The message "_Error inesperado"_ will appear in the card box


##

## Workaround


The payment method will work again if the checkout page is refreshed

