---
title: "Export of Price Tables Fails Due to Throttling of Catalog API"
id: 4LSQalrhGQHuz8c087WBxP
status: PUBLISHED
createdAt: 2024-08-14T18:41:34.999Z
updatedAt: 2024-08-14T18:41:35.930Z
publishedAt: 2024-08-14T18:41:35.930Z
firstPublishedAt: 2024-08-14T18:41:35.930Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: export-of-price-tables-fails-due-to-throttling-of-catalog-api
locale: en
kiStatus: Backlog
internalReference: 1081437
---

## Summary


Exporting price tables is failing due to throttling from the Catalog API. This issue occurs when the system exceeds the rate limits of the Catalog service during the export process, preventing the retrieval of product prices after the initial SKU fetch.


##

## Simulation



1. Attempt to export a large price table from the VTEX admin interface.
2. The export will begin, but at some point, the process fails due to throttling of the Catalog API.
3. No prices are retrieved, and the export does not complete.


##

## Workaround


If throttling occurs, the on-call team can perform manual exports for the client on a case-by-case basis. Repeated attempts may also succeed depending on the account's API usage at the time.





