---
title: "StockKeepingUnitByEAN returns 404 for EANs with '/'"
id: Pp3lE5Gu54gOw6liInte4
status: DRAFT
createdAt: 2022-02-25T12:23:55.903Z
updatedAt: 2024-02-16T20:28:49.215Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunitbyean-returns-404-for-eans-with-
locale: en
kiStatus: No Fix
internalReference: 479244
---

## Summary


Currently, when using the GET stockkeepingunitbyean API (https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-ean#catalog-api-get-ean-skuid), the response is unable to resolve EAN strings that contain the character "/".

This happens because this character is interpreted as a part of the URL and consequently the API points to a nonexistent value.






## Simulation


1) Insert and EAN that has the "/" character in it, such as "123/456"

2) Attempt to fetch this data via the API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-ean#catalog-api-get-ean-skuid

3) You will receive a 404 response (you're querying for the EAN 123, which is not the correct value).





## Workaround


n/a

