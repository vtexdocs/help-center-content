---
title: 'Setting up payments for inStore'
id: 5Fo72INzO06MCGoMm6u0uk
status: ARCHIVED
createdAt: 2018-04-26T22:17:23.559Z
updatedAt: 2020-08-03T19:57:13.887Z
publishedAt: 
firstPublishedAt: 2018-04-27T18:04:34.910Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-payments-for-instore
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

To set up payments for the inStore, follow the steps below.

## Setting up inStore Payments

1. Access the __Payments__ module.
2. Click __Settings__.
3. On the __Gateway Affiliations__ tab, click the __+__ button.
4. Click the __inStore__ connector.
5. In the __Acquirer__ field, choose the acquirer which will process the payments.
6. In __Tipo de parcelamento__ ("Type of installment"), choose whether the installment interest will be the responsibility of the Administrator, bank or of your store.
7. Fill in the specific fields with the information provided by the acquirer chosen in __step 5__.

## Setting up Debit Direct Sale

If you wish to receive your payments in __debit__ mode, follow the steps below:

1. Within the __Settings__ of the Payments module, click on the tab __Payment Conditions__.
2. Click the __+__ button.
3. Click on the __Venda Direta Debito__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. You can also set up [special payment conditions](/en/tutorial/special-conditions).
6. Click __Save__.

## Setting up Credit Direct Sale

If you wish to receive payments in the __credit__ mode, follow the steps below:

1. Within the Payments module __Settings__, click on the __Payment Conditions__ tab.
2. Click the __+__ button.
3. Click the __Venda Direta Crédito__ payment method.
4. Click the __Status__ button to enable this payment condition.
5. You can choose to [set up cash or installment payment](/en/tutorial/how-to-configure-payment-conditions).
6. You can also set up [special payment conditions](/en/tutorial/special-conditions).
7. Click __Save__.

## Hiding inStore payments at the e-commerce checkout

Once you set up the payment for inStore, you will need to hide this payment option at the checkout of your e-commerce. To do this, follow the steps below:

1. Access the __Portal__ module.
2. Click on the "gear button" to access the settings of your e-commerce website.
3. Click the __Code__ tab.
4. Under __Files__, click `checkout-instore-custom.css`.
5. Add the code below at the end of the file and click __Save__.

```css
#payment-group-creditDirectSalePaymentGroup, #payment-group-debitDirectSalePaymentGroup {
    display: none;
}
```
