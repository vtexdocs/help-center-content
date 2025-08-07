---
title: "Catalog database registers SKUs with duplicate specifications"
id: zs3Gy1NQ9EYLpAlQ3aXXe
status: PUBLISHED
createdAt: 2022-03-04T18:24:48.159Z
updatedAt: 2022-11-25T21:45:32.139Z
publishedAt: 2022-11-25T21:45:32.139Z
firstPublishedAt: 2022-03-04T18:24:48.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-database-registers-skus-with-duplicate-specifications
locale: en
kiStatus: Backlog
internalReference: 536133
---

## Summary


In some random situations, the catalog database allows the values of a specification to be duplicated in the same SKU.

This causes the Portal to not consider this SKU as a variation, causing unexpected behavior, such as wrong views in the Portal, the Let Me Know controller not working, or SKUs not obeying the category display configuration.



## Simulation


It is not possible to simulate. Duplication is only visible from database (not visible from API or UI)



## Workaround


N/A

