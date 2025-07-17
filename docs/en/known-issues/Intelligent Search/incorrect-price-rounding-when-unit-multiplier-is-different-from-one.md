---
title: "Incorrect price rounding when unit multiplier is different from one"
id: 7EhT7xXL5TJpQrfoXs3kn7
status: PUBLISHED
createdAt: 2025-07-14T12:56:21.332Z
updatedAt: 2025-07-16T14:55:05.155Z
publishedAt: 2025-07-16T14:55:05.155Z
firstPublishedAt: 2025-07-14T14:50:39.819Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: incorrect-price-rounding-when-unit-multiplier-is-different-from-one
locale: en
kiStatus: Backlog
internalReference: 1258875
---

## Summary


Intelligent Search may retrieve a product's price with more than 2 decimal places when the unit multiplier is different than 1.

For example, a unit of a product is $69,26, where the unit multiplier is 85.

So, the calculation that Intelligent Search does, when the unit multiplier is different from 1, results in a price of $0,815.

As the price resulted in a price with three decimal places, when rounded by the `vtex.format-currency`, the price rounding diverges, resulting in $0,82 instead of $0,81, which is the price shown in the checkout simulation.

This rounded price is being used to calculate the component's price. Since it's rounded before the calculation, the final price is incorrect.


##

## Simulation


In a search context, load a product that has a unit multiplier different than 1 and whose unitMultiplier*price results in a number with more than 2 decimals.


##

## Workaround


N/A




