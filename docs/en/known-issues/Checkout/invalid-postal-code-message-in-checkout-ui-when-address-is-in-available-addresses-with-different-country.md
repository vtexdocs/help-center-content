---
title: "'Invalid postal code' message in Checkout UI when address is in available addresses with different country"
id: 4VggIx4xWPNW6OBIrQ0js4
status: PUBLISHED
createdAt: 2024-06-21T17:08:59.860Z
updatedAt: 2024-06-21T17:09:00.771Z
publishedAt: 2024-06-21T17:09:00.771Z
firstPublishedAt: 2024-06-21T17:09:00.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: invalid-postal-code-message-in-checkout-ui-when-address-is-in-available-addresses-with-different-country
locale: en
kiStatus: Backlog
internalReference: 1053959
---

## Summary


Checkout UI uses the country registered in its state to validate the postal code input.

When addresses are registered in available addresses, but the orderForm is changed to another sales channel, and this sales channel has a different country to ship, the message "Invalid postal code" is shown right below the postal code input, not being able to move forward with the purchase.


##

## Simulation



- Assemble a cart and add an address;
- Change the sales channel, where it ships to a different country;
- Try to add the new postal code; the "Invalid postal code" is shown.


##

## Workaround


N/A




