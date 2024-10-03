---
title: 'Removing EAN via API is not inactivating SKUs without RefIDs'
id: 2DIKKs93S41F38c3PrekSO
status: PUBLISHED
createdAt: 2022-08-01T11:37:52.731Z
updatedAt: 2024-07-01T18:48:35.030Z
publishedAt: 2024-07-01T18:48:35.030Z
firstPublishedAt: 2022-08-01T11:37:53.288Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: removing-ean-via-api-is-not-inactivating-skus-without-refids
locale: en
kiStatus: No Fix
internalReference: 626031
---

## Summary



SKUs need to have either an EAN or a RefId to be active.

Currently, if you remove all the EANs of a SKU via API, it will remain active, even if it has no refID (it shouldn't).





## Simulation



1. Get any SKU that has a EAN and doesn't have a RefId.
2. Run the delete all EAN API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-delete-all-ean






## Workaround


n/a

