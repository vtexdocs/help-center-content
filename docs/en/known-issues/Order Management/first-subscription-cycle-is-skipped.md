---
title: 'First subscription cycle is skipped'
id: 2VX6uoop56wK6jecAly40G
status: PUBLISHED
createdAt: 2024-02-05T14:10:40.701Z
updatedAt: 2024-02-05T14:10:41.599Z
publishedAt: 2024-02-05T14:10:41.599Z
firstPublishedAt: 2024-02-05T14:10:41.599Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: en
kiStatus: Backlog
internalReference: 528556
---

## Summary


The subscription system uses information such as the purchase frequency and the subscription cycle date to generate a subscription order. However, depending on the consumer's time zone and the time the order is placed, the first cycle is skipped, and only generated in the second month.
Suppose that on May 9, 11 p.m., a customer created a monthly subscription and set the subscription cycle date for the 9th day of each month, expecting that the first order would be placed on June 9.
The orders management system operates in the time zone previously set in the store. In this case, we will consider GMT-5, Chicago time. However, the subscription system operates in the GMT 0 time zone. This means that although the subscription was created at 11 p.m., the subscription system considers that it was created 5 hours later, therefore on May 10.
In this case, the system takes into consideration the subscription creation date, May 10, to calculate the next subscription cycle. As the subscription cycle date on June 9 would not meet the 30-day period condition, totaling 29 days, the system sets the next purchase date for July. Therefore, the customer ends up receiving the product after the expected date.


##

## Simulation


Have a SKU set up for subscription, with monthly frequency and purchase day;
Place an order after 11 p.m., for example
Check that the first cycle, which should be generated in the following month, will be skipped, being generated only in the second month.



##

## Workaround


n/a





