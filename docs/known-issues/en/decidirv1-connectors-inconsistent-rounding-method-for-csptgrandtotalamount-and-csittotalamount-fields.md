---
title: 'DecidirV1 Connector's Inconsistent rounding method for CSPTGRANDTOTALAMOUNT and CSITTOTALAMOUNT Fields.'
id: 6VcgLkWcGwMdkpuJQ14ZBt
status: PUBLISHED
createdAt: 2023-04-10T20:32:29.930Z
updatedAt: 2023-04-10T20:32:30.771Z
publishedAt: 2023-04-10T20:32:30.771Z
firstPublishedAt: 2023-04-10T20:32:30.771Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
kiStatus: Backlog
internalReference: 787367
---

## Summary


The legacy DecidirV1 connector uses an internal method to calculate the fields `CSPTGRANDTOTALAMOUNT` and `CSITTOTALAMOUNT`, which is the product between the product value and quantity. This approach results in a string with two decimal places. Consequently, when the product price contains more than two decimals, the value of the field `CSPTGRANDTOTALAMOUNT` diverges since it's the payment value itself.


##

## Simulation


Place an order using decidirV1 with a product in the cart with a price that has more than 3 decimals.


##

## Workaround


To avoid such discrepancies, we recommend using products with a maximum of two decimal places or modifying the checkout cart to eliminate the use of decimals.





