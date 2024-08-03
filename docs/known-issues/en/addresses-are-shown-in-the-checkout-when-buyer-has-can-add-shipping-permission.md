---
title: 'Addresses are shown in the Checkout when buyer has "Can add shipping" permission'
id: 2ssiTryGJ6kGoZWxWkGnFF
status: PUBLISHED
createdAt: 2024-05-21T22:03:55.172Z
updatedAt: 2024-05-21T22:03:56.435Z
publishedAt: 2024-05-21T22:03:56.435Z
firstPublishedAt: 2024-05-21T22:03:56.435Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: addresses-are-shown-in-the-checkout-when-buyer-has-can-add-shipping-permission
locale: en
kiStatus: Backlog
internalReference: 1037067
---

## Summary


When a role has the permission "Can add shipping" in the B2B Checkout Settings and a buyer has addresses registered in the Profile System, clicking on "Deliver to another address" in the shipping step and clicking on "Back to address list" shows the addresses from the Profile System.


##

## Simulation



- Add the permission "Can add shipping" in the B2B Checkout Settings via admin to a role;
- Add the role to a buyer;
- Log in to the store and assemble a cart;
- After accessing the checkout, click on "Change shipping options"
- Click on "Deliver to another address" in the shipping step and click on "Back to address list",
- Different addresses from the cost center are in the cart.


##

## Workaround


Enable the Save user data opt-in so no addresses are added to the Profile System.




