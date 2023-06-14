---
title: 'What types of payment split are there?'
id: frequentlyAskedQuestions_5174
status: DRAFT
createdAt: 2019-01-24T20:46:02.419Z
updatedAt: 2021-09-09T21:57:07.118Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:12:12.544Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: what-types-of-payment-split-are-there
locale: en
legacySlug: what-types-of-payment-split-are-there
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

In this article, we describe the types of payment split between sellers in VTEX. There are three possible scenarios:

## Conventional Model with the marketplace responsible for payment

When the marketplace is responsible for payment, there is no split. Payment is made directly to the marketplace gateway, which has to pass on the amounts owing to each of the sellers involved in the transaction.

## Split Model with Sellers responsible for payment

In this case, there are two possibilities:

- In the first one, we have products of only one seller in the cart. In this case, payment is made directly to the seller’s gateway, which has to pass on the amounts owing to its marketplace.
- In the second case, we have products of different sellers in the cart. When this happens, the checkout splits payments between the sellers. If the sellers’ payment terms are different, the Checkout will show the payment terms that are common to all of them.

## Hybrid Split Model: Conventional + Split

Combines the two methods described above. In this model, part of the payment remains in the marketplace and the other part is sent directly to the sellers. 

This method is used when a marketplace voucher is used as a means of payment and when we have only one seller’s products in the cart. 

For this to happen, the marketplace must complete option "Desejo incluir minhas formas de pagamento" when registering the seller with VTEX admin. To configure this feature, you must:

1. Access VTEX __Admin__. 
2. Click __Marketplace__ module
3. Access __Management__ 
4. To change the settings of an existing seller, click on **Edit/View**. To create a new seller, just click on the button **New Seller**.
5. Select the option **I want to include my payment method**.
