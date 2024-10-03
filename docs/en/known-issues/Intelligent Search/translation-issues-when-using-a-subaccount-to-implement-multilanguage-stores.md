---
title: 'Translation issues when using a subaccount to implement multi-language stores'
id: 5FOCZE7pI4npyfo7TjsFaY
status: PUBLISHED
createdAt: 2023-06-21T20:36:33.483Z
updatedAt: 2024-02-29T15:19:42.862Z
publishedAt: 2024-02-29T15:19:42.862Z
firstPublishedAt: 2023-06-21T20:36:33.922Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: translation-issues-when-using-a-subaccount-to-implement-multilanguage-stores
locale: en
kiStatus: Backlog
internalReference: 848524
---

## Summary


Catalog Unified Indexing considers the messages' translations only from the main account, even when using a subaccount architecture to implement cross-border stores.

This leads to a different translation in the search and product page, as the content from the search page is based only on the translations retrieved by the Catalog Indexer.


##

## Simulation



- Create a subaccount and implement cross-border stores;
- Translate the catalog content in the subaccount;
- Compare the search and product page; they will have different translations.


##

## Workaround


Set the additional languages (bindings and Messages content) in the main account, replicating the translations from the subaccount also in the main account.




