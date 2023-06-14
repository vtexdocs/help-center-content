---
title: 'Product Specification Export Index Out of Range'
id: 2Qu9QCZvfcjmNfAh3uvPkf
status: PUBLISHED
createdAt: 2022-02-25T12:22:04.014Z
updatedAt: 2022-11-25T21:45:45.357Z
publishedAt: 2022-11-25T21:45:45.357Z
firstPublishedAt: 2022-02-25T12:22:04.405Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-specification-export-index-out-of-range
kiStatus: Backlog
internalReference: 481095
---

## Summary


When attempting to export, using the UI: , data from product specifications, if they do not have any valid fields directly registered in the category to be exported, the process will fail with an "Index out of Range" message.





## Simulation


1) Go to the Product SPecification export UI: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Right click a category in which there's no product specification field registered

3) An error message of "Index out of bonds" will be prompted.






## Workaround


Either export the desired category's parent or child

or

Use the get product specifications API to fetch data: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification

