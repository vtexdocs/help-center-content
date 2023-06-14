---
title: Shipping Preview wrongly showing unavailability message for pick-up
id: 6ntmev0Atk04FGnEy1U3QZ
status: PUBLISHED
createdAt: 2023-03-03T19:54:08.912Z
updatedAt: 2023-03-03T19:54:48.450Z
publishedAt: 2023-03-03T19:54:48.450Z
firstPublishedAt: 2023-03-03T19:54:09.559Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: shipping-preview-wrongly-showing-unavailability-message-for-pickup
kiStatus: Backlog
internalReference: 764457
---

## Summary


When you add the "selectedSla" (it must be a pick-up) and "selectedAddresses" via API in a cart with gift promotion, the store is configured for geolocation and uses polygons, the shipping preview will show an unavailability message for the pick-up, which it was selected via API. This behavior will impact the purchase flow since it won't allow moving forward after the shipping.


##

## Simulation



- Configure geolocation and polygons;
- Configure a gift promotion for an item;
- Add the item to the cart;
- Send the "selectedSla" as pick-up and "selectedAddresses" via API;
- Access the cart in the UI, you will see an unavailability message even though the API is correct.


##

## Workaround


Switch the option to Delivery and go back to Pick-Up




