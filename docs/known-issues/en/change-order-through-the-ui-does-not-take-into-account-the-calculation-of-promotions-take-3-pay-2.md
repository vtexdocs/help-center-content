---
title: 'Change Order through the UI does not take into account the calculation of promotions Take 3 pay 2.'
id: 3rvsDyCggYirvH7WT9rBVZ
status: PUBLISHED
createdAt: 2022-03-15T20:25:17.217Z
updatedAt: 2022-11-25T22:03:48.329Z
publishedAt: 2022-11-25T22:03:48.329Z
firstPublishedAt: 2022-03-15T20:25:17.513Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: change-order-through-the-ui-does-not-take-into-account-the-calculation-of-promotions-take-3-pay-2
locale: en
kiStatus: Backlog
internalReference: 472882
---

## Summary


In orders with a More for Less Promotion, it is possible to change the order and remove one or more items in the UI, but the discount still applies.



## Simulation


- Create a More for Less Promotion
- Make a purchase with that promotion
- Make a change in the order and remove one or more items
- See that the discount still applies



## Workaround


In this case we have the Workaround which is to make the change through the "change on order" API. To change items and values.

