---
title: 'Setting up payments with Pagoplux'
createdAt: 2026-07-08T00:00:00.000Z
updatedAt: 026-07-08T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-pagoplux
locale: en
hidden: false
---

At VTEX, it is possible to integrate with the Pagoplux payment provider. Through this provider, your store can make sales using different payment methods, such as Visa, Mastercard, American Express, Diners e Discover.

To configure Pagoplux, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the provider's screen, click the `New Provider` button.
3. Type the name **Pagoplux**  in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App token** fields with data provided by Pagoplux.
5. If you wish to modify the identification name to be displayed for the Pagoplux provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
7. In **Provider Fields**, select or complete the fields **Merchant's custom field** and **Merchant's custom select field** according to the provider's instructions.
8. Click `Save`.

To configure the payment methods to be processed by Pagoplux, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Pagoplux connector may take up to 10 minutes to appear at your store's checkout as a payment option.
