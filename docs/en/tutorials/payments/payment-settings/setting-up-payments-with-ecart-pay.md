---
title: 'Setting up payments with Ecart Pay'
id: 1ZkCLbvnU2HYFgrPOyYhtV
status: PUBLISHED
createdAt: 2025-02-03T21:53:31.510Z
updatedAt: 2025-02-04T12:32:20.399Z
publishedAt: 2025-02-04T12:32:20.399Z
firstPublishedAt: 2025-02-03T22:15:02.210Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-ecart-pay
legacySlug: setting-up-payments-with-ecart-pay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the Ecart Pay payment provider. Through this provider, your store can make sales using different payment methods, such as Ecart Pay.

To configure Ecart Pay, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the `New Provider button.
3. Type the name **Ecartpay** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with data provided by your account Ecart Pay.
5. If you wish to modify the identification name to be displayed for the Ecart Pay provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
<ul>
    	<li>**Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform`s default behavior).</li>
    	<li>**Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.</li>
    	<li>**Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".</li>
    	<li>**Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.</li>
</ul>

8. If you want to use [payment split](If you want to use payment split in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).) in your store, select the option Enable payout split and send payment recipients and indicate the Accountable for payment processing charges and Accountable for chargebacks (marketplace, sellers or marketplaces and sellers).instructions.
9. Click `Save`.

## Setting up payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click **Ecart Pay**.
4. Activate the condition in the **Status** field.
5. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
6. If you wish, you can also configure [payment special conditions](/en/tutorial/special-conditions--tutorials_456).
7. Click `Save`.

After following the indicated steps, Ecart Pay may take up to 10 minutes to appear at your store`s checkout as a payment option.

