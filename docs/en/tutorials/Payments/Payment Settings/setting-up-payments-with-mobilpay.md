---
title: 'Setting up payments with MobilPay'
id: 3NG5rHR700xg8CaPy1IGRn
status: ARCHIVED
createdAt: 2022-02-22T15:08:29.690Z
updatedAt: 2022-12-23T20:29:50.244Z
publishedAt: 
firstPublishedAt: 2022-02-22T19:37:58.721Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-payments-with-mobilpay
locale: en
legacySlug: setting-up-payments-with-mobilpay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the MobilPay payment provider. With this connector, your store can make sales through MobilPay`s digital wallet.

To configure MobilPay affiliation, follow the steps below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. In the __Gateway affiliations__ tab, click on the __+__ button.
5. Click on the __MobilPay__ connector.
6. In __SellerAccountId__, enter your seller account (Id) or signature provided by MobilPay.
7. In __Country__, select the country where your store will operate.
8. In __Currency__, select the currency in which your store will receive payments.
9. In __Language__, select in which language the payment information will be displayed.
10. In __Certificate [.cer]__, click on __Upload__ button to upload the certificate (.cer extension) available in your MobilPay account.
11. In __Private Key [.key]__, click on __Upload__ button to upload the certificate (.key extension) available in your MobilPay account.
12. In the __UserName__ and __Password__ fields, enter your data used to call the MobilPay API capture and credit methods.
13. Click on __Save__.

## Setting up the payment condition

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. In the __Payment Conditions__ tab, click on the __+__ button.
5. Choose the payment condition __MobilPay__.
6. Fill the __Rule Name__ field with a name of your choice for identification.
7. Activate the condition in the __Status__ field.
8. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
9. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
10. Click on __Save__.

After following the indicated steps, MobilPay connector may take up to 10 minutes to appear at your store's checkout as a payment option.
