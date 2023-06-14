---
title: 'Large Import/Export Spreadsheet Error on New Collections Admin'
id: 6xbBVR2Z7CCpIC0iCAKHgN
status: PUBLISHED
createdAt: 2023-02-16T19:04:08.298Z
updatedAt: 2023-02-16T19:04:08.784Z
publishedAt: 2023-02-16T19:04:08.784Z
firstPublishedAt: 2023-02-16T19:04:08.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: large-importexport-spreadsheet-error-on-new-collections-admin
locale: en
kiStatus: Backlog
internalReference: 362017
---

## Summary


Currently, the new collection's admin, in the import feature for an SKU inclusion, using the SKU row, often returns an unspecific error response when attempting to import a file with too many registries.

"`Your file was not imported. Please try importing this file again.`"


##

## Simulation


1) In a store in which the catalog is very large, 50K+ products access the new collections admin /admin/collections

2) In a collection, try importing new registries with over 100 SKUs in a single import.


##

## Workaround


1) Use the legacy collections for massively importing SKUs.

2) Split the imports into smaller sheets and do the process gradually.

3) Use the UI's massive actions to reach the desired effect.





