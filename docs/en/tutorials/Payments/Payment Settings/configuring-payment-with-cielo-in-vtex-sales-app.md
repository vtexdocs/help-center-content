---
title: 'Configuring payment with Cielo in VTEX Sales App'
id: 2p8rALKTNojgEl8zKn5BtG
status: PUBLISHED
createdAt: 2024-08-16T15:15:25.799Z
updatedAt: 2024-09-24T16:17:56.062Z
publishedAt: 2024-09-24T16:17:56.062Z
firstPublishedAt: 2024-08-16T18:22:08.305Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-cielo-in-vtex-sales-app
locale: en
legacySlug: configuring-payment-with-cielo-in-vtex-sales-app
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Cielo. Through this connector, your store can offer payment transactions in physical stores (VTEX Sales App), using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ To use the Cielo provider in your store through other online sales channels (except VTEX Sales App), visit [Setting up payments with CieloEcommerce](https://help.vtex.com/en/tutorial/setting-up-payments-with-cieloecommerce--6zuELBqEo0QzApbU4l7L4).

To use the Cielo provider in the VTEX Sales App, you need to:

- [Configure keys in the Cielo environment](#configure-keys-in-the-mercado-pago-environment)
- [Configure Cielo connector (VTEX Sales App) on VTEX](#configure-cielo-connector-vtex-sales-app-on-vtex)
- [Configure payment condition](#configuring-payment-condition)

>⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Cielo account for the latest information.

## Configure keys in the Mercado Pago environment

The following steps describe the minimum configurations to be carried out so that the Cielo connector is properly configured. Other personalized settings applied to customers, enabling specific payment methods or particular features of the platform, must be carried out in accordance with Cielo's documentation.

<blockquote><ui>1. Access the <a href="https://desenvolvedores.cielo.com.br/api-portal/en">Cielo developer portal</a> to create a new account.</ui>

<blockquote><ui>>⚠️ The Cielo developer portal allows the user to obtain information on all the keys necessary to configure the connection between VTEX and Cielo Lio. We recommend that the procedure below be carried out by a user who already has access to the other keys in their Cielo account.</blockquote>

<blockquote><ui>2. After logging in, request the creation of SalesApp keys through the link <a href="https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108">https://devcielo.zendesk.com/hc/pt-br/requests/new?ticket_form_id=526108</a> or by accessing <b>Suporte > Cielo Lio > Envie sua pergunta > Token de integração remota</b> inside the portal. Enter the following data: <i>Assunto: Solicitação de chaves de produção</i> and <i>Nome do PDV: SalesApp</i>.</ui> 

<blockquote><ui>>ℹ️ The keys will be available on the Cielo developer portal within 2 business days.</blockquote>

## Configure Cielo connector (VTEX Sales App) on VTEX

<blockquote><ui>1. In the VTEX Admin, go to <b>Store Settings > Payment > Providers</b>, or type <b>Providers</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the <b>New Provider</b> button.</ui>

<blockquote><ui>3. Type the name <b>CieloEcommerce</b> in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In <b>App Key</b>, enter the name of your <b>MerchantID</b> provided by Cielo.</ui>

<blockquote><ui>5. In <b>App token</b>, insert the <b>Client token</b> key generated on the Cielo developer portal.</ui>

<blockquote><ui>6. If you wish to modify the identification name to be displayed for the Cielo provider on the VTEX Admin screen, enter the information in the <b>Name</b> field in <b>Basic information</b>.</ui>

<blockquote><ui>7. In <b>Payment Control</b>, disable the test environment by unchecking the <b>Enable test mode</b> option.</ui>

<blockquote><ui>8. Leave the option <b>Enable payout split and send payment recipients</b> unchecked.</ui>   

<blockquote><ui>9. In <b>Integration</b>, select the option <b>Adquirencia</b> (Cielo 3.0 customers) or <b>Gateway</b> (Braspag customers).</ui>

<blockquote><ui>10. In <b>Provider</b>, select the option <b>Cielo</b> (Cielo 3.0 customers) or <b>Cielo30</b> (Braspag customers).</ui>

<blockquote><ui>11. In <b>IsSplit</b>, select the <b>False</b> option.</ui>

<blockquote><ui>12. In <b>useCieloMDR</b>, select the <b>Not Defined</b> option.</ui>

<blockquote><ui>13. In <b>UseMpi</b>, select the <b>False</b> option.</ui>

<blockquote><ui>14. Leave the following fields blank: <b>MpiClientId</b>, <b>MpiClientSecret</b>, <b>MpiMerchantName</b>, <b>MpiMCC</b>, <b>MpiEstablishmentCode</b> and <b>SoftDescriptor</b>.</ui>

<blockquote><ui>15. In <b>AntifraudProvider</b>, select the <b>Not Defined</b> option.</ui>  

<blockquote><ui>16. In <b>Antifraud</b>, select the <b>Not Defined</b> option.</ui>   

<blockquote><ui>17. In <b>AntifraudSequenceCriteria</b>, select the <b>Not Defined</b> option.</ui> 

<blockquote><ui>18. Under <b>Captura</b>, select the <b>Imediatamente</b> option.</ui>   

<blockquote><ui>19. In <b>UseVerifyCard</b>, select the <b>False</b> option.</ui>

<blockquote><ui>20. In <b>AcceptInternationalCard</b>, select the <b>True</b> option.</ui>

<blockquote><ui>21. In <b>AcceptPrePaidCard</b>, select the <b>True</b> option.</ui>

<blockquote><ui>22. In <b>SaveCard</b>, select the <b>False</b> option.</ui> 

<blockquote><ui>23. In <b>CancelRefundType</b>, select the <b>Automático Sempre que possível</b> option.</ui> 

<blockquote><ui>24. In <b>CieloLIOClientId</b>, fill in the Lio key provided by Cielo.</ui>   

<blockquote><ui>25. Click <b>Save</b>.</ui>

## Configuring payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with provider**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

After completing these steps, the Cielo provider may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.
