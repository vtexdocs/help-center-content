---
title: 'Setting up payments with Todo Pago'
id: 4nO5e9gKLCsQmkAASouiMM
status: DRAFT
createdAt: 2018-03-01T19:18:03.810Z
updatedAt: 2022-12-23T20:46:56.078Z
publishedAt: 
firstPublishedAt: 2018-03-01T21:30:00.544Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-payments-with-todo-pago
locale: en
legacySlug: setting-up-payments-with-todo-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Todo Pago is an Argentine digital wallet that works as a [sub-acquirer](/en/tutorial/what-is-a-sub-acquirer) in the payment flow. Your customer needs to choose the Todo Pago __payment method__ at your store and authenticate into the wallet environment.

To set up Todo Pago, follow the steps below:

## Setting up Todo Pago gateway affiliation
1. Enter the __Payments__ module.
2. Click __Settings__.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click the __Todo Pago__ connector.
4. Fill in the registration fields with the data provided by Todo Pago (fields _Authorization_, _Merchant_, _Security_).
5. In the __Currency__ field, choose the currency of the transaction (currently, only the use of Argentine Pesos is enabled).
6. In __Maximum Installments__, set the maximum number of installments to offer to your customer.
7. Click __Save__.


## Setting up Todo Pago payment condition
1. Within the __Settings__ section of the Payments module, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Click the __Todo Pago__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. If you have an anti-fraud set up, you can select the __Use Anti-Fraud__ option.
6. Set up the [payment condition](/en/tutorial/how-to-configure-payment-conditions): cash or installment.
7. You can also set up [special payment conditions](/en/tutorial/special-conditions).
8. Click __Save__.

After following all the steps indicated, your customer can choose the Todo Pago payment option at checkout. Clicking __Finalize Purchase__, your customer will be redirected to the Todo Pago environment, where they will be able to choose between accessing their account or using a different card.
