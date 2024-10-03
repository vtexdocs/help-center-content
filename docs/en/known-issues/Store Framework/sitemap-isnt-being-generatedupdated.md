---
title: "Sitemap isn't being generated/updated"
id: 1tJ4XHtbnFsfS30JWXwxb0
status: PUBLISHED
createdAt: 2023-05-17T13:58:46.443Z
updatedAt: 2024-08-06T20:19:23.886Z
publishedAt: 2024-08-06T20:19:23.886Z
firstPublishedAt: 2023-05-17T13:58:47.102Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-isnt-being-generatedupdated
locale: en
kiStatus: Fixed
internalReference: 827104
---

## Summary



There are three scenarios where the sitemap is not being generated/updated:



1. When we have a product not found or with some kind of problem on the catalog the sitemap is not generated. You can search for the logs on OpenSearch, in this case, to check which product has a problem;



2. When the account has the app `search.resolver@1.x`  the sitemap can have errors when:



- A category has its first product coming from a similar category (the merch rules can have an impact on this case depending on the product you're promoting);
- The search/brand/category page has no products, in this case, the page is not indexed on the sitemap, and its generation crashes

3. Products that don't have the trade policy set on the catalog won't be received by the sitemap



##

## Simulation


** **
Try to generate the sitemap for an account that has one of the scenarios described above and it will crash


##

## Workaround


** **

- Create a new workspace
- Install the search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`
- Generate the new sitemap
- Now you can rollback search-resolver to 1.x (`vtex install vtex.search-resolver@1.x`)
- Promote the created workspace to master

Obs: This workaround may not work at all times. Sometimes the store can have so many invalid products that even the `search-resolver@0.x` will not update the sitemap.

But eventually, you will need to fix the scenario that prevents the sitemap from being generated

Stay in mind that updating the store to resolver@0.x and generate the sitemap in a workspace is the workaround because some invalid cases don't happen in our legacy search

We released a new version of the sitemap app (`vtex.store-sitemap@2.16.1`) which solves the problems with product routes. So, this issue is fixed:

> _When we have a product not found or with some kind of problem on the catalog the sitemap is not generated. You can search for the logs on OpenSearch, in this case, to check which product has a problem;_

 Now we divided the other sitemap problems into two other KIs, which are: https://help.vtex.com/en/known-issues/sitemap-not-generating-due-a-timeout-toomanyrequests--60BSLo3INhsKDkarla38VZ and https://help.vtex.com/en/known-issues/sitemap-does-not-index-departments-brands-andor-categories-pages--59AJOYBjpw23Ee8EXKOjUF. So we can keep track of each case separately and deal with each of them.




