---
title: Campaign Audience doesn't save coupon information
id: 2UVQQVLSb0UjDmyWQ5xqEX
status: PUBLISHED
createdAt: 2022-10-13T18:18:40.484Z
updatedAt: 2022-11-25T22:11:35.532Z
publishedAt: 2022-11-25T22:11:35.532Z
firstPublishedAt: 2022-10-13T18:18:41.270Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: campaign-audience-doesnt-save-coupon-information
kiStatus: Backlog
internalReference: 521601
---

## Summary


Campaign Audience doesn't save coupon information



## Simulation



1. Create a Campaign Audience and use a coupon condition;
2. Create a Campaign Promotion associated to this Campaign Audience;
3. Buy a product that has this promotion applied;
4. Check on the OMS this order;
5. Review the OrderForm from the order, the coupon is not saved in the `marketingData` Field



## Workaround


There is no workaround. If possible, the customer can use the coupon condition on the Promotion if it is an option.

