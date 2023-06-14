---
title: 'SKU available in stock but unavailable for sale'
id: 6HIEgJSYM8S05IyWHnIcOn
status: CHANGED
createdAt: 2022-02-15T15:41:43.419Z
updatedAt: 2022-02-15T15:50:50.574Z
publishedAt: 2022-02-15T15:49:48.146Z
firstPublishedAt: 2022-02-15T15:49:19.393Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: sku-available-in-stock-but-unavailable-for-sale
legacySlug: sku-available-in-stock-but-unavailable-for-sale
---

<!-- Yay, no errors, warnings, or alerts! -->

When two or more warehouses use the same [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV), and there is a negative number of items in stock for a given SKU in one of these warehouses, the SKU becomes unavailable for sale, even though the [inventory](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139) quantity is positive in another warehouse.

This occurs because the VTEX platform sums the negative number of items for that SKU in a warehouse to the positive number of items in other warehouses. If the result of the sum equals zero, the SKU will be unavailable for sale.

Learn more about negative inventory in the article [Inventory management](https://help.vtex.com/en/tutorial/managing-stock-items--tutorials_139#updating-inventory).

