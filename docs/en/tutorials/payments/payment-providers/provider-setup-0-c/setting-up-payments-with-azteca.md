---
title: 'Setting up payments with Azteca'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-azteca
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Azteca payment provider. Through this provider, your store can make sales using different payment methods, such as American Express, Mastercard, Visa, BankInvoice, Promissories, Private Labels, Visa Electron, and Maestro.

To configure Azteca, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **Azteca** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App Token** fields with data provided by your Azteca account.
5. If you wish to modify the identification name to be displayed for the Azteca provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
7. Click `Save`.

To configure the payment methods to be processed by Azteca, access [Configuring Payment Conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/docs/tutorials/special-conditions).

After following the indicated steps, Azteca may take up to 10 minutes to appear at your store's checkout as a payment option.
