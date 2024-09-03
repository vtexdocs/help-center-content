---
title: 'Setting up payments with Retrypay'
id: 3QGioVKVI1Qnk3JbbJlJVY
status: PUBLISHED
createdAt: 2023-03-30T19:35:06.661Z
updatedAt: 2024-02-08T14:23:02.038Z
publishedAt: 2024-02-08T14:23:02.038Z
firstPublishedAt: 2023-03-30T20:01:51.283Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-retrypay
locale: en
legacySlug: setting-up-payments-with-retrypay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Retrypay payment provider. With this provider, your store can make sales through Notes Payable and Retrypay.

To configure Retrypay, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __RetryPay__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__, __Tenant__, __Retripay Merchant API Key__ and __Retripay Hook Token__ fields with data provided by Retrypay.
5. Under __Payment Method__, choose one of two options: __Redirect__ or __Payment App__.
6. Under __Environment__, choose one of two options: __Demo__ or __Production__.
7. Click `Save`.

## Setting up payment condition Notes Payable

If you want to use Retrypay with a Notes Payable and you have not yet configured the Notes Payable as a payment method in other providers in your store, go to [Setting up payments with Promissory](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable).

Then, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the Notes Payable payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __retrypaypartnermx-payment-provider-v1__.
6. If you wish, you can also configure [payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

## Setting up payment condition Retrypay

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Clique em __RetryPay__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you wish, you can also configure [payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Retrypay may take up to 10 minutes to appear at your store's checkout as a payment option.
