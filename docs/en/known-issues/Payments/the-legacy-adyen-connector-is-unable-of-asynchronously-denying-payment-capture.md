---
title: "The legacy Adyen connector is unable of asynchronously denying payment capture"
id: 5tdNyMfA5zeNg4sCbPQgUc
status: PUBLISHED
createdAt: 2024-02-02T15:15:57.980Z
updatedAt: 2024-02-02T15:15:58.839Z
publishedAt: 2024-02-02T15:15:58.839Z
firstPublishedAt: 2024-02-02T15:15:58.839Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: en
kiStatus: Backlog
internalReference: 976005
---

## Summary


The legacy Adyen connector captures the payment whenever it receives the `"response":"[capture-received]"` field. However, this event only indicates that the capture has been received and will be processed asynchronously. This behavior prevents captures from being denied, as the asynchronous notification encounters an already captured payment and does not refund it.


##

## Simulation


It depends on Adyen's capture response; therefore, a payment needs to be captured to receive a capture-failed notification.


##

## Workaround


N/A





