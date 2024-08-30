---
title: "Create product API doesn't send nulls as Release Date values."
id: 6IjwYVm9SdNEtW9aNYkSrj
status: PUBLISHED
createdAt: 2024-04-29T15:10:44.454Z
updatedAt: 2024-04-29T15:10:45.337Z
publishedAt: 2024-04-29T15:10:45.337Z
firstPublishedAt: 2024-04-29T15:10:45.337Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: create-product-api-doesnt-send-nulls-as-release-date-values
locale: en
kiStatus: Backlog
internalReference: 1024207
---

## Summary


When using the create or update product APIs in the catalog application: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product and sending the field releaseDate as null, in its value, it is created with the current date instead.


##

## Simulation


1 - Create or update a new product, in your store, via the mentioned API, passing, in its request body, the releaseDate field as a null.
2 - Access the catalog admin UI or use a GET in the same API path to fetch the sent data
3 - The releaseDate field will be displaying the sent date's value instead of a null.


##

## Workaround


-





