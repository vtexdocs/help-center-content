---
title: Orders for gift items aren't canceled if the payment is refused for the regular item's order
id: 6Yr7bEseJceNQiY2sw7Vtx
status: PUBLISHED
createdAt: 2022-10-18T22:34:21.726Z
updatedAt: 2022-11-25T21:49:34.223Z
publishedAt: 2022-11-25T21:49:34.223Z
firstPublishedAt: 2022-10-18T22:34:22.273Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orders-for-gift-items-arent-canceled-if-the-payment-is-refused-for-the-regular-items-order
kiStatus: Backlog
internalReference: 679598
---

## Summary


Orders are independent when they don't share the same payment transaction. Orders created to fulfill only the gift item through a different seller than the other items from a purchase don't have any payment transaction because they are free of charge.

If the payment is refused for the orders that contain the regular items, it won't cancel the order for the gift item, which will follow its own lifecycle, being approved for shipping.



## Simulation


Finish the purchase in a cart where the seller that fulfills the gift item is different than the seller for the regular item. It'll generate two orders, as described before. The payment for the first item can be refused or canceled, but the gift order won't receive this cancellation.



## Workaround


N/A

