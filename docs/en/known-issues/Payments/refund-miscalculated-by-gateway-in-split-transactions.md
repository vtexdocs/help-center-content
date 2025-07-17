---
title: "Refund miscalculated by gateway in split transactions"
id: jiUwsWgePG1Wka7wHTPEj
status: PUBLISHED
createdAt: 2025-03-19T19:38:12.860Z
updatedAt: 2025-03-20T12:35:29.818Z
publishedAt: 2025-03-20T12:35:29.818Z
firstPublishedAt: 2025-03-19T19:38:13.414Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: refund-miscalculated-by-gateway-in-split-transactions
locale: en
kiStatus: Backlog
internalReference: 1196767
---

## Summary


The gateway refund requests have only the commission amount value, even if the order management system request was sent with the total value.

To identify this known issue you should: Verify the total value requested on orders and compare with the calculated, and requested by the gateway to the provider. Then, check if the value is different between them, the same commission amount is on the recipient's object.


##

## Simulation


Is not possible to simulate.


##

## Workaround


There is no workaround available.





