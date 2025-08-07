---
title: "Expiration date of Special condition is not deleted"
id: 4UuFAcukNrutyJOthTPxAA
status: PUBLISHED
createdAt: 2022-03-21T19:49:55.408Z
updatedAt: 2022-11-25T22:08:07.423Z
publishedAt: 2022-11-25T22:08:07.423Z
firstPublishedAt: 2022-03-21T19:49:55.888Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: expiration-date-of-special-condition-is-not-deleted
locale: en
kiStatus: Backlog
internalReference: 547046
---

## Summary


When the client configures a Special Condition for a period of time and wants to delete this configuration, only the period is deleted, the recurrence of this configuration is not deleted. This means that even if the Payment Condition scheduling configuration is removed, the `dateIntervals` field still continues to index and stops indexing the Payment Rule.



## Simulation



1. Set up a new Payment Condition and add the Expiration date and Recurrence from Special Condition.
2. Use the Get Rules by Id endpoint to see the fields `beginDate`, `endDate` and `dateIntervals`. They both are filled.
3. Then, delete the Expiration date and Recurrence from Special Condition configuration.
4. Use the Get Rules by Id endpoint to see the fields `beginDate`, `endDate` and `dateIntervals`. The field `dateIntervals` will still be filled with the information previously deleted.



## Workaround


A possible workaround would be duplicate the Payment Condition, so the new rule will not have the `dateIntervals` setup. So the first Payment Condition can be deleted.

