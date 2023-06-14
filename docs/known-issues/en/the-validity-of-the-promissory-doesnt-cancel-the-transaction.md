---
title: The validity of the promissory doesn't cancel the transaction
id: 3mm3tWIDKOAE9b0Yq0Wy70
status: PUBLISHED
createdAt: 2022-03-28T02:33:39.185Z
updatedAt: 2022-11-25T22:06:39.672Z
publishedAt: 2022-11-25T22:06:39.672Z
firstPublishedAt: 2022-03-28T02:33:39.971Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-validity-of-the-promissory-doesnt-cancel-the-transaction
kiStatus: Fixed
internalReference: 325491
---

## Summary


If a customer places an order with the notes payable payment method and the payment is not made, the transaction is not cancelled by the gateway after the payment due date. Consequently, since the OMS cannot identify the cancellation event, the order is not cancelled



## Simulation



1. In the Admin, go to the notes payable affiliation settings.
2. In the **expiration date** field, enter 1 and click **Save**.
3. Place an order with the notes payable payment method.
4. Note that the transaction is not automatically cancelled after the notes payable expires.



## Workaround


N/A

