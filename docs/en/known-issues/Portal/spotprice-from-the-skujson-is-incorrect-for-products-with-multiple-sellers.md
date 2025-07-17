---
title: "spotPrice from the skuJson is incorrect for products with multiple Sellers"
id: 6rgLJCE1DYPXZj1Pqt6hA2
status: PUBLISHED
createdAt: 2022-02-24T15:32:40.223Z
updatedAt: 2024-02-16T20:30:08.928Z
publishedAt: 2024-02-16T20:30:08.928Z
firstPublishedAt: 2022-02-24T15:32:41.286Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: spotprice-from-the-skujson-is-incorrect-for-products-with-multiple-sellers
locale: en
kiStatus: No Fix
internalReference: 264791
---

## Summary


Value of the "spotPrice" (spot price) in the "skuJson" of the Portal incorrect in products with multiple sellers.

In the installmentOptions of checkout and Search API will be correct, and spotPrice value of richSnippets and skuPrice viewparts (printed in HTML) as well. But skuJson seems to be stuck with seller 1.







## Simulation


- have a product/sku sold by several sellers in addition to the marketplace itself.

- have setup the "paymentSystemId" in skuPrice and/or richSnippets viewparts.

- observe the information returned by the Portal application.







## Workaround



There is no workaround for skuJson specifically.

The other information on the page should be used.

