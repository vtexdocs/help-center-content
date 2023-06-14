---
title: '"Go to payment" button doesn't work in delivery split when switching between Delivery and Pick up options'
id: 4VDxpsWl6N0SjriaqUtXG9
status: PUBLISHED
createdAt: 2023-02-17T18:03:49.526Z
updatedAt: 2023-02-17T18:03:49.948Z
publishedAt: 2023-02-17T18:03:49.948Z
firstPublishedAt: 2023-02-17T18:03:49.948Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: go-to-payment-button-doesnt-work-in-delivery-split-when-switching-between-delivery-and-pick-up-options
kiStatus: Backlog
internalReference: 756587
---

## Summary


In a cart with at least 2 products where there is a delivery split in which one of the items is available for pick up and the other only for scheduled delivery, the UI will not allow going to payment step when you change between Pick up and Delivery options if the first item in the cart is the one with scheduled delivery


##

## Simulation



- Have at least 2 items in the cart where one of them is scheduled delivery and the other one, pickup;
- Make sure the item for scheduled delivery is the first one in the cart
- Select the scheduled delivery date for each item;
- Go to the Pickup Option;
- Go back to the Delivery Option (the date will be already filled);
- Try to click on "Go to payment" button, you will not be able to.


##

## Workaround


Select the scheduled dates for the items again.




