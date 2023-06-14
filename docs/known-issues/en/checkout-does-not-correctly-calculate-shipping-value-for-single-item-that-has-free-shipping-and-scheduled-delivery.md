---
title: 'Checkout does not correctly calculate shipping value for single item that has free shipping and scheduled delivery'
id: 4jX7JT0Wxt9S4xBe9FSwO
status: PUBLISHED
createdAt: 2022-02-21T19:48:04.202Z
updatedAt: 2022-11-25T21:53:42.846Z
publishedAt: 2022-11-25T21:53:42.846Z
firstPublishedAt: 2022-02-21T19:48:04.748Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-does-not-correctly-calculate-shipping-value-for-single-item-that-has-free-shipping-and-scheduled-delivery
locale: en
kiStatus: Backlog
internalReference: 529043
---

## Summary


When the cart consists of two items, and the type of delivery is scheduled, when adding the first item to the cart with free shipping, and it is the same SLA, the checkout ends up charging the value of this shipping, as it does not know how to deal with the calculation distribution of freight values ​​between the items, as it is a scheduled delivery and the window price is for a package as a whole.



## Simulation


Add in the cart 2 itens, and the first one with the freight free, also you need the common SLA for both and scheduled delivery.



## Workaround


N/A

