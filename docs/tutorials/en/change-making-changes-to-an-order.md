---
title: 'Change completed orders'
id: 3d1XLIgPQcwaKGyMiWaYog
status: DRAFT
createdAt: 2017-11-08T14:04:58.922Z
updatedAt: 2021-05-11T21:20:45.295Z
publishedAt: 
firstPublishedAt: 2017-11-08T14:08:29.393Z
contentType: tutorial
productTeam: Post-purchase
author: authors_35
slug: change-making-changes-to-an-order
legacySlug: change-making-changes-to-an-order
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Dealing with any changes in purchases after an order has been finalized by the customer is a recurrent problem in the online market, particularly in the grocery area. Such changes can be due to various reasons, such as a particular item being out of stock, changes in the original measurements, replacement of an item by a similar one, discounts for inconvenience, etc.

To deal with this type of demand, VTEX provides the store owner with the function __Change__, which allows you to create a discount, change an item or increase the price.

Change is allowed in Handling, Waiting for fulfillment or Ready for Invoicing status and can be divided into three parts:

1. Change of an item: permits an SKU to be removed or added. However, the store owner will then have to update the stock and the reserve.
2. Creation of a discount: allows a specific amount to be deducted from the transactions contained in an order.
3. Price addition: creates a new transaction with an additional value, without payment in installments. This function is only available for credit card purchases. The connector must also be able to handle purchases without the CVV being given, as well as duplicated sequences.

This function is 100% available via [API](https://developers.vtex.com/reference/orders#registerchange). Via interface the Orders management module does not currently permit the price to be increased.

