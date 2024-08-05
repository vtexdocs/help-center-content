---
title: "Merchandising rules not working for the facet 'productClusterIds'"
id: 6sLODMgjuoyJD52uc0DBW1
status: PUBLISHED
createdAt: 2024-07-09T00:02:40.930Z
updatedAt: 2024-07-09T00:02:41.798Z
publishedAt: 2024-07-09T00:02:41.798Z
firstPublishedAt: 2024-07-09T00:02:41.798Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: merchandising-rules-not-working-for-the-facet-productclusterids
locale: en
kiStatus: Backlog
internalReference: 1062457
---

## Summary


Merchandising rules are not applied to the facet "productClusterIds". This happens because this facet has the special behavior of sorting the products by the collection order instead of relevance and merch rules.

This facet should not be considered valid for a merch rule.


##

## Simulation



- create a collection with some products in a specific order
- create a merch rule explicitly filtered by "productClusterIds" or "productClusterSearchableIds"
- set this rule to sort the products in a different order
- check in the store that the products will keep the collection sorting


##

## Workaround


The expected way to manage and sort products in a collection is to do it directly on the collection by adding/removing products or changing their position.

It's also possible to apply the merch rule to the facet "productClusterNames" instead. This facet follows the relevance rules instead of the collection order and works with merchandising rules.




