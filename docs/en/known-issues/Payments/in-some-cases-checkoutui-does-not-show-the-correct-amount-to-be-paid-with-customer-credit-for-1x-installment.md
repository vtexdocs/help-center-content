---
title: "In some cases, Checkout-UI does not show the correct amount to be paid with Customer Credit for 1x installment"
id: 3YsvVet6LKw1buFapSwFWm
status: PUBLISHED
createdAt: 2023-02-06T20:00:37.983Z
updatedAt: 2023-02-06T20:00:38.568Z
publishedAt: 2023-02-06T20:00:38.568Z
firstPublishedAt: 2023-02-06T20:00:38.568Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-some-cases-checkoutui-does-not-show-the-correct-amount-to-be-paid-with-customer-credit-for-1x-installment
locale: en
kiStatus: Backlog
internalReference: 748320
---

## Summary


For a scenario where Customer Credit is used to pay an amount less than the total value of the cart; it shows, for 1x installment in the dropdown, the full amount ignoring debits considered such as paying with another payment method like a gift card.

This is a client-side issue only, therefore, if the user places an order using this option from the dropdown menu, the checkout API will send the correct value to the gateway.


##

## Simulation



- Make sure the account has payment conditions with 1x installment for customer credit;
- Go to the payment part in the checkout pipeline, then chose customer credit as a payment method along with a gift card. Hence, notice that the value in the dropdown appears incorrectly.


##

## Workaround


N/A





