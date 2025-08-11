---
title: 'Improvement of discount price viewing experience'
id: 2qU1yejVHL8xbLjxmNrXvk
status: DRAFT
createdAt: 2021-04-19T13:06:53.118Z
updatedAt: 2021-04-19T13:59:58.942Z
publishedAt: undefined
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-04-19-improvement-of-discount-price-viewing-experience
locale: en
legacySlug: improvement-of-discount-price-viewing-experience
announcementImageID: 'undefined'
announcementSynopsisEN: 'We are improving how prices are displayed at Checkout when discounts apply only to limited number of installments.'
---

We have improved the way installments are calculated and displayed to our customers at Checkout. This change aims to display discounts only in appropriate contexts.

## What has changed?

Before this change, customers could experience issues in the order summary if there was [a discount](https://developers.vtex.com/vtex-developer-docs/docs/using-checkout-api-to-set-a-discount) eligible only for orders paid in a limited number of installments.

Consider, for instance, a customer that wants to buy a product that costs US$ 600 and is eligible for a 10% discount for prepayment in full. The customer proceeds to checkout and lands on the order summary page, where they must select a payment option. Here are the three main error scenarios that could occur:

- The customer has not selected a payment option yet, and the price is displayed without the discount in all options, even the one that is eligible for it.
![O usuário ainda não selecionou um número de parcelas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/2021-04-19-improvement-of-discount-price-viewing-experience_1.png)

- The customer has selected a payment option that is not eligible for the discount, and the price is displayed without the discount in all options, even the one that is eligible for it (prepayment in full).
![O usuário selecionou um número de parcelas não elegível para desconto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/2021-04-19-improvement-of-discount-price-viewing-experience_2.png)

- The customer has selected a payment option that is eligible for the discount (prepayment in full), and the discount is applied to all options, even the ones that are not eligible for it.
![O usuário selecionou um número de parcelas elegível para desconto (à vista)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/2021-04-19-improvement-of-discount-price-viewing-experience_3.png)

With this change, discounts will be displayed correctly in the payment options that are eligible for them.
![O desconto será sempre exibido corretamente apenas nas opções de parcelamento elegíveis.](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/2021-04-19-improvement-of-discount-price-viewing-experience_4.png)

## Why did we make this change?

This change aims to improve customers’ shopping experience, reduce price discrepancies and post-purchase complaints, as customer expectations are met. Price discrepancies such as these can even have legal consequences, which should now be mitigated.

## What needs to be done?

The change will be automatically implemented in the Checkout interface for all accounts. If your store uses VTEX’s native Checkout interface, no action is needed.

However, if your store uses our Checkout API connected to a different user interface, such as a proprietary app or website, you can implement this improvement using the new [orderForm installments API route](https://developers.vtex.com/vtex-developer-docs/reference/orderform#orderforminstallments). After the implementation, price discrepancies will no longer be a problem.

