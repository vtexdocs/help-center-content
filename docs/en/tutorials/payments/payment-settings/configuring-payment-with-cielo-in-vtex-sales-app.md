---
title: 'Configuring payment with Cielo in VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2025-07-17T20:58:47.728Z
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

At VTEX, it is possible to integrate with the payment provider Cielo. Through this connector, your store can offer payment transactions in physical stores (VTEX Sales App), using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/docs/tracks/vtex-sales-app-getting-started-and-setting-up).

> ℹ️ To use the Cielo provider in your store through other online sales channels (except VTEX Sales App), visit [Setting up payments with CieloEcommerce](/en/tutorial/setting-up-payments-with-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

To use the Cielo provider in the VTEX Sales App, you need to:

- [Configure keys in the Cielo environment](#configure-keys-in-the-cielo-environment)
- [Configure Cielo connector (VTEX Sales App) on VTEX](#configure-cielo-connector-vtex-sales-app-on-vtex)
- [Configure payment condition](#configuring-payment-condition)

> ⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Cielo account for the latest information.

## Configure keys in the Cielo environment

The following steps describe the minimum configurations to be carried out so that the Cielo connector is properly configured. Other personalized settings applied to customers, enabling specific payment methods or particular features of the platform, must be carried out in accordance with Cielo's documentation.

<blockquote><ui>1. Access the [Cielo developer portal](https://desenvolvedores.cielo.com.br/api-portal/en) to create a new account.</ui>

<blockquote><ui>> ⚠️ The Cielo developer portal allows the user to obtain information on all the keys necessary to configure the connection between VTEX and Cielo Lio. We recommend that the procedure below be carried out by a user who already has access to the other keys in their Cielo account.</blockquote>

<blockquote><ui>2. After logging in, request the creation of SalesApp keys through the link [https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108](https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108) or by accessing **Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota** inside the portal. Enter the following data: *Assunto: Solicitação de chaves de produção* and *Nome do PDV: SalesApp*.</ui> 

<blockquote><ui>> ℹ️ The keys will be available on the Cielo developer portal within 2 business days.</blockquote>

## Configure Cielo connector (VTEX Sales App) on VTEX

<blockquote><ui>1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the **New Provider** button.</ui>

<blockquote><ui>3. Type the name **CieloEcommerce** in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In **App Key**, enter the name of your **MerchantID** provided by Cielo.</ui>

<blockquote><ui>5. In **App token**, insert the **Client token** key generated on the Cielo developer portal.</ui>

<blockquote><ui>6. If you wish to modify the identification name to be displayed for the Cielo provider on the VTEX Admin screen, enter the information in the **Name** field in **Basic information**.</ui>

<blockquote><ui>7. In **Payment Control**, disable the test environment by unchecking the **Enable test mode** option.</ui>

<blockquote><ui>8. Leave the option **Enable payout split and send payment recipients** unchecked.</ui>   

<blockquote><ui>9. In **Integration**, select the option **Adquirencia** (Cielo 3.0 customers) or **Gateway** (Braspag customers).</ui>

<blockquote><ui>10. In **Provider**, select the option **Cielo** (Cielo 3.0 customers) or **Cielo30** (Braspag customers).</ui>

<blockquote><ui>11. In **IsSplit**, select the **False** option.</ui>

<blockquote><ui>12. In **useCieloMDR**, select the **Not Defined** option.</ui>

<blockquote><ui>13. In **UseMpi**, select the **False** option.</ui>

<blockquote><ui>14. Leave the following fields blank: **MpiClientId**, **MpiClientSecret**, **MpiMerchantName**, **MpiMCC**, **MpiEstablishmentCode** and **SoftDescriptor**.</ui>

<blockquote><ui>15. In **AntifraudProvider**, select the **Not Defined** option.</ui>  

<blockquote><ui>16. In **Antifraud**, select the **Not Defined** option.</ui>   

<blockquote><ui>17. In **AntifraudSequenceCriteria**, select the **Not Defined** option.</ui> 

<blockquote><ui>18. Under **Captura**, select the **Imediatamente** option.</ui>   

<blockquote><ui>19. In **UseVerifyCard**, select the **False** option.</ui>

<blockquote><ui>20. In **AcceptInternationalCard**, select the **True** option.</ui>

<blockquote><ui>21. In **AcceptPrePaidCard**, select the **True** option.</ui>

<blockquote><ui>22. In **SaveCard**, select the **False** option.</ui> 

<blockquote><ui>23. In **CancelRefundType**, select the **Automático Sempre que possível** option.</ui> 

<blockquote><ui>24. In **CieloLIOClientId**, fill in the Lio key provided by Cielo.</ui>   

<blockquote><ui>25. Click **Save**.</ui>

## Configuring payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with provider**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

After completing these steps, the Cielo provider may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.
