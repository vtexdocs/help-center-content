---
title: 'Checkout does not display shipping promotion at first instant for specific condition'
id: 14rQaM53csQQeA1wu5lRj8
status: PUBLISHED
createdAt: 2022-05-20T17:46:10.644Z
updatedAt: 2024-01-15T14:35:39.473Z
publishedAt: 2024-01-15T14:35:39.473Z
firstPublishedAt: 2022-05-20T17:46:11.046Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-display-shipping-promotion-at-first-instant-for-specific-condition
locale: en
kiStatus: No Fix
internalReference: 280144
---

## Summary


The checkout (backend) has a behavior of pre-selecting the best delivery method for the user as soon as a zip code is informed.

Promotions that use the restriction of "Apply the discount only when one of the above carriers is selected by the customer" in fact are only applied after the customer chooses the specific delivery method.

It happens that, if the delivery option automatically selected by checkout fits into any promotion with the above restriction, the discount will not be applied The option mentioned is the one that says "Apply the discount only when one of the carriers above is selected by the customer").

This only occurs at the first moment, as the checkout does not recalculate promotions when making this automatic delivery choice. This is because, if you recalculate promotions, eventually the best delivery option may be different, and this would leave the system in a loop, always looking for the best option. In future orderForm update, its entire context is recalculated, this time with the delivery form actually selected, and then the promotion will be applied.

In addition to this fact, the cart shipping simulation (shipping-preview) makes additional requests to the API, not only using the orderForm context. This causes him to receive the promotion, while cart totals are restricted to the context of the orderForm, which does not yet have the promotion, resulting in diverging values.


##

## Simulation


- have a free shipping promotion restricted to an option "A", and with the additional option above enabled
- have a cart and zip code with two or more types of shipping, where "A" is the cheapest shipping (example, A = R$10; B = R$20)
- enter the zip code and note that "A" (the cheapest) will be selected automatically, but will still appear as R$10
- select "B" shipping (BRL 20) and return to "A" shipping (BRL 10)
- at this time the value of "A" will be recalculated and will be displayed as free


##

## Workaround


It is not recommended to use this restriction in shipping promotions.




