---
title: Error SWW on product PDP
id: 3DhuWocQwqiWxuAffdwYkg
status: PUBLISHED
createdAt: 2023-01-23T12:38:30.711Z
updatedAt: 2023-01-23T12:38:31.382Z
publishedAt: 2023-01-23T12:38:31.382Z
firstPublishedAt: 2023-01-23T12:38:31.382Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: error-sww-on-product-pdp
kiStatus: Backlog
internalReference: 738108
---

## Summary


In some occasions, when opening the product PDP through the admin page (or the final domain) an error Something Went Wrong appears on the screen.


##

## Simulation


This behavior can happen due to previous category movements on the category tree causing a wrong validation of the product/sku specifications on the catalog system.

The real error message behind the SWW error (that can be checked via internal logs) is "Nome da variação do produto não encontrado."


##

## Workaround


In order to correct this behavior, the specification causing the error must not have a value on the product.




