---
title: 'Email not auto-filling for new buyers after logging in'
id: 2H6REXZGS6utlWmYKoPmGq
status: PUBLISHED
createdAt: 2023-10-17T16:22:21.667Z
updatedAt: 2023-11-03T17:17:12.530Z
publishedAt: 2023-11-03T17:17:12.530Z
firstPublishedAt: 2023-10-17T16:22:22.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: email-not-autofilling-for-new-buyers-after-logging-in
locale: en
kiStatus: Fixed
internalReference: 920634
---

## Summary


When a new buyer logs in and proceeds to checkout, the email isn't automatically filled in requiring the customer to re-enter their email. This also happens using APIs and sending in headers with the buyer's cookies.


##

## Simulation



- Log in with an email never used before in the store;
- Add products to the cart;
- Go to checkout;
- The email won't be filled, and it should be typed again.


##

## Workaround


N/A




