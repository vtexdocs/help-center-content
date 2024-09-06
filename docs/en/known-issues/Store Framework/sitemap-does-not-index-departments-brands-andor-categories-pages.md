---
title: 'Sitemap does not index departments, brands and/or categories pages'
id: 59AJOYBjpw23Ee8EXKOjUF
status: PUBLISHED
createdAt: 2024-08-06T19:23:18.073Z
updatedAt: 2024-08-06T19:28:46.754Z
publishedAt: 2024-08-06T19:28:46.754Z
firstPublishedAt: 2024-08-06T19:23:19.500Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: sitemap-does-not-index-departments-brands-andor-categories-pages
locale: en
kiStatus: Backlog
internalReference: 1076965
---

## Summary



When an account has the app `search.resolver@1.x`  the sitemap can have errors when:

- A category has its first product coming from a similar category;
- The brand/category/department page has no products; in this case, the page is not indexed on the sitemap, and its generation crashes
In both cases, the current page is not indexed in the sitemap, which usually leads to a sitemap without a brand, category, or department path.


##

## Simulation



Try to generate the sitemap for an account that has one of the scenarios described above and it will generate an incomplete sitemap.


##

## Workaround



- Create a new workspace
- Install the search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`
- Generate the new sitemap
- Now you can rollback search-resolver to 1.x (`vtex install vtex.search-resolver@1.x`)
- Promote the created workspace to master

Stay in mind that updating the store to resolver@0.x and generating the sitemap in a workspace is the workaround because some invalid cases don't happen in our legacy search.



