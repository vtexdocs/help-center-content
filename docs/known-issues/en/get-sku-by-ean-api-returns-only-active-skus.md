---
title: 'GET SKU by EAN API returns only active SKUs'
id: 5NiuB1Lgf3CM5kXSSVdfuu
status: PUBLISHED
createdAt: 2020-03-23T15:10:23.842Z
updatedAt: 2022-11-25T22:00:19.153Z
publishedAt: 2022-11-25T22:00:19.153Z
firstPublishedAt: 2020-03-27T19:32:53.914Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: get-sku-by-ean-api-returns-only-active-skus
kiStatus: Backlog
internalReference: 699007
---

## Summary



When using the https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ route, the API response returns the "SKU not Found" or "Dados inconsistentes no cadastro de EAN para esse sku" message when the SKU is inactive or unavailable on the indexer, even when that SKU exists with that EAN in the store.



## Simulation



Call route https://..com.br/api/catalog_system/pvt/sku/stockkeepingunitbyean/ for an inactive/unavailable SKU with EAN.



## Workaround




Use the **GET SKU by RefID** or **GET SKU by ID** routes to obtain the same information.

