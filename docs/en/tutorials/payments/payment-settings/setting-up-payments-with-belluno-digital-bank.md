---
title: 'Setting up payments with Belluno Digital Bank'
id: 4UI59HycmHE1CcUuGMgwbF
status: PUBLISHED
createdAt: 2025-09-25T17:47:12.117Z
updatedAt: 2025-09-25T18:12:24.646Z
publishedAt: 2025-09-25T18:12:24.646Z
firstPublishedAt: 2025-09-25T18:12:24.646Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-belluno-digital-bank
legacySlug: setting-up-payments-with-belluno-digital-bank
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Belluno Digital Bank. Through this provider, your store can make sales via credit cards and PIX.

To configure Belluno Digital Bank, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **BellunoDigitalBank** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click on **Authorize via OAuth**. At this point, you will be redirected to the Belluno Digital Bank page, where you must access your account and authorize the connection of VTEX to your Belluno Digital Bank account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the Belluno Digital Bank provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. Click **Save**.

To configure the payment methods to be processed by Belluno Digital Bank, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Belluno Digital Bank may take up to 10 minutes to appear at your store's checkout as a payment option.
