---
title: "Slow Price Table Export for Accounts with Large Catalog"
id: itfcHiyewZYWOW9Ff16yM
status: PUBLISHED
createdAt: 2022-10-07T18:51:22.646Z
updatedAt: 2025-07-04T18:49:43.679Z
publishedAt: 2025-07-04T18:49:43.679Z
firstPublishedAt: 2022-10-07T18:51:23.344Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: slow-price-table-export-for-accounts-with-large-catalog
locale: en
kiStatus: Scheduled
internalReference: 674353
---

## Summary


Price table exports in accounts with a large number of SKUs can take several hours to complete. The main bottleneck occurs during the initial step, where products are retrieved from the Catalog before pricing data can be fetched. During this phase, the export remains in the `Starting` status on the VTEX Admin, without displaying any progress percentage. This can persist for a long time, causing confusion and giving the impression that the process is stuck, when in fact it is still enumerating the SKUs.In some cases, the export may silently fail due to a Catalog timeout. When this happens, no error is shown, and the report email is not sent.


##

## Simulation


⚠  _Please note:_ Since the process relies on the Catalog’s response time, the issue may not occur consistently. At times, the export might complete faster if the Catalog query returns quickly. For more reliable reproduction, avoid applying filters and choose an account with a large number of items (e.g., accounts with more than 400,000 SKUs).

- Go to VTEX Admin > Pricing > Export > Base Price Table.
- Trigger a price export
- Observe that the export status remains as `Starting` for long periods

##

## Workaround


Apply filters (e.g., by brand, category, collection) when exporting to reduce the number of items and decrease export time.




