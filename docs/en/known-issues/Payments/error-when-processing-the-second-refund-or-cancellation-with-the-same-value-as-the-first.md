---
title: "Error when processing the second refund or cancellation with the same value as the first"
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2025-06-26T19:23:23.166Z
publishedAt: 2025-06-26T19:23:23.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-or-cancellation-with-the-same-value-as-the-first
locale: en
kiStatus: Scheduled
internalReference: 1118560
---

## Summary


When requesting a second partial refund of the same value as the first, the gateway returns the following message:

    Message: Gift card has been already refunded.


Or if requesting a second partial cancellation with the same value as the first, the gateway returns:

    Message: "Gift card has been already cancelled"


Although this is logged in the interaction, the second refund/cancellation is not actually processed.
This scenario is much more common for the second refund/cancellation with the same value, but it can also occur in subsequent refunds, as long as the requested amount equals the sum of the already processed refunds.


##

## Simulation



1. Make a purchase exclusively with a Gift Card (GC);
2. Finish the transaction;
3. Issue a partial refund for an amount less than half of the total payment;
4. Request another refund for the same amount as the first.


##

## Workaround


For refund cases, please open a ticket with support to apply the internal workaround.
For cancellation cases, cancel manually with your provider.




