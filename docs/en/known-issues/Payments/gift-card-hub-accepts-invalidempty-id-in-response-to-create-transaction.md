---
title: 'Gift Card HUB accepts Invalid/Empty ID in response to create transaction'
id: 3ODSXijmpvkk55FUqMcGvQ
status: PUBLISHED
createdAt: 2023-07-05T12:50:36.661Z
updatedAt: 2023-07-05T12:51:07.938Z
publishedAt: 2023-07-05T12:51:07.938Z
firstPublishedAt: 2023-07-05T12:50:37.274Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-hub-accepts-invalidempty-id-in-response-to-create-transaction
locale: en
kiStatus: Backlog
internalReference: 855864
---

## Summary


Our gift card provider protocol documentation specifies that the create transaction API must include a valid ID in the response. However, the current protocol implementation allows providers to respond to this request with either an empty or invalid ID. As a result, when attempting to settle the payment, the transaction becomes stuck because the required ID is missing. This leads to an error being thrown and the transaction remaining stuck in the process.


##

## Simulation


Respond to the create transaction call with an invalid ID and try to finish a transaction.


##

## Workaround


N/A





