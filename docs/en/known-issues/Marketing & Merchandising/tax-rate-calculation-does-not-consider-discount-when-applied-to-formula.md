---
title: "Tax rate calculation does not consider discount when applied to formula"
id: 58sEdphNQ4c4QEY8ewqYOq
status: PUBLISHED
createdAt: 2017-08-01T17:33:07.889Z
updatedAt: 2022-12-22T20:43:05.452Z
publishedAt: 2022-12-22T20:43:05.452Z
firstPublishedAt: 2017-08-15T18:56:51.500Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: tax-rate-calculation-does-not-consider-discount-when-applied-to-formula
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Pricing is not considering a promotion with discount when we create a tax rate using the formula which sees the total Value of the order.

AN example of how this looks like:
Tax rate configured as ((total + shipping) * 0.1)

|||
|-|-|
|Subtotal|100,00|
|Discount|10,00|
|Shipping|20,00|
|__Tax__|__12,00__|
|Total|122,00|

An example of how it's supposed to look like:
Tax rate configured as ((total + shipping) * 0.1)

|||
|-|-|
|Subtotal|100,00|
|Discount|10,00|
|Shipping|20,00|
|__Tax__|__11,00__|
|Total|121,00|

The example showing how it should look like shows that the Tax rate formula calculated the total value by taking into account the $10 discount.

## Simulation

Create any promotion and a tax rate following the formula ((total + shipping) * 0.1).
Simulate a product in the cart with this promotion and tax rate.
The value of the tax will be calculated based on the total value, without taking the discount into account.

## Workaround

There is no workaround.

