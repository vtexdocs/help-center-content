---
title: 'Setting up Braspag gateway'
id: 7tQmfLMvtYEsWoaaAaeKSC
status: ARCHIVED
createdAt: 2018-02-27T18:21:37.603Z
updatedAt: 2023-09-19T14:26:39.079Z
publishedAt: 
firstPublishedAt: 2018-02-27T18:52:38.519Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setting-up-braspag-gateway
locale: en
legacySlug: setting-up-braspag-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

In VTEX, you can integrate your store with Braspag gateway. With that connector, you may carry sales with credit card and bank slip, for example. To find out how to set Braspag up, follow the steps below:

## Setting up Braspag gateway affiliation

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Braspag__ connector.
4. In the __Id do Merchant__ field, fill in the data provided by Braspag.
5. In each __Brand__ field *(Visa, Mastercard, Diners etc.)*, choose the acquirer who will process the payment with the cards of these brands.
6. In __Boleto Bancário__ (Bank Slip), choose the acquirer who will make the communication with the ticket issuing bank.
7. In the __Instruções no boleto ao Caixa__ field, enter the necessary guidelines for the bank employee who will receive the ticket payment.
8. In __Validade do boleto em dias__, enter ticket expiration information.
9. In __Usa cartão protegido__, select *Yes* to save the card data to Braspag or *No* if you don't want to save card information. The __compra em um clique__ (__buy with one click__) service must be hired at Braspag in order for the card's data to be saved.
10. In __Boleto Registrado__, select *Yes* if tickets issued are of registered type or *No* if they are not registered.
11. In the __País__ field, select the country where payments are being made.
12. In __Moeda__, select the currency to be used in the transactions.
13. In __Captura de segurança antecipada__, select the time you want to take early payments.
14. Click __Save__.

## Setting up the payment condition

At VTEX, the Braspag connector processes mainly __credit cards__ and __bank slips__. 
To configure the payment methods to be processed by the Braspag gateway, refet to [our tutorial](/en/tutorial/how-to-configure-payment-conditions).
