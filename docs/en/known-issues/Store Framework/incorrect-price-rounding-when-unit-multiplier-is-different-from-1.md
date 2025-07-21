---
title: "Incorrect price rounding when unit multiplier is different from 1"
id: 1L5RNoTBkoJxq2c22KDTRU
status: PUBLISHED
createdAt: 2022-03-21T17:43:03.979Z
updatedAt: 2022-11-25T22:14:03.772Z
publishedAt: 2022-11-25T22:14:03.772Z
firstPublishedAt: 2022-03-21T17:43:04.349Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: incorrect-price-rounding-when-unit-multiplier-is-different-from-1
locale: en
kiStatus: Backlog
internalReference: 426275
---

## Summary


The price shown by the vtex.product-price block diverges due to unit multiplication roundings.

In the example below, the product's price is $47.50 and its unit multiplier is 0.25.

So, for one unit (0.25), the individual price is 47.50*0.25 = 11.875.

However, when a checkout simulation is performed for this product, the sellingPrice returned is rounded to only 2 decimals: 1187.

This rounded price is being used to calculate the component's sellingPrice, which is the price of an entire unit, not considering the multiplier. Since it's rounded before the calculation, the final sellingPrice is incorrect.
In this case, 11.87*4 = 47.48.

A side effect caused by this issue is that the sellingPrice is considered different than the product's listPrice, and then the listPrice is displayed as well.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Store%20Framework/incorrect-price-rounding-when-unit-multiplier-is-different-from-1_1.png)

This behavior only occurs in search context, but not in the PDP. In this case, the sellingPrice is correct.



## Simulation


In a search context, load a product that has unit multiplier different than 1 and which unitMultiplier*price results in a number with more than 2 decimals.



## Workaround


It is possible to develop a custom component to bypass this problem.

Also, there is a less viable possibility that is to only register price values that when multiplied by the unitMultiplier won't result in 3+ decimals fractions.

