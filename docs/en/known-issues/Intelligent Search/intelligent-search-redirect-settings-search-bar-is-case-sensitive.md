---
title: 'Intelligent Search Redirect settings search bar is case sensitive'
id: 5QEkcyhCQWyw093UkDCeOq
status: PUBLISHED
createdAt: 2023-09-26T23:50:50.661Z
updatedAt: 2023-09-26T23:50:51.661Z
publishedAt: 2023-09-26T23:50:51.661Z
firstPublishedAt: 2023-09-26T23:50:51.661Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: en
kiStatus: Backlog
internalReference: 361894
---

## Summary


The Intelligent Search Redirect settings page has a search bar to help find specific redirect settings, but it is case sensitive and will only find terms if they match exactly.


##

## Simulation


Access `/admin/search/redirects`.

Search for a setting name, but changing one letter to uppercase. The search won't fetch any result.


##

## Workaround


Generate route names with a consistent pattern, only lower case, only uppercase or camel case.

