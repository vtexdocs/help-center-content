---
title: "Unexpected error message is displayed when selecting PayPal Plus at checkout"
id: 5ZxTkuVCHrFXCnpf4Q5Nb7
status: PUBLISHED
createdAt: 2019-03-20T17:56:18.673Z
updatedAt: 2022-12-22T20:49:08.399Z
publishedAt: 2022-12-22T20:49:08.399Z
firstPublishedAt: 2019-03-20T18:01:36.821Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: unexpected-error-message-is-displayed-when-selecting-paypal-plus-at-checkout
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

At checkout, if the customer selects __PayPal Plus__ as a payment condition, the message __erro inesperado__ ("unexpected error") may be displayed on the screen. This is a rare and intermittent event, but it can still trouble your customers at a key moment during shopping experience.

The occurrence of the error is closely linked to browser security mechanisms, which include more stringent policies regarding the use of cookies. That's because [PayPal Plus (transparent)](/en/tutorial/setting-up-paypal-plus) makes calls to the checkout API (at the time it's selected by the user) that depend on the sending of cookies, blocked by browsers. This is what causes the "unexpected error" message.

## Simulation

1. In your browser settings, disable the option that allows other websites to access cookies.
2. Follow the normal purchase flow and, at the checkout of your store, choose to pay with __PayPal Plus__.
3. Because the behavior is intermittent, you may have to repeat these steps a few times before you can see the error message.

## Workaround

For now, the user can only solve the problem by editing their browser settings. They must enable the option that allows other websites to access the cookies of the store in which they are making the purchase.

We recommend that if a customer contacts your store reporting this type of behavior, you should tell them to adjust their browser's cookie settings.

