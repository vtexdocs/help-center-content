---
title: 'Postal code request in loop in the shipping preview component'
id: 6pcJyqvZ8u388xg04zJnnw
status: PUBLISHED
createdAt: 2022-07-25T16:47:46.301Z
updatedAt: 2022-11-25T21:51:12.684Z
publishedAt: 2022-11-25T21:51:12.684Z
firstPublishedAt: 2022-07-25T16:47:46.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: postal-code-request-in-loop-in-the-shipping-preview-component
locale: en
kiStatus: Backlog
internalReference: 352659
---

## Summary


After alternating the postal code a few times in the shipping preview component of the cart, the component enters an eternal looping of requests for `/api/checkout/pub/postal-code//`

Thus, making it impossible to change the postal code, since the component is stuck in the last added.



## Simulation


- Go to the checkout page

- Insert any postal code, and change to another one, repeat the change a few times, until the component loops.

- After entered in the looping, the component don't allow to make any new changes.
​​​


## Workaround


N/A

