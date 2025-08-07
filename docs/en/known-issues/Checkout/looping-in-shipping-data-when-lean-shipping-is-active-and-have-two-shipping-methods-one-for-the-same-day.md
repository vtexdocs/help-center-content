---
title: "Looping in shipping data when lean shipping is active and have two shipping methods, one for the same day"
id: 2XVEHwNsoDNql5fcRgSIeV
status: PUBLISHED
createdAt: 2022-11-04T15:29:29.976Z
updatedAt: 2022-11-21T16:05:33.600Z
publishedAt: 2022-11-21T16:05:33.600Z
firstPublishedAt: 2022-11-04T15:29:31.187Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: looping-in-shipping-data-when-lean-shipping-is-active-and-have-two-shipping-methods-one-for-the-same-day
locale: en
kiStatus: Fixed
internalReference: 373868
---

## Summary


When the store is using lean shipping, and has 2 deliveries, one for the same day, when choosing for the same day the component goes into looping, making requests for `api/checkout /simulation` and the user is not able to follow the normal flow of purchase.



## Simulation


If you choose "Más rapido", in the network, you can see the looping in simulation requests. And the impossibility to continue to the payment.



## Workaround


N/A

