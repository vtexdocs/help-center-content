---
title: 'AdyenV1 does not correctly send the paymentMethod.type for Amex when using Apple Pay.'
id: UCCG0Lwe3U6dO7MHwFebO
status: PUBLISHED
createdAt: 2023-10-17T14:58:27.621Z
updatedAt: 2023-10-17T14:58:28.348Z
publishedAt: 2023-10-17T14:58:28.348Z
firstPublishedAt: 2023-10-17T14:58:28.348Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: adyenv1-does-not-correctly-send-the-paymentmethodtype-for-amex-when-using-apple-pay
locale: en
kiStatus: Backlog
internalReference: 920563
---

## Summary


Although Apple Pay allows the user to place an order using an Amex card, our AdyenV1 legacy connector does not support this brand.

In the interaction logs, it is noticed that the` paymentMethod.type` field is filled with "scheme," which results in an error from Adyen.


##

## Simulation


Attempt to place an order using Apple Pay with an Amex card. The transaction will be denied


##

## Workaround


N/A.





