---
title: 'Faststore PDPs are not regionalized'
id: 17wHyAFHm5u2tyaxJ9mXNm
status: PUBLISHED
createdAt: 2024-08-28T19:48:35.858Z
updatedAt: 2024-08-29T11:16:39.495Z
publishedAt: 2024-08-29T11:16:39.495Z
firstPublishedAt: 2024-08-28T19:48:36.848Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: faststore-pdps-are-not-regionalized
locale: en
kiStatus: Backlog
internalReference: 1088656
---

## Summary


Fastsore uses the Intelligent search to load the PDP, but it doesn't use the regionID to load it on regionalized stores. This leads to problems with the items' availability. Also, we use the `hideUnavailableItems=true` prop on the query to load the PDP. This can lead to inconsistencies between the PLP (which is regionalized) and the PDP.


##

## Simulation


Try to look for a product that has stock in the regionID that you are regionalized in. If this product doesn't have stock on the comprehensive seller and only on specific sellers unrelated to this regionID, the PLP and the PDP may have different information.


##

## Workaround


Enable "ShowIfNotAvailable" in the products via Catalog to minimize the effects of this problem.
Add the seller as comprehensive so the product will be returned




