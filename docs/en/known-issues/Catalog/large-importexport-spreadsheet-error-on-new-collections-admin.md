---
title: 'Large Import/Export Spreadsheet Error on New Collections Admin'
id: 6xbBVR2Z7CCpIC0iCAKHgN
status: PUBLISHED
createdAt: 2023-02-16T19:04:08.298Z
updatedAt: 2023-12-12T21:08:23.871Z
publishedAt: 2023-12-12T21:08:23.871Z
firstPublishedAt: 2023-02-16T19:04:08.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-importexport-spreadsheet-error-on-new-collections-admin
locale: en
kiStatus: Fixed
internalReference: 362017
---

## Summary


Currently, uploading items to the new collections module with a list with over 1000 SKUs is impossible, since the process will timeout. It returns an unspecific error response:
"`Your file was not imported. Please try importing this file again.`"


##

## Simulation



1. Go to the new collections module
2. Select the tab "Import"
3. Use a sheet that has over 1000 SKUs (i.e. 300 products with 50 SKUs, each)
4. The import will generate a timeout.


##

## Workaround


Upload gradually using smaller sheets, the legacy CMS collections and/or the insert SKU to subcollection API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





