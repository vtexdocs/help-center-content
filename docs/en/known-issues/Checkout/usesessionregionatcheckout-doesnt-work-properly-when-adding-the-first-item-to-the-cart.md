---
title: "UseSessionRegionAtCheckout doesn't work properly when adding the first item to the cart"
id: 2NzgWTbaHF47f5dl49A2D5
status: PUBLISHED
createdAt: 2023-10-24T22:51:27.435Z
updatedAt: 2023-10-26T10:55:29.843Z
publishedAt: 2023-10-26T10:55:29.843Z
firstPublishedAt: 2023-10-24T22:51:28.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: usesessionregionatcheckout-doesnt-work-properly-when-adding-the-first-item-to-the-cart
locale: en
kiStatus: Backlog
internalReference: 925049
---

## Summary


If an account has the toggle 'UseSessionRegionAtCheckout' configured, when adding an item and the orderForm has no 'shippingData', the seller is not set, showing different prices and availability.


##

## Simulation



- The account must be using UseSessionRegionAtCheckout;
- Set a regionId in the session;
- Add an item to the cart; it may show different prices and availability.


##

## Workaround


Refresh the orderForm (API Get current or create a new cart) using the parameter `?refreshOutdatedData=true`.




