---
title: "Input invoice is not triggering the refund process at the gateway"
id: 7Jyssmgt0rYN1j8wZNtK1T
status: PUBLISHED
createdAt: 2025-03-24T19:24:31.259Z
updatedAt: 2025-03-24T19:24:31.904Z
publishedAt: 2025-03-24T19:24:31.904Z
firstPublishedAt: 2025-03-24T19:24:31.904Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: input-invoice-is-not-triggering-the-refund-process-at-the-gateway
locale: en
kiStatus: Backlog
internalReference: 1198829
---

## Summary


It was identified that the invoice API (invoices and returns) does not allow specifying the different selling prices that a SKU may have in the same way as specified in the order. This means that the merchant does not need to explicitly "duplicate" the same SKU in invoices/returns to represent all these selling prices.

Example:
SKU-1 with quantity 2, with a total value of $101.

To solve the rounding problem, 2 different selling prices are specified: 1 of $51 and another of $50.

What happens is that when the account is going to invoice the order, SKU-1 is duplicated to inform the values contained in the sellingPrice.

SOS validates duplicate items and if they are identified, it will not be possible to make a "refund".


##

## Simulation


It is possible to simulate this scenario by creating an order with one item and a quantity greater than two, and having the sellingPrice values rounded so that they are different between items, for example:
Order with two units of SKU-10, with a total value of $101, and in the sellingPrice, we have 1 item with a value of $51 and the other with a value of $50.
When entering an invoice, the account duplicates the item, informing the sellingprice values.
When the invoice is input, it makes the same duplication.
At this time, the SOS will be checked for the duplicated items and the refund will not be requested!


##

## Workaround


Insert only one SKU on the invoice, specifying the quantity and total value.





