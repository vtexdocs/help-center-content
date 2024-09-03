---
title: 'Breadcrumb not being read by crawlers due SSR timeout'
id: 3Xyp2JVHVvlouNrRkDEL1O
status: PUBLISHED
createdAt: 2023-01-31T15:52:59.855Z
updatedAt: 2023-01-31T15:54:26.534Z
publishedAt: 2023-01-31T15:54:26.534Z
firstPublishedAt: 2023-01-31T15:53:00.864Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: breadcrumb-not-being-read-by-crawlers-due-ssr-timeout
locale: en
kiStatus: Backlog
internalReference: 460999
---

## Summary


When first loading the breadcrumbs, the data from categories list is getting faster than the one in category tree send by the facets query, this is causing an unexpected behavior on the load time of the breadcrumb, because the categories list bring also similar categories of similar products and doesn't have all necessary information for json+ld.


##

## Simulation



Open a product page

Disable javascript for the page (this will guarantee that you will work on SSR)

Refresh the page

You will see that the breadcrumb will load at first the entire category tree duo the necessary time to fetch, and then, will bring the expected results (from category tree), if there are no similar categories for the categories, you won't see any visual effect

Another way to reproduce is going to https://validator.schema.org/
and try to validate the product page, if the breadcrumb is there, there's no problem with your product, if it's not there, this is the KI


##

## Workaround


No

