---
title: 'Setting up MercadoPagoV2 sub-acquirer'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2023-03-22T18:35:39.911Z
publishedAt: 2023-03-22T18:35:39.911Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-mercadopagov2-sub-acquirer
locale: en
legacySlug: setting-up-mercadopagov2-sub-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

With the VTEX gateway, you can configure the MercadoPagoV2 [sub-acquirer](https://help.vtex.com/en/tutorial/what-is-a-sub-acquirer#). Through it, your store can receive payments using traditional methods, such as: boleto, PIX, debit and credit cards, as well as exclusive methods of Mercado Pago, such as: MercadoPagoOff, MercadoPagoPro and MercadoPagoWallet.

<div class="alert alert-warning">
  The sub-acquirers <strong>MercadoPago</strong> and <strong>MercadoPagoV1</strong> do not allow receive through the PIX. This is an exclusive feature of <strong>MercadoPagoV2</strong>.
</div>

## Setting up MercadoPagoV2 gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Gateway affiliations__ tab, click on the __"+" button__.
3. Click on the __MercadoPagoV2__ connector.
4. Fill in the __Application Key__ and __Application Token__ fields with the data provided by Mercado Pago.
5. In the __Prazo de vencimento do boleto__ (“Boleto expiration date”), choose the number of days (counted from the creation of the boleto) that your customer will have to make the payment.
6. Fill in the name of your store in the __Nome da loja__ (“Store name”). Remember that this is the information that will be described in the Beneficiário field of the boleto or on the customer’s card bill.
7. In __Parcelamento máximo__ (“Max installments”), choose the maximum number of installments sent to MercadoPago.
8. In __Categoria principal da loja__ (“Main Category”), choose the category that best fits your store.
9. In the field __Reembolso automático / manual__ (“Automatic / manual refund”), choose whether the customer will be refunded automatically or manually in case of order cancellation.
10. In __Modo binário__ (“Binary mode”), select “Yes” or “No”. Selecting “Yes” indicates that the payment approval process takes place instantly and can be approved or declined. Selecting “No” indicates that the payment can be in “pending” status (if it requires any action by the buyer) or “in process” (if manual review is required).
11. In __Métodos de pagamento excluídos__ (“Excluded payment methods”), describe the payment methods you do not want to use through MercadoPagoV2 (optional). If you choose to leave this field blank, all available payment methods from MercadoPagoV2 will be available in your store. 
12. In __Tipos de pagamento excluídos__ (“Excluded payment types”), describe the specific credit and debit brands (Visa, Mastercard, among others) that you do not want to use through MercadoPagoV2 (optional). If you choose to leave this field blank, all available payment types from MercadoPagoV2 will be available in your store. 
13. In __Modo de processamento__ (“Processing Mode”), choose how you want to use MercadoPagoV2: as a sub-acquirer or as a gateway. For more information, access [What is a sub-acquirer?](https://help.vtex.com/en/tutorial/o-que-e-um-subadquirente--64aX6PeRQQ66O8uCqo0W4q#) and [What is a payment gateway?](https://help.vtex.com/en/tutorial/o-que-e-um-gateway-de-pagamentos--2KH9Wdi7F6swOU4amECSOk#). 
14. In the __Integrator ID__ option, indicate the identifier code of the developer or agency that performs the Mercado Pago configuration.
15. In the __Moeda__ (“Currency”) option, choose whether the currency used for payment will be “Local” (each country) or “US Dollar” (USD).
16. Click on __Salvar__ (“Save”).

## Setting up the payment condition
After following the steps indicated above, MercadoPagoV2 will be configured in your store. Thus, while you're registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with MercadoPagoV2).

For more on how to set up payment conditions, access [configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento#).

## Setting up exclusive payment methods

To learn more about how to configure exclusive payment methods for Mercado Pago, access [setting up Mercado Pago Offline and Wallet as payment methods](https://help.vtex.com/en/tutorial/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

For more information about the integration with Mercado Pago, access the [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/en/guides/plugins/unofficial/vtex/gateway-affiliations).
