---
title: "Incomplete billingAddress despite isBillingAddressDifferent: false"
id: 2CeCL5GPjrf04jXrTmTRMW
status: PUBLISHED
createdAt: 2025-07-01T13:41:53.688Z
updatedAt: 2025-07-01T14:03:58.548Z
publishedAt: 2025-07-01T14:03:58.548Z
firstPublishedAt: 2025-07-01T13:41:54.340Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incomplete-billingaddress-despite-isbillingaddressdifferent-false
locale: en
kiStatus: Backlog
internalReference: 1252301
---

## Summary


The `billingAddress` is incomplete, missing fields such as `street`, `number`, `neighborhood`, and `postalCode`. In some unclear scenarios, even when the `isBillingAddressDifferent` field is set to `false` (indicating the `billingAddress` should be the same as the `shippingAddress`), the `billingAddress` ends up being different, and often an incomplete version of the `shippingAddress`.


##

## Simulation


This issue cannot be reproduced reliably.



##

## Workaround


There is no known workaround.





