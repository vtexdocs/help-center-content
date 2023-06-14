---
title: 'Setting up payments with Fpay'
id: 6BaLIO2R7tOh6E1MmNoDXj
status: PUBLISHED
createdAt: 2022-10-18T19:13:32.326Z
updatedAt: 2023-03-21T20:52:34.889Z
publishedAt: 2023-03-21T20:52:34.889Z
firstPublishedAt: 2022-10-18T19:42:03.523Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-fpay
legacySlug: setting-up-payments-with-fpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Fpay payment provider. With this connector, your store can make sales through the promissory.

To set up Fpay affiliation, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __Fpay__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Fpay.
5. Click on `Save`.

## Setting up Promissory

If you have not yet configured the promissory note as a payment method in other connectors in your store, go to [Setting up payments with Promissory](https://help.vtex.com/en/tutorial/setting-up-payments-with-promissory--5pW7avTwtyQcMu4uiW8quQ).

## Setting up payment condition 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the promissory note payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __fpaypartnercl-fpay-v0__.
6. If you wish, you can also configure [payment special conditionso](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, Fpay connector may take up to 10 minutes to appear at your store's checkout as a payment option.
