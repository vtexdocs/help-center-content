---
title: 'Get seller List responding with empty UrlLogo'
id: 1kKsre07DDa56hsEgXnYCz
status: PUBLISHED
createdAt: 2022-02-25T13:28:50.337Z
updatedAt: 2022-11-25T21:42:53.617Z
publishedAt: 2022-11-25T21:42:53.617Z
firstPublishedAt: 2022-02-25T13:28:50.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: get-seller-list-responding-with-empty-urllogo
locale: en
kiStatus: Fixed
internalReference: 387508
---

## Summary


Currently, the path `/api/catalog_system/pvt/seller/list` is responding with an empty UrlLogo property for all sellers regardless of them having a valid logo file or not.




## Simulation


1) In a seller, try inserting a logo file via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-put-seller

2) Check the response of, specifically the getSellerList API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller-list.

The URL logo property will not be updated, despite the sent data in the payload. (The get seller API, for fetching an individual seller's data, still functions as intended: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller)






## Workaround


Retrieving the data for individual sellers (get seller by ID: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller ).

