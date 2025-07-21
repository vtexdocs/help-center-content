---
title: "Fullcleanup May Generate a Timeout"
id: 673OJraCsU37dMnWSVbg7z
status: PUBLISHED
createdAt: 2025-05-16T17:06:43.674Z
updatedAt: 2025-05-23T18:21:36.385Z
publishedAt: 2025-05-23T18:21:36.385Z
firstPublishedAt: 2025-05-16T17:06:44.231Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fullcleanup-may-generate-a-timeout
locale: en
kiStatus: Backlog
internalReference: 1228132
---

## Summary


in the `/admin/Site/fullcleanup.aspx `interface, using this procedure for accounts with several products, brands or categories generates a timeout, which usually yields a 500 error and no results when performing the operation.

This is the same issue (origin) of several other timeouts in the catalog.


##

## Simulation


1) Create over ~5k products in a store. (this is just a rough estimate, it may happen for more or less products than that)

2) Try running the delete products & SKUs procedure on the FullCleanUp interface: `.myvtex.com/admin/site/fullcleanup.aspx`

A 500 response will be returned along with a timeout error


##

## Workaround


- Ask the support team to perform this action.





