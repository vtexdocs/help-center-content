---
title: "In some cases where there is a discount on the order, we have a discrepancy in the total value of the Items to invoice field in the order UI."
id: 20xiOKxpvdCODmDJDKunST
status: PUBLISHED
createdAt: 2024-05-06T20:17:01.162Z
updatedAt: 2024-05-06T20:17:01.968Z
publishedAt: 2024-05-06T20:17:01.968Z
firstPublishedAt: 2024-05-06T20:17:01.968Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: in-some-cases-where-there-is-a-discount-on-the-order-we-have-a-discrepancy-in-the-total-value-of-the-items-to-invoice-field-in-the-order-ui
locale: en
kiStatus: Backlog
internalReference: 1028210
---

## Summary


It was identified that in some orders where there is a discount associated with one or more items, we may have a discrepancy in the total value of the "items to invoice" field in the order UI, as the calculation for this field takes into account the "sellingPrice" parameter, instead of the "priceDefinitions" parameter. Therefore, it is possible to notice differences of 0.01 or a little more from the total order value.

We emphasize that this field is illustrative, as the main field is the total value (amount) of the order and there is NO discrepancy in this field.


##

## Simulation


It is not possible to simulate this scenario.


##

## Workaround


It wouldn't be a workaround, just a tip to invoice the order with the full amount, informed in the "amount" field, or in the case of partial invoices, inform the value of the item(s).





