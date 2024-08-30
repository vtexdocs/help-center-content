---
title: "Product specification import with type 'text' does not trigger the product's indexation"
id: 5eQB7LCCyDbVNQBQvWti33
status: PUBLISHED
createdAt: 2024-03-12T19:36:58.647Z
updatedAt: 2024-03-12T19:36:59.477Z
publishedAt: 2024-03-12T19:36:59.477Z
firstPublishedAt: 2024-03-12T19:36:59.477Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: product-specification-import-with-type-text-does-not-trigger-the-products-indexation
locale: en
kiStatus: Backlog
internalReference: 998658
---

## Summary


When importing product specifications, the types with pre-registered values (such as Checkbox or Radio) trigger the product's indexation, but when the type is "Text" the same does not occur.


##

## Simulation



- Register a field with the type text within the category
- Import a file filled with a new value
- Note that the value will be updated in the Admin, but the product won't be reindexed


##

## Workaround


Configure this type of field through Admin or API





