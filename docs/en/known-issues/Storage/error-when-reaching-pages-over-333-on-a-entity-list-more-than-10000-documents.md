---
title: 'Error when reaching pages over 333 on a entity list (more than 10.000 documents)'
id: 1COJ1WZILFeFqA4XWIseYY
status: PUBLISHED
createdAt: 2023-02-27T19:29:52.721Z
updatedAt: 2023-02-27T19:29:53.278Z
publishedAt: 2023-02-27T19:29:53.278Z
firstPublishedAt: 2023-02-27T19:29:53.278Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents
locale: en
kiStatus: Backlog
internalReference: 334407
---

## Summary


When the store has more than 10.000 documents, so more than 333 pages, when trying to reach the latest pages on CRM, there is a message error:

    VTEX - Master Data: Ocorreu um erro inesperado no sistema. Por favor tente novamente, caso o erro persista entre em contato com a VTEX.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents_1.png)


##

## Simulation



1. Go to a CRM on an entity with a lot of data (more than 10k documents);
2. The error will happen when trying to reach a page that would retrieve the 10.000th document or over. Usually by page 334 (10000 / 30 = 333.33 ~~ 334)


##

## Workaround


If the store wishes to retrieve the latest data, they can use the Scroll documents API:

- MasterData v1: https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll
- MasterData v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/scroll

