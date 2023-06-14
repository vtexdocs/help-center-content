---
title: '$product.InsertSku control is not following the set order of the product registry'
id: laM7GlhASOuGisu2e8KGO
status: PUBLISHED
createdAt: 2018-01-11T20:32:44.037Z
updatedAt: 2022-12-22T20:46:04.880Z
publishedAt: 2022-12-22T20:46:04.880Z
firstPublishedAt: 2018-01-11T20:42:41.646Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: productinsertsku-control-is-not-following-the-set-order-of-the-product-registry
kiStatus: Backlog
internalReference: 
---

## Summary

The $product.InsertSku aisle template control is rendering SKUs (variations) by ID and not by their admin configured position.

## Simulation

In order to reproduce this behaviour:
1. Configure a product with SKU variation
2. On the SKU management screen, order the SKUs in such a way that the SKU with a lower ID comes after an SKU with a higher ID
3. Configure the aisle template using the $product.InsertSku control
4. Use this aisle template in some aisle or product shelf
5. Access this aisle or product shelf, as seen by the customer

You'll notice that the SKUs are ordered by ID and not according to the set positioning. 

## Workaround

The workaround for this type of behavior is to ensure that SKU IDs are equivalent to their position within the product.

Ex.: A product has the following SKUs: S, M, L. The "S" SKU needs to have the lowest ID, followed "M" and the highest ID "G" thereafter.

