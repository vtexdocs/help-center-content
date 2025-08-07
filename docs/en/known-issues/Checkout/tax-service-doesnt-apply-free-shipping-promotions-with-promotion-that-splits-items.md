---
title: "Tax Service doesn't apply free shipping promotions with promotion that splits items"
id: 5w7mcNyJhTA77sRULPgrTx
status: PUBLISHED
createdAt: 2024-03-06T20:07:56.556Z
updatedAt: 2024-03-06T20:07:57.240Z
publishedAt: 2024-03-06T20:07:57.240Z
firstPublishedAt: 2024-03-06T20:07:57.240Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-apply-free-shipping-promotions-with-promotion-that-splits-items
locale: en
kiStatus: Backlog
internalReference: 995527
---

## Summary


When using the tax service, if there is a promotion that splits items, for example, a More for Less promotion and a free shipping promotion, the free shipping is not applied correctly for all items in the tax service request, causing a wrong calculation and avoiding the order being created with the message "The requested order could not be created. Please try again."


##

## Simulation



- Configure Tax Service;
- Create a More for Less promotion;
- Create a free shipping promotion;
- Assemble a cart and try to place the order.


##

## Workaround


N/A




