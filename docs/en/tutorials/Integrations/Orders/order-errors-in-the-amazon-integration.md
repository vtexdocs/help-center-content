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
slug: order-errors-in-the-amazon-integration
locale: en
legacySlug: order-errors-in-the-amazon-integration
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

There are several reasons why an order may not integrate with the marketplace and your VTEX store, and each one generates a notification about the nature of the error. You can find error messages in the VTEX Admin by going to **Marketplace > Connections > Orders**. To view the error message, click on the order.

On the Amazon marketplace, some order integration errors occur more frequently than others. This article shows the most common errors and explains how to solve them.

#### Error message

`No available sla to deliver this order`

SLA errors mean that something is preventing the delivery of the order to the end customer. To identify the source of the error and correct it, check out the article [SLA errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).

____

#### Error message

`Order with SKU out of stock`

Errors related to stock-outs occur for several reasons. To identify the source of the error and correct it, check out the article [Out-of-stock errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Error message

`Order with SKU inactive or out of sales channel`

Only orders with active SKUs are integrated, so please check the status of the order items in your VTEX Admin, in the module **Catalog > Products and SKUs**. You can enable the SKU by [filling SKU registration fields](https://help.vtex.com/en/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY), or [activating SKUs in bulk](https://help.vtex.com/en/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY).

If the order SKUs are active, the error indicates that one or more SKUs are not associated with the Amazon integration's trade policy. In this case, [you must associate them with the trade policy](https://help.vtex.com/en/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).

____

#### Error message

`Sku in order don't belong to a VTEX Store, sku id it's not an integer`

This error occurs when the SKU is not identified on the VTEX platform. In this case, there are two possible reasons: either the item has been removed from the catalog and is no longer available, or Amazon provided incorrect information. Therefore, if the SKU appears normally in the system, please contact the marketplace.

### Learn more

- [Out-of-stock errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [SLA errors in marketplace integration orders](https://help.vtex.com/en/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Troubleshooting price divergence errors in marketplace orders](https://help.vtex.com/en/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
