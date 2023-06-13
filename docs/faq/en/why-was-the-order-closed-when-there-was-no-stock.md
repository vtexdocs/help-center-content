---
title: Why was the order closed by the marketplace when there was no stock?
id: frequentlyAskedQuestions_710
status: DRAFT
createdAt: 2017-04-27T22:28:42.230Z
updatedAt: 2021-06-28T20:41:42.563Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:34.065Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-was-the-order-closed-when-there-was-no-stock
legacySlug: why-was-the-order-closed-when-there-was-no-stock
---

The Integrations module informs the status of the orders closed per marketplace. Sometimes, an order wasn’t integrated because it is out of stock. A message like the one below is displayed:

__There is no SLA available for one or more items in the order. Possible causes: Lack of stock. Product (s) is not in collection. Inactive product (s). Delivery code is not met.__

The purpose of this article is to explain the reason why this scenario arises. There are two possibilities:

## Shallow stock

Shallow stock means that the quantity of items available is less than the number of channels in which they can be sold. In other words, when the quantity of items is small and the sales channels compete for them. This usually happens when there is only one item in stock, but in cases of promotions, for example, it may happen with more than one item.

That is, the scenario arises when more than one channel (store and marketplace, for example) sell the same SKU item in a short time frame.

Example:

1. The marketplace queries the stock on VTEX and it is positive: __1 unit__.
2. In the meantime, the main store closes a purchase with this same item.
3. The marketplace concludes the purchase process and tries to integrate the order.
4. At this moment, the item was sold at step 2, so the order cannot be integrated without the action on Integrations.

## Stock query interruption

This happens when a shipping query, whether to the value or the stock, experiences an interruption. In other words, when the query to the VTEX inventory cannot be concluded by the marketplace. This usually occurs when the marketplace makes an “http” query, but with no reply within the expected time frame, thereby assuming its own value for the stock.

## How to solve it

In both cases the order may be integrated by [reprocessing it on the Integrations](/en/tutorial/checking-integrations-in-bridge).
