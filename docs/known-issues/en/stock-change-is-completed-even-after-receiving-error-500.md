---
title: 'Stock change is completed even after receiving error 500'
id: 3dlP8iOBiL2tfPRvjm2kUZ
status: PUBLISHED
createdAt: 2022-06-20T12:40:08.834Z
updatedAt: 2022-11-25T21:59:29.796Z
publishedAt: 2022-11-25T21:59:29.796Z
firstPublishedAt: 2022-06-20T12:40:09.126Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: stock-change-is-completed-even-after-receiving-error-500
locale: en
kiStatus: Backlog
internalReference: 388176
---

## Summary


Client is trying to update the sku quantity in the inventory and the request received error 500. Despite the error, the quantity in stock is changed.



## Simulation


It was not possible to reproduce the error.

But in the response we see the error 500, and the inventory we see the same value before update.




## Workaround


There is no workaround. But is important to check this updated occurred.

