---
title: 'Configuring payment with Mercado Pago in VTEX Sales App'
id: 51fgSydGGOnlBdtwTfE8BE
status: PUBLISHED
createdAt: 2024-08-26T12:36:03.781Z
updatedAt: 2024-09-24T13:53:43.655Z
publishedAt: 2024-09-24T13:53:43.655Z
firstPublishedAt: 2024-08-26T18:37:41.187Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-mercado-pago-in-vtex-sales-app
legacySlug: configuring-payment-with-mercado-pago-in-vtex-sales-app
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Mercado Pago. Through this connector, your store can offer payment transactions in physical stores (VTEX Sales App), using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

<div class="alert alert-info">
To use the MercadoPagoV2 provider in your store through other online sales channels (except VTEX Sales App), visit <a href="https://help.vtex.com/en/tutorial/setting-up-mercadopagov2-sub-acquirer--1y6k8lCSzJYfPs2yObNFo4">Setting up payments with MercadoPagoV2</a>.
</div>

To use the MercadoPagoV2 provider in the VTEX Sales App, you need to:

- [Configure keys in the Mercado Pago environment](#configure-keys-in-the-mercado-pago-environment)
- [Configure MercadoPagoV2 connector (VTEX Sales App) on VTEX](#configure-mercadopagov2-connector-vtex-sales-app-on-vtex)
- [Install Mercado Pago Payment and Mercado Pago Instore applications in VTEX](#install-mercado-pago-payment-and-mercado-pago-instore-applications-in-vtex)
- [Configure payment condition](#configuring-payment-condition)

<div class="alert alert-warning">
Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Mercado Pago account for the latest information.
</div>

## Configure keys in the Mercado Pago environment

The following steps describe the minimum configurations to be carried out so that the MercadoPagoV2 connector is properly configured. Other personalized settings applied to customers, enabling specific payment methods or particular features of the platform, must be carried out in accordance with [Mercado Pago documentation](https://www.mercadopago.com.br/developers/en/docs/vtex/integration/create-gateway-affiliation-v2).

<blockquote><ui>1. Access the <a href="https://www.mercadopago.com.br/developers/en">Mercado Pago developer portal</a> to create a new account.</ui>

<blockquote><ui><div class="alert alert-warning">
The Mercado Pago developer portal allows the user to obtain information on all the keys necessary to configure the connection between VTEX and Mercado Pago. We recommend that the procedure below be carried out by a user who already has access to the other keys to their Mercado Pago account.
  </div></blockquote>

<blockquote><ui>2. After logging in, access the Mercado Pago <a href="https://www.mercadopago.com.br/developers/en/docs/vtex/additional-content/your-integrations/credentials">credentials documentation</a> to check how to obtain the <b>Public Key</b> and <b>Access Token</b> that will be used to configure MercadoPagoV2 on VTEX.</ui> 

## Configure MercadoPagoV2 connector (VTEX Sales App) on VTEX

<blockquote><ui>1. In the VTEX Admin, go to <b>Store Settings > Payment > Providers</b>, or type <b>Providers</b> in the search bar at the top of the page.</ui>

<blockquote><ui>2. On the providers screen, click the <b>New Provider</b> button.</ui>

<blockquote><ui>3. Type the name <b>MercadoPagoV2</b> in the search bar and click on the name of the provider.</ui>

<blockquote><ui>4. In <b>Provider Authorization</b>, 
enter the name of your <b>Public Key</b> located in the Mercado Pago developer portal.</ui>

<blockquote><ui>5. In <b>App token</b>, enter the key <b>Access Token</b> located in the Mercado Pago developer portal.</ui>  

<blockquote><ui>6. If you wish to modify the identification name to be displayed for the MercadoPagoV2 provider on the VTEX Admin screen, enter the information in the <b>Name</b> field in <b>Basic information</b>.</ui>

<blockquote><ui>7. In <b>Payment Control</b>, select whether you want to activate the provider in a test environment by clicking <b>Enable test mode</b>.</ui>

<blockquote><ui>8. In the <b>Prazo de vencimento do boleto</b> ("Boleto expiration date"), ddefine the value (in business days) for the purchase order to expire. If the client makes the payment after the deadline, the amount will be deposited in their Mercado Pago account.</ui>

<blockquote><ui>9. In <b>Nome da loja</b> ("Store name"), enter your company name. This information will be described on the customer's card invoice.</ui>

<blockquote><ui>10. In <b>Parcelamento máximo</b> ("Max installments"), choose the maximum number of installments available to make the payment. With Mercado Pago you can split purchases into up to 12 installments.</ui>  

<blockquote><ui>11. In <b>Suporte 3DS 2.0</b> ("3DS 2.0 Support"), select "Yes" if you want to enable 3DS security validation. For this protocol to work correctly, make sure that the <b>Mercado Pago Payment app</b> will be installed in your store and that the <b>Binario</b> (Paso 15), esté seleccionado como "No".</ui>  

<blockquote><ui>12. In <b>Categoria principal da loja</b> ("Main store category"), choose the category of your store's industry.</ui>

<blockquote><ui>13. In <b>Compartilhamento de categoria (loja ou produto) por transação</b> ("Category sharing (store or product) per transaction"), select the option <b>Categoria da loja</b>.</ui> 

<blockquote><ui>14. In the option <b>Reembolso automático / manual</b> ("Automatic / manual refund"), choose whether the customer will be refunded automatically or if you want to retain the amount paid so that the customer can use it for future purchases at the same store.</ui>

<blockquote><ui>15. In <b>Modo binário</b> ("Binary Mode"), indicate whether the store should accept pending payments. Selecting "No" indicates that the transaction will be pending for 48 hours or until payment is made, and the inventory related to this purchase will be removed for the same period of time. Selecting "Yes" allows you to reject the transactions and the stock will be automatically released. To use the functionality <b>Suporte 3DS 2.0</b> (Step 11), the <b>Modo binário</b> must be set to "No".</ui>     

<blockquote><ui>16. In <b>Métodos de pagamento excluídos</b> ("Excluded payment methods"), describe the payment methods you do not wish to offer through Checkout Pro; get more information at <a href="https://www.mercadopago.com.br/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods">Exclude payment types and methods</a>. If you choose to leave this field blank, all available MercadoPagoV2 payment methods can be used in your store.</ui>   

<blockquote><ui>17. In <b>Tipos de pagamento excluídos</b> ("Excluded payment types"), describe the specific brands of credit, debit, and ticket (Visa, Mastercard, and others) that you do not want to offer through Checkout Pro, learn more at <a href="https://www.mercadopago.com.br/developers/en/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods">Exclude payment types and methods</a>. If you choose to leave this field blank, all payment types available in MercadoPagoV2 can be used in your store.</ui>   

<blockquote><ui>18. En <b>Modo de processamento</b> ("Processing Mode"), 
select the option <b>Aggregator</b>.</ui>

<blockquote><ui>19. In <b>Integrator ID</b>, indicate the identifying code of the developer or agency that configures Mercado Pago.</ui>  

<blockquote><ui>20. The <b>Moeda</b> ("Currency") field identifies the currency used for payment in the store. It is not necessary to fill it.</ui>

<blockquote><ui>21. The <b>Merchant Account ID</b> field identifies the trading account. It is not necessary to fill it.</ui>     

<blockquote><ui>22. In <b>Prazo de captura de pagamento aprovado</b> ("Approved payment capture deadline"), select the desired deadline for payment capture.</ui>     
<blockquote><ui>23. In <b>Tempo para cancelar compras de um carrinho abandonado</b>, enter the time interval to wait until the enabled payment methods are not available to make the purchase.</ui>

<blockquote><ui>24. Click <b>Save</b>.</ui>

## Install Mercado Pago Payment and Mercado Pago Instore applications in VTEX

<div class="alert alert-warning">
  Before installing the <b>mercadopago.mercadopago-app</b> app, confirm the current version of the application with the Mercado Pago support team.
  </div>

1. In [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the command `vtex login accountname` to log in to your account.
2. Install the **mercadopago.mercadopago-app** using the command `vtex install mercadopago.mercadopago-app@{{current-app-version}}`. The information {{current-app-version}} must be replaced with the current version of the application, for example: `vtex install mercadopago.mercadopago-app@2.3.15`.
3. Install the **mercadopago.instore** application using the command `vtex install mercadopago.instore`.

## Configuring payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with provider**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

After completing these steps, the MercadoPagoV2 provider may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.
