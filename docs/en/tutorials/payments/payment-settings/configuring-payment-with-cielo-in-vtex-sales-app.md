---
title: 'Configuring payment with Cielo in VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2026-02-02T20:58:47.728Z
publishedAt: 2025-07-17T20:58:47.728Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-cielo-in-vtex-sales-app
legacySlug: configuring-payment-with-cielo-in-vtex-sales-app
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Cielo. Through this connector, your store can offer payment transactions in physical stores via the **VTEX Sales App**, using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/docs/tracks/vtex-sales-app-getting-started-and-setting-up).

> ℹ️ To use the Cielo provider in your store through other online sales channels (except **VTEX Sales App**), visit [Setting up payments with CieloEcommerce](https://help.vtex.com/docs/tutorials/setting-up-payments-with-cieloecommerce).

To use the Cielo provider in the **VTEX Sales App**, you need to:

- [Configure keys in the Cielo environment](#configure-keys-in-the-cielo-environment)
- [Configure Cielo connector (VTEX Sales App) on VTEX](#configure-cielo-connector-vtex-sales-app-on-vtex)
- [Configure payment condition](#configure-payment-condition)

> ⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Cielo account for the latest information.

## Configure keys in the Cielo environment

The following steps describe the minimum configurations to be carried out so that the Cielo connector is properly configured. Other personalized settings applied to customers, enabling specific payment methods or particular features of the platform, must be carried out in accordance with Cielo's documentation.

1. Access the [Cielo developer portal](https://desenvolvedores.cielo.com.br/api-portal/en) to create a new account.

    > ⚠️ The Cielo developer portal allows the user to obtain information on all the keys necessary to configure the connection between VTEX and Cielo Lio. We recommend that the procedure below be carried out by a user who already has access to the other keys in their Cielo account.

2. Log in with your Cielo account.
3. Request the creation of SalesApp keys through the link [https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108](https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108) or by accessing **Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota**.

    > ℹ️ The keys will be available on the Cielo developer portal within 2 business days.

4. Enter the following data:

    - **Subject:** Request for production keys.
    - **PDV Name:** SalesApp.

5. Send the request by clicking the confirmation button.

## Configure Cielo connector (VTEX Sales App) on VTEX

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the providers screen, click the **New Provider** button.
3. Type the name **CieloEcommerce** in the search bar and click on the name of the provider.
4. In **App Key**, enter the name of your **MerchantID** provided by Cielo.
5. In **App token**, insert the **Client token** key generated on the Cielo developer portal.
6. If you wish to modify the identification name to be displayed for the Cielo provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic information**.
7. In **Payment Control**, disable the test environment by unchecking the **Enable test mode** option.
8. Leave the option **Enable payout split and send payment recipients** unchecked.   
9. In **Integration**, select the option **Adquirencia** (Cielo 3.0 customers) or **Gateway** (Braspag customers).
10. In **Provider**, select the option **Cielo** (Cielo 3.0 customers) or **Cielo30** (Braspag customers).
11. In **IsSplit**, select the **False** option.
12. In **useCieloMDR**, select the **Not Defined** option.
13. In **UseMpi**, select the **False** option.
14. Leave the following fields blank: **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, **MpiEstablishmentCode** and **SoftDescriptor**.
15. In **AntifraudProvider**, select the **Not Defined** option.  
16. In **Antifraud**, select the **Not Defined** option.
17. In **AntifraudSequenceCriteria**, select the **Not Defined** option.
18. Under **Captura**, select the **Imediatamente** option.
19. In **UseVerifyCard**, select the **False** option.
20. In **AcceptInternationalCard**, select the **True** option.
21. In **AcceptPrePaidCard**, select the **True** option.
22. In **SaveCard**, select the **False** option.
23. In **CancelRefundType**, select the **Automático Sempre que possível** option.
24. In **CieloLIOClientId**, fill in the Lio key provided by Cielo.
25. Click **Save**.

## Configure payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with provider**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).
8. Click `Save`.

After completing these steps, the Cielo provider may take up to 10 minutes to appear as a payment option in your store's **VTEX Sales App**.
