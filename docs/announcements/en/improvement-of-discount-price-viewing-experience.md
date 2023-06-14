---
title: 'Improvement of discount price viewing experience'
id: 2qU1yejVHL8xbLjxmNrXvk
status: DRAFT
createdAt: 2021-04-19T13:06:53.118Z
updatedAt: 2021-04-19T13:59:58.942Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slug: improvement-of-discount-price-viewing-experience
legacySlug: improvement-of-discount-price-viewing-experience
announcementImageID: ''
announcementSynopsisEN: 'We are improving how prices are displayed at Checkout when discounts apply only to limited number of installments.'
---

We have improved the way installments are calculated and displayed to our customers at Checkout. This change aims to display discounts only in appropriate contexts.

## What has changed?

Before this change, customers could experience issues in the order summary if there was [a discount](https://developers.vtex.com/vtex-developer-docs/docs/using-checkout-api-to-set-a-discount) eligible only for orders paid in a limited number of installments.

Consider, for instance, a customer that wants to buy a product that costs US$ 600 and is eligible for a 10% discount for prepayment in full. The customer proceeds to checkout and lands on the order summary page, where they must select a payment option. Here are the three main error scenarios that could occur:

- The customer has not selected a payment option yet, and the price is displayed without the discount in all options, even the one that is eligible for it.
![O usuário ainda não selecionou um número de parcelas](//images.ctfassets.net/alneenqid6w5/4dFdvU6HcZGvBWSpr0VI04/fe470a5050d3c66d98b21d978f968036/image6.png)

- The customer has selected a payment option that is not eligible for the discount, and the price is displayed without the discount in all options, even the one that is eligible for it (prepayment in full).
![O usuário selecionou um número de parcelas não elegível para desconto](//images.ctfassets.net/alneenqid6w5/nY13uDOX3JBOJvCN5Oj2i/d931d2d73ffb7f1b8c8ddbf7310b7bc9/image8.png)

- The customer has selected a payment option that is eligible for the discount (prepayment in full), and the discount is applied to all options, even the ones that are not eligible for it.
![O usuário selecionou um número de parcelas elegível para desconto (à vista)](//images.ctfassets.net/alneenqid6w5/3hRThIcKzoGWirn17UIXqV/bd64d486417ca73e2d510fc03e4ddd05/image2.png)

With this change, discounts will be displayed correctly in the payment options that are eligible for them.
![O desconto será sempre exibido corretamente apenas nas opções de parcelamento elegíveis.](//images.ctfassets.net/alneenqid6w5/XBFP0W5B1wlGwpoz3In3W/99a531d3dbd3eeae102536126c849212/image4.png)

## Why did we make this change?

This change aims to improve customers’ shopping experience, reduce price discrepancies and post-purchase complaints, as customer expectations are met. Price discrepancies such as these can even have legal consequences, which should now be mitigated.

## What needs to be done?

The change will be automatically implemented in the Checkout interface for all accounts. If your store uses VTEX’s native Checkout interface, no action is needed.

However, if your store uses our Checkout API connected to a different user interface, such as a proprietary app or website, you can implement this improvement using the new [orderForm installments API route](https://developers.vtex.com/vtex-developer-docs/reference/orderform#orderforminstallments). After the implementation, price discrepancies will no longer be a problem.

