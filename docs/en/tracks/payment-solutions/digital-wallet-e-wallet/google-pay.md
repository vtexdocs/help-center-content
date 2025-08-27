---
title: 'Google Pay'
id: 61JMBvM5Vanqj6RaJsP8CT
status: PUBLISHED
createdAt: 2023-06-27T21:28:37.755Z
updatedAt: 2024-08-02T13:49:01.227Z
publishedAt: 2024-08-02T13:49:01.227Z
firstPublishedAt: 2023-06-27T21:46:39.537Z
contentType: trackArticle
productTeam: Shopping
slugEN: google-pay
locale: en
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugEN: digital-wallet-e-wallet
order: 2
---

Google Pay™ is a digital payments service that allows users not to share their actual card information with the store, providing more security and streamlining the checkout step. With Google Pay, users can make payments using credit or debit cards without having to enter any information manually, and Google Pay is also available in various apps, websites and in the Google Wallet. 

The Google Pay API Terms of Service apply whenever the Google Pay service is offered by a merchant. To read the terms, please see [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

> ⚠️ Google Pay is not available for Checkout V5 or earlier versions of Checkout.

## Enabling Google Pay

To enable Google Pay, follow the steps below.

1. In the VTEX Admin, go to **Store Settings > Payments > Wallets** or type **Wallets** in the search bar at the top of the page.
2. Select **Activate** to include the Google Pay extension.

> ℹ️ The card brands supported by the Google Pay extension are the ones configured in the payment conditions.

![google-pay-checkout-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/payment-solutions/digital-wallet-e-wallet/google-pay_1.png)

Google Pay will then be available in your VTEX store's checkout as a new payment method. It may take around 10 minutes to be implemented.

> ⚠️ For now, Google Pay does not support subscriptions.

To use Google Pay, you must meet the following requirements:

* Having at least one active [payment condition](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) configured for credit or debit cards with an [acquirer](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente), establishing which acquirer will process the wallet payment.
* Using [VTEX Checkout](https://help.vtex.com/en/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) in your store.

> ⚠️ For stores that have the [3DS](https://help.vtex.com/en/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) authentication flow configured and supported by the acquirer, payment with Google Pay will follow the card native flow and will use 3DS as well. For more information on how to configure the authentication flow, please refer to [Setting up 3DS 2 authentication flow](https://help.vtex.com/pt/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2).

> ℹ️ You can also set up Google Pay to be processed with Adyen or Stripe. To do this, access the **Payment Conditions** screen in Admin, click on **Google Pay** and select the desired option.

## Viewing transactions completed with Google Pay

To view transactions that have been completed with Google Pay, please follow the steps described in the article [Viewing transaction details](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). In the search bar of the transactions page, type **Google Pay** to filter the transactions carried out with this type of payment.

![Google Pay Transaction_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/payment-solutions/digital-wallet-e-wallet/google-pay_2.png)

After accessing the desired transaction, click on `+ Information` to verify the **Google Pay** information described in the `paymentOrigin` field.

![Google Pay Transaction_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/payment-solutions/digital-wallet-e-wallet/google-pay_3.png)

> ⚠️ It is also possible to identify transactions made with Google Pay through the **All Orders** page in Admin. You just need to select the desired search period, [export the orders](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/6rVCf9KLn1jgTaxS0xuByu) in a report in .csv and locate the Google Pay information in the "payment origin" field.

## Adding Google Pay information to the purchase template

To add the information that the order was placed with a Google Pay card to the email template that will be sent to the buyer, follow the steps below.

1. In the VTEX Admin, go to **Store Settings > Email templates > Templates** or type **Templates** in the search bar at the top of the page.
2. Access the checkout and payment approval templates.
3. After** **all mentions** **of** `{{#if lastDigits}}` last digits `{{lastDigits}}`, add the following line:
`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}`

After this change, whenever there is any mention of the last four digits of the card in these email templates, the "(Google Pay)" information will be added for payments made with a digital wallet.

> ℹ️ For stores provisioned as of March 2023, the templates will already be updated with the information for payments made with Google Pay.

## FAQ

### Activation issues

* Cannot enable the wallet because the toggle switch is disabled

If you get the message "You don't have any networks enabled for Google Pay in your store.", you must go to the payment conditions and check if there are conditions associated with card transactions with acquirers.

* The toggle switch is enabled, but it is not possible to finish the process

If the message "Google Pay activated successfully." does not appear when activating the toggle switch, it means there may have been instability in the system. If the problem persists, the user will receive a message to contact [VTEX support](https://help.vtex.com/en/support).

### Issues that may occur during the purchase process

* The device used to complete the purchase does not support Google Pay

If the message "Payment method not available in your browser" is displayed, the user must try to complete the purchase on another browser or device.

* There are no rules configured for card payment in the store

If a store has no card payment rules configured, the user will see an error message saying the method is not available when selecting Google Pay.

### Learn more

* [DPAN and FPAN: Understanding security in the online tokenized payment flow](https://help.vtex.com/en/tutorial/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb)

