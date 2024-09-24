---
title: 'Promotion usage counter not working as expected'
id: 7iamjGsN4PuODQ359OsopW
status: PUBLISHED
createdAt: 2024-09-02T13:01:22.361Z
updatedAt: 2024-09-02T13:01:23.422Z
publishedAt: 2024-09-02T13:01:23.422Z
firstPublishedAt: 2024-09-02T13:01:23.422Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-usage-counter-not-working-as-expected
locale: en
kiStatus: Backlog
internalReference: 1090367
---

## Summary


The promotion usage counter is not working as expected, leading to a loss of control over the number of times a promotion is applied. The issue arises because the Checkout system is responsible for notifying the use of a promotion, while the Order Management System is responsible for informing the cancellation, which should decrease the usage count. However, these systems send different notifications, causing the counter to malfunction and creating more orders with the promotion applied than intended.


##

## Simulation



1. Create a promotion with a specific usage limit.
2. Apply the promotion to multiple orders via the Checkout system.
3. Cancel some of these orders through the OMS.
4. Observe that the promotion usage counter can allow more orders created as intended.

Currently, it may not always be possible to reproduce this issue consistently, as the exact root cause has not yet been determined.


##

## Workaround


N/A





