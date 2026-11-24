---
title: 'Setting up payments with BellunoPagamentos'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-bellunopagamentos
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Belluno Pagamentos payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, Elo, Hipercard, Cabal, American Express, and Pix.

To configure Belluno Pagamentos, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **BellunoPagamentos** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, click on **Authorize via OAuth**. At this point, you will be redirected to the Belluno Pagamentos page, where you must access your account and authorize the connection of VTEX to your Belluno Pagamentos account. After the authorization process, you will automatically return to the VTEX Admin.
5. If you wish to modify the identification name to be displayed for the Belluno Pagamentos provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement**, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. Click `Save`.

To configure the payment methods to be processed by Belluno Pagamentos, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, Belluno Pagamentos may take up to 10 minutes to appear at your store's checkout as a payment option.
