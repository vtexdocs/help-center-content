---
title: 'Setting up payments with DLocal Payments'
id: 50DpZAd6td8oJaAIzHfQB5
status: ARCHIVED
createdAt: 2023-04-03T13:40:15.432Z
updatedAt: 2024-10-03T15:14:29.291Z
publishedAt: 
firstPublishedAt: 2023-04-03T14:03:12.910Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-dlocal-payments
locale: en
legacySlug: setting-up-payments-with-dlocal-payments
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the DLocal Payments payment provider. With this provider, your store can make sales through credit, debit cards and bank invoice.

To configure DLocal Payments, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __DLocalPayments__ in the search bar and click on the name of the provider.
4. Fill in the __Application Key__ and __Application Token__ fields with data provided by DLocal Payments.
5. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Scheduled: Schedules The Automatic Settlement__: By selecting this option, the field __Scheduled time frame in hours for automatic settlement__ will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<ui>  6. If an alert message appears indicating the need to install the app, click on the <b>Install app</b> button and follow the installation instructions.</ui>

<ui>  7. Click on <b>Save.</b></ui>

To configure the payment methods to be processed by DLocal Payments, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, DLocal Payments connector may take up to 10 minutes to appear at your store's checkout as a payment option.
