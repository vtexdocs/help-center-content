---
title: 'MELI incorrect value when client has Coupon on MELI'
id: 3PvNKqG2BMZDBLLVuriIHy
status: PUBLISHED
createdAt: 2024-01-22T11:58:00.747Z
updatedAt: 2024-10-01T12:14:48.088Z
publishedAt: 2024-10-01T12:14:48.088Z
firstPublishedAt: 2024-01-22T11:58:01.431Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-incorrect-value-when-client-has-coupon-on-meli
locale: en
kiStatus: Fixed
internalReference: 969297
---

## Summary



Currently the client used a coupon in MELI, there is a variety of coupon types in MELI. And some of them are not included in VTEX OMS calculations.


##

## Simulation



In VTEX OMS, the value of the order can be different from what MELI sold to the client, due to some coupon type are not being considering while creating the order in VTEX.


##

## Workaround



For ME1 orders, if the seller needs to have the correct value of the order, in order to send the invoice value to MELI, they can use the field in VTEX OMS called "total_paid_amount", this field is currently considering all coupon values.





