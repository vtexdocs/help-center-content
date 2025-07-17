---
title: "Checkout cancels transaction immediately after creation"
id: 1fmpSt3LhdfGgdZd6dRItb
status: PUBLISHED
createdAt: 2025-01-03T15:20:54.917Z
updatedAt: 2025-01-03T15:20:55.766Z
publishedAt: 2025-01-03T15:20:55.766Z
firstPublishedAt: 2025-01-03T15:20:55.766Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-immediately-after-creation
locale: en
kiStatus: Backlog
internalReference: 1157809
---

## Summary



A transaction already approved (and in some cases captured) receives a cancellation request directly from the checkout:

    An external application called to cancel this transaction Id = with Value RequestId = . Priority: default. Author: vtex-service::checkout::stable.


This cancellation request occurs due to a timeout when the checkout calls the GET payments route from the gateway, and the service takes longer than 10 seconds to respond.


##

## Simulation


Simulation is not possible.


##

## Workaround


No workaround available.





