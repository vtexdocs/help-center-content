---
title: "Configuration \"Blocks default routes in other bindings\" on Rewriter can lead to 'Not Found' Page after applying filters"
id: 5JQOG3F10eJTyDWb6wicSx
status: PUBLISHED
createdAt: 2025-02-06T22:06:32.453Z
updatedAt: 2025-02-06T22:06:33.228Z
publishedAt: 2025-02-06T22:06:33.228Z
firstPublishedAt: 2025-02-06T22:06:33.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: configuration-blocks-default-routes-in-other-bindings-on-rewriter-can-lead-to-not-found-page-after-applying-filters
locale: en
kiStatus: Backlog
internalReference: 1175760
---

## Summary


This issue only occurs in cross-border stores. When applying certain filters on a search page, the page breaks and redirects to a "Not Found" page. The issue is caused by the configuration "Blocks default routes in other bindings" in the Rewriter app.


##

## Simulation



1. Access the search page of a cross-border store.
2. Apply one or more specific filters.
3. Observe that when trying to load the results, the page redirects to a "Not Found" page.


##

## Workaround


Setting the `preventRouteChange` property to `true` in the Search Result component prevents the issue from occurring.





