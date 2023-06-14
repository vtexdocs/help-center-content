---
title: 'AutoComplete Search not working with space'
id: 1ZZGCHgsnJ512DAZv1iCy7
status: PUBLISHED
createdAt: 2022-04-28T16:03:43.077Z
updatedAt: 2022-11-25T22:09:56.187Z
publishedAt: 2022-11-25T22:09:56.187Z
firstPublishedAt: 2022-04-28T16:03:43.808Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: autocomplete-search-not-working-with-space
locale: en
kiStatus: Backlog
internalReference: 568821
---

## Summary



On Portal legacy stores, the auto-complete search does not work if the search terms have space.



## Simulation



- Go to the search bar and try to search for "super product", for example.
- The request will fail.

Although the auto-complete search does not work, the default search will work properly.



## Workaround


The workaround for this case is to use a javascript customization to make the autocomplete search work properly (using %20 instead of +)

