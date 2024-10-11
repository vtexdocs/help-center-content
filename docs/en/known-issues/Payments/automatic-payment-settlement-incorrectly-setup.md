---
title: 'Automatic payment settlement incorrectly setup'
id: 6KOQwBKNgOPNL7TM80Bqjf
status: PUBLISHED
createdAt: 2024-06-19T22:12:10.705Z
updatedAt: 2024-06-19T22:12:11.484Z
publishedAt: 2024-06-19T22:12:11.484Z
firstPublishedAt: 2024-06-19T22:12:11.484Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: automatic-payment-settlement-incorrectly-setup
locale: en
kiStatus: Backlog
internalReference: 1053010
---

## Summary


The issue is that the gateway ignored the `delayToAutoSettleAfterAntifraud` value.

These fields are required in the authorization response, but the gateway accepts their absence. Our documentation related to this.

        "delayToAutoSettle": 1200, "delayToAutoSettleAfterAntifraud": 1200

In the perfect scenario, the gateway shouldn't accept the response without them.

When the `delayToAutoSettleAfterAntifraud` field is not in the payload of the authorization response. The gateway cannot define the correct value, so the default value of the automatic payment settlement will be 4 days (default).


##

## Simulation



1. Create a payment.
2. Configure the connector to respond without this required the field delayToAutoSettle, but sending the delayToAutoSettleAfterAntifraud
3. Check the Authorization response, and it will have only the value that the connector responded to
4. Please check the purple card to see which value it has set up. The automatic payment settlement will be scheduled for four days after the payment approval.



##

## Workaround



Set the **delayAutoSettle** as the same value as **delayAutoSettleAfterAntifraud.**





