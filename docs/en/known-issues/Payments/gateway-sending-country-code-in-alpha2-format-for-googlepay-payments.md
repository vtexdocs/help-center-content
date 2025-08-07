---
title: "Gateway sending country code in alpha-2 format for GooglePay payments"
id: 2w3ofI9vXdQwjjtAdChFdD
status: PUBLISHED
createdAt: 2025-03-10T19:56:38.926Z
updatedAt: 2025-03-10T19:56:39.724Z
publishedAt: 2025-03-10T19:56:39.724Z
firstPublishedAt: 2025-03-10T19:56:39.724Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gateway-sending-country-code-in-alpha2-format-for-googlepay-payments
locale: en
kiStatus: Backlog
internalReference: 1191562
---

## Summary


The gateway sends the billing address country code in alpha-2 format to the provider in case of GooglePay payments.


##

## Simulation


It happens with all Google Pay transactions since Google uses a different format from what is expected in our protocol.


##

## Workaround


The provider should identify and accept the transaction even if the billing address has a different format in cases of GooglePay transactions.





