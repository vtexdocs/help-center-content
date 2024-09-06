---
title: 'The price in the search result is different from the product page'
id: 1108Xha3zw6ZvVUINfY7HR
status: PUBLISHED
createdAt: 2022-11-22T14:26:20.489Z
updatedAt: 2024-06-04T12:45:41.670Z
publishedAt: 2024-06-04T12:45:41.670Z
firstPublishedAt: 2022-11-22T14:42:50.738Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: the-price-in-the-search-result-is-different-from-the-product-page
locale: en
legacySlug: the-price-in-the-search-result-is-different-from-the-product-page
subcategoryId: 23NGhMgqA1eCYad7kzRFGu
---

When [updating a SKU price](https://help.vtex.com/en/tutorial/alteracao-de-preco-de-sku--tutorials_95), the price in the search result may differ from the price or inventory on the product page if the store uses [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). 

To use Intelligent Search, you need to configure the [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) app. The property `simulationBehavior`, which determines how the search data will be updated, can be set to the value `skip`. This setting speeds up the loading of the search, but it can lead to the mentioned inconsistency. The search page information will be updated automatically, but the store can set the `simulationBehavior` property to the `default` value to avoid future inconsistencies.
