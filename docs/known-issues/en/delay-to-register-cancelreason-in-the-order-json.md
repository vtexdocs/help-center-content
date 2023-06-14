---
title: Delay to register CancelReason in the order json
id: 3n8i3EHJO9wPTEKDbaWbo2
status: PUBLISHED
createdAt: 2023-04-18T17:20:25.088Z
updatedAt: 2023-04-18T17:27:34.471Z
publishedAt: 2023-04-18T17:27:34.471Z
firstPublishedAt: 2023-04-18T17:20:25.672Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: delay-to-register-cancelreason-in-the-order-json
kiStatus: Backlog
internalReference: 792650
---

## Summary


Due to the way the order update flow is executed from any status to canceled, it is possible that the Order system takes a while to register the CancelReason in the order json, causing a brief inconsistency scenario if the Json is consulted or used a few seconds after the cancel action;

A practical example is the use of this field in the `vtexcommerce-order-cancelled` template, because as the save process may take a while it is possible that the email sending will not deliver this data to the end user because the email sending is asynchronous to the cancellation flow;


##

## Simulation


not possible to simulate it.
But it can be observed in the timeline of a canceled order, once that the `cancellationReason` property is used in the store template.


##

## Workaround


In case the failure impacts the get order process, we recommend that a new get be made;




