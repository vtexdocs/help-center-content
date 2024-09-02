---
title: 'Orders with a "Creation Error" remain stuck in a "cancel" status'
id: gP4woBDBX0FsUC6sdMHED
status: PUBLISHED
createdAt: 2024-08-29T20:28:41.531Z
updatedAt: 2024-08-29T20:28:42.413Z
publishedAt: 2024-08-29T20:28:42.413Z
firstPublishedAt: 2024-08-29T20:28:42.413Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: orders-with-a-creation-error-remain-stuck-in-a-cancel-status
locale: en
kiStatus: Backlog
internalReference: 1089344
---

## Summary



In some orders that present an error at the time of creation (**Creation Error -** `cancellationData.reason`), it is expected that these orders will automatically reach the **Cancelled** status, since they are orders that were incomplete in some way (_even if the_ `isCompleted` _property is_ `true`), or with an error in the communication between the systems, mainly in the communication with the Gateway, and end up being canceled.


    "cancellationData": { "requestedByUser": false, "requestedBySystem": true, "requestedBySellerNotification": null, "requestedByPaymentNotification": null, "reason": "Creation error", "cancellationDate": "2024-08-13T17:40:23.8875213Z", "cancellationRequestId": null},


In this case, the problem is that currently, some orders with a **creation error remain stuck in a "cancel" status**, without being able to advance to cancellation.


    curl --location 'https://.vtexcommercestable.com.br/api/orders/pvt/document/' \--header 'Accept: application/json' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: ***' \--header 'Cookie: janus_sid=71df74ec-7639-443a-ad33-4f9de2053cba'



    "status": "cancel",



    "workflowData"."instances"."name": "Marketplace""workflowData"."instances"."currentStepName": "end""workflowData"."instances"."name": "Fulfillment""workflowData"."instances"."currentStepName": "cancel"


The important thing in these cases is to be able to validate that the transaction has already been canceled and that there are no problems with the reservation of the items in the order.


##

## Simulation



If the order is in the "**cancel**" status and has not advanced to "**canceled**":

1. Make a GET of the order and validate the following information:
  - "status"
  - "cancellationData"
  - "workflowData"
2. If the information in the first step is the same as the details shown in the summary of this problem, it is because your order will not be able to be moved to the status "**canceled**".


##

## Workaround



We do not have a workaround for this issue at the moment.





