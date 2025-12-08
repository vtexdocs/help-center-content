---
title: 'Setting up payments with CieloEcommerce'
id: 6zuELBqEo0QzApbU4l7L4
status: PUBLISHED
createdAt: 2023-09-18T14:07:22.540Z
updatedAt: 2025-04-09T19:25:40.961Z
publishedAt: 2025-04-09T19:25:40.961Z
firstPublishedAt: 2023-09-18T15:29:57.321Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cieloecommerce
legacySlug: setting-up-payments-with-cieloecommerce
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the CieloEcommerce. With this integration, your store can make sales through credit, debit, private labels and cobranded cards, bank invoices, PIX, among others.

To configure CieloEcommerce, follow the steps below:
1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the **New Provider** button.
3. Type the name **CieloEcommerce** in the search bar and click on the name of the provider.
4. In **Provider Authorization**, fill in the **App key** and **App token** fields with **MerchantID** and **MerchantKey** provided by CieloEcommerce.
5. If you wish to modify the identification name to be displayed for the CieloEcommerce provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic Information**.
6. In **Payment Control**, select whether you want to activate the provider in a test environment by clicking **Enable test mode**.
7. If you want to use [Payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option **Enable payout split and send payment recipients** and indicate the **Accountable for payment processing charges** and **Accountable for chargebacks** (marketplace, sellers or marketplaces and sellers).
8. In **Integration**, select whether the connector will be used as **Adquirencia** or **Gateway**.
9. In **Provider**, select the acquirer to be used with the CieloEcommerce connector.
10. In **DaysToInvoiceCancel**, select the desired number of days to cancel the invoice.
11. In **IsSplit**, choose whether the split option will be available.
12. In **useCieloMDR**, select the option configured in the CieloEcommerce provider.
13. In **UseMpi**, choose whether transactions will be authenticated (3DS 2.0). This field is mandatory for the debit payment type. If you select "True", go to Step 14. If you select "False", go to Step 15.
14. Fill in the **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, and **MpiEstablishmentCode** fields with you Mpi access data.
15. In **DataOnly**, select the option configured in the CieloEcommerce provider.
16. In **SoftDescriptor**, indicate the information to be displayed to identify the transaction carried out in your store.
17. In **UseAntifraudSolution**, select the desired option.
18. In **AntifraudProvider**, select the antifraud provider you want to use with CieloEcommerce.

> ⚠️ Check with Cielo whether the anti-fraud options in CieloEcommerce are already available for use. If still under development, both fields described in step 15 must be left blank. For more information about using anti-fraud options in your store, visit [Configuring the anti-fraud](/en/tutorial/how-to-configure-the-anti-fraud).

19. In **Antifraud** and **AntifraudSequenceCriteria**, select the options according to information from CieloEcommerce antifraud.
20. In **CaptureOnLowRisk** and **VoidOnHighRisk**, select the options configured in the CieloEcommerce provider.
21. In **CustomMdds**, select the options according to information from CieloEcommerce anti-fraud.
22. In **Captura**, select the period in which payment capture should be requested. Standard time will be held four days after authorization.
23. Select the **UseVerifyCard**, **AcceptInternationalCard_**, **AcceptPrePaidCard** and **CancelRefundType** fields according to your settings in CieloEcommerce.
24. In **CieloLIOClientId**, fill in according to information from the CieloEcommerce provider.
25. Click **Save**.

To configure the payment methods to be processed by CieloEcommerce, access [Configuring Payment Conditions](/en/tutorial/how-to-configure-payment-conditions--tutorials_455#).

To set special conditions on payment methods, go to [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456#).

After following the indicated steps, CieloEcommerce connector may take up to 10 minutes to appear at your store's checkout as a payment option.
