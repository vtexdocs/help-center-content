---
title: 'Setting up payments with BoletoFlex'
id: 3ikLbJGXMI6bkAm6YiglOx
status: PUBLISHED
createdAt: 2022-01-10T17:36:39.512Z
updatedAt: 2023-03-22T19:10:38.069Z
publishedAt: 2023-03-22T19:10:38.069Z
firstPublishedAt: 2022-01-10T20:19:23.317Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-boletoflex
locale: en
legacySlug: setting-up-payments-with-boletoflex
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

BoletoFlex is a payment method where users can pay their purchases in installments using the boleto, with pre-determined interest rates and without the need to use a credit card.

## Setting up BoletoFlex gateway affiliation 
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the __+__ button.
3. Click on the __BoletoFlex__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by BoletoFlex.
5. Click on __Save__.

## Setting up the payment condition
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the payment condition __BoletoFlex__.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
7. Choose whether payments will be with or without installments.
8. It you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
9. Click on __Save__.

After following the indicated steps, BoletoFlex may take up to 10 minutes to appear at your store's checkout as a payment option.
