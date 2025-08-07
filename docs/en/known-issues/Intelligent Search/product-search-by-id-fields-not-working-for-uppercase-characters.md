---
title: "Product search by ID fields not working for uppercase characters"
id: iSeLIcjYkEsjj1OkotUqk
status: PUBLISHED
createdAt: 2025-04-04T00:45:00.414Z
updatedAt: 2025-04-04T00:45:01.483Z
publishedAt: 2025-04-04T00:45:01.483Z
firstPublishedAt: 2025-04-04T00:45:01.483Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-search-by-id-fields-not-working-for-uppercase-characters
locale: en
kiStatus: Backlog
internalReference: 1205216
---

## Summary


Searching by an ID, such as the "refId" for a product or SKU, does not work correctly while inserting uppercase characters.

The search will not find any result by the ID, but it may find products if the ID matches some searchable field of the product, which may come from the autocorrection (_fuzzy_) behavior.


##

## Simulation



- Register a product with "refId" as "ABC123".
- Search for "abc123", and the product will be found.
- Search for "ABC123", and the product will not be found.


##

## Workaround


Create a specification attribute to mirror the value for this ID and set it as a searchable field. It will not be able to apply the higher rank for ID matches nor work for partial ID matches, but it will help the product to be found.

