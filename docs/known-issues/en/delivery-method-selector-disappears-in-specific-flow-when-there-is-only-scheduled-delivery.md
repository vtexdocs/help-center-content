---
title: Delivery method selector disappears in specific flow when there is only scheduled delivery
id: 7I24nVw5W7YUuoTvgH8W5k
status: PUBLISHED
createdAt: 2022-08-12T18:07:34.922Z
updatedAt: 2022-11-25T21:49:41.399Z
publishedAt: 2022-11-25T21:49:41.399Z
firstPublishedAt: 2022-08-12T18:07:35.420Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: delivery-method-selector-disappears-in-specific-flow-when-there-is-only-scheduled-delivery
kiStatus: Fixed
internalReference: 296786
---

## Summary


The date/time selector for scheduled delivery disappears when the user switches from "pick up" to "receive", this behavior occurs regardless of the use of the Lean Shipping feature.

Apparently the common factor is that the only "receive" options are scheduled, and the "withdraw" options are not scheduled, so this problem may not happen in other scenarios.



## Simulation


1- Have an item whose delivery can be made on a scheduled basis and also has the option of pick in store.
2- Insert this item in the cart
3- Advance to the delivery step
4- Insert a zip code that has delivery availability.
5- In the shipping area, choose the option to "remove" in the toogle
6- Now choose the "delivery" option in the toogle;
7- At this point the UI will no longer display the "choose delivery date and time" button.



## Workaround


N/A

