---
title: "Calculated Price Table export not bringing all SKUs"
id: 3pJcwSnZG1nO0YjIPCnfyV
status: PUBLISHED
createdAt: 2022-12-23T13:41:21.656Z
updatedAt: 2024-12-19T13:57:55.682Z
publishedAt: 2024-12-19T13:57:55.682Z
firstPublishedAt: 2022-12-23T13:41:22.123Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: calculated-price-table-export-not-bringing-all-skus
locale: en
kiStatus: Backlog
internalReference: 722005
---

## Summary


When exporting the Calculated Price Table from the Pricing module UI, not all SKUs are consistently included in the exported file. The number of lines in the exported spreadsheet can vary between exports, sometimes resulting in fewer SKUs than expected.


##

## Simulation


This issue is intermittent, but it can be observed as follows:

1. Navigate to the Pricing module UI.
2. Ensure no filters are applied.
3. Export the Calculated Price Table.
4. Compare the number of rows in the exported spreadsheet.
5. Repeat the export process multiple times. On some attempts, the spreadsheet may have fewer rows than previous exports.


##

## Workaround


To ensure accurate results:

- Export the Calculated Price Table multiple times and compare the spreadsheets to make sure about the price table number of rows.
- Use the export with the largest number of rows as the reference for the complete Calculated Price Table.





