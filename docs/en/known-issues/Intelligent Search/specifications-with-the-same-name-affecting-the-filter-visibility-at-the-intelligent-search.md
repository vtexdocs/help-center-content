---
title: 'Specifications with the same name affecting the filter visibility at the Intelligent Search'
id: 2ez8tdBqUE03nTejbMLSFp
status: PUBLISHED
createdAt: 2024-08-09T00:01:34.212Z
updatedAt: 2024-08-09T00:15:49.192Z
publishedAt: 2024-08-09T00:15:49.192Z
firstPublishedAt: 2024-08-09T00:01:35.766Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: specifications-with-the-same-name-affecting-the-filter-visibility-at-the-intelligent-search
locale: en
kiStatus: Backlog
internalReference: 1078576
---

## Summary


Multiple specifications with the same name are grouped into the same _"facet"_ by the Intelligent Search, which can be problematic if they have different settings.

Some attributes that may be affected are the filter, hidden and indexed/searchable toggles, field type, and value position. There's no difference between being a product or SKU specification.

It is not possible to know which property will take precedence over the other.


##

## Simulation


For a store with:
- a specification named "type" (ID 1) set as a filter (to appear in the storefront);
- another specification named "type" (but ID 2), which is not set as a filter (to stay hidden from the storefront).

The storefront may or may not render the search filter for the facet/specification "type" due to the conflict with the "isFilter" property.


##

## Workaround


Although the Catalog module does not block repeated specification names, this usage should be considered wrong.




