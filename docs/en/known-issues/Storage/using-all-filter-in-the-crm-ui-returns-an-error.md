---
title: "Using 'All' filter in the CRM UI returns an error"
id: 4B8l0OdT8TO907gc69X4mM
status: ARCHIVED
createdAt: 2024-11-12T22:02:47.025Z
updatedAt: 2024-11-22T20:58:26.049Z
publishedAt: 
firstPublishedAt: 2024-11-12T22:02:48.439Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: using-all-filter-in-the-crm-ui-returns-an-error
locale: en
kiStatus: Backlog
internalReference: 1134321
---

## Summary


The "All" filter in the CRM UI returns an error when used in entities with a large number of documents. This occurs because the "All" filter performs a wildcard search across all searchable fields, which can result in an error due to the high volume of data being queried.

 ![](https://vtexhelp.zendesk.com/attachments/token/iVkKaiAhzADOKFWdMVwXp6vuM/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)

##

##

## Simulation



- Access the CRM UI and navigate to an entity form with a large number of documents.
- Use the "All" filter to search for any term in all searchable fields.
- Observe that the system attempts to perform a wildcard search on all searchable fields, which may result in an error due to the high volume of data.
"**An unexpected error has occurred. Please try again. If the problem persists, contact support."**


##

## Workaround


Use filters for specific fields.

