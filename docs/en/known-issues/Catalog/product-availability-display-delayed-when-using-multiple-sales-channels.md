---
title: "Product availability display delayed when using multiple sales channels"
id: 7JluVogO4pom0l57UobYIP
status: PUBLISHED
createdAt: 2023-12-07T16:18:59.300Z
updatedAt: 2023-12-07T16:19:00.098Z
publishedAt: 2023-12-07T16:19:00.098Z
firstPublishedAt: 2023-12-07T16:19:00.098Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-availability-display-delayed-when-using-multiple-sales-channels
locale: en
kiStatus: Backlog
internalReference: 949411
---

## Summary


The display, for legacy portal stores, of products in PLPs is based on the store's sales channel and its basic availability data.

If a product has stock, price and its basic data to be properly sold in a store + it belongs to a said sales channel, this product is and should be listed in the store.

However, when this said product has the option "show if unavailable" tag set a false, it should be removed from the store pages when it can't be sold.

This process mostly happens efficiently, but in cases where said product is not available for a given sales channel but is for others, it can still be shown in the unintended channels.


**Example**:

1 -  Product 1 is available in the sales channels 1, 2 and 3.

2 - It went out of stock in sales channel 2. It's supposed to not be shown in it anylonger.

3 - Since it is still available in the channels 1 and 3, it might get "stuck" and still show for an extended time in the channel 2, despite its unavailability.

*this issue only occurs when a product with the said flag = false and it goes from available to unavailable in a single sales channel whilst it is still showing on the others. Such inconsistency does not happen the other way around (going from unavailable to available).



##

## Simulation


For a store with multiple sales channels and that uses different domains for each, get a product that is available in both and showing under a specific search result.

This test product must have the "show even if unavailable" option set as false in it.

Then, set it to out of stock in one of the sales channels.

It will still be shown, even after a long time, in both domains search result, despite the unavailability in one of the channels.


##

## Workaround


**Option A**) Perform an indexer deletion and a reindex database if your store has under 10000 products and has several items under this scenario.

**Option B**) For a small set of products, remove its availability from the store altogether (make it unavailable in all sales channels) and then immediately revert these changes.





