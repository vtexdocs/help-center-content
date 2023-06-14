---
title: 'Negative amounts in split recipients'
id: 7j3wwcjbTt1LFBD3TM9Bus
status: PUBLISHED
createdAt: 2022-03-03T18:40:21.910Z
updatedAt: 2022-11-25T22:04:28.548Z
publishedAt: 2022-11-25T22:04:28.548Z
firstPublishedAt: 2022-03-03T18:40:22.178Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: negative-amounts-in-split-recipients
kiStatus: Backlog
internalReference: 388580
---

## Summary


In a Marketplace scenario with payout split when the marketplace has no commission on the transaction, rounding off any of the reference values(buyTotal or totalSellers) can result in a negative amount for the marketplace.


We are sending a negative amount to the recipients in the payload of **Sending settlement request** for the connector.
then, we receive the message of a bad request from the connector, informing: **Invalid split value,** after some hours of sending the request, we receive the callback, the transaction follows the normal flow, so far we haven’t experienced any other behaviors for the transaction




## Simulation


Put two identical SKU in the cart that have discounts. To calculate the value of the item individually the system adds up the discounts and then divides them by the total of items, causing a difference between the totalSellers and buyTotal.



## Workaround


We don't have a workaround at the moment.

