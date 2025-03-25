---
title: 'On the Order Placed page, the DataLayer only captures the information of the first payment within the transaction (transactionPaymentType)'
id: 5cTy3dCZ6x7FNMKvBbc9s8
status: PUBLISHED
createdAt: 2023-01-04T21:06:17.111Z
updatedAt: 2024-02-16T20:23:30.519Z
publishedAt: 2024-02-16T20:23:30.519Z
firstPublishedAt: 2023-01-04T21:14:00.744Z
contentType: knownIssue
productTeam: Order Management
author: authors_84
tag: Order Management
slugEN: on-the-order-placed-page-the-datalayer-only-captures-the-information-of-the
locale: en
kiStatus: No Fix
internalReference: 727339
---

## Summary

When the purchase is completed, the customer goes to the page known as **Order Placed**, on this page we have a **Request Capture event** *(`RequestType:"orderPlaced"`) from our platform that captures some details of the order and serves to feed information into the **DataLayer**.

The problem we have at this moment is that in the "**transactionPaymentType**" object, **in the case of orders with more than one payment**, we are only showing the first one, which leaves the information incomplete for those who use this type of data.

\*_We can see this event (_`RequestType:"orderPlaced"`_) opening the inspector of the browser, looking for the "**Network**" tab, and filtering by "**events**" it is possible to see this detail in the **Payload** section._

```
    *Headers*
    Request URL: https://rc.vtex.com.br/api/events
    Request Method: POST

    *Payload*
    Object with all the details
``` 

## Simulation

1. Complete orders with more than one payment
2. When you arrive at the order confirmation page (**Order Placed**), open the inspector in the **Network** tab and validate the `RequestType:"orderPlaced"`  event
3. Within those details, find the transactionPaymentType object. There you will see that only one element will appear. The correct thing would be to show all the details regarding the other payments

## Workaround

At this moment we do not have a workaround to this problem, however, in case you need more details of the transaction, with the ID it is possible to consult more information with our APIs.

