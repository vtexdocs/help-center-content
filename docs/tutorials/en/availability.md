---
title: '​​Availability'
id: 3ZcZOzTSr2RdauUbn7qTa9
status: PUBLISHED
createdAt: 2024-06-24T17:51:07.903Z
updatedAt: 2024-06-24T18:00:08.767Z
publishedAt: 2024-06-24T18:00:08.767Z
firstPublishedAt: 2024-06-24T18:00:08.767Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: availability
locale: en
legacySlug: availability
subcategory: 30Kdgc6wJkMWgcXLB8mGr7
---

To generate a search result, VTEX Intelligent Search takes into account the availability of each product found in the search. Available products will always have priority over unavailable products in the search results.

When checking the availability of a product, VTEX Intelligent Search uses the **Show out of stock** field in the [Catalog](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) to verify which products will be displayed even if they are unavailable. If the product configuration specifies that it should not be displayed when out of stock, the platform will not showcase the product. However, if the configuration indicates that the product should be displayed even when out of stock, the platform will position it at the end of the search results.

VTEX Intelligent Search also checks if:

- The product in question is active.
- At least one product SKU is active.
- The product category is active.
- The product brand is active.
- The **Show on website** field of the product is set to active.

After checking the availability, the system combines items from your store, the [sellers](https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w)' catalog and the registered [trade policies](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) settings to determine the final price and stock. If any of these items have price and stock, the product is available. Whenever the stock and price of the product change, a new [indexing](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) is scheduled and this information is updated.

Other factors, such as [Relevance](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) and [Merchandising rules](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), can be added to influence the result. However, availability will still be the most important criterion for the search result.
