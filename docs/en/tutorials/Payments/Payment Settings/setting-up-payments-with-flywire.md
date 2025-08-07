---
title: 'Setting up payments with Flywire'
id: 12nQ0teCWM1UUtd2Fo6lzO
status: PUBLISHED
createdAt: 2023-04-03T13:05:10.955Z
updatedAt: 2025-02-03T22:10:40.395Z
publishedAt: 2025-02-03T22:10:40.395Z
firstPublishedAt: 2023-04-03T13:32:26.361Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-flywire
legacySlug: setting-up-payments-with-flywire
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Flywire payment provider. With this provider, your store can make sales through Notes Payable and Flywire.

To configure Flywire, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Flywire__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__, __Application Token__, __Recipient__, __Locale__, __Provider__ and __Callback version__ fields with data provided by Flywire.
5. Under __Environment__, choose one of two options: __Demo__ or __Production__.
6. Under __Display Payer Information__, choose one of two options: __True__ or __False__.
7. Click `Save`.

## Setting up payment condition Notes Payable

If you want to use Flywire with a note payable and you have not yet configured the note payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable--5pW7avTwtyQcMu4uiW8quQ).

Then, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the note payable payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __flywirepartnermx-payment-provider-config-v0__.
6. If you wish, you can also configure [payment special conditionso](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

## Setting up payment condition Flywire

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click __Flywire__.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
6. If you wish, you can also configure [payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Flywire may take up to 10 minutes to appear at your store's checkout as a payment option.
