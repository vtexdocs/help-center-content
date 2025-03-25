---
title: 'Configuring Cielo acquirer'
id: 3avjZ7q65WcM02K8K0eeWu
status: ARCHIVED
createdAt: 2018-05-02T19:02:05.427Z
updatedAt: 2023-09-19T14:27:20.410Z
publishedAt: 
firstPublishedAt: 2018-05-02T19:49:35.201Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: configuring-cielo-acquirer
locale: en
legacySlug: configuring-cielo-acquirer
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Cielo is one of the largest [acquirers](/pt/tutorial/o-que-e-um-adquirente) in Brazil and it offers the most varied payment methods in its acquiring network. On the VTEX platform, you can integrate your store with this acquirer using the CieloV3 connector.

To configure Cielo, follow the steps below.

## Configuring Cielo gateway affiliation
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In __Gateway affiliations__, click on the __+__ button.
3. Select the __Cielo V3__ connector.
4. Click [here](https://developercielo.github.io/tutorial/habilitacao-meios-de-pagamento) to access the option __Habilitação dos Meios de Pagamento na Cielo__. On this link, you will find the documentation on how to enable payments with boleto bancário (Brazilian off-line payment method) and online debit.
5. Fill in the fields *MerchantId* and *MerchantKey* with the data provided by Cielo.
6. In __SoftDescriptor__, type the statement that will identify the transactions made in your store.
7. In __Provedor de boleto__, select the provider registered in the Cielo system for boleto bancário payments.
8. In __Provedor de débito__, select the provider registered in the Cielo system for online debit payments.
9. In __Boleto registrado__, toggle the button to select whether the boleto is registered or not.
10. In __Suporte [3DS2](https://help.vtex.com/pt/announcements/3ds2-authentication-flow-accept-online-payments-more-securely-1--6UdTjjVU1AcEQ2aE3Ftxsl?&utm_source=autocomplete)__, select whether you want to enable 3DS2. If you enable this option, you must fill in the fields below. These fields are mandatory and must contain information provided by Cielo. For more details, please refer to [this documentation from Cielo](https://developercielo.github.io/manual/3ds).

    - __EstablishmentCode:__ Code of the Cielo E-Commerce 3.0 merchant.
    - __MerchantName:__ Name of the merchant registered with Cielo.
    - __MCC:__ Merchant Category Code.
    - __ClientId:__ [Key ID](https://docscielo.github.io/Pilots/manual/appcielo3#cielo-oauth) for basic authentication in the Cielo API.
    - __ClientSecret:__ Secret key for basic authentication in the Cielo API.
    - __BpmpiAuth:__ Choose whether the transaction must undergo the authentication process. For example, if BpmpiAuth is not active, the transaction will not be authenticated by Cielo. Select __Yes__ if the transaction must go through the authentication process or __No__ if it must not go through the authentication process.
    - __BpmpiAuthNotifyOnly:__ Choose whether the card transaction will be submitted in "notification only" mode. This option is only valid for Mastercard cards. In this mode, the authentication process will not be triggered, but the data will be submitted to the card company.
    - __BpmpiAuthSuppresschallenge:__ Choose whether the challenge must be suppressed when it exists. If a transaction is authorized after ignoring the challenge, the liability rests with the merchant.

>⚠️ **Warning**: For the 3DS2 flow to work correctly, you need to install the payment app cielo-authentication-app.

11. In __Early capture__, select how soon the capture must take place (after transaction approval and anti-fraud analysis). You can also disable this option.
12. Click on __Save__.

## Configuring a payment condition
After following the steps above, Cielo will be configured in your store. When you create a payment condition, it will be available in the __Process with affiliation__ field. 

To learn how to configure payment conditions, please refer to [this article](/pt/tutorial/condicoes-de-pagamento).
