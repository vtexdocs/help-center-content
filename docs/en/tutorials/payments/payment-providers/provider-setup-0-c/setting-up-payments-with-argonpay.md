---
title: 'Setting up payments with argonPAY'
id: 6Pktml6MJpdc7dNvJ4zwzI
status: PUBLISHED
createdAt: 2023-12-18T14:51:00.261Z
updatedAt: 2023-12-18T15:02:08.524Z
publishedAt: 2023-12-18T15:02:08.524Z
firstPublishedAt: 2023-12-18T15:02:08.524Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-argonpay
legacySlug: setting-up-payments-with-argonpay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the argonPAY payment provider. With this connector, your store can make sales through the argonPAY.

To configure argonPAY provider, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name **ArgonPay**  in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App Key** and **App token** fields with data provided by argonPay.
5. If you wish to modify the identification name to be displayed for the argonPay provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.


8. If you want to use [payment split](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option Enable payout split and send payment recipients and indicate the Accountable for payment processing charges and Accountable for chargebacks (marketplace, sellers or marketplaces and sellers).
9. Click `Save`.

## Setting up the payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **ArgonPay**.
4. Activate the condition in the **Status** field.
5. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
6. Click `Save`.

After following the indicated steps, argonPAY connector may take up to 10 minutes to appear at your store's checkout as a payment option.
