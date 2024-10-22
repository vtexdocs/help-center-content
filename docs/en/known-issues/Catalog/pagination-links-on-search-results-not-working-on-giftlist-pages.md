---
title: 'Pagination links on Search Results not working on Giftlist Pages'
id: 1w6h5MwZthKMM8rvqXZtQi
status: PUBLISHED
createdAt: 2022-11-02T14:01:35.650Z
updatedAt: 2024-02-16T20:26:50.585Z
publishedAt: 2024-02-16T20:26:50.585Z
firstPublishedAt: 2022-11-02T14:01:36.502Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pagination-links-on-search-results-not-working-on-giftlist-pages
locale: en
kiStatus: No Fix
internalReference: 481330
---

## Summary


Pagination links on `SearchResult` not working on `Giftlist`.



## Simulation


- Access a Giftlist with enough products to have pagination, use a default template without any customization;
- Check the Pagination links:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/pagination-links-on-search-results-not-working-on-giftlist-pages_1.png)

- These links don't work.



## Workaround


- Use a JS customization to load the request correctly, for example, the request should be something like this (it can be checked on Chrome Dev Tools): `buscapagina?PS=16&sl=7ec035e2-ab04-40c0-9cf0-cc669725b10a&cc=16&sm=0&PageNumber=2`

