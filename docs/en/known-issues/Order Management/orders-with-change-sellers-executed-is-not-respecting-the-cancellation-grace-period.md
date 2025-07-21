---
title: "Orders with change sellers executed is not respecting the Cancellation grace period"
id: 25diaeQxIpSJIfCQxFizIV
status: PUBLISHED
createdAt: 2022-09-13T03:17:08.065Z
updatedAt: 2022-11-25T22:01:31.130Z
publishedAt: 2022-11-25T22:01:31.130Z
firstPublishedAt: 2022-09-13T03:17:08.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-with-change-sellers-executed-is-not-respecting-the-cancellation-grace-period
locale: en
kiStatus: Backlog
internalReference: 656815
---

## Summary


Orders with change seller, has the respectivity order on first seller cancelled and a new order on second seller will be created. If even the new order is out of the Cancellation grace period, the user still can cancel the order.

The system nowadays has no control after the first cancellation because the Marketplace order already has one cancel confirmation (in case of first seller order), and do not control this grace period anymore.



## Simulation


Create an order and execute a Change Seller feature, after the second order creation wait to finish the cancellation grace period, and execute a request of cancellation as a end user. The order will be canceled at time.

On orders interactions you will see the user on request-cancel message.



## Workaround


There is no workaround for this case.

