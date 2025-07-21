---
title: "Diacritics are removed on CatalogAPI"
id: 2iVyAQ8TSaT3jFYzcQGjSs
status: PUBLISHED
createdAt: 2022-07-22T18:18:04.236Z
updatedAt: 2024-02-16T20:28:19.994Z
publishedAt: 2024-02-16T20:28:19.994Z
firstPublishedAt: 2022-07-22T18:18:05.160Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: diacritics-are-removed-on-catalogapi
locale: en
kiStatus: No Fix
internalReference: 623345
---

## Summary



Currently, some diacritic characters, such as ă are not preserved when saved using the catalogAPI: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product





## Simulation


1 - use a put product API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product with a diacritic
Ex:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/diacritics-are-removed-on-catalogapi_1.png)

2 - Then either check this data via API or catalog admin, you'll have these characters removed: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/diacritics-are-removed-on-catalogapi_2.png)





## Workaround


Manually update these products via admin UI

