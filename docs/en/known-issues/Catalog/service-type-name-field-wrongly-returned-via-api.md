---
title: 'Service type name field wrongly returned via API'
id: 1FdozyiQb5DLe7TPICyCDR
status: PUBLISHED
createdAt: 2024-01-04T16:36:17.926Z
updatedAt: 2024-01-04T16:36:18.628Z
publishedAt: 2024-01-04T16:36:18.628Z
firstPublishedAt: 2024-01-04T16:36:18.628Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: service-type-name-field-wrongly-returned-via-api
locale: en
kiStatus: Backlog
internalReference: 961278
---

## Summary


Currently the SKU Catalog APIs are not returning correctly the name of a service type. Instead is being returned the name of the service value.


##

## Simulation



1. Make a GET SKU request on a sku associated with a service: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Note that the services object returns a serviceTypeId field and a Name, however the Name field is not showing the service type name itself.


##

## Workaround


N/A





