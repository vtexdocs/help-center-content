---
title: 'Setting up payments with Khipu'
id: RcHQjURWDXa0doL15DiUj
status: PUBLISHED
createdAt: 2023-03-24T19:34:06.675Z
updatedAt: 2024-01-24T17:53:53.676Z
publishedAt: 2024-01-24T17:53:53.676Z
firstPublishedAt: 2023-03-30T14:08:54.819Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-khipu
legacySlug: setting-up-payments-with-khipu
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Khipu payment provider. With this provider, your store can make sales through Notes Payable.

To configure Khipu, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Khipu__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by Khipu.
5. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Scheduled: Schedules The Automatic Settlement__: By selecting this option, the field __Scheduled time frame in hours for automatic settlement__ will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>  6. If an alert message appears indicating the need to install the app, click on the **Install app** button and follow the installation instructions.</ui>

<ui>  7. Click on **Save.**</ui>

## Setting up Notes Payable

If you have not yet configured the Notes Payable as a payment method in other connectors in your store, go to [Setting up payments with Notes Payable](/en/tutorial/setting-up-payments-with-notes-payable).

## Setting up payment condition 

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. On __Custom Payment__, click the button corresponding to the name used for the Notes Payable payment method (configured in the previous section).
4. Activate the condition in the __Status__ field.
5. On __Process with affiliation__, select __srconsultores-khipu-v0__.
6. If you wish, you can also configure [payment special conditionso](/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, Khipu may take up to 10 minutes to appear at your store's checkout as a payment option.
