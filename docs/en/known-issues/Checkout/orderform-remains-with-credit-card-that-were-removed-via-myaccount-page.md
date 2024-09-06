---
title: 'OrderForm remains with credit card that were removed via my-account page'
id: 4wcp7SdlHPTRSHxsDxZ1Xr
status: PUBLISHED
createdAt: 2022-05-03T11:47:35.874Z
updatedAt: 2022-11-25T21:51:16.383Z
publishedAt: 2022-11-25T21:51:16.383Z
firstPublishedAt: 2022-05-03T11:47:36.417Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-remains-with-credit-card-that-were-removed-via-myaccount-page
locale: en
kiStatus: Fixed
internalReference: 276823
---

## Summary


Removing a credit card using the my-account page doesn't update the orderForm, which would keep a credit card that doesn't exist anymore.

The customer can't finish purchases using a removed credit card, but the invalid credit card won't be highlighted to the customer.



## Simulation


- create a cart and follow until the payment step, with a complete profile that had saved a credit card
- remove this credit card using the my-account
- note that the credit card remained on the orderForm, and you can't finish purchases using it



## Workaround


The customer must close the purchase with another credit card. A new orderForm won't present the credit card that was already removed from their profile. They can also exclude the credit card directly from the cart in the payment step, after being logged in.

