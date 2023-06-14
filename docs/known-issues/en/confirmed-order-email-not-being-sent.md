---
title: 'Confirmed order email not being sent'
id: 4RelMFApLldLtf0GxhYzdt
status: PUBLISHED
createdAt: 2023-03-10T22:07:59.908Z
updatedAt: 2023-05-29T20:07:11.271Z
publishedAt: 2023-05-29T20:07:11.271Z
firstPublishedAt: 2023-03-10T22:08:01.026Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: confirmed-order-email-not-being-sent
locale: en
kiStatus: Fixed
internalReference: 423628
---

## Summary


Checkout doesn't map all the flows where the "GatewayCallback" must trigger the "Raised OrderPlaced" event, so unmapped flows are suitable not to fire this event as expected, directly affecting the order confirmation email to be sent.


##

## Simulation


There is no way to simulate the scenario.


##

## Workaround


N/A



