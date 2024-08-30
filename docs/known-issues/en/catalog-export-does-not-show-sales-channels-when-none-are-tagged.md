---
title: "Catalog Export does not show Sales Channels when 'none' are tagged"
id: 10Bozz8ai3fAvu1m9Ex2Gk
status: PUBLISHED
createdAt: 2022-12-23T13:38:32.114Z
updatedAt: 2022-12-23T13:38:32.766Z
publishedAt: 2022-12-23T13:38:32.766Z
firstPublishedAt: 2022-12-23T13:38:32.766Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: catalog-export-does-not-show-sales-channels-when-none-are-tagged
locale: en
kiStatus: Backlog
internalReference: 722001
---

## Summary


Currently, the sales channels to be checked on the product UI have a logic of "if none are checked, all of them are available".

Despite this logic being reasonable on the catalog UI, the export Products & SKUs sheet might be misleading - it shows the column with the respective sales channels as "empty"

Either listing all sales channels on this column or, even better, a "all" text if none are tagged, would be a better solution instead.


##

## Simulation


Tag a product with no sales channels and the attempt a catalog export, checking the column relative to this data.


##

## Workaround


Knowing beforehand that empty columns might mean that all sales channels were selected.

