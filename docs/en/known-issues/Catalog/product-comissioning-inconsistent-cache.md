---
title: "Product Comissioning Inconsistent Cache"
id: 7queBSJcAG9yIlKbvWOVgY
status: PUBLISHED
createdAt: 2023-08-01T17:48:39.144Z
updatedAt: 2023-08-01T17:56:01.673Z
publishedAt: 2023-08-01T17:56:01.673Z
firstPublishedAt: 2023-08-01T17:54:19.969Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-comissioning-inconsistent-cache
locale: en
kiStatus: Backlog
internalReference: 872364
---

## Summary


There are, as of 2023, two distinct API sets to update a seller information on a marketplace, they are:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories

These should be consistent among themselves (and msotly, they are) but, when updating comissioning data for all categories on the latter, it takes very long to update the information on the response of the catalog_system API.

This happens when the comission is set for the root category (for instance, the payload below)

```
[
 {
      ""categoryId"": ""default"",
      ""categoryName"": null,
      ""categoryFullPath"": [],
      ""productCommissionPercentage"": 50.0,
      ""freightCommissionPercentage"": 0.0
  }
]
```

The main consequence of this delay is that the checkout and marktplaces mostly use the catalog_system response, which can lead to incorrect comissions on orders.


## Simulation

1. On a marketplace, try using a GET request using the catalog API for a given seller https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/seller/-sellerId-
2. Update its product comissioning data via a PUT to the same path https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
3. Perform another GET and you'll see that the information was correctly updated.
4. Now, try doing the same using the seller register API https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
5. Send a payload for the root category (which means for the entire store, aside from other categories with specific comissions) setting up any productComissionPercentage https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories
6. If you fetch data via the GET for this same collection, you'll see the updated information: https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
7. However, when attempting to get this very same data vi the catalog_system API, it'll take days to update it there if you don't perform any other update.

## Workaround

- Setting up other data on the seller register api, which forces a cache miss.
- Updating via the catalog_system api directly
- Using the UI to perform updates

