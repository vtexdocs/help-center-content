---
title: 'Checkout UI sends hyphen in the postal code to orderForm'
id: 3cqrBqq5x8nixjAFt8BxCx
status: PUBLISHED
createdAt: 2024-01-16T12:37:56.497Z
updatedAt: 2024-01-16T12:37:57.041Z
publishedAt: 2024-01-16T12:37:57.041Z
firstPublishedAt: 2024-01-16T12:37:57.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-ui-sends-hyphen-in-the-postal-code-to-orderform
locale: en
kiStatus: Backlog
internalReference: 937692
---

## Summary


Checkout UI sends a hyphen for the postal code to orderForm, causing issues calculating SLAs when a country has 7 digits + the hyphen. This happens because the Logistics module considers the hyphen as a digit and depending on how the shipping rates were registered in the shipping policy.

Portugal and Japan are the only ones in this scenario.


##

## Simulation



- Have an account for Portugal or Japan;
- After adding products to the cart, type the postal code;
- The product may be shown as unavailable.


##

## Workaround



- Review the shipping rates to include a broader range.



