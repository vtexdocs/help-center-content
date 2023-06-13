---
title: Setting up Banamex gateway
id: 8TnJhdKnPGYsoUyAGGQgI
status: DRAFT
createdAt: 2018-05-11T21:13:33.957Z
updatedAt: 2022-12-23T20:12:15.664Z
publishedAt: 
firstPublishedAt: 2018-05-23T21:47:31.912Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-banamex-gateway
legacySlug: setting-up-banamex-gateway
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The Mexican bank Citibanamex has a [payment gateway](/en/tutorial/what-is-a-payment-gateway) integrated with VTEX. With Banamex, your store can receive payments with Deposit Slip, as long as it operates in Mexico and has an account at Citibanamex.

To set up Banamex (Citibanamex's gateway), follow the steps below:

## Setting up Banamex gateway affiliation
1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __Banamex__ connector.
5. In the __Cuenta Habiente__ field, enter the name of the account holder.
7. In __Cuenta de Depósito__, fill in your store account number on Citibanamex for deposit of payments.
8. In the __Sucursal__ field, inform the bank branch where your store has an account.
9. In __Lugar del Pago__, inform the authorized places to receive the payments.
10. In __Días hasta el vencimiento__, inform how many days your customer will have to make the payment. The default is 3 days.
11. In __Nombre del campo en Masterdata__, enter the name that will be given to the field in Master Data.
12. Leave the __Efectivo__ field blank.
13. Complete the __Text 1__ and __Text 2__ fields with the instructions you want to give in the Deposit Slip.
14. Click __Save__.

## Setting up the Deposit Slip payment condition
1. Within the _Payments_ __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Select the __FichaDeposito__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. In __Processar com a afiliação__ ("Process with affiliation"), the _Banamex_ option will already be selected.
6. If there is an anti-fraud system set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
7. You can set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following the indicated steps, the checkout of your store will already have deposit slip as a payment condition. Your customers just need to select this payment condition, print the slip, and make the payment at a Citibanamex agency.
