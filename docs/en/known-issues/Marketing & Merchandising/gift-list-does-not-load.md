---
title: 'Gift list does not load'
id: 3qIHpPzdGoyWMwmyoGugwq
status: PUBLISHED
createdAt: 2017-04-11T21:42:34.789Z
updatedAt: 2022-12-22T20:46:05.885Z
publishedAt: 2022-12-22T20:46:05.885Z
firstPublishedAt: 2017-04-11T21:49:20.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: gift-list-does-not-load
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The URL of a gift list is the combination of all the SKUs selected when creating the list. However, URLs with more than 7 thousand characters are not indexed by Solr – the indexing system used by VTEX.

This limitation is not directly related to the number of items in a list, but to the size of the URL. I.e., you can have lists with more products that will not time out with the indexer.

## Simulation

Select a large number of items for a list so that the resulting URL has more than 7 thousand characters.

## Workaround

If possible, edit the list and decrease the amount of selected items. Usually the number of 250 SKUs ensures the list is displayed. An amount greater than this may already cause the incident.

If the list is inaccessible, contact VTEX support to delete it.

