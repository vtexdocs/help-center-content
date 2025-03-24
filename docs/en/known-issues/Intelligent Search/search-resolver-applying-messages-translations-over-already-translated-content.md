---
title: 'Search Resolver applying Messages translations over already translated content'
id: 7OIKmmhO3Pa2z0pIU33kY
status: PUBLISHED
createdAt: 2023-07-20T15:28:57.078Z
updatedAt: 2024-06-13T20:51:17.597Z
publishedAt: 2024-06-13T20:51:17.597Z
firstPublishedAt: 2023-07-20T15:28:57.934Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-resolver-applying-messages-translations-over-already-translated-content
locale: en
kiStatus: Backlog
internalReference: 865918
---

## Summary


The Search Resolver (GraphQL layer for Intelligent Search) requests translations from the Messages service even for single-language stores or already translated content in a multi-language store.

In practice, these translations are made on top of the same "from" and "to" languages, but if the store has the automatic translation feature enabled, the string may change to something unexpected.

This affects especially strings with multiple words that may be considered from different languages, such as English words in the name of a product name that is majorly in French, and potentially dates (between the "dd/mm/yyyy" and "mm/dd/yyyy" notations).


##

## Simulation



- Translate any content from the store's catalog to a language different from the default;
- Make sure there is still at least one word in a different language than the translated one;
- Check the storefront; it won't match the translation.


##

## Workaround



- Disable the automatic translation;
- Create translations for these contents using the same language as "from" and "to", for example, translating it from "fr-FR" to "fr-FR".



