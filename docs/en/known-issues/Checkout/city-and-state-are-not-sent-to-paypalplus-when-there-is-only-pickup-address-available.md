---
title: 'City and state are not sent to PayPalPlus when there is only pickup address available'
id: 5ScWTMLqT9oBMUYFc6WGo2
status: PUBLISHED
createdAt: 2023-06-01T13:47:08.477Z
updatedAt: 2023-09-12T13:10:53.169Z
publishedAt: 2023-09-12T13:10:53.169Z
firstPublishedAt: 2023-06-01T13:47:09.590Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: city-and-state-are-not-sent-to-paypalplus-when-there-is-only-pickup-address-available
locale: en
kiStatus: Fixed
internalReference: 836025
---

## Summary


The fields "city" and "state" are not sent to PayPalPlus when the shopper adds only a pickup address to the cart, making the payment method not load.


##

## Simulation



- Add products to the cart;
- Go to Shipping step;
- Select "Pick up in store", add the postal code, and select a store;
- Click on "Go to payment" and select the Credit card from PayPalPlus.


##

## Workaround


Select "Delivery", add the postal code, and the change to "Pick up in store".




