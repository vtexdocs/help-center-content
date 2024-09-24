---
title: 'Prices from specific price tables are not considered when sorting or filtering products'
id: 5P7TkO8THxwNBJXgwnaqxe
status: PUBLISHED
createdAt: 2024-08-22T19:26:24.575Z
updatedAt: 2024-08-22T19:28:25.505Z
publishedAt: 2024-08-22T19:28:25.505Z
firstPublishedAt: 2024-08-22T19:28:25.505Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: prices-from-specific-price-tables-are-not-considered-when-sorting-or-filtering-products
locale: en
kiStatus: Backlog
internalReference: 1085895
---

## Summary


Prices tables are not part of the product indexing flow and are not available to the search service at the index level. It creates the limitation that the search can not sort and filter products based on the price tables. Products are sorted exclusively by the price of the trade policy.



##

## Simulation


Considering:

- product A, trade policy as $10, price table as $7
- product B, trade policy as $9, price table as $8

In a navigation with a price table, sorting by price (ascending) will present the products sorted as B, then A according to the price from trade policy instead of A, then B according to the price from the price table.


##

## Workaround


N/A





