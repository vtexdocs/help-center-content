---
title: Setting up Itaú registered ticket (Itaú Registrado)
id: 6MEHf1oDTOkuWM2CaYi4gu
status: PUBLISHED
createdAt: 2018-11-30T18:23:45.696Z
updatedAt: 2021-07-08T19:14:45.697Z
publishedAt: 2021-07-08T19:14:45.697Z
firstPublishedAt: 2018-12-11T17:59:44.827Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-itau-registered-ticket-itau-registrado
legacySlug: setting-up-itau-registered-ticket-itau-registrado
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

To set up the Itaú registered boleto, you can choose between two connectors: __Invoice Itaú__ (also known as Itaú Registrado or Boleto Itaú, which you will learn how to configure on this very article) or [ItauShopline](https://help.vtex.com/en/tutorial/setting-up-itau-registered-ticket--3TqzCHPU7KIYGsOKuUeQcq). In __Invoice Itaú__'s case, the boleto is issued in a transparent way (without redirecting to Itaús's website). On the other hand, bank reconciliation must be done through reconciliation files.

After setting up one of these gateway affiliations, you'll have to configure the Boleto Bancário payment condition. This way, all issued boletos will be registered by Itaú's system.

## Setting up Invoice Itaú (Itaú Registrado) gateway affiliation
1. On the sidebar, click on __Payments__, inside the __Transactions__ section.
2. In the listed options, click on __Settings__.
3. Click on the __Gateway Affiliations__ tab and then on the __+__ icon.
4. Click the __Invoice Itaú__ connector.
5. Fill in with your company's name on the __Company name__ (Nome da Empresa) field. Remember that this data will be displayed in the boleto's _recipient_ field.
6. In the __CNPJ__ field, fill in your company's registration number, without punctuation.
7. Fill in your company's bank details in the __Bank branch number__ (Agência) and __Account number__ (Número de Conta) fields.
8. In the __Boleto's expiration date__ (Validade do boleto em dias), choose the number of days for the boleto to expire.
9. Fill in the __Boleto instructions__ (Instruções no boleto ao Caixa) field with important guidelines that will be printed on the boleto.
10. Fill in the following fields with data provided by Itaú: _Portfolio_ (Portfólio ou Carteira), _Business agreement_ (Convênio), and _Assignor code_ (Código do Cedente). 
11. In the __Recipient address__ (Endereço do Beneficiário) field, fill in with your company's address (only up to 200 characters allowed).
12. Choose the option _Yes_ in the __Should it be registered?__ (Registrado?) field. By doing that, more fields shall appear.
13. In the __Authentication environment__ (Ambiente de Autenticação) field, fill in the `beta` value.
14. In the __Environment type__ (Tipo de Ambiente) field, fill in the `2` value.
15. Fill in the following fields with data provided by Itaú: _Client ID_ (Id do cliente), _Client Secret_ (Secret do cliente), and _Itaú Key_ (Chave do itau).
16. In the __Days until "boleto" expires__ field, set the number of days immediately succeeding the "boleto" - popular Brazilian offline payment method - expiry date after which the transaction itself expires.
17. Click on the __Save__ button.

## Setting up the Boleto Bancario payment condition
1. After setting up the __Invoice Itaú__ gateway affiliation, click on the Payment Conditions tab.
2. Then, click on the __+__ icon.
3. In the __Invoice__ section, select the __Boleto Bancario__ option.
4. Choose a name for the new payment condition, to make it easier to identify it.
5. Click the __Status__ button to enable this payment condition.
6. In the __Process with affiliation__ field, choose the gateway affiliation you set up in the steps above (__Invoice Itaú__).
7. If you wish, you can set up a [special condition](/en/tutorial/special-conditions/) for this payment condition.
8. Click on the __Save__ button.

