---
title: "SKUs & Products Import Timeout"
id: 4024mtNGbNcdAJMJT2dxge
status: PUBLISHED
createdAt: 2025-03-28T14:05:27.181Z
updatedAt: 2025-03-28T14:05:27.800Z
publishedAt: 2025-03-28T14:05:27.800Z
firstPublishedAt: 2025-03-28T14:05:27.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: skus-products-import-timeout
locale: en
kiStatus: Backlog
internalReference: 1201280
---

## Summary


Currently, the catalog module can present a timeout in any of its operations if the amount of used data is too large.

The "Import & Export" module is one of such. Depending on the amount of products, skus and related data on the imported sheets, also on the amount of associated data to these, the operation can take too long to process (over 50s) and eventually lead to a timeout error.


##

## Simulation


This issue is hard to simulate unless the user has a specific catalog setup. Attempt to import large sheets (over 1k registers) for users with a complex catalog, possibly, they will face the timeout issue.


##

## Workaround


Split your data into smaller chunks.





