---
title: "Partial scheduled delivery window selection for the same SLA affecting the purchase flow"
id: 1xkpnp0vxR0O8sJYARcFJF
status: PUBLISHED
createdAt: 2022-08-11T18:41:25.906Z
updatedAt: 2022-11-25T21:50:45.960Z
publishedAt: 2022-11-25T21:50:45.960Z
firstPublishedAt: 2022-08-11T18:41:26.449Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: partial-scheduled-delivery-window-selection-for-the-same-sla-affecting-the-purchase-flow
locale: en
kiStatus: Backlog
internalReference: 627261
---

## Summary


Changing the address may change the shipping options for an item, and naturally, it may remove the delivery window selection for scheduled deliveries if the options are different.

In a cart with multiple items, when this change happens only for specific items in a way that they stay on the same SLA but not all of them with applied delivery windows, inconsistent behaviors may happen.

Some known side effects:

If the first item of a same shipping method has the delivery window selected but other items no, the user won't be able to know about it at the same time that it won't be possible to go ahead on the purchase flow – due to items under a scheduled delivery, but without selecting their delivery window.

If the first item hasn't their delivery window selected, but any other has, the frontend layer may be calculating a wrong shipping value. This value will be sent to the API layer, which always will respond with a different/correct value. The difference between those values will generate a loop of requests while the delivery window isn't selected, thus calculating the right values from the frontend.



## Simulation



- create a cart with three items, also choosing their shipping options and delivery windows
  - item 1, SLA A
  - item 2, SLA A
  - item 3, SLA B
- change to an address that'll put item 1 or 2 to a different SLA
- go back to the previous address, re-enabling that item to the SLA A
- at this moment, the changed item won't have a delivery window, but the other will, which generates the reported issues



## Workaround


N/A

