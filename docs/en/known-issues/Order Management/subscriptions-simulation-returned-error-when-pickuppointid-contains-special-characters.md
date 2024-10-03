---
title: 'Subscriptions simulation returned error when PickupPointID contains special characters'
id: aM2So6TmVffZ1ywtQsknS
status: PUBLISHED
createdAt: 2023-09-19T17:31:47.442Z
updatedAt: 2024-07-01T18:49:12.303Z
publishedAt: 2024-07-01T18:49:12.303Z
firstPublishedAt: 2023-09-19T17:31:48.217Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-simulation-returned-error-when-pickuppointid-contains-special-characters
locale: en
kiStatus: No Fix
internalReference: 903332
---

## Summary


To place a subscription order or update a subscription, the subscription system carries out a simulation, and in this simulation it uses the delivery data returned by the logistics system, and if within this data there is a pick up point whose ID is underline, the subscription system will not be able to choose the SLA correctly, thus generating the error "Invalid AddressProvider:...." in the simulation and consequently will not generate the order.


##

## Simulation


1- Create a pick point whose ID has an underline
2- Make a subscription request by choosing the pick point created in step 1.
3- Wait for the first cycle to run and see that it doesn't run and that the subscription panel registers an error saying that the address is invalid.


##

## Workaround


Delete the pick up point whose ID is underlined and create a new one and update the subscription so that it uses this new pick up point.





