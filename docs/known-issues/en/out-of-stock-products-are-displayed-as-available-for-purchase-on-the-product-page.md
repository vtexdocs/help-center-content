---
title: Out of stock products are displayed as available for purchase on the product page
id: 5yLgUHlBraGeUYAUK4w288
status: PUBLISHED
createdAt: 2018-02-08T18:17:40.064Z
updatedAt: 2022-12-22T20:45:11.644Z
publishedAt: 2022-12-22T20:45:11.644Z
firstPublishedAt: 2018-02-08T18:52:42.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: out-of-stock-products-are-displayed-as-available-for-purchase-on-the-product-page
kiStatus: Backlog
internalReference: 
---

## Summary

Products that are out of stock are available for purchase on the product page (the buy button appears). However, by clicking the button and going to the cart, Checkout queries the system and prevents the product from being actually purchased.

The cause of this is a field called `stockBalance`, which is one of the fields used by the Catalog to display (or not) the buy button on the product page. This field displays the total units in stock for an SKU. However, when a product is associated with a gift, `stockBalance` is returning the gift's stock instead of the SKU's stock. And that's exactly where the problem lies. The scenario will happen when a product has no stock but the gift associated with it does.

## Simulation

- Add a gift to a product that is currently out of stock.
- Access its product page.

## Workaround

For now, the solution is to disassociate the gift from the product with no stock. This will render the product unavailable again.

