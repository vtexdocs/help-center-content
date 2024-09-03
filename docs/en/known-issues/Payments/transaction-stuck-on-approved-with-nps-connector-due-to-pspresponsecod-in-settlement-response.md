---
title: 'Transaction stuck on approved with NPS connector due to psp_ResponseCod in settlement response'
id: 1hRLO1HqsaSkvpu58eNYK2
status: PUBLISHED
createdAt: 2022-04-06T14:07:03.848Z
updatedAt: 2023-05-12T22:38:01.160Z
publishedAt: 2023-05-12T22:38:01.160Z
firstPublishedAt: 2022-04-06T14:07:04.301Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transaction-stuck-on-approved-with-nps-connector-due-to-pspresponsecod-in-settlement-response
locale: en
kiStatus: Backlog
internalReference: 557051
---

## Summary


After sending the Capture Request to the NPS connector, we receive their response. However, currently, we do not have any action in place for when the `psp_ResponseCod` field returns a value different from 2. This causes the capture operation to fail, preventing the payment from being captured successfully.


##

## Simulation


It is not possible to simulate the behavior as we depend on the provider's response.


##

## Workaround


N/A

