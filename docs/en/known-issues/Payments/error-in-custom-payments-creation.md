---
title: 'Error in Custom Payments creation'
id: 28jwG2jyT5FkSTbb85KlLX
status: PUBLISHED
createdAt: 2024-03-06T14:19:49.398Z
updatedAt: 2024-07-01T18:49:29.959Z
publishedAt: 2024-07-01T18:49:29.959Z
firstPublishedAt: 2024-03-06T14:19:50.201Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: error-in-custom-payments-creation
locale: en
kiStatus: No Fix
internalReference: 995110
---

## Summary


Merchants can experience a bug when creating a Custom Payment, after filling everything and hit save the message `Custom payment was configured successfully!` appears but the creation actually failed (it doesn't appear in UI).


##

## Simulation


Go to Custom Payments tab and configure any payment rule, you may experience the issue above.


##

## Workaround


The only workaround would be retrying the creation until it appears in UI.





