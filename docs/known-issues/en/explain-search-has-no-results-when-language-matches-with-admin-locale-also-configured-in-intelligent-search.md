---
title: 'Explain Search has no results when language matches with admin locale also configured in Intelligent Search'
id: 1NHYVn0K3mlOTrtnoRevCw
status: PUBLISHED
createdAt: 2023-05-23T15:35:17.779Z
updatedAt: 2023-05-23T15:35:18.448Z
publishedAt: 2023-05-23T15:35:18.448Z
firstPublishedAt: 2023-05-23T15:35:18.448Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: explain-search-has-no-results-when-language-matches-with-admin-locale-also-configured-in-intelligent-search
kiStatus: Backlog
internalReference: 830490
---

## Summary


When more than one language is configured in Intelligent Search, the Explain Search won't return any results if matching with an admin locale which is also in Intelligent Search, but it's not the exact match. For example:


- Languages in Intelligent Search: es-AR and en-US
- Selecting es-AR in Explained Search and the admin locale is en-US; no results are shown.


##

## Simulation



- Access the Explain Search and select a language;
- Select a language in the admin that is also in Intelligent Seach.


##

## Workaround


Select the exact language in the admin or any that is not configured in Intelligent Search.




