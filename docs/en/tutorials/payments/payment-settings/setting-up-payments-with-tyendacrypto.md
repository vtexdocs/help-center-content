---
title: 'Setting up payments with TiendaCrypto'
id: 7qC52v2j7q7B0YUtLnW2I9
status: PUBLISHED
createdAt: 2023-05-26T18:19:21.462Z
updatedAt: 2024-01-24T13:32:40.359Z
publishedAt: 2024-01-24T13:32:40.359Z
firstPublishedAt: 2023-05-26T18:43:41.573Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-tyendacrypto
legacySlug: setting-up-payments-with-tyendacrypto
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the TiendaCrypto payment provider. With this provider, your store can make sales through cryptocurrencies.

To configure TiendaCrypto, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __TiendaCrypto__ in the search bar and click on the name of the provider.
4. Click on __Authorize__. You will be redirected to the TiendaCrypto environment.
5. In the __Payment settlement__ field, select one of the available options:

    - __Use Behavior Recommended By The Payment Processor__: capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization.
    - __Immediate: Automatic Settlement After Payment Authorization__: capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
    - __Immediate: Automatic Settlement After Anti-Fraud Analysis__:  Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in __Immediate: Automatic Settlement After Payment Authorization__.
    - __Scheduled: Schedules The Automatic Settlement__: By selecting this option, the field __Scheduled time frame in hours for automatic settlement__ will be displayed, and it must be completed with the period in which the automatic capture will take place. This period must be in accordance with the limits allowed by the payment provider.
    - __Deactivated: Not Automatically Captured__: capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

<blockquote><ui>6. If an alert message appears indicating the need to install the app, click on the **Install app** button and follow the installation instructions.</ui>

<blockquote><ui>7. Click on **Save.**</ui>

## Setting up payment condition 

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the `+` button.
3. Click the __TiendaCrypto API Commerce__ payment method.
4. Activate the condition in the __Status__ field.
5. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
6. If you wish, you can also configure [payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
7. Click on `Save`.

After following the indicated steps, TiendaCrypto connector may take up to 10 minutes to appear at your store's checkout as a payment option.
