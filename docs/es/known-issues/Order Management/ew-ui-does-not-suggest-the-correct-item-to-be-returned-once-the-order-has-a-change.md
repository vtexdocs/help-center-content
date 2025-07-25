---
title: 'New UI does not suggest the correct Item to be returned once the order has a change'
id: 7hjZaUZ1GNiGjMnSKe0pZu
status: PUBLISHED
createdAt: 2023-01-18T17:05:53.889Z
updatedAt: 2024-05-28T18:33:17.977Z
publishedAt: 2024-05-28T18:33:17.977Z
firstPublishedAt: 2023-01-18T17:05:54.590Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
locale: en
kiStatus: Backlog
internalReference: 735854
---

## Summary


New UI does not suggest the correct item to be returned.
The new UI suggest the item not already invoiced as output or can suggest the item removed from the original items. It happens when order has a change even change value. The "itemsReturnable" is not correct on "api/orders/..invoices/summary".


##

## Simulation


Create an order with two or more items execute a change removing the itemindex0 and try the return on new UI. The itemindex0 will e a option to be returned.


##

## Workaround


There is no workaround for now.

