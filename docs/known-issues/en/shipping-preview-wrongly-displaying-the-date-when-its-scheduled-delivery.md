---
title: "Shipping Preview wrongly displaying the date when it's scheduled delivery"
id: 6pbufuWTFkL4NK3xLIxj1z
status: PUBLISHED
createdAt: 2023-01-31T19:36:58.137Z
updatedAt: 2023-01-31T19:36:58.933Z
publishedAt: 2023-01-31T19:36:58.933Z
firstPublishedAt: 2023-01-31T19:36:58.933Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: shipping-preview-wrongly-displaying-the-date-when-its-scheduled-delivery
kiStatus: Backlog
internalReference: 743774
---

## Summary


Checkout UI converts the time using the computer's time zone displaying the delivery date incorrectly in shipping-preview (cart) when items are scheduled delivery.


##

## Simulation



- Configure a scheduled delivery window to start at 0h
- Set up a time zone that subtracts from UTC+00:00 in the computer
- You will see that the date shown is the day before


##

## Workaround


Configure scheduled delivery windows during the daytime, such as business hours since it's the most common time for deliveries




