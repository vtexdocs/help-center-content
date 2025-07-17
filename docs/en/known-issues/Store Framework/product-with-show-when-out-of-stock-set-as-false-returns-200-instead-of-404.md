---
title: "Product with 'Show When Out of Stock' set as false returns 200 instead of 404"
id: 5DV3Wpp568wKR8LNvbwurd
status: PUBLISHED
createdAt: 2025-05-27T17:32:29.271Z
updatedAt: 2025-05-27T17:32:29.806Z
publishedAt: 2025-05-27T17:32:29.806Z
firstPublishedAt: 2025-05-27T17:32:29.806Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: product-with-show-when-out-of-stock-set-as-false-returns-200-instead-of-404
locale: en
kiStatus: Backlog
internalReference: 1233974
---

## Summary


When a product exists in the catalog but is out of stock and has the `Show when out of stock` flag set to `false`, accessing its URL returns a `200 OK` status code and redirects to a URL containing the `ProductLinkNotFound` parameter. The correct behavior should be to return a `404 Not Found` response immediately.


##

## Simulation




1. Ensure a product exists in VTEX.
2. Set the product's inventory to zero.
3. Set the `Show when out of stock` flag to `false`.
4. Try accessing the product’s PDP URL.
5. Observe that the request returns a `200 OK` status and redirects to a page with `ProductLinkNotFound` in the URL.


##

## Workaround


N/A





