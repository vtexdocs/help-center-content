---
title: "Unable to change status on gateway when transaction Cart object in /transaction is 'unknown'."
id: 3gWqk1T2xP3eRYZtXZLX3b
status: PUBLISHED
createdAt: 2023-03-23T14:27:16.116Z
updatedAt: 2023-03-23T14:27:16.706Z
publishedAt: 2023-03-23T14:27:16.706Z
firstPublishedAt: 2023-03-23T14:27:16.706Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unable-to-change-status-on-gateway-when-transaction-cart-object-in-transaction-is-unknown
locale: en
kiStatus: Backlog
internalReference: 776837
---

## Summary


In order to cancel or change an order for split scenarios, our gateway requires a cart object. However, if the checkout process via OMS sends a null/unknown cart object, our gateway cannot process these operations, resulting in a parsing error from the Newtonsoft library used in the gateway.


##

## Simulation


To replicate the issue, update the cart object in the /transaction entity with a null value using our API for sending additional data.
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data


##

## Workaround


If the initial cart object is no longer available, retrieving it and sending it back to the /transaction entity using our API for sending additional data can be a challenging process. If this is the case, please reach out to the VTEX support team for assistance.





