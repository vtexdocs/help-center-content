---
title: 'Inconsistency on the deadlines of Customer Credit invoices'
id: 73zrcR44MDH7PAFdhu8fPM
status: PUBLISHED
createdAt: 2022-03-27T13:20:54.642Z
updatedAt: 2022-11-25T22:08:23.381Z
publishedAt: 2022-11-25T22:08:23.381Z
firstPublishedAt: 2022-03-27T13:20:55.062Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistency-on-the-deadlines-of-customer-credit-invoices
locale: en
kiStatus: Backlog
internalReference: 331279
---

## Summary


Orders made using Customer Credit as the payment method generate invoices of only a single installment due to 60 days. If you check the account at the Customer Credit module it's says that the invoice was generated without problem. However, looking through the API it's possible to notice that inside the customData field the deadlines (due dates) are sent with different values. This impactes the integration with other systems that organize the fulfillments.



## Simulation


N/A



## Workaround


N/A

