---
title: "Coupon usage not restored for incomplete orders"
id: 1iJr9GTJ8gG852YDVWTttl
status: PUBLISHED
createdAt: 2022-08-16T20:44:43.329Z
updatedAt: 2022-11-25T22:12:03.121Z
publishedAt: 2022-11-25T22:12:03.121Z
firstPublishedAt: 2022-08-16T20:44:43.833Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: coupon-usage-not-restored-for-incomplete-orders
locale: en
kiStatus: Backlog
internalReference: 639418
---

## Summary



Currently, at VTEX we have what is known as an Incomplete Order, for reference try https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294 and https://support.vtex.com/hc/en-us/articles/360060106912-How-to-investigate-incomplete-orders>

If a coupon has been used and the order has received the incomplete status, the coupon usage is counted, even though the order won't proceed.
This behavior is evidenced in cases of orders that were placed using a single-use coupon, when the single-use coupon usage is counted on an incomplete order, the shopper is unable to place a new order with the same coupon code because a usage was recorded on it.



## Simulation


Not applicable for this KI.



## Workaround



For single-use coupons, the workaround we suggest is to recreate the coupon for the affected users.

