---
title: "Some Payment Methods are not displayed at 'Buy Together' promotions on the New UI"
id: MDXIGrCng2fJOUibsc2RK
status: PUBLISHED
createdAt: 2024-09-03T01:49:54.371Z
updatedAt: 2024-09-03T16:20:34.234Z
publishedAt: 2024-09-03T16:20:34.234Z
firstPublishedAt: 2024-09-03T01:49:55.512Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: some-payment-methods-are-not-displayed-at-buy-together-promotions-on-the-new-ui
locale: en
kiStatus: Backlog
internalReference: 1091169
---

## Summary


There is an issue where certain payment methods are not displayed correctly when configuring "Buy Together" promotions on the new UI. Specifically, payment methods that have special conditions set by Sales Channel are not being supported. The legacy UI does not have this problem.


##

## Simulation


To reproduce this behavior:

1. Navigate to the VTEX Admin panel and ensure you are using the new UI for promotion management.
2. Go to the "Buy Together" promotion configuration.
3. Attempt to add a payment method with special conditions set by Sales Channel.
4. Observe that the payment method does not appear in the available list for the promotion.


##

## Workaround


N/A





