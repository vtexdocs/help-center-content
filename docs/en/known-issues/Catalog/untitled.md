---
title: "Fullcleanup Timeout"
id: 4PoY6rRs2SEgKfpQNetdHn
status: PUBLISHED
createdAt: 2022-01-26T15:08:31.521Z
updatedAt: 2023-05-25T14:54:03.807Z
publishedAt: 2023-05-25T14:54:03.807Z
firstPublishedAt: 2023-05-25T14:54:03.807Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: 
slugEN: untitled
locale: en
kiStatus: Backlog
internalReference: 277364
---

## Summary


in the `/admin/Site/fullcleanup.aspx `interface, using this procedure for >~20k products generates a timeout on Janus due to a >50s operation.

This is the same issue (origin) of several other timeouts in the catalog.



## Simulation


1) Create over ~20k products in a store.

2) Try running the delete products & SKUs procedure on the FullCleanUp interface: `.myvtex.com/admin/site/fullcleanup.aspx`

A 500 response will be returned along with a timeout error



## Workaround


- Ask the support team to perform this action.

