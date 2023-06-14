---
title: "Portal doesn't delete cookies when client logout at checkout"
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2022-11-25T22:10:31.240Z
publishedAt: 2022-11-25T22:10:31.240Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: portal-doesnt-delete-cookies-when-client-logout-at-checkout
locale: en
kiStatus: Backlog
internalReference: 417322
---

## Summary


At a store's checkout, we have an option to log out.

Unfortunately, the request made to the portal application, is not deleting the cookies of the user, remaining on the OrderForm with the email ID from this client, so the client cannot log out using this option



## Simulation


1. Go to `.myvtex.com` and login from My Account using email and code;

2. Once you log in, make a cart and go to checkout;

3. Complete the Profile step and go to Shipping, then try to log out from the "It's not me, end session" link.

Checkout performs the request normally, making the request along with the `orderFormId`

However, Portal Application is not deleting this user's cookie and thus returning the same user, with this the email is kept in the orderForm and consequently, it is not logged out.



## Workaround


Log out using the Home page.

