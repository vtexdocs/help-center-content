---
title: 'Benefits.items array inside of ProductContextProvider shuffle items when the promotion is a Buy Together type'
id: 1VeBqJAKwpVR5YHqtEJ7Xz
status: PUBLISHED
createdAt: 2023-10-05T19:57:59.828Z
updatedAt: 2023-10-05T19:58:00.724Z
publishedAt: 2023-10-05T19:58:00.724Z
firstPublishedAt: 2023-10-05T19:58:00.724Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: benefitsitems-array-inside-of-productcontextprovider-shuffle-items-when-the-promotion-is-a-buy-together-type
locale: en
kiStatus: Backlog
internalReference: 915213
---

## Summary


When looking at the benefits array inside of the ProductContextProvider on the PDP of a product we can see that not all the products are returned and the ones returned are shuffled. Both lists of products within the promotion are together on the same array. It only happens when the promotion is a Buy Together type.


##

## Simulation


Go to the PDP of a product that has a Buy Together promotion
Try to look at the benefits array inside the ProductContextProvider
Not all the products will be returned on the items array, and there will be no differentiation between the lists of products within the promotion


##

## Workaround


N/A





