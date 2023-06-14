---
title: Sitemap isn't being generated
id: 1tJ4XHtbnFsfS30JWXwxb0
status: PUBLISHED
createdAt: 2023-05-17T13:58:46.443Z
updatedAt: 2023-05-17T13:58:47.102Z
publishedAt: 2023-05-17T13:58:47.102Z
firstPublishedAt: 2023-05-17T13:58:47.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: sitemap-isnt-being-generated
kiStatus: Backlog
internalReference: 827104
---

## Summary


There are two scenarios where the sitemap is not being generated:
1 - When we have a product not found or with some kind of problem on the catalog the sitemap is not generated. You can search for the logs on OpenSearch, in this case, to check which product has a problem;
2 - When the account has the app `search.resolver@1.x`  the sitemap can have errors when:
          - a category has its first product coming from a similar category;
          - the search/brand/category page has no products, in this case, the page is not indexed on the sitemap, and its generation crashes


##

## Simulation


Try to generate the sitemap for an account that has one of the scenarios described above and it will crash


##

## Workaround


 - Create a new workspace
 - Install the `search-resolver@0.x`
 - Generate the new sitemap
 - Promote it to master
 But eventually, you will need to fix the scenario that prevents the sitemap from being generated




