---
title: 'Possible errors in Change Orders notification in the UI, API and Gateway.'
id: 1UeG6MyFYIUVCnH8kPwNIJ
status: PUBLISHED
createdAt: 2023-12-19T19:37:47.313Z
updatedAt: 2024-08-08T19:29:16.923Z
publishedAt: 2024-08-08T19:29:16.923Z
firstPublishedAt: 2023-12-19T19:37:47.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: possible-errors-in-change-orders-notification-in-the-ui-api-and-gateway
locale: en
kiStatus: Backlog
internalReference: 955489
---

## Summary


Some problems were identified in the Change Orders V1 architecture, where some cases were not notified in the order interaction in the UI, were not notified in the Get Orders API, however, there was a discount or increase in the value. We have also seen scenarios where the notification occurs in the UI and API, however, the discount or increase is not made at the gateway.


##

## Simulation


It is not possible to carry out a simulation, as the scenarios are sporadic and generally occur due to a timeout error, which we have already increased the timer for.


##

## Workaround


Initially we do not have a workaround, however, it is worth mentioning that some scenarios we will be able to adjust manually, such as if the registration of change orders occurs in the gateway and does not occur in the Marketplace or fulfillment order interaction and in the API as well.
However, we suggest using the new Change V2, since the effort went into creating this new feature.

