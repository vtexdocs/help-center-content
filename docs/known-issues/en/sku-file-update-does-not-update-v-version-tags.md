---
title: 'SKU File Update does not update ?v version tags'
id: 5Uw2VIBtTNDY3Ha5WDzGXJ
status: PUBLISHED
createdAt: 2023-06-29T14:37:56.437Z
updatedAt: 2024-07-01T18:49:06.220Z
publishedAt: 2024-07-01T18:49:06.220Z
firstPublishedAt: 2023-06-29T14:37:57.352Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: sku-file-update-does-not-update-v-version-tags
locale: en
kiStatus: No Fix
internalReference: 852869
---

## Summary


Currently, when a SKU image file is updated via API to be on the same position as a previous one, it's version tag (?v=) on the product page is not correctly updated.


##

## Simulation




- For a sku that already has files in it, try updating one image to a new one.
- For a proper interpretation of the file being changed for the user and/or systems, the version tag (?v=) under the href image on the product page HTML should be updated.
- Hoever, this doesn't happen when using this API to perform such updates.




##

## Workaround


Deleting all SKU files and re-inserting them from scratch forces it to be updated.

OR

An indexer deletion forces the update.

