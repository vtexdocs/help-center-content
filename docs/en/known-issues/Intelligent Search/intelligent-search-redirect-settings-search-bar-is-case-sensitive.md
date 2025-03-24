---
title: 'Intelligent Search Redirect settings search bar is case sensitive'
id: 5QEkcyhCQWyw093UkDCeOq
status: PUBLISHED
createdAt: 2023-09-26T23:50:50.661Z
updatedAt: 2024-10-01T14:15:09.795Z
publishedAt: 2024-10-01T14:15:09.795Z
firstPublishedAt: 2023-09-26T23:50:51.661Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: en
kiStatus: Fixed
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

