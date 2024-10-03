---
title: 'PayPalPlus does not respect the minimum installment amount'
id: 1IGzNPtXaaUsPkaq0qRgfK
status: PUBLISHED
createdAt: 2022-03-26T23:00:59.044Z
updatedAt: 2024-02-16T20:25:30.693Z
publishedAt: 2024-02-16T20:25:30.693Z
firstPublishedAt: 2022-03-26T23:00:59.445Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypalplus-does-not-respect-the-minimum-installment-amount
locale: en
kiStatus: No Fix
internalReference: 370271
---

## Summary


Even with the minimum installment amount configured in the PayPalPlus payment term, we display installments at checkout that do not respect this configuration



## Simulation



1. Configure PayPalPlus as new gateway affiliation
2. Configure PayPalPlus Payment condition to process with PayPalPlus gateway affiliation and set up the minimum installment amount
3. Go to checkout and buy a random item
4. In the Payment installments option will options that do not obey the minimum installment amount



## Workaround


N/A

