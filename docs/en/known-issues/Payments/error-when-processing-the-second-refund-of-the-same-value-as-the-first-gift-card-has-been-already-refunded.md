---
title: 'Error when processing the second refund of the same value as the first: Gift card has been already refunded'
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2024-10-16T20:27:35.166Z
publishedAt: 2024-10-16T20:27:35.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-of-the-same-value-as-the-first-gift-card-has-been-already-refunded
locale: en
kiStatus: Scheduled
internalReference: 1118560
---

## Summary


When requesting a second partial refund of the same value as the first, the gateway returns the following message:

    Message: Gift card has been already refunded.


Although this is logged in the interaction, the second refund is not actually processed.
This scenario is much more common for the second refund of the same value, but it can also occur in subsequent refunds, as long as the requested amount equals the sum of the already processed refunds.


##

## Simulation



1. Make a purchase exclusively with a Gift Card (GC);
2. Finish the transaction;
3. Issue a partial refund for an amount less than half of the total payment;
4. Request another refund for the same amount as the first.


##

## Workaround


A feature flag was created where added accounts ignore the part that introduces this bug.
https://github.com/vtex/configs/blob/main/src/configs/payment-gateway/flags/gch-refund-condition.jsonnet




