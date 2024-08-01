---
title: 'Setting up payments with MercadoPagoV2'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2024-03-11T18:11:39.540Z
publishedAt: 2024-03-11T18:11:39.540Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-mercadopagov2-sub-acquirer
locale: en
legacySlug: setting-up-mercadopagov2-sub-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider MercadoPagoV2. Through it, your store can receive payments using traditional methods, such as: bank slip, PIX, debit and credit cards, as well as through exclusive Mercado Pago methods, such as: MercadoPagoOff, MercadoPagoPro and MercadoPagoWallet.

To configure MercadoPagoV2, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __MercadoPagoV2__ in the search bar and click on the name of the provider.
4. In __Provider Authorization__, fill in the registration fields __App key__ and __App token__ with the data provided by Mercado Pago.
5. If you wish to modify the identification name to be displayed for the MercadoPagoV2 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. In the __Prazo de vencimento do boleto__ (“Boleto expiration date”), choose the number of days (counting from the creation of the invoice) that your customer will have to make the payment.
8. In __Nome da loja__ ("Store name"), enter your company name. This information will be described in the Beneficiary field of the bill or on the customer's card invoice.
9. In __Parcelamento máximo__ ("Max installments"), choose the maximum number of installments sent to MercadoPago.
10. In __Suporte 3DS 2.0__ ("3DS 2.0 Support"), select "Sí" if you want to enable 3DS security validation. For this protocol to work correctly, make sure that the __Mercado Pago Payment app__ is already installed in your store and that the __Modo binário__ ("Binary Mode") field (step 14) is selected as __No__.
11. In __Categoria principal da loja__ ("Main store category"), choose the category of your store's industry.
12. In __Compartilhamento de categoria (loja ou produto) por transação__ ("Category sharing (store or product) per transaction"), select whether you want to share store or product category data with Mercado Pago in each transaction.
13. In the option __Reembolso automático / manual__ ("Automatic / manual refund"), choose whether the customer will be refunded automatically or manually in case of order cancellation.
14. In __Modo binário__ ("Binary Mode"), indicate whether the store should accept pending payments. Selecting "Yes" indicates that the payment approval process occurs instantly, and can be approved or rejected. Selecting "No" defines that the payment can remain in "pending" status (if it requires any action from the buyer) or "in process" (if manual review is required).
15. In __Métodos de pagamento excluídos__ ("Excluded payment methods"), describe the payment methods you do not want to use through MercadoPagoV2 (optional). If you choose to leave this field blank, all available payment methods from MercadoPagoV2 will be available in your store.
16. In __Tipos de pagamento excluídos__ ("Excluded payment types"), describe the specific credit and debit brands (Visa, Mastercard, among others) that you do not want to use through MercadoPagoV2 (optional). If you choose to leave this field blank, all available payment types from MercadoPagoV2 will be available in your store.
17. In __Modo de processamento__ ("Processing Mode"), choose how you want to use MercadoPagoV2: as a subacquirer (aggregator) or gateway. For more information, access [What is a sub-acquirer?](https://help.vtex.com/en/tutorial/what-is-a-sub-acquirer--64aX6PeRQQ66O8uCqo0W4q) and [What is a payment gateway?](https://help.vtex.com/en/tutorial/what-is-a-payment-gateway--2KH9Wdi7F6swOU4amECSOk).
18. In the __Integrator ID__ option, indicate the identifier code of the developer or agency that performs the Mercado Pago configuration.
19. In the __Moeda__ ("Currency") option, choose whether the currency used for payment will be "Local" (each country) or "US Dollar" (USD).
20. The __Merchant Account ID__ field identifies the merchant account. It is not necessary to fill it out.
21. In __Prazo de captura de pagamento aprovado__  ("Approved payment capture deadline"), select the desired deadline for payment capture.
22. Em __Tempo para cancelar compras de um carrinho abandonado__ ("Time to cancel purchases from an abandoned cart"), enter the time interval that must be waited until the enabled payment methods are not available to make the purchase.
23. Click __Save__.

## Setting up payment conditions

To configure the default payment methods to be processed by MercadoPagoV2, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions).

To set special conditions on payment methods, go to [Configuring payment special conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456#).

## Setting up exclusive payment methods

To configure exclusive Mercado Pago payment methods, go to [setting up Mercado Pago Offline and Wallet as payment methods](https://help.vtex.com/en/tutorial/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

For more information about integration with Mercado Pago, access the [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/en/guides/plugins/unofficial/vtex/gateway-affiliations).
