---
title: "Intelligent Search not returning correct SKU Order"
id: 6gR3dsK9CFxfwss6Am89wA
status: PUBLISHED
createdAt: 2022-11-07T15:09:48.448Z
updatedAt: 2023-05-24T20:16:14.728Z
publishedAt: 2023-05-24T20:16:14.728Z
firstPublishedAt: 2022-11-07T15:09:49.492Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-not-returning-correct-sku-order
locale: en
kiStatus: Fixed
internalReference: 677937
---

## Summary


Intelligent Search API not returning the expected order of the SKU's variations for a product in search and shelves


##

## Simulation


Go to a product page, check the SKU order, go to the search page, check the SKU order (sometimes it will display correctly, sometimes it doesn't)


##

## Workaround


The prop sortVariationsByLabel from sku selector might be able to solve some cases

https://developers.vtex.com/docs/guides/vtex-store-components-skuselector

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Intelligent%20Search/intelligent-search-not-returning-correct-sku-order_1.png)




