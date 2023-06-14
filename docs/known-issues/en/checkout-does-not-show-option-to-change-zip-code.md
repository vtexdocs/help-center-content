---
title: Checkout does not show option to change zip code
id: 23xS5PVwwuDm5NhSZN65sU
status: PUBLISHED
createdAt: 2022-04-18T14:04:04.407Z
updatedAt: 2022-11-25T21:50:05.024Z
publishedAt: 2022-11-25T21:50:05.024Z
firstPublishedAt: 2022-04-18T14:04:04.826Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-does-not-show-option-to-change-zip-code
kiStatus: Fixed
internalReference: 321598
---

## Summary


For items that are restricted to pick up at the store to certain addresses, the option to change the zip code is disappearing while the user is in the delivery tab, on the cart .
As a result, the customer does not have a clear flow to seek delivery in other zip codes.



## Simulation



1- Add an item to your cart that has an option to withdraw and send
2- Insert a zip code that is not served by the "delivery" option, and is only served by the "pickup" option.
3- In this step, the UI will display the following message "Your item is not available to receive at your address.
You can pick it up at a nearby point."
4- Now, in this same step, click on the zip code to change it
5- Note that the option to edit the zip code will disappear.



## Workaround



There is no known workaround.
However, if the user switches between withdraw/receive the zip code field will be displayed again for entering a new value.

