---
title: Product is not reindexed when registering services in SKUs
id: 3shcZ8gz2MM8QUyGiS0qUq
status: PUBLISHED
createdAt: 2018-06-28T23:47:58.354Z
updatedAt: 2022-12-22T20:45:27.132Z
publishedAt: 2022-12-22T20:45:27.132Z
firstPublishedAt: 2018-06-28T23:55:09.347Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-is-not-reindexed-when-registering-services-in-skus
kiStatus: Backlog
internalReference: 
---

## Summary

When registering services in the SKUs, the trigger for the product to be sent to the reindexing queue is not fired. Therefore, the service is not applied for the products in question.


## Simulation

1. Access the Catalog module
2. Browse to Products > Products & SKUs > __Product and SKU Management__
3. In the product listing click the down arrow next to Change, then click __SKU__
4. In the list that loads after that click on __Services__
5. Click the __New Service__ button
6. Fill in the data and save the service

## Workaround

To force the reindexation of the product that had services registered in their SKUs, access the product page in the Admin, enter a space in the description of the product and then save it.


