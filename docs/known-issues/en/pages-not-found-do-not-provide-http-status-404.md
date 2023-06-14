---
title: 'Pages not found do not provide HTTP Status 404'
id: 45TCR3O8V2uyWcwmqYs4qS
status: PUBLISHED
createdAt: 2017-10-14T20:05:49.329Z
updatedAt: 2022-12-22T20:45:04.470Z
publishedAt: 2022-12-22T20:45:04.470Z
firstPublishedAt: 2017-10-14T20:23:53.353Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: pages-not-found-do-not-provide-http-status-404
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When accessing non-existent pages of the web site the user is referred to `/system/404` or `/system/emptysearch`, according to the context. But these pages don't respect the HTTP specification, returning status "200 OK" instead of "404 Not found", specifying that the desired content could not be found.

One of the relevant cases is the correct interpretation of Google when indexing the page, so pages with content not found should not be indexed.

## Simulation

Access any non-existent page from your store, or directly enter `/system/404` or `/sistema/emptysearch`, and then check the HTTP response status of the request, which will be "200 OK".

## Workaround

In case of pages being recurrently indexed by Google, the best option is to create a [URL mapping](/en/faq/url-mapping-301-redirect), directing the content of the non-existent page to a relevant one.

