---
title: 'Problems with "price from" in the "ButtonBuyModal" control'
id: 2DdTK2AQNysEqM8AyMwSMQ
status: PUBLISHED
createdAt: 2018-10-05T17:06:27.321Z
updatedAt: 2022-12-22T20:48:37.370Z
publishedAt: 2022-12-22T20:48:37.370Z
firstPublishedAt: 2018-10-05T17:21:10.821Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: problems-with-price-from-in-the-buttonbuymodal-control
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The `$product.ButtonBuyModal(true,true)` control is used on shelves to add the product to the cart. If there is more than one possible SKU, a modal is displayed for the user to choose the desired variation.

In cases where the product only has "price for" (`bestPrice`), the "price from" (`listPrice`) is always `$0,00`, but that in turn should not be displayed in the layout.

## Simulation

To simulate this scenario you should implement this viewpart in the shelf and follow its behavior with products that have multiple SKUs.

## Workaround

You can work around this behavior by hiding the "price from" element using Javascript whenever its content is "0.00", or rebuild this feature (which is limited to the store frontend) based on VTEX APIs (such as "[vtexjs.catalog](https://github.com/vtex/vtex.js/tree/master/docs/catalog)").

