---
title: "Lean shipping displays at UI the higher shippingEstimate from the selected SLAs"
id: 1EYi8qK6pHwBU9Yqlxa9jm
status: PUBLISHED
createdAt: 2024-10-30T16:05:02.385Z
updatedAt: 2024-10-30T16:05:03.305Z
publishedAt: 2024-10-30T16:05:03.305Z
firstPublishedAt: 2024-10-30T16:05:03.305Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
locale: en
kiStatus: Backlog
internalReference: 1126188
---

## Summary


In carts that has package slit between delivery and pickup, Lean shipping displays at UI the higher shippingEstimate from the selected SLAs.As an example: there are four products in the cart and three of them has pickup as selectedSla and 4hs of shippingEstimate. The last item will be delivered from store and has 3bd of shippingEstimate. At checkout UI, the shippingEstimate will be:

-pickup package: 3bd
-delivery package: 3bd

The shipping estimate for pickup is 3bd, even though this isn't the right information.


##

## Simulation


1- Create a cart with products from the same seller and distinct delivery channels.
2- Insert the postal code
3- try to select a pickup in point.


##

## Workaround


N/A





