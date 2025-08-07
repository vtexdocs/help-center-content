---
title: "Sampling for search filters unexpectedly aggressive omitting filter values"
id: 3r9WQkX3ptt2iWjC0xKTdM
status: PUBLISHED
createdAt: 2025-04-01T01:30:33.832Z
updatedAt: 2025-04-01T01:30:34.481Z
publishedAt: 2025-04-01T01:30:34.481Z
firstPublishedAt: 2025-04-01T01:30:34.481Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sampling-for-search-filters-unexpectedly-aggressive-omitting-filter-values
locale: en
kiStatus: Backlog
internalReference: 1202555
---

## Summary


When a product search finds more than 30.000 results, for efficiency purposes, it is defined that attribute filters are computed on top of only the first 30.000 most relevant products (following the store's relevance settings) inside the specific search.

Due to a problem, filters are actually being computed over products that are not from the specific search, reducing the universe of filters that should be offered because they are from unrelated products.


##

## Simulation


To simulate the scenario, consider something like a store with 500k products and a specific category with 35k products.

While browsing this category, since the sampling is expected to use the 30k more relevant products, filters should be close enough to all the values the category can offer. However, with this problem, it may offer fewer filters than expected because the sampling was filled with products from other categories whose filters won't be considered.


##

## Workaround


N/A

