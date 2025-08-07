---
title: "item_name of purchase event is different from item_name of add to cart event in Google Analytics"
id: 3FV2cJIV7uOIoH0lpl0iMP
status: PUBLISHED
createdAt: 2023-08-10T12:59:26.495Z
updatedAt: 2023-08-10T12:59:27.432Z
publishedAt: 2023-08-10T12:59:27.432Z
firstPublishedAt: 2023-08-10T12:59:27.432Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: itemname-of-purchase-event-is-different-from-itemname-of-add-to-cart-event-in-google-analytics
locale: en
kiStatus: Backlog
internalReference: 878629
---

## Summary


When the SKU has the same name as the product the item_name from the purchase ever is different from the item_name of the add-to-cart event.


##

## Simulation



- Add a product to the cart which its name is similar to its SKU name. For example, "Socks" is the product name and the SKU name is "Socks - G"
- Look for its item_name on the add-to-cart event
- Finish the purchase and look for the item_name on the purchase event


##

## Workaround


N/A





