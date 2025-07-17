---
title: "Divergency in apportioned freight values per item between CHK and FFM orders"
id: 6v4Fero4fkOw3omZOl21Xf
status: PUBLISHED
createdAt: 2022-01-24T20:24:18.002Z
updatedAt: 2022-11-25T21:51:48.780Z
publishedAt: 2022-11-25T21:51:48.780Z
firstPublishedAt: 2022-06-29T13:12:57.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: divergency-in-apportioned-freight-values-per-item-between-chk-and-ffm-orders
locale: en
kiStatus: Backlog
internalReference: 321111
---

## Summary


In some cases, the shipping values apportioned per item between the marketplace (checkout side) and the seller (fulfillment side) orders can go divergent.

The reason isn't completely clear, but it seems to happen only with orders from "seller 1" (where Marketplace and Fultillment are the same) and in items that were split because of discounts – when the final quantity is presented between more than one item, to ensure the final desired discount value.

It can be a problem while integrating orders (due to the divergence), or while invoicing orders, because the invoiced value won't match the total value in one of the sides (Marketplace or Fulfillment).



## Simulation


There's no known way to reproduce the issue, but you can refer to old orders where the issue happened.



## Workaround


There is no known workaround.

