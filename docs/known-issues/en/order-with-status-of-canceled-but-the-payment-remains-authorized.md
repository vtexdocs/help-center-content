---
title: Order with status of canceled but the payment remains authorized
id: 19WmIjIbAQmJ19AOC4q56N
status: PUBLISHED
createdAt: 2022-05-11T12:49:23.081Z
updatedAt: 2022-11-25T21:51:23.997Z
publishedAt: 2022-11-25T21:51:23.997Z
firstPublishedAt: 2022-05-11T12:49:23.599Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: order-with-status-of-canceled-but-the-payment-remains-authorized
kiStatus: Backlog
internalReference: 420019
---

## Summary


In some cases where the order is incomplete or canceled when there is any communication failure with the Gateway, the payment remains authorized and/or approved, not entering the cancellation flow and the amount paid is not automatically refunded. Also, transactional emails can be accidentally sent, which also allows payment of bank slips, as the URL will go with it.



## Simulation


There's no way to simulate. But we have some cases that this happened before.



## Workaround


N/A

