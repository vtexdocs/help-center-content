---
title: "GET Coupon Usage API doesn't list multiple orders for the same coupon"
id: 7B9Qlcx2XMGxWj9OB5Xl8n
status: PUBLISHED
createdAt: 2023-09-08T17:54:13.642Z
updatedAt: 2023-09-08T17:54:14.220Z
publishedAt: 2023-09-08T17:54:14.220Z
firstPublishedAt: 2023-09-08T17:54:14.220Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: get-coupon-usage-api-doesnt-list-multiple-orders-for-the-same-coupon
locale: en
kiStatus: Backlog
internalReference: 326662
---

## Summary



The GET Coupon Usage API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview is currently not listing all the order closed in which this coupon was used on, is listing total-1



##

## Simulation


1) Close two distinct orders with the same coupon.

2) GET the data from this coupon's usage https://developers.vtex.com/vtex-rest-api/reference/coupons#getusage

3) It will be listed the total minus one order.



##

## Workaround


n/a

