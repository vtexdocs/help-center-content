---
title: 'Unrelated transaction returned when using sequence number to fetch a transaction in admin UI'
id: 62ePhzVMcAe8KRgs4ASSSv
status: PUBLISHED
createdAt: 2022-07-25T17:03:28.496Z
updatedAt: 2022-11-25T22:04:31.969Z
publishedAt: 2022-11-25T22:04:31.969Z
firstPublishedAt: 2022-07-25T17:03:28.988Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: unrelated-transaction-returned-when-using-sequence-number-to-fetch-a-transaction-in-admin-ui
kiStatus: Backlog
internalReference: 503446
---

## Summary


When the user searches a transaction in the admin by the sequence number, in some cases, the return is the desired transaction and unrelated transaction with chargeback status.



## Simulation


If the store has transactions in chargeback status and the user fetches it with the sequence number.



## Workaround


Use transactionId or paymentId instead.

