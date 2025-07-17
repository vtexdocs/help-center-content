---
title: "SKU active even without registered specifications"
id: RVkBbJAVMGwo2cqcq6Okg
status: PUBLISHED
createdAt: 2018-06-28T22:50:36.470Z
updatedAt: 2020-05-14T17:58:25.679Z
publishedAt: 2020-05-14T17:58:25.679Z
firstPublishedAt: 2018-06-28T22:59:59.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Catalog
slugEN: sku-active-even-without-registered-specifications
locale: en
kiStatus: Closed
internalReference: 
---

## Summary

When importing the Products/SKUs spreadsheet, SKUs with the ___AtivarSkuSePossível___ column filled with __"SIM"__ and that have no registered specifications are being activated in the store.


## Simulation

1. Access the catalog.
2. Navigate to Product Registration > Products and SKUs > Import/Export Products and SKUs.
3. Export spreadsheet with products that don't have registered specifications.
4. Change in each row of the worksheet the column ___AtivarSkuSePossível___ to __SIM__.
5. Import the products and SKUs spreadsheet.

## Workaround

When importing the spreadsheet, make sure that the __AtivarSkuSePossível__ column is marked as __NÃO__ for the SKUs that should remain inactive.


