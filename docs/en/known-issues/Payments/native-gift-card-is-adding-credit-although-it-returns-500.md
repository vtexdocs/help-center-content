---
title: 'Native gift card is adding credit although it returns 500'
id: 1EngiQGhpPorgURRsszMX4
status: PUBLISHED
createdAt: 2023-02-27T20:40:44.824Z
updatedAt: 2023-05-11T16:25:34.547Z
publishedAt: 2023-05-11T16:25:34.547Z
firstPublishedAt: 2023-02-27T20:40:45.470Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: native-gift-card-is-adding-credit-although-it-returns-500
locale: en
kiStatus: Backlog
internalReference: 760896
---

## Summary


After conducting some empirical tests, we have observed that the /transaction route in the native gift card API, is sometimes returning a 500 error code while adding the credit requested, which is an unexpected behavior. Furthermore, we have noticed that the request is taking longer than expected to receive a response, indicating a timeout behavior. As a result, there is no effective lock in place to ensure that the card balance will not be credited in this scenario.


##

## Simulation


Intermittent behavior.


##

## Workaround


N/A





