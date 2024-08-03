---
title: 'Slug and Link returned in the Catalog Facets API have different formats.'
id: 3LbYdhZhjsvUuQNC7VJN5G
status: PUBLISHED
createdAt: 2024-03-12T15:43:07.017Z
updatedAt: 2024-03-12T15:43:08.057Z
publishedAt: 2024-03-12T15:43:08.057Z
firstPublishedAt: 2024-03-12T15:43:08.057Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: slug-and-link-returned-in-the-catalog-facets-api-have-different-formats
locale: en
kiStatus: Backlog
internalReference: 998397
---

## Summary


Catalog Facets API described here: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/facets/search/-term-
The response objects have the field "Slug", "Link" and "LinkEncoded". However, these fields should have the same format, but they diverge on the PriceRanges object when the value has decimal cases.

Example:
Slug: "de-100-a-199.99"
Link: "/category-test/de-100-a-199-99?map=c,priceFrom"

The Slug has the character "." while the Link has the character "-".



##

## Simulation



1. Have a category with a priceRange with decimal values.
2. Request the facets API
3. Check that the characters are different.


##

## Workaround


N/A





