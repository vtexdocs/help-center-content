---
title: 'Divergent value while mixing "paymentSystemToCheckFirstInstallment" configuration and splitted items'
id: 3h2o69kTBqFdQlzhED2kMN
status: PUBLISHED
createdAt: 2023-03-07T18:35:31.215Z
updatedAt: 2023-03-07T20:06:30.491Z
publishedAt: 2023-03-07T20:06:30.491Z
firstPublishedAt: 2023-03-07T18:35:31.660Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergent-value-while-mixing-paymentsystemtocheckfirstinstallment-configuration-and-splitted-items
locale: en
kiStatus: Backlog
internalReference: 766454
---

## Summary


When the account has configured "paymentSystemToCheckFirstInstallment" in orderForm Configuration, the checkout calculation will send two requests to the promotions module. If there are splitted items in the cart (for example, More for Less promotion), the first request will send the items correctly, but the second one will send the items split based on the promotion's application.

Combining that promotion with a regular promotion restricted to the same payment method configured in "paymentSystemToCheckFirstInstallment". You will see different values in the response from promotions module, and an interest value in totalizers on Checkout UI, not allowing you to finish the purchase and the message "Payment value doesn't match with requested value".

We noticed this behavior for payment methods that have only 1 installment as default, for example, PIX, "Boleto Bancário" or Promissory.


##

## Simulation



- Configure "paymentSystemToCheckFirstInstallment" in orderForm Configuration;
- Configure a More for Less promotion;
- Configure a regular promotion restricted to the same payment method configured in "paymentSystemToCheckFirstInstallment": PIX or Boleto;
- Assemble a cart and select the payment method configured in "paymentSystemToCheckFirstInstallment";
- You may see the interest value in totalizers on Checkout UI.


##

## Workaround


N/A



