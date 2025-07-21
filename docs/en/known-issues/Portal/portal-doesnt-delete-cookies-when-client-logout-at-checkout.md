---
title: "Portal doesn't delete cookies when client logout at checkout"
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2025-05-16T20:07:25.310Z
publishedAt: 2025-05-16T20:07:25.310Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-doesnt-delete-cookies-when-client-logout-at-checkout
locale: en
kiStatus: No Fix
internalReference: 417322
---

## Summary


At a store's checkout, we have an option to log out.

Unfortunately, the request made to the portal application does not delete the user's cookies, which remain on the OrderForm with the client's email, so the client cannot log out using this option. This behavior happens in stores with a storefront solution other than "Legacy CMS Portal".


##

## Simulation


1. Go to the store's website (`www.store.com`) and login from My Account using email and code;
2. Once you log in, make a cart and go to checkout;
3. Complete the Profile step and go to Shipping, then try to log out from the "It's not me, end session" link.

Checkout performs the request normally, making the request along with the `orderFormId`

However, the Portal Application does not delete this user's cookie and thus returns the same user. The email is kept in the order form, and consequently, it is not logged out.


##

## Workaround


Open a ticket with VTEX asking to enable the logout with VTEX ID.




