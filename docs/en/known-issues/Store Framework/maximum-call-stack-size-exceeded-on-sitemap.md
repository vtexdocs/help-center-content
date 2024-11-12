---
title: 'Maximum call stack size exceeded on Sitemap'
id: 7ItwuSgaSilfBo0zrGania
status: PUBLISHED
createdAt: 2024-11-08T21:01:17.861Z
updatedAt: 2024-11-08T21:01:19.193Z
publishedAt: 2024-11-08T21:01:19.193Z
firstPublishedAt: 2024-11-08T21:01:19.193Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: maximum-call-stack-size-exceeded-on-sitemap
locale: en
kiStatus: Backlog
internalReference: 1132723
---

## Summary


The current store-sitemap generation process cannot efficiently handle stores with very large catalogs in Store Framework stores. When dealing with a high volume of products the generation breaks because of the size of the main file on the sitemap.


##

## Simulation



- Open the site with a large catalog (e.g., millions of products and categories).
- Trigger the sitemap generation process and try to access in myvtex domain.
- Observe that the sitemap returns "Maximum call stack size exceeded"


##

## Workaround


N/A





