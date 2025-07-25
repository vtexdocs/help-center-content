---
title: 'Loop in the authentication pop-up when the first payment condition requires authentication'
id: 7fU6wnrTjS0aJqRmertSFg
status: PUBLISHED
createdAt: 2023-06-14T17:54:36.973Z
updatedAt: 2023-12-21T15:50:16.992Z
publishedAt: 2023-12-21T15:50:16.992Z
firstPublishedAt: 2023-06-14T17:54:37.537Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: loop-in-the-authentication-popup-when-the-first-payment-condition-requires-authentication
locale: en
kiStatus: Backlog
internalReference: 844192
---

## Summary


The authentication pop-up gets in loop when the first payment condition has `requiresAuthentication: true`. Continuing the purchase will only be possible if the page is reloaded.


##

## Simulation



- Configure a payment condition with `requiresAuthentication: true`;
- Make sure the payment condition is the first one;
- Use an existing email in the checkout to be identified;
- Go to the Payment step and the authentication pop-up;
- Log in using one of the options and notice that the pop-up is not closed.


##

## Workaround



- Change the order of the payment condition guaranteeing that the first option is not the one with `requiresAuthentication: true`;
- Set the parameter "defaultPaymentSystemToApplyOnUserOrderForm" in the orderForm Configuration via API for one without authentication, such as a credit card.



