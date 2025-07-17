---
title: "Items in benefits not generated in promotions with collections associated"
id: 9HrnxMcq7VWFQOPhg9ywd
status: PUBLISHED
createdAt: 2024-02-21T15:09:01.111Z
updatedAt: 2024-02-21T15:09:01.913Z
publishedAt: 2024-02-21T15:09:01.913Z
firstPublishedAt: 2024-02-21T15:09:01.913Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: items-in-benefits-not-generated-in-promotions-with-collections-associated
locale: en
kiStatus: Backlog
internalReference: 985850
---

## Summary



When having a promotion with products/skus associated through a collection, the productContext isn't prepared to create the items array inside benefits associated with the products of the collection


##

## Simulation




- Create a promotion
- Associate the products for this promotion through a collection
- Open one of the products that should have a promotion
- Open your browser's console
- Check on your React Dev Tools extension for productContextProvider
- Open benefits.items, it will be empty or with the sku with the same id of the collection


##

## Workaround



The only possible way to have benefits.items filled is filling all skus associated with the promotion instead of a cluster/collection





