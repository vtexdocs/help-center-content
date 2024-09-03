---
title: 'Setting up maxiPago! gateway'
id: 5yUVMQON0WqaGG8Owi4oAU
status: ARCHIVED
createdAt: 2018-04-20T16:23:13.404Z
updatedAt: 2022-12-23T20:25:57.357Z
publishedAt: 
firstPublishedAt: 2018-04-20T20:59:21.701Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-maxipago-gateway
locale: en
legacySlug: setting-up-maxipago-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

MaxiPago! is a [gateway](/en/tutorial/what-is-a-payment-gateway) that integrates with the main acquirers and payment methods of Brazil.

To set up maxiPago!, follow the steps below:

## Setting up maxiPago! gateway affiliation
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __MaxiPago__ connector.
5. Fill in the registration fields with the data provided by maxiPago! (_Merchant Id_ and _Merchant Key_ fields).
6. In the __Moeda__ field, choose the currency that will be used in your store transactions.
7. In __Tipo de parcelamento__, define whether or not the installment payments will have an interest rate.
8. In the __Visa__, __Mastercard__, __Diners__, __Discover__, __Amex__, __ELO__, __Hipercard__, and __Credz__ fields, select the acquirers that will be used for each card. The choice will depend on the contract with the maxiPago!.
9. In __Boleto Bancário__, set the bank that will be used to generate the bank slips. This choice also depends on the contract with maxiPago!.
10. In __Instruções no boleto ao Caixa__, type the instructions that will be printed on the bank slip.
11. In __Validade do boleto em dias__, select the number of days to pay until the bank slip is no longer valid.
12. In __Processador de Antifraude__, choose the anti-fraud system you have set up in maxiPago! or disable this function.
13. In __Boleto Registrado__, inform whether the bank slip is registered or not.
14. In __Captura de segurança antecipada__, choose how long you want the capture to take place after the transaction approval and the anti-fraud analysis. You can also disable this function.
15. Under __Have an anti-fraud deal with this affiliation?__, inform whether or not you have an anti-fraud system set up on maxiPago!
16. Click __Save__.

## Setting up the payment condition
After following the steps indicated above, maxiPago! will be set up in your store. So when you are registering a payment condition, it will be available in the __Process with affiliation__ field (provided that the payment method is compatible with maxiPago!). To learn how to set up payment conditions, visit [this Help article](/en/tutorial/how-to-configure-payment-conditions).
