---
title: 'Search with specification parameter returns empty search. What to do?'
id: 5qG7kkEeOsG6OQgu8YAKko
status: CHANGED
createdAt: 2018-01-31T15:46:42.842Z
updatedAt: 2020-11-27T19:39:57.229Z
publishedAt: 2020-04-20T15:15:13.316Z
firstPublishedAt: 2018-01-31T16:25:57.832Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slugEN: search-with-specification-parameter-returns-empty
locale: en
legacySlug: search-with-specification-parameter-returns-empty
---

>⚠️ **Warning**: VTEX has two search options - VTEX search and VTEX Intelligent Search. This article refers to the VTEX search. To learn more about the VTEX Intelligent Search application, see <a href = "https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">this track</a>.

If the URL `http://www.{account-name}.com.br/busca/?fq=specificationFilter_{XXX}:{Y}` is not bringing the products/SKUs that have the intended specification, the __Filter__ parameter is not marked in the product/SKU field registration.

To resolve the issue, follow the steps below:

1. Access the __Catalog__ module.
2. Click on __Category__.
3. Click the category where the specification was registered. You must click the root category where the specification was created.
4. On the right side of the category tree, on the blue menu, click __actions__.
5. Depending on where the specification is registered, click __Field (Product)__ or __Field (SKU)__.
6. In the specification you want, click __Change__.
7. Check the __Filter__ flag.
8. Click __Save__.
