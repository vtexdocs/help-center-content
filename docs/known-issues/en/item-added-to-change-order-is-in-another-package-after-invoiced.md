---
title: 'Item added to change order is in another package after invoiced'
id: 4a3VAtnfhYeg2N1EekVyO2
status: PUBLISHED
createdAt: 2022-08-19T19:25:08.342Z
updatedAt: 2023-05-09T12:40:52.392Z
publishedAt: 2023-05-09T12:40:52.392Z
firstPublishedAt: 2022-08-19T19:25:09.023Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: item-added-to-change-order-is-in-another-package-after-invoiced
locale: en
kiStatus: Backlog
internalReference: 412526
---

## Summary


Items removed or added by the change order flow are not part of the package, so they will not show up in the invoice email, and in case all items in an order are removed and added later the invoice email is not sent, because the added items are not added to the original order package;


##

## Simulation


1 - Have an order in "**Handling shipping**" status and then select "_Item Change_";
2 - Add one or more units of an existing SKU to the order (or add a new SKU);
3 - Check that the unit has been added to the package;
4 - Invoice the order (via UI or API). In this case, I made it through the UI (_"Invoice package" > "Send an invoice" > "Total"_). But you can do this using this endpoint;
5 - And then, we can observe that, even after invoice the entire package, the added unit was in a separate package;
6 - And it is not possible to invoice this package separately;

The order will be normally in the "**Invoiced**" status, but this detail is not very "user-friendly" (separated packages):


##

## Workaround


Unfortunately, we don't have a workaround for this scenario.

