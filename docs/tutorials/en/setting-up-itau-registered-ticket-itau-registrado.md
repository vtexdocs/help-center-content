---
title: 'Setting up Itaú registered ticket (Itaú Registrado)'
id: 6MEHf1oDTOkuWM2CaYi4gu
status: DRAFT
createdAt: 2018-11-30T18:23:45.696Z
updatedAt: 2024-03-18T18:01:00.472Z
publishedAt: 
firstPublishedAt: 2018-12-11T17:59:44.827Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-itau-registered-ticket-itau-registrado
locale: en
legacySlug: setting-up-itau-registered-ticket-itau-registrado
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

To set up the Itaú registered boleto, you can choose between two connectors: __Invoice Itaú__ (also known as Itaú Registrado or Boleto Itaú, which you will learn how to configure on this very article) or [ItauShopline](https://help.vtex.com/en/tutorial/setting-up-itau-registered-ticket--3TqzCHPU7KIYGsOKuUeQcq). In __Invoice Itaú__'s case, the boleto is issued in a transparent way (without redirecting to Itaús's website). On the other hand, bank reconciliation must be done through reconciliation files.

After setting up one of these gateway affiliations, you'll have to configure the Boleto Bancário payment condition. This way, all issued boletos will be registered by Itaú's system.

## Setting up Invoice Itaú (Itaú Registrado) gateway affiliation

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __BankInvoiceItau__ in the search bar and click on the name of the provider.
4. Fill in with your company's name on the __Company name__ (Nome da Empresa) field. Remember that this data will be displayed in the boleto's _recipient_ field.
5. In the __CNPJ__ field, fill in your company's registration number, without punctuation.
6. Fill in your company's bank details in the __Bank branch number__ (Agência) and __Account number__ (Número de Conta) fields.
7. In the __Boleto's expiration date__ (Validade do boleto em dias), choose the number of days for the boleto to expire.
8. Fill in the __Boleto instructions__ (Instruções no boleto ao Caixa) field with important guidelines that will be printed on the boleto.
9. Fill in the following fields with data provided by Itaú: _Portfolio_ (Portfólio ou Carteira), _Business agreement_ (Convênio), and _Assignor code_ (Código do Cedente).
10. In the __Recipient address__ (Endereço do Beneficiário) field, fill in with your company's address (only up to 200 characters allowed).
11. Choose the option _Yes_ in the __Should it be registered?__ (Registrado?) field. By doing that, more fields shall appear.
12. In the __Authentication environment__ (Ambiente de Autenticação) field, fill in the `beta` value.
13. In the __Environment type__ (Tipo de Ambiente) field, fill in the `2` value.
14. Fill in the following fields with data provided by Itaú: _Client ID_ (Id do cliente), _Client Secret_ (Secret do cliente), and _Itaú Key_ (Chave do itau).
15. In the __Days until "boleto" expires__ field, set the number of days immediately succeeding the "boleto" - popular Brazilian offline payment method - expiry date after which the transaction itself expires.
16. Click on the __Save__ button.

## Setting up the Boleto Bancario payment condition
1. After setting up the __Invoice Itaú__ gateway affiliation, click on the Payment Conditions tab.
2. Then, click on the __+__ icon.
3. In the __Invoice__ section, select the __Boleto Bancario__ option.
4. Choose a name for the new payment condition, to make it easier to identify it.
5. Click the __Status__ button to enable this payment condition.
6. In the __Process with affiliation__ field, choose the gateway affiliation you set up in the steps above (__Invoice Itaú__).
7. If you wish, you can set up a [special condition](/en/tutorial/special-conditions/) for this payment condition.
8. Click on the __Save__ button.

