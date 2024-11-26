---
title: 'Unsupported fields by the Intelligent Search API returning empty'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-10-30T16:23:41.744Z
publishedAt: 2024-10-30T16:23:41.744Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: en
kiStatus: Backlog
internalReference: 1032531
---

## Summary


The Intelligent Search API is mainly based on the legacy Catalog Search API for compatibility reasons, but not every property returns the same information. In some cases, it is different or empty.

Some affected properties:

- ".items.attachments" (returns empty)
- ".items.isKit" (always return false)
- ".items.kitItems" (returns empty)
- ".items.estimatedDateArrival" (returns empty)
- ".items.modalType" (returns empty)
- ".items.images.imageText" (returns the same as "imageLabel")
- ".items.sellers.commertialOffer.PaymentOptions" (not available, but summarized version available at ".commertialOffer.PaymentOptions")


##

## Simulation



- register value for an affected field in the Catalog module
- compare the response for the specific field between the Catalog Search and Intelligent Search APIs


##

## Workaround


N/A




