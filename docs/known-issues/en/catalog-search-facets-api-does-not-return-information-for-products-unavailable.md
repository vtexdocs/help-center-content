---
title: Catalog Search Facets API does not return information for products unavailable
id: 1JrbscqI4BQgFqfVuRZIl8
status: PUBLISHED
createdAt: 2022-05-23T13:58:53.501Z
updatedAt: 2022-11-25T21:45:53.573Z
publishedAt: 2022-11-25T21:45:53.573Z
firstPublishedAt: 2022-05-23T13:58:53.924Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-search-facets-api-does-not-return-information-for-products-unavailable
kiStatus: Backlog
internalReference: 583623
---

## Summary


Catalog Search Facets API / Portal Search Result Filters do not return information for products unavailable and set to be shown without stock. The product will appear on the Search Result, but its filters will not appear.



## Simulation



- Create a category
- Create a field group, within that category.
- Create an SKU field of the category, containing two values (that can be used as filters).
- Create two products, with one SKU each. And assign a different SKU field to each SKU.
(important: do not assign stock to the products and make them show up on the page even if they are out of stock)
- Go to the category page;
- Check the SKU filter not appearing - same response of the Facets API `/api/catalog_system/pub/facets/search`;



## Workaround


There is no workaround.

