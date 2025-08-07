---
title: "Transaction stuck in status approved with payment canceled"
id: 5SwwnGi26tagIXuTmvToc
status: PUBLISHED
createdAt: 2024-06-07T14:21:22.809Z
updatedAt: 2024-06-12T17:33:43.967Z
publishedAt: 2024-06-12T17:33:43.967Z
firstPublishedAt: 2024-06-07T14:21:23.608Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-status-approved-with-payment-canceled
locale: en
kiStatus: Backlog
internalReference: 1046365
---

## Summary


The transaction was stuck in status approved, even though the payment was canceled.

When tried to settle it manually, the gateway returns the following error:

    "error": {"code": "1506","message": "The payment with ID = xxxxx was not settled because the settlement value was -x.xx.","exception": null}



##

## Simulation


There is no way to simulate this behavior.


##

## Workaround


There aren't any workarounds in this case.





