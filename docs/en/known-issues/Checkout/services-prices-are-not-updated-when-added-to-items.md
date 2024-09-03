---
title: 'Services prices are not updated when added to items'
id: 5hJ7TbHzX4zFbdNWqPnMRQ
status: PUBLISHED
createdAt: 2023-05-09T14:27:37.283Z
updatedAt: 2023-06-23T18:37:32.624Z
publishedAt: 2023-06-23T18:37:32.624Z
firstPublishedAt: 2023-05-09T14:27:37.766Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: services-prices-are-not-updated-when-added-to-items
locale: en
kiStatus: Backlog
internalReference: 822107
---

## Summary


Services prices are not updated if it was added to an item before changing their service price in the admin. This will cause the order to be created with an outdated price.


##

## Simulation



- Create a service;
- Add an item with service to the cart;
- Change the service price;
- Check the cart previously assembled; the service is not updated.


##

## Workaround


Remove and add the service again.




