---
title: 'Failed searches are treated as "not found"'
id: m4OpfsQdSSxgSbY5ANOs8
status: PUBLISHED
createdAt: 2024-08-27T21:28:27.655Z
updatedAt: 2024-08-27T21:28:28.343Z
publishedAt: 2024-08-27T21:28:28.343Z
firstPublishedAt: 2024-08-27T21:28:28.343Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: failed-searches-are-treated-as-not-found
locale: en
kiStatus: Backlog
internalReference: 1088047
---

## Summary


When we perform a search that fails, the response page is not found instead of a "something went wrong, please try again." This gives the user the wrong idea that the results don't exist instead of a momentaneous error on the search result.


##

## Simulation


When a search page returns an error (not a "not-found" search, but an error itself), the response is not an error message.


##

## Workaround


N/A





