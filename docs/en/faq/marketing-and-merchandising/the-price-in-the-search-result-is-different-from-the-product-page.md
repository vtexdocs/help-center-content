---
title: 'The price in the search result is different from the product page'
id: 2A75LUcywLJdeq38hsBhk0
status: PUBLISHED
createdAt: 2023-02-28T21:09:23.876Z
updatedAt: 2023-02-28T21:11:29.565Z
publishedAt: 2023-02-28T21:11:29.565Z
firstPublishedAt: 2023-02-28T21:11:29.565Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: the-price-in-the-search-result-is-different-from-the-product-page
locale: en
legacySlug: the-price-in-the-search-result-is-different-from-the-product-page
---

When [updating a SKU price](/en/docs/tutorials/sku-price-change), the price in the search result may differ from the price or inventory on the product page if the store uses [Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

To use Intelligent Search, you need to configure the [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) app. The property `simulationBehavior`, which determines how the search data will be updated, can be set to the value `skip`. This setting speeds up the loading of the search, but it can lead to the mentioned inconsistency. The search page information will be updated automatically, but the store can set the `simulationBehavior` property to the `default` value to avoid future inconsistencies.
