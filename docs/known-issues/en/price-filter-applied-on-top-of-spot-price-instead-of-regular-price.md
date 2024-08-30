---
title: "Price filter applied on top of 'spot price' instead of regular price"
id: 2EEgRV1NxYuns4eF7F0ZqD
status: PUBLISHED
createdAt: 2024-02-15T19:39:53.576Z
updatedAt: 2024-02-15T19:39:54.436Z
publishedAt: 2024-02-15T19:39:54.436Z
firstPublishedAt: 2024-02-15T19:39:54.436Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: price-filter-applied-on-top-of-spot-price-instead-of-regular-price
locale: en
kiStatus: Backlog
internalReference: 982664
---

## Summary


Price filters are applied on top of the "spotPrice" value, which is the price for special payment conditions, instead of the item's regular price.

This may affect expectations while diverging from most places, which focus on the regular price, as the shelves and cart usually do, or properties like "priceRange" from the API.


##

## Simulation


Consider a product priced at $430 with 10% off in a specific payment method, generating a "spot price" of $387.

Filtering by items with a price between $300 to $400 will return this product, which usually will be shown on the shelf as $430 (its regular price), generating the perception of divergence.

In the same way, the "priceRange" property from the API will answer with the following values (considering this product as the single result for this search query), feeding the sense of divergence:

    "priceRange": { "sellingPrice": { "highPrice": 430, "lowPrice": 430 }, "listPrice": { "highPrice": 430, "lowPrice": 430 }}



##

## Workaround


N/A





