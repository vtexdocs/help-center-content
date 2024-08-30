---
title: "Quantity Selector won't let me change the value by typing"
id: 4whARKlTiLQhTluJrIRfO5
status: PUBLISHED
createdAt: 2024-06-28T15:01:34.187Z
updatedAt: 2024-07-05T16:17:08.672Z
publishedAt: 2024-07-05T16:17:08.672Z
firstPublishedAt: 2024-06-28T15:01:35.225Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: quantity-selector-wont-let-me-change-the-value-by-typing
locale: en
kiStatus: Fixed
internalReference: 1057544
---

## Summary


The quantity selector component on Faststore is presenting a bug. If the minimum value of a product is 10 and I want to type 15, the selector won't let me delete the 0 because it will let us with 1, and it would be a lower value than the minimum quantity. If I want to type 15 I need to type 150 and then I can delete the 0.


##

## Simulation


You can test it on our default store on our documentation page:
https://developers.vtex.com/docs/guides/faststore/molecules-quantity-selector
https://starter.vtex.app/handmade-plastic-chips-9009169/p

In this case, the minimum value is 1 and the maximum value is 10.
Try typing 2 by deleting the 1 value, it won't let you because once you delete the 1, the value will be lesser than the minimum value.


##

## Workaround


N/A





