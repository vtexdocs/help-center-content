---
title: 'Gift Card + 2 cards in version 5 of the checkout recalculates the amount to be paid on each card'
id: 2SHo3fuu0oqyiiyo4ME2Ca
status: PUBLISHED
createdAt: 2018-10-03T16:17:29.385Z
updatedAt: 2022-12-22T20:48:35.026Z
publishedAt: 2022-12-22T20:48:35.026Z
firstPublishedAt: 2018-10-03T16:21:32.472Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: gift-card-2-cards-in-version-5-of-the-checkout-recalculates-the-amount-to-be-paid-on-each-card
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

This scenario is quite specific and happens only in version 5 of the checkout (which doesn't have the omnichannel features). It happens in the carts where the customer chooses to pay with a Gift Card and 2 cards. The amount to be paid for one of these cards is changed shortly after being entered by the customer.

## Simulation

1. Create a cart and go to the payment step;
2. Fill in/select the Gift Card;
2. Choose to pay with 2 cards;
3. Enter the amount to be paid on the first card;
4. Notice that the value has been changed to a smaller one.

## Workaround

We currently have no workaround for this problem.

