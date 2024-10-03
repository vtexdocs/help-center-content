---
title: 'How to configure a custom payment'
id: 1wWt35dRwEboRs1nrSx7G0
status: PUBLISHED
createdAt: 2019-11-12T14:02:06.237Z
updatedAt: 2023-10-18T14:41:42.080Z
publishedAt: 2023-10-18T14:41:42.080Z
firstPublishedAt: 2019-11-25T15:33:37.696Z
contentType: trackArticle
productTeam: Financial
slugEN: how-to-configure-a-custom-payment
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
---

The custom payment is an alternative to the standard options offered by Payments. It allows you to create up to 15 new forms of payment, such as cash on delivery or payment with the store's card, for example.

These payment methods are separated into three categories, and each category allows five configurations.

## Notes Payable
A Note Payable is a promise of payment that needs manual approval of the seller to perform the transaction. It is often used to provide payment through money.

## Store Cards (Own Brand)
It allows the use of a store's credit card with its own brand.

## Store Cards (Co-Branded)
It allows the use of a store's credit card in partnership with one of the following networks: MasterCard, Visa, Amex and Diners.

## How to configure

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Select the **Custom Payments** tab.
3. Select one of the custom payment options.
4. Fill out the form fields and click on the **Save** button.

After this configuration, the creation of a [Payment Condition](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455) is required.

> _We recommend **using the automatic approval** only in cases where the payment will be made **upon delivery** or **pickup at the store**. This option releases the payment of the order, meaning that the order automatically switches to the Preparing Delivery status, without payment verification._
