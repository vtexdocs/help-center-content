---
title: 'Adyen 3DS2 double request generates payment authorization denial'
id: 3yR8LzaUjclJ22PkAymvoe
status: PUBLISHED
createdAt: 2023-09-20T13:09:29.771Z
updatedAt: 2023-09-20T13:09:30.507Z
publishedAt: 2023-09-20T13:09:30.507Z
firstPublishedAt: 2023-09-20T13:09:30.507Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: en
kiStatus: Backlog
internalReference: 884154
---

## Summary


When Adyen's 3DS2 request is sent twice it retrieves an error in the response and the payment is automatically denied.

Authorization response:

`{"status":409,"errorCode":"704","message":"request already processed or in progress","errorType":"validation"}`

Following the message:

`Not expected Response [].`

This is an issue when the payment is actually authorized on Adyen's end but since there is no settlement on our side we can't send a refund request.


##

## Simulation


We were not able to reproduce this scenario or find a pattern so far.


##

## Workaround


NA




