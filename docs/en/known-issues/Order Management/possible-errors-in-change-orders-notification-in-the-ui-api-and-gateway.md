---
title: 'Possible errors in Change Orders notification in the UI, API and Gateway.'
id: 1UeG6MyFYIUVCnH8kPwNIJ
status: PUBLISHED
createdAt: 2023-12-19T19:37:47.313Z
updatedAt: 2024-09-11T19:26:44.153Z
publishedAt: 2024-09-11T19:26:44.153Z
firstPublishedAt: 2023-12-19T19:37:47.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: possible-errors-in-change-orders-notification-in-the-ui-api-and-gateway
locale: en
kiStatus: No Fix
internalReference: 955489
---

## Summary



_**Important**: We suggest using the new **Change V2** since the effort went into creating this new feature._

Some problems were identified in the Change Orders V1 architecture, where some cases were not notified in the order interaction in the UI, and were not notified in the Get Orders API, however, there was a discount or increase in the value. We have also seen scenarios where the notification occurs in the UI and API, however, the discount or increase is not made at the gateway.


##

## Simulation


It is not possible to carry out a simulation, as the scenarios are sporadic and generally occur due to a timeout error, for which we have already increased the timer.


##

## Workaround


Initially, we do not have a workaround, however, it is worth mentioning that in some scenarios we will be able to adjust manually, such as if the registration of change orders occurs in the gateway and does not occur in the Marketplace or fulfillment order interaction and the API as well.

