---
title: UI fails to change state between delivery and collection correctly
id: 5gKsCV8Rh779FlzppablkP
status: PUBLISHED
createdAt: 2022-05-02T18:08:17.388Z
updatedAt: 2022-11-25T21:52:46.291Z
publishedAt: 2022-11-25T21:52:46.291Z
firstPublishedAt: 2022-05-02T18:08:17.892Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-fails-to-change-state-between-delivery-and-collection-correctly
kiStatus: Backlog
internalReference: 526736
---

## Summary


Sometimes when the user changes the delivery type between delivery and pickup at Checkout (important to be at the checkout and not in the cart, although this will probably happen in the cart as well), the orderForm saves the delivery state in `logisticsInfo` when the pickup is selected.



## Simulation


To simulate this scenario just go to any account in v6. Fill the cart with any product that have available the delivery method as delivery or pickup and proceed to checkout.

This issue is intermittent. It takes a while to see the problem happening.

To make it work, change between delivery and pickup repeatedly until you notice that the orderForm stores inside `logisticsInfo[index].selectedSla` the type of delivery defined for delivery when in fact it should be defined as the name established for the chosen pickup option. The error usually happens when the pickup is chosen and in the orderForm we have the delivery type defined as delivery name configured.

Note: It is important to note that there is no error being reported in the orderForm or in the platform. We have the UI showing/selecting a delivery type and the orderForm showing a different UI.



## Workaround


For the purchase not be prevented from being made, when this problem occurs, refresh the page so that the situation is corrected or just change the type of delivery, again, and come back, to solve this problem.

