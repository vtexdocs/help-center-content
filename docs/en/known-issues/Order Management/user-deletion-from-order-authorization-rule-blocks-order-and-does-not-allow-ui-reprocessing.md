---
title: 'User deletion from Order Authorization rule blocks order and does not allow UI reprocessing'
id: 3OW5OoBG6OYW8mHDcZMoOi
status: PUBLISHED
createdAt: 2022-10-27T17:40:30.149Z
updatedAt: 2022-11-25T22:00:52.887Z
publishedAt: 2022-11-25T22:00:52.887Z
firstPublishedAt: 2022-10-27T17:40:30.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: user-deletion-from-order-authorization-rule-blocks-order-and-does-not-allow-ui-reprocessing
locale: en
kiStatus: Backlog
internalReference: 623376
---

## Summary


When we delete or lose access to the user linked to an order approval rule, this order cannot be reprocessed so that a new user can approve the order and with that the order remains pending approval.



## Simulation



- Create an approval rule link to an email
- Create an order that fits the rule created in the previous step
- Delete this email from the store's user base.
- Add a new user to the rule where the deleted user is.

At this point the order will not have its rule updated.



## Workaround



There is no workaround for this scenario;

