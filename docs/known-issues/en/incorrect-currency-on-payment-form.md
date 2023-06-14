---
title: 'Incorrect currency on payment form'
id: 636reFJs0MeHQJO0NlQV7Z
status: PUBLISHED
createdAt: 2022-03-13T21:29:33.920Z
updatedAt: 2022-11-25T22:05:48.750Z
publishedAt: 2022-11-25T22:05:48.750Z
firstPublishedAt: 2022-03-13T21:29:34.493Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incorrect-currency-on-payment-form
kiStatus: Backlog
internalReference: 449286
---

## Summary



The checkout `orderForm` is showing wrong currency (BRL instead of USD) when we have two different rules for two trade polices (Brazil and USA) with PayPal connector. Clients are not able to change to correct currency. Therefore when placing the order, even though the correct rule is matched, we got an error:

_(400) Bad Request., detail: _
_{"message": "Currency of capture must be the same as currency of authorization"...}_



## Simulation



N/A



## Workaround



N/A

