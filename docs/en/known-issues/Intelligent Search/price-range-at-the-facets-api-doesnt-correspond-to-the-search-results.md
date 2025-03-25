---
title: "Price range at the facets API doesn't correspond to the search results"
id: 2X9Z21u9kJh55uWu6o6sP3
status: PUBLISHED
createdAt: 2024-03-08T22:36:43.149Z
updatedAt: 2024-03-08T22:36:44.086Z
publishedAt: 2024-03-08T22:36:44.086Z
firstPublishedAt: 2024-03-08T22:36:44.086Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: price-range-at-the-facets-api-doesnt-correspond-to-the-search-results
locale: en
kiStatus: Backlog
internalReference: 997121
---

## Summary


The price ranges from the facets API ("Get list of the possible facets for a given query") may vary between returning buckets of "from" and "to" values with rounded prices and the minimum and maximum prices between the search results.

While the rounded prices generate a better UX to present a list of price ranges to the shopper, it's not desired to use as a price "slider".

Moreover, since the minimum and maximum prices are applied at a second moment, the price ranges as "buckets" in a search that already applies a price filter get out of bounds of bounds in relation to the specified prices.


##

## Simulation


Using the  API, make a request with and without a price filter like "/price/100:500" and observe the returned price ranges (from/to) in the "values" object for the facet with type "PRICERANGE".


##

## Workaround


N/A

