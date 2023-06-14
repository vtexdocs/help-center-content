---
title: 'AdyenV2(PPP) is requiring pspReference to cancel transaction.'
id: 3rKIFtngLmBTHSIr2AYql1
status: PUBLISHED
createdAt: 2022-03-03T22:08:18.628Z
updatedAt: 2023-05-24T20:01:22.862Z
publishedAt: 2023-05-24T20:01:22.862Z
firstPublishedAt: 2022-03-03T22:08:19.111Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: adyenv2ppp-is-requiring-pspreference-to-cancel-transaction
kiStatus: Backlog
internalReference: 486752
---

## Summary


When the transaction is acknowledged by the provider and the status never changes from undefined, AdyenV2 is requiring a pspReference to cancel the transaction. This isn't an expected behavior because this field doesn't exist in the PPP, thus the customer gets stuck on the PIX modal at the checkout UI.



## Simulation


Start a new transaction with PIX using AdyenV2 and don't finalize the payment on the app. Then, the transaction will get stuck in this status.



## Workaround


There's no workaround.

