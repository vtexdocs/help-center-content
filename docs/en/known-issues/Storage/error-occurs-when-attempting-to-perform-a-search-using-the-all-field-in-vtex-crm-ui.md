---
title: 'Error occurs when attempting to perform a search using the "All" field in VTEX CRM UI'
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

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui_1.png)


##

## Simulation



- Access the CRM UI `https://.vtexcrm.com.br/` and navigate to a view representing an entity with many records.
- Initiate a search using the "All" field. ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui_2.png)
- Search for any term in the search field.
- Observe that the system attempts to perform a wildcard search on all searchable fields, which may result in an error due to the high volume of data.
"**An unexpected error has occurred. Please try again. If the problem persists, contact support."**![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui_3.png)


##

## Workaround


Use filters for specific fields.

