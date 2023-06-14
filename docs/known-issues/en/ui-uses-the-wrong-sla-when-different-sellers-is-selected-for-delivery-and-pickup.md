---
title: UI uses the wrong SLA when different sellers is selected for delivery and pick-up
id: 1FidTQU7qfHsuJLUbPTe7w
status: PUBLISHED
createdAt: 2023-04-25T21:52:00.104Z
updatedAt: 2023-05-08T18:04:36.712Z
publishedAt: 2023-05-08T18:04:36.712Z
firstPublishedAt: 2023-04-25T21:52:00.579Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-uses-the-wrong-sla-when-different-sellers-is-selected-for-delivery-and-pickup
kiStatus: Backlog
internalReference: 797023
---

## Summary


Different seller white labels may be selected to fulfill the products when using different addresses for delivery and pick-up. The UI considers the wrong SLA when switching between delivery and pick-up.
For example, when changing from delivery to pick-up in the cart, the UI will apply the pickup address and select the pickup SLA Id that was available for the delivery address, which is not available anymore and won’t show/select the new pickups.


##

## Simulation



- Configure two seller white labels for different addresses;
- Add products that are available for both sellers;
- Add an address for delivery in the cart;
- Change to pick-up and add a different address;
- Go to delivery and back again to pick-up;
- No pick-up will be selected, and the message “Shipping not available for your location.” will be shown.


##

## Workaround


N/A




