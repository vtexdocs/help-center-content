---
title: 'Setting up payments with MSC-Payment'
id:
status: PUBLISHED
createdAt: 2026-16-06T00:00:00.000Z
updatedAt: 2026-16-06T00:00:00.000Z
publishedAt: 2026-16-06T00:00:00.000Z
firstPublishedAt: 2026-16-06T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-msc-payment
legacySlug: setting-up-payments-with-msc-payment
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the MSC-Payment payment provider. Through this provider, your store can make sales using different payment methods, such as MSC Payment, Credito, C2P, P2C, Credito Inmediato, Zelle e Crypto.

To configure MSC-Payment, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **MSC-Payment** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the registration fields **App key** and **App token** with the data provided by MSC-Payment.
5. If you wish to modify the identification name to be displayed for the MSC-Payment provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, complete the **tasaCambio** field with your MSC-Payment information.
9. Click `Save`.

To configure the payment methods to be processed by MSC-Payment, access [Configuring Payment Conditions](https://help.vtex.com/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

After following the indicated steps, MSC-Payment connector may take up to 10 minutes to appear at your store's checkout as a payment option.
