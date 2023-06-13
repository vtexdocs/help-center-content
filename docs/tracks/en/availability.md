---
title: ​​Availability
id: 7LMQbWK5nElIkXo0NK8Kux
status: PUBLISHED
createdAt: 2021-10-04T18:01:24.137Z
updatedAt: 2021-10-04T18:18:56.501Z
publishedAt: 2021-10-04T18:18:56.501Z
firstPublishedAt: 2021-10-04T18:18:56.501Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: availability
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

To generate a search result, VTEX Intelligent Search takes into account the availability of each product found in the search. Available products will always have priority over unavailable products in the search results.

When checking the availability of a product, VTEX Intelligent Search uses the **Show out of stock** field in the [Catalog](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) to verify which products will be displayed even if they are unavailable. If the product configuration defines that it will not be displayed when it is out of stock, the platform will place it at the end of the search results. VTEX Intelligent Search also checks if:

- The product in question is active.
- At least one product SKU is active.
- The product category is active.
- The product brand is active.
- The **Show on website** field of the product is set to active.

After checking the availability, the system combines items from your store, the [sellers](https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w)' catalog and the registered [trade policies](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) settings to determine the final price and stock. If any of these items have price and stock, the product is available. Whenever the stock and price of the product change, a new [indexing](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH) is scheduled and this information is updated.

Other factors, such as [Relevance](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) and [Merchandising rules](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), can be added to influence the result. However, availability will still be the most important criterion for the search result.
