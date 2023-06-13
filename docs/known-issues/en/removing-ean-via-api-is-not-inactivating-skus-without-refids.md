---
title: Removing EAN via API is not inactivating SKUs without RefIDs
id: 2DIKKs93S41F38c3PrekSO
status: PUBLISHED
createdAt: 2022-08-01T11:37:52.731Z
updatedAt: 2022-11-25T21:44:12.277Z
publishedAt: 2022-11-25T21:44:12.277Z
firstPublishedAt: 2022-08-01T11:37:53.288Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: removing-ean-via-api-is-not-inactivating-skus-without-refids
kiStatus: Backlog
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

