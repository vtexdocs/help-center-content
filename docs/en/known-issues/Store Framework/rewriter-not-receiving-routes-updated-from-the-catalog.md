---
title: "Rewriter not receiving routes updated from the catalog"
id: 48eSYkPCRaaYJZESFdob8M
status: PUBLISHED
createdAt: 2025-01-31T13:38:40.156Z
updatedAt: 2025-01-31T13:38:41.017Z
publishedAt: 2025-01-31T13:38:41.017Z
firstPublishedAt: 2025-01-31T13:38:41.017Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: rewriter-not-receiving-routes-updated-from-the-catalog
locale: en
kiStatus: Backlog
internalReference: 1172080
---

## Summary


Some catalog updates related to routes are not arriving at the rewriter. This can happen with categories, brands, subcategories, or departments. When you create a new route or edit an existing one, the bootstrap query would be enough to update those routes on the rewriter, but it will not work in particular cases. The rewriter will not receive the route, and if you try to access it in the store, the route will not have products, or the "something exploded" error can appear on the screen.


##

## Simulation


If you have a route without products or with an error, try running the bootstrap query first:
 ![](https://vtexhelp.zendesk.com/attachments/token/lgRhaWsmwABr8rF4ow1DmLNwC/?name=image.png)

    {bootstrap{brandscategories}}


If it doesn't work, check if the rewriter is receiving the route, if the response is null then rewriter didn't received the update:
 ![](https://vtexhelp.zendesk.com/attachments/token/W3vx3sa1BFL2DOSIsTh49tuvk/?name=image.png)

    {internal{get(path:"/test"){fromdeclarerid}}}



##

## Workaround


You can try adding the route manually with the following mutation:

    mutation saveInternal($route: InternalInput!) {internal {save(route: $route) {fromdeclarertypeidqueryendDatebindingresolveAsorigindisableSitemapEntry}}}



    {"route": {"from": "","query": {"map": "" //it can be "b" for brands, for example},"declarer": "vtex.store@2.x","binding": "","type": "","id": "U050MLNQDL2","origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap"}}





