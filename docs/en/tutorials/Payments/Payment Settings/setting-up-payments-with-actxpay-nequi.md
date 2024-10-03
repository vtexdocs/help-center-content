---
title: 'Setting up payments with actXpay-Nequi'
id: 1Kqx4Q2tJgk6tP6vocDn0l
status: ARCHIVED
createdAt: 2022-05-05T17:19:13.381Z
updatedAt: 2022-12-23T19:51:33.076Z
publishedAt: 
firstPublishedAt: 2022-05-05T17:59:50.717Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-actxpay-nequi
locale: en
legacySlug: setting-up-payments-with-actxpay-nequi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the actXpay-Nequi payment provider. With this connector, your store can make sales through the __Nequi__ (colombian payment system).

To configure actXpay-Nequi affiliation, follow the steps below:

1. Access the __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. In the __Gateway affiliations__ tab, click on the `+` button.
5. Click on the __Actxpay-nequi__ connector.
6. Fill in the __Application Key__ and __Application Token__ fields with data provided by actXpayments.
7. Click on __Save__.

## Setting up the payment condition

1. Access __Admin__ VTEX.
2. Click on __Payments__.
3. Then, click on __Settings__.
4. Click on the __Custom Payments__ tab.
5. In __Notes payables__, click on one of the five configuration boxes.
6. Fill in the following fields:
- __Name:__ the name that will be used to identify the payment (actXpay-Nequi).
- __Description:__ details of the payment condition.
- __Promissory expiration date:__ the due date for your customer to pay the promissory before it expires.
- __Automatic authorization:__ select whether you want to authorize payments automatically. We recommend enabling this option only for payments on delivery or in-store pickup. By choosing Yes, the order status will automatically change to Handling shipping without requiring payment verification.
- __Change margin range:__ percentage margin range allowed for changes in the value of the promissory. Some customers may want to authorize [changes to orders](https://help.vtex.com/en/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190). In this case, please fill in the Change margin range field to determine the percentage margin allowed for changes.
- __Split payment:__ choose whether to use the [split payment solution](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete). If you opt to use it, the promissory will be split between the sellers and the marketplace, when applicable.
- __Automatic invoicing:__ number of days for the system to invoice the promissory after payment authorization. By default, promissories are invoiced upon payment authorization. If this field is set to __Yes__, invoicing will no longer occur upon authorization but after the number of days you have determined.<br>

<ul> 
7. Click on <b>Save</b>.
  </ul>

After following the indicated steps, actXpay-Nequi connector may take up to 10 minutes to appear at your store's checkout as a payment option.

For more information about the Nequi payment system, visit the [actXpayments](https://www.actx.com.co/actxpayments) website.
