---
title: 'Error SWW on product PDP'
id: 3DhuWocQwqiWxuAffdwYkg
status: PUBLISHED
createdAt: 2023-01-23T12:38:30.711Z
updatedAt: 2023-09-19T19:15:13.868Z
publishedAt: 2023-09-19T19:15:13.868Z
firstPublishedAt: 2023-01-23T12:38:31.382Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: error-sww-on-product-pdp
locale: en
kiStatus: Backlog
internalReference: 738108
---

## Summary


On some occasions, when opening the product PDP through the admin page (or the final domain) an error Something Went Wrong appears on the screen.
This behavior can happen due to previous category movements on the category tree causing a wrong validation of the product/sku specifications on the catalog system.


##

## Simulation


Open the product PDP link
Get a Something Went Wrong on the front


##

## Workaround


In order to correct this behavior, the specification causing the error must not have a value on the product.
OR
Any SKU specification must be filled in because it may be erroneously considered mandatory
(check if there is an SKU that has an unfilled specification, but the other SKUs of the product are filled)





