---
title: 'Order Authorization lessThan 100 goes with the flow'
id: 51vxznnbek6mtVtQgKEW9d
status: PUBLISHED
createdAt: 2024-02-16T13:44:05.199Z
updatedAt: 2024-02-16T13:44:05.932Z
publishedAt: 2024-02-16T13:44:05.932Z
firstPublishedAt: 2024-02-16T13:44:05.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: order-authorization-lessthan-100-goes-with-the-flow
locale: en
kiStatus: Backlog
internalReference: 983031
---

## Summary


We identified that when the order Authorization (OrderAuth) system is configured with the value "lessThan: 100", in the "Rules-list.CreateDoEffect" , it cannot understand that it is less than or equal to 100%, only that it is less than 100% and When the order has a 100% discount, the system authorizes the order to follow the normal flow.


##

## Simulation


To simulate it is necessary to configure orderAuth:
Access: https://.myvtex.com/admin/order-auth
Configure price divergence > insert the following values into the rule:
Rules-list.denyEffect :0 to 60%

Rules-list.CreateDoEffect: 61 to 100%

When configuring the "Rules-list.CreateDoEffect" rule to 100%, it cannot understand that it is less than or equal, only that it is less and therefore authorizes the request to follow the normal flow when it is equal to 100%.


##

## Workaround


N/A.





