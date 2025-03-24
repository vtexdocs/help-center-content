---
title: 'In Payout Split the recipiens object is not sent in the Apple Pay payment method'
id: MPafkQI7w3q5kGLxQTgjG
status: PUBLISHED
createdAt: 2024-09-09T17:54:39.877Z
updatedAt: 2024-09-09T17:54:41.227Z
publishedAt: 2024-09-09T17:54:41.227Z
firstPublishedAt: 2024-09-09T17:54:41.227Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-payout-split-the-recipiens-object-is-not-sent-in-the-apple-pay-payment-method
locale: en
kiStatus: Backlog
internalReference: 1094952
---

## Summary


It is not possible to build/send recipients object for the Apple Pay payment method, even with all the necessary settings enabled.


##

## Simulation



1. Enable splitting of receivables in a connector that allows splitting using the Apple Pay payment method;
2. Make a purchase with an item from the seller, which has a commission;
3. Check that in the process in which the recipients should be sent, in the authorization or capture, the object does not exist.


##

## Workaround


N/A





