---
title: 'Products with sku variations approved on Received Skus are being created with duplicated skus on the Catalog.'
id: 2RqrBOeHDBZmfmqe6Rowl2
status: PUBLISHED
createdAt: 2023-08-29T15:50:44.042Z
updatedAt: 2023-08-29T15:50:44.976Z
publishedAt: 2023-08-29T15:50:44.976Z
firstPublishedAt: 2023-08-29T15:50:44.976Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: products-with-sku-variations-approved-on-received-skus-are-being-created-with-duplicated-skus-on-the-catalog
locale: en
kiStatus: Backlog
internalReference: 889676
---

## Summary


The seller can send a product with multiple sku variations.
On the marketplace's Received Skus module these skus will appear separately to be approved.
The merchant can manually approve these skus.

The scenario happening is that some of the skus are being created duplicated on the marketplace's catalog due to a fail on the catalog communication.


##

## Simulation


Approve skus on the Received Skus pending area from the same product in short interval of time.
Check in the catalog if some sku was created duplicated


##

## Workaround


Approve slowly the skus from the same product to avoid errors on the catalog side.





