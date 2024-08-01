---
title: 'Missing translation for the price facet/filter at Intelligent Search'
id: 6c6GnC1dKGViJ2h0ZoY5pm
status: PUBLISHED
createdAt: 2024-01-31T21:33:04.796Z
updatedAt: 2024-01-31T21:33:05.556Z
publishedAt: 2024-01-31T21:33:05.556Z
firstPublishedAt: 2024-01-31T21:33:05.556Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: missing-translation-for-the-price-facetfilter-at-intelligent-search
locale: en
kiStatus: Backlog
internalReference: 974840
---

## Summary


The Intelligent Search does not apply the translation to the filter/facet name "price" for additional languages when queried via REST API.

The primary language still returns the expected string as its internal configuration, but any other language will return this with "Price" as a fixed value.


##

## Simulation


In a store with multiple languages, set the translations for Intelligent Search context via the messages service to the secondary languages and query it using the facets API. Values for "Price" won't be considered, while it works for any other label, like the categories and brand.


##

## Workaround


N/A




