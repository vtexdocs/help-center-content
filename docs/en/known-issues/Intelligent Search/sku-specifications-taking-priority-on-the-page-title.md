---
title: 'SKU specifications taking priority on the page title'
id: 2AfzLrb7Vu3E4HBqH3l9iN
status: PUBLISHED
createdAt: 2024-08-29T20:58:07.401Z
updatedAt: 2024-08-29T20:58:08.064Z
publishedAt: 2024-08-29T20:58:08.064Z
firstPublishedAt: 2024-08-29T20:58:08.064Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: sku-specifications-taking-priority-on-the-page-title
locale: en
kiStatus: Backlog
internalReference: 1089440
---

## Summary


It's expected that the page title will be based on the last or initial filters. Filters from SKU specifications are always set as the last one from the breadcrumb, which takes place as the page title.


##

## Simulation


Navigating in a page like "/summer-2024?map=productclusternames" and applying any filter that is not an SKU specification will keep the page title as "Summer 2024", but a filter like "size=M" will take priority and the title will be shown as "M".


##

## Workaround


N/A




