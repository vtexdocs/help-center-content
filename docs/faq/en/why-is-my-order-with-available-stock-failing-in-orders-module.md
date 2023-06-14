---
title: 'Why is my order with available stock failing in Orders module?'
id: 2FZHMJFo8oyWW46gYSqqOc
status: PUBLISHED
createdAt: 2018-03-07T14:26:47.000Z
updatedAt: 2023-03-31T23:05:09.937Z
publishedAt: 2023-03-31T23:05:09.937Z
firstPublishedAt: 2018-03-07T15:14:02.766Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: why-is-my-order-with-available-stock-failing-in-orders-module
legacySlug: why-is-my-order-with-available-stock-failing-in-oms
---

When the payment of an order takes many days to be approved, some reservations expire, causing possible errors in the [orders flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196) in the **Orders** module, such as products with unavailable stock.

The reserved status has an expiration period. If payment is not confirmed until this date, the SKU is released for other customers, avoiding unnecessary reservation of items.

In that particular case, since your stock was down and you did not have SKUs for both orders, one of them could not be delivered, causing the error in the order's workflow. It's as if the sale that happened in the middle of the reservation process took its inventory of surprise.

The solution here is to add stock to this SKU, or to cancel the order, since your reservation has fallen, your SKU has been directed to another order and there was no actual available stock.
