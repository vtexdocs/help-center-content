---
title: 'Setting up payments with Yuno'
createdAt: 2023-04-14T12:42:43.736Z
updatedAt: 2026-11-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-yuno
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Yuno payment provider. With this provider, your store can make sales through cards (credit, debit, private label, co-branded), notes payable, Boletos, PIX, PSE, digital wallets such as Apple Pay, Google Pay, Samsung Pay and Mercado Pago, among others.

To configure Yuno, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Yuno** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Yuno.
5. If you wish to modify the identification name to be displayed for the Yuno provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In **Automatic Settlement** field, select one of the following options:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. In **Provider Fields**, configure the fields **Affiliation Name**, **Account ID**, **Public API Key**, **Private Secret Key**, **Main Account Name**, **Main Account App key**, **Main Account App token**, **Soft Descriptor**, **Create Customer**, **VTEX IO orderPlaced page URL**, **Vault Card for Order Modification**, **Enable Network Tokens**, **Use Corporate Buyer Data**, **Payment Mode**, **Headless Payment Handoff**, **Transaction Identification From**, **Antifraud Providers for Split Orders**, **Store Base Path**, **Send Order Sequence as Merchant Reference**, **Sales Channel Domains** and **Delay To Cancel** according to the provider's instructions.
9. Click `Save`.

To configure the payment methods to be processed by Yuno, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Yuno connector may take up to 10 minutes to appear at your store's checkout as a payment option.
