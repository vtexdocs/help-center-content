---
title: 'Wrong values in recipients of a transaction split with partial cancellation.'
id: 5srb8YPqWIn5D5ZpJVs1u7
status: PUBLISHED
createdAt: 2022-03-03T18:38:02.299Z
updatedAt: 2023-05-25T15:06:30.437Z
publishedAt: 2023-05-25T15:06:30.437Z
firstPublishedAt: 2022-03-03T18:38:02.666Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: wrong-values-in-recipients-of-a-transaction-split-with-partial-cancellation
locale: en
kiStatus: Backlog
internalReference: 489481
---

## Summary


In a Payout Split scenario, when there is a partial cancellation before the capture, we do not change the recipient fields so that the values for when each participant will receive are different from the correct one, that is, the values within the settlement recipients appear as if there had been no partial cancellation.

##


## Simulation


1. Make a purchase with a seller's product on a marketplace.
2. Make a partial cancellation after approval but before capture.
3. Check that the values in the recipients within the settlement request are the original values, not counting the partial cancellation




## Workaround


There is no workaround.

