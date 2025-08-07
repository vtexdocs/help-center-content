---
title: "Rewriter is not receiving URL updates"
id: 4c3S9s57SzQCv8zv4L77Fu
status: PUBLISHED
createdAt: 2024-07-16T19:24:56.813Z
updatedAt: 2024-09-10T20:48:01.988Z
publishedAt: 2024-09-10T20:48:01.988Z
firstPublishedAt: 2024-07-16T19:24:57.773Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: rewriter-is-not-receiving-url-updates
locale: en
kiStatus: Backlog
internalReference: 1066527
---

## Summary


When a URL is changed/deleted on the catalog, the rewriter does not receive this change. Since the rewriter is not notified about it, the URL is still pointing to the wrong type, which can also lead to problems on the IS.

This can also happen when creating new category/subcategory routes on the catalog. The rewriter sometimes will need you to run the bootstrap query to receive those routes.


##

## Simulation


Try deleting an existing brand from the catalog
Run the mutation to see how this path is being received on the rewriter

    {internal{ get(path:"/brand"){   from   declarer   query   disableSitemapEntry }}}

If you look for that brand on the storefront, it will still be pointing to a `map=b`

You can also check how this path is being returned on the pageType; if it is a fullText, the pageType was updated, and the rewriter didn't.


##

## Workaround


Try deleting the route manually from the rewriter:

    mutation{ internal{   delete(path:"/path"){     from     id     resolveAs   } }}


Try running the bootstrap query to update the rewriter:

    {bootstrap { brands categories}}





