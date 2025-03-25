---
title: "ListPrice shown in a cart doesn't consider if the regular price is being modified by a unitMultiplier"
id: 13cdmEllp9RB30DSJ9Ttka
status: PUBLISHED
createdAt: 2022-05-13T16:53:11.761Z
updatedAt: 2022-11-25T21:51:31.513Z
publishedAt: 2022-11-25T21:51:31.513Z
firstPublishedAt: 2022-05-13T16:53:12.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: listprice-shown-in-a-cart-doesnt-consider-if-the-regular-price-is-being-modified-by-a-unitmultiplier
locale: en
kiStatus: Backlog
internalReference: 578649
---

## Summary


The ListPrice from a cart interacts with the exhibited price to show an old versus the current price, in a matter to highlight discounts.

The exhibited price is the SellingPrice, which in addition to promotions, is also automatically modified by a "unit multiplier" if it exists. Like a grocery item, sold in packages of 0.3kg (being the unitMultiplier), where the regular price (eg: $4) is always related to each kg. For this example, the SellingPrice will be "originalPrice*unitMultiplier", totalizing $1.2.

The ListPrice is automatically shown when it's different from (and greater than) the exhibited price. Considering the modified SellingPrice by an UnitMultiplier, the frontend will be showing ListPrice=$4.00 and Price=$1.20, but without being a real discount (but already including one if it exists).



## Simulation


Creating a cart with items that match the previous example is enough to recreate the scenario.



## Workaround


We recommend hiding the ListPrice on the frontend for items that have a UnitMultiplier.

