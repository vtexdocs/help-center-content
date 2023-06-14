---
title: Products without SKU are not returned in the admin when searching by Product ID
id: 3wKlmxitHk1fPfwwEAt6PG
status: PUBLISHED
createdAt: 2023-04-12T19:03:45.264Z
updatedAt: 2023-04-12T19:03:45.967Z
publishedAt: 2023-04-12T19:03:45.967Z
firstPublishedAt: 2023-04-12T19:03:45.967Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: products-without-sku-are-not-returned-in-the-admin-when-searching-by-product-id
kiStatus: Backlog
internalReference: 740431
---

## Summary


Products without SKU are not returned in the admin when searching by Product ID

##

## Simulation



- Go to the catalog admin
- Click on the "Search or Filter Results" link
- Put a Product ID with no SKUs
- Click on the "Search" button
No results will be shown


##

## Workaround


Use the catalog API
Search for other keys such as REFid or EAN




