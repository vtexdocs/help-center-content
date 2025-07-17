---
title: "Delay in canceling the order in Marketplace"
id: 6I4B9cHxgnoeDMft09HrHg
status: PUBLISHED
createdAt: 2025-06-11T13:04:25.568Z
updatedAt: 2025-06-18T12:17:35.990Z
publishedAt: 2025-06-18T12:17:35.990Z
firstPublishedAt: 2025-06-11T13:05:06.866Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delay-in-canceling-the-order-in-marketplace
locale: en
kiStatus: Backlog
internalReference: 1242813
---

## Summary


This KI describes the scenario where the Marketplace or Fulfillment requests the cancellation of an order. This cancellation is accepted in fulfillment; however, it can take a few minutes or even longer in some cases for the status to be updated in the Marketplace. This delay occurs because there are multiples writes of the order in S3 (database) during the cancellation flow, changing the status from "cancel" to "canceled" and updating other cancellation information. Given the current implementation of the cancellation flow, which operates asynchronously without a lock, this behavior can occur, and inconsistencies might arise in the workflow interactions. For instance, the status may go to "canceled" but then revert to "cancel" due to the lack of locking in the operations. Consequently, this could affect the feed/hook since there would be two notifications of the canceled status.

However, this scenario is rare and does not have a significant impact because there are retries in the workflow that ensure a certain level of consistency; nonetheless, it may take a while—for the information to be updated.


##

## Simulation


It is not possible to simulate this scenario, as it does not always occur!


##

## Workaround


We do not have a workaround for this scenario, so the workflow retry is necessary to correct the status!





