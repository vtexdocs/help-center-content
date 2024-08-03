---
title: "Checkout allows users to jump to payment step with an empty 'shippingData' when using geolocation"
id: 7uv85LIrjoPaHxVgCAoy7I
status: PUBLISHED
createdAt: 2023-10-23T17:48:05.377Z
updatedAt: 2023-10-23T17:58:49.908Z
publishedAt: 2023-10-23T17:58:49.908Z
firstPublishedAt: 2023-10-23T17:48:06.206Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-allows-users-to-jump-to-payment-step-with-an-empty-shippingdata-when-using-geolocation
locale: en
kiStatus: Backlog
internalReference: 343056
---

## Summary


When using geolocation at checkout, users are allowed to jump to the payment step with the `shippingData` incomplete.


##

## Simulation



- Send the address via API with incomplete data;
- Add any products to the cart;
- Go to the cart and then go to checkout;
- Add the profile information.


##

## Workaround


N/A



