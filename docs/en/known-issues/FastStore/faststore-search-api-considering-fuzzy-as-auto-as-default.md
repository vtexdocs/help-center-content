---
title: "Faststore search api considering fuzzy as auto as default"
id: 5cfq9MV5QrygIaqJXqbXwZ
status: PUBLISHED
createdAt: 2024-11-11T18:37:39.992Z
updatedAt: 2024-12-02T16:40:08.053Z
publishedAt: 2024-12-02T16:40:08.053Z
firstPublishedAt: 2024-11-11T20:20:29.842Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considering-fuzzy-as-auto-as-default
locale: en
kiStatus: Fixed
internalReference: 1133355
---

## Summary


In package @fatstore/api, for the Intelligent Search resolver, we are considering fuzzy as auto by default when it should be 0, this is causing the behavior of fuzzy to be applied causing a "fake missmatch" in search results when we really have an exact match with the searched term, but, we display more results regardless that


##

## Simulation


This is easy to be replicable when you search for any product, sku, or ref ID, the expected result is to display only products that matches with the ID, but, it will display more than one


##

## Workaround


N/A





