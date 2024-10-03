---
title: 'Expired temporary redirects not pointing back to old route'
id: 1kI87EueEtHIyfZ4KmUJSF
status: PUBLISHED
createdAt: 2023-09-12T14:41:09.843Z
updatedAt: 2023-09-12T14:41:11.758Z
publishedAt: 2023-09-12T14:41:11.758Z
firstPublishedAt: 2023-09-12T14:41:11.758Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: expired-temporary-redirects-not-pointing-back-to-old-route
locale: en
kiStatus: Backlog
internalReference: 898062
---

## Summary



When a redirect route is created, the internal route is removed, but, when the redirect expires the route doesn't come back


##

## Simulation




- Create a temporary redirect
- Check and this will redirect properly
- After the expiration date, check it again
- The original path/route will not load properly


##

## Workaround


The route will only work again if you create it once again in the rewriter



