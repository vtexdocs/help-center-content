---
title: "Subscriptions: conflict between the subscription billing frequency and cycle date"
id: 4k32lnRONWU3YzXyvXJItO
status: PUBLISHED
createdAt: 2021-06-14T20:32:51.367Z
updatedAt: 2022-12-22T14:54:57.938Z
publishedAt: 2022-12-22T14:54:57.938Z
firstPublishedAt: 2021-06-14T20:40:45.787Z
contentType: knownIssue
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
tag: Order Management
slugEN: subscriptions-conflict-between-the-subscription-billing-frequency-and-cycle
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The subscription system uses information such as the purchase frequency and the subscription cycle date to generate a subscription order. However, there are two scenarios in which these two criteria conflict with each other, causing a delay in placing the subscription order.

## Simulation

#### Scenario 1

Let's assume that a customer created a monthly subscription on January 20. Therefore, they will receive a specific product every 30 days. At the same time, the customer set the subscription cycle date for the 5th day of every month.

Due to the subscription's recurring nature, the system understands that the next order must be placed 30 days after the purchase date, therefore, on February 20.

At this point, the system has to deal with conflicting information: it cannot place the order before the 30-day period due to the monthly subscription, nor can it proceed to do the billing on February 20, since the selected billing date is the 5th.

As a result, the system places the subscription order on the next 5th after the 30-day period — in this case, March 5. Due to this conflict, the customer ends up receiving their order late.

#### Scenario 2

Suppose that on May 9, 11 p.m., a customer created a monthly subscription and set the subscription cycle date for the 9th day of each month, expecting that the first order would be placed on June 9.

The orders management system operates in the time zone previously set in the store. In this case, we will consider GMT-5, Chicago time. However, the subscription system operates in the GMT 0 time zone. This means that although the subscription was created at 11 p.m., the subscription system considers that it was created 5 hours later, therefore on May 10.

In this case, the system takes into consideration the subscription creation date, May 10, to calculate the next subscription cycle. As the subscription cycle date on June 9 would not meet the 30-day period condition, totaling 29 days, the system sets the next purchase date for July. Therefore, the customer ends up receiving the product after the expected date.

## Workaround

Currently, there is no solution to this problem. If your customer is facing this situation, please contact VTEX support.

To prevent this from happening, when creating the subscription, the customer must select a billing date that is the same as the date on which the order is being placed (considering the time difference in relation to GMT time zone 0), or a later date in the same month.

For stores using the V3 Subscriptions module, customers can [create the subscription without placing the order at the same time](https://help.vtex.com/en/announcements/novo-modulo-assinaturas--6PfEmqovkZF97AZUp1owdf#new-features-for-your-customer), which gives them more freedom to choose the date of the first purchase.

