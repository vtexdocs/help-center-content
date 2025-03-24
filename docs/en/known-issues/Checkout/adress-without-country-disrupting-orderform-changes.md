---
title: 'Adress without country disrupting orderForm changes'
id: 3LfFmUaetyqZij8MCBJtcY
status: PUBLISHED
createdAt: 2022-05-16T19:58:42.987Z
updatedAt: 2024-02-16T20:23:23.949Z
publishedAt: 2024-02-16T20:23:23.949Z
firstPublishedAt: 2022-05-16T19:58:43.429Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: adress-without-country-disrupting-orderform-changes
locale: en
kiStatus: No Fix
internalReference: 579814
---

## Summary


If an incomplete address without the "country" information is inserted into an orderForm, items can't be added to it.

It happens because the shipping calculation depends on it, but while there are no items on the cart, this process isn't triggered, allowing invalid addresses to be registered.

It happens mostly through direct API usage. In internal logs, the exception may be found as "The Country field is required", under the 400 status code.



## Simulation



- to create an orderForm (without items yet)
- to add an address through the SendAttachment API (shippingData), without the country property
- to try adding an item; it'll generate a generic exception



## Workaround


It's required to ensure that every address contains the "country" information since the frontend implementation.

