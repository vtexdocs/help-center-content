---
title: 'Setting up payments with Fpay'
id: 6BaLIO2R7tOh6E1MmNoDXj
status: PUBLISHED
createdAt: 2022-10-18T19:13:32.326Z
updatedAt: 2024-01-24T17:26:52.492Z
publishedAt: 2024-01-24T17:26:52.492Z
firstPublishedAt: 2022-10-18T19:42:03.523Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-fpay
locale: en
legacySlug: setting-up-payments-with-fpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Fpay payment provider. With this provider, your store can make sales through the Notes Payable.

To set up Fpay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Fpay__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Fpay.
5. Click on `Save`.

## Setting up Notes Payable

If you have not yet configured the Notes Payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable).

## Setting up payment condition 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the Notes Payable payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __fpaypartnercl-fpay-v0__.
6. If you wish, you can also configure [payment special conditionso](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, Fpay connector may take up to 10 minutes to appear at your store's checkout as a payment option.
