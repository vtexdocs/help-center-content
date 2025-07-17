---
title: "Conflict between specifications with the same name at the Intelligent Search"
id: 1TcMLTNMMGqjgbGArywSeh
status: PUBLISHED
createdAt: 2023-11-10T00:13:18.275Z
updatedAt: 2024-06-24T13:48:09.391Z
publishedAt: 2024-06-24T13:48:09.391Z
firstPublishedAt: 2023-11-10T00:13:18.980Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: conflict-between-specifications-with-the-same-name-at-the-intelligent-search
locale: en
kiStatus: Fixed
internalReference: 933958
---

## Summary


Multiple specifications with the same name are grouped into the same _"facet"_ by the Intelligent Search, which can be a problem if they have different settings.

Some attributes that may be affected are the filter, hidden and indexed/searchable toggles, field type, and value position. There's no difference between being a product or SKU specification.

It is not possible to know which property will take precedence on top of the other.


##

## Simulation


For a store with:
- specification named "foo" (ID 1) set as a filter (to appear in the storefront) and with the value "bar" for a product;
- another specification named "foo" (but ID 2), which is not a filter, and with value "baz" for the same or another product.

The storefront may render a search filter for the facet/specification "foo" with both values "bar" and "baz" or even hide the whole filter.


##

## Workaround


Although the Catalog module does not block repeated specification names, this usage should be considered wrong.




