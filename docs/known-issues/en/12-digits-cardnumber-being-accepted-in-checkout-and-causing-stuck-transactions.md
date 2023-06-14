---
title: '12 digits cardNumber being accepted in checkout and causing stuck transactions'
id: 2vLsFwO5Dt2gUL9kUTZ8s3
status: PUBLISHED
createdAt: 2022-03-03T18:39:42.814Z
updatedAt: 2022-11-25T22:05:12.000Z
publishedAt: 2022-11-25T22:05:12.000Z
firstPublishedAt: 2022-03-03T18:39:43.280Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: 12-digits-cardnumber-being-accepted-in-checkout-and-causing-stuck-transactions
locale: en
kiStatus: Backlog
internalReference: 452392
---

## Summary


When a customer enters a 12 digits cardNumber, despite this number of digits not being valid, we send it several times to the acquirer even knowing that he will not approve since the cardNumber is not in the pattern: [0-9]{13,19}. The result is a stuck order for several days until being canceled.



## Simulation



1. Go the checkout of an Argentina store
2. Fill in a Mastercard 12 digits random cardNumber
3. Click on "SÍ, EL NÚMERO DE LA TARJETA DE CRÉDITO ES CORRECTO"



## Workaround


N/A

