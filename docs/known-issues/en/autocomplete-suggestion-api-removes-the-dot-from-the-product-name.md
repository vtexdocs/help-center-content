---
title: 'Autocomplete Suggestion API removes the dot "." from the product name'
id: 55185IvERIwGQ3kH6H510O
status: PUBLISHED
createdAt: 2024-04-10T13:58:51.138Z
updatedAt: 2024-04-10T13:58:52.084Z
publishedAt: 2024-04-10T13:58:52.084Z
firstPublishedAt: 2024-04-10T13:58:52.084Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: autocomplete-suggestion-api-removes-the-dot-from-the-product-name
locale: en
kiStatus: Backlog
internalReference: 1014701
---

## Summary


This issue occurs when searching for a term, and the autocomplete suggestion returns the product name without the dot character ".", even if it exists in the product name, resulting in incorrect search results.


##

## Simulation



1. GET` https://..com.br/api/io/_v/api/intelligent-search/autocomplete_suggestions?query=`.
2. Observe the autocomplete suggestions provided by the system.
3. Note that the dot character is missing from the selected product name.

For example, if the term "headphone" is searched in the autocomplete suggestion API, the suggestion results, if containing a dot in the name, will be displayed as "Headphone Bluetooth 5 0" instead of having the dot in the number "5.0". The correct format should be "Headphone Bluetooth 5.0".

When using this suggestion in the product_search API, will not return results.


##

## Workaround


N/A





