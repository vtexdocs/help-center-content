---
title: AdyenV1 connector is not sending pspReference on some operations and thus causing error
id: 3Eut9j0dxzywSk3ssvRo3l
status: PUBLISHED
createdAt: 2023-05-11T16:44:19.660Z
updatedAt: 2023-05-11T17:49:08.119Z
publishedAt: 2023-05-11T17:49:08.119Z
firstPublishedAt: 2023-05-11T16:44:20.204Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: adyenv1-connector-is-not-sending-pspreference-on-some-operations-and-thus-causing-error
kiStatus: Backlog
internalReference: 758411
---

## Summary


In some operations, the native AdyenV1 connector is not sending the `pspsReference` code to Adyen. Since this field is mandatory for this integration, we receive an error response when it is missing.

The reason for the absence of this field is under investigation.


##

## Simulation


Place an order with the Adyen Connector and try to cancel it.


##

## Workaround


N/A.

