---
title: 'Configuring Openpay payment gateway'
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2024-11-08T12:54:09.760Z
publishedAt: 2024-11-08T12:54:09.760Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-openpay-payment-gateway
legacySlug: configuring-openpay-payment-gateway
locale: en
subcategoryId: 
---

[Openpay](https://www.openpay.mx/en/) is an online payment processor that allows you to receive payments made by credit cards, bank transfers, and in cash.

> ⚠️ To configure it in your store, you need to have a verified Openpay account. If you do not have it yet, [click here](https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false) to create your account.

To configure Openpay in your VTEX environment, you will need to:

1. [Configure Google Tag Manager](#configuring-google-tag-manager)
2. [Configure Openpay gateway](#configuring-openpay)
3. [Configuring payment conditions](#configuring-payment-conditions)

## Configuring Google Tag Manager

To configure Google Tag Manager, follow the instructions in __step two__ of this Openpay [documentation](https://documents.openpay.mx/docs/vtex.html).

Once you have finished it, proceed to the next step of this article.

## Configuring Openpay

Now you just have to install the Openpay provider in your store. Follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Openpay__ in the search bar and click on the name of the provider.
4. In __Affiliation name__, enter __Openpay__.
5. Fill in the __Application Key__ and __Application Token__ fields. [Click here](https://documents.openpay.mx/docs/vtex.html) to access Openpay documentation and see the instructions on how to obtain this information.
6. Click `Save`.

## Configuring payment conditions

To configure the payment methods to be processed by Openpay, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Openpay may take up to 10 minutes to appear at your store's checkout as a payment option.

