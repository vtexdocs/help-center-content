---
title: "Error with returnCode 355 in cancellation process with ERedeRest and E-Rede V2"
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2024-11-26T19:47:30.712Z
publishedAt: 2024-11-26T19:47:30.712Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-with-returncode-355-in-cancellation-process-with-erederest-and-erede-v2
locale: en
kiStatus: Backlog
internalReference: 740084
---

## Summary


The legacy connectors, ERedeRest and E-Rede V2, initiate cancellations by sending a request to the provider and expect a "returnCode":"359" indicating a successful cancellation. Any other code is interpreted by our gateway as an undefined status, causing the transaction to get stuck in a cancelling state. Even though in some cases, the refund/cancellation request is successful. This led to repeated cancellation attempts, even when the cancellation had already been processed by the provider.


##

## Simulation


It cannot be simulated as we depend on the provider's response.


##

## Workaround


If the payment on the provider side is already canceled

    {"returnCode":"355","returnMessage":"Transaction already cancelled."}

The product support team has the option to utilize an internal API, '`force-cancel-status`', to update the payment and transaction status to 'canceled.'

This may not work in transactions with multiple payments, depending on the consistency of their settlements' status.




