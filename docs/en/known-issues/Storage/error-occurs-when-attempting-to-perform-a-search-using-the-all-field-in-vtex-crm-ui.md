---
title: "Error occurs when attempting to perform a search using the 'All' field in VTEX CRM UI"
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2024-11-13T12:00:08.720Z
publishedAt: 2024-11-13T12:00:08.720Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui
locale: en
kiStatus: Backlog
internalReference: 925679
---

## Summary


The "All" filter in the CRM UI returns an error when used in entities with many documents. This occurs because the "All" filter performs a wildcard search across all searchable fields, which can result in an error due to the high volume of data being queried.

 ![](https://vtexhelp.zendesk.com/attachments/token/Lg1SGLizHjIXrJNiBSaBpJXqk/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)


##

## Simulation



- Access the CRM UI `https://.vtexcrm.com.br/` and navigate to a view representing an entity with many records.
- Initiate a search using the "All" field. ![](https://vtexhelp.zendesk.com/attachments/token/H2fobh96F4aBJ8gYJweT5YaP8/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.42.35.png)
- Search for any term in the search field.
- Observe that the system attempts to perform a wildcard search on all searchable fields, which may result in an error due to the high volume of data.
"**An unexpected error has occurred. Please try again. If the problem persists, contact support."**![](https://vtexhelp.zendesk.com/attachments/token/wq7uWjOgY9S2I1M8CgyReJANR/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.40.50.png)


##

## Workaround


Use filters for specific fields.

