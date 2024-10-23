---
title: "Error occurs when attempting to perform a search using the 'All' field in VTEX CRM"
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2023-10-25T18:46:48.731Z
publishedAt: 2023-10-25T18:46:48.731Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm
locale: en
kiStatus: Backlog
internalReference: 925679
---

## Summary


This case happens with entities containing a large number of fields and millions of records in an entity. The problem arises due to the search engine using the “All” field, which sends individual requests for each searchable field of the entity and multiplies the request load for each document.


##

## Simulation



1. Access `https://.vtexcrm.com.br/`.
2. Navigate to a view that represents an entity with millions of records.
3. Initiate a search using the "All" field.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm_1.png)
4. Observe the system's response and check if it returns an error or experiences significant performance issues.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm_2.png)
5. Repeat the search with a specific searchable field to confirm if the issue is related to the "All" field's search mechanism.


##

## Workaround


Search with a specific searchable field.

