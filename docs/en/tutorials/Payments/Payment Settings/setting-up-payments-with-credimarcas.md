---
title: 'Setting up payments with Credimarcas'
id: 78855lTT6A1vX2wFURmxV
status: PUBLISHED
createdAt: 2023-12-18T13:12:50.542Z
updatedAt: 2023-12-18T14:09:15.538Z
publishedAt: 2023-12-18T14:09:15.538Z
firstPublishedAt: 2023-12-18T14:09:15.538Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-credimarcas
locale: en
legacySlug: setting-up-payments-with-credimarcas
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Credimarcas payment provider. With this connector, your store can make sales through Notes Payable and Private Labels cards.

To configure Credimarcas provider, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __credimarcas__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Credimarcas.
5. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Scheduled: Schedules The Automatic Settlement__: By selecting this option, the field __Scheduled time frame in hours for automatic settlement__ will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>  6. In <b>Type Payment</b>, select whether the payment will be made via "Payment App" or "Redirect".</ui>

<ui>  7. If an alert message appears indicating the need to install the app, click on the <b>Install app</b> button and follow the installation instructions.</ui>

<ui>  8. Click on <b>Save.</b></ui>

## Setting up Notes Payable

>⚠️ If you have not yet configured the Notes Payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable).

To use Credimarcas with notes payable, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the Notes Payable payment method (previously configured).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __confepartnerco-credimarcas-v0__.
6. If you wish, you can also configure [payment special conditionso](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

## Setting up Private label

To use Credimarcas with private labels cards, access [Setting up Private Label payments](https://help.vtex.com/en/tutorial/setting-up-private-label-payments--428FgVdSGQUeAOoogkaIw4).

After following the indicated steps, Credimarcas connector may take up to 10 minutes to appear at your store's checkout as a payment option.
