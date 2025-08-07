---
title: "Giftcard not getting refund after transaction cancellation"
id: lWW0jvEty50Pphr3JFYt7
status: PUBLISHED
createdAt: 2022-06-28T17:06:16.141Z
updatedAt: 2022-11-25T22:05:08.090Z
publishedAt: 2022-11-25T22:05:08.090Z
firstPublishedAt: 2022-06-29T12:49:40.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-not-getting-refund-after-transaction-cancellation
locale: en
kiStatus: Backlog
internalReference: 491195
---

## Summary


When the payment is a gift card and an error occurs during the order placement process and the order remains incomplete, then the GC is not refunded after the transaction is canceled.

This issue was first discussed in this thread and basically, there are 2 operations managed by the GC system where this issue might occur:

1. When the amount of the gift card is debited;
2. It then saves the transaction info in the SimpleDB.



## Simulation





## Workaround


Refund manually via the Gift Card UI.

