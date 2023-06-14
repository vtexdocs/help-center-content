---
title: Pagination links on Search Results not working on Giftlist Pages
id: 1w6h5MwZthKMM8rvqXZtQi
status: PUBLISHED
createdAt: 2022-11-02T14:01:35.650Z
updatedAt: 2022-11-25T21:41:59.731Z
publishedAt: 2022-11-25T21:41:59.731Z
firstPublishedAt: 2022-11-02T14:01:36.502Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: pagination-links-on-search-results-not-working-on-giftlist-pages
kiStatus: Backlog
internalReference: 481330
---

## Summary


Pagination links on `SearchResult` not working on `Giftlist`.



## Simulation


- Access a Giftlist with enough products to have pagination, use a default template without any customization;
- Check the Pagination links:

 ![](https://vtexhelp.zendesk.com/attachments/token/LAmUCIdMsybPqVkRGh9TcNq99/?name=inline-998244926.png)

- These links don't work.



## Workaround


- Use a JS customization to load the request correctly, for example, the request should be something like this (it can be checked on Chrome Dev Tools): `buscapagina?PS=16&sl=7ec035e2-ab04-40c0-9cf0-cc669725b10a&cc=16&sm=0&PageNumber=2`

