---
title: 'Simulating shipping to different address in repurchase carts in not possible'
id: 503wM1KC9nzDvPO4c2bQYM
status: PUBLISHED
createdAt: 2019-07-09T15:13:05.370Z
updatedAt: 2022-12-22T20:46:25.967Z
publishedAt: 2022-12-22T20:46:25.967Z
firstPublishedAt: 2019-07-09T20:17:22.706Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: simulating-shipping-to-different-address-in-repurchase-carts-in-not-possible
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

If users identify themselves during Checkout without loging in, the system completes the purchase based on the already available profile information, including the address, making it impossible for the user to simulate other shipping options.

This occurs because the shipping simulation requires, without exception, for a new address to be inserted in order for it to work. And, to that end, the user would have needed to log in. User data will continue secure.

## Simulation

1. Create your cart;
2. Insert an email that was already used to make a purchase;
3. Return to the cart;
4. Change the ZIP code in the shipping simulator.

## Workaround

In repurchase scenarios, inform users that they need to sign in to simulate shipping on the product page.

