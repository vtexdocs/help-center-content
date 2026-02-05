---
title: 'Order errors in the Amazon integration'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2023-03-29T23:46:13.266Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: order-errors-in-the-amazon-integration
locale: en
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

There are several reasons why an order may not integrate with the marketplace and your VTEX store, and each one generates a notification about the nature of the error. You can find error messages in the VTEX Admin by going to **Marketplace > Connections > Orders**. To view the error message, click on the order.

On the Amazon marketplace, some order integration errors occur more frequently than others. This article shows the most common errors and explains how to solve them.

#### Error message

`No available sla to deliver this order`

SLA errors mean that something is preventing the delivery of the order to the end customer. To identify the source of the error and correct it, check out the article [SLA errors in marketplace integration orders](/en/docs/tutorials/sla-errors-in-marketplace-integration-orders).

____

#### Error message

`Order with SKU out of stock`

Errors related to stock-outs occur for several reasons. To identify the source of the error and correct it, check out the article [Out-of-stock errors in marketplace integration orders](/en/docs/tutorials/out-of-stock-errors-in-marketplace-integration-orders).

____

#### Error message

`Order with SKU inactive or out of sales channel`

Only orders with active SKUs are integrated, so please check the status of the order items in your VTEX Admin, in the module **Catalog > Products and SKUs**. You can enable the SKU by [filling SKU registration fields](/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), or [activating SKUs in bulk](/en/docs/tutorials/activating-skus-in-bulk).

If the order SKUs are active, the error indicates that one or more SKUs are not associated with the Amazon integration's trade policy. In this case, [you must associate them with the trade policy](/en/docs/tutorials/associate-a-sku-to-a-trade-policy).

____

#### Error message

`Sku in order don't belong to a VTEX Store, sku id it's not an integer`

This error occurs when the SKU is not identified on the VTEX platform. In this case, there are two possible reasons: either the item has been removed from the catalog and is no longer available, or Amazon provided incorrect information. Therefore, if the SKU appears normally in the system, please contact the marketplace.

### Learn more

- [Out-of-stock errors in marketplace integration orders](/en/docs/tutorials/out-of-stock-errors-in-marketplace-integration-orders)
- [SLA errors in marketplace integration orders](/en/docs/tutorials/sla-errors-in-marketplace-integration-orders)
- [Troubleshooting price divergence errors in marketplace orders](/en/docs/tutorials/troubleshooting-price-divergence-errors-in-marketplace-orders)
