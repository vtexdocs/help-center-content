---
title: "A valid product specification value can be returned blank in the catalog admin"
id: 46IZtoT2nSKE71g2Tj0m8y
status: PUBLISHED
createdAt: 2024-01-16T00:28:14.900Z
updatedAt: 2024-01-16T00:28:15.482Z
publishedAt: 2024-01-16T00:28:15.482Z
firstPublishedAt: 2024-01-16T00:28:15.482Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-valid-product-specification-value-can-be-returned-blank-in-the-catalog-admin
locale: en
kiStatus: Backlog
internalReference: 966499
---

## Summary


It is expected that the product specifications admin will always render the correct values for the specifications of a product. However, this may not always be the case.
The specification value can be returned blank in the admin as if it had no associated value.
In addition to the visualization problem, if the user saves the product using product admin, the blank specification value will overwrite the original value


##

## Simulation


Open a product specification form and compare the value shown in the admin with the value returned by the API.



##

## Workaround


Manage product specifications via API





