---
title: 'Configuring bank slips'
id: tutorials_447
status: PUBLISHED
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2023-03-21T20:14:57.262Z
publishedAt: 2023-03-21T20:14:57.262Z
firstPublishedAt: 2017-04-27T23:03:25.766Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-a-bank-slip
legacySlug: how-to-configure-a-bank-slip
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The bank slip is a payment instrument where, for the recovery, you just need to have a bank account, and to contract a collection portfolio with the bank. After that, it is possible to send and receive slips directly through your bank account.

There are two ways of configuration:
- Straight through VTEX, without an external payment gateway.
- Through a payment gateway, such as PagSeguro.

The two ways of configuration are described below.

## Setting it up without an external payment gateway

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the **Gateway Affiliations** tab.
3. Click on **+**.
4. Select one of the **Bank Slip** options.
5. Fill out the form fields according to the data provided by your bank - each bank requires different information. So, always check with the bank which are the mandatory information.
6. Click on **Save**.

## Setting it up with an external payment gateway

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the **Gateway Affiliations** tab.
3. Click on **+**.
4. Select one of the options in **Other** (to configure payment through PagSeguro, select the "PagSeguro without redirect" option).
5. Fill out the form fields according to the data provided by your payment gateway - each gateway requires different information. So, always check with the payment gateway which are the mandatory information.
6. Click on **Save**.

After the configuration at Gateway Affiliations, both for external gateway or direct configuration options, you need to configure the payment condition.

## How to set up the payment condition

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Access the **Payment Conditions** tab.
3. Click on **+**.
4. In **Slip**, select the **Bank Slip** option.
5. Fill out the name, select the gateway affiliation configured above, and decide wheter you would like to use the [special condition](/en/tutorial/special-conditions) configuration.
6. Click on **Save**.

After this last configuration, this form of payment will be available at the checkout of the store.
