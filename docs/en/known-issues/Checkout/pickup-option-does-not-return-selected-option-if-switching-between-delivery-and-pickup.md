---
title: 'Pickup option does not return selected option if switching between delivery and pickup'
id: 12AvDe4dD8IQ2WaDKTSeXx
status: PUBLISHED
createdAt: 2022-09-21T21:06:28.853Z
updatedAt: 2023-03-27T12:38:32.193Z
publishedAt: 2023-03-27T12:38:32.193Z
firstPublishedAt: 2022-09-21T21:06:29.670Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-option-does-not-return-selected-option-if-switching-between-delivery-and-pickup
locale: en
kiStatus: Backlog
internalReference: 588394
---

## Summary


When the shopper selects a store for pick-up, switches to delivery, and adds a new address unavailable for delivery when returns for pick-up, another store returns selected. If we alternate between delivery and pick-up, sometimes the selected store initially appears interspersing with another store.


##

## Simulation



- Add an item to the cart that only has store pickup stock;
- In the pick-up option, search for an address and select any store;
- Switch to delivery and change the address;
- Return to pickup.


##

## Workaround


N/A



