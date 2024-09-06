---
title: 'Intelligent Search language settings not in sync with store configurations'
id: 1GqoAyUSbTxwHvzoMoAYfD
status: PUBLISHED
createdAt: 2024-02-27T21:30:40.309Z
updatedAt: 2024-03-06T15:38:20.358Z
publishedAt: 2024-03-06T15:38:20.358Z
firstPublishedAt: 2024-02-27T21:30:41.209Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: intelligent-search-language-settings-not-in-sync-with-store-configurations
locale: en
kiStatus: Backlog
internalReference: 990343
---

## Summary


The primary language for Intelligent Search is not automatically updated according to the trade policy and binding settings, making it out of sync.

For single-language stores, Intelligent Search contents, such as synonyms, merchandising rules, search banners, and search redirects, are created on top of the locales registered at the binding. The storefront is rendered based also on the trade policy, which may override the binding and won't match the registered content.

For multi-language stores, potentially, it also affects the provided translations at the storefront and APIs.


##

## Simulation



- Create a store in "pt-BR";
- Enable/configure the Intelligent Search module;
- Change the trade policy from "pt-BR" to "en-US";
- Single-language:
  - Keep the binding as "pt-BR";
  - Create Intelligent Search content;
  - Access the storefront page that should present the registered content;
  - The content/behavior won't be visible.
- Multi-language:
  - Register the products in English;
  - Add Portuguese as a second/alternate language at the bindings
  - Register catalog translations for Portuguese;
  - In this scenario, navigation between both languages may present problems.



##

## Workaround


Ensure that bindings and trade policies match otherwise, the search content will be invalid.

Previously registered content won't follow the new primary language if it changes; it will remain attached to their creation language. It's necessary to register at least two locales at the bindings configuration (the old/unexpected language and the new/expected language) to see the language selector in the content editor so you can fix them manually to use the expected language. Another method is recreating the content.

In some scenarios, such as multi-language and catalog translations, you may also need to contact our support to review internal language settings for Intelligent Search.




