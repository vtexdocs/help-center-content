---
title: 'Configuring Openpay payment gateway'
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2021-07-06T18:01:16.234Z
publishedAt: 2021-07-06T18:01:16.234Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configuring-openpay-payment-gateway
locale: en
legacySlug: configuring-openpay-payment-gateway
subcategory: 
---

[Openpay](https://www.openpay.mx/en/) is an online payment processor that allows you to receive payments made by credit cards, bank transfers, and in cash.

<div class="alert alert-warning">
  To configure it in your store, you need to have a verified Openpay account. If you do not have it yet, <a href="https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false">click here</a> to create your account.
  </div>

To configure Openpay gateway in your VTEX environment, you will need to:

1. [Configure Google Tag Manager](#configuring-google-tag-manager)
2. [Configure Openpay gateway](#configuring-openpay-gateway)
3. [Associate Openpay’s solution with a payment condition](#associating-openpays-solution-with-a-payment-condition)

## Configuring Google Tag Manager

To configure Google Tag Manager, follow the instructions in __step two__ of this Openpay [documentation](https://www.openpay.mx/en/docs/vtex.html).

Once you have finished it, proceed to the next step of this article.

## Configuring Openpay gateway

Now you just have to install the Openpay connector in your store. Follow the steps below:

1. Go to the VTEX __Admin__.
2. In the __Payments__ module, click on __Settings__.
3. In __Gateway Affiliations__, click on the green “__+__” button.
4. Search for __Open Pay__ and select its card.
5. In __Affiliation name__, enter __Open Pay__.
6. Fill in the __Application Key__ and __Application Token__ fields. [Click here](https://www.openpay.mx/en/docs/vtex.html) to access Openpay documentation and see the instructions on how to obtain this information.
7. Click on __Save__.

## Associating Openpay’s solution with a payment condition

Once you have completed the steps above, Openpay will be ready to be used in your store.

If you want to associate it with a compatible payment condition, check out our article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).

