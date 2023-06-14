---
title: 'UI considers only the available items to calculate SLA'
id: 11gXg1N1Sul7EJUZACuQNW
status: PUBLISHED
createdAt: 2023-04-25T21:55:37.785Z
updatedAt: 2023-05-08T18:06:01.904Z
publishedAt: 2023-05-08T18:06:01.904Z
firstPublishedAt: 2023-04-25T21:55:38.201Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-considers-only-the-available-items-to-calculate-sla
locale: en
kiStatus: Backlog
internalReference: 797028
---

## Summary


Different seller white labels may be selected to fulfill the products when using different addresses for delivery and pick-up. When the pickup option is selected and when changing to delivery, the UI considers only the available items to calculate the new SLA for delivery, even though the products are available. The delivery price will consider only the selected items available for pickup.


##

## Simulation



- Configure two seller white labels for different addresses;
- Add products that are available for both sellers;
- Add an address for delivery in the cart;
- Change to pick-up and add a different address;
- Go to delivery and see that the price will consider only the available items for pickup.


##

## Workaround


N/A




