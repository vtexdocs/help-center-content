---
title: 'Get Matched Offers List API not working properly'
id: 7mxrjTDYB8yLeKmQkB5D9h
status: PUBLISHED
createdAt: 2022-03-31T13:49:41.374Z
updatedAt: 2024-07-01T18:48:12.526Z
publishedAt: 2024-07-01T18:48:12.526Z
firstPublishedAt: 2022-03-31T13:49:42.277Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: get-matched-offers-list-api-not-working-properly
locale: en
kiStatus: No Fix
internalReference: 553456
---

## Summary


The API Get Matched Offers List , documented here: https://developers.vtex.com/vtex-rest-api/reference/getofferslist, is not working properly when the user tries to insert the query params suggested.

The result brings only one product.



## Simulation



1. Use the API without any params: GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers
2. The result will bring only 1 product as expected.
3. Use the query param "rows": GET https://{accountName}.{environment}.com.br/api/offer-manager/pvt/offers?rows=20
4. The result won't change



## Workaround


Use similar APIs to get the information one product at time:
https://developers.vtex.com/vtex-rest-api/reference/getproductoffers

