---
title: 'Integration errors in Amazon orders'
id: 1ukX1Gw4fVUs62IIpGgsZF
status: PUBLISHED
createdAt: 2024-09-12T16:05:45.774Z
updatedAt: 2024-11-08T18:29:42.178Z
publishedAt: 2024-11-08T18:29:42.178Z
firstPublishedAt: 2024-09-12T16:24:22.283Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: integration-errors-in-amazon-orders
locale: en
legacySlug: integration-errors-in-amazon-orders
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:  Orders, Integration, Marketplace, Amazon
---

When an integration error occurs in orders between **Amazon** and a store, an error message is displayed for each affected order. To check if an order has integration errors, in the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar.

The most common errors in Amazon orders are:

- **SLA error**
- **SKU out of stock**
- **Inactive SKU**
- **SKU with no trade policy**
- **Unknown SKU**
- **Communication error with the catalog**

## Solution

To fix integration errors in Amazon orders, consider the options in the following table:

|**Error message**|**Meaning**|**Required action**|
|:---:|:---:|:---|
|**No available sla to deliver this order**|Something is preventing the delivery of the order to the end customer. |To identify the root cause of the error and fix it, see [SLA errors in marketplace order integration](https://help.vtex.com/en/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).|
|**Order with SKU out of stock**|There is a problem with the inventory associated with the marketplace.|To fix the error, see the [Out of stock errors in marketplace order integration](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP) to identify which out of stock error is associated with the order. Then, follow the steps indicated in the documentation.|
|**Inactive SKU**|At least one SKU in the order is not active in the store catalog.|Check the SKU status by accessing the VTEX Admin, under **Catalog > Products and SKUs,**  then activate a single SKU following the instructions in the tutorial Filling in SKU registration fields or activate multiple SKUs following the steps described in [Activating SKUs in bulk](https://help.vtex.com/en/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY). |
|**SKU without trade policy**|The SKUs in the order are active, but they are not associated with a [Trade Policy ](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) used on Amazon.| To fix the error, you must associate the SKU with a trade policy linked to Amazon. To do this, follow the tutorial [Associate a SKU with a trade policy](https://help.vtex.com/en/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb) |
|**SKUs in the order don't belong to a VTEX Store, SKU ID is not an integer**|At least one SKU in the order is not listed in the store's catalog, or Amazon has provided incorrect information in the order. If the SKU is not listed in the catalog, you must cancel the order.| If the SKU is listed in the catalog, you must contact Amazon so the marketplace can fix the error.|
|**A communication error with Catalog System has occurred - Unauthorized access from seller x to sales channel y**| The website associated with the store's main account does not have Amazon's trade policy selected. | To fix the error, follow the steps in [Linking a store to a folder structure in CMS (binding)](https://help.vtex.com/en/tutorial/vincular-um-account-name-a-um-website-binding) and select Amazon's trade policy.|

