---
title: 'Why was my order invoiced, but the product is still reserved?'
id: frequentlyAskedQuestions_160
status: PUBLISHED
createdAt: 2017-04-27T22:39:43.965Z
updatedAt: 2019-12-31T14:25:30.934Z
publishedAt: 2019-12-31T14:25:30.934Z
firstPublishedAt: 2017-04-27T23:01:43.472Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: why-was-my-order-invoiced-but-the-product-is-still-reserved
locale: en
legacySlug: why-was-my-order-invoiced-but-the-product-is-still-reserved
---

To make a product already sold in an order unavailable to other customers, we use the reservation of purchased products. 

Such reservation is performed in three stages, but with only two status. And what causes a lot of confusion in most sellers, is why that reservation is still active, if the order was already invoiced. 

[Understand how the reservation works](/en/tutorial/how-does-reservation-work).

However, a reserved item never comes out of the reserved status automatically. 

For that an ERP notification is required, or a manual change at the stock of the item. And the reservation can only go through stock write-off after the `Preparing Delivery` status. 

Before that, the reservation is still active and another item will be removed, [causing an incorrect setting](/en/faq/why-is-my-stock-negative).

So, when an order moves to the `Preparing Delivery` status, a notification to the stock becomes necessary, so that this item leaves the reserved status and is removed from the stock. 

To do that, simply update the __Quantity__ field with the number of items available in your stock, ignoring the item related to the purchase.
