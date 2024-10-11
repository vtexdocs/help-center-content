---
title: 'Delivery schedule date getting empty when item is a gift added'
id: 5HMepNuoEHY0xJPm4PKPb4
status: PUBLISHED
createdAt: 2022-05-25T21:39:17.092Z
updatedAt: 2022-11-25T21:53:17.345Z
publishedAt: 2022-11-25T21:53:17.345Z
firstPublishedAt: 2022-05-25T21:39:17.787Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delivery-schedule-date-getting-empty-when-item-is-a-gift-added
locale: en
kiStatus: Backlog
internalReference: 586143
---

## Summary



In the cart that already has a delivery item scheduled and selected, with its address filled in, when arriving at the payment stage and adding a payment method that adds a free gift to the cart and this gift also has scheduled delivery, the user is returned to stage of choosing the scheduled delivery, but the gift ends up "taking" the date that had been previously filled in for the first item.
When analyzing the API, the `deliveryWindow` of this gift remains as null and making it impossible for the user to proceed to the payment step. Since clicking the button nothing happens.

Note: if the user changes the date in the date selection, an update occurs and the `deliveryWindow` is filled, with that the user is able to go to the payment step.



## Simulation


Have a cart with an item with scheduled delivery, fill in your details normally, choose the delivery date, when you get to the payment stage, choose a payment method that adds a gift, the checkout will return to the scheduled delivery date selection stage, so if the user clicks on the proceed button, he will not be able to, only if he changes the date of this gift.



## Workaround


N/A

