---
title: 'productClick event considers the incorrect SKU Id'
id: 1tgrIgo8xGzDW9wJOnjU9E
status: PUBLISHED
createdAt: 2023-04-11T17:38:17.545Z
updatedAt: 2023-04-11T17:38:19.118Z
publishedAt: 2023-04-11T17:38:19.118Z
firstPublishedAt: 2023-04-11T17:38:19.118Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: productclick-event-considers-the-incorrect-sku-id
kiStatus: Backlog
internalReference: 788145
---

## Summary


productClick event considers the incorrect SKU Id when using the Product Summary SKU Selector block. It will always use the first SKU from the product list.


##

## Simulation



- Configure the Product Summary SKU Selector block;
- Select an SKU specification and access the PDP;
- In the console, type "dataLayer";
- The "variant" value in the productClick event will differ from the previously selected.


##

## Workaround


N/A




