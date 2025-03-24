---
title: 'Setting up customized payments using MercadoPago (Latin America)'
id: oqLVXpxZ4GqgosA8QQYEs
status: PUBLISHED
createdAt: 2018-03-15T13:13:15.893Z
updatedAt: 2023-03-29T01:05:12.789Z
publishedAt: 2023-03-29T01:05:12.789Z
firstPublishedAt: 2018-03-15T21:36:39.268Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-customized-payments-using-mercadopago-latin-america
locale: en
legacySlug: setting-up-customized-payments-using-mercadopago-latin-america
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>⚠️ This article concerns settings which are applicable in stores that operate in the following Latin American countries: **Argentina**, **Chile**, **Colombia** and **Uruguai**.

You can use Mercado Pago to offer customized payments (using local credit cards) in your store. For this, you first need to register the [MercadoPagoV1 gateway affiliation](/en/tutorial/setting-up-mercadopagov1-sub-acquirer). Then, just follow the steps below:

## Set up customized payment (local cards in Latin America)
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Custom Payments__ tab, click one of the __Config__ buttons under __Cobrands__.
3. Fill in the form data according to the card you chose (check the information about cards from [Argentina](/en/faq/custom-payment-information-for-argentina), [Chile](/en/faq/information-about-chile-custom-payments), [Colombia](/en/faq/information-about-colombia-custom-payments) and [Uruguay](information-about-uruguay-custom-payments)).
4. Click __Save__.

## Set up the payment condition
1. After you click __Save__, you'll be redirected to the payment condition setting screen.
2. Click the __Status__ button to enable this payment condition.
3. Under __Process with affiliation__, choose __MercadoPagoV1__.
4. If there is an anti-fraud system set up in your store, you can activate it for this payment condition by checking the __Use Anti-Fraud__ box.
5. Rename the payment condition to make it easier to identify. We recommend that you do this, especially if your store uses more than one.
6. Choose the __Automatic__ option.
7. Click __Save__.

When you complete both steps, the checkout of your store will begin to offer the customized payment you have registered.

### Related articles
- [Setting up MercadoPagoV1 sub-acquirer](/en/tutorial/setting-up-mercadopagov1-sub-acquirer)
