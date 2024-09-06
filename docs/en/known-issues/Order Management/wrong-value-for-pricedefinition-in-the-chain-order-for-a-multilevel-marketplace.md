---
title: 'Wrong value for priceDefinition in the chain order for a multilevel marketplace'
id: 75qEjhgv1tTQNho0MArnJo
status: PUBLISHED
createdAt: 2023-11-27T13:50:18.505Z
updatedAt: 2023-11-27T13:51:42.434Z
publishedAt: 2023-11-27T13:51:42.434Z
firstPublishedAt: 2023-11-27T13:51:42.434Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: wrong-value-for-pricedefinition-in-the-chain-order-for-a-multilevel-marketplace
locale: en
kiStatus: Backlog
internalReference: 663203
---

## Summary


The "priceDefinition" property for orders in the "chain" level in a multilevel marketplace isn't following the "sellingPrice" as expected. Instead, it's following the "price" property.


##

## Simulation


Create an order with a discount applied since the marketplace layer (level 1), in relation to the seller layer (chain, level 2), in a multilevel relationship. The fulfillment layer (level 3) will present the values correctly, but the "chain" won't.


##

## Workaround


Avoid using the "priceDefinition" property in these type of orders and do the maths using the price, quantity, unitMultiplier, and priceTag properties – to avoid issues with the "sellingPrice", which isn't a precise value.





