---
title: "Checkout payment step doesn't work if Apple Pay is the first payment method"
id: 1FryZMcH54j7Rr5PNnV3eU
status: PUBLISHED
createdAt: 2022-11-24T19:13:41.785Z
updatedAt: 2022-11-24T19:13:42.623Z
publishedAt: 2022-11-24T19:13:42.623Z
firstPublishedAt: 2022-11-24T19:13:42.623Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-step-doesnt-work-if-apple-pay-is-the-first-payment-method
locale: en
kiStatus: Backlog
internalReference: 704699
---

## Summary


When the Apple Pay payment method is returned as the first in the Gateway list, and the user is closing a purchase in a browser other than Safari, when arriving at the payments part, a looping occurs and the user himself is unable to close the purchase on account of endless loading.



## Simulation


If you are making the purchase in a browser other than Safari, Apple Pay is the first payment method on the list returned by the gateway, go to the payment stage, the page will be stuck in a loading state.



## Workaround


Deactivate and reactivate this payment method so that it can go to the bottom of the list

