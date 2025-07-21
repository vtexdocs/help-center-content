---
title: "Pre-analysis request sent multiple times"
id: 6DQ6ABdCrvgHVl9GN3NYtC
status: PUBLISHED
createdAt: 2025-07-08T17:20:15.445Z
updatedAt: 2025-07-08T17:20:16.293Z
publishedAt: 2025-07-08T17:20:16.293Z
firstPublishedAt: 2025-07-08T17:20:16.293Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: preanalysis-request-sent-multiple-times
locale: en
kiStatus: Backlog
internalReference: 1256754
---

## Summary


VTEX's payment gateway sends the same pre-analysis request to the anti-fraud provider a second time, even when the first call was successful.

It is not expected for the gateway to send multiple pre-analysis requests, as this can cause the fraud analysis process to take longer than necessary. However, according to our protocol, the anti-fraud provider must be prepared to handle multiple requests.

The duplicated request can be seen in the interactions logs:
`Provider Owner Account is Request HTTP POST to /pre-analysis`


##

## Simulation


Não é possível simular


##

## Workaround


N/A





