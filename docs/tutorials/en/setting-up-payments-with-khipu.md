---
title: Setting up payments with Khipu
id: RcHQjURWDXa0doL15DiUj
status: PUBLISHED
createdAt: 2023-03-24T19:34:06.675Z
updatedAt: 2023-03-30T14:08:54.819Z
publishedAt: 2023-03-30T14:08:54.819Z
firstPublishedAt: 2023-03-30T14:08:54.819Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-khipu
legacySlug: setting-up-payments-with-khipu
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Khipu payment provider. With this connector, your store can make sales through promissory.

To configure Khipu affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payments > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the `+` button.
3. Click on the __Khipu__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Khipu.
5. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Scheduled: Schedules The Automatic Settlement__: By selecting this option, the field __Scheduled time frame in hours for automatic settlement__ will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>  6. If an alert message appears indicating the need to install the app, click on the <b>Install app</b> button and follow the installation instructions.</ui>

<ui>  7. Click on <b>Save.</b></ui>

## Setting up Promissory

If you have not yet configured the promissory note as a payment method in other connectors in your store, go to [Setting up payments with Promissory](https://help.vtex.com/en/tutorial/setting-up-payments-with-promissory--5pW7avTwtyQcMu4uiW8quQ).

## Setting up payment condition 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the promissory note payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __srconsultores-khipu-v0__.
6. If you wish, you can also configure [payment special conditionso](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, Khipu connector may take up to 10 minutes to appear at your store's checkout as a payment option.
