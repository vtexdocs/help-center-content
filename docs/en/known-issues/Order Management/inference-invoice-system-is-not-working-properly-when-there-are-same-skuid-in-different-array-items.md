---
title: "Inference Invoice System is not working properly when there are same SKUid in different array items"
id: 3fSQGwIPj0ekewMuaxPPEe
status: PUBLISHED
createdAt: 2024-03-28T19:00:12.852Z
updatedAt: 2024-04-04T13:33:04.775Z
publishedAt: 2024-04-04T13:33:04.775Z
firstPublishedAt: 2024-03-28T19:00:14.053Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inference-invoice-system-is-not-working-properly-when-there-are-same-skuid-in-different-array-items
locale: en
kiStatus: Backlog
internalReference: 1008459
---

## Summary


Some orders has same SKUid in separated array of items it happens at the purchase moment on checkout for different reasons as discount to be apllied for example.
This not a problem but a condition for a purchase calculation.

The problem is at the phase of invoice for that items. Sometimes the inference system can not match the itens to be insert correctly at the refrence items on packageAttachment, because of the same SKUid and selling prices.
Even the customer sends the quantity of itens correctly on the inference it will be wrong.

Is possible to see the difference on SNO system versus the packageAttachment items on order.


##

## Simulation


Create a order with a more than one quantity items and apply some discount, creating an order with more than one array of itens with different selling price. After that try to invoice all items of order.



##

## Workaround


There is no workarround for that.





