---
title: Orders list
id: tutorials_200
status: DRAFT
createdAt: 2017-04-27T22:13:59.387Z
updatedAt: 2023-03-23T15:40:06.912Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:48.509Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: orders-list
legacySlug: orders-list
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Using the list of orders from the Orders Managment, stores owner can monitor purchases made in their store. The list is available on the first screen of the Orders Managment module.

![todosospedidos.en](//images.ctfassets.net/alneenqid6w5/4ovDqNLqLNMUxrwjgQ8oDx/2557b8aa39c07af3ce23f85508b49de3/todosospedidos.en.png)

The standard view lists all store orders, beginning with the most recent. You can change the order by clicking on the column names, as well as by searching or filtering the orders using specific data, in addition to exporting this data.

- [Searching for orders in OMS.](/en/tutorial/searching-for-orders-in-oms/)
- [Filtering orders on the OMS.](/en/tutorial/filtering-orders-in-oms/)

By clicking on any order, the user is directed to the order details page.

- [Information within the order.](/en/tutorial/information-within-the-order)

Whenever Orders Managment is open and new orders are placed, a notice will be displayed, allowing you to click and update the list of orders.

![novopedido.en](//images.ctfassets.net/alneenqid6w5/7c1NoN8MjO6b9jI6YAUVzM/6b461e799f1dd8f7039bf9a8b1755ae5/novopedido.en.png)

See more details about the columns on the list below:

## Sequence No.

Nothing more than the order number (displayed to the customer), with the suffix and the sequential transaction code (for in-house use).

![nsequencial.en](//images.ctfassets.net/alneenqid6w5/4BOiejle8VtmGM364EiKXl/bb1e5d5d8b1020ce6d89c01262ef644c/nsequencial.en.png)

### Order number

The order number is what the customer receives on the purchase confirmation screen and in the transactional emails. It must be used in communication between the store and the buyer.

This number can have two formats:

- 12 numerical digits.
- Alphanumerical order. By default, the letter “v” (VTEX standard), followed by 6 numerical digits and up to 4 letters (usually consonants derived from the store's name). But the letter can be chosen according to the store's preference. 

Regardless of the format, the numbers follow an ascending order, but the difference between one number and another (increment) is random. This ensures that nobody outside the store can estimate how many orders were closed within a given period.

### Suffix

The suffix always comes after the order number, separated by a hyphen. Its function is to discern when the order has been placed with more than one seller through the same marketplace. This happens when the same order in the marketplace has products from different sellers, so that each seller will receive an order with a different suffix.

e.g.: in the marketplace, order v511223vtx consists of products A, B and C. Each product pertains to a seller. Seller of product A will receive the order number as v511223vtx-01, seller of product B will receive the number v511223vtx-02 and the seller of product C, number v511223vtx-03.

### Sequential code

The sequential code identifies the transaction internally and is used for communication between modules and other resources of the platform.

The store’s first order usually starts with 500001, with random increments, just like the order number. When the order number follows the second default (beginning with “v”), the numerical digits are the same between the fields.

## Date

The date and time when the customer placed the order.

## Customer

Always contains the name and surname of the customer who made the purchase, even where the order has been placed by a business. It also displays a preview of the latest e-mail that passed through the [Conversation Tracker](/en/tutorial/understanding-the-conversation-tracker) of that order.

## Products

Shows how many different products the order contains (without taking into account the quantity of each item purchased). Moving the mouse makes it possible to see which products were purchased.

![oms produtos do pedido](//images.contentful.com/alneenqid6w5/4fTIEf2ywwc2U2IuwSkg8U/82b81b00387db8959cf18ae392e5e1f0/oms-produtos-do-pedido.png)

## Amount

Total amount of the order, taking into account discounts, taxes and shipping.

## Origin

Distinguishes the order into two possible origins:

- **Marketplace**: if the order was placed on your store's site, it will always appear as a marketplace, as this was where the customer actually viewed and purchased the product from.
- **Fulfillment**: means that the product is yours, but that the purchase was made on another site that is displaying and selling your products. 

## Payment

Shows what payment method was used in the purchase.

## Status

Identifies the phase in which the order is to be found.
