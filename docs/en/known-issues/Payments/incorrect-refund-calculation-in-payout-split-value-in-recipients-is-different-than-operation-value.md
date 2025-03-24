---
title: "Incorrect refund calculation in Payout Split - 'Value in recipients * is different than operation value *.'"
id: 7Fxtwnntpmi0DrUD5a603W
status: PUBLISHED
createdAt: 2024-07-29T15:07:07.716Z
updatedAt: 2024-07-29T15:07:12.565Z
publishedAt: 2024-07-29T15:07:12.565Z
firstPublishedAt: 2024-07-29T15:07:12.565Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incorrect-refund-calculation-in-payout-split-value-in-recipients-is-different-than-operation-value
locale: en
kiStatus: Backlog
internalReference: 1072285
---

## Summary


When calling a refund (in transactions with payout split) the error below can happen with divergent amounts:

(Example)

    Vtex.Practices.ExceptionHandling.ValidationException: Value in recipients (45.00) is different than operation value (299.99). at Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...


Note that this KI is different from the below (calculation issue related to rounding - the values difference is small):

https://help.vtex.com/en/known-issues/error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value--3Wo9ltN7Ju0ZqVLAQZcd7m


##

## Simulation


This seems to happen when the cart doesn't have marketplace products but we were not able to simulate this error.


##

## Workaround


NA, merchants need to request manual refund directly with acquirer.





