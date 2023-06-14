---
title: Inconsistency in payment method boleto bancário expiration dates
id: 771mUo6KdQP0pCTq5F5E0m
status: PUBLISHED
createdAt: 2022-03-28T01:17:58.206Z
updatedAt: 2022-11-25T22:06:07.068Z
publishedAt: 2022-11-25T22:06:07.068Z
firstPublishedAt: 2022-03-28T01:17:58.704Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistency-in-payment-method-boleto-bancario-expiration-dates
kiStatus: Backlog
internalReference: 489460
---

## Summary


Some Boleto Bancário generated from ItauShopLine connector may have an expiration date different from the one configured in the affiliation

This happens because, to determine the expiration date, we look for a field in our code that says the date and time of the exact moment of creation of the slip and then we add up the number of days allowed for the boleto to expire. However, using the time zone GMT+0 and not Brazilian time zone (GMT-3)  and then the boleto generated from 9 pm onwards consider the following day as the base day for this calculation, causing some Boletos Bancários to have one more day in the calculation of the due date

This problem was mapped from a case with ItauShopLine, but it can happen to others connectors, depending on purchases country and also from the particular functioning of each connector.



## Simulation



1. Go to affiliations and set up ItauShopLine with the `expireDays = 1`
2. Create a Payment Condition for the Boleto Bancário Payment Method  to be processed by the ItauShopLine
3. After 9 pm, Go to checkout and make a purchase with Boleto Bancário Payment Method
4. Open the boleto bancário and observe the expire date



## Workaround


N/A

