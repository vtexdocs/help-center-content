---
title: 'Querying Master Data via Scroll route'
id: tutorials_4631
status: DRAFT
createdAt: 2017-04-27T21:49:43.180Z
updatedAt: 2022-10-17T20:09:11.259Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.176Z
contentType: tutorial
productTeam: Post-purchase
author: authors_64
slug: querying-the-master-data-via-scroll-path
locale: en
legacySlug: querying-the-master-data-via-scroll-path
subcategory: WpbGhubuRZaNZilJSXnqu
---

To query the Master Data, you can use the older `search` route or the `scroll` route, which was developed more recently. This article is intended to explain the main differences between these two routes, and to give details of how the `scroll` route works.

The `search` route is mainly used for paged queries. And it should continue to be used this way. However, the greater the interval of documents, the slower the query will be.

To get better performance in these cases, you should create a filter. Reducing the number of documents in the final result is the best way to achieve an efficient query.

- The `search` route is the best solution for cases where we need to find a collection of documents directly in the store.
- The `scroll` route was developed for cases of external integration. If what you need is to query **the entire database** of VTEX Master Data or if your collection of documents numbers **more than 10 thousand**, use this tool.

### How does the scroll route work?

First you will make a query on the `scroll` route using the same filtering resources as for the `search` route. In response to your first request, you will get a token in the header `X-VTEX-MD-TOKEN`.

Use this token for your next requests until an empty list is returned.

### Limitations

1. You can only do one operation at a time. This means that when you receive a token on your first request, you must complete the search, or wait until the token expires;
2. The token expires after 20 minutes. If the VTEX Master Data receives no more requests with the token, it will expire in 20 minutes and you can then make new requests of the `scroll` type;
3. The maximum number of documents per request is **one thousand**.

For more details, see our [documentation for MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview) APIs.

