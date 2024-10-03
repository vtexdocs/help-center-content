---
title: "Failure to add data in the 'deliver to another address' step causes the 'go to payment' button to disappear"
id: cdZO8gGXDB1JZSj42AnVh
status: PUBLISHED
createdAt: 2022-01-24T21:42:52.750Z
updatedAt: 2023-10-13T15:29:14.854Z
publishedAt: 2023-10-13T15:29:14.854Z
firstPublishedAt: 2023-10-13T15:29:14.854Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: failure-to-add-data-in-the-deliver-to-another-address-step-causes-the-go-to-payment-button-to-disappear
locale: en
kiStatus: Backlog
internalReference: 467419
---

## Summary


During the checkout stage, in the step of filling in the shipping data, by clicking on the option "Deliver to another address", if no address is added and the shopper comes back to the address list (using the button "back to address book") the button "Go to payment" disappears.


##

## Simulation



- During the Checkout stage, when filling in the shipping data, if there is a list of addresses, click on "Deliver to another address";
- Do not add any address and return to the shipping data by clicking on the "Back to address list" button;
- The "Go to payment" button disappears.


##

## Workaround


For the button to be displayed again, just click on one of the addresses in the address book. However, there is no workaround to prevent this behavior.




