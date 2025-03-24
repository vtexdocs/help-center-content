---
title: 'Lean Shipping overrides user preferred shipping method to cheapest option in different sessions/browsers'
id: 2bUIAHTUDuu2K98HWVjVfb
status: PUBLISHED
createdAt: 2023-02-01T21:06:22.140Z
updatedAt: 2023-02-01T21:06:23.163Z
publishedAt: 2023-02-01T21:06:23.163Z
firstPublishedAt: 2023-02-01T21:06:23.163Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-overrides-user-preferred-shipping-method-to-cheapest-option-in-different-sessionsbrowsers
locale: en
kiStatus: Backlog
internalReference: 607411
---

## Summary


In new sessions (different browsers) for the same orderForm, the previously selected option is not taken into account, being always superimposed on the "cheaper" option, especially affects shared cart scenarios


##

## Simulation



- Make the purchase process until reaching the cart, do a shipping simulation, and select the fastest option that has the shipping value to be charged
- Generate the social selling link (shared cart) and open it in a new anonymous tab, for example
- See the shipping cost is the cheapest option instead of the selected option previously


##

## Workaround


N/A




