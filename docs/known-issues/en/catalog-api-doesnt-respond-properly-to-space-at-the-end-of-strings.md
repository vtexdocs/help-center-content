---
title: "Catalog API doesn't respond properly to space at the end of strings"
id: 37TmHtc19126iarlQ4IL2p
status: PUBLISHED
createdAt: 2024-02-05T16:49:35.136Z
updatedAt: 2024-07-01T18:49:25.845Z
publishedAt: 2024-07-01T18:49:25.845Z
firstPublishedAt: 2024-02-05T16:49:36.178Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-api-doesnt-respond-properly-to-space-at-the-end-of-strings
locale: en
kiStatus: No Fix
internalReference: 977033
---

## Summary


When using the catalog API collection, if a string JSON field is sent ending with spaces (for instance productName: "myProductName    ") the catalog APIs will respond with an improper 400 response and empty response body, leaving the user clueless about what was sent improperly.

The correct response should still be a 400 (bad request) but with an error handling informing which field is incorrect and why.


##

## Simulation


For any catalog API (https://developers.vtex.com/docs/api-reference/catalog-api) insert 1+ empty spaces at the end of a string field, such as exemplified above.


##

## Workaround


n/a

This type of string should not be accepted, but the error handling must be adjusted.





