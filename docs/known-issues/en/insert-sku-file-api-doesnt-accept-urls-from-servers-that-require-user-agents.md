---
title: "Insert SKU File API doesnt accept URLs from servers that require 'User Agents'"
id: 5Z1PmRXyW78mohsKTMQfzj
status: PUBLISHED
createdAt: 2024-07-22T19:49:14.140Z
updatedAt: 2024-07-22T19:49:15.319Z
publishedAt: 2024-07-22T19:49:15.319Z
firstPublishedAt: 2024-07-22T19:49:15.319Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-user-agents
locale: en
kiStatus: Backlog
internalReference: 1069222
---

## Summary


A **user-agent** is a string of text that a web browser or other client sends to a web server in an HTTP request header to identify itself. This string contains information about the browser type, operating system, and sometimes additional details like the browser version and the rendering engine used.

This is often requested as a security measure by servers, such as ones that host images, that can be passed via URL in the request body of the insert SKU file API.

This kind of authentication, however, is not currently supported by the VTEX APIs.


##

## Simulation


1 - Using either the Create or Update (write methods) SKU file API passing down an URL that has server-side user agent requirement to fetch data https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file

2 - A 40x type response will be shown, either a generic 400 or a more specific 403 depending on the type of response implemented.



##

## Workaround


Either opt for the file upload va spreadsheet, form-data (using the APIs) or disable the user-agent requirements on the server-side.





