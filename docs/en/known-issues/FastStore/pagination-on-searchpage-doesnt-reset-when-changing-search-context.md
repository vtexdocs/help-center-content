---
title: "Pagination on searchpage doesn't reset when changing search context"
id: 2lNL95NDZvO8NqxhJDrA6G
status: PUBLISHED
createdAt: 2023-07-06T19:54:29.289Z
updatedAt: 2023-07-06T19:58:59.059Z
publishedAt: 2023-07-06T19:58:59.059Z
firstPublishedAt: 2023-07-06T19:54:29.968Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pagination-on-searchpage-doesnt-reset-when-changing-search-context
locale: en
kiStatus: Scheduled
internalReference: 857392
---

## Summary


While navigating on a given page of a PLP, fetching to show more results, and changing the context to navigate in a different department, the pagination param will be kept and the search result will start on the new category in the same page that we were previously


##

## Simulation



Following the steps:


- Go to: https://starter.vtex.app/computer---software
- Click on Load more products (the page parameter in your URL is going to change)
- Click on a different department (for example Technology)
- Check that the page technology will start with the pagination that you were previously


##

## Workaround


There is no workaround available.





