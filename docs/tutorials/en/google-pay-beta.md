---
title: 'Google Pay (Beta)'
id: 653pNFOw6L5CvGupLosJSq
status: DRAFT
createdAt: 2023-04-26T15:34:40.825Z
updatedAt: 2023-06-27T21:56:34.229Z
publishedAt: 
firstPublishedAt: 2023-04-26T20:03:44.992Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: google-pay-beta
locale: en
legacySlug: google-pay-beta
subcategory: 3lZEaiSilZPwa3eCUUzwyr
---

<div class = "alert alert-info">
This module is in Beta, which means we are working on improving it. If you have any questions, please contact our <a href="https://help.vtex.com/en/support">Support team.</a>
</div>

Google Pay™ is a digital payments service that allows users not to share their actual card information with the store, providing more security and streamlining the checkout step. With Google Pay, users can make payments using credit or debit cards without having to enter any information manually, and Google Pay is also available in various apps, websites and in the Google Wallet. 

The Google Pay API Terms of Service apply whenever the Google Pay service is offered by a merchant. To read the terms, please see [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

<div class="alert alert-warning">
<p>Google Pay is not available for Checkout V5 or earlier versions of Checkout.</p>
</div>

## Enabling Google Pay

To enable Google Pay, follow the steps below.

1. In the VTEX Admin, go to **Store Settings > Payments > Wallets** or type **Wallets** in the search bar at the top of the page.
2. Select **Activate** to include the Google Pay extension.

<div class = "alert alert-info">
<p>The issuing banks supported by the Google Pay extension are the ones configured in the payment conditions.</p>
</div>

![google pay - EN](https://images.ctfassets.net/alneenqid6w5/IhdcOpZC0MPaZLYbPUYw1/c1848f1deba2af0d837f96f21eae86a5/image.png)

Google Pay will then be available in your VTEX store's checkout as a new payment method. It may take around 10 minutes to be implemented.

<div class = "alert alert-warning">
<p>For now, Google Pay does not support subscriptions.</p>
</div>

To use Google Pay, you must meet the following requirements:

* Having at least one active [payment condition](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) configured for credit or debit cards with an [acquirer](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente), establishing which acquirer will process the wallet payment.
* Using [VTEX Checkout](https://help.vtex.com/en/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) in your store.

<div class = "alert alert-warning">
<p>For stores that have the <a href="https://help.vtex.com/en/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa">3DS</a> authentication flow configured and supported by the acquirer, payment with Google Pay will follow the card native flow and will use 3DS as well. For more information on how to configure the authentication flow, please refer to <a href="https://help.vtex.com/pt/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2">Setting up 3DS 2 authentication flow</a>.</p>
</div>

## Viewing transactions completed with Google Pay

To view transactions that have been completed with Google Pay, please follow the steps described in the article [Viewing transaction details](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). In case of a transaction completed with Google Pay, you must click on `+ Information` and refer to the field `paymentOrigin` or search for "Google Pay" in the search bar of the transaction list page.

## Adding Google Pay information to the purchase template

To add the information that the order was placed with a Google Pay card to the email template that will be sent to the buyer, follow the steps below.

1. In the VTEX Admin, go to **Store Settings > Email templates > Templates** or type **Templates** in the search bar at the top of the page.
2. Access the checkout and payment approval templates.
3. After** **all mentions** **of** `{{#if lastDigits}}` last digits `{{lastDigits}}`, add the following line:
`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}`

After this change, whenever there is any mention of the last four digits of the card in these email templates, the "(Google Pay)" information will be added for payments made with a digital wallet.

<div class = "alert alert-info">
<p>For stores provisioned as of March 2023, the templates will already be updated with the information for payments made with Google Pay.</p>
</div>

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

