---
title: 'Setting up payments with SIBS'
id: sNLPtJlAMnDpq40CCPKNo
status: PUBLISHED
createdAt: 2023-04-06T18:57:27.591Z
updatedAt: 2024-01-25T19:05:01.739Z
publishedAt: 2024-01-25T19:05:01.739Z
firstPublishedAt: 2023-04-06T19:07:28.327Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-sibs
legacySlug: setting-up-payments-with-sibs
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the SIBS payment provider. With this provider, your store can make sales through SIBS credit card, Notes Payable, MBWay and MultiBanco.

To configure SIBS, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **SIBS** in the search bar and click on the name of the provider.
4. Fill in the __App key__ and __App token__ fields with data provided by SIBS.
5. If you wish to modify the identification name to be displayed for the SIBS provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. If an alert message appears indicating the need to install the app, click on the **Install app** button and follow the installation instructions.
9. Click `Save`.

To configure the payment methods to be processed by SIBS, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, SIBS may take up to 10 minutes to appear at your store's checkout as a payment option.
