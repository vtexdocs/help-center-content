---
title: "Error in checkout error message"
id: 7jCEQoDRPvNwYCJmAt78im
status: PUBLISHED
createdAt: 2022-03-25T14:46:49.548Z
updatedAt: 2024-02-16T20:27:24.748Z
publishedAt: 2024-02-16T20:27:24.748Z
firstPublishedAt: 2022-03-25T15:30:16.292Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-checkout-error-message
locale: en
kiStatus: No Fix
internalReference: 409895
---

## Summary


When an error occurs in the MercadoPagov2 affiliation Payment flow on checkout page, the message details are displayed without formatting for accents and special characters.



## Simulation



1. Configure MercadoPagoV2 Gateway affiliation
2. Configure a Credit Card Payment Condition to process with MercadoPagoV2
3. Go to checkout and buy a random item using a fake card
4. The checkout will return the error with wrong caracters between the message letters



## Workaround


N/A

