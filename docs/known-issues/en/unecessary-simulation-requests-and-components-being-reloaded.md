---
title: 'Unecessary simulation requests and components being reloaded'
id: 1qXJU1XC4r0e9KWxNUKp3L
status: PUBLISHED
createdAt: 2022-08-30T17:34:47.635Z
updatedAt: 2022-11-25T21:50:25.658Z
publishedAt: 2022-11-25T21:50:25.658Z
firstPublishedAt: 2022-08-30T17:34:48.111Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: unecessary-simulation-requests-and-components-being-reloaded
kiStatus: Backlog
internalReference: 648298
---

## Summary


Multiple simulation requests may be made after changes in the orderForm. This is related to the _lean shipping_ calculation to calculate shipping packages.

Depending on the change, like automatic requests to register "paymentData" information, they can be considered unnecessary. Thus, slowing the page, overcharging external services, and changing the UI state while waiting for them.



## Simulation



- create a cart
- add a ZIP code on the shipping component
- watch the requests made by the UI, which will include updates for "shippingData" and "paymentData", and also these multiple "simulation" after each one of these



## Workaround


N/A

