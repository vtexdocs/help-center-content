---
title: "Verification transactions when saving card in MyCards are not automatically canceled"
id: 3VqRlcnzHqDEx7v1IIlBuf
status: PUBLISHED
createdAt: 2022-03-27T15:14:55.382Z
updatedAt: 2024-02-16T20:27:46.524Z
publishedAt: 2024-02-16T20:27:46.524Z
firstPublishedAt: 2022-03-27T15:14:56.630Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: verification-transactions-when-saving-card-in-mycards-are-not-automatically-canceled
locale: en
kiStatus: No Fix
internalReference: 347084
---

## Summary


When a card is saved in the MyCards module, a verification transaction in the amount of R$ 1.50 is generated, which, after following the authorization and approval flow, must be automatically canceled. This transaction is intended to validate that the saved card is authentic and is transacting smoothly.
However, it was identified that in the case where the acquirer returns an undefined in the communication, the Gateway is not calling simulation



## Simulation


This is an intermittent problem and depends on the provider, so we can't determine a step by step to reproduce this scenario



## Workaround


No Workaround was identified but it is possible to manually cancel the R$ 1.50 transaction via API

