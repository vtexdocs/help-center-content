---
title: '[Facebook] Today Facebook looks at sellingPrice and listPrice to update the price in the Facebook catalog'
id: 4CDh12JM3y9AqBnuGDHgnT
status: PUBLISHED
createdAt: 2024-04-03T12:41:15.144Z
updatedAt: 2024-04-03T12:41:16.005Z
publishedAt: 2024-04-03T12:41:16.005Z
firstPublishedAt: 2024-04-03T12:41:16.005Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: facebook-today-facebook-looks-at-sellingprice-and-listprice-to-update-the-price-in-the-facebook-catalog
locale: en
kiStatus: Backlog
internalReference: 924411
---

## Summary


Today Facebook looks at sellingPrice and listPrice to update the price in the Facebook catalog.


##

## Simulation


Seller is using unitMultiplier = 0.5

Checkout makes the following calculation when the item has a multiplier unit, so sellingPrice = price * unitMultiplier = 3999 * 0.5 = 1999.5. Checkout rounding will ignore the decimal and consider 1999

What is the problem with this calculation?
When the seller uses 0.5, for example, on Facebook we are updating it as the settlement price on Facebook.
2. When the seller uses a multiplier greater than 1.39, it falls within the promotional price even though it is higher than the listPrice



##

## Workaround


seller use unitMultiplier = 10000





