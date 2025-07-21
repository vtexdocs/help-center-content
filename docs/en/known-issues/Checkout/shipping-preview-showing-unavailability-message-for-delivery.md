---
title: "Shipping Preview showing unavailability message for delivery"
id: 5rL396csjLiJhD8morzfeb
status: PUBLISHED
createdAt: 2025-01-29T14:24:05.390Z
updatedAt: 2025-01-29T14:24:06.123Z
publishedAt: 2025-01-29T14:24:06.123Z
firstPublishedAt: 2025-01-29T14:24:06.123Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-showing-unavailability-message-for-delivery
locale: en
kiStatus: Backlog
internalReference: 1170877
---

## Summary


The shipping preview in the cart does not consider the selected SLA, even though the Checkout API is correct. It shows the message "Shipping not available for your location."

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Checkout/shipping-preview-showing-unavailability-message-for-delivery_1.png)

This behavior was noticed in particular countries, such as Argentina and Colombia, but it's not limited to those 2.


##

## Simulation



- Add an item to the cart;
- Type a postal code with the available SLA.


##

## Workaround


N/A - Refreshing the page will show the SLA.




