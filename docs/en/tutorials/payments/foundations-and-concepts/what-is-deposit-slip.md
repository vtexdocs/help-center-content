---
title: 'Deposit Slip'
createdAt: 2019-01-24T20:45:35.451Z
updatedAt: 2026-10-30T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-deposit-slip
locale: en
hidden: false
---

Ficha Depósito (a type of deposit slip) is a very popular payment method in Mexico. It works much like a boleto in Brazil, with one difference: payment can only be made at authorized locations.

## How it works
To pay with Ficha Depósito, the customer selects this payment method at checkout and receives a barcode document with the payment information. To complete the purchase, the customer must go to an authorized location and pay the document amount in cash or by credit card.

## How to accept Ficha Depósito in your store

To offer Ficha Depósito at checkout, you need to create a payment condition for this payment method in the VTEX Admin. The difference between these two concepts is explained in [Difference between payment methods and payment conditions](/en/docs/tutorials/difference-between-payment-methods-and-payment-conditions).

Before creating the condition, [add a payment provider](/en/docs/tutorials/registering-gateway-affiliations) that processes Ficha Depósito. The providers available in Mexico are listed in the [List of Payment Providers by Country](/en/docs/tutorials/list-of-payment-providers-by-country). Once the provider is registered, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. On the __Payment Conditions__ tab, click the `+` button.
3. Click __FichaDeposito__.
4. Activate the condition in the __Status__ field.
5. In the __Process with provider__ field, select the provider that will process Ficha Depósito payments.
6. Click `Save`.

