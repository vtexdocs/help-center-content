---
title: 'Search Navigator filter + Price Range yielding incorrect results'
id: 6s4vJr6DVPLU9JlxIPWqhx
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.208Z
updatedAt: 2024-02-16T20:24:11.551Z
publishedAt: 2024-02-16T20:24:11.551Z
firstPublishedAt: 2022-06-28T16:55:53.927Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: search-navigator-filter-price-range-yielding-incorrect-results
locale: en
kiStatus: No Fix
internalReference: 504992
---

## Summary


Currently, when using the search Navigator brand filter along with a price range in a VTEX Business Edition, products outside of the filtered brand can be shown.



* * *




## Simulation


1) Populate the search navigator controller with at least 2 brands, that is for a given category/subcategory, have at least 2 different brands listed:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)​

2) Subsequently, filter for only `Brand B`, for instance, now, only the results yielded by this specific brand for this category should be shown,

3) By interacting with the price range slider, if you filter for a price, the brand filter performed on step #3 is ignored, that is, you'll possibly have products from Brand A being shown on Brand B's results.



* * *




## Workaround


Directly use the search API using the priceRange and brand filters simultaneously, the search response is sending the correct results
https://developers.vtex.com/vtex-rest-api/reference/search-3#productsearchfilteredandordered

(example: `https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?fq=C%3A%2F1000050%2F1000155?fq=C:/1000050/1000155&P:[20830 TO 24100]`)

