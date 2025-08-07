---
title: "Collections does not Allow more than 1000 SKUs per Upload"
id: 4XC2ZLCsBkQhexRB4YrNMn
status: PUBLISHED
createdAt: 2023-04-19T13:53:02.339Z
updatedAt: 2023-10-10T13:31:27.610Z
publishedAt: 2023-10-10T13:31:27.610Z
firstPublishedAt: 2023-04-19T13:53:02.926Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-does-not-allow-more-than-1000-skus-per-upload
locale: en
kiStatus: Backlog
internalReference: 793274
---

## Summary


Currently, uploading items to the new collections module with a list that has over 1000 SKUs is not possible, since the process will timeout.




##

## Simulation



1. Go to the new collections module

2. Select the tab "Import"

3. Use a sheet that has over 1000 SKUs (i.e. 300 products with 50 skus, each)

4. The import will generate a timeout.



##

## Workaround


Upload gradually using smaller sheets, the legacy CMS collections and/or the insert SKU to subcollection API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





