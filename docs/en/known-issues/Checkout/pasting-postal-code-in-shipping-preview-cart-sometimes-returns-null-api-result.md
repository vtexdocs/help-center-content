---
title: "Pasting postal code in shipping preview cart sometimes returns null API result"
id: 5Lq32htqC7M9xiqajfn7y7
status: PUBLISHED
createdAt: 2022-06-01T15:30:08.776Z
updatedAt: 2024-05-21T13:03:32.812Z
publishedAt: 2024-05-21T13:03:32.812Z
firstPublishedAt: 2022-06-01T15:30:09.241Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pasting-postal-code-in-shipping-preview-cart-sometimes-returns-null-api-result
locale: en
kiStatus: Backlog
internalReference: 481878
---

## Summary


After entering the postal code once in the shipping preview and choosing to paste it again, it sometimes occurs to make a null request to the zip code API.

The request is `/api/checkout/pub/postal-code/null/postalcodenumber` and returns a 500 error.


##

## Simulation



- Go to the cart and add a postal code;
- Click to change it and paste another postal code (or even the same);
- Go to the shipping step, and the address may be incomplete.


##

## Workaround


The user will need to click the "Calculate" button or hit the enter key, in some cases typing the postal code without inserting it.




