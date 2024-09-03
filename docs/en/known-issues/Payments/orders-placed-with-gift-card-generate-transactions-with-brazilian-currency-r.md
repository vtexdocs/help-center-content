---
title: 'Orders placed with Gift Card generate Transactions with Brazilian currency (R$)'
id: 6KbJ0z705zqqSfL9PiuLHj
status: PUBLISHED
createdAt: 2024-08-19T15:44:05.465Z
updatedAt: 2024-08-19T15:44:06.236Z
publishedAt: 2024-08-19T15:44:06.236Z
firstPublishedAt: 2024-08-19T15:44:06.236Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: orders-placed-with-gift-card-generate-transactions-with-brazilian-currency-r
locale: en
kiStatus: Backlog
internalReference: 1083379
---

## Summary


Gift Card payments are not created with a `currencyCode`, as consequence the transactions will be created with the default R$ (Brazilian Real), this doesn't happen when another payment method is present (e.g. Gift Card + Credit Card).


##

## Simulation


Place an order using Gift Card only, the transaction will be in R$ but the order is created correctly with local currency. The issue is only visual, no operational impact.


##

## Workaround


NA




