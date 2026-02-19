---
title: 'Setting up payments with Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: PUBLISHED
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2025-10-17T12:55:54.822Z
publishedAt: 2025-10-17T12:55:54.822Z
firstPublishedAt: 2024-09-13T17:39:52.427Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-nuvei
legacySlug: setting-up-payments-with-nuvei
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with Nuvei. Through this provider, your store can make sales with credit, debit cards, OXXO, PSE, notes payable, among others.

To use Nuvei, follow the steps below:

- [Configure Nuvei on VTEX](#configuring-nuvei-provider-on-vtex)
- [Configure the DMN Url in the Cloud](#configurar-dmn-url-in-the-cloud)

## Configuring Nuvei provider on VTEX

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the **New Provider** button.
3. Type the name **nuvei-payment-provider** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with with your Nuvei account information.
5. If you wish to modify the identification name to be displayed for the Nuvei provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. In the **Automatic settlement** field, select one of the following option:
- **Use behavior recommended by the payment processor**: Capture is not automatic; it is scheduled according to the period specified by the acquirer. The acquirer indicates whether the payment has been authorized and can determine or recommend a number of days for the capture upon payment authorization. (This is the platform's default behavior).
- **Automatic capture immediately after payment authorization**: Capture is automatically performed right after payment authorization, even if the transaction includes an anti-fraud analysis.
- **Automatic capture immediately after anti-fraud analysis**: Capture is automatically performed right after payment authorization and anti-fraud analysis. If you select this behavior and do not have anti-fraud analysis, the system will perform the payment capture as in "Automatic capture immediately after payment authorization".
- **Disabled**: Capture takes place only when the order is invoiced. If you select this behavior, it is important to pay attention to the invoicing time, as invoicing can exceed the capture time agreed with the payment provider and lead to the cancellation of the transaction.

8. If you want to use [payment split](/en/docs/tutorials/split-payment) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charge** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
9. To fill in the fields **Merchant Id**, **Merchant Site Id** and **Client Secret** (Secret Key), access the information available in **Settings > My Integration Settings** within the control panel of your account in the Nuvei environment.

> ⚠️ Nuvei has specific credentials (Merchant Id, Merchant Site Id and Client Secret) for each type of environment. Access the test [(Integration)](sandbox.nuvei.com) and [Live](cpanel.nuvei.com) environments to identify the credentials relating to each of them.

10. In **Environment**, select whether you want to configure the Nuvei provider in the **Integration** or **Live** environment.
11. In **Test 3ds challenge Integration only**, if you have selected the test environment (**Integration**) it is possible to perform 3DS security tests using the **Force 3ds Challenge**, **Force 3ds Frictionless** or **User cardHolder name** options. For more information about the tests, access the [Nuvei](https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios) documentation.

> ⚠️ Whenever the provider's **Environment** is configured as **Live**, the option selected for the **Test 3ds challenge Integration only** field must be **User cardHolder name**.

12. In **3DS**, select whether you want to use 3DS authentication.
13. In **Marketplace (Split) - Payaut API Key**, fill in as indicated by the provider.
14. Click `Save`.

## Configuring DMN Url on Nuvei

To configure DMN Url information on Nuvei, follow the steps below:

1. Access your Nuvei test environment ([Integration](sandbox.nuvei.com)) or [Live](cpanel.nuvei.com).
2. On the **Settings** menu, click **My Integration settings**.
3. In **DMN URL**, replace the **{account-name}** field with the name of your VTEX account.

`https://master--{account-name}.myvtex.com/_v/api/nuvei-payment-provider/v0/dmn`

To configure the payment methods to be processed by Nuvei, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, Nuvei provider may take up to 10 minutes to appear at your store's checkout as a payment option.
