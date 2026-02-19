---
title: '​​Availability'
id: 3ZcZOzTSr2RdauUbn7qTa9
status: PUBLISHED
createdAt: 2024-06-24T17:51:07.903Z
updatedAt: 2025-03-31T18:58:33.591Z
publishedAt: 2025-03-31T18:58:33.591Z
firstPublishedAt: 2024-06-24T18:00:08.767Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: availability
legacySlug: availability
locale: en
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

To generate a search result, VTEX Intelligent Search takes into account the availability of each product found in the search. Available products will always have priority over unavailable products in the search results.

When checking the availability of a product, VTEX Intelligent Search uses the **Show out of stock** field in the [Catalog](/en/docs/tracks/catalog-concept-definition) to verify which products will be displayed even if they are unavailable. If the product configuration specifies that it should not be displayed when out of stock, the platform will not showcase the product. However, if the configuration indicates that the product should be displayed even when out of stock, the platform will position it at the end of the search results.

VTEX Intelligent Search also checks if:

- The product in question is active.
- At least one product SKU is active.
- The product category is active.
- The product brand is active.
- The **Show on website** field of the product is set to active.

After checking the availability, the system combines items from your store, the [sellers](/en/docs/tutorials/what-is-a-seller)' catalog and the registered [trade policies](/en/docs/tutorials/how-trade-policies-work) settings to determine the final price and stock. If any of these items have price and stock, the product is available. Whenever the stock and price of the product change, a new [indexing](/en/docs/tutorials/indexing-history) is scheduled and this information is updated.

Other factors, such as [Relevance](/en/docs/tutorials/relevance-rules) and [Merchandising rules](/en/docs/tutorials/merchandising-rules), can be added to influence the result. However, availability will still be the most important criterion for the search result.
