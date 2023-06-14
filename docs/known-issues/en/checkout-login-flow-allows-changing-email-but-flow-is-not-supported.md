---
title: 'Checkout login flow allows changing email but flow is not supported'
id: 2wP6MBxvyd3kFDmlgYx4Tk
status: PUBLISHED
createdAt: 2023-05-03T18:09:50.683Z
updatedAt: 2023-05-08T18:31:29.802Z
publishedAt: 2023-05-08T18:31:29.802Z
firstPublishedAt: 2023-05-03T18:09:51.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-login-flow-allows-changing-email-but-flow-is-not-supported
locale: en
kiStatus: Backlog
internalReference: 258447
---

## Summary


When at checkout with an informed e-mail and masked data, logging in will be necessary if the shopper wants to change any information. In the login box that will open, the email will already be filled with the cart's context, but the interface allows the "suggested" email to be modified.

The suggested e-mail must not be changed. If the client enters another email, the login flow will not work - in the API request, there will be a silent error, and the UI will be stuck in a "loading" state.


##

## Simulation



- At checkout, inform an email with a complete profile so that the data is auto-completed and masked;
- Try to change some information, such as the address (login will be required);
- In the login box, the e-mail in the cart will already be filled in;
- Change the email in the login box;
- Try to move on; it won't be possible.


##

## Workaround


The store can make this field read-only for the login flow at checkout.



