---
title: 'missing minicart.buyer.id field causes anti-fraud to cancel transactions'
id: 6dvOH9b96qGAHXIzW3wBe1
status: PUBLISHED
createdAt: 2023-05-23T17:10:17.329Z
updatedAt: 2024-02-16T20:26:42.045Z
publishedAt: 2024-02-16T20:26:42.045Z
firstPublishedAt: 2023-05-23T17:10:17.964Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
locale: en
kiStatus: No Fix
internalReference: 514335
---

## Summary


There have been instances where certain transactions are being declined during the anti-fraud analysis due to the null value in the `minicart.buyer.id` field. Thus, the `minicart.buyer.id` is expected to be sent from the checkout to the gateway through `sendAdditionalData`. However, according to the current checkout architecture, there is no specific requirement to provide this field in `sendAdditionalData`, and its definition may or may not be available at a later stage.


##

## Simulation


It's not possible to reproduce this behavior once this is intermittent.


##

## Workaround


It is possible to send the additional data afterward through our API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data





