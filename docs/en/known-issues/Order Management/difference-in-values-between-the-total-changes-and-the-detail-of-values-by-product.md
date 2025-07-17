---
title: "Difference in values ​​between the total changes and the detail of values ​​by product"
id: 1r5tGB9b2L001HDD8iMlMx
status: PUBLISHED
createdAt: 2025-07-08T16:04:14.095Z
updatedAt: 2025-07-08T16:04:15.466Z
publishedAt: 2025-07-08T16:04:15.466Z
firstPublishedAt: 2025-07-08T16:04:15.466Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: difference-in-values-between-the-total-changes-and-the-detail-of-values-by-product
locale: en
kiStatus: Backlog
internalReference: 1256685
---

## Summary


An issue has been identified related to the presentation of adjusted values in orders after changes involving products with a decimal `unitMultiplier` greater than 2.

When the weight or quantity of an item is modified through the **Order Modification flow**, the system uses `unitMultiplier` values with several decimal places to recalculate individual and total prices. However, the order UI uses the item's `sellingPrice`, which may be rounded and approximated to only **two decimal places**. **This can result in visible discrepancies between the sum of the displayed values per product and the total amount charged to the customer**, which can confuse merchants.

It is essential to note that the calculation of the total order value accurately follows the required precision, and the inconsistency is limited to the display of product details in the interface.


##

## Simulation


To reproduce the issue:

1. Access the Orders area in the VTEX platform.
2. Select an order containing items with a decimal `unitMultiplier` (e.g., products sold by weight).
3. Manually modify the weight (`unitMultiplier`) with a value that contains more than 2 decimal places _(more decimals will end up in more visible divergence)_ of the item via the Order Modification flow (or Pick and Pack).
4. Observe that after the change:
  - The total order value is correctly adjusted and charged as expected.
  - However, the displayed values for each product may not add up exactly to the shown total, due to rounding of the `sellingPrice` in the UI.
5. Compare the system's displayed values with a manual calculation using the prices, quantities, and full `unitMultiplier`.


##

## Workaround


Currently, there is no definitive fix or configuration adjustment available to resolve the discrepancy in the UI's displayed value sum. It is recommended to:

- Inform merchants and users about the possibility of this visual inconsistency.
- For reconciliation purposes, always use the total order value (totals), not the sum of individual `sellingPrice` fields.
- If necessary, use tools such as preview APIs or apply manual adjustments via the `manualIncrementValue`/`manualDecrementValue` fields to ensure final values are accurate.
- Follow product updates for potential improvements in decimal handling in the UI display.





